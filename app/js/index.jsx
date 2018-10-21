/* eslint import/no-unresolved: [2, { ignore: ['\.img$'] }],  no-unused-vars:0, prefer-arrow-callback:0 */

/*
 * Copyright (c) 2018 LEEDIUM.
 * This file is subject to the terms and conditions
 * defined in file 'LICENSE.txt', which is part of this
 * source code package.
 */

/**
 * @project occ-react-component
 * @file index.jsx
 * @company leedium
 * @createdBy davidlee
 * @contact david@leedium.com
 * @dateCreated 21/10/2018
 * @description Main entry file that maps occ model and dependencies to the
 *              React component props
**/


import React from 'react';
import ReactDOM from 'react-dom';

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
    onLoad (model) {
      const occDependencies = {
        ko, $, pubsub, notifier, CCConstants
      };
      App = occProvider(Application, {
        model,
        occDependencies
      })
    },
    beforeAppear (model) {
    },
    onRender () {
      ReactDOM.render(<App/>, document.getElementById('adyenPaymentDetails'));
    }
  }
});

