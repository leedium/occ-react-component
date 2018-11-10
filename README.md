# occ-react-component
Standalone Starter [React](https://reactjs.org/ "React") Component for [Oracle Commerce Cloud](https://cloud.oracle.com/en_US/commerce-cloud "Oracle Commerce Cloud")

##### OCC version 16+

- [React 16](https://reactjs.org/ "React")
- [Webpack 4](https://webpack.js.org/ "Webpack") 
- [Babel 7](https://babeljs.io/ "Babel 7")
- [eslint](https://eslint.org/ "Eslint")

This package allows [OCC](https://docs.oracle.com/en/cloud/saas/commerce-cloud/index.html "Oracle Commer Cloud Portal") developers to develop [React 16](https://reactjs.org/ "React") JSX Components real time compilation to [Require.js AMD OCC modules](https://docs.oracle.com/cd/E97801_01/Cloud.18C/WidgetDev/html/index.html "Developing Widgets").
The Application is compiled to dist/bundle preserving the normal folder structure for a widget.
Of course this can all be configured in webpack.config.js

### Installation

1. Install the OCC React global application widget.
[occ-react-component](https://github.com/leedium/occ-react-global/blob/master/README.md "occ-react-component")

2.  Install the dependencies

```
npm i
```

### Instructions

dev build
```
npm run build:dev
```

prod build
```
npm run build:prod
```

watcher
```
npm run watch
```

## Configuration

Add all [OCC](https://docs.oracle.com/en/cloud/saas/commerce-cloud/index.html "Oracle Commer Cloud Portal") [require.js](https://requirejs.org/) dependencies required for your app in componentConfig.js
These will be shimed and made available at runtime to your application.

#### app/js/index.jsx

Main [OCC](https://docs.oracle.com/en/cloud/saas/commerce-cloud/index.html "Oracle Commer Cloud Portal") widget entry file.  This is the react equivalent to the main OCC widget file


#### dist/widget

React component will compile to this folder preserving the normal widget structure.
Add normal localized resource files here.




