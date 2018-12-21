# occ-react-component
Standalone Starter React Component for [Oracle Commerce Cloud](https://cloud.oracle.com/en_US/commerce-cloud "Oracle Commerce Cloud")


<img src="https://github.com/leedium/occ-react-component/blob/develop/output.gif?raw=true" width="800px" alt="Oracle Commerce Cloud React Component"/>

#### version
1.7.2

#### change log
1.7.2
  - Added React Hot Module Reload
  - updated babelrc, let webpact do import/export/amd transpiling

1.6.2
  - added examples for styled-components

1.5.2
  - added more webpack loader examples
  - css-loader, style-loader, postcss, base64 helpers

1.4.2
  -  updated to react 16.6.3
  -  Dependency optimizations

#### React version:
16.6.3

Uses React [flow](https://flow.org/en/docs/frameworks/react/ "React Flow")

### Included
- [React Hot Module Reloader](https://github.com/gaearon/react-hot-loader)
- [React 16](https://reactjs.org/ "React")
- [Webpack 4](https://webpack.js.org/ "Webpack")
- [Babel 7](https://babeljs.io/ "Babel 7")
- [eslint](https://eslint.org/ "Eslint")

This package will allow [OCC](https://docs.oracle.com/en/cloud/saas/commerce-cloud/index.html "Oracle Commer Cloud Portal") developers to create [React 16](https://reactjs.org/ "React") JSX Components
with real time compilation to [Require.js AMD OCC modules](https://docs.oracle.com/cd/E97801_01/Cloud.18C/WidgetDev/html/index.html "Developing Widgets").
The React Application is compiled to `dist/` preserving the normal folder structure for a widget.
The component wraps the knockout.js view model and injects both the model and dependencies into each React component allowing developers access to best of both worlds, "old" and new.
Of course this can all be configured in webpack.config.js

Hot Module Reload(HRM) which will allow you to update the component in real-time without page refreshes
works by way of proxy.  I use [Charles](https://www.charlesproxy.com/):
Please see Proxy configuration for charles settings.



### Example Webpack Plugins / Modules
- [styled-components](https://www.styled-components.com/ "ES6 Styled Components")
- [style-loader](https://github.com/webpack-contrib/style-loader) - (injects styles in dom)
- [css-loader](https://github.com/webpack-contrib/css-loader) (css-modules, css compilation)
- [postcss-loader](https://github.com/postcss/postcss-loader) (css-processing)
- [postcss-image-sizes](https://github.com/s0ber/postcss-image-sizes) (adds image sizes to the css class that references images)
- [base64-inline-loader](https://github.com/monolithed/base64-inline-loader#readme) (converts image paths to base64 references)

This example uses styled-components which helps to organize, encapsulate, and associate styling to the
actual component.  This reduces load/reques of files, avoids class name collisions, improved
maintenance


### Dependencies
Install the OCC React global application widget.
[occ-react-global](https://github.com/leedium/occ-react-global "occ-react-global")

There are no production level dependencies for React out of the box as they are included in the global component.
Feel free to add more to the global and your component application.



### Installation
```
npm i
```

### Instructions
/app/js/app/App.jsx is your Main react application file.  Use this as your staring point.
The inject props include the widget model, and all your defined dependencies.


### Development
```
$ npm run dev
```
After you install and create an instance in OCC, follow these instructions to
utilize Hot Module Reload via proxy
#### Proxy configuration
I personally use Charles, but you should be able to use any web proxy that supports mapping files
both locally and remotely. The webpack dev server is configured to run https on localhost:9000 so you will need to configure
your mappings as follows.

Im my example I'm using a remote mapping to the webpack-dev-server.  The `*` wildcards will capture
all requests to the widget js folder.  You can change this to be more specific.

<img width="300px" src ="https://github.com/leedium/occ-react-component/blob/develop/proxy-mappings.png?raw=true" alt="Charles proxy mappings" />

Mappings

| occ serverInstance request ( {env}.oracleoutsourcing.com)  | Proxy mapping  (localhost:9000)|
| ------------- | ------------- |
| \*{WIDGET_NAME}/js/\* | /file/widget/{WIDGET_NAME}/js/

* Ideally you want all the `file/widget/{WIDGET_NAME}/js` OCC requests to map to `localhost:9000/file/widget/{WIDGET_NAME}/js`

### Build
dev build
```
$ npm run build:dev
```

prod build
```
$ npm run watch
```

## Configuration
Add all [OCC](https://docs.oracle.com/en/cloud/saas/commerce-cloud/index.html "Oracle Commer Cloud Portal") [require.js](https://requirejs.org/) dependencies required for your app in `componentConfig.js`
These will be shimed and made available at runtime to your application.
Also update the react version.  This should be directly in line with the [occ-react-global](https://github.com/leedium/occ-react-global "occ-react-global") version

#### app/js/index.jsx
Main [OCC](https://docs.oracle.com/en/cloud/saas/commerce-cloud/index.html "Oracle Commer Cloud Portal") widget entry file.  This is the react equivalent to the main OCC widget file

#### dist/widget
React component will compile to this folder preserving the normal widget structure.
Add normal localized resource files here.  Template/layout files reference the element you will use to render your React application. Make sure you update this.


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
