# occ-react-component
Standalone Starter [React](https://reactjs.org/ "React") Component for [Oracle Commerce Cloud](https://cloud.oracle.com/en_US/commerce-cloud "Oracle Commerce Cloud")

##### OCC version 16+

- [React 16](https://reactjs.org/ "React")
- [Webpack 4](https://webpack.js.org/ "Webpack") 
- [Babel 7](https://babeljs.io/ "Babel 7")
- [eslint](https://eslint.org/ "Eslint")

This package will allows [OCC](https://docs.oracle.com/en/cloud/saas/commerce-cloud/index.html "Oracle Commer Cloud Portal") developers to develop [React 16](https://reactjs.org/ "React") JSX Components with real time compilation to [Require.js AMD OCC modules](https://docs.oracle.com/cd/E97801_01/Cloud.18C/WidgetDev/html/index.html "Developing Widgets").
The Application is compiled to `dist/` preserving the normal folder structure for a widget.

Of course this can all be configured in webpack.config.js

The component wraps the knockout.js view model and injects both the model and dependencies into each React component allowing developers access to best of both worlds, "old" and new.

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

#### Entry File: app/js/index.jsx

Main [OCC](https://docs.oracle.com/en/cloud/saas/commerce-cloud/index.html "Oracle Commer Cloud Portal") widget entry file.  This is the react equivalent to the main OCC widget file



#### Published folder: dist/widget

React component will compile to this folder preserving the normal widget structure.
Add normal localized resource files here.  Template files reference the element you will use to render your React application.

#### Credits
Thanks [@bholt](https://github.com/btholt) for the react starter pak.


#### Related
Check out the [React Solution for Oracle Commerce cloud](https://github.com/leedium/occ-react-solution "Oracle Commerce Cloud React Solution") for a working proof on concept of how to use React as a quasi headless UI framework integrated into the OCC Admin. 


<br/><br/><br/>
### Disclaimer of Warranty.

  THERE IS NO WARRANTY FOR THE PROGRAM, TO THE EXTENT PERMITTED BY
APPLICABLE LAW.  EXCEPT WHEN OTHERWISE STATED IN WRITING THE COPYRIGHT
HOLDERS AND/OR OTHER PARTIES PROVIDE THE PROGRAM "AS IS" WITHOUT WARRANTY
OF ANY KIND, EITHER EXPRESSED OR IMPLIED, INCLUDING, BUT NOT LIMITED TO,
THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR
PURPOSE.  THE ENTIRE RISK AS TO THE QUALITY AND PERFORMANCE OF THE PROGRAM
IS WITH YOU.  SHOULD THE PROGRAM PROVE DEFECTIVE, YOU ASSUME THE COST OF
ALL NECESSARY SERVICING, REPAIR OR CORRECTION.
