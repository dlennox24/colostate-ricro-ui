# Components

Documentation for available components.

**Note:** not all documentation is contained here. More documentation can be found in the repository README.

#### Table of Contents
- [AppFrame](#appframe)
- [CloseableDialog](#closeabledialog)
- [Code](#code)
- [Committees](#committees)
  - [Committee Avatar](#committee-avatar)
  - [Committee Chip](#committee-chip)
- [HttpError](#httperror)
- [IconSnackbarContent](#iconsnackbarcontent)
- [MarkdownParser](#markdownparser)
- [UserProfile](#userprofile)

## AppFrame

#### Props
*\* Required*
| Name | Type | Default | Description |
| ---- | ---- | ------- | ----------- |
| children | `node` | | Children should be a single `react-router` `<Route>` component or multiple `<Route>`s wrapped with a `<React.Fragment>`. Injected into `react-router`'s `<Switch>`.
| classes* | `object` | | Imported via Material UI's `withStyles()`
| config | `object` | [{default}](#appframe.config.default) | Config file for overriding default configs. Recommended to you use `createConfig()` from utils.
| disableGutters | `bool` | | Removes padding around the content container
| reducers | `object` | [{default}](#appframe.reducers.default) | Redux reducers. Automatically combines with library reducers using Redux's `combineReducers()`. Reducers with the names `user` and `config` are protected as they are already in use and will be overwritten.
| reduxMiddleware | `func` | [default()](#appframe.reduxMiddleware.default) | [Middleware for Redux](https://redux.js.org/advanced/middleware)

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

## CloseableDialog
## Code
## Committees
## Committee Avatar
## Committee Chip
## HttpError
## IconSnackbarContent
## MarkdownParser
## UserProfile