/* eslint import/no-unresolved: [2, { ignore: ['\.img$'] }],  no-unused-vars:0, prefer-arrow-callback:0 */

import React from 'react';
import ReactDOM from 'react-dom';

//
import Application from "./app/App";

define(["knockout"], function def (ko) {
  let App;
  return {
    inited: false,
    onLoad(model){
      App = <Application />;
    },
    beforeAppear(model) {
    },
    onRender() {
      console.log(this, ko, document.getElementById('occReactComponent'));
      ReactDOM.render(App, document.getElementById('occReactComponent'));
    }
  }
});

