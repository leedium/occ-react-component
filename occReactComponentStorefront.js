/*
 * Copyright (c) 2019 LEEDIUM.
 * This file is subject to the terms and conditions
 * defined in file 'LICENSE.txt', which is part of this
 * source code package.
 */

define(["/file/globals/z4ma.globals.min.js", "knockout", "jquery", "pubsub", "notifier", "ccConstants", "ccRestClient", "ccLogger", "pageLayout/product"], function(__WEBPACK_EXTERNAL_MODULE__4__, __WEBPACK_EXTERNAL_MODULE__13__, __WEBPACK_EXTERNAL_MODULE__14__, __WEBPACK_EXTERNAL_MODULE__15__, __WEBPACK_EXTERNAL_MODULE__16__, __WEBPACK_EXTERNAL_MODULE__17__, __WEBPACK_EXTERNAL_MODULE__18__, __WEBPACK_EXTERNAL_MODULE__19__, __WEBPACK_EXTERNAL_MODULE__20__) {
    return function(e) {
        var t = window.webpackHotUpdate;
        window.webpackHotUpdate = function(e, r) {
            !function(e, t) {
                if (!P[e] || !E[e])
                    return;
                for (var r in E[e] = !1,
                  t)
                    Object.prototype.hasOwnProperty.call(t, r) && (m[r] = t[r]);
                0 == --y && 0 === b && w()
            }(e, r),
            t && t(e, r)
        }
        ;
        var r, o = !0, n = "5f66e08990974ef4a0e1", c = 1e4, a = {}, u = [], i = [];
        function l(e) {
            var t = O[e];
            if (!t)
                return M;
            var o = function(o) {
                return t.hot.active ? (O[o] ? -1 === O[o].parents.indexOf(e) && O[o].parents.push(e) : (u = [e],
                  r = o),
                -1 === t.children.indexOf(o) && t.children.push(o)) : (console.warn("[HMR] unexpected require(" + o + ") from disposed module " + e),
                  u = []),
                  M(o)
            }
              , n = function(e) {
                return {
                    configurable: !0,
                    enumerable: !0,
                    get: function() {
                        return M[e]
                    },
                    set: function(t) {
                        M[e] = t
                    }
                }
            };
            for (var c in M)
                Object.prototype.hasOwnProperty.call(M, c) && "e" !== c && "t" !== c && Object.defineProperty(o, c, n(c));
            return o.e = function(e) {
                return "ready" === s && p("prepare"),
                  b++,
                  M.e(e).then(t, function(e) {
                      throw t(),
                        e
                  });
                function t() {
                    b--,
                    "prepare" === s && (v[e] || k(e),
                    0 === b && 0 === y && w())
                }
            }
              ,
              o.t = function(e, t) {
                  return 1 & t && (e = o(e)),
                    M.t(e, -2 & t)
              }
              ,
              o
        }
        function d(e) {
            var t = {
                _acceptedDependencies: {},
                _declinedDependencies: {},
                _selfAccepted: !1,
                _selfDeclined: !1,
                _disposeHandlers: [],
                _main: r !== e,
                active: !0,
                accept: function(e, r) {
                    if (void 0 === e)
                        t._selfAccepted = !0;
                    else if ("function" == typeof e)
                        t._selfAccepted = e;
                    else if ("object" == typeof e)
                        for (var o = 0; o < e.length; o++)
                            t._acceptedDependencies[e[o]] = r || function() {}
                            ;
                    else
                        t._acceptedDependencies[e] = r || function() {}
                },
                decline: function(e) {
                    if (void 0 === e)
                        t._selfDeclined = !0;
                    else if ("object" == typeof e)
                        for (var r = 0; r < e.length; r++)
                            t._declinedDependencies[e[r]] = !0;
                    else
                        t._declinedDependencies[e] = !0
                },
                dispose: function(e) {
                    t._disposeHandlers.push(e)
                },
                addDisposeHandler: function(e) {
                    t._disposeHandlers.push(e)
                },
                removeDisposeHandler: function(e) {
                    var r = t._disposeHandlers.indexOf(e);
                    r >= 0 && t._disposeHandlers.splice(r, 1)
                },
                check: g,
                apply: j,
                status: function(e) {
                    if (!e)
                        return s;
                    _.push(e)
                },
                addStatusHandler: function(e) {
                    _.push(e)
                },
                removeStatusHandler: function(e) {
                    var t = _.indexOf(e);
                    t >= 0 && _.splice(t, 1)
                },
                data: a[e]
            };
            return r = void 0,
              t
        }
        var _ = []
          , s = "idle";
        function p(e) {
            s = e;
            for (var t = 0; t < _.length; t++)
                _[t].call(null, e)
        }
        var f, m, h, y = 0, b = 0, v = {}, E = {}, P = {};
        function L(e) {
            return +e + "" === e ? +e : e
        }
        function g(e) {
            if ("idle" !== s)
                throw new Error("check() is only allowed in idle status");
            return o = e,
              p("check"),
              (t = c,
                t = t || 1e4,
                new Promise(function(e, r) {
                      if ("undefined" == typeof XMLHttpRequest)
                          return r(new Error("No browser support"));
                      try {
                          var o = new XMLHttpRequest
                            , c = M.p + "" + n + ".hot-update.json";
                          o.open("GET", c, !0),
                            o.timeout = t,
                            o.send(null)
                      } catch (e) {
                          return r(e)
                      }
                      o.onreadystatechange = function() {
                          if (4 === o.readyState)
                              if (0 === o.status)
                                  r(new Error("Manifest request to " + c + " timed out."));
                              else if (404 === o.status)
                                  e();
                              else if (200 !== o.status && 304 !== o.status)
                                  r(new Error("Manifest request to " + c + " failed."));
                              else {
                                  try {
                                      var t = JSON.parse(o.responseText)
                                  } catch (e) {
                                      return void r(e)
                                  }
                                  e(t)
                              }
                      }
                  }
                )).then(function(e) {
                  if (!e)
                      return p("idle"),
                        null;
                  E = {},
                    v = {},
                    P = e.c,
                    h = e.h,
                    p("prepare");
                  var t = new Promise(function(e, t) {
                        f = {
                            resolve: e,
                            reject: t
                        }
                    }
                  );
                  m = {};
                  return k(0),
                  "prepare" === s && 0 === b && 0 === y && w(),
                    t
              });
            var t
        }
        function k(e) {
            P[e] ? (E[e] = !0,
              y++,
              function(e) {
                  var t = document.createElement("script");
                  t.charset = "utf-8",
                    t.src = M.p + "" + e + "." + n + ".hot-update.js",
                    document.head.appendChild(t)
              }(e)) : v[e] = !0
        }
        function w() {
            p("ready");
            var e = f;
            if (f = null,
              e)
                if (o)
                    Promise.resolve().then(function() {
                        return j(o)
                    }).then(function(t) {
                        e.resolve(t)
                    }, function(t) {
                        e.reject(t)
                    });
                else {
                    var t = [];
                    for (var r in m)
                        Object.prototype.hasOwnProperty.call(m, r) && t.push(L(r));
                    e.resolve(t)
                }
        }
        function j(t) {
            if ("ready" !== s)
                throw new Error("apply() is only allowed in ready status");
            var r, o, c, i, l;
            function d(e) {
                for (var t = [e], r = {}, o = t.slice().map(function(e) {
                    return {
                        chain: [e],
                        id: e
                    }
                }); o.length > 0; ) {
                    var n = o.pop()
                      , c = n.id
                      , a = n.chain;
                    if ((i = O[c]) && !i.hot._selfAccepted) {
                        if (i.hot._selfDeclined)
                            return {
                                type: "self-declined",
                                chain: a,
                                moduleId: c
                            };
                        if (i.hot._main)
                            return {
                                type: "unaccepted",
                                chain: a,
                                moduleId: c
                            };
                        for (var u = 0; u < i.parents.length; u++) {
                            var l = i.parents[u]
                              , d = O[l];
                            if (d) {
                                if (d.hot._declinedDependencies[c])
                                    return {
                                        type: "declined",
                                        chain: a.concat([l]),
                                        moduleId: c,
                                        parentId: l
                                    };
                                -1 === t.indexOf(l) && (d.hot._acceptedDependencies[c] ? (r[l] || (r[l] = []),
                                  _(r[l], [c])) : (delete r[l],
                                  t.push(l),
                                  o.push({
                                      chain: a.concat([l]),
                                      id: l
                                  })))
                            }
                        }
                    }
                }
                return {
                    type: "accepted",
                    moduleId: e,
                    outdatedModules: t,
                    outdatedDependencies: r
                }
            }
            function _(e, t) {
                for (var r = 0; r < t.length; r++) {
                    var o = t[r];
                    -1 === e.indexOf(o) && e.push(o)
                }
            }
            t = t || {};
            var f = {}
              , y = []
              , b = {}
              , v = function() {
                console.warn("[HMR] unexpected require(" + g.moduleId + ") to disposed module")
            };
            for (var E in m)
                if (Object.prototype.hasOwnProperty.call(m, E)) {
                    var g;
                    l = L(E);
                    var k = !1
                      , w = !1
                      , j = !1
                      , C = "";
                    switch ((g = m[E] ? d(l) : {
                        type: "disposed",
                        moduleId: E
                    }).chain && (C = "\nUpdate propagation: " + g.chain.join(" -> ")),
                      g.type) {
                        case "self-declined":
                            t.onDeclined && t.onDeclined(g),
                            t.ignoreDeclined || (k = new Error("Aborted because of self decline: " + g.moduleId + C));
                            break;
                        case "declined":
                            t.onDeclined && t.onDeclined(g),
                            t.ignoreDeclined || (k = new Error("Aborted because of declined dependency: " + g.moduleId + " in " + g.parentId + C));
                            break;
                        case "unaccepted":
                            t.onUnaccepted && t.onUnaccepted(g),
                            t.ignoreUnaccepted || (k = new Error("Aborted because " + l + " is not accepted" + C));
                            break;
                        case "accepted":
                            t.onAccepted && t.onAccepted(g),
                              w = !0;
                            break;
                        case "disposed":
                            t.onDisposed && t.onDisposed(g),
                              j = !0;
                            break;
                        default:
                            throw new Error("Unexception type " + g.type)
                    }
                    if (k)
                        return p("abort"),
                          Promise.reject(k);
                    if (w)
                        for (l in b[l] = m[l],
                          _(y, g.outdatedModules),
                          g.outdatedDependencies)
                            Object.prototype.hasOwnProperty.call(g.outdatedDependencies, l) && (f[l] || (f[l] = []),
                              _(f[l], g.outdatedDependencies[l]));
                    j && (_(y, [g.moduleId]),
                      b[l] = v)
                }
            var D, x = [];
            for (o = 0; o < y.length; o++)
                l = y[o],
                O[l] && O[l].hot._selfAccepted && x.push({
                    module: l,
                    errorHandler: O[l].hot._selfAccepted
                });
            p("dispose"),
              Object.keys(P).forEach(function(e) {
                  !1 === P[e] && function(e) {
                      delete installedChunks[e]
                  }(e)
              });
            for (var T, A, q = y.slice(); q.length > 0; )
                if (l = q.pop(),
                  i = O[l]) {
                    var S = {}
                      , R = i.hot._disposeHandlers;
                    for (c = 0; c < R.length; c++)
                        (r = R[c])(S);
                    for (a[l] = S,
                           i.hot.active = !1,
                           delete O[l],
                           delete f[l],
                           c = 0; c < i.children.length; c++) {
                        var H = O[i.children[c]];
                        H && ((D = H.parents.indexOf(l)) >= 0 && H.parents.splice(D, 1))
                    }
                }
            for (l in f)
                if (Object.prototype.hasOwnProperty.call(f, l) && (i = O[l]))
                    for (A = f[l],
                           c = 0; c < A.length; c++)
                        T = A[c],
                        (D = i.children.indexOf(T)) >= 0 && i.children.splice(D, 1);
            for (l in p("apply"),
              n = h,
              b)
                Object.prototype.hasOwnProperty.call(b, l) && (e[l] = b[l]);
            var U = null;
            for (l in f)
                if (Object.prototype.hasOwnProperty.call(f, l) && (i = O[l])) {
                    A = f[l];
                    var W = [];
                    for (o = 0; o < A.length; o++)
                        if (T = A[o],
                          r = i.hot._acceptedDependencies[T]) {
                            if (-1 !== W.indexOf(r))
                                continue;
                            W.push(r)
                        }
                    for (o = 0; o < W.length; o++) {
                        r = W[o];
                        try {
                            r(A)
                        } catch (e) {
                            t.onErrored && t.onErrored({
                                type: "accept-errored",
                                moduleId: l,
                                dependencyId: A[o],
                                error: e
                            }),
                            t.ignoreErrored || U || (U = e)
                        }
                    }
                }
            for (o = 0; o < x.length; o++) {
                var N = x[o];
                l = N.module,
                  u = [l];
                try {
                    M(l)
                } catch (e) {
                    if ("function" == typeof N.errorHandler)
                        try {
                            N.errorHandler(e)
                        } catch (r) {
                            t.onErrored && t.onErrored({
                                type: "self-accept-error-handler-errored",
                                moduleId: l,
                                error: r,
                                originalError: e
                            }),
                            t.ignoreErrored || U || (U = r),
                            U || (U = e)
                        }
                    else
                        t.onErrored && t.onErrored({
                            type: "self-accept-errored",
                            moduleId: l,
                            error: e
                        }),
                        t.ignoreErrored || U || (U = e)
                }
            }
            return U ? (p("fail"),
              Promise.reject(U)) : (p("idle"),
              new Promise(function(e) {
                    e(y)
                }
              ))
        }
        var O = {};
        function M(t) {
            if (O[t])
                return O[t].exports;
            var r = O[t] = {
                i: t,
                l: !1,
                exports: {},
                hot: d(t),
                parents: (i = u,
                  u = [],
                  i),
                children: []
            };
            return e[t].call(r.exports, r, r.exports, l(t)),
              r.l = !0,
              r.exports
        }
        return M.m = e,
          M.c = O,
          M.d = function(e, t, r) {
              M.o(e, t) || Object.defineProperty(e, t, {
                  enumerable: !0,
                  get: r
              })
          }
          ,
          M.r = function(e) {
              "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
                  value: "Module"
              }),
                Object.defineProperty(e, "__esModule", {
                    value: !0
                })
          }
          ,
          M.t = function(e, t) {
              if (1 & t && (e = M(e)),
              8 & t)
                  return e;
              if (4 & t && "object" == typeof e && e && e.__esModule)
                  return e;
              var r = Object.create(null);
              if (M.r(r),
                Object.defineProperty(r, "default", {
                    enumerable: !0,
                    value: e
                }),
              2 & t && "string" != typeof e)
                  for (var o in e)
                      M.d(r, o, function(t) {
                          return e[t]
                      }
                        .bind(null, o));
              return r
          }
          ,
          M.n = function(e) {
              var t = e && e.__esModule ? function() {
                    return e.default
                }
                : function() {
                    return e
                }
              ;
              return M.d(t, "a", t),
                t
          }
          ,
          M.o = function(e, t) {
              return Object.prototype.hasOwnProperty.call(e, t)
          }
          ,
          M.p = "file/widget/occReactComponent/js/",
          M.h = function() {
              return n
          }
          ,
          l(5)(M.s = 5)
    }([function(module, exports, __webpack_require__) {
        "use strict";
        var evalAllowed = !1;
        try {
            eval("evalAllowed = true")
        } catch (e) {}
        var platformSupported = !!Object.setPrototypeOf && evalAllowed;
        console.warn("React-Hot-Loaded is not supported in this environment"),
          module.exports = __webpack_require__(9)
    }
        , function(e, t, r) {
            e.exports = r(4)(0)
        }
        , function(e, t) {
            e.exports = function(e) {
                return e.webpackPolyfill || (e.deprecate = function() {}
                  ,
                  e.paths = [],
                e.children || (e.children = []),
                  Object.defineProperty(e, "loaded", {
                      enumerable: !0,
                      get: function() {
                          return e.l
                      }
                  }),
                  Object.defineProperty(e, "id", {
                      enumerable: !0,
                      get: function() {
                          return e.i
                      }
                  }),
                  e.webpackPolyfill = 1),
                  e
            }
        }
        , function(e, t, r) {
            e.exports = r(4)(11)
        }
        , function(e, t) {
            e.exports = __WEBPACK_EXTERNAL_MODULE__4__
        }
        , function(e, t, r) {
            "use strict";
            var o, n, c = i(r(1)), a = i(r(6)), u = i(r(7));
            function i(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            o = [r(13), r(14), r(15), r(16), r(17), r(18), r(19), r(20)],
            void 0 === (n = function(e, t, r, o, n, i, l, d) {
                var _;
                return {
                    onLoad: function(c) {
                        _ = {
                            model: c,
                            occDependencies: {
                                ko: e,
                                $: t,
                                pubsub: r,
                                notifier: o,
                                ccConstants: n,
                                ccRestClient: i,
                                logger: l,
                                Product: d
                            }
                        }
                    },
                    onRender: function() {
                        a.default.render(c.default.createElement(u.default, _), document.getElementById("occReactComponent"))
                    }
                }
            }
              .apply(t, o)) || (e.exports = n)
        }
        , function(e, t, r) {
            e.exports = r(4)(7)
        }
        , function(module, exports, __webpack_require__) {
            "use strict";
            (function(module) {
                  Object.defineProperty(exports, "__esModule", {
                      value: !0
                  });
                  var _react = __webpack_require__(1), _react2 = _interopRequireDefault(_react), _styledComponents = __webpack_require__(3), _styledComponents2 = _interopRequireDefault(_styledComponents), _root = __webpack_require__(8), _Product = __webpack_require__(10), _Product2 = _interopRequireDefault(_Product), _ProductList = __webpack_require__(12), _ProductList2 = _interopRequireDefault(_ProductList), enterModule;
                  function _interopRequireDefault(e) {
                      return e && e.__esModule ? e : {
                          default: e
                      }
                  }
                  function _inheritsLoose(e, t) {
                      e.prototype = Object.create(t.prototype),
                        e.prototype.constructor = e,
                        e.__proto__ = t
                  }
                  function _templateObject() {
                      var e = _taggedTemplateLiteralLoose(["\n  color:red;\n"]);
                      return _templateObject = function() {
                          return e
                      }
                        ,
                        e
                  }
                  function _taggedTemplateLiteralLoose(e, t) {
                      return t || (t = e.slice(0)),
                        e.raw = t,
                        e
                  }
                  enterModule = __webpack_require__(0).enterModule,
                  enterModule && enterModule(module);
                  var Test = _styledComponents2.default.div(_templateObject()), App = function(_Component) {
                      function App() {
                          return _Component.apply(this, arguments) || this
                      }
                      _inheritsLoose(App, _Component);
                      var _proto = App.prototype;
                      return _proto.componentDidUpdate = function(e, t, r) {
                          console.log(e, t, r)
                      }
                        ,
                        _proto.render = function() {
                            var e = this.props
                              , t = e.model
                              , r = e.occDependencies;
                            return console.log("[occ-react-component]:  widget model:", t),
                              console.log("[occ-react-component]:  application defined dependencies:", r),
                              _react2.default.createElement(Test, null, "Hello")
                        }
                        ,
                        _proto.__reactstandin__regenerateByEval = function __reactstandin__regenerateByEval(key, code) {
                            this[key] = eval(code)
                        }
                        ,
                        App
                  }(_react.Component), _default = (0,
                    _root.hot)(App), reactHotLoader, leaveModule;
                  exports.default = _default,
                    reactHotLoader = __webpack_require__(0).default,
                    leaveModule = __webpack_require__(0).leaveModule,
                  reactHotLoader && (reactHotLoader.register(Test, "Test", "/Users/leedium/WebstormProjects/occ-react-component/app/js/app/App.jsx"),
                    reactHotLoader.register(App, "App", "/Users/leedium/WebstormProjects/occ-react-component/app/js/app/App.jsx"),
                    reactHotLoader.register(_default, "default", "/Users/leedium/WebstormProjects/occ-react-component/app/js/app/App.jsx"),
                    leaveModule(module)),
                    module.exports = exports.default
              }
            ).call(this, __webpack_require__(2)(module))
        }
        , function(e, t, r) {
            (function(e) {
                  var o = r(0).hot
                    , n = r.c
                    , c = n[e.parents[0]];
                  delete n[e.i],
                    t.hot = o(Object.assign({
                        id: c.i
                    }, c))
              }
            ).call(this, r(2)(e))
        }
        , function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var o, n = (o = r(1)) && "object" == typeof o && "default"in o ? o.default : o, c = function(e, t) {
                if (!(e instanceof t))
                    throw new TypeError("Cannot call a class as a function")
            }, a = function(e, t) {
                if (!e)
                    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !t || "object" != typeof t && "function" != typeof t ? e : t
            }, u = function(e) {
                function t() {
                    return c(this, t),
                      a(this, e.apply(this, arguments))
                }
                return function(e, t) {
                    if ("function" != typeof t && null !== t)
                        throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            enumerable: !1,
                            writable: !0,
                            configurable: !0
                        }
                    }),
                    t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
                }(t, e),
                  t.prototype.render = function() {
                      return n.Children.only(this.props.children)
                  }
                  ,
                  t
            }(n.Component);
            t.AppContainer = u,
              t.hot = function() {
                  return function(e) {
                      return e
                  }
              }
              ,
              t.areComponentsEqual = function(e, t) {
                  return e === t
              }
              ,
              t.setConfig = function() {}
              ,
              t.cold = function(e) {
                  return e
              }
              ,
              t.configureComponent = function() {}
        }
        , function(module, exports, __webpack_require__) {
            "use strict";
            (function(module) {
                  Object.defineProperty(exports, "__esModule", {
                      value: !0
                  });
                  var _react = __webpack_require__(1), _react2 = _interopRequireDefault(_react), _styledComponents = __webpack_require__(3), _styledComponents2 = _interopRequireDefault(_styledComponents), _SkuThumb = __webpack_require__(11), _SkuThumb2 = _interopRequireDefault(_SkuThumb), enterModule;
                  function _interopRequireDefault(e) {
                      return e && e.__esModule ? e : {
                          default: e
                      }
                  }
                  function _assertThisInitialized(e) {
                      if (void 0 === e)
                          throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                      return e
                  }
                  function _inheritsLoose(e, t) {
                      e.prototype = Object.create(t.prototype),
                        e.prototype.constructor = e,
                        e.__proto__ = t
                  }
                  function _templateObject() {
                      var e = _taggedTemplateLiteralLoose(['\n  &:before,\n  &:after {\n    content: " ";\n    display:table;\n  }\n  &:after {\n    clear: both;\n  }\n  \n  ul {\n    padding: 0;\n  }\n\n  h2 {\n      color: darkgrey !important;\n       font-size: 25px !important;\n  };\n    \n  .product {\n    &__hero-img {\n      display: inline-block;\n      float: left;\n      margin: 10px;\n    }\n    \n    &__details {\n      display: inline-block;\n      width: 50%;\n      float: left;\n      margin: 10px;\n    }\n    \n    &__skus {\n      display: block;\n      float: left\n    }\n  }\n']);
                      return _templateObject = function() {
                          return e
                      }
                        ,
                        e
                  }
                  function _taggedTemplateLiteralLoose(e, t) {
                      return t || (t = e.slice(0)),
                        e.raw = t,
                        e
                  }
                  enterModule = __webpack_require__(0).enterModule,
                  enterModule && enterModule(module);
                  var StyledProduct = _styledComponents2.default.div(_templateObject()), Product = function(_PureComponent) {
                      function Product() {
                          for (var e, t, r = arguments.length, o = new Array(r), n = 0; n < r; n++)
                              o[n] = arguments[n];
                          return e = t = _PureComponent.call.apply(_PureComponent, [this].concat(o)) || this,
                            t.state = {
                                productData: null
                            },
                            t.createMarkup = function(e) {
                                return {
                                    __html: e
                                }
                            }
                            ,
                          e || _assertThisInitialized(t)
                      }
                      _inheritsLoose(Product, _PureComponent);
                      var _proto = Product.prototype;
                      return _proto.componentDidMount = function() {
                          var e = this
                            , t = this.props
                            , r = t.occDependencies
                            , o = t.productId
                            , n = r.ccRestClient
                            , c = r.ccConstants;
                          n.request(c.ENDPOINT_PRODUCTS_GET_PRODUCT, null, function(t) {
                              e.setState({
                                  productData: t
                              })
                          }, function() {}, o)
                      }
                        ,
                        _proto.render = function() {
                            var e = this
                              , t = this.state.productData;
                            if (t) {
                                var r = t.displayName
                                  , o = t.longDescription
                                  , n = t.smallImageURLs
                                  , c = t.childSKUs;
                                return _react2.default.createElement(StyledProduct, null, _react2.default.createElement("h2", {
                                    className: "product__title"
                                }, r), _react2.default.createElement("img", {
                                    className: "product__hero-img",
                                    src: n[0],
                                    alt: ""
                                }), _react2.default.createElement("div", {
                                    className: "product__details"
                                }, _react2.default.createElement("p", {
                                    dangerouslySetInnerHTML: this.createMarkup(o)
                                }), _react2.default.createElement("ul", {
                                    className: "product__skus"
                                }, c.map(function(t) {
                                    return _react2.default.createElement(_SkuThumb2.default, {
                                        key: t.id,
                                        itemData: t,
                                        handleClick: e.skuSelected
                                    })
                                }))))
                            }
                            return null
                        }
                        ,
                        _proto.__reactstandin__regenerateByEval = function __reactstandin__regenerateByEval(key, code) {
                            this[key] = eval(code)
                        }
                        ,
                        Product
                  }(_react.PureComponent), _default = Product, reactHotLoader, leaveModule;
                  exports.default = _default,
                    reactHotLoader = __webpack_require__(0).default,
                    leaveModule = __webpack_require__(0).leaveModule,
                  reactHotLoader && (reactHotLoader.register(StyledProduct, "StyledProduct", "/Users/leedium/WebstormProjects/occ-react-component/app/js/app/modules/Product/Product.jsx"),
                    reactHotLoader.register(Product, "Product", "/Users/leedium/WebstormProjects/occ-react-component/app/js/app/modules/Product/Product.jsx"),
                    reactHotLoader.register(_default, "default", "/Users/leedium/WebstormProjects/occ-react-component/app/js/app/modules/Product/Product.jsx"),
                    leaveModule(module)),
                    module.exports = exports.default
              }
            ).call(this, __webpack_require__(2)(module))
        }
        , function(module, exports, __webpack_require__) {
            "use strict";
            (function(module) {
                  Object.defineProperty(exports, "__esModule", {
                      value: !0
                  }),
                    exports.StyledSkuThumb = void 0;
                  var _react = __webpack_require__(1), _react2 = _interopRequireDefault(_react), _styledComponents = __webpack_require__(3), _styledComponents2 = _interopRequireDefault(_styledComponents), enterModule;
                  function _interopRequireDefault(e) {
                      return e && e.__esModule ? e : {
                          default: e
                      }
                  }
                  function _inheritsLoose(e, t) {
                      e.prototype = Object.create(t.prototype),
                        e.prototype.constructor = e,
                        e.__proto__ = t
                  }
                  function _templateObject() {
                      var e = _taggedTemplateLiteralLoose(["\n\n  div,\n  img {\n    display: block;\n  }\n  \n  border: 0;\n  outline: 0;\n  \n  \n"]);
                      return _templateObject = function() {
                          return e
                      }
                        ,
                        e
                  }
                  function _taggedTemplateLiteralLoose(e, t) {
                      return t || (t = e.slice(0)),
                        e.raw = t,
                        e
                  }
                  enterModule = __webpack_require__(0).enterModule,
                  enterModule && enterModule(module);
                  var StyledSkuThumb = exports.StyledSkuThumb = _styledComponents2.default.button(_templateObject()), SkuThumb = function(_PureComponent) {
                      function SkuThumb() {
                          return _PureComponent.apply(this, arguments) || this
                      }
                      _inheritsLoose(SkuThumb, _PureComponent);
                      var _proto = SkuThumb.prototype;
                      return _proto.render = function() {
                          var e = this.props
                            , t = e.itemData
                            , r = e.handleClick
                            , o = e.key;
                          return _react2.default.createElement(StyledSkuThumb, {
                              type: "button",
                              key: o,
                              onClick: function() {
                                  return r(t)
                              }
                          }, _react2.default.createElement("img", {
                              src: t.primaryThumbImageURL || "/ccstore/v1/images/?source=/img/no-image.jpg&height=100&width=100",
                              alt: t.displayName + " - " + t.repositoryId
                          }), _react2.default.createElement("p", null, t.listPrice))
                      }
                        ,
                        _proto.__reactstandin__regenerateByEval = function __reactstandin__regenerateByEval(key, code) {
                            this[key] = eval(code)
                        }
                        ,
                        SkuThumb
                  }(_react.PureComponent), _default = SkuThumb, reactHotLoader, leaveModule;
                  exports.default = _default,
                    reactHotLoader = __webpack_require__(0).default,
                    leaveModule = __webpack_require__(0).leaveModule,
                  reactHotLoader && (reactHotLoader.register(StyledSkuThumb, "StyledSkuThumb", "/Users/leedium/WebstormProjects/occ-react-component/app/js/app/modules/SkuThumb/SkuThumb.jsx"),
                    reactHotLoader.register(SkuThumb, "SkuThumb", "/Users/leedium/WebstormProjects/occ-react-component/app/js/app/modules/SkuThumb/SkuThumb.jsx"),
                    reactHotLoader.register(_default, "default", "/Users/leedium/WebstormProjects/occ-react-component/app/js/app/modules/SkuThumb/SkuThumb.jsx"),
                    leaveModule(module))
              }
            ).call(this, __webpack_require__(2)(module))
        }
        , function(module, exports, __webpack_require__) {
            "use strict";
            (function(module) {
                  Object.defineProperty(exports, "__esModule", {
                      value: !0
                  });
                  var _react = __webpack_require__(1), _react2 = _interopRequireDefault(_react), _styledComponents = __webpack_require__(3), _styledComponents2 = _interopRequireDefault(_styledComponents), enterModule;
                  function _interopRequireDefault(e) {
                      return e && e.__esModule ? e : {
                          default: e
                      }
                  }
                  function _inheritsLoose(e, t) {
                      e.prototype = Object.create(t.prototype),
                        e.prototype.constructor = e,
                        e.__proto__ = t
                  }
                  function _templateObject() {
                      var e = _taggedTemplateLiteralLoose(["\n   h2 {\n    // text-decoration: underline !important;\n    // color: red !important;\n   }\n   \n  .list-container\n      display: flex;\n    }\n"]);
                      return _templateObject = function() {
                          return e
                      }
                        ,
                        e
                  }
                  function _taggedTemplateLiteralLoose(e, t) {
                      return t || (t = e.slice(0)),
                        e.raw = t,
                        e
                  }
                  enterModule = __webpack_require__(0).enterModule,
                  enterModule && enterModule(module);
                  var StyledProductList = _styledComponents2.default.div(_templateObject()), ProductList = function(_PureComponent) {
                      function ProductList() {
                          return _PureComponent.apply(this, arguments) || this
                      }
                      _inheritsLoose(ProductList, _PureComponent);
                      var _proto = ProductList.prototype;
                      return _proto.render = function() {
                          var e = this.props
                            , t = e.children
                            , r = e.title;
                          return _react2.default.createElement(StyledProductList, null, _react2.default.createElement("h2", null, r), _react2.default.createElement("div", {
                              className: "list-container"
                          }, t))
                      }
                        ,
                        _proto.__reactstandin__regenerateByEval = function __reactstandin__regenerateByEval(key, code) {
                            this[key] = eval(code)
                        }
                        ,
                        ProductList
                  }(_react.PureComponent), _default = ProductList, reactHotLoader, leaveModule;
                  exports.default = _default,
                    reactHotLoader = __webpack_require__(0).default,
                    leaveModule = __webpack_require__(0).leaveModule,
                  reactHotLoader && (reactHotLoader.register(StyledProductList, "StyledProductList", "/Users/leedium/WebstormProjects/occ-react-component/app/js/app/modules/ProductList/ProductList.jsx"),
                    reactHotLoader.register(ProductList, "ProductList", "/Users/leedium/WebstormProjects/occ-react-component/app/js/app/modules/ProductList/ProductList.jsx"),
                    reactHotLoader.register(_default, "default", "/Users/leedium/WebstormProjects/occ-react-component/app/js/app/modules/ProductList/ProductList.jsx"),
                    leaveModule(module)),
                    module.exports = exports.default
              }
            ).call(this, __webpack_require__(2)(module))
        }
        , function(e, t) {
            e.exports = __WEBPACK_EXTERNAL_MODULE__13__
        }
        , function(e, t) {
            e.exports = __WEBPACK_EXTERNAL_MODULE__14__
        }
        , function(e, t) {
            e.exports = __WEBPACK_EXTERNAL_MODULE__15__
        }
        , function(e, t) {
            e.exports = __WEBPACK_EXTERNAL_MODULE__16__
        }
        , function(e, t) {
            e.exports = __WEBPACK_EXTERNAL_MODULE__17__
        }
        , function(e, t) {
            e.exports = __WEBPACK_EXTERNAL_MODULE__18__
        }
        , function(e, t) {
            e.exports = __WEBPACK_EXTERNAL_MODULE__19__
        }
        , function(e, t) {
            e.exports = __WEBPACK_EXTERNAL_MODULE__20__
        }
    ])
});
