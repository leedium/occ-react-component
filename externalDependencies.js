const REACT_VERSION = "16.6.3";
const COMPONENT_NAME = "occReactComponent";

exports.reactVersion = REACT_VERSION;
module.exports = {
  publicPath: `file/widget/${COMPONENT_NAME}/js/`,
  componentName: COMPONENT_NAME,
  dependencies: {
    knockout: "knockout",
    jquery: "jquery",
    pubsub: "pubsub",
    ccConstants: "ccConstants",
    ccRestClient: "ccRestClient",
    navigation: "navigation",
    notifier: "notifier",
    ccLogger: "ccLogger",
    CCi18n: "CCi18n",
    ccNumber: "ccNumber",
    currencyHelper: "currencyHelper",
    numberFormatHelper: "numberFormatHelper",
    "pageLayout/product": "pageLayout/product",
    "ojs/ojcore": "ojs/ojcore",
    "ojs/ojvalidation": "ojs/ojvalidation",
  }
};
