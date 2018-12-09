# occ-react-component
Standalone Starter React Component for [Oracle Commerce Cloud](https://cloud.oracle.com/en_US/commerce-cloud "Oracle Commerce Cloud")

- [React 16](https://reactjs.org/ "React")
- [Webpack 4](https://webpack.js.org/ "Webpack") 
- [Babel 7](https://babeljs.io/ "Babel 7")
- [eslint](https://eslint.org/ "Eslint")

This package will allows [OCC](https://docs.oracle.com/en/cloud/saas/commerce-cloud/index.html "Oracle Commer Cloud Portal") developers to develop [React 16](https://reactjs.org/ "React") JSX Components with real time compilation to [Require.js AMD OCC modules](https://docs.oracle.com/cd/E97801_01/Cloud.18C/WidgetDev/html/index.html "Developing Widgets").
The ReactApplication is compiled to `dist/` preserving the normal folder structure for a widget.
Of course this can all be configured in webpack.config.js

### Dependencies
Install the OCC React global application widget.
[occ-react-component](https://github.com/leedium/occ-react-global/blob/master/README.md "occ-react-component")


### Installation
```
npm i
```

### Instructions
/app/js/app/App.jsx is your Main react application file.  Use this as your staring point.
The inject props include the widget model, and all your defined dependencies.


### Build
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

## Development Process
*Install the component in OCC and then use a proxy like [Charles](https://www.charlesproxy.com/) to map to your bundle(s) while the watcher is running so you can see changes immediately upon refresh.

## Configuration
Add all [OCC](https://docs.oracle.com/en/cloud/saas/commerce-cloud/index.html "Oracle Commer Cloud Portal") [require.js](https://requirejs.org/) dependencies required for your app in `componentConfig.js`
These will be shimed and made available at runtime to your application.

#### app/js/index.jsx
Main [OCC](https://docs.oracle.com/en/cloud/saas/commerce-cloud/index.html "Oracle Commer Cloud Portal") widget entry file.  This is the react equivalent to the main OCC widget file

#### dist/widget
React component will compile to this folder preserving the normal widget structure.
Add normal localized resource files here.  Template/layour files reference the element you will use to render your React application. Make sure you update this.


#### Credits
Thanks [@bholt](https://github.com/btholt) for the react starter pak (always saving me time).
