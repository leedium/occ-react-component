/* eslint import/no-unresolved: [2, { ignore: ['\.img$'] }],  no-unused-vars:0, prefer-arrow-callback:0 */

import React from 'react';
import ReactDOM from 'react-dom';

//
import Application from "./app/App";
import occProvider from './app/occProvider/OccProvider';

define([
  "knockout",
  "jquery",
  "pubsub",
  "notifier",
  "ccConstants",
  ], function def (ko, $, pubsub, notifier, CCConstants) {
  let App;
  return {
    inited: false,
    onLoad(model){
      const occDependencies = {
        ko, $, pubsub, notifier, CCConstants
      };
      App = occProvider(Application,{
        model,
        occDependencies
      })
    },
    beforeAppear(model) {
    },
    onRender() {
      ReactDOM.render(<App />, document.getElementById('componentId'));
    }
  }
});

