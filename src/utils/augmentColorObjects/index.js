/**
 * Args:
 *    ["keys"]: string array of current level of object keys
 *    ["path"]: string array of path from top level object. Order matters: Left -> Right
 *
 * Pops the correct amount of keys off the path array to go up to the next object. Helper
 * funciton for augmentColorObjects()
 *
 */
const goToParentKeyInPath = (keys, path) => {
  if (keys.some(key => path.includes(key))) {
    path = path.splice(0, path.indexOf(path.filter(key => keys.indexOf(key) !== -1)[0]));
  }
  /**
   * spread into an empty array to copy elements since they are passed by reference
   * must to do this to allow for recursion
   */
  return [...path];
};

/**
 * Args:
 *  {
 *    {obj}: top level object to search for colors objects to augment.
 *    [path]?: optional. path from top level object. ordered left to right
 *    augmentColorFunc(): MUI's theme.palette.augmentColor function
 *  }
 *
 * Note: all arguments are bundled in an object to leverage named parameters
 *
 * Recursively searches for lowest level objects that only have a main color
 * and are children of the any of the keys specified in the `modKeys` array.
 * Other top level keys are ignored and not traversed. Lowest level objects must
 * have a `main` key with a color valid specified to allow for MUI's augmentColor
 * funciton to work.
 *
 * Modifies the object that is passed.
 */
const augmentColorObjects = ({ obj, path = [], augmentColorFunc, modKeys = [] }) => {
  const keys = Object.keys(obj);
  path = goToParentKeyInPath(keys, path);
  /**
   * When augmentColor is called it modifies the passed object to have multiple
   * keys in addition to `main` such as `light`, `dark`, `contrastText`, etc.
   * No need to do the dive checking and updating if it already has happened
   */
  if (!keys.includes('light')) {
    /**
     * If there is a main key then we've reached the bottom and need to update
     * the object and recurse back out.
     */
    if (keys.includes('main')) {
      obj = augmentColorFunc(obj);
    } else {
      keys.map(subObj => {
        /**
         * Ensure top level object keys are the ones we want to parse or it's
         * already in the path as a parent
         * There are many objects in the theme.palette that we don't need to update
         */
        if (modKeys.includes(subObj) || modKeys.some(key => path.includes(key))) {
          path = goToParentKeyInPath(keys, path);
          path.push(subObj);
          return augmentColorObjects({ obj: obj[subObj], path, augmentColorFunc, modKeys });
        }
        // Ignores all other objects we don't care about within the top level object
        return null;
      });
    }
  }
  return obj;
};

export default augmentColorObjects;
