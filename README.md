# occ-react-component
Standalone Starter React Component for Oracle Commerce Cloud

- React 16
- Webpack 4
- Babel 7
- eslint

This package will allows OCC developers to develop React Components with JSX 
with real time compilation to Require.js AMD OCC modules.
The Application is compiled to dist/bundle preserving the normal folder structure for a widget.
Of course this can all be configured in webpack.config.js

### Installation

1. Install the OCC React global application widget.
https://github.com/leedium/occ-react-global/blob/master/README.md

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

Add all OCC require.js dependencies required for your app in componentConfig.js
These will be shimed and made available at runtime to your application.

#### app/js/index.jsx

Main OCC widget entry file.  This is the react equivalent to the main OCC widget file


#### dist/widget

React component will compile to this folder preserving the normal widget structure.
Add normal localized resource files here.




