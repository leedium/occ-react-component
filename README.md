# occ-react-component
Standalone Starter React Component for [Oracle Commerce Cloud](https://cloud.oracle.com/en_US/commerce-cloud "Oracle Commerce Cloud")  
## <b>Must</b> be used  with [occ-shared-resource-bundles](https://github.com/leedium/occ-shared-resource-bundles "occ-shared-resource-bundles")

<img src="https://github.com/leedium/occ-react-component/blob/master/graphics/output.gif?raw=true" width="800px" alt="Oracle Commerce Cloud React Component"/>

## About
This component allows [OCC](https://docs.oracle.com/en/cloud/saas/commerce-cloud/index.html "Oracle Commer Cloud Portal") developers to create and update [React 16](https://reactjs.org/ "React") JSX applications and components as standard [widgets](https://docs.oracle.com/cd/E97801_01/Cloud.18C/WidgetDev/html/index.html. "Developing Widgets") in real time.
The React Application is compiled to `file/widget` preserving the request path folder structure for an occ widget.
The component wraps the native knockout.js view model and injects both the model and developer defined dependencies into each React component allowing developers access to best of both worlds, "old" and new.  Of course, the build can be configured and with the state of the React eco system, the possibilities are endless.
Hot Module Reload(HRM) allows developers to update component in real-time without page refreshes
works by way of code injection via sockets. To use this in the OCC instance you need a proxy. I use [Charles](https://www.charlesproxy.com/), but I'm sure any proxy which allows you to map and wildcard files will work.  Please see Proxy configuration for charles settings.

Component: 2.3.2
React: 16.7.0
OCC: 18.6 (will work with previous versions)  


[CHANGELOG](https://github.com/leedium/occ-react-component/blob/master/CHANGELOG.md)


## Status
- ~use shared vendor bundle~
- react-redux example
-  OCC extension deployments scripts
-  ~React.lazy, React.Suspense example (bundle split, dynamic import)~
- ~hot module reload~
- ~styled components example~
- ~base 64 img for css and url-loader example~
- ~update to latest react (16.7.0)~
- ~dependency cleanup~

## Example
Examples includes the following webpack plugins/loaders
- [styled-components](https://www.styled-components.com/ "ES6 Styled Components")
- [style-loader](https://github.com/webpack-contrib/style-loader) - (injects styles in dom)
- [css-loader](https://github.com/webpack-contrib/css-loader) (css-modules, css compilation)
- [postcss-loader](https://github.com/postcss/postcss-loader) (css-processing)
- [postcss-image-sizes](https://github.com/s0ber/postcss-image-sizes) (adds image sizes to the css class that references images)
- [base64-inline-loader](https://github.com/monolithed/base64-inline-loader#readme) (converts image paths to base64 references)

## Dependencies
Install the OCC shared-resource-bundle (application widget).
[occ-shared-resource-bundles](https://github.com/leedium/occ-shared-resource-bundles "occ-shared-resource-bundles")
There are no production level dependencies for React out of the box as they are included in the resource bundle.
Feel free to add more to the global and your component application.


## Installation
```
$ npm i
```

### Configuration
1.  Naturally update occ widget configuration in `/file` as well as the layout sub folder name `/file/widget/{componentName}/layouts/{componentName}Default`
(don't forget to update the id in widget template files with your component's name, and rename all the classes)
```
 <div data-bind="onRender: onRender.bind($data)" id="{componentName}"></div>
```

2.  Update `webpack.config`

`OCC_GLOBAL_FILE_NAME`:  filename of your [occ-shared-resource-bundle](https://github.com/leedium/occ-shared-resource-bundle "occ-shared-resource-bundle") . ex: `react.vendor.min.js`
`COMPONENT_NAME`: name of installed OCC component as defined by file/widget/`{componentName}`
`MAIN_CHUNK_BUNDLE_ID`: Id for the entry bundle.  In most cases you will only have one, but depending on how you configure your chunking, this ID is used to prvent uglification/minification as OCC will perform this.
`PUBLIC_PATH`: DO NOT CHANGE
`externals`:  Mappings to OCC specific require.js dependencies.  ie: (knockout.js, jquery, etc etc...)


In your `/webpack.config.js` update the `dllManifest` variable with the path to where you copied the files. <b>Update only the prefix.</b>
```$xslt
  const dllManifest = require(`./vendorManifest/vendor-${
    isProd ? "prod" : "dev"
  }.json`);
```
You will need the `dev` and `prod` versions as the filenames are postfixed accordingly when built.
These manifest files are generated with [occ-shared-resource-bundle](https://github.com/leedium/occ-shared-resource-bundle "occ-shared-resource-bundles").
See [instructions](https://github.com/leedium/occ-shared-resource-bundles "occ-shared-resource-bundles") on how to set this up.


### Instructions
`app/js/index.jsx` is your entry application file.  Use this as your starting point to modify the widget model, and all your defined occ dependencies.
\* `ReactDOM.render()` is called on the onRender() method of the widget, which is data-bound in the occ widget template.

`/app/js/app/App.jsx` is your working Raect application file. Go Nuts from here!

### Initial Upload
The native OCC widget and combined bundles are located in `file/`.  Create your .zip extension from `file/` to upload to the OCC Admin.

## Development and Workflow
After you install and create a widget instance in OCC, you will need follow these instructions to utilize Hot Module Reloading via proxy.

### 1. Proxy configuration

I personally use Charles, but you should be able to use any web proxy that supports mapping files
both locally and remotely. The webpack dev server is configured to run on `https://localhost:9000` so you will need to configure your proxy mappings.
The file specific mapping with cover the minified file name and point it to the non minified file name "".

Charles file mappings and configurations can be found:
`/charles remote configs`

If Charles is not recording your requests in Mac OSX, plesase follow these [instructions](https://github.com/leedium/occ-react-component/issues/49 "Enable Charles not working in OSX")


### 2.  Start the Webpack Dev Server With Hot Module Reload
```
$ npm run dev
```

## Testing

[Enzyme](https://github.com/airbnb/enzyme "Javascript Testing for React")
[Jest](https://github.com/facebook/jest "Javascript Testing")
[Chai](https://github.com/chaijs/chai) for React Components.
See module documentation for further configurations.

Test

```
$ npm run test
```

Watcher
```
$ npm run test:watch
```

Coverage
```
$ npm run test:coverage
```

Update Snapshot
```
$ npm run test:update
```
## Deployment

#### dev build - with HMR, sourcemaps
```
$ npm run build:dev
```

#### prod build
```
$ npm run build:prod
```

You will need to use the `DCU` to manually deploy the files and supplementary bundles after the first extension installations.
I am currently working on a deployment task which will come in a later version.

## Configuration
Add all proprietory occ dependencies required for your app are referenced as `externals` which you can update in `webpack.config.js` under the `externals` property


## Credits
[nodejs](https://github.com/nodejs/node)  
[webpack 4](https://webpack.js.org/)  
[babel 7](https://github.com/babel/babel)  
[eslint](https://eslint.org/ "Eslint")   
[react flow](https://flow.org/en/docs/frameworks/react/ "React Flow")  
[reactjs](https://github.com/facebook/react/)  
[react-hot-loader](https://github.com/gaearon/react-hot-loader)  
[styled-components](https://github.com/styled-components/styled-components)  
[Oracle DCU](https://docs.oracle.com/cd/E97801_02/Cloud.18D/ExtendingCC/html/s4405usethedcutograbanduploadsourceco01.html)   
Adeel Imran - [Jest-Enzyme](https://medium.freecodecamp.org/how-to-set-up-jest-enzyme-like-a-boss-8455a2bc6d56) test setup and configuration   
Thanks [@bholt](https://github.com/btholt) react inspiration   


## Related
 [occ-shared-resource-bundles](https://github.com/leedium/occ-shared-resource-bundles "occ-shared-resource-bundles")  
 [occ-graphql](https://github.com/leedium/occ-graphql "Express GraphQL implementation")


<br/><br/><br/>
## Disclaimer of Warranty

  THERE IS NO WARRANTY FOR THE PROGRAM, TO THE EXTENT PERMITTED BY
APPLICABLE LAW.  EXCEPT WHEN OTHERWISE STATED IN WRITING THE COPYRIGHT
HOLDERS AND/OR OTHER PARTIES PROVIDE THE PROGRAM "AS IS" WITHOUT WARRANTY
OF ANY KIND, EITHER EXPRESSED OR IMPLIED, INCLUDING, BUT NOT LIMITED TO,
THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR
PURPOSE.  THE ENTIRE RISK AS TO THE QUALITY AND PERFORMANCE OF THE PROGRAM
IS WITH YOU.  SHOULD THE PROGRAM PROVE DEFECTIVE, YOU ASSUME THE COST OF
ALL NECESSARY SERVICING, REPAIR OR CORRECTION.
