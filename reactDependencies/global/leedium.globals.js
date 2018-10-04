var REACT_PATH = "https://unpkg.com/react@16.5.2/umd/react.production.min";
var REACT_DOM =
  "https://unpkg.com/react-dom@16.5.2/umd/react-dom.production.min";
var REDUX = "https://cdnjs.cloudflare.com/ajax/libs/redux/4.0.0/redux.min.js";
requirejs.config({
  paths: {
    react: REACT_PATH,
    "react-dom": REACT_DOM,
    redux: REDUX
  }
});
define([
  "https://unpkg.com/react@16.5.2/umd/react.production.min",
  "https://unpkg.com/react-dom@16.5.2/umd/react-dom.production.min"
], function(react, reactDOM) {
  return {};
});
