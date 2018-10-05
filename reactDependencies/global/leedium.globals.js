var REACT_PATH = "https://unpkg.com/react@16.5.2/umd/react.production.min";
var REACT_DOM =
  "https://unpkg.com/react-dom@16.5.2/umd/react-dom.production.min";
requirejs.config({
  paths: {
    react: REACT_PATH,
    "react-dom": REACT_DOM
  }
});
define([REACT_PATH, REACT_DOM], function(react, reactDOM, redux) {
  return {};
});
