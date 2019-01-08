## change log
2.1.1
  - node version buxfix [issue](https://github.com/leedium/occ-react-component/issues/45) 
  
2.1.0
  - Adding Jest, Enzyme test support

2.0.0
  - Added uglify/minify to dynamically loaded chunks
  - Tested dynamic module importing (React.Lazy, React.Suspense)
  \* Please note, react-hot-reload does not nicely with [@babel/plugin-proposal-class-properties](https://babeljs.io/docs/en/babel-plugin-proposal-class-properties) so use normal class property/method structures
  - Refactored to use [DLLPlugin](https://webpack.js.org/plugins/dll-plugin/ "Webpack DLLPlugin")

1.7.3
  - ccRestClient and ProductData examples
  - moved styled-components to peer dependency
  - replaced all css-loader implementations for [styled-components](https://www.styled-components.com/ "ES6 Styled Components")
  - fix origin host bug on some osx systems

1.7.2
  - Added [React Hot Module Reload](https://github.com/gaearon/react-hot-loader)
  - updated babelrc

1.6.2
  - added examples for styled-components

1.5.2
  - added more webpack loader examples
  - css-loader, style-loader, postcss, base64 helpers

1.4.2
  -  updated to react 16.6.3
  -  Dependency optimizations
