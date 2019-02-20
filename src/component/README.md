# Components

Documentation for available components.

**Note:** not all documentation is contained here. More documentation can be found in the repository README.

#### Table of Contents
- [AppFrame](#appframe)
- [CloseableDialog](#closeabledialog)
- [Code](#code)
- [committees](#committees)
  - [CommitteeAvatar](#committee-avatar)
  - [CommitteeChip](#committee-chip)
- [FileDropzone](/FileDropzone/#readme)
- [HttpError](#httperror)
- [IconSnackbarContent](#iconsnackbarcontent)
- [MarkdownParser](#markdownparser)
- [UserProfile](#userprofile)

## AppFrame

### Props

*\* Required*

| Name | Type | Default | Description |
| ---- | ---- | ------- | ----------- |
| children | `node` | | Children should be a single `react-router` `<Route>` component or multiple `<Route>`s wrapped with a `<React.Fragment>`. Injected into `react-router`'s `<Switch>`. |
| classes* | `object` | | Imported via Material UI's `withStyles()` |
| config | `object` | [{default}](#appframeconfigdefault) | Config file for overriding default configs. Recommended to you use `createConfig()` from utils. |
| disableGutters | `bool` | | Removes padding around the content container|
| reducers | `object` | [{default}](#appframereducersdefault) | Redux reducers.  |Automatically combines with library reducers using Redux's `combineReducers()`. Reducers with the name `user` or `config` will be overwritten as those names are already in use and protected. |
| reduxMiddleware | `func` | [default()](#appframereduxMiddlewaredefault) | [Middleware for Redux](https://redux.js.org/advanced/middleware) |

### Defaults

#### AppFrame.config.default
```json
{
   "api": {
      "host": "https://services.ricro.colostate.edu",
      "path": "/api/v3",
      "baseUrl": "https://services.ricro.colostate.edu/api/v3",
      "auth": "/auth/sso/",
      "axios": "{axiosInstance}"
   },
   "app": {
      "name": "App Template - Defaults",
      "basename": "/__dev/cru/v3",
      "hasLogin": true,
      "hasAutoLogin": false,
      "nav": [
         [
            {
               "name": "Apps",
               "icon": "<IconApps />",
               "link": "/",
               "linkComponent": "a"
            },
            "<LoginLogout />",
            {
               "name": "Contact Us",
               "icon": "<IconEmail />",
               "link": "https://vpr.colostate.edu/ricro/contact-us"
            }
         ]
      ]
   },
   "debug": false,
   "defaultState": {},
   "unit": {
      "name": "RICRO",
      "siteHref": "https://vpr.colostate.edu/ricro/",
      "contactHref": "https://vpr.colostate.edu/ricro/contact-us"
   },
   "usedCreateConfigUtil": true
}
```

#### AppFrame.reducers.default
```json
{
  "config": "configReducer",
  "user": "userReducer"
}
```

#### AppFrame.reduxMiddleware.default
```javascript
window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
```

### Example

```jsx
import AppFrame, { createConfig } from 'colostate-ricro-ui';
import React from 'react';
import { Route } from 'react-router-dom';
import config0 from './assets/config0';
import AboutPage from './pages/About';
import CommitteesPage from './pages/Committees';
import HttpErrorPage from './pages/HttpError';
import IconSnackbarContentPage from './pages/IconSnackbarContent';
import TypographyPage from './pages/Typography';
import UserProfilePage from './pages/User';

const App = () => (
  <AppFrame config={createConfig(config0)}>
    <Route exact path="/" component={AboutPage} />
    <Route exact path="/typography" component={TypographyPage} />
    <Route exact path="/committees" component={CommitteesPage} />
    <Route exact path="/http-error/:code" component={HttpErrorPage} />
    <Route exact path="/icon-snackbar-content" component={IconSnackbarContentPage} />
    <Route exact path="/user-profile" component={UserProfilePage} />
  </AppFrame>
);

export default App;
```

## CloseableDialog

### Props

Any props not listed below will be spread to Material UI's `<Dialog>`.

*\* Required*

| Name | Type | Default | Description |
| ---- | ---- | ------- | ----------- |
| children | `any` | | Body of the Dialog |
| classes* | `object` | | Imported via Material UI's `withStyles()` |
| fullScreen* | `bool` | | Imported via Material UI's `withMobileDialog()` |
| header | `string` | '' | Text to put in the header |
| headerColor | `string` | `"primary"` | Passed to Material UI's AppBar in the `color` prop |
| onClose* | `func` | | Function to close the dialog |

### Example

```jsx
import Button from '@material-ui/core/Button';
import DialogContent from '@material-ui/core/DialogContent';
import Typography from '@material-ui/core/Typography';
import { CloseableDialog } from 'colostate-ricro-ui';
import React from 'react';

class ExampleCloseableDialog extends React.Component {
  state = {
    isOpen: false,
  };

  handleToggleOpen = () => {
    this.setState(state => ({
      isOpen: !state.isOpen,
    }));
  };

  render() {
    return (
      <React.Fragment>
        <Button onClick={this.handleToggleOpen}>Open Dialog</Button>
        <CloseableDialog
          header="Example CloseableDialog"
          onClose={this.handleToggleOpen}
          open={this.state.isOpen}
          keepMounted
        >
          <DialogContent>
            <Typography variant="body2" paragraph>
              Dialog Conent
            </Typography>
          </DialogContent>
        </CloseableDialog>
      </React.Fragment>
    );
  }
}
```

## Code

### Props

*\* Required*

| Name | Type | Default | Description |
| ---- | ---- | ------- | ----------- |
| classes* | `object` | | Imported via Material UI's `withStyles()` |
| code* | `string` | | String of code to be highlighted |
| lang | `string` | `"jsx"` | Language to highlight. [View supported languages](https://github.com/FormidableLabs/prism-react-renderer/blob/master/src/vendor/prism/includeLangs.js) |
| theme | `object` | `{vsDarkPlus}` | Theme for the code background and highlighting. More themes available [prism-react-renderer](https://github.com/FormidableLabs/prism-react-renderer#theme)

### Example

```jsx
import { Code } from 'colostate-ricro-ui';
import React from 'react';

const exampleCode = `
(function someDemo() {
  var test = "Hello World!";
  console.log(test);
})();

return () => <App />;`;

const CodeExample = () => <Code source={exampleCode} />;
```

## committees

`committees` is not a react component but rather an object containing all RICRO divisions, their colors, names, abbreviations, and icons. Index by their abbreviations (eg Export Control's is `committees.xc`).

### Example

```jsx
import { committees } from 'colostate-ricro-ui';

console.log(committees.iacuc);

/* Logs
 *
 * {
 *    name: 'Institutional Animal Care and Use Committee',
 *    alias: 'IACUC',
 *    textColor: '#000',
 *    bgColor: red[500],
 *    iconColor: grey[50],
 *    iconBgColor: red[800],
 *    icon: <IconPaw />,
 * }
 *
 */

```

## Committee Avatar

### Props

Any props not listed below will be spread to Material UI's `<Avatar>`.

*\* Required*

| Name | Type | Default | Description |
| ---- | ---- | ------- | ----------- |
| className | `string` | | CSS class to apply to Material UI's `<Avatar>`
| committee* | `string` | | Committee abbreviation (eg `iacuc`). Must be one of the keys in the [{committees}](#committees) object.
| disableTooltip | `bool` | `false` | Disables the Material UI's Tooltip popup
| size | `number` | `1` | Size of the avatar. `1` is 100%. `.2` is 20%.


### Example

```jsx
import { CommitteeAvatar, committees } from 'colostate-ricro-ui';
import React from 'react';

const CommitteesPage = () => {
  return Object.keys(committees).map((committee, i) => (
    <CommitteeAvatar key={committee} size={0.75 * i + 0.75} committee={committee} />
  ));
};
```

## Committee Chip

### Props

Any props not listed below will be spread to Material UI's `<Chip>`.

*\* Required*

| Name | Type | Default | Description |
| ---- | ---- | ------- | ----------- |
| classes* | `object` | | Imported via Material UI's `withStyles()` |
| committee* | `string` | | Committee abbreviation (eg `iacuc`). Must be one of the keys in the [{committees}](#committees) object. |

### Example

```jsx
import { CommitteeChip, committees } from 'colostate-ricro-ui';
import React from 'react';

const CommitteesPage = () => {
  return Object.keys(committees).map((committee, i) => (
    <CommitteeChip key={committee} size={0.75 * i + 0.75} committee={committee} />
  ));
};
```

## HttpError

### Props

*\* Required*

| Name | Type | Default | Description |
| ---- | ---- | ------- | ----------- |
| classes* | `object` | | Imported via Material UI's `withStyles()` |
| code |  `number` | `404` | HTTP Error code number. Valid options: `401`, `403`, `404`, `500` |
| config* | `object` | | Imported via redux state. No need to pass this. |
| linkedButton | `node` | | Override button displayed on error page. |
| subheader | `node` | | Override the subheader displayed on the error page.|

### Example

```jsx
import { HttpError } from 'colostate-ricro-ui';
import React from 'react';

const HttpErrorExample = () => (
  <React.Fragment>
    <HttpError code={500} />
  </React.Fragment>
);
```

## IconSnackbarContent

### Props

Any props not listed below will be spread to Material UI's `<SnackbarContent>`.

*\* Required*

| Name | Type | Default | Description |
| ---- | ---- | ------- | ----------- |
| classes* | `object` | | Imported via Material UI's `withStyles()` |
| className | `string` | | className to be added to Material UI's `<SnackbarContent>` |
| disableAction | `bool` | | Remove the close action |
| disableIcon | `bool` | | Remove the icon |
| icon | `func` | | Icon for the snackbar. |
| message | `node` | | Message of the snackbar |
| onClose | `func` | | Function to close the snackbar |
| variant | `string` | `"default"` | Type of snackbar. Options are `"default"`, `"primary"`, `"secondary"`, `"success"`, `"warning"`, `"error"`, `"info"` |

### Example

```jsx
import Portal from '@material-ui/core/Portal';
import Snackbar from '@material-ui/core/Snackbar';
import { IconSnackbarContent } from 'colostate-ricro-ui';
import React from 'react';

class ExampleIconSnackbarContent extends React.Component {
  state = {
    isOpen: false,
  };

  handleToggleOpen = () => {
    this.setState(state => ({ isOpen: !state.isOpen }));
  };

  render() {
    return (
      <Portal>
        <Snackbar
          open={this.state.isOpen}
          autoHideDuration={4000}
          onClose={this.handleToggleSnackbarOpen}
        >
          <IconSnackbarContent
            variant="info"
            onClose={this.handleToggleOpen}
            message="Success! You have a new message!"
          />
        </Snackbar>
      </Portal>
    );
  }
}

```

## MarkdownParser

### Props

All props are inherited from [react-markdown](https://github.com/rexxars/react-markdown#options).

### Example

```jsx
import { MarkdownParser } from 'colostate-ricro-ui';
import React from 'React';

const md = '## Example Markdown String';

const MarkdownParserExample = () => (
  <MarkdownParser source={md} />
)
```

## UserProfile

### Props

*\* Required*

*\*\* Conditionally Required*

| Name | Type | Default | Description |
| ---- | ---- | ------- | ----------- |
| onClose** | `func` | | Function to close the dialog. **Only required if `variant` is `dialog`.** |
| open** | `func` | | State of dialog. **Only required if `variant` is `dialog`.** |
| user* | `object` | | User object |
| variant | `string` | `"default"` | Type of UserProfile. Options: `dialog`, `default`.

### Example

```jsx
import { UserProfile } from 'colostate-ricro-ui';
import React from 'react';
import user from './test-data/user';

const UserProfileExampel = () => <UserProfile user={user} />;
```
