/* eslint import/no-unresolved: [2, { ignore: ['\.img$'] }] */

/*
 * Copyright (c) 2018 LEEDIUM.
 * This file is subject to the terms and conditions
 * defined in file 'LICENSE.txt', which is part of this
 * source code package.
 */

import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import Index from "./Index";
import Context from "./Context";
import store from "./redux/store";
import occEventTransformer from "./vendor/occ/eventTransformer";

//  artificially create container
const root = document.createElement("div");
root.id = "root";
document.body.prepend(root);

window.occReact = {};

define([
  "knockout",
  "jquery",
  "pubsub",
  "ccConstants",
  "navigation",
  "ccRestClient",
  "ccLogger",
  "CCi18n",
  "ccNumber",
  "currencyHelper",
  "numberFormatHelper",
  "ojs/ojcore",
  "ojs/ojvalidation"
], (
  ko,
  $,
  PubSub,
  CCConstants,
  navigation,
  ccRestClient,
  logger,
  CCi18n,
  ccNumber,
  currencyHelper,
  numberFormatHelper,
  ojcore,
  ojvalidation
) => ({
  onLoad: widget => {
    const occProps = {
      dependencies: {
        ko,
        $,
        PubSub,
        CCConstants,
        navigation,
        ccRestClient,
        logger,
        CCi18n,
        ccNumber,
        currencyHelper,
        numberFormatHelper,
        ojcore,
        ojvalidation
      },
      model: {
        body: ko.dataFor(document.body),
        widget
      }
    };

    // console.log('CCi18n',CCi18n);
    // console.log('CCi18n.t',CCi18n.t('ns.common:resources.selectShippingMethodText'));
    // console.log('CCi18n.t',CCi18n.t('ns.common:resources.welcome'));
    // console.log('CCi18n.t',CCi18n.t('ns.common:resources.wishlistPageLoadedText'));

    occEventTransformer(occProps);

    $.Topic(PubSub.topicNames.PAGE_VIEW_CHANGED).subscribe(() => {});
    ReactDOM.render(
      <Provider store={store}>
        <Context.Provider value={{ occProps }}>
          <Index pageName="TEST" />
        </Context.Provider>
      </Provider>,
      document.getElementById("root")
    );
  }
}));
