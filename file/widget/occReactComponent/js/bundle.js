define(["ccConstants","ccLogger","jquery","knockout","notifier","pubsub","https://unpkg.com/react@16.6.3/umd/react.production.min","https://unpkg.com/react-dom@16.6.3/umd/react-dom.production.min"], function(__WEBPACK_EXTERNAL_MODULE_ccConstants__, __WEBPACK_EXTERNAL_MODULE_ccLogger__, __WEBPACK_EXTERNAL_MODULE_jquery__, __WEBPACK_EXTERNAL_MODULE_knockout__, __WEBPACK_EXTERNAL_MODULE_notifier__, __WEBPACK_EXTERNAL_MODULE_pubsub__, __WEBPACK_EXTERNAL_MODULE_react__, __WEBPACK_EXTERNAL_MODULE_react_dom__) { return /******/ (function(modules) { // webpackBootstrap
/******/ 	function hotDisposeChunk(chunkId) {
/******/ 		delete installedChunks[chunkId];
/******/ 	}
/******/ 	var parentHotUpdateCallback = window["webpackHotUpdate"];
/******/ 	window["webpackHotUpdate"] = // eslint-disable-next-line no-unused-vars
/******/ 	function webpackHotUpdateCallback(chunkId, moreModules) {
/******/ 		hotAddUpdateChunk(chunkId, moreModules);
/******/ 		if (parentHotUpdateCallback) parentHotUpdateCallback(chunkId, moreModules);
/******/ 	} ;
/******/
/******/ 	// eslint-disable-next-line no-unused-vars
/******/ 	function hotDownloadUpdateChunk(chunkId) {
/******/ 		var head = document.getElementsByTagName("head")[0];
/******/ 		var script = document.createElement("script");
/******/ 		script.charset = "utf-8";
/******/ 		script.src = __webpack_require__.p + "" + chunkId + "." + hotCurrentHash + ".hot-update.js";
/******/ 		if (null) script.crossOrigin = null;
/******/ 		head.appendChild(script);
/******/ 	}
/******/
/******/ 	// eslint-disable-next-line no-unused-vars
/******/ 	function hotDownloadManifest(requestTimeout) {
/******/ 		requestTimeout = requestTimeout || 10000;
/******/ 		return new Promise(function(resolve, reject) {
/******/ 			if (typeof XMLHttpRequest === "undefined") {
/******/ 				return reject(new Error("No browser support"));
/******/ 			}
/******/ 			try {
/******/ 				var request = new XMLHttpRequest();
/******/ 				var requestPath = __webpack_require__.p + "" + hotCurrentHash + ".hot-update.json";
/******/ 				request.open("GET", requestPath, true);
/******/ 				request.timeout = requestTimeout;
/******/ 				request.send(null);
/******/ 			} catch (err) {
/******/ 				return reject(err);
/******/ 			}
/******/ 			request.onreadystatechange = function() {
/******/ 				if (request.readyState !== 4) return;
/******/ 				if (request.status === 0) {
/******/ 					// timeout
/******/ 					reject(
/******/ 						new Error("Manifest request to " + requestPath + " timed out.")
/******/ 					);
/******/ 				} else if (request.status === 404) {
/******/ 					// no update available
/******/ 					resolve();
/******/ 				} else if (request.status !== 200 && request.status !== 304) {
/******/ 					// other failure
/******/ 					reject(new Error("Manifest request to " + requestPath + " failed."));
/******/ 				} else {
/******/ 					// success
/******/ 					try {
/******/ 						var update = JSON.parse(request.responseText);
/******/ 					} catch (e) {
/******/ 						reject(e);
/******/ 						return;
/******/ 					}
/******/ 					resolve(update);
/******/ 				}
/******/ 			};
/******/ 		});
/******/ 	}
/******/
/******/ 	var hotApplyOnUpdate = true;
/******/ 	// eslint-disable-next-line no-unused-vars
/******/ 	var hotCurrentHash = "76efa5408b222207d902";
/******/ 	var hotRequestTimeout = 10000;
/******/ 	var hotCurrentModuleData = {};
/******/ 	var hotCurrentChildModule;
/******/ 	// eslint-disable-next-line no-unused-vars
/******/ 	var hotCurrentParents = [];
/******/ 	// eslint-disable-next-line no-unused-vars
/******/ 	var hotCurrentParentsTemp = [];
/******/
/******/ 	// eslint-disable-next-line no-unused-vars
/******/ 	function hotCreateRequire(moduleId) {
/******/ 		var me = installedModules[moduleId];
/******/ 		if (!me) return __webpack_require__;
/******/ 		var fn = function(request) {
/******/ 			if (me.hot.active) {
/******/ 				if (installedModules[request]) {
/******/ 					if (installedModules[request].parents.indexOf(moduleId) === -1) {
/******/ 						installedModules[request].parents.push(moduleId);
/******/ 					}
/******/ 				} else {
/******/ 					hotCurrentParents = [moduleId];
/******/ 					hotCurrentChildModule = request;
/******/ 				}
/******/ 				if (me.children.indexOf(request) === -1) {
/******/ 					me.children.push(request);
/******/ 				}
/******/ 			} else {
/******/ 				console.warn(
/******/ 					"[HMR] unexpected require(" +
/******/ 						request +
/******/ 						") from disposed module " +
/******/ 						moduleId
/******/ 				);
/******/ 				hotCurrentParents = [];
/******/ 			}
/******/ 			return __webpack_require__(request);
/******/ 		};
/******/ 		var ObjectFactory = function ObjectFactory(name) {
/******/ 			return {
/******/ 				configurable: true,
/******/ 				enumerable: true,
/******/ 				get: function() {
/******/ 					return __webpack_require__[name];
/******/ 				},
/******/ 				set: function(value) {
/******/ 					__webpack_require__[name] = value;
/******/ 				}
/******/ 			};
/******/ 		};
/******/ 		for (var name in __webpack_require__) {
/******/ 			if (
/******/ 				Object.prototype.hasOwnProperty.call(__webpack_require__, name) &&
/******/ 				name !== "e" &&
/******/ 				name !== "t"
/******/ 			) {
/******/ 				Object.defineProperty(fn, name, ObjectFactory(name));
/******/ 			}
/******/ 		}
/******/ 		fn.e = function(chunkId) {
/******/ 			if (hotStatus === "ready") hotSetStatus("prepare");
/******/ 			hotChunksLoading++;
/******/ 			return __webpack_require__.e(chunkId).then(finishChunkLoading, function(err) {
/******/ 				finishChunkLoading();
/******/ 				throw err;
/******/ 			});
/******/
/******/ 			function finishChunkLoading() {
/******/ 				hotChunksLoading--;
/******/ 				if (hotStatus === "prepare") {
/******/ 					if (!hotWaitingFilesMap[chunkId]) {
/******/ 						hotEnsureUpdateChunk(chunkId);
/******/ 					}
/******/ 					if (hotChunksLoading === 0 && hotWaitingFiles === 0) {
/******/ 						hotUpdateDownloaded();
/******/ 					}
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 		fn.t = function(value, mode) {
/******/ 			if (mode & 1) value = fn(value);
/******/ 			return __webpack_require__.t(value, mode & ~1);
/******/ 		};
/******/ 		return fn;
/******/ 	}
/******/
/******/ 	// eslint-disable-next-line no-unused-vars
/******/ 	function hotCreateModule(moduleId) {
/******/ 		var hot = {
/******/ 			// private stuff
/******/ 			_acceptedDependencies: {},
/******/ 			_declinedDependencies: {},
/******/ 			_selfAccepted: false,
/******/ 			_selfDeclined: false,
/******/ 			_disposeHandlers: [],
/******/ 			_main: hotCurrentChildModule !== moduleId,
/******/
/******/ 			// Module API
/******/ 			active: true,
/******/ 			accept: function(dep, callback) {
/******/ 				if (dep === undefined) hot._selfAccepted = true;
/******/ 				else if (typeof dep === "function") hot._selfAccepted = dep;
/******/ 				else if (typeof dep === "object")
/******/ 					for (var i = 0; i < dep.length; i++)
/******/ 						hot._acceptedDependencies[dep[i]] = callback || function() {};
/******/ 				else hot._acceptedDependencies[dep] = callback || function() {};
/******/ 			},
/******/ 			decline: function(dep) {
/******/ 				if (dep === undefined) hot._selfDeclined = true;
/******/ 				else if (typeof dep === "object")
/******/ 					for (var i = 0; i < dep.length; i++)
/******/ 						hot._declinedDependencies[dep[i]] = true;
/******/ 				else hot._declinedDependencies[dep] = true;
/******/ 			},
/******/ 			dispose: function(callback) {
/******/ 				hot._disposeHandlers.push(callback);
/******/ 			},
/******/ 			addDisposeHandler: function(callback) {
/******/ 				hot._disposeHandlers.push(callback);
/******/ 			},
/******/ 			removeDisposeHandler: function(callback) {
/******/ 				var idx = hot._disposeHandlers.indexOf(callback);
/******/ 				if (idx >= 0) hot._disposeHandlers.splice(idx, 1);
/******/ 			},
/******/
/******/ 			// Management API
/******/ 			check: hotCheck,
/******/ 			apply: hotApply,
/******/ 			status: function(l) {
/******/ 				if (!l) return hotStatus;
/******/ 				hotStatusHandlers.push(l);
/******/ 			},
/******/ 			addStatusHandler: function(l) {
/******/ 				hotStatusHandlers.push(l);
/******/ 			},
/******/ 			removeStatusHandler: function(l) {
/******/ 				var idx = hotStatusHandlers.indexOf(l);
/******/ 				if (idx >= 0) hotStatusHandlers.splice(idx, 1);
/******/ 			},
/******/
/******/ 			//inherit from previous dispose call
/******/ 			data: hotCurrentModuleData[moduleId]
/******/ 		};
/******/ 		hotCurrentChildModule = undefined;
/******/ 		return hot;
/******/ 	}
/******/
/******/ 	var hotStatusHandlers = [];
/******/ 	var hotStatus = "idle";
/******/
/******/ 	function hotSetStatus(newStatus) {
/******/ 		hotStatus = newStatus;
/******/ 		for (var i = 0; i < hotStatusHandlers.length; i++)
/******/ 			hotStatusHandlers[i].call(null, newStatus);
/******/ 	}
/******/
/******/ 	// while downloading
/******/ 	var hotWaitingFiles = 0;
/******/ 	var hotChunksLoading = 0;
/******/ 	var hotWaitingFilesMap = {};
/******/ 	var hotRequestedFilesMap = {};
/******/ 	var hotAvailableFilesMap = {};
/******/ 	var hotDeferred;
/******/
/******/ 	// The update info
/******/ 	var hotUpdate, hotUpdateNewHash;
/******/
/******/ 	function toModuleId(id) {
/******/ 		var isNumber = +id + "" === id;
/******/ 		return isNumber ? +id : id;
/******/ 	}
/******/
/******/ 	function hotCheck(apply) {
/******/ 		if (hotStatus !== "idle") {
/******/ 			throw new Error("check() is only allowed in idle status");
/******/ 		}
/******/ 		hotApplyOnUpdate = apply;
/******/ 		hotSetStatus("check");
/******/ 		return hotDownloadManifest(hotRequestTimeout).then(function(update) {
/******/ 			if (!update) {
/******/ 				hotSetStatus("idle");
/******/ 				return null;
/******/ 			}
/******/ 			hotRequestedFilesMap = {};
/******/ 			hotWaitingFilesMap = {};
/******/ 			hotAvailableFilesMap = update.c;
/******/ 			hotUpdateNewHash = update.h;
/******/
/******/ 			hotSetStatus("prepare");
/******/ 			var promise = new Promise(function(resolve, reject) {
/******/ 				hotDeferred = {
/******/ 					resolve: resolve,
/******/ 					reject: reject
/******/ 				};
/******/ 			});
/******/ 			hotUpdate = {};
/******/ 			var chunkId = "index";
/******/ 			// eslint-disable-next-line no-lone-blocks
/******/ 			{
/******/ 				/*globals chunkId */
/******/ 				hotEnsureUpdateChunk(chunkId);
/******/ 			}
/******/ 			if (
/******/ 				hotStatus === "prepare" &&
/******/ 				hotChunksLoading === 0 &&
/******/ 				hotWaitingFiles === 0
/******/ 			) {
/******/ 				hotUpdateDownloaded();
/******/ 			}
/******/ 			return promise;
/******/ 		});
/******/ 	}
/******/
/******/ 	// eslint-disable-next-line no-unused-vars
/******/ 	function hotAddUpdateChunk(chunkId, moreModules) {
/******/ 		if (!hotAvailableFilesMap[chunkId] || !hotRequestedFilesMap[chunkId])
/******/ 			return;
/******/ 		hotRequestedFilesMap[chunkId] = false;
/******/ 		for (var moduleId in moreModules) {
/******/ 			if (Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				hotUpdate[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if (--hotWaitingFiles === 0 && hotChunksLoading === 0) {
/******/ 			hotUpdateDownloaded();
/******/ 		}
/******/ 	}
/******/
/******/ 	function hotEnsureUpdateChunk(chunkId) {
/******/ 		if (!hotAvailableFilesMap[chunkId]) {
/******/ 			hotWaitingFilesMap[chunkId] = true;
/******/ 		} else {
/******/ 			hotRequestedFilesMap[chunkId] = true;
/******/ 			hotWaitingFiles++;
/******/ 			hotDownloadUpdateChunk(chunkId);
/******/ 		}
/******/ 	}
/******/
/******/ 	function hotUpdateDownloaded() {
/******/ 		hotSetStatus("ready");
/******/ 		var deferred = hotDeferred;
/******/ 		hotDeferred = null;
/******/ 		if (!deferred) return;
/******/ 		if (hotApplyOnUpdate) {
/******/ 			// Wrap deferred object in Promise to mark it as a well-handled Promise to
/******/ 			// avoid triggering uncaught exception warning in Chrome.
/******/ 			// See https://bugs.chromium.org/p/chromium/issues/detail?id=465666
/******/ 			Promise.resolve()
/******/ 				.then(function() {
/******/ 					return hotApply(hotApplyOnUpdate);
/******/ 				})
/******/ 				.then(
/******/ 					function(result) {
/******/ 						deferred.resolve(result);
/******/ 					},
/******/ 					function(err) {
/******/ 						deferred.reject(err);
/******/ 					}
/******/ 				);
/******/ 		} else {
/******/ 			var outdatedModules = [];
/******/ 			for (var id in hotUpdate) {
/******/ 				if (Object.prototype.hasOwnProperty.call(hotUpdate, id)) {
/******/ 					outdatedModules.push(toModuleId(id));
/******/ 				}
/******/ 			}
/******/ 			deferred.resolve(outdatedModules);
/******/ 		}
/******/ 	}
/******/
/******/ 	function hotApply(options) {
/******/ 		if (hotStatus !== "ready")
/******/ 			throw new Error("apply() is only allowed in ready status");
/******/ 		options = options || {};
/******/
/******/ 		var cb;
/******/ 		var i;
/******/ 		var j;
/******/ 		var module;
/******/ 		var moduleId;
/******/
/******/ 		function getAffectedStuff(updateModuleId) {
/******/ 			var outdatedModules = [updateModuleId];
/******/ 			var outdatedDependencies = {};
/******/
/******/ 			var queue = outdatedModules.slice().map(function(id) {
/******/ 				return {
/******/ 					chain: [id],
/******/ 					id: id
/******/ 				};
/******/ 			});
/******/ 			while (queue.length > 0) {
/******/ 				var queueItem = queue.pop();
/******/ 				var moduleId = queueItem.id;
/******/ 				var chain = queueItem.chain;
/******/ 				module = installedModules[moduleId];
/******/ 				if (!module || module.hot._selfAccepted) continue;
/******/ 				if (module.hot._selfDeclined) {
/******/ 					return {
/******/ 						type: "self-declined",
/******/ 						chain: chain,
/******/ 						moduleId: moduleId
/******/ 					};
/******/ 				}
/******/ 				if (module.hot._main) {
/******/ 					return {
/******/ 						type: "unaccepted",
/******/ 						chain: chain,
/******/ 						moduleId: moduleId
/******/ 					};
/******/ 				}
/******/ 				for (var i = 0; i < module.parents.length; i++) {
/******/ 					var parentId = module.parents[i];
/******/ 					var parent = installedModules[parentId];
/******/ 					if (!parent) continue;
/******/ 					if (parent.hot._declinedDependencies[moduleId]) {
/******/ 						return {
/******/ 							type: "declined",
/******/ 							chain: chain.concat([parentId]),
/******/ 							moduleId: moduleId,
/******/ 							parentId: parentId
/******/ 						};
/******/ 					}
/******/ 					if (outdatedModules.indexOf(parentId) !== -1) continue;
/******/ 					if (parent.hot._acceptedDependencies[moduleId]) {
/******/ 						if (!outdatedDependencies[parentId])
/******/ 							outdatedDependencies[parentId] = [];
/******/ 						addAllToSet(outdatedDependencies[parentId], [moduleId]);
/******/ 						continue;
/******/ 					}
/******/ 					delete outdatedDependencies[parentId];
/******/ 					outdatedModules.push(parentId);
/******/ 					queue.push({
/******/ 						chain: chain.concat([parentId]),
/******/ 						id: parentId
/******/ 					});
/******/ 				}
/******/ 			}
/******/
/******/ 			return {
/******/ 				type: "accepted",
/******/ 				moduleId: updateModuleId,
/******/ 				outdatedModules: outdatedModules,
/******/ 				outdatedDependencies: outdatedDependencies
/******/ 			};
/******/ 		}
/******/
/******/ 		function addAllToSet(a, b) {
/******/ 			for (var i = 0; i < b.length; i++) {
/******/ 				var item = b[i];
/******/ 				if (a.indexOf(item) === -1) a.push(item);
/******/ 			}
/******/ 		}
/******/
/******/ 		// at begin all updates modules are outdated
/******/ 		// the "outdated" status can propagate to parents if they don't accept the children
/******/ 		var outdatedDependencies = {};
/******/ 		var outdatedModules = [];
/******/ 		var appliedUpdate = {};
/******/
/******/ 		var warnUnexpectedRequire = function warnUnexpectedRequire() {
/******/ 			console.warn(
/******/ 				"[HMR] unexpected require(" + result.moduleId + ") to disposed module"
/******/ 			);
/******/ 		};
/******/
/******/ 		for (var id in hotUpdate) {
/******/ 			if (Object.prototype.hasOwnProperty.call(hotUpdate, id)) {
/******/ 				moduleId = toModuleId(id);
/******/ 				/** @type {TODO} */
/******/ 				var result;
/******/ 				if (hotUpdate[id]) {
/******/ 					result = getAffectedStuff(moduleId);
/******/ 				} else {
/******/ 					result = {
/******/ 						type: "disposed",
/******/ 						moduleId: id
/******/ 					};
/******/ 				}
/******/ 				/** @type {Error|false} */
/******/ 				var abortError = false;
/******/ 				var doApply = false;
/******/ 				var doDispose = false;
/******/ 				var chainInfo = "";
/******/ 				if (result.chain) {
/******/ 					chainInfo = "\nUpdate propagation: " + result.chain.join(" -> ");
/******/ 				}
/******/ 				switch (result.type) {
/******/ 					case "self-declined":
/******/ 						if (options.onDeclined) options.onDeclined(result);
/******/ 						if (!options.ignoreDeclined)
/******/ 							abortError = new Error(
/******/ 								"Aborted because of self decline: " +
/******/ 									result.moduleId +
/******/ 									chainInfo
/******/ 							);
/******/ 						break;
/******/ 					case "declined":
/******/ 						if (options.onDeclined) options.onDeclined(result);
/******/ 						if (!options.ignoreDeclined)
/******/ 							abortError = new Error(
/******/ 								"Aborted because of declined dependency: " +
/******/ 									result.moduleId +
/******/ 									" in " +
/******/ 									result.parentId +
/******/ 									chainInfo
/******/ 							);
/******/ 						break;
/******/ 					case "unaccepted":
/******/ 						if (options.onUnaccepted) options.onUnaccepted(result);
/******/ 						if (!options.ignoreUnaccepted)
/******/ 							abortError = new Error(
/******/ 								"Aborted because " + moduleId + " is not accepted" + chainInfo
/******/ 							);
/******/ 						break;
/******/ 					case "accepted":
/******/ 						if (options.onAccepted) options.onAccepted(result);
/******/ 						doApply = true;
/******/ 						break;
/******/ 					case "disposed":
/******/ 						if (options.onDisposed) options.onDisposed(result);
/******/ 						doDispose = true;
/******/ 						break;
/******/ 					default:
/******/ 						throw new Error("Unexception type " + result.type);
/******/ 				}
/******/ 				if (abortError) {
/******/ 					hotSetStatus("abort");
/******/ 					return Promise.reject(abortError);
/******/ 				}
/******/ 				if (doApply) {
/******/ 					appliedUpdate[moduleId] = hotUpdate[moduleId];
/******/ 					addAllToSet(outdatedModules, result.outdatedModules);
/******/ 					for (moduleId in result.outdatedDependencies) {
/******/ 						if (
/******/ 							Object.prototype.hasOwnProperty.call(
/******/ 								result.outdatedDependencies,
/******/ 								moduleId
/******/ 							)
/******/ 						) {
/******/ 							if (!outdatedDependencies[moduleId])
/******/ 								outdatedDependencies[moduleId] = [];
/******/ 							addAllToSet(
/******/ 								outdatedDependencies[moduleId],
/******/ 								result.outdatedDependencies[moduleId]
/******/ 							);
/******/ 						}
/******/ 					}
/******/ 				}
/******/ 				if (doDispose) {
/******/ 					addAllToSet(outdatedModules, [result.moduleId]);
/******/ 					appliedUpdate[moduleId] = warnUnexpectedRequire;
/******/ 				}
/******/ 			}
/******/ 		}
/******/
/******/ 		// Store self accepted outdated modules to require them later by the module system
/******/ 		var outdatedSelfAcceptedModules = [];
/******/ 		for (i = 0; i < outdatedModules.length; i++) {
/******/ 			moduleId = outdatedModules[i];
/******/ 			if (
/******/ 				installedModules[moduleId] &&
/******/ 				installedModules[moduleId].hot._selfAccepted
/******/ 			)
/******/ 				outdatedSelfAcceptedModules.push({
/******/ 					module: moduleId,
/******/ 					errorHandler: installedModules[moduleId].hot._selfAccepted
/******/ 				});
/******/ 		}
/******/
/******/ 		// Now in "dispose" phase
/******/ 		hotSetStatus("dispose");
/******/ 		Object.keys(hotAvailableFilesMap).forEach(function(chunkId) {
/******/ 			if (hotAvailableFilesMap[chunkId] === false) {
/******/ 				hotDisposeChunk(chunkId);
/******/ 			}
/******/ 		});
/******/
/******/ 		var idx;
/******/ 		var queue = outdatedModules.slice();
/******/ 		while (queue.length > 0) {
/******/ 			moduleId = queue.pop();
/******/ 			module = installedModules[moduleId];
/******/ 			if (!module) continue;
/******/
/******/ 			var data = {};
/******/
/******/ 			// Call dispose handlers
/******/ 			var disposeHandlers = module.hot._disposeHandlers;
/******/ 			for (j = 0; j < disposeHandlers.length; j++) {
/******/ 				cb = disposeHandlers[j];
/******/ 				cb(data);
/******/ 			}
/******/ 			hotCurrentModuleData[moduleId] = data;
/******/
/******/ 			// disable module (this disables requires from this module)
/******/ 			module.hot.active = false;
/******/
/******/ 			// remove module from cache
/******/ 			delete installedModules[moduleId];
/******/
/******/ 			// when disposing there is no need to call dispose handler
/******/ 			delete outdatedDependencies[moduleId];
/******/
/******/ 			// remove "parents" references from all children
/******/ 			for (j = 0; j < module.children.length; j++) {
/******/ 				var child = installedModules[module.children[j]];
/******/ 				if (!child) continue;
/******/ 				idx = child.parents.indexOf(moduleId);
/******/ 				if (idx >= 0) {
/******/ 					child.parents.splice(idx, 1);
/******/ 				}
/******/ 			}
/******/ 		}
/******/
/******/ 		// remove outdated dependency from module children
/******/ 		var dependency;
/******/ 		var moduleOutdatedDependencies;
/******/ 		for (moduleId in outdatedDependencies) {
/******/ 			if (
/******/ 				Object.prototype.hasOwnProperty.call(outdatedDependencies, moduleId)
/******/ 			) {
/******/ 				module = installedModules[moduleId];
/******/ 				if (module) {
/******/ 					moduleOutdatedDependencies = outdatedDependencies[moduleId];
/******/ 					for (j = 0; j < moduleOutdatedDependencies.length; j++) {
/******/ 						dependency = moduleOutdatedDependencies[j];
/******/ 						idx = module.children.indexOf(dependency);
/******/ 						if (idx >= 0) module.children.splice(idx, 1);
/******/ 					}
/******/ 				}
/******/ 			}
/******/ 		}
/******/
/******/ 		// Not in "apply" phase
/******/ 		hotSetStatus("apply");
/******/
/******/ 		hotCurrentHash = hotUpdateNewHash;
/******/
/******/ 		// insert new code
/******/ 		for (moduleId in appliedUpdate) {
/******/ 			if (Object.prototype.hasOwnProperty.call(appliedUpdate, moduleId)) {
/******/ 				modules[moduleId] = appliedUpdate[moduleId];
/******/ 			}
/******/ 		}
/******/
/******/ 		// call accept handlers
/******/ 		var error = null;
/******/ 		for (moduleId in outdatedDependencies) {
/******/ 			if (
/******/ 				Object.prototype.hasOwnProperty.call(outdatedDependencies, moduleId)
/******/ 			) {
/******/ 				module = installedModules[moduleId];
/******/ 				if (module) {
/******/ 					moduleOutdatedDependencies = outdatedDependencies[moduleId];
/******/ 					var callbacks = [];
/******/ 					for (i = 0; i < moduleOutdatedDependencies.length; i++) {
/******/ 						dependency = moduleOutdatedDependencies[i];
/******/ 						cb = module.hot._acceptedDependencies[dependency];
/******/ 						if (cb) {
/******/ 							if (callbacks.indexOf(cb) !== -1) continue;
/******/ 							callbacks.push(cb);
/******/ 						}
/******/ 					}
/******/ 					for (i = 0; i < callbacks.length; i++) {
/******/ 						cb = callbacks[i];
/******/ 						try {
/******/ 							cb(moduleOutdatedDependencies);
/******/ 						} catch (err) {
/******/ 							if (options.onErrored) {
/******/ 								options.onErrored({
/******/ 									type: "accept-errored",
/******/ 									moduleId: moduleId,
/******/ 									dependencyId: moduleOutdatedDependencies[i],
/******/ 									error: err
/******/ 								});
/******/ 							}
/******/ 							if (!options.ignoreErrored) {
/******/ 								if (!error) error = err;
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 				}
/******/ 			}
/******/ 		}
/******/
/******/ 		// Load self accepted modules
/******/ 		for (i = 0; i < outdatedSelfAcceptedModules.length; i++) {
/******/ 			var item = outdatedSelfAcceptedModules[i];
/******/ 			moduleId = item.module;
/******/ 			hotCurrentParents = [moduleId];
/******/ 			try {
/******/ 				__webpack_require__(moduleId);
/******/ 			} catch (err) {
/******/ 				if (typeof item.errorHandler === "function") {
/******/ 					try {
/******/ 						item.errorHandler(err);
/******/ 					} catch (err2) {
/******/ 						if (options.onErrored) {
/******/ 							options.onErrored({
/******/ 								type: "self-accept-error-handler-errored",
/******/ 								moduleId: moduleId,
/******/ 								error: err2,
/******/ 								originalError: err
/******/ 							});
/******/ 						}
/******/ 						if (!options.ignoreErrored) {
/******/ 							if (!error) error = err2;
/******/ 						}
/******/ 						if (!error) error = err;
/******/ 					}
/******/ 				} else {
/******/ 					if (options.onErrored) {
/******/ 						options.onErrored({
/******/ 							type: "self-accept-errored",
/******/ 							moduleId: moduleId,
/******/ 							error: err
/******/ 						});
/******/ 					}
/******/ 					if (!options.ignoreErrored) {
/******/ 						if (!error) error = err;
/******/ 					}
/******/ 				}
/******/ 			}
/******/ 		}
/******/
/******/ 		// handle errors in accept handlers and self accepted module load
/******/ 		if (error) {
/******/ 			hotSetStatus("fail");
/******/ 			return Promise.reject(error);
/******/ 		}
/******/
/******/ 		hotSetStatus("idle");
/******/ 		return new Promise(function(resolve) {
/******/ 			resolve(outdatedModules);
/******/ 		});
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {},
/******/ 			hot: hotCreateModule(moduleId),
/******/ 			parents: (hotCurrentParentsTemp = hotCurrentParents, hotCurrentParents = [], hotCurrentParentsTemp),
/******/ 			children: []
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, hotCreateRequire(moduleId));
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "file/widget/occReactComponent/js";
/******/
/******/ 	// __webpack_hash__
/******/ 	__webpack_require__.h = function() { return hotCurrentHash; };
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return hotCreateRequire("./app/js/index.jsx")(__webpack_require__.s = "./app/js/index.jsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./app/js/app/App.jsx":
/*!****************************!*\
  !*** ./app/js/app/App.jsx ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _react = __webpack_require__(/*! react */ "react");

  var _react2 = _interopRequireDefault(_react);

  var _styles = __webpack_require__(/*! ./styles/styles.css */ "./app/js/app/styles/styles.css");

  var _styles2 = _interopRequireDefault(_styles);

  var _logo = __webpack_require__(/*! ./images/logo.png */ "./app/js/app/images/logo.png");

  var _logo2 = _interopRequireDefault(_logo);

  var _Button = __webpack_require__(/*! ./modules/Button/Button */ "./app/js/app/modules/Button/Button.jsx");

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  (function () {
    var enterModule = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").enterModule;

    enterModule && enterModule(module);
  })();

  function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

  var App = function App(props) {
    // Including logs for example
    var model = props.model,
        occDependencies = props.occDependencies;
    var logger = occDependencies.logger;
    logger.info("[occ-react-component]: Hello from OCC's Winston logger... :) ");
    console.log("[occ-react-component]:  widget model:", model);
    console.log("[occ-react-component]:  application defined dependencies:", occDependencies);
    return _react2.default.createElement(_react2.default.Fragment, null, _react2.default.createElement("div", {
      className: _styles2.default["occ-react-component"]
    }, _react2.default.createElement("h4", null, "occ-react-componentssD"), _react2.default.createElement("div", {
      className: _styles2.default.example
    }, _react2.default.createElement("div", null, _react2.default.createElement("img", {
      className: _styles2.default.logo,
      src: _logo2.default,
      alt: "LEEDIUM LOGO"
    })), _react2.default.createElement("div", {
      className: _styles2.default["oracle-logo"]
    })), _react2.default.createElement("div", {
      className: _styles2.default.example
    }, _react2.default.createElement(_Button.Button, _extends({
      label: "Default"
    }, props)), _react2.default.createElement(_Button.Button, _extends({
      buttonType: _Button.ButtonType.primary,
      label: "Primary Button"
    }, props)), _react2.default.createElement(_Button.Button, _extends({
      buttonType: _Button.ButtonType.secondary,
      label: "Secondary Button"
    }, props))), _react2.default.createElement("div", null, _react2.default.createElement(_Button.RadiusButton, {
      radius: "50px",
      buttonType: _Button.ButtonType.primary,
      label: "Radius Button"
    }))));
  };

  var _default = App;
  exports.default = _default;
  ;
  /* eslint-disable global-require, import/no-unresolved */

  (function register() {
    /* react-hot-loader/webpack */
    var reactHotLoader = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").default;

    if (!reactHotLoader) {
      return;
    }
    /* eslint-disable camelcase, no-undef */


    var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : exports;
    /* eslint-enable camelcase, no-undef */

    if (typeof webpackExports === 'function') {
      reactHotLoader.register(webpackExports, 'module.exports', "/Users/davidlee/WebstormProjects/occ-react-component/app/js/app/App.jsx");
      return;
    }
    /* eslint-disable no-restricted-syntax */


    for (var key in webpackExports) {
      /* eslint-enable no-restricted-syntax */
      if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) {
        continue;
      }

      var namedExport = void 0;

      try {
        namedExport = webpackExports[key];
      } catch (err) {
        continue;
      }

      reactHotLoader.register(namedExport, key, "/Users/davidlee/WebstormProjects/occ-react-component/app/js/app/App.jsx");
    }
  })();

  ;

  (function () {
    var reactHotLoader = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").default;

    var leaveModule = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").leaveModule;

    if (!reactHotLoader) {
      return;
    }

    reactHotLoader.register(App, "App", "/Users/davidlee/WebstormProjects/occ-react-component/app/js/app/App.jsx");
    reactHotLoader.register(_default, "default", "/Users/davidlee/WebstormProjects/occ-react-component/app/js/app/App.jsx");
    leaveModule(module);
  })();

  ;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./app/js/app/images/logo.png":
/*!************************************!*\
  !*** ./app/js/app/images/logo.png ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;charset=utf-8;base64,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E74Z4CSPh1ppOGgLsjymATSfeOIJjZdHxljipqHFhnFYfpTlUd+sWTPfrVs3L/sxqX5WgA3x18aNG6cp0NOeH+rVo0cP9ePCtL5z584ePyDAsLw+4bcBjgFOLHMEJkk6GuC861m2wIGSZYwkWnFN1tJ1QA8aNEiXOoJAr/ZoS2rVUnDR/6MV9OvXL1d+oVosqQEchCA6QSI2T5kyxU+fPt2Tx4hlNpbb4vgtLJmSFlo2/z3BXYn+HFdkb0kdh0eOHKmTrjQNSky1vexX+YsuukgzgsqejwIOvjhJQGiAY4ATy7RxzFx6Pqj8YlPf5JfUGKS2pBYtkkzDaRwNRywJPaFlAByWuwhfNGDAAE8EZ4R76Vgs/c5yuxjYKGAOHjxYl9WItxdX6N+pU6fq/g1glrZcT526d++uacpZ6idwLEtqOICyUlBal9LvjQk4/wMAAP//H/TyaQAAH81JREFU7Z0J9BxF8cc7yn3KLXKjHIEAQUEUgYRb5AxHFEJIMILc+hDlfqDwOAQeELmUI0C478PIES4NGhCQU+S+lUNRQUEUtP/1KVO//2QyPbO7v939Tdbq9/bNzuzsTHd1dX27qquqw9133x27Vd544414++23x8MOOywOHjw4hhBKP/POO29ceeWV41577RUfeuihblUz+Z6//e1v8dlnn43nnXde/PznPx8/9rGPxUGDBpW2oaqN7fgdOq200krxm9/8ZnzwwQeT9bcf/vOf/8SPPvooTp06NY4dOzYut9xyce655x7wdkBLaPqFL3whXnLJJfHVV1+N77//vlU7eaRPfvSjH8UddtghLrnkkpXtWGKJJeKIESPi6aefHp955pnkc5v9gbr+/ve/j1dccUUcNmxYnGOOOeLHP/7xZH1mnXXWON9888Uvf/nL8eabb45//vOf4z//+c/ka//0pz/FX/3qV/G4446Lq622WvK5xlP06fLLLx933333eN9998V///vfkb5Plddeey1ee+21cf/994+f+cxnKp+/8MILx/XWWy8eccQR8fHHH089tuXrjzzySPzOd74T11prrbjAAgtU1oc6U3faQFtShXH83HPPxfPPP7+hcTzXXHPFpZZaKo4ePTref//98ZVXXtE+Ri59+tOfLq0XPI0M+973vhcnTZoU//CHP6Sq1ffcvffeu/K59DEyFNojUxkrP//5z+P2228f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"

/***/ }),

/***/ "./app/js/app/images/oracle-learning-partner.png":
/*!*******************************************************!*\
  !*** ./app/js/app/images/oracle-learning-partner.png ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;charset=utf-8;base64,iVBORw0KGgoAAAANSUhEUgAAAPEAAAAsCAYAAAC0a174AAAAAXNSR0IArs4c6QAABIVpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IlhNUCBDb3JlIDUuNC4wIj4KICAgPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4KICAgICAgPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIKICAgICAgICAgICAgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iCiAgICAgICAgICAgIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIgogICAgICAgICAgICB4bWxuczp0aWZmPSJodHRwOi8vbnMuYWRvYmUuY29tL3RpZmYvMS4wLyIKICAgICAgICAgICAgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIj4KICAgICAgICAgPHhtcE1NOkRlcml2ZWRGcm9tIHJkZjpwYXJzZVR5cGU9IlJlc291cmNlIj4KICAgICAgICAgICAgPHN0UmVmOmluc3RhbmNlSUQ+eG1wLmlpZDo3NDY1OWYyMS01ZjRhLTQ1MjgtOTljZi0xMzNhNzYxNmIwYmQ8L3N0UmVmOmluc3RhbmNlSUQ+CiAgICAgICAgICAgIDxzdFJlZjpkb2N1bWVudElEPnhtcC5kaWQ6NzQ2NTlmMjEtNWY0YS00NTI4LTk5Y2YtMTMzYTc2MTZiMGJkPC9zdFJlZjpkb2N1bWVudElEPgogICAgICAgICA8L3htcE1NOkRlcml2ZWRGcm9tPgogICAgICAgICA8eG1wTU06RG9jdW1lbnRJRD54bXAuZGlkOkM3QkI0Q0Y1MjlEMTExRThCODUyODA1RjgwRjBGRDRGPC94bXBNTTpEb2N1bWVudElEPgogICAgICAgICA8eG1wTU06SW5zdGFuY2VJRD54bXAuaWlkOkM3QkI0Q0Y0MjlEMTExRThCODUyODA1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"

/***/ }),

/***/ "./app/js/app/modules/Button/Button.jsx":
/*!**********************************************!*\
  !*** ./app/js/app/modules/Button/Button.jsx ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.RadiusButton = exports.Button = exports.ButtonType = undefined;

  var _react = __webpack_require__(/*! react */ "react");

  var _react2 = _interopRequireDefault(_react);

  var _styledComponents = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");

  var _styledComponents2 = _interopRequireDefault(_styledComponents);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  (function () {
    var enterModule = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").enterModule;

    enterModule && enterModule(module);
  })();

  function _templateObject2() {
    var data = _taggedTemplateLiteralLoose(["\n  border-radius: ", ";\n  padding: 50px;"]);

    _templateObject2 = function _templateObject2() {
      return data;
    };

    return data;
  }

  function _templateObject() {
    var data = _taggedTemplateLiteralLoose(["\n    background-color: ", ";\n    color: ", ""]);

    _templateObject = function _templateObject() {
      return data;
    };

    return data;
  }

  function _taggedTemplateLiteralLoose(strings, raw) { if (!raw) { raw = strings.slice(0); } strings.raw = raw; return strings; }

  var ButtonType = exports.ButtonType = {
    default: "blue",
    primary: "red",
    secondary: "yellow"
  }; // Styles

  var StyledButton = _styledComponents2.default.button(_templateObject(), function (props) {
    return props.buttonType || ButtonType.default;
  }, function (props) {
    return props.buttonType === ButtonType.secondary ? "black" : "white";
  }); // Extend the Styled Button Class


  var RadiusCircleButton = (0, _styledComponents2.default)(StyledButton)(_templateObject2(), function (props) {
    return props.radius;
  }); // Default Button

  var Button = exports.Button = function Button(props) {
    var label = props.label;
    return _react2.default.createElement(StyledButton, props, label);
  }; // Circle Button


  var RadiusButton = exports.RadiusButton = function RadiusButton(props) {
    var label = props.label;
    return _react2.default.createElement(RadiusCircleButton, props, label);
  };

  ;
  /* eslint-disable global-require, import/no-unresolved */

  (function register() {
    /* react-hot-loader/webpack */
    var reactHotLoader = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").default;

    if (!reactHotLoader) {
      return;
    }
    /* eslint-disable camelcase, no-undef */


    var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : exports;
    /* eslint-enable camelcase, no-undef */

    if (typeof webpackExports === 'function') {
      reactHotLoader.register(webpackExports, 'module.exports', "/Users/davidlee/WebstormProjects/occ-react-component/app/js/app/modules/Button/Button.jsx");
      return;
    }
    /* eslint-disable no-restricted-syntax */


    for (var key in webpackExports) {
      /* eslint-enable no-restricted-syntax */
      if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) {
        continue;
      }

      var namedExport = void 0;

      try {
        namedExport = webpackExports[key];
      } catch (err) {
        continue;
      }

      reactHotLoader.register(namedExport, key, "/Users/davidlee/WebstormProjects/occ-react-component/app/js/app/modules/Button/Button.jsx");
    }
  })();

  ;

  (function () {
    var reactHotLoader = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").default;

    var leaveModule = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").leaveModule;

    if (!reactHotLoader) {
      return;
    }

    reactHotLoader.register(ButtonType, "ButtonType", "/Users/davidlee/WebstormProjects/occ-react-component/app/js/app/modules/Button/Button.jsx");
    reactHotLoader.register(StyledButton, "StyledButton", "/Users/davidlee/WebstormProjects/occ-react-component/app/js/app/modules/Button/Button.jsx");
    reactHotLoader.register(RadiusCircleButton, "RadiusCircleButton", "/Users/davidlee/WebstormProjects/occ-react-component/app/js/app/modules/Button/Button.jsx");
    reactHotLoader.register(Button, "Button", "/Users/davidlee/WebstormProjects/occ-react-component/app/js/app/modules/Button/Button.jsx");
    reactHotLoader.register(RadiusButton, "RadiusButton", "/Users/davidlee/WebstormProjects/occ-react-component/app/js/app/modules/Button/Button.jsx");
    leaveModule(module);
  })();

  ;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../node_modules/webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./app/js/app/occProvider/OccProvider.jsx":
/*!************************************************!*\
  !*** ./app/js/app/occProvider/OccProvider.jsx ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _react = __webpack_require__(/*! react */ "react");

  var _react2 = _interopRequireDefault(_react);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  (function () {
    var enterModule = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").enterModule;

    enterModule && enterModule(module);
  })();

  function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

  function OccProvider(WrappedComponent, occData) {
    return (
      /*#__PURE__*/
      function (_Component) {
        _inheritsLoose(_class, _Component);

        function _class() {
          return _Component.apply(this, arguments) || this;
        }

        var _proto = _class.prototype;

        _proto.render = function render() {
          var children = this.props.children;
          return _react2.default.createElement(WrappedComponent, occData, children);
        };

        // @ts-ignore
        _proto.__reactstandin__regenerateByEval = function __reactstandin__regenerateByEval(key, code) {
          // @ts-ignore
          this[key] = eval(code);
        };

        return _class;
      }(_react.Component)
    );
  }

  var _default = OccProvider;
  exports.default = _default;
  ;
  /* eslint-disable global-require, import/no-unresolved */

  (function register() {
    /* react-hot-loader/webpack */
    var reactHotLoader = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").default;

    if (!reactHotLoader) {
      return;
    }
    /* eslint-disable camelcase, no-undef */


    var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : exports;
    /* eslint-enable camelcase, no-undef */

    if (typeof webpackExports === 'function') {
      reactHotLoader.register(webpackExports, 'module.exports', "/Users/davidlee/WebstormProjects/occ-react-component/app/js/app/occProvider/OccProvider.jsx");
      return;
    }
    /* eslint-disable no-restricted-syntax */


    for (var key in webpackExports) {
      /* eslint-enable no-restricted-syntax */
      if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) {
        continue;
      }

      var namedExport = void 0;

      try {
        namedExport = webpackExports[key];
      } catch (err) {
        continue;
      }

      reactHotLoader.register(namedExport, key, "/Users/davidlee/WebstormProjects/occ-react-component/app/js/app/occProvider/OccProvider.jsx");
    }
  })();

  ;

  (function () {
    var reactHotLoader = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").default;

    var leaveModule = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").leaveModule;

    if (!reactHotLoader) {
      return;
    }

    reactHotLoader.register(OccProvider, "OccProvider", "/Users/davidlee/WebstormProjects/occ-react-component/app/js/app/occProvider/OccProvider.jsx");
    reactHotLoader.register(_default, "default", "/Users/davidlee/WebstormProjects/occ-react-component/app/js/app/occProvider/OccProvider.jsx");
    leaveModule(module);
  })();

  ;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./app/js/app/styles/styles.css":
/*!**************************************!*\
  !*** ./app/js/app/styles/styles.css ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js??ref--7-1!../../../../node_modules/postcss-loader/src??ref--7-2!./styles.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./app/js/app/styles/styles.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(true) {
	module.hot.accept(/*! !../../../../node_modules/css-loader/dist/cjs.js??ref--7-1!../../../../node_modules/postcss-loader/src??ref--7-2!./styles.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./app/js/app/styles/styles.css", function() {
		var newContent = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js??ref--7-1!../../../../node_modules/postcss-loader/src??ref--7-2!./styles.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./app/js/app/styles/styles.css");

		if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./app/js/index.jsx":
/*!**************************!*\
  !*** ./app/js/index.jsx ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () {
  "use strict";

  var _root = __webpack_require__(/*! react-hot-loader/root */ "./node_modules/react-hot-loader/root.js");

  var _react = __webpack_require__(/*! react */ "react");

  var _react2 = _interopRequireDefault(_react);

  var _reactDom = __webpack_require__(/*! react-dom */ "react-dom");

  var _reactDom2 = _interopRequireDefault(_reactDom);

  var _App = __webpack_require__(/*! ./app/App */ "./app/js/app/App.jsx");

  var _App2 = _interopRequireDefault(_App);

  var _OccProvider = __webpack_require__(/*! ./app/occProvider/OccProvider */ "./app/js/app/occProvider/OccProvider.jsx");

  var _OccProvider2 = _interopRequireDefault(_OccProvider);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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
   */
  !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! knockout */ "knockout"), __webpack_require__(/*! jquery */ "jquery"), __webpack_require__(/*! pubsub */ "pubsub"), __webpack_require__(/*! notifier */ "notifier"), __webpack_require__(/*! ccConstants */ "ccConstants"), __webpack_require__(/*! ccLogger */ "ccLogger")], __WEBPACK_AMD_DEFINE_RESULT__ = (function def(ko, $, pubsub, notifier, CCConstants, logger) {
    var App;
    return {
      onLoad: function onLoad(model) {
        var occDependencies = {
          ko: ko,
          $: $,
          pubsub: pubsub,
          notifier: notifier,
          CCConstants: CCConstants,
          logger: logger
        }; // Mode and dependencies get injected into your App here.

        App = (0, _root.hot)((0, _OccProvider2.default)(_App2.default, {
          model: model,
          occDependencies: occDependencies
        }));
      },
      onRender: function onRender() {
        _reactDom2.default.render(_react2.default.createElement(App, null), document.getElementById('occReactComponent'));
      }
    };
  }).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  ;
  /* eslint-disable global-require, import/no-unresolved */

  (function register() {
    /* react-hot-loader/webpack */
    var reactHotLoader = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").default;

    if (!reactHotLoader) {
      return;
    }
    /* eslint-disable camelcase, no-undef */


    var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : exports;
    /* eslint-enable camelcase, no-undef */

    if (typeof webpackExports === 'function') {
      reactHotLoader.register(webpackExports, 'module.exports', "/Users/davidlee/WebstormProjects/occ-react-component/app/js/index.jsx");
      return;
    }
    /* eslint-disable no-restricted-syntax */


    for (var key in webpackExports) {
      /* eslint-enable no-restricted-syntax */
      if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) {
        continue;
      }

      var namedExport = void 0;

      try {
        namedExport = webpackExports[key];
      } catch (err) {
        continue;
      }

      reactHotLoader.register(namedExport, key, "/Users/davidlee/WebstormProjects/occ-react-component/app/js/index.jsx");
    }
  })();
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/@emotion/is-prop-valid/dist/is-prop-valid.browser.esm.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@emotion/is-prop-valid/dist/is-prop-valid.browser.esm.js ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _emotion_memoize__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/memoize */ "./node_modules/@emotion/memoize/dist/memoize.browser.esm.js");

var reactPropsRegex = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|default|defer|dir|disabled|download|draggable|encType|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|itemProp|itemScope|itemType|itemID|itemRef|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/; // https://esbench.com/bench/5bfee68a4cd7e6009ef61d23

var index = Object(_emotion_memoize__WEBPACK_IMPORTED_MODULE_0__["default"])(function (prop) {
  return reactPropsRegex.test(prop) || prop.charCodeAt(0) === 111
  /* o */
  && prop.charCodeAt(1) === 110
  /* n */
  && prop.charCodeAt(2) < 91;
}
/* Z+1 */
);
/* harmony default export */ __webpack_exports__["default"] = (index);
;
/* eslint-disable global-require, import/no-unresolved */

(function register() {
  /* react-hot-loader/webpack */
  var reactHotLoader = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").default;

  if (!reactHotLoader) {
    return;
  }
  /* eslint-disable camelcase, no-undef */


  var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : exports;
  /* eslint-enable camelcase, no-undef */

  if (typeof webpackExports === 'function') {
    reactHotLoader.register(webpackExports, 'module.exports', "/Users/davidlee/WebstormProjects/occ-react-component/node_modules/@emotion/is-prop-valid/dist/is-prop-valid.browser.esm.js");
    return;
  }
  /* eslint-disable no-restricted-syntax */


  for (var key in webpackExports) {
    /* eslint-enable no-restricted-syntax */
    if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) {
      continue;
    }

    var namedExport = void 0;

    try {
      namedExport = webpackExports[key];
    } catch (err) {
      continue;
    }

    reactHotLoader.register(namedExport, key, "/Users/davidlee/WebstormProjects/occ-react-component/node_modules/@emotion/is-prop-valid/dist/is-prop-valid.browser.esm.js");
  }
})();

/***/ }),

/***/ "./node_modules/@emotion/memoize/dist/memoize.browser.esm.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@emotion/memoize/dist/memoize.browser.esm.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function memoize(fn) {
  var cache = {};
  return function (arg) {
    if (cache[arg] === undefined) cache[arg] = fn(arg);
    return cache[arg];
  };
}

/* harmony default export */ __webpack_exports__["default"] = (memoize);
;
/* eslint-disable global-require, import/no-unresolved */

(function register() {
  /* react-hot-loader/webpack */
  var reactHotLoader = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").default;

  if (!reactHotLoader) {
    return;
  }
  /* eslint-disable camelcase, no-undef */


  var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : exports;
  /* eslint-enable camelcase, no-undef */

  if (typeof webpackExports === 'function') {
    reactHotLoader.register(webpackExports, 'module.exports', "/Users/davidlee/WebstormProjects/occ-react-component/node_modules/@emotion/memoize/dist/memoize.browser.esm.js");
    return;
  }
  /* eslint-disable no-restricted-syntax */


  for (var key in webpackExports) {
    /* eslint-enable no-restricted-syntax */
    if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) {
      continue;
    }

    var namedExport = void 0;

    try {
      namedExport = webpackExports[key];
    } catch (err) {
      continue;
    }

    reactHotLoader.register(namedExport, key, "/Users/davidlee/WebstormProjects/occ-react-component/node_modules/@emotion/memoize/dist/memoize.browser.esm.js");
  }
})();

/***/ }),

/***/ "./node_modules/@emotion/unitless/dist/unitless.browser.esm.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@emotion/unitless/dist/unitless.browser.esm.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var unitlessKeys = {
  animationIterationCount: 1,
  borderImageOutset: 1,
  borderImageSlice: 1,
  borderImageWidth: 1,
  boxFlex: 1,
  boxFlexGroup: 1,
  boxOrdinalGroup: 1,
  columnCount: 1,
  columns: 1,
  flex: 1,
  flexGrow: 1,
  flexPositive: 1,
  flexShrink: 1,
  flexNegative: 1,
  flexOrder: 1,
  gridRow: 1,
  gridRowEnd: 1,
  gridRowSpan: 1,
  gridRowStart: 1,
  gridColumn: 1,
  gridColumnEnd: 1,
  gridColumnSpan: 1,
  gridColumnStart: 1,
  msGridRow: 1,
  msGridRowSpan: 1,
  msGridColumn: 1,
  msGridColumnSpan: 1,
  fontWeight: 1,
  lineHeight: 1,
  opacity: 1,
  order: 1,
  orphans: 1,
  tabSize: 1,
  widows: 1,
  zIndex: 1,
  zoom: 1,
  WebkitLineClamp: 1,
  // SVG-related properties
  fillOpacity: 1,
  floodOpacity: 1,
  stopOpacity: 1,
  strokeDasharray: 1,
  strokeDashoffset: 1,
  strokeMiterlimit: 1,
  strokeOpacity: 1,
  strokeWidth: 1
};
/* harmony default export */ __webpack_exports__["default"] = (unitlessKeys);
;
/* eslint-disable global-require, import/no-unresolved */

(function register() {
  /* react-hot-loader/webpack */
  var reactHotLoader = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").default;

  if (!reactHotLoader) {
    return;
  }
  /* eslint-disable camelcase, no-undef */


  var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : exports;
  /* eslint-enable camelcase, no-undef */

  if (typeof webpackExports === 'function') {
    reactHotLoader.register(webpackExports, 'module.exports', "/Users/davidlee/WebstormProjects/occ-react-component/node_modules/@emotion/unitless/dist/unitless.browser.esm.js");
    return;
  }
  /* eslint-disable no-restricted-syntax */


  for (var key in webpackExports) {
    /* eslint-enable no-restricted-syntax */
    if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) {
      continue;
    }

    var namedExport = void 0;

    try {
      namedExport = webpackExports[key];
    } catch (err) {
      continue;
    }

    reactHotLoader.register(namedExport, key, "/Users/davidlee/WebstormProjects/occ-react-component/node_modules/@emotion/unitless/dist/unitless.browser.esm.js");
  }
})();

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./app/js/app/styles/styles.css":
/*!**********************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--7-1!./node_modules/postcss-loader/src??ref--7-2!./app/js/app/styles/styles.css ***!
  \**********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Imports
var urlEscape = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/url-escape.js */ "./node_modules/css-loader/dist/runtime/url-escape.js");
var ___CSS_LOADER_URL___0___ = urlEscape(__webpack_require__(/*! ../images/oracle-learning-partner.png */ "./app/js/app/images/oracle-learning-partner.png"));

// Module
exports.push([module.i, "._2cbPDCozPPjP0u_8dFOtdl{background:grey;color:#fff;text-align:center;padding:50px}.mr1PeWI1dmjKARIIriPC9{margin:10px 0}._1tp4w4ILOcPBVueubARftW{width:200px}._2GMFjIm9jU5ABEP40qTR9T{display:inline-block;background:url(" + ___CSS_LOADER_URL___0___ + ") no-repeat;width:241px;height:44px}", ""]);

// Exports
exports.locals = {
	"occ-react-component": "_2cbPDCozPPjP0u_8dFOtdl",
	"example": "mr1PeWI1dmjKARIIriPC9",
	"logo": "_1tp4w4ILOcPBVueubARftW",
	"oracle-logo": "_2GMFjIm9jU5ABEP40qTR9T"
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader

module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return '@media ' + item[2] + '{' + content + '}';
      } else {
        return content;
      }
    }).join('');
  }; // import a list of modules into the list


  list.i = function (modules, mediaQuery) {
    if (typeof modules === 'string') {
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    for (var i = 0; i < this.length; i++) {
      var id = this[i][0];

      if (id != null) {
        alreadyImportedModules[id] = true;
      }
    }

    for (i = 0; i < modules.length; i++) {
      var item = modules[i]; // skip already imported module
      // this implementation is not 100% perfect for weird media query combinations
      // when a module is imported multiple times with different media queries.
      // I hope this will never occur (Hey this way we have smaller bundles)

      if (item[0] == null || !alreadyImportedModules[item[0]]) {
        if (mediaQuery && !item[2]) {
          item[2] = mediaQuery;
        } else if (mediaQuery) {
          item[2] = '(' + item[2] + ') and (' + mediaQuery + ')';
        }

        list.push(item);
      }
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || '';
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */';
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;
  return '/*# ' + data + ' */';
}

;
/* eslint-disable global-require, import/no-unresolved */

(function register() {
  /* react-hot-loader/webpack */
  var reactHotLoader = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").default;

  if (!reactHotLoader) {
    return;
  }
  /* eslint-disable camelcase, no-undef */


  var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : exports;
  /* eslint-enable camelcase, no-undef */

  if (typeof webpackExports === 'function') {
    reactHotLoader.register(webpackExports, 'module.exports', "/Users/davidlee/WebstormProjects/occ-react-component/node_modules/css-loader/dist/runtime/api.js");
    return;
  }
  /* eslint-disable no-restricted-syntax */


  for (var key in webpackExports) {
    /* eslint-enable no-restricted-syntax */
    if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) {
      continue;
    }

    var namedExport = void 0;

    try {
      namedExport = webpackExports[key];
    } catch (err) {
      continue;
    }

    reactHotLoader.register(namedExport, key, "/Users/davidlee/WebstormProjects/occ-react-component/node_modules/css-loader/dist/runtime/api.js");
  }
})();

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/url-escape.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/url-escape.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function escape(url) {
  if (typeof url !== 'string') {
    return url;
  } // If url is already wrapped in quotes, remove them


  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]/.test(url)) {
    return '"' + url.replace(/"/g, '\\"').replace(/\n/g, '\\n') + '"';
  }

  return url;
};

;
/* eslint-disable global-require, import/no-unresolved */

(function register() {
  /* react-hot-loader/webpack */
  var reactHotLoader = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").default;

  if (!reactHotLoader) {
    return;
  }
  /* eslint-disable camelcase, no-undef */


  var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : exports;
  /* eslint-enable camelcase, no-undef */

  if (typeof webpackExports === 'function') {
    reactHotLoader.register(webpackExports, 'module.exports', "/Users/davidlee/WebstormProjects/occ-react-component/node_modules/css-loader/dist/runtime/url-escape.js");
    return;
  }
  /* eslint-disable no-restricted-syntax */


  for (var key in webpackExports) {
    /* eslint-enable no-restricted-syntax */
    if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) {
      continue;
    }

    var namedExport = void 0;

    try {
      namedExport = webpackExports[key];
    } catch (err) {
      continue;
    }

    reactHotLoader.register(namedExport, key, "/Users/davidlee/WebstormProjects/occ-react-component/node_modules/css-loader/dist/runtime/url-escape.js");
  }
})();

/***/ }),

/***/ "./node_modules/fast-levenshtein/levenshtein.js":
/*!******************************************************!*\
  !*** ./node_modules/fast-levenshtein/levenshtein.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var __WEBPACK_AMD_DEFINE_RESULT__;(function () {
  'use strict';

  var collator;

  try {
    collator = typeof Intl !== "undefined" && typeof Intl.Collator !== "undefined" ? Intl.Collator("generic", {
      sensitivity: "base"
    }) : null;
  } catch (err) {
    console.log("Collator could not be initialized and wouldn't be used");
  } // arrays to re-use


  var prevRow = [],
      str2Char = [];
  /**
   * Based on the algorithm at http://en.wikipedia.org/wiki/Levenshtein_distance.
   */

  var Levenshtein = {
    /**
     * Calculate levenshtein distance of the two strings.
     *
     * @param str1 String the first string.
     * @param str2 String the second string.
     * @param [options] Additional options.
     * @param [options.useCollator] Use `Intl.Collator` for locale-sensitive string comparison.
     * @return Integer the levenshtein distance (0 and above).
     */
    get: function (str1, str2, options) {
      var useCollator = options && collator && options.useCollator;
      var str1Len = str1.length,
          str2Len = str2.length; // base cases

      if (str1Len === 0) return str2Len;
      if (str2Len === 0) return str1Len; // two rows

      var curCol, nextCol, i, j, tmp; // initialise previous row

      for (i = 0; i < str2Len; ++i) {
        prevRow[i] = i;
        str2Char[i] = str2.charCodeAt(i);
      }

      prevRow[str2Len] = str2Len;
      var strCmp;

      if (useCollator) {
        // calculate current row distance from previous row using collator
        for (i = 0; i < str1Len; ++i) {
          nextCol = i + 1;

          for (j = 0; j < str2Len; ++j) {
            curCol = nextCol; // substution

            strCmp = 0 === collator.compare(str1.charAt(i), String.fromCharCode(str2Char[j]));
            nextCol = prevRow[j] + (strCmp ? 0 : 1); // insertion

            tmp = curCol + 1;

            if (nextCol > tmp) {
              nextCol = tmp;
            } // deletion


            tmp = prevRow[j + 1] + 1;

            if (nextCol > tmp) {
              nextCol = tmp;
            } // copy current col value into previous (in preparation for next iteration)


            prevRow[j] = curCol;
          } // copy last col value into previous (in preparation for next iteration)


          prevRow[j] = nextCol;
        }
      } else {
        // calculate current row distance from previous row without collator
        for (i = 0; i < str1Len; ++i) {
          nextCol = i + 1;

          for (j = 0; j < str2Len; ++j) {
            curCol = nextCol; // substution

            strCmp = str1.charCodeAt(i) === str2Char[j];
            nextCol = prevRow[j] + (strCmp ? 0 : 1); // insertion

            tmp = curCol + 1;

            if (nextCol > tmp) {
              nextCol = tmp;
            } // deletion


            tmp = prevRow[j + 1] + 1;

            if (nextCol > tmp) {
              nextCol = tmp;
            } // copy current col value into previous (in preparation for next iteration)


            prevRow[j] = curCol;
          } // copy last col value into previous (in preparation for next iteration)


          prevRow[j] = nextCol;
        }
      }

      return nextCol;
    }
  }; // amd

  if ( true && __webpack_require__(/*! !webpack amd define */ "./node_modules/webpack/buildin/amd-define.js") !== null && __webpack_require__(/*! !webpack amd options */ "./node_modules/webpack/buildin/amd-options.js")) {
    !(__WEBPACK_AMD_DEFINE_RESULT__ = (function () {
      return Levenshtein;
    }).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } // commonjs
  else if ( true && module !== null && typeof exports !== "undefined" && module.exports === exports) {
      module.exports = Levenshtein;
    } // web worker
    else if (typeof self !== "undefined" && typeof self.postMessage === 'function' && typeof self.importScripts === 'function') {
        self.Levenshtein = Levenshtein;
      } // browser main thread
      else if (typeof window !== "undefined" && window !== null) {
          window.Levenshtein = Levenshtein;
        }
})();

;
/* eslint-disable global-require, import/no-unresolved */

(function register() {
  /* react-hot-loader/webpack */
  var reactHotLoader = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").default;

  if (!reactHotLoader) {
    return;
  }
  /* eslint-disable camelcase, no-undef */


  var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : exports;
  /* eslint-enable camelcase, no-undef */

  if (typeof webpackExports === 'function') {
    reactHotLoader.register(webpackExports, 'module.exports', "/Users/davidlee/WebstormProjects/occ-react-component/node_modules/fast-levenshtein/levenshtein.js");
    return;
  }
  /* eslint-disable no-restricted-syntax */


  for (var key in webpackExports) {
    /* eslint-enable no-restricted-syntax */
    if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) {
      continue;
    }

    var namedExport = void 0;

    try {
      namedExport = webpackExports[key];
    } catch (err) {
      continue;
    }

    reactHotLoader.register(namedExport, key, "/Users/davidlee/WebstormProjects/occ-react-component/node_modules/fast-levenshtein/levenshtein.js");
  }
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * Copyright 2015, Yahoo! Inc.
 * Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
 */

var REACT_STATICS = {
  childContextTypes: true,
  contextTypes: true,
  defaultProps: true,
  displayName: true,
  getDefaultProps: true,
  getDerivedStateFromProps: true,
  mixins: true,
  propTypes: true,
  type: true
};
var KNOWN_STATICS = {
  name: true,
  length: true,
  prototype: true,
  caller: true,
  callee: true,
  arguments: true,
  arity: true
};
var defineProperty = Object.defineProperty;
var getOwnPropertyNames = Object.getOwnPropertyNames;
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
var getPrototypeOf = Object.getPrototypeOf;
var objectPrototype = getPrototypeOf && getPrototypeOf(Object);

function hoistNonReactStatics(targetComponent, sourceComponent, blacklist) {
  if (typeof sourceComponent !== 'string') {
    // don't hoist over string (html) components
    if (objectPrototype) {
      var inheritedComponent = getPrototypeOf(sourceComponent);

      if (inheritedComponent && inheritedComponent !== objectPrototype) {
        hoistNonReactStatics(targetComponent, inheritedComponent, blacklist);
      }
    }

    var keys = getOwnPropertyNames(sourceComponent);

    if (getOwnPropertySymbols) {
      keys = keys.concat(getOwnPropertySymbols(sourceComponent));
    }

    for (var i = 0; i < keys.length; ++i) {
      var key = keys[i];

      if (!REACT_STATICS[key] && !KNOWN_STATICS[key] && (!blacklist || !blacklist[key])) {
        var descriptor = getOwnPropertyDescriptor(sourceComponent, key);

        try {
          // Avoid failures from read-only properties
          defineProperty(targetComponent, key, descriptor);
        } catch (e) {}
      }
    }

    return targetComponent;
  }

  return targetComponent;
}

module.exports = hoistNonReactStatics;
;
/* eslint-disable global-require, import/no-unresolved */

(function register() {
  /* react-hot-loader/webpack */
  var reactHotLoader = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").default;

  if (!reactHotLoader) {
    return;
  }
  /* eslint-disable camelcase, no-undef */


  var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : exports;
  /* eslint-enable camelcase, no-undef */

  if (typeof webpackExports === 'function') {
    reactHotLoader.register(webpackExports, 'module.exports', "/Users/davidlee/WebstormProjects/occ-react-component/node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js");
    return;
  }
  /* eslint-disable no-restricted-syntax */


  for (var key in webpackExports) {
    /* eslint-enable no-restricted-syntax */
    if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) {
      continue;
    }

    var namedExport = void 0;

    try {
      namedExport = webpackExports[key];
    } catch (err) {
      continue;
    }

    reactHotLoader.register(namedExport, key, "/Users/davidlee/WebstormProjects/occ-react-component/node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js");
  }
})();

/***/ }),

/***/ "./node_modules/lodash.merge/index.js":
/*!********************************************!*\
  !*** ./node_modules/lodash.merge/index.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global, module) {/**
 * Lodash (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="npm" -o ./`
 * Copyright JS Foundation and other contributors <https://js.foundation/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */

/** Used as the size to enable large array optimizations. */
var LARGE_ARRAY_SIZE = 200;
/** Used to stand-in for `undefined` hash values. */

var HASH_UNDEFINED = '__lodash_hash_undefined__';
/** Used to detect hot functions by number of calls within a span of milliseconds. */

var HOT_COUNT = 800,
    HOT_SPAN = 16;
/** Used as references for various `Number` constants. */

var MAX_SAFE_INTEGER = 9007199254740991;
/** `Object#toString` result references. */

var argsTag = '[object Arguments]',
    arrayTag = '[object Array]',
    asyncTag = '[object AsyncFunction]',
    boolTag = '[object Boolean]',
    dateTag = '[object Date]',
    errorTag = '[object Error]',
    funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]',
    mapTag = '[object Map]',
    numberTag = '[object Number]',
    nullTag = '[object Null]',
    objectTag = '[object Object]',
    proxyTag = '[object Proxy]',
    regexpTag = '[object RegExp]',
    setTag = '[object Set]',
    stringTag = '[object String]',
    undefinedTag = '[object Undefined]',
    weakMapTag = '[object WeakMap]';
var arrayBufferTag = '[object ArrayBuffer]',
    dataViewTag = '[object DataView]',
    float32Tag = '[object Float32Array]',
    float64Tag = '[object Float64Array]',
    int8Tag = '[object Int8Array]',
    int16Tag = '[object Int16Array]',
    int32Tag = '[object Int32Array]',
    uint8Tag = '[object Uint8Array]',
    uint8ClampedTag = '[object Uint8ClampedArray]',
    uint16Tag = '[object Uint16Array]',
    uint32Tag = '[object Uint32Array]';
/**
 * Used to match `RegExp`
 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
 */

var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;
/** Used to detect host constructors (Safari). */

var reIsHostCtor = /^\[object .+?Constructor\]$/;
/** Used to detect unsigned integer values. */

var reIsUint = /^(?:0|[1-9]\d*)$/;
/** Used to identify `toStringTag` values of typed arrays. */

var typedArrayTags = {};
typedArrayTags[float32Tag] = typedArrayTags[float64Tag] = typedArrayTags[int8Tag] = typedArrayTags[int16Tag] = typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] = typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] = typedArrayTags[uint32Tag] = true;
typedArrayTags[argsTag] = typedArrayTags[arrayTag] = typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] = typedArrayTags[dataViewTag] = typedArrayTags[dateTag] = typedArrayTags[errorTag] = typedArrayTags[funcTag] = typedArrayTags[mapTag] = typedArrayTags[numberTag] = typedArrayTags[objectTag] = typedArrayTags[regexpTag] = typedArrayTags[setTag] = typedArrayTags[stringTag] = typedArrayTags[weakMapTag] = false;
/** Detect free variable `global` from Node.js. */

var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;
/** Detect free variable `self`. */

var freeSelf = typeof self == 'object' && self && self.Object === Object && self;
/** Used as a reference to the global object. */

var root = freeGlobal || freeSelf || Function('return this')();
/** Detect free variable `exports`. */

var freeExports =  true && exports && !exports.nodeType && exports;
/** Detect free variable `module`. */

var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;
/** Detect the popular CommonJS extension `module.exports`. */

var moduleExports = freeModule && freeModule.exports === freeExports;
/** Detect free variable `process` from Node.js. */

var freeProcess = moduleExports && freeGlobal.process;
/** Used to access faster Node.js helpers. */

var nodeUtil = function () {
  try {
    return freeProcess && freeProcess.binding && freeProcess.binding('util');
  } catch (e) {}
}();
/* Node.js helper references. */


var nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;
/**
 * A faster alternative to `Function#apply`, this function invokes `func`
 * with the `this` binding of `thisArg` and the arguments of `args`.
 *
 * @private
 * @param {Function} func The function to invoke.
 * @param {*} thisArg The `this` binding of `func`.
 * @param {Array} args The arguments to invoke `func` with.
 * @returns {*} Returns the result of `func`.
 */

function apply(func, thisArg, args) {
  switch (args.length) {
    case 0:
      return func.call(thisArg);

    case 1:
      return func.call(thisArg, args[0]);

    case 2:
      return func.call(thisArg, args[0], args[1]);

    case 3:
      return func.call(thisArg, args[0], args[1], args[2]);
  }

  return func.apply(thisArg, args);
}
/**
 * The base implementation of `_.times` without support for iteratee shorthands
 * or max array length checks.
 *
 * @private
 * @param {number} n The number of times to invoke `iteratee`.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the array of results.
 */


function baseTimes(n, iteratee) {
  var index = -1,
      result = Array(n);

  while (++index < n) {
    result[index] = iteratee(index);
  }

  return result;
}
/**
 * The base implementation of `_.unary` without support for storing metadata.
 *
 * @private
 * @param {Function} func The function to cap arguments for.
 * @returns {Function} Returns the new capped function.
 */


function baseUnary(func) {
  return function (value) {
    return func(value);
  };
}
/**
 * Gets the value at `key` of `object`.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */


function getValue(object, key) {
  return object == null ? undefined : object[key];
}
/**
 * Creates a unary function that invokes `func` with its argument transformed.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {Function} transform The argument transform.
 * @returns {Function} Returns the new function.
 */


function overArg(func, transform) {
  return function (arg) {
    return func(transform(arg));
  };
}
/**
 * Gets the value at `key`, unless `key` is "__proto__".
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */


function safeGet(object, key) {
  return key == '__proto__' ? undefined : object[key];
}
/** Used for built-in method references. */


var arrayProto = Array.prototype,
    funcProto = Function.prototype,
    objectProto = Object.prototype;
/** Used to detect overreaching core-js shims. */

var coreJsData = root['__core-js_shared__'];
/** Used to resolve the decompiled source of functions. */

var funcToString = funcProto.toString;
/** Used to check objects for own properties. */

var hasOwnProperty = objectProto.hasOwnProperty;
/** Used to detect methods masquerading as native. */

var maskSrcKey = function () {
  var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
  return uid ? 'Symbol(src)_1.' + uid : '';
}();
/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */


var nativeObjectToString = objectProto.toString;
/** Used to infer the `Object` constructor. */

var objectCtorString = funcToString.call(Object);
/** Used to detect if a method is native. */

var reIsNative = RegExp('^' + funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\$&').replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$');
/** Built-in value references. */

var Buffer = moduleExports ? root.Buffer : undefined,
    Symbol = root.Symbol,
    Uint8Array = root.Uint8Array,
    allocUnsafe = Buffer ? Buffer.allocUnsafe : undefined,
    getPrototype = overArg(Object.getPrototypeOf, Object),
    objectCreate = Object.create,
    propertyIsEnumerable = objectProto.propertyIsEnumerable,
    splice = arrayProto.splice,
    symToStringTag = Symbol ? Symbol.toStringTag : undefined;

var defineProperty = function () {
  try {
    var func = getNative(Object, 'defineProperty');
    func({}, '', {});
    return func;
  } catch (e) {}
}();
/* Built-in method references for those with the same name as other `lodash` methods. */


var nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined,
    nativeMax = Math.max,
    nativeNow = Date.now;
/* Built-in method references that are verified to be native. */

var Map = getNative(root, 'Map'),
    nativeCreate = getNative(Object, 'create');
/**
 * The base implementation of `_.create` without support for assigning
 * properties to the created object.
 *
 * @private
 * @param {Object} proto The object to inherit from.
 * @returns {Object} Returns the new object.
 */

var baseCreate = function () {
  function object() {}

  return function (proto) {
    if (!isObject(proto)) {
      return {};
    }

    if (objectCreate) {
      return objectCreate(proto);
    }

    object.prototype = proto;
    var result = new object();
    object.prototype = undefined;
    return result;
  };
}();
/**
 * Creates a hash object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */


function Hash(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;
  this.clear();

  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}
/**
 * Removes all key-value entries from the hash.
 *
 * @private
 * @name clear
 * @memberOf Hash
 */


function hashClear() {
  this.__data__ = nativeCreate ? nativeCreate(null) : {};
  this.size = 0;
}
/**
 * Removes `key` and its value from the hash.
 *
 * @private
 * @name delete
 * @memberOf Hash
 * @param {Object} hash The hash to modify.
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */


function hashDelete(key) {
  var result = this.has(key) && delete this.__data__[key];
  this.size -= result ? 1 : 0;
  return result;
}
/**
 * Gets the hash value for `key`.
 *
 * @private
 * @name get
 * @memberOf Hash
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */


function hashGet(key) {
  var data = this.__data__;

  if (nativeCreate) {
    var result = data[key];
    return result === HASH_UNDEFINED ? undefined : result;
  }

  return hasOwnProperty.call(data, key) ? data[key] : undefined;
}
/**
 * Checks if a hash value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Hash
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */


function hashHas(key) {
  var data = this.__data__;
  return nativeCreate ? data[key] !== undefined : hasOwnProperty.call(data, key);
}
/**
 * Sets the hash `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Hash
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the hash instance.
 */


function hashSet(key, value) {
  var data = this.__data__;
  this.size += this.has(key) ? 0 : 1;
  data[key] = nativeCreate && value === undefined ? HASH_UNDEFINED : value;
  return this;
} // Add methods to `Hash`.


Hash.prototype.clear = hashClear;
Hash.prototype['delete'] = hashDelete;
Hash.prototype.get = hashGet;
Hash.prototype.has = hashHas;
Hash.prototype.set = hashSet;
/**
 * Creates an list cache object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */

function ListCache(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;
  this.clear();

  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}
/**
 * Removes all key-value entries from the list cache.
 *
 * @private
 * @name clear
 * @memberOf ListCache
 */


function listCacheClear() {
  this.__data__ = [];
  this.size = 0;
}
/**
 * Removes `key` and its value from the list cache.
 *
 * @private
 * @name delete
 * @memberOf ListCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */


function listCacheDelete(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    return false;
  }

  var lastIndex = data.length - 1;

  if (index == lastIndex) {
    data.pop();
  } else {
    splice.call(data, index, 1);
  }

  --this.size;
  return true;
}
/**
 * Gets the list cache value for `key`.
 *
 * @private
 * @name get
 * @memberOf ListCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */


function listCacheGet(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);
  return index < 0 ? undefined : data[index][1];
}
/**
 * Checks if a list cache value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf ListCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */


function listCacheHas(key) {
  return assocIndexOf(this.__data__, key) > -1;
}
/**
 * Sets the list cache `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf ListCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the list cache instance.
 */


function listCacheSet(key, value) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    ++this.size;
    data.push([key, value]);
  } else {
    data[index][1] = value;
  }

  return this;
} // Add methods to `ListCache`.


ListCache.prototype.clear = listCacheClear;
ListCache.prototype['delete'] = listCacheDelete;
ListCache.prototype.get = listCacheGet;
ListCache.prototype.has = listCacheHas;
ListCache.prototype.set = listCacheSet;
/**
 * Creates a map cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */

function MapCache(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;
  this.clear();

  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}
/**
 * Removes all key-value entries from the map.
 *
 * @private
 * @name clear
 * @memberOf MapCache
 */


function mapCacheClear() {
  this.size = 0;
  this.__data__ = {
    'hash': new Hash(),
    'map': new (Map || ListCache)(),
    'string': new Hash()
  };
}
/**
 * Removes `key` and its value from the map.
 *
 * @private
 * @name delete
 * @memberOf MapCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */


function mapCacheDelete(key) {
  var result = getMapData(this, key)['delete'](key);
  this.size -= result ? 1 : 0;
  return result;
}
/**
 * Gets the map value for `key`.
 *
 * @private
 * @name get
 * @memberOf MapCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */


function mapCacheGet(key) {
  return getMapData(this, key).get(key);
}
/**
 * Checks if a map value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf MapCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */


function mapCacheHas(key) {
  return getMapData(this, key).has(key);
}
/**
 * Sets the map `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf MapCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the map cache instance.
 */


function mapCacheSet(key, value) {
  var data = getMapData(this, key),
      size = data.size;
  data.set(key, value);
  this.size += data.size == size ? 0 : 1;
  return this;
} // Add methods to `MapCache`.


MapCache.prototype.clear = mapCacheClear;
MapCache.prototype['delete'] = mapCacheDelete;
MapCache.prototype.get = mapCacheGet;
MapCache.prototype.has = mapCacheHas;
MapCache.prototype.set = mapCacheSet;
/**
 * Creates a stack cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */

function Stack(entries) {
  var data = this.__data__ = new ListCache(entries);
  this.size = data.size;
}
/**
 * Removes all key-value entries from the stack.
 *
 * @private
 * @name clear
 * @memberOf Stack
 */


function stackClear() {
  this.__data__ = new ListCache();
  this.size = 0;
}
/**
 * Removes `key` and its value from the stack.
 *
 * @private
 * @name delete
 * @memberOf Stack
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */


function stackDelete(key) {
  var data = this.__data__,
      result = data['delete'](key);
  this.size = data.size;
  return result;
}
/**
 * Gets the stack value for `key`.
 *
 * @private
 * @name get
 * @memberOf Stack
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */


function stackGet(key) {
  return this.__data__.get(key);
}
/**
 * Checks if a stack value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Stack
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */


function stackHas(key) {
  return this.__data__.has(key);
}
/**
 * Sets the stack `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Stack
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the stack cache instance.
 */


function stackSet(key, value) {
  var data = this.__data__;

  if (data instanceof ListCache) {
    var pairs = data.__data__;

    if (!Map || pairs.length < LARGE_ARRAY_SIZE - 1) {
      pairs.push([key, value]);
      this.size = ++data.size;
      return this;
    }

    data = this.__data__ = new MapCache(pairs);
  }

  data.set(key, value);
  this.size = data.size;
  return this;
} // Add methods to `Stack`.


Stack.prototype.clear = stackClear;
Stack.prototype['delete'] = stackDelete;
Stack.prototype.get = stackGet;
Stack.prototype.has = stackHas;
Stack.prototype.set = stackSet;
/**
 * Creates an array of the enumerable property names of the array-like `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @param {boolean} inherited Specify returning inherited property names.
 * @returns {Array} Returns the array of property names.
 */

function arrayLikeKeys(value, inherited) {
  var isArr = isArray(value),
      isArg = !isArr && isArguments(value),
      isBuff = !isArr && !isArg && isBuffer(value),
      isType = !isArr && !isArg && !isBuff && isTypedArray(value),
      skipIndexes = isArr || isArg || isBuff || isType,
      result = skipIndexes ? baseTimes(value.length, String) : [],
      length = result.length;

  for (var key in value) {
    if ((inherited || hasOwnProperty.call(value, key)) && !(skipIndexes && ( // Safari 9 has enumerable `arguments.length` in strict mode.
    key == 'length' || // Node.js 0.10 has enumerable non-index properties on buffers.
    isBuff && (key == 'offset' || key == 'parent') || // PhantomJS 2 has enumerable non-index properties on typed arrays.
    isType && (key == 'buffer' || key == 'byteLength' || key == 'byteOffset') || // Skip index properties.
    isIndex(key, length)))) {
      result.push(key);
    }
  }

  return result;
}
/**
 * This function is like `assignValue` except that it doesn't assign
 * `undefined` values.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */


function assignMergeValue(object, key, value) {
  if (value !== undefined && !eq(object[key], value) || value === undefined && !(key in object)) {
    baseAssignValue(object, key, value);
  }
}
/**
 * Assigns `value` to `key` of `object` if the existing value is not equivalent
 * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * for equality comparisons.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */


function assignValue(object, key, value) {
  var objValue = object[key];

  if (!(hasOwnProperty.call(object, key) && eq(objValue, value)) || value === undefined && !(key in object)) {
    baseAssignValue(object, key, value);
  }
}
/**
 * Gets the index at which the `key` is found in `array` of key-value pairs.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} key The key to search for.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */


function assocIndexOf(array, key) {
  var length = array.length;

  while (length--) {
    if (eq(array[length][0], key)) {
      return length;
    }
  }

  return -1;
}
/**
 * The base implementation of `assignValue` and `assignMergeValue` without
 * value checks.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */


function baseAssignValue(object, key, value) {
  if (key == '__proto__' && defineProperty) {
    defineProperty(object, key, {
      'configurable': true,
      'enumerable': true,
      'value': value,
      'writable': true
    });
  } else {
    object[key] = value;
  }
}
/**
 * The base implementation of `baseForOwn` which iterates over `object`
 * properties returned by `keysFunc` and invokes `iteratee` for each property.
 * Iteratee functions may exit iteration early by explicitly returning `false`.
 *
 * @private
 * @param {Object} object The object to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @param {Function} keysFunc The function to get the keys of `object`.
 * @returns {Object} Returns `object`.
 */


var baseFor = createBaseFor();
/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */

function baseGetTag(value) {
  if (value == null) {
    return value === undefined ? undefinedTag : nullTag;
  }

  return symToStringTag && symToStringTag in Object(value) ? getRawTag(value) : objectToString(value);
}
/**
 * The base implementation of `_.isArguments`.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 */


function baseIsArguments(value) {
  return isObjectLike(value) && baseGetTag(value) == argsTag;
}
/**
 * The base implementation of `_.isNative` without bad shim checks.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a native function,
 *  else `false`.
 */


function baseIsNative(value) {
  if (!isObject(value) || isMasked(value)) {
    return false;
  }

  var pattern = isFunction(value) ? reIsNative : reIsHostCtor;
  return pattern.test(toSource(value));
}
/**
 * The base implementation of `_.isTypedArray` without Node.js optimizations.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 */


function baseIsTypedArray(value) {
  return isObjectLike(value) && isLength(value.length) && !!typedArrayTags[baseGetTag(value)];
}
/**
 * The base implementation of `_.keysIn` which doesn't treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */


function baseKeysIn(object) {
  if (!isObject(object)) {
    return nativeKeysIn(object);
  }

  var isProto = isPrototype(object),
      result = [];

  for (var key in object) {
    if (!(key == 'constructor' && (isProto || !hasOwnProperty.call(object, key)))) {
      result.push(key);
    }
  }

  return result;
}
/**
 * The base implementation of `_.merge` without support for multiple sources.
 *
 * @private
 * @param {Object} object The destination object.
 * @param {Object} source The source object.
 * @param {number} srcIndex The index of `source`.
 * @param {Function} [customizer] The function to customize merged values.
 * @param {Object} [stack] Tracks traversed source values and their merged
 *  counterparts.
 */


function baseMerge(object, source, srcIndex, customizer, stack) {
  if (object === source) {
    return;
  }

  baseFor(source, function (srcValue, key) {
    if (isObject(srcValue)) {
      stack || (stack = new Stack());
      baseMergeDeep(object, source, key, srcIndex, baseMerge, customizer, stack);
    } else {
      var newValue = customizer ? customizer(safeGet(object, key), srcValue, key + '', object, source, stack) : undefined;

      if (newValue === undefined) {
        newValue = srcValue;
      }

      assignMergeValue(object, key, newValue);
    }
  }, keysIn);
}
/**
 * A specialized version of `baseMerge` for arrays and objects which performs
 * deep merges and tracks traversed objects enabling objects with circular
 * references to be merged.
 *
 * @private
 * @param {Object} object The destination object.
 * @param {Object} source The source object.
 * @param {string} key The key of the value to merge.
 * @param {number} srcIndex The index of `source`.
 * @param {Function} mergeFunc The function to merge values.
 * @param {Function} [customizer] The function to customize assigned values.
 * @param {Object} [stack] Tracks traversed source values and their merged
 *  counterparts.
 */


function baseMergeDeep(object, source, key, srcIndex, mergeFunc, customizer, stack) {
  var objValue = safeGet(object, key),
      srcValue = safeGet(source, key),
      stacked = stack.get(srcValue);

  if (stacked) {
    assignMergeValue(object, key, stacked);
    return;
  }

  var newValue = customizer ? customizer(objValue, srcValue, key + '', object, source, stack) : undefined;
  var isCommon = newValue === undefined;

  if (isCommon) {
    var isArr = isArray(srcValue),
        isBuff = !isArr && isBuffer(srcValue),
        isTyped = !isArr && !isBuff && isTypedArray(srcValue);
    newValue = srcValue;

    if (isArr || isBuff || isTyped) {
      if (isArray(objValue)) {
        newValue = objValue;
      } else if (isArrayLikeObject(objValue)) {
        newValue = copyArray(objValue);
      } else if (isBuff) {
        isCommon = false;
        newValue = cloneBuffer(srcValue, true);
      } else if (isTyped) {
        isCommon = false;
        newValue = cloneTypedArray(srcValue, true);
      } else {
        newValue = [];
      }
    } else if (isPlainObject(srcValue) || isArguments(srcValue)) {
      newValue = objValue;

      if (isArguments(objValue)) {
        newValue = toPlainObject(objValue);
      } else if (!isObject(objValue) || srcIndex && isFunction(objValue)) {
        newValue = initCloneObject(srcValue);
      }
    } else {
      isCommon = false;
    }
  }

  if (isCommon) {
    // Recursively merge objects and arrays (susceptible to call stack limits).
    stack.set(srcValue, newValue);
    mergeFunc(newValue, srcValue, srcIndex, customizer, stack);
    stack['delete'](srcValue);
  }

  assignMergeValue(object, key, newValue);
}
/**
 * The base implementation of `_.rest` which doesn't validate or coerce arguments.
 *
 * @private
 * @param {Function} func The function to apply a rest parameter to.
 * @param {number} [start=func.length-1] The start position of the rest parameter.
 * @returns {Function} Returns the new function.
 */


function baseRest(func, start) {
  return setToString(overRest(func, start, identity), func + '');
}
/**
 * The base implementation of `setToString` without support for hot loop shorting.
 *
 * @private
 * @param {Function} func The function to modify.
 * @param {Function} string The `toString` result.
 * @returns {Function} Returns `func`.
 */


var baseSetToString = !defineProperty ? identity : function (func, string) {
  return defineProperty(func, 'toString', {
    'configurable': true,
    'enumerable': false,
    'value': constant(string),
    'writable': true
  });
};
/**
 * Creates a clone of  `buffer`.
 *
 * @private
 * @param {Buffer} buffer The buffer to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Buffer} Returns the cloned buffer.
 */

function cloneBuffer(buffer, isDeep) {
  if (isDeep) {
    return buffer.slice();
  }

  var length = buffer.length,
      result = allocUnsafe ? allocUnsafe(length) : new buffer.constructor(length);
  buffer.copy(result);
  return result;
}
/**
 * Creates a clone of `arrayBuffer`.
 *
 * @private
 * @param {ArrayBuffer} arrayBuffer The array buffer to clone.
 * @returns {ArrayBuffer} Returns the cloned array buffer.
 */


function cloneArrayBuffer(arrayBuffer) {
  var result = new arrayBuffer.constructor(arrayBuffer.byteLength);
  new Uint8Array(result).set(new Uint8Array(arrayBuffer));
  return result;
}
/**
 * Creates a clone of `typedArray`.
 *
 * @private
 * @param {Object} typedArray The typed array to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the cloned typed array.
 */


function cloneTypedArray(typedArray, isDeep) {
  var buffer = isDeep ? cloneArrayBuffer(typedArray.buffer) : typedArray.buffer;
  return new typedArray.constructor(buffer, typedArray.byteOffset, typedArray.length);
}
/**
 * Copies the values of `source` to `array`.
 *
 * @private
 * @param {Array} source The array to copy values from.
 * @param {Array} [array=[]] The array to copy values to.
 * @returns {Array} Returns `array`.
 */


function copyArray(source, array) {
  var index = -1,
      length = source.length;
  array || (array = Array(length));

  while (++index < length) {
    array[index] = source[index];
  }

  return array;
}
/**
 * Copies properties of `source` to `object`.
 *
 * @private
 * @param {Object} source The object to copy properties from.
 * @param {Array} props The property identifiers to copy.
 * @param {Object} [object={}] The object to copy properties to.
 * @param {Function} [customizer] The function to customize copied values.
 * @returns {Object} Returns `object`.
 */


function copyObject(source, props, object, customizer) {
  var isNew = !object;
  object || (object = {});
  var index = -1,
      length = props.length;

  while (++index < length) {
    var key = props[index];
    var newValue = customizer ? customizer(object[key], source[key], key, object, source) : undefined;

    if (newValue === undefined) {
      newValue = source[key];
    }

    if (isNew) {
      baseAssignValue(object, key, newValue);
    } else {
      assignValue(object, key, newValue);
    }
  }

  return object;
}
/**
 * Creates a function like `_.assign`.
 *
 * @private
 * @param {Function} assigner The function to assign values.
 * @returns {Function} Returns the new assigner function.
 */


function createAssigner(assigner) {
  return baseRest(function (object, sources) {
    var index = -1,
        length = sources.length,
        customizer = length > 1 ? sources[length - 1] : undefined,
        guard = length > 2 ? sources[2] : undefined;
    customizer = assigner.length > 3 && typeof customizer == 'function' ? (length--, customizer) : undefined;

    if (guard && isIterateeCall(sources[0], sources[1], guard)) {
      customizer = length < 3 ? undefined : customizer;
      length = 1;
    }

    object = Object(object);

    while (++index < length) {
      var source = sources[index];

      if (source) {
        assigner(object, source, index, customizer);
      }
    }

    return object;
  });
}
/**
 * Creates a base function for methods like `_.forIn` and `_.forOwn`.
 *
 * @private
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {Function} Returns the new base function.
 */


function createBaseFor(fromRight) {
  return function (object, iteratee, keysFunc) {
    var index = -1,
        iterable = Object(object),
        props = keysFunc(object),
        length = props.length;

    while (length--) {
      var key = props[fromRight ? length : ++index];

      if (iteratee(iterable[key], key, iterable) === false) {
        break;
      }
    }

    return object;
  };
}
/**
 * Gets the data for `map`.
 *
 * @private
 * @param {Object} map The map to query.
 * @param {string} key The reference key.
 * @returns {*} Returns the map data.
 */


function getMapData(map, key) {
  var data = map.__data__;
  return isKeyable(key) ? data[typeof key == 'string' ? 'string' : 'hash'] : data.map;
}
/**
 * Gets the native function at `key` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the method to get.
 * @returns {*} Returns the function if it's native, else `undefined`.
 */


function getNative(object, key) {
  var value = getValue(object, key);
  return baseIsNative(value) ? value : undefined;
}
/**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw `toStringTag`.
 */


function getRawTag(value) {
  var isOwn = hasOwnProperty.call(value, symToStringTag),
      tag = value[symToStringTag];

  try {
    value[symToStringTag] = undefined;
    var unmasked = true;
  } catch (e) {}

  var result = nativeObjectToString.call(value);

  if (unmasked) {
    if (isOwn) {
      value[symToStringTag] = tag;
    } else {
      delete value[symToStringTag];
    }
  }

  return result;
}
/**
 * Initializes an object clone.
 *
 * @private
 * @param {Object} object The object to clone.
 * @returns {Object} Returns the initialized clone.
 */


function initCloneObject(object) {
  return typeof object.constructor == 'function' && !isPrototype(object) ? baseCreate(getPrototype(object)) : {};
}
/**
 * Checks if `value` is a valid array-like index.
 *
 * @private
 * @param {*} value The value to check.
 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
 */


function isIndex(value, length) {
  var type = typeof value;
  length = length == null ? MAX_SAFE_INTEGER : length;
  return !!length && (type == 'number' || type != 'symbol' && reIsUint.test(value)) && value > -1 && value % 1 == 0 && value < length;
}
/**
 * Checks if the given arguments are from an iteratee call.
 *
 * @private
 * @param {*} value The potential iteratee value argument.
 * @param {*} index The potential iteratee index or key argument.
 * @param {*} object The potential iteratee object argument.
 * @returns {boolean} Returns `true` if the arguments are from an iteratee call,
 *  else `false`.
 */


function isIterateeCall(value, index, object) {
  if (!isObject(object)) {
    return false;
  }

  var type = typeof index;

  if (type == 'number' ? isArrayLike(object) && isIndex(index, object.length) : type == 'string' && index in object) {
    return eq(object[index], value);
  }

  return false;
}
/**
 * Checks if `value` is suitable for use as unique object key.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
 */


function isKeyable(value) {
  var type = typeof value;
  return type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean' ? value !== '__proto__' : value === null;
}
/**
 * Checks if `func` has its source masked.
 *
 * @private
 * @param {Function} func The function to check.
 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
 */


function isMasked(func) {
  return !!maskSrcKey && maskSrcKey in func;
}
/**
 * Checks if `value` is likely a prototype object.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
 */


function isPrototype(value) {
  var Ctor = value && value.constructor,
      proto = typeof Ctor == 'function' && Ctor.prototype || objectProto;
  return value === proto;
}
/**
 * This function is like
 * [`Object.keys`](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
 * except that it includes inherited enumerable properties.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */


function nativeKeysIn(object) {
  var result = [];

  if (object != null) {
    for (var key in Object(object)) {
      result.push(key);
    }
  }

  return result;
}
/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */


function objectToString(value) {
  return nativeObjectToString.call(value);
}
/**
 * A specialized version of `baseRest` which transforms the rest array.
 *
 * @private
 * @param {Function} func The function to apply a rest parameter to.
 * @param {number} [start=func.length-1] The start position of the rest parameter.
 * @param {Function} transform The rest array transform.
 * @returns {Function} Returns the new function.
 */


function overRest(func, start, transform) {
  start = nativeMax(start === undefined ? func.length - 1 : start, 0);
  return function () {
    var args = arguments,
        index = -1,
        length = nativeMax(args.length - start, 0),
        array = Array(length);

    while (++index < length) {
      array[index] = args[start + index];
    }

    index = -1;
    var otherArgs = Array(start + 1);

    while (++index < start) {
      otherArgs[index] = args[index];
    }

    otherArgs[start] = transform(array);
    return apply(func, this, otherArgs);
  };
}
/**
 * Sets the `toString` method of `func` to return `string`.
 *
 * @private
 * @param {Function} func The function to modify.
 * @param {Function} string The `toString` result.
 * @returns {Function} Returns `func`.
 */


var setToString = shortOut(baseSetToString);
/**
 * Creates a function that'll short out and invoke `identity` instead
 * of `func` when it's called `HOT_COUNT` or more times in `HOT_SPAN`
 * milliseconds.
 *
 * @private
 * @param {Function} func The function to restrict.
 * @returns {Function} Returns the new shortable function.
 */

function shortOut(func) {
  var count = 0,
      lastCalled = 0;
  return function () {
    var stamp = nativeNow(),
        remaining = HOT_SPAN - (stamp - lastCalled);
    lastCalled = stamp;

    if (remaining > 0) {
      if (++count >= HOT_COUNT) {
        return arguments[0];
      }
    } else {
      count = 0;
    }

    return func.apply(undefined, arguments);
  };
}
/**
 * Converts `func` to its source code.
 *
 * @private
 * @param {Function} func The function to convert.
 * @returns {string} Returns the source code.
 */


function toSource(func) {
  if (func != null) {
    try {
      return funcToString.call(func);
    } catch (e) {}

    try {
      return func + '';
    } catch (e) {}
  }

  return '';
}
/**
 * Performs a
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * comparison between two values to determine if they are equivalent.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.eq(object, object);
 * // => true
 *
 * _.eq(object, other);
 * // => false
 *
 * _.eq('a', 'a');
 * // => true
 *
 * _.eq('a', Object('a'));
 * // => false
 *
 * _.eq(NaN, NaN);
 * // => true
 */


function eq(value, other) {
  return value === other || value !== value && other !== other;
}
/**
 * Checks if `value` is likely an `arguments` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 *  else `false`.
 * @example
 *
 * _.isArguments(function() { return arguments; }());
 * // => true
 *
 * _.isArguments([1, 2, 3]);
 * // => false
 */


var isArguments = baseIsArguments(function () {
  return arguments;
}()) ? baseIsArguments : function (value) {
  return isObjectLike(value) && hasOwnProperty.call(value, 'callee') && !propertyIsEnumerable.call(value, 'callee');
};
/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(document.body.children);
 * // => false
 *
 * _.isArray('abc');
 * // => false
 *
 * _.isArray(_.noop);
 * // => false
 */

var isArray = Array.isArray;
/**
 * Checks if `value` is array-like. A value is considered array-like if it's
 * not a function and has a `value.length` that's an integer greater than or
 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
 * @example
 *
 * _.isArrayLike([1, 2, 3]);
 * // => true
 *
 * _.isArrayLike(document.body.children);
 * // => true
 *
 * _.isArrayLike('abc');
 * // => true
 *
 * _.isArrayLike(_.noop);
 * // => false
 */

function isArrayLike(value) {
  return value != null && isLength(value.length) && !isFunction(value);
}
/**
 * This method is like `_.isArrayLike` except that it also checks if `value`
 * is an object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array-like object,
 *  else `false`.
 * @example
 *
 * _.isArrayLikeObject([1, 2, 3]);
 * // => true
 *
 * _.isArrayLikeObject(document.body.children);
 * // => true
 *
 * _.isArrayLikeObject('abc');
 * // => false
 *
 * _.isArrayLikeObject(_.noop);
 * // => false
 */


function isArrayLikeObject(value) {
  return isObjectLike(value) && isArrayLike(value);
}
/**
 * Checks if `value` is a buffer.
 *
 * @static
 * @memberOf _
 * @since 4.3.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a buffer, else `false`.
 * @example
 *
 * _.isBuffer(new Buffer(2));
 * // => true
 *
 * _.isBuffer(new Uint8Array(2));
 * // => false
 */


var isBuffer = nativeIsBuffer || stubFalse;
/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */

function isFunction(value) {
  if (!isObject(value)) {
    return false;
  } // The use of `Object#toString` avoids issues with the `typeof` operator
  // in Safari 9 which returns 'object' for typed arrays and other constructors.


  var tag = baseGetTag(value);
  return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
}
/**
 * Checks if `value` is a valid array-like length.
 *
 * **Note:** This method is loosely based on
 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
 * @example
 *
 * _.isLength(3);
 * // => true
 *
 * _.isLength(Number.MIN_VALUE);
 * // => false
 *
 * _.isLength(Infinity);
 * // => false
 *
 * _.isLength('3');
 * // => false
 */


function isLength(value) {
  return typeof value == 'number' && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
}
/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */


function isObject(value) {
  var type = typeof value;
  return value != null && (type == 'object' || type == 'function');
}
/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */


function isObjectLike(value) {
  return value != null && typeof value == 'object';
}
/**
 * Checks if `value` is a plain object, that is, an object created by the
 * `Object` constructor or one with a `[[Prototype]]` of `null`.
 *
 * @static
 * @memberOf _
 * @since 0.8.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a plain object, else `false`.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 * }
 *
 * _.isPlainObject(new Foo);
 * // => false
 *
 * _.isPlainObject([1, 2, 3]);
 * // => false
 *
 * _.isPlainObject({ 'x': 0, 'y': 0 });
 * // => true
 *
 * _.isPlainObject(Object.create(null));
 * // => true
 */


function isPlainObject(value) {
  if (!isObjectLike(value) || baseGetTag(value) != objectTag) {
    return false;
  }

  var proto = getPrototype(value);

  if (proto === null) {
    return true;
  }

  var Ctor = hasOwnProperty.call(proto, 'constructor') && proto.constructor;
  return typeof Ctor == 'function' && Ctor instanceof Ctor && funcToString.call(Ctor) == objectCtorString;
}
/**
 * Checks if `value` is classified as a typed array.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 * @example
 *
 * _.isTypedArray(new Uint8Array);
 * // => true
 *
 * _.isTypedArray([]);
 * // => false
 */


var isTypedArray = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;
/**
 * Converts `value` to a plain object flattening inherited enumerable string
 * keyed properties of `value` to own properties of the plain object.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {Object} Returns the converted plain object.
 * @example
 *
 * function Foo() {
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.assign({ 'a': 1 }, new Foo);
 * // => { 'a': 1, 'b': 2 }
 *
 * _.assign({ 'a': 1 }, _.toPlainObject(new Foo));
 * // => { 'a': 1, 'b': 2, 'c': 3 }
 */

function toPlainObject(value) {
  return copyObject(value, keysIn(value));
}
/**
 * Creates an array of the own and inherited enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.keysIn(new Foo);
 * // => ['a', 'b', 'c'] (iteration order is not guaranteed)
 */


function keysIn(object) {
  return isArrayLike(object) ? arrayLikeKeys(object, true) : baseKeysIn(object);
}
/**
 * This method is like `_.assign` except that it recursively merges own and
 * inherited enumerable string keyed properties of source objects into the
 * destination object. Source properties that resolve to `undefined` are
 * skipped if a destination value exists. Array and plain object properties
 * are merged recursively. Other objects and value types are overridden by
 * assignment. Source objects are applied from left to right. Subsequent
 * sources overwrite property assignments of previous sources.
 *
 * **Note:** This method mutates `object`.
 *
 * @static
 * @memberOf _
 * @since 0.5.0
 * @category Object
 * @param {Object} object The destination object.
 * @param {...Object} [sources] The source objects.
 * @returns {Object} Returns `object`.
 * @example
 *
 * var object = {
 *   'a': [{ 'b': 2 }, { 'd': 4 }]
 * };
 *
 * var other = {
 *   'a': [{ 'c': 3 }, { 'e': 5 }]
 * };
 *
 * _.merge(object, other);
 * // => { 'a': [{ 'b': 2, 'c': 3 }, { 'd': 4, 'e': 5 }] }
 */


var merge = createAssigner(function (object, source, srcIndex) {
  baseMerge(object, source, srcIndex);
});
/**
 * Creates a function that returns `value`.
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Util
 * @param {*} value The value to return from the new function.
 * @returns {Function} Returns the new constant function.
 * @example
 *
 * var objects = _.times(2, _.constant({ 'a': 1 }));
 *
 * console.log(objects);
 * // => [{ 'a': 1 }, { 'a': 1 }]
 *
 * console.log(objects[0] === objects[1]);
 * // => true
 */

function constant(value) {
  return function () {
    return value;
  };
}
/**
 * This method returns the first argument it receives.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Util
 * @param {*} value Any value.
 * @returns {*} Returns `value`.
 * @example
 *
 * var object = { 'a': 1 };
 *
 * console.log(_.identity(object) === object);
 * // => true
 */


function identity(value) {
  return value;
}
/**
 * This method returns `false`.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {boolean} Returns `false`.
 * @example
 *
 * _.times(2, _.stubFalse);
 * // => [false, false]
 */


function stubFalse() {
  return false;
}

module.exports = merge;
;
/* eslint-disable global-require, import/no-unresolved */

(function register() {
  /* react-hot-loader/webpack */
  var reactHotLoader = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").default;

  if (!reactHotLoader) {
    return;
  }
  /* eslint-disable camelcase, no-undef */


  var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : exports;
  /* eslint-enable camelcase, no-undef */

  if (typeof webpackExports === 'function') {
    reactHotLoader.register(webpackExports, 'module.exports', "/Users/davidlee/WebstormProjects/occ-react-component/node_modules/lodash.merge/index.js");
    return;
  }
  /* eslint-disable no-restricted-syntax */


  for (var key in webpackExports) {
    /* eslint-enable no-restricted-syntax */
    if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) {
      continue;
    }

    var namedExport = void 0;

    try {
      namedExport = webpackExports[key];
    } catch (err) {
      continue;
    }

    reactHotLoader.register(namedExport, key, "/Users/davidlee/WebstormProjects/occ-react-component/node_modules/lodash.merge/index.js");
  }
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js"), __webpack_require__(/*! ./../webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./node_modules/memoize-one/dist/memoize-one.esm.js":
/*!**********************************************************!*\
  !*** ./node_modules/memoize-one/dist/memoize-one.esm.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var simpleIsEqual = function simpleIsEqual(a, b) {
  return a === b;
};

function index(resultFn, isEqual) {
  if (isEqual === void 0) {
    isEqual = simpleIsEqual;
  }

  var lastThis;
  var lastArgs = [];
  var lastResult;
  var calledOnce = false;

  var isNewArgEqualToLast = function isNewArgEqualToLast(newArg, index) {
    return isEqual(newArg, lastArgs[index], index);
  };

  var result = function result() {
    for (var _len = arguments.length, newArgs = new Array(_len), _key = 0; _key < _len; _key++) {
      newArgs[_key] = arguments[_key];
    }

    if (calledOnce && lastThis === this && newArgs.length === lastArgs.length && newArgs.every(isNewArgEqualToLast)) {
      return lastResult;
    }

    lastResult = resultFn.apply(this, newArgs);
    calledOnce = true;
    lastThis = this;
    lastArgs = newArgs;
    return lastResult;
  };

  return result;
}

/* harmony default export */ __webpack_exports__["default"] = (index);
;
/* eslint-disable global-require, import/no-unresolved */

(function register() {
  /* react-hot-loader/webpack */
  var reactHotLoader = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").default;

  if (!reactHotLoader) {
    return;
  }
  /* eslint-disable camelcase, no-undef */


  var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : exports;
  /* eslint-enable camelcase, no-undef */

  if (typeof webpackExports === 'function') {
    reactHotLoader.register(webpackExports, 'module.exports', "/Users/davidlee/WebstormProjects/occ-react-component/node_modules/memoize-one/dist/memoize-one.esm.js");
    return;
  }
  /* eslint-disable no-restricted-syntax */


  for (var key in webpackExports) {
    /* eslint-enable no-restricted-syntax */
    if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) {
      continue;
    }

    var namedExport = void 0;

    try {
      namedExport = webpackExports[key];
    } catch (err) {
      continue;
    }

    reactHotLoader.register(namedExport, key, "/Users/davidlee/WebstormProjects/occ-react-component/node_modules/memoize-one/dist/memoize-one.esm.js");
  }
})();

/***/ }),

/***/ "./node_modules/node-libs-browser/node_modules/process/browser.js":
/*!************************************************************************!*\
  !*** ./node_modules/node-libs-browser/node_modules/process/browser.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// shim for using process in browser
var process = module.exports = {}; // cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
  throw new Error('setTimeout has not been defined');
}

function defaultClearTimeout() {
  throw new Error('clearTimeout has not been defined');
}

(function () {
  try {
    if (typeof setTimeout === 'function') {
      cachedSetTimeout = setTimeout;
    } else {
      cachedSetTimeout = defaultSetTimout;
    }
  } catch (e) {
    cachedSetTimeout = defaultSetTimout;
  }

  try {
    if (typeof clearTimeout === 'function') {
      cachedClearTimeout = clearTimeout;
    } else {
      cachedClearTimeout = defaultClearTimeout;
    }
  } catch (e) {
    cachedClearTimeout = defaultClearTimeout;
  }
})();

function runTimeout(fun) {
  if (cachedSetTimeout === setTimeout) {
    //normal enviroments in sane situations
    return setTimeout(fun, 0);
  } // if setTimeout wasn't available but was latter defined


  if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
    cachedSetTimeout = setTimeout;
    return setTimeout(fun, 0);
  }

  try {
    // when when somebody has screwed with setTimeout but no I.E. maddness
    return cachedSetTimeout(fun, 0);
  } catch (e) {
    try {
      // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
      return cachedSetTimeout.call(null, fun, 0);
    } catch (e) {
      // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
      return cachedSetTimeout.call(this, fun, 0);
    }
  }
}

function runClearTimeout(marker) {
  if (cachedClearTimeout === clearTimeout) {
    //normal enviroments in sane situations
    return clearTimeout(marker);
  } // if clearTimeout wasn't available but was latter defined


  if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
    cachedClearTimeout = clearTimeout;
    return clearTimeout(marker);
  }

  try {
    // when when somebody has screwed with setTimeout but no I.E. maddness
    return cachedClearTimeout(marker);
  } catch (e) {
    try {
      // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
      return cachedClearTimeout.call(null, marker);
    } catch (e) {
      // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
      // Some versions of I.E. have different rules for clearTimeout vs setTimeout
      return cachedClearTimeout.call(this, marker);
    }
  }
}

var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
  if (!draining || !currentQueue) {
    return;
  }

  draining = false;

  if (currentQueue.length) {
    queue = currentQueue.concat(queue);
  } else {
    queueIndex = -1;
  }

  if (queue.length) {
    drainQueue();
  }
}

function drainQueue() {
  if (draining) {
    return;
  }

  var timeout = runTimeout(cleanUpNextTick);
  draining = true;
  var len = queue.length;

  while (len) {
    currentQueue = queue;
    queue = [];

    while (++queueIndex < len) {
      if (currentQueue) {
        currentQueue[queueIndex].run();
      }
    }

    queueIndex = -1;
    len = queue.length;
  }

  currentQueue = null;
  draining = false;
  runClearTimeout(timeout);
}

process.nextTick = function (fun) {
  var args = new Array(arguments.length - 1);

  if (arguments.length > 1) {
    for (var i = 1; i < arguments.length; i++) {
      args[i - 1] = arguments[i];
    }
  }

  queue.push(new Item(fun, args));

  if (queue.length === 1 && !draining) {
    runTimeout(drainQueue);
  }
}; // v8 likes predictible objects


function Item(fun, array) {
  this.fun = fun;
  this.array = array;
}

Item.prototype.run = function () {
  this.fun.apply(null, this.array);
};

process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues

process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) {
  return [];
};

process.binding = function (name) {
  throw new Error('process.binding is not supported');
};

process.cwd = function () {
  return '/';
};

process.chdir = function (dir) {
  throw new Error('process.chdir is not supported');
};

process.umask = function () {
  return 0;
};

;
/* eslint-disable global-require, import/no-unresolved */

(function register() {
  /* react-hot-loader/webpack */
  var reactHotLoader = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").default;

  if (!reactHotLoader) {
    return;
  }
  /* eslint-disable camelcase, no-undef */


  var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : exports;
  /* eslint-enable camelcase, no-undef */

  if (typeof webpackExports === 'function') {
    reactHotLoader.register(webpackExports, 'module.exports', "/Users/davidlee/WebstormProjects/occ-react-component/node_modules/node-libs-browser/node_modules/process/browser.js");
    return;
  }
  /* eslint-disable no-restricted-syntax */


  for (var key in webpackExports) {
    /* eslint-enable no-restricted-syntax */
    if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) {
      continue;
    }

    var namedExport = void 0;

    try {
      namedExport = webpackExports[key];
    } catch (err) {
      continue;
    }

    reactHotLoader.register(namedExport, key, "/Users/davidlee/WebstormProjects/occ-react-component/node_modules/node-libs-browser/node_modules/process/browser.js");
  }
})();

/***/ }),

/***/ "./node_modules/object-assign/index.js":
/*!*********************************************!*\
  !*** ./node_modules/object-assign/index.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/

/* eslint-disable no-unused-vars */

var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject(val) {
  if (val === null || val === undefined) {
    throw new TypeError('Object.assign cannot be called with null or undefined');
  }

  return Object(val);
}

function shouldUseNative() {
  try {
    if (!Object.assign) {
      return false;
    } // Detect buggy property enumeration order in older V8 versions.
    // https://bugs.chromium.org/p/v8/issues/detail?id=4118


    var test1 = new String('abc'); // eslint-disable-line no-new-wrappers

    test1[5] = 'de';

    if (Object.getOwnPropertyNames(test1)[0] === '5') {
      return false;
    } // https://bugs.chromium.org/p/v8/issues/detail?id=3056


    var test2 = {};

    for (var i = 0; i < 10; i++) {
      test2['_' + String.fromCharCode(i)] = i;
    }

    var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
      return test2[n];
    });

    if (order2.join('') !== '0123456789') {
      return false;
    } // https://bugs.chromium.org/p/v8/issues/detail?id=3056


    var test3 = {};
    'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
      test3[letter] = letter;
    });

    if (Object.keys(Object.assign({}, test3)).join('') !== 'abcdefghijklmnopqrst') {
      return false;
    }

    return true;
  } catch (err) {
    // We don't expect any of the above to throw, but better to be safe.
    return false;
  }
}

module.exports = shouldUseNative() ? Object.assign : function (target, source) {
  var from;
  var to = toObject(target);
  var symbols;

  for (var s = 1; s < arguments.length; s++) {
    from = Object(arguments[s]);

    for (var key in from) {
      if (hasOwnProperty.call(from, key)) {
        to[key] = from[key];
      }
    }

    if (getOwnPropertySymbols) {
      symbols = getOwnPropertySymbols(from);

      for (var i = 0; i < symbols.length; i++) {
        if (propIsEnumerable.call(from, symbols[i])) {
          to[symbols[i]] = from[symbols[i]];
        }
      }
    }
  }

  return to;
};
;
/* eslint-disable global-require, import/no-unresolved */

(function register() {
  /* react-hot-loader/webpack */
  var reactHotLoader = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").default;

  if (!reactHotLoader) {
    return;
  }
  /* eslint-disable camelcase, no-undef */


  var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : exports;
  /* eslint-enable camelcase, no-undef */

  if (typeof webpackExports === 'function') {
    reactHotLoader.register(webpackExports, 'module.exports', "/Users/davidlee/WebstormProjects/occ-react-component/node_modules/object-assign/index.js");
    return;
  }
  /* eslint-disable no-restricted-syntax */


  for (var key in webpackExports) {
    /* eslint-enable no-restricted-syntax */
    if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) {
      continue;
    }

    var namedExport = void 0;

    try {
      namedExport = webpackExports[key];
    } catch (err) {
      continue;
    }

    reactHotLoader.register(namedExport, key, "/Users/davidlee/WebstormProjects/occ-react-component/node_modules/object-assign/index.js");
  }
})();

/***/ }),

/***/ "./node_modules/prop-types/checkPropTypes.js":
/*!***************************************************!*\
  !*** ./node_modules/prop-types/checkPropTypes.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */


var printWarning = function () {};

if (true) {
  var ReactPropTypesSecret = __webpack_require__(/*! ./lib/ReactPropTypesSecret */ "./node_modules/prop-types/lib/ReactPropTypesSecret.js");

  var loggedTypeFailures = {};

  printWarning = function (text) {
    var message = 'Warning: ' + text;

    if (typeof console !== 'undefined') {
      console.error(message);
    }

    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };
}
/**
 * Assert that the values match with the type specs.
 * Error messages are memorized and will only be shown once.
 *
 * @param {object} typeSpecs Map of name to a ReactPropType
 * @param {object} values Runtime values that need to be type-checked
 * @param {string} location e.g. "prop", "context", "child context"
 * @param {string} componentName Name of the component for error messages.
 * @param {?Function} getStack Returns the component stack.
 * @private
 */


function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
  if (true) {
    for (var typeSpecName in typeSpecs) {
      if (typeSpecs.hasOwnProperty(typeSpecName)) {
        var error; // Prop type validation may throw. In case they do, we don't want to
        // fail the render phase where it didn't fail before. So we log it.
        // After these have been cleaned up, we'll let them throw.

        try {
          // This is intentionally an invariant that gets caught. It's the same
          // behavior as without this statement except with a better message.
          if (typeof typeSpecs[typeSpecName] !== 'function') {
            var err = Error((componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' + 'it must be a function, usually from the `prop-types` package, but received `' + typeof typeSpecs[typeSpecName] + '`.');
            err.name = 'Invariant Violation';
            throw err;
          }

          error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret);
        } catch (ex) {
          error = ex;
        }

        if (error && !(error instanceof Error)) {
          printWarning((componentName || 'React class') + ': type specification of ' + location + ' `' + typeSpecName + '` is invalid; the type checker ' + 'function must return `null` or an `Error` but returned a ' + typeof error + '. ' + 'You may have forgotten to pass an argument to the type checker ' + 'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' + 'shape all require an argument).');
        }

        if (error instanceof Error && !(error.message in loggedTypeFailures)) {
          // Only monitor this failure once because there tends to be a lot of the
          // same error.
          loggedTypeFailures[error.message] = true;
          var stack = getStack ? getStack() : '';
          printWarning('Failed ' + location + ' type: ' + error.message + (stack != null ? stack : ''));
        }
      }
    }
  }
}

module.exports = checkPropTypes;
;
/* eslint-disable global-require, import/no-unresolved */

(function register() {
  /* react-hot-loader/webpack */
  var reactHotLoader = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").default;

  if (!reactHotLoader) {
    return;
  }
  /* eslint-disable camelcase, no-undef */


  var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : exports;
  /* eslint-enable camelcase, no-undef */

  if (typeof webpackExports === 'function') {
    reactHotLoader.register(webpackExports, 'module.exports', "/Users/davidlee/WebstormProjects/occ-react-component/node_modules/prop-types/checkPropTypes.js");
    return;
  }
  /* eslint-disable no-restricted-syntax */


  for (var key in webpackExports) {
    /* eslint-enable no-restricted-syntax */
    if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) {
      continue;
    }

    var namedExport = void 0;

    try {
      namedExport = webpackExports[key];
    } catch (err) {
      continue;
    }

    reactHotLoader.register(namedExport, key, "/Users/davidlee/WebstormProjects/occ-react-component/node_modules/prop-types/checkPropTypes.js");
  }
})();

/***/ }),

/***/ "./node_modules/prop-types/factoryWithTypeCheckers.js":
/*!************************************************************!*\
  !*** ./node_modules/prop-types/factoryWithTypeCheckers.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */


var assign = __webpack_require__(/*! object-assign */ "./node_modules/object-assign/index.js");

var ReactPropTypesSecret = __webpack_require__(/*! ./lib/ReactPropTypesSecret */ "./node_modules/prop-types/lib/ReactPropTypesSecret.js");

var checkPropTypes = __webpack_require__(/*! ./checkPropTypes */ "./node_modules/prop-types/checkPropTypes.js");

var printWarning = function () {};

if (true) {
  printWarning = function (text) {
    var message = 'Warning: ' + text;

    if (typeof console !== 'undefined') {
      console.error(message);
    }

    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };
}

function emptyFunctionThatReturnsNull() {
  return null;
}

module.exports = function (isValidElement, throwOnDirectAccess) {
  /* global Symbol */
  var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
  var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.

  /**
   * Returns the iterator method function contained on the iterable object.
   *
   * Be sure to invoke the function with the iterable as context:
   *
   *     var iteratorFn = getIteratorFn(myIterable);
   *     if (iteratorFn) {
   *       var iterator = iteratorFn.call(myIterable);
   *       ...
   *     }
   *
   * @param {?object} maybeIterable
   * @return {?function}
   */

  function getIteratorFn(maybeIterable) {
    var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);

    if (typeof iteratorFn === 'function') {
      return iteratorFn;
    }
  }
  /**
   * Collection of methods that allow declaration and validation of props that are
   * supplied to React components. Example usage:
   *
   *   var Props = require('ReactPropTypes');
   *   var MyArticle = React.createClass({
   *     propTypes: {
   *       // An optional string prop named "description".
   *       description: Props.string,
   *
   *       // A required enum prop named "category".
   *       category: Props.oneOf(['News','Photos']).isRequired,
   *
   *       // A prop named "dialog" that requires an instance of Dialog.
   *       dialog: Props.instanceOf(Dialog).isRequired
   *     },
   *     render: function() { ... }
   *   });
   *
   * A more formal specification of how these methods are used:
   *
   *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
   *   decl := ReactPropTypes.{type}(.isRequired)?
   *
   * Each and every declaration produces a function with the same signature. This
   * allows the creation of custom validation functions. For example:
   *
   *  var MyLink = React.createClass({
   *    propTypes: {
   *      // An optional string or URI prop named "href".
   *      href: function(props, propName, componentName) {
   *        var propValue = props[propName];
   *        if (propValue != null && typeof propValue !== 'string' &&
   *            !(propValue instanceof URI)) {
   *          return new Error(
   *            'Expected a string or an URI for ' + propName + ' in ' +
   *            componentName
   *          );
   *        }
   *      }
   *    },
   *    render: function() {...}
   *  });
   *
   * @internal
   */


  var ANONYMOUS = '<<anonymous>>'; // Important!
  // Keep this list in sync with production version in `./factoryWithThrowingShims.js`.

  var ReactPropTypes = {
    array: createPrimitiveTypeChecker('array'),
    bool: createPrimitiveTypeChecker('boolean'),
    func: createPrimitiveTypeChecker('function'),
    number: createPrimitiveTypeChecker('number'),
    object: createPrimitiveTypeChecker('object'),
    string: createPrimitiveTypeChecker('string'),
    symbol: createPrimitiveTypeChecker('symbol'),
    any: createAnyTypeChecker(),
    arrayOf: createArrayOfTypeChecker,
    element: createElementTypeChecker(),
    instanceOf: createInstanceTypeChecker,
    node: createNodeChecker(),
    objectOf: createObjectOfTypeChecker,
    oneOf: createEnumTypeChecker,
    oneOfType: createUnionTypeChecker,
    shape: createShapeTypeChecker,
    exact: createStrictShapeTypeChecker
  };
  /**
   * inlined Object.is polyfill to avoid requiring consumers ship their own
   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
   */

  /*eslint-disable no-self-compare*/

  function is(x, y) {
    // SameValue algorithm
    if (x === y) {
      // Steps 1-5, 7-10
      // Steps 6.b-6.e: +0 != -0
      return x !== 0 || 1 / x === 1 / y;
    } else {
      // Step 6.a: NaN == NaN
      return x !== x && y !== y;
    }
  }
  /*eslint-enable no-self-compare*/

  /**
   * We use an Error-like object for backward compatibility as people may call
   * PropTypes directly and inspect their output. However, we don't use real
   * Errors anymore. We don't inspect their stack anyway, and creating them
   * is prohibitively expensive if they are created too often, such as what
   * happens in oneOfType() for any type before the one that matched.
   */


  function PropTypeError(message) {
    this.message = message;
    this.stack = '';
  } // Make `instanceof Error` still work for returned errors.


  PropTypeError.prototype = Error.prototype;

  function createChainableTypeChecker(validate) {
    if (true) {
      var manualPropTypeCallCache = {};
      var manualPropTypeWarningCount = 0;
    }

    function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
      componentName = componentName || ANONYMOUS;
      propFullName = propFullName || propName;

      if (secret !== ReactPropTypesSecret) {
        if (throwOnDirectAccess) {
          // New behavior only for users of `prop-types` package
          var err = new Error('Calling PropTypes validators directly is not supported by the `prop-types` package. ' + 'Use `PropTypes.checkPropTypes()` to call them. ' + 'Read more at http://fb.me/use-check-prop-types');
          err.name = 'Invariant Violation';
          throw err;
        } else if ( true && typeof console !== 'undefined') {
          // Old behavior for people using React.PropTypes
          var cacheKey = componentName + ':' + propName;

          if (!manualPropTypeCallCache[cacheKey] && // Avoid spamming the console because they are often not actionable except for lib authors
          manualPropTypeWarningCount < 3) {
            printWarning('You are manually calling a React.PropTypes validation ' + 'function for the `' + propFullName + '` prop on `' + componentName + '`. This is deprecated ' + 'and will throw in the standalone `prop-types` package. ' + 'You may be seeing this warning due to a third-party PropTypes ' + 'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.');
            manualPropTypeCallCache[cacheKey] = true;
            manualPropTypeWarningCount++;
          }
        }
      }

      if (props[propName] == null) {
        if (isRequired) {
          if (props[propName] === null) {
            return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required ' + ('in `' + componentName + '`, but its value is `null`.'));
          }

          return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required in ' + ('`' + componentName + '`, but its value is `undefined`.'));
        }

        return null;
      } else {
        return validate(props, propName, componentName, location, propFullName);
      }
    }

    var chainedCheckType = checkType.bind(null, false);
    chainedCheckType.isRequired = checkType.bind(null, true);
    return chainedCheckType;
  }

  function createPrimitiveTypeChecker(expectedType) {
    function validate(props, propName, componentName, location, propFullName, secret) {
      var propValue = props[propName];
      var propType = getPropType(propValue);

      if (propType !== expectedType) {
        // `propValue` being instance of, say, date/regexp, pass the 'object'
        // check, but we can offer a more precise error message here rather than
        // 'of type `object`'.
        var preciseType = getPreciseType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'));
      }

      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function createAnyTypeChecker() {
    return createChainableTypeChecker(emptyFunctionThatReturnsNull);
  }

  function createArrayOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');
      }

      var propValue = props[propName];

      if (!Array.isArray(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
      }

      for (var i = 0; i < propValue.length; i++) {
        var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret);

        if (error instanceof Error) {
          return error;
        }
      }

      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function createElementTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];

      if (!isValidElement(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'));
      }

      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function createInstanceTypeChecker(expectedClass) {
    function validate(props, propName, componentName, location, propFullName) {
      if (!(props[propName] instanceof expectedClass)) {
        var expectedClassName = expectedClass.name || ANONYMOUS;
        var actualClassName = getClassName(props[propName]);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
      }

      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function createEnumTypeChecker(expectedValues) {
    if (!Array.isArray(expectedValues)) {
       true ? printWarning('Invalid argument supplied to oneOf, expected an instance of array.') : undefined;
      return emptyFunctionThatReturnsNull;
    }

    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];

      for (var i = 0; i < expectedValues.length; i++) {
        if (is(propValue, expectedValues[i])) {
          return null;
        }
      }

      var valuesString = JSON.stringify(expectedValues);
      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of value `' + propValue + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
    }

    return createChainableTypeChecker(validate);
  }

  function createObjectOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');
      }

      var propValue = props[propName];
      var propType = getPropType(propValue);

      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
      }

      for (var key in propValue) {
        if (propValue.hasOwnProperty(key)) {
          var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);

          if (error instanceof Error) {
            return error;
          }
        }
      }

      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function createUnionTypeChecker(arrayOfTypeCheckers) {
    if (!Array.isArray(arrayOfTypeCheckers)) {
       true ? printWarning('Invalid argument supplied to oneOfType, expected an instance of array.') : undefined;
      return emptyFunctionThatReturnsNull;
    }

    for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
      var checker = arrayOfTypeCheckers[i];

      if (typeof checker !== 'function') {
        printWarning('Invalid argument supplied to oneOfType. Expected an array of check functions, but ' + 'received ' + getPostfixForTypeWarning(checker) + ' at index ' + i + '.');
        return emptyFunctionThatReturnsNull;
      }
    }

    function validate(props, propName, componentName, location, propFullName) {
      for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
        var checker = arrayOfTypeCheckers[i];

        if (checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret) == null) {
          return null;
        }
      }

      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`.'));
    }

    return createChainableTypeChecker(validate);
  }

  function createNodeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      if (!isNode(props[propName])) {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
      }

      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function createShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);

      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }

      for (var key in shapeTypes) {
        var checker = shapeTypes[key];

        if (!checker) {
          continue;
        }

        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);

        if (error) {
          return error;
        }
      }

      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function createStrictShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);

      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      } // We need to check all keys in case some are required but missing from
      // props.


      var allKeys = assign({}, props[propName], shapeTypes);

      for (var key in allKeys) {
        var checker = shapeTypes[key];

        if (!checker) {
          return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` key `' + key + '` supplied to `' + componentName + '`.' + '\nBad object: ' + JSON.stringify(props[propName], null, '  ') + '\nValid keys: ' + JSON.stringify(Object.keys(shapeTypes), null, '  '));
        }

        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);

        if (error) {
          return error;
        }
      }

      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function isNode(propValue) {
    switch (typeof propValue) {
      case 'number':
      case 'string':
      case 'undefined':
        return true;

      case 'boolean':
        return !propValue;

      case 'object':
        if (Array.isArray(propValue)) {
          return propValue.every(isNode);
        }

        if (propValue === null || isValidElement(propValue)) {
          return true;
        }

        var iteratorFn = getIteratorFn(propValue);

        if (iteratorFn) {
          var iterator = iteratorFn.call(propValue);
          var step;

          if (iteratorFn !== propValue.entries) {
            while (!(step = iterator.next()).done) {
              if (!isNode(step.value)) {
                return false;
              }
            }
          } else {
            // Iterator will provide entry [k,v] tuples rather than values.
            while (!(step = iterator.next()).done) {
              var entry = step.value;

              if (entry) {
                if (!isNode(entry[1])) {
                  return false;
                }
              }
            }
          }
        } else {
          return false;
        }

        return true;

      default:
        return false;
    }
  }

  function isSymbol(propType, propValue) {
    // Native Symbol.
    if (propType === 'symbol') {
      return true;
    } // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'


    if (propValue['@@toStringTag'] === 'Symbol') {
      return true;
    } // Fallback for non-spec compliant Symbols which are polyfilled.


    if (typeof Symbol === 'function' && propValue instanceof Symbol) {
      return true;
    }

    return false;
  } // Equivalent of `typeof` but with special handling for array and regexp.


  function getPropType(propValue) {
    var propType = typeof propValue;

    if (Array.isArray(propValue)) {
      return 'array';
    }

    if (propValue instanceof RegExp) {
      // Old webkits (at least until Android 4.0) return 'function' rather than
      // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
      // passes PropTypes.object.
      return 'object';
    }

    if (isSymbol(propType, propValue)) {
      return 'symbol';
    }

    return propType;
  } // This handles more types than `getPropType`. Only used for error messages.
  // See `createPrimitiveTypeChecker`.


  function getPreciseType(propValue) {
    if (typeof propValue === 'undefined' || propValue === null) {
      return '' + propValue;
    }

    var propType = getPropType(propValue);

    if (propType === 'object') {
      if (propValue instanceof Date) {
        return 'date';
      } else if (propValue instanceof RegExp) {
        return 'regexp';
      }
    }

    return propType;
  } // Returns a string that is postfixed to a warning about an invalid type.
  // For example, "undefined" or "of type array"


  function getPostfixForTypeWarning(value) {
    var type = getPreciseType(value);

    switch (type) {
      case 'array':
      case 'object':
        return 'an ' + type;

      case 'boolean':
      case 'date':
      case 'regexp':
        return 'a ' + type;

      default:
        return type;
    }
  } // Returns class name of the object, if any.


  function getClassName(propValue) {
    if (!propValue.constructor || !propValue.constructor.name) {
      return ANONYMOUS;
    }

    return propValue.constructor.name;
  }

  ReactPropTypes.checkPropTypes = checkPropTypes;
  ReactPropTypes.PropTypes = ReactPropTypes;
  return ReactPropTypes;
};

;
/* eslint-disable global-require, import/no-unresolved */

(function register() {
  /* react-hot-loader/webpack */
  var reactHotLoader = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").default;

  if (!reactHotLoader) {
    return;
  }
  /* eslint-disable camelcase, no-undef */


  var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : exports;
  /* eslint-enable camelcase, no-undef */

  if (typeof webpackExports === 'function') {
    reactHotLoader.register(webpackExports, 'module.exports', "/Users/davidlee/WebstormProjects/occ-react-component/node_modules/prop-types/factoryWithTypeCheckers.js");
    return;
  }
  /* eslint-disable no-restricted-syntax */


  for (var key in webpackExports) {
    /* eslint-enable no-restricted-syntax */
    if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) {
      continue;
    }

    var namedExport = void 0;

    try {
      namedExport = webpackExports[key];
    } catch (err) {
      continue;
    }

    reactHotLoader.register(namedExport, key, "/Users/davidlee/WebstormProjects/occ-react-component/node_modules/prop-types/factoryWithTypeCheckers.js");
  }
})();

/***/ }),

/***/ "./node_modules/prop-types/index.js":
/*!******************************************!*\
  !*** ./node_modules/prop-types/index.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
if (true) {
  var REACT_ELEMENT_TYPE = typeof Symbol === 'function' && Symbol.for && Symbol.for('react.element') || 0xeac7;

  var isValidElement = function (object) {
    return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
  }; // By explicitly using `prop-types` you are opting into new development behavior.
  // http://fb.me/prop-types-in-prod


  var throwOnDirectAccess = true;
  module.exports = __webpack_require__(/*! ./factoryWithTypeCheckers */ "./node_modules/prop-types/factoryWithTypeCheckers.js")(isValidElement, throwOnDirectAccess);
} else {}

;
/* eslint-disable global-require, import/no-unresolved */

(function register() {
  /* react-hot-loader/webpack */
  var reactHotLoader = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").default;

  if (!reactHotLoader) {
    return;
  }
  /* eslint-disable camelcase, no-undef */


  var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : exports;
  /* eslint-enable camelcase, no-undef */

  if (typeof webpackExports === 'function') {
    reactHotLoader.register(webpackExports, 'module.exports', "/Users/davidlee/WebstormProjects/occ-react-component/node_modules/prop-types/index.js");
    return;
  }
  /* eslint-disable no-restricted-syntax */


  for (var key in webpackExports) {
    /* eslint-enable no-restricted-syntax */
    if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) {
      continue;
    }

    var namedExport = void 0;

    try {
      namedExport = webpackExports[key];
    } catch (err) {
      continue;
    }

    reactHotLoader.register(namedExport, key, "/Users/davidlee/WebstormProjects/occ-react-component/node_modules/prop-types/index.js");
  }
})();

/***/ }),

/***/ "./node_modules/prop-types/lib/ReactPropTypesSecret.js":
/*!*************************************************************!*\
  !*** ./node_modules/prop-types/lib/ReactPropTypesSecret.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */


var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';
module.exports = ReactPropTypesSecret;
;
/* eslint-disable global-require, import/no-unresolved */

(function register() {
  /* react-hot-loader/webpack */
  var reactHotLoader = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").default;

  if (!reactHotLoader) {
    return;
  }
  /* eslint-disable camelcase, no-undef */


  var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : exports;
  /* eslint-enable camelcase, no-undef */

  if (typeof webpackExports === 'function') {
    reactHotLoader.register(webpackExports, 'module.exports', "/Users/davidlee/WebstormProjects/occ-react-component/node_modules/prop-types/lib/ReactPropTypesSecret.js");
    return;
  }
  /* eslint-disable no-restricted-syntax */


  for (var key in webpackExports) {
    /* eslint-enable no-restricted-syntax */
    if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) {
      continue;
    }

    var namedExport = void 0;

    try {
      namedExport = webpackExports[key];
    } catch (err) {
      continue;
    }

    reactHotLoader.register(namedExport, key, "/Users/davidlee/WebstormProjects/occ-react-component/node_modules/prop-types/lib/ReactPropTypesSecret.js");
  }
})();

/***/ }),

/***/ "./node_modules/react-hot-loader/dist/react-hot-loader.development.js":
/*!****************************************************************************!*\
  !*** ./node_modules/react-hot-loader/dist/react-hot-loader.development.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopDefault(ex) {
  return ex && typeof ex === 'object' && 'default' in ex ? ex['default'] : ex;
}

var React = __webpack_require__(/*! react */ "react");

var React__default = _interopDefault(React);

var shallowEqual = _interopDefault(__webpack_require__(/*! shallowequal */ "./node_modules/shallowequal/index.js"));

var ReactDOM = _interopDefault(__webpack_require__(/*! react-dom */ "react-dom"));

var PropTypes = _interopDefault(__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"));

var defaultPolyfill = __webpack_require__(/*! react-lifecycles-compat */ "./node_modules/react-lifecycles-compat/react-lifecycles-compat.es.js");

var defaultPolyfill__default = _interopDefault(defaultPolyfill);

var levenshtein = _interopDefault(__webpack_require__(/*! fast-levenshtein */ "./node_modules/fast-levenshtein/levenshtein.js"));

var hoistNonReactStatic = _interopDefault(__webpack_require__(/*! hoist-non-react-statics */ "./node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js"));

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
  return typeof obj;
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
};

var classCallCheck = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

var inherits = function (subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
};

var possibleConstructorReturn = function (self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (typeof call === "object" || typeof call === "function") ? call : self;
};
/* eslint-disable no-underscore-dangle */


var isCompositeComponent = function isCompositeComponent(type) {
  return typeof type === 'function';
};

var isReloadableComponent = function isReloadableComponent(type) {
  return typeof type === 'function' || (typeof type === 'undefined' ? 'undefined' : _typeof(type)) === 'object';
};

var getComponentDisplayName = function getComponentDisplayName(type) {
  var displayName = type.displayName || type.name;
  return displayName && displayName !== 'ReactComponent' ? displayName : 'Component';
};

var reactLifeCycleMountMethods = ['componentWillMount', 'componentDidMount'];

function isReactClass(Component) {
  return !!(Component.prototype && (React__default.Component.prototype.isPrototypeOf(Component.prototype) || // react 14 support
  Component.prototype.isReactComponent || Component.prototype.componentWillMount || Component.prototype.componentWillUnmount || Component.prototype.componentDidMount || Component.prototype.componentDidUnmount || Component.prototype.render));
}

function isReactClassInstance(Component) {
  return Component && isReactClass({
    prototype: Object.getPrototypeOf(Component)
  });
}

var getInternalInstance = function getInternalInstance(instance) {
  return instance._reactInternalFiber || // React 16
  instance._reactInternalInstance || // React 15
  null;
};

var updateInstance = function updateInstance(instance) {
  var updater = instance.updater,
      forceUpdate = instance.forceUpdate;

  if (typeof forceUpdate === 'function') {
    instance.forceUpdate();
  } else if (updater && typeof updater.enqueueForceUpdate === 'function') {
    updater.enqueueForceUpdate(instance);
  }
};

var isFragmentNode = function isFragmentNode(_ref) {
  var type = _ref.type;
  return React__default.Fragment && type === React__default.Fragment;
};

var ContextType = React__default.createContext ? React__default.createContext() : null;
var ConsumerType = ContextType && ContextType.Consumer.$$typeof;
var ProviderType = ContextType && ContextType.Provider.$$typeof;
var MemoType = React__default.memo && React__default.memo(function () {
  return null;
}).$$typeof;
var LazyType = React__default.lazy && React__default.lazy(function () {
  return null;
}).$$typeof;
var ForwardType = React__default.forwardRef && React__default.forwardRef(function () {
  return null;
}).$$typeof;
var CONTEXT_CURRENT_VALUE = '_currentValue';

var isContextConsumer = function isContextConsumer(_ref2) {
  var type = _ref2.type;
  return type && (typeof type === 'undefined' ? 'undefined' : _typeof(type)) === 'object' && type.$$typeof === ConsumerType && ConsumerType;
};

var isContextProvider = function isContextProvider(_ref3) {
  var type = _ref3.type;
  return type && (typeof type === 'undefined' ? 'undefined' : _typeof(type)) === 'object' && type.$$typeof === ProviderType && ProviderType;
};

var isMemoType = function isMemoType(_ref4) {
  var type = _ref4.type;
  return type && (typeof type === 'undefined' ? 'undefined' : _typeof(type)) === 'object' && type.$$typeof === MemoType && MemoType;
};

var isLazyType = function isLazyType(_ref5) {
  var type = _ref5.type;
  return type && (typeof type === 'undefined' ? 'undefined' : _typeof(type)) === 'object' && type.$$typeof === LazyType && LazyType;
};

var isForwardType = function isForwardType(_ref6) {
  var type = _ref6.type;
  return type && (typeof type === 'undefined' ? 'undefined' : _typeof(type)) === 'object' && type.$$typeof === ForwardType && ForwardType;
};

var getContextProvider = function getContextProvider(type) {
  return type && type._context;
};

var generation = 1;
var hotComparisonCounter = 0;

var nullFunction = function nullFunction() {};

var onHotComparisonOpen = nullFunction;
var onHotComparisonElement = nullFunction;
var onHotComparisonClose = nullFunction;

var setComparisonHooks = function setComparisonHooks(open, element, close) {
  onHotComparisonOpen = open;
  onHotComparisonElement = element;
  onHotComparisonClose = close;
};

var getElementComparisonHook = function getElementComparisonHook() {
  return onHotComparisonElement;
};

var hotComparisonOpen = function hotComparisonOpen() {
  return hotComparisonCounter > 0;
};

var incrementHot = function incrementHot() {
  if (!hotComparisonCounter) {
    onHotComparisonOpen();
  }

  hotComparisonCounter++;
};

var decrementHot = function decrementHot() {
  hotComparisonCounter--;

  if (!hotComparisonCounter) {
    onHotComparisonClose();
  }
};

var enterHotUpdate = function enterHotUpdate() {
  Promise.resolve(incrementHot()).then(function () {
    return setTimeout(decrementHot, 0);
  });
};

var increment = function increment() {
  enterHotUpdate();
  return generation++;
};

var get$1 = function get() {
  return generation;
};

var PREFIX = '__reactstandin__';
var PROXY_KEY = PREFIX + 'key';
var GENERATION = PREFIX + 'proxyGeneration';
var REGENERATE_METHOD = PREFIX + 'regenerateByEval';
var UNWRAP_PROXY = PREFIX + 'getCurrent';
var CACHED_RESULT = PREFIX + 'cachedResult';
var PROXY_IS_MOUNTED = PREFIX + 'isMounted';
var configuration = {
  // Log level
  logLevel: 'error',
  // Allows using SFC without changes
  pureSFC: true,
  // keep render method unpatched, moving sideEffect to componentDidUpdate
  pureRender: false,
  // Allows SFC to be used, enables "intermediate" components used by Relay, should be disabled for Preact
  allowSFC: true,
  // Disable "hot-replacement-render"
  disableHotRenderer: false,
  // Disable "hot-replacement-render" when injection into react-dom is made
  disableHotRendererWhenInjected: false,
  // Hook on babel component register.
  onComponentRegister: false,
  // Hook on React renders for a first time component
  onComponentCreate: false,
  // flag to completely disable RHL for SFC. Probably don't use it without dom patch made.
  ignoreSFC: false,
  // ignoreSFC when injection into react-dom is made
  ignoreSFCWhenInjected: true,
  // flag to completely disable RHL for Components
  ignoreComponents: false,
  // default value for AppContainer errorOverlay
  errorReporter: undefined,
  // Global error overlay
  ErrorOverlay: undefined
};
var internalConfiguration = {
  // control proxy creation
  disableProxyCreation: false
};
/* eslint-disable no-console */

var logger = {
  debug: function debug() {
    if (['debug'].indexOf(configuration.logLevel) !== -1) {
      var _console;

      (_console = console).debug.apply(_console, arguments);
    }
  },
  log: function log() {
    if (['debug', 'log'].indexOf(configuration.logLevel) !== -1) {
      var _console2;

      (_console2 = console).log.apply(_console2, arguments);
    }
  },
  warn: function warn() {
    if (['debug', 'log', 'warn'].indexOf(configuration.logLevel) !== -1) {
      var _console3;

      (_console3 = console).warn.apply(_console3, arguments);
    }
  },
  error: function error() {
    if (['debug', 'log', 'warn', 'error'].indexOf(configuration.logLevel) !== -1) {
      var _console4;

      (_console4 = console).error.apply(_console4, arguments);
    }
  }
};
/* eslint-disable no-eval, func-names */

function safeReactConstructor(Component, lastInstance) {
  try {
    if (lastInstance) {
      return new Component(lastInstance.props, lastInstance.context);
    }

    return new Component({}, {});
  } catch (e) {// some components, like Redux connect could not be created without proper context
  }

  return null;
}

function isNativeFunction(fn) {
  return typeof fn === 'function' ? fn.toString().indexOf('[native code]') > 0 : false;
}

var identity = function identity(a) {
  return a;
};

var indirectEval = eval;

var doesSupportClasses = function () {
  try {
    indirectEval('class Test {}');
    return true;
  } catch (e) {
    return false;
  }
}();

var ES6ProxyComponentFactory = doesSupportClasses && indirectEval('\n(function(InitialParent, postConstructionAction) {\n  return class ProxyComponent extends InitialParent {\n    constructor(props, context) {\n      super(props, context)\n      postConstructionAction.call(this)\n    }\n  }\n})\n');

var ES5ProxyComponentFactory = function ES5ProxyComponentFactory(InitialParent, postConstructionAction) {
  function ProxyComponent(props, context) {
    InitialParent.call(this, props, context);
    postConstructionAction.call(this);
  }

  ProxyComponent.prototype = Object.create(InitialParent.prototype);
  Object.setPrototypeOf(ProxyComponent, InitialParent);
  return ProxyComponent;
};

var proxyClassCreator = doesSupportClasses ? ES6ProxyComponentFactory : ES5ProxyComponentFactory;

function getOwnKeys(target) {
  return [].concat(Object.getOwnPropertyNames(target), Object.getOwnPropertySymbols(target));
}

function shallowStringsEqual(a, b) {
  for (var key in a) {
    if (String(a[key]) !== String(b[key])) {
      return false;
    }
  }

  return true;
}

function deepPrototypeUpdate(dest, source) {
  var deepDest = Object.getPrototypeOf(dest);
  var deepSrc = Object.getPrototypeOf(source);

  if (deepDest && deepSrc && deepSrc !== deepDest) {
    deepPrototypeUpdate(deepDest, deepSrc);
  }

  if (source.prototype && source.prototype !== dest.prototype) {
    dest.prototype = source.prototype;
  }
}

function safeDefineProperty(target, key, props) {
  try {
    Object.defineProperty(target, key, props);
  } catch (e) {
    logger.warn('Error while wrapping', key, ' -> ', e);
  }
}

var RESERVED_STATICS = ['length', 'displayName', 'name', 'arguments', 'caller', 'prototype', 'toString', 'valueOf', 'isStatelessFunctionalProxy', PROXY_KEY, UNWRAP_PROXY];

function transferStaticProps(ProxyComponent, savedDescriptors, PreviousComponent, NextComponent) {
  Object.getOwnPropertyNames(ProxyComponent).forEach(function (key) {
    if (RESERVED_STATICS.indexOf(key) !== -1) {
      return;
    }

    var prevDescriptor = Object.getOwnPropertyDescriptor(ProxyComponent, key);
    var savedDescriptor = savedDescriptors[key];

    if (!shallowEqual(prevDescriptor, savedDescriptor)) {
      safeDefineProperty(NextComponent, key, prevDescriptor);
    }
  }); // Copy newly defined static methods and properties

  Object.getOwnPropertyNames(NextComponent).forEach(function (key) {
    if (RESERVED_STATICS.indexOf(key) !== -1) {
      return;
    }

    var prevDescriptor = PreviousComponent && Object.getOwnPropertyDescriptor(ProxyComponent, key);
    var savedDescriptor = savedDescriptors[key]; // Skip redefined descriptors

    if (prevDescriptor && savedDescriptor && !shallowEqual(savedDescriptor, prevDescriptor)) {
      safeDefineProperty(NextComponent, key, prevDescriptor);
      return;
    }

    if (prevDescriptor && !savedDescriptor) {
      safeDefineProperty(ProxyComponent, key, prevDescriptor);
      return;
    }

    var nextDescriptor = _extends({}, Object.getOwnPropertyDescriptor(NextComponent, key), {
      configurable: true
    });

    savedDescriptors[key] = nextDescriptor;
    safeDefineProperty(ProxyComponent, key, nextDescriptor);
  }); // Remove static methods and properties that are no longer defined

  Object.getOwnPropertyNames(ProxyComponent).forEach(function (key) {
    if (RESERVED_STATICS.indexOf(key) !== -1) {
      return;
    } // Skip statics that exist on the next class


    if (NextComponent.hasOwnProperty(key)) {
      return;
    } // Skip non-configurable statics


    var proxyDescriptor = Object.getOwnPropertyDescriptor(ProxyComponent, key);

    if (proxyDescriptor && !proxyDescriptor.configurable) {
      return;
    }

    var prevDescriptor = PreviousComponent && Object.getOwnPropertyDescriptor(PreviousComponent, key);
    var savedDescriptor = savedDescriptors[key]; // Skip redefined descriptors

    if (prevDescriptor && savedDescriptor && !shallowEqual(savedDescriptor, prevDescriptor)) {
      return;
    }

    safeDefineProperty(ProxyComponent, key, {
      value: undefined
    });
  });
  return savedDescriptors;
}

function mergeComponents(ProxyComponent, NextComponent, InitialComponent, lastInstance, injectedMembers) {
  var injectedCode = {};

  try {
    var nextInstance = safeReactConstructor(NextComponent, lastInstance);

    try {
      // Bypass babel class inheritance checking
      deepPrototypeUpdate(InitialComponent, NextComponent);
    } catch (e) {// It was ES6 class
    }

    var proxyInstance = safeReactConstructor(ProxyComponent, lastInstance);

    if (!nextInstance || !proxyInstance) {
      return injectedCode;
    }

    var mergedAttrs = _extends({}, proxyInstance, nextInstance);

    var hasRegenerate = proxyInstance[REGENERATE_METHOD];
    var ownKeys = getOwnKeys(Object.getPrototypeOf(ProxyComponent.prototype));
    Object.keys(mergedAttrs).forEach(function (key) {
      if (key.indexOf(PREFIX) === 0) return;
      var nextAttr = nextInstance[key];
      var prevAttr = proxyInstance[key];

      if (nextAttr) {
        if (isNativeFunction(nextAttr) || isNativeFunction(prevAttr)) {
          // this is bound method
          var isSameArity = nextAttr.length === prevAttr.length;
          var existsInPrototype = ownKeys.indexOf(key) >= 0 || ProxyComponent.prototype[key];

          if ((isSameArity || !prevAttr) && existsInPrototype) {
            if (hasRegenerate) {
              injectedCode[key] = 'Object.getPrototypeOf(this)[\'' + key + '\'].bind(this)';
            } else {
              logger.warn('React Hot Loader:,', 'Non-controlled class', ProxyComponent.name, 'contains a new native or bound function ', key, nextAttr, '. Unable to reproduce');
            }
          } else {
            logger.warn('React Hot Loader:', 'Updated class ', ProxyComponent.name, 'contains native or bound function ', key, nextAttr, '. Unable to reproduce, use arrow functions instead.', '(arity: ' + nextAttr.length + '/' + prevAttr.length + ', proto: ' + (existsInPrototype ? 'yes' : 'no'));
          }

          return;
        }

        var nextString = String(nextAttr);
        var injectedBefore = injectedMembers[key];
        var isArrow = nextString.indexOf('=>') >= 0;
        var isFunction = nextString.indexOf('function') >= 0 || isArrow;
        var referToThis = nextString.indexOf('this') >= 0;

        if (nextString !== String(prevAttr) || injectedBefore && nextString !== String(injectedBefore) || isArrow && referToThis) {
          if (!hasRegenerate) {
            if (!isFunction) {
              // just copy prop over
              injectedCode[key] = nextAttr;
            } else {
              logger.warn('React Hot Loader:', ' Updated class ', ProxyComponent.name, 'had different code for', key, nextAttr, '. Unable to reproduce. Regeneration support needed.');
            }
          } else {
            injectedCode[key] = nextAttr;
          }
        }
      }
    });
  } catch (e) {
    logger.warn('React Hot Loader:', e);
  }

  return injectedCode;
}

function checkLifeCycleMethods(ProxyComponent, NextComponent) {
  try {
    var p1 = Object.getPrototypeOf(ProxyComponent.prototype);
    var p2 = NextComponent.prototype;
    reactLifeCycleMountMethods.forEach(function (key) {
      var d1 = Object.getOwnPropertyDescriptor(p1, key) || {
        value: p1[key]
      };
      var d2 = Object.getOwnPropertyDescriptor(p2, key) || {
        value: p2[key]
      };

      if (!shallowStringsEqual(d1, d2)) {
        logger.warn('React Hot Loader:', 'You did update', ProxyComponent.name, 's lifecycle method', key, '. Unable to repeat');
      }
    });
  } catch (e) {// Ignore errors
  }
}

function inject(target, currentGeneration, injectedMembers) {
  if (target[GENERATION] !== currentGeneration) {
    var hasRegenerate = !!target[REGENERATE_METHOD];
    Object.keys(injectedMembers).forEach(function (key) {
      try {
        if (hasRegenerate) {
          var usedThis = String(injectedMembers[key]).match(/_this([\d]+)/gi) || [];
          target[REGENERATE_METHOD](key, '(function REACT_HOT_LOADER_SANDBOX () {\n          var _this  = this; // common babel transpile\n          ' + usedThis.map(function (name) {
            return 'var ' + name + ' = this;';
          }) + '\n\n          return ' + injectedMembers[key] + ';\n          }).call(this)');
        } else {
          target[key] = injectedMembers[key];
        }
      } catch (e) {
        logger.warn('React Hot Loader: Failed to regenerate method ', key, ' of class ', target);
        logger.warn('got error', e);
      }
    });
    target[GENERATION] = currentGeneration;
  }
}

var has = Object.prototype.hasOwnProperty;
var proxies = new WeakMap();

var resetClassProxies = function resetClassProxies() {
  proxies = new WeakMap();
};

var blackListedClassMembers = ['constructor', 'render', 'componentWillMount', 'componentDidMount', 'componentDidCatch', 'componentWillReceiveProps', 'componentWillUnmount', 'hotComponentRender', 'getInitialState', 'getDefaultProps'];
var defaultRenderOptions = {
  componentWillRender: identity,
  componentDidUpdate: function componentDidUpdate(result) {
    return result;
  },
  componentDidRender: function componentDidRender(result) {
    return result;
  }
};

var filteredPrototypeMethods = function filteredPrototypeMethods(Proto) {
  return Object.getOwnPropertyNames(Proto).filter(function (prop) {
    var descriptor = Object.getOwnPropertyDescriptor(Proto, prop);
    return descriptor && prop.indexOf(PREFIX) !== 0 && blackListedClassMembers.indexOf(prop) < 0 && typeof descriptor.value === 'function';
  });
};

var defineClassMember = function defineClassMember(Class, methodName, methodBody) {
  return safeDefineProperty(Class.prototype, methodName, {
    configurable: true,
    writable: true,
    enumerable: false,
    value: methodBody
  });
};

var defineClassMembers = function defineClassMembers(Class, methods) {
  return Object.keys(methods).forEach(function (methodName) {
    return defineClassMember(Class, methodName, methods[methodName]);
  });
};

var setSFPFlag = function setSFPFlag(component, flag) {
  return safeDefineProperty(component, 'isStatelessFunctionalProxy', {
    configurable: false,
    writable: false,
    enumerable: false,
    value: flag
  });
};

var copyMethodDescriptors = function copyMethodDescriptors(target, source) {
  if (source) {
    // it is possible to use `function-double` to construct an ideal clone, but does not make a sence
    var keys = Object.getOwnPropertyNames(source);
    keys.forEach(function (key) {
      return safeDefineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
    });
    safeDefineProperty(target, 'toString', {
      configurable: true,
      writable: false,
      enumerable: false,
      value: function toString() {
        return String(source);
      }
    });
  }

  return target;
};

var knownClassComponents = [];

var forEachKnownClass = function forEachKnownClass(cb) {
  return knownClassComponents.forEach(cb);
};

function createClassProxy(InitialComponent, proxyKey) {
  var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

  var renderOptions = _extends({}, defaultRenderOptions, options);

  var proxyConfig = _extends({}, configuration, options.proxy); // Prevent double wrapping.
  // Given a proxy class, return the existing proxy managing it.


  var existingProxy = proxies.get(InitialComponent);

  if (existingProxy) {
    return existingProxy;
  }

  var CurrentComponent = void 0;
  var savedDescriptors = {};
  var injectedMembers = {};
  var proxyGeneration = 0;
  var classUpdatePostponed = null;
  var instancesCount = 0;
  var isFunctionalComponent = !isReactClass(InitialComponent);
  var lastInstance = null;

  function postConstructionAction() {
    this[GENERATION] = 0;
    lastInstance = this; // is there is an update pending

    if (classUpdatePostponed) {
      var callUpdate = classUpdatePostponed;
      classUpdatePostponed = null;
      callUpdate();
    } // As long we can't override constructor
    // every class shall evolve from a base class


    inject(this, proxyGeneration, injectedMembers);
  }

  function proxiedUpdate() {
    if (this) {
      inject(this, proxyGeneration, injectedMembers);
    }
  }

  function lifeCycleWrapperFactory(wrapperName) {
    var sideEffect = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : identity;
    return copyMethodDescriptors(function wrappedMethod() {
      proxiedUpdate.call(this);
      sideEffect(this);

      for (var _len = arguments.length, rest = Array(_len), _key = 0; _key < _len; _key++) {
        rest[_key] = arguments[_key];
      }

      return !isFunctionalComponent && CurrentComponent.prototype[wrapperName] && CurrentComponent.prototype[wrapperName].apply(this, rest);
    }, InitialComponent.prototype && InitialComponent.prototype[wrapperName]);
  }

  function methodWrapperFactory(wrapperName, realMethod) {
    return copyMethodDescriptors(function wrappedMethod() {
      for (var _len2 = arguments.length, rest = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        rest[_key2] = arguments[_key2];
      }

      return realMethod.apply(this, rest);
    }, realMethod);
  }

  var fakeBasePrototype = function fakeBasePrototype(Proto) {
    return filteredPrototypeMethods(Proto).reduce(function (acc, key) {
      acc[key] = methodWrapperFactory(key, Proto[key]);
      return acc;
    }, {});
  };

  var componentDidMount = lifeCycleWrapperFactory('componentDidMount', function (target) {
    target[PROXY_IS_MOUNTED] = true;
    instancesCount++;
  });
  var componentDidUpdate = lifeCycleWrapperFactory('componentDidUpdate', renderOptions.componentDidUpdate);
  var componentWillUnmount = lifeCycleWrapperFactory('componentWillUnmount', function (target) {
    target[PROXY_IS_MOUNTED] = false;
    instancesCount--;
  });

  function hotComponentRender() {
    // repeating subrender call to keep RENDERED_GENERATION up to date
    renderOptions.componentWillRender(this);
    proxiedUpdate.call(this);
    var result = void 0; // We need to use hasOwnProperty here, as the cached result is a React node
    // and can be null or some other falsy value.

    if (has.call(this, CACHED_RESULT)) {
      result = this[CACHED_RESULT];
      delete this[CACHED_RESULT];
    } else if (isFunctionalComponent) {
      result = CurrentComponent(this.props, this.context);
    } else {
      result = (CurrentComponent.prototype.render || this.render).apply(this, // eslint-disable-next-line prefer-rest-params
      arguments);
    }

    return renderOptions.componentDidRender.call(this, result);
  }

  function hotComponentUpdate() {
    renderOptions.componentWillRender(this);
    proxiedUpdate.call(this);
  }

  function proxiedRender() {
    renderOptions.componentWillRender(this);

    for (var _len3 = arguments.length, args = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
      args[_key3] = arguments[_key3];
    }

    return hotComponentRender.call.apply(hotComponentRender, [this].concat(args));
  }

  var defineProxyMethods = function defineProxyMethods(Proxy) {
    var Base = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    defineClassMembers(Proxy, _extends({}, fakeBasePrototype(Base), proxyConfig.pureRender ? {} : {
      render: proxiedRender
    }, {
      hotComponentRender: hotComponentRender,
      hotComponentUpdate: hotComponentUpdate,
      componentDidMount: componentDidMount,
      componentDidUpdate: componentDidUpdate,
      componentWillUnmount: componentWillUnmount
    }));
  };

  var _ProxyFacade = void 0;

  var ProxyComponent = null;
  var proxy = void 0;

  if (!isFunctionalComponent) {
    // Component
    ProxyComponent = proxyClassCreator(InitialComponent, postConstructionAction);
    defineProxyMethods(ProxyComponent, InitialComponent.prototype);
    knownClassComponents.push(ProxyComponent);
    _ProxyFacade = ProxyComponent;
  } else if (!proxyConfig.allowSFC) {
    proxyConfig.pureRender = false; // SFC Converted to component. Does not support returning precreated instances from render.

    ProxyComponent = proxyClassCreator(React.Component, postConstructionAction);
    defineProxyMethods(ProxyComponent);
    _ProxyFacade = ProxyComponent;
  } else {
    // SFC
    // This function only gets called for the initial mount. The actual
    // rendered component instance will be the return value.
    // eslint-disable-next-line func-names
    _ProxyFacade = function ProxyFacade(props, context) {
      var result = CurrentComponent(props, context); // This is a Relay-style container constructor. We can't do the prototype-
      // style wrapping for this as we do elsewhere, so just we just pass it
      // through as-is.

      if (isReactClassInstance(result)) {
        ProxyComponent = null; // Relay lazily sets statics like getDerivedStateFromProps on initial
        // render in lazy construction, so we need to do the same here.

        transferStaticProps(_ProxyFacade, savedDescriptors, null, CurrentComponent);
        return result;
      } // simple SFC, could continue to be SFC


      if (proxyConfig.pureSFC) {
        if (!CurrentComponent.contextTypes) {
          if (!_ProxyFacade.isStatelessFunctionalProxy) {
            setSFPFlag(_ProxyFacade, true);
          }

          return renderOptions.componentDidRender(result);
        }
      }

      setSFPFlag(_ProxyFacade, false);
      proxyConfig.pureRender = false; // Otherwise, it's a normal functional component. Build the real proxy
      // and use it going forward.

      ProxyComponent = proxyClassCreator(React.Component, postConstructionAction);
      defineProxyMethods(ProxyComponent);
      var determinateResult = new ProxyComponent(props, context); // Cache the initial render result so we don't call the component function
      // a second time for the initial render.

      determinateResult[CACHED_RESULT] = result;
      return determinateResult;
    };
  }

  function get$$1() {
    return _ProxyFacade;
  }

  function getCurrent() {
    return CurrentComponent;
  }

  safeDefineProperty(_ProxyFacade, UNWRAP_PROXY, {
    configurable: false,
    writable: false,
    enumerable: false,
    value: getCurrent
  });
  safeDefineProperty(_ProxyFacade, PROXY_KEY, {
    configurable: false,
    writable: false,
    enumerable: false,
    value: proxyKey
  });
  safeDefineProperty(_ProxyFacade, 'toString', {
    configurable: true,
    writable: false,
    enumerable: false,
    value: function toString() {
      return String(CurrentComponent);
    }
  });

  function update(NextComponent) {
    if (typeof NextComponent !== 'function') {
      throw new Error('Expected a constructor.');
    }

    if (NextComponent === CurrentComponent) {
      return;
    } // Prevent proxy cycles


    var existingProxy = proxies.get(NextComponent);

    if (existingProxy) {
      return;
    }

    isFunctionalComponent = !isReactClass(NextComponent);
    proxies.set(NextComponent, proxy);
    proxyGeneration++; // Save the next constructor so we call it

    var PreviousComponent = CurrentComponent;
    CurrentComponent = NextComponent; // Try to infer displayName

    var displayName = getComponentDisplayName(CurrentComponent);
    safeDefineProperty(_ProxyFacade, 'displayName', {
      configurable: true,
      writable: false,
      enumerable: true,
      value: displayName
    });

    if (ProxyComponent) {
      safeDefineProperty(ProxyComponent, 'name', {
        value: displayName
      });
    }

    savedDescriptors = transferStaticProps(_ProxyFacade, savedDescriptors, PreviousComponent, NextComponent);
    if (isFunctionalComponent || !ProxyComponent) ;else {
      var classHotReplacement = function classHotReplacement() {
        checkLifeCycleMethods(ProxyComponent, NextComponent);

        if (proxyGeneration > 1) {
          filteredPrototypeMethods(ProxyComponent.prototype).forEach(function (methodName) {
            if (!has.call(NextComponent.prototype, methodName)) {
              delete ProxyComponent.prototype[methodName];
            }
          });
        }

        Object.setPrototypeOf(ProxyComponent.prototype, NextComponent.prototype);
        defineProxyMethods(ProxyComponent, NextComponent.prototype);

        if (proxyGeneration > 1) {
          getElementComparisonHook()(ProxyComponent);
          injectedMembers = mergeComponents(ProxyComponent, NextComponent, InitialComponent, lastInstance, injectedMembers);
        }
      }; // Was constructed once


      if (instancesCount > 0) {
        classHotReplacement();
      } else {
        classUpdatePostponed = classHotReplacement;
      }
    }
  }

  update(InitialComponent);

  var dereference = function dereference() {
    proxies.delete(InitialComponent);
    proxies.delete(_ProxyFacade);
    proxies.delete(CurrentComponent);
  };

  proxy = {
    get: get$$1,
    update: update,
    dereference: dereference,
    getCurrent: function getCurrent() {
      return CurrentComponent;
    }
  };
  proxies.set(InitialComponent, proxy);
  proxies.set(_ProxyFacade, proxy);
  safeDefineProperty(proxy, UNWRAP_PROXY, {
    configurable: false,
    writable: false,
    enumerable: false,
    value: getCurrent
  });
  return proxy;
}

var merge = __webpack_require__(/*! lodash.merge */ "./node_modules/lodash.merge/index.js");

var proxiesByID = void 0;
var blackListedProxies = void 0;
var registeredComponents = void 0;
var idsByType = void 0;
var elementCount = 0;
var renderOptions = {};
var componentOptions = void 0;

var generateTypeId = function generateTypeId() {
  return 'auto-' + elementCount++;
};

var getIdByType = function getIdByType(type) {
  return idsByType.get(type);
};

var isProxyType = function isProxyType(type) {
  return type[PROXY_KEY];
};

var getProxyById = function getProxyById(id) {
  return proxiesByID[id];
};

var getProxyByType = function getProxyByType(type) {
  return getProxyById(getIdByType(type));
};

var registerComponent = function registerComponent(type) {
  return registeredComponents.set(type, 1);
};

var isRegisteredComponent = function isRegisteredComponent(type) {
  return registeredComponents.has(type);
};

var setStandInOptions = function setStandInOptions(options) {
  renderOptions = options;
};

var updateFunctionProxyById = function updateFunctionProxyById(id, type, updater) {
  // Remember the ID.
  idsByType.set(type, id);
  var proxy = proxiesByID[id];

  if (!proxy) {
    idsByType.set(type, id);
    proxiesByID[id] = type;
  }

  updater(proxiesByID[id], type);
  return proxiesByID[id];
};

var updateProxyById = function updateProxyById(id, type) {
  var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

  if (!id) {
    return null;
  } // Remember the ID.


  idsByType.set(type, id);

  if (!proxiesByID[id]) {
    proxiesByID[id] = createClassProxy(type, id, merge({}, renderOptions, {
      proxy: componentOptions.get(type) || {}
    }, options));
  } else {
    proxiesByID[id].update(type);
  }

  return proxiesByID[id];
};

var createProxyForType = function createProxyForType(type, options) {
  return getProxyByType(type) || updateProxyById(generateTypeId(), type, options);
};

var isTypeBlacklisted = function isTypeBlacklisted(type) {
  return blackListedProxies.has(type) || isCompositeComponent(type) && (configuration.ignoreSFC && !isReactClass(type) || configuration.ignoreComponents && isReactClass(type));
};

var blacklistByType = function blacklistByType(type) {
  return blackListedProxies.set(type, true);
};

var setComponentOptions = function setComponentOptions(component, options) {
  return componentOptions.set(component, options);
};

var resetProxies = function resetProxies() {
  proxiesByID = {};
  idsByType = new WeakMap();
  blackListedProxies = new WeakMap();
  registeredComponents = new WeakMap();
  componentOptions = new WeakMap();
  resetClassProxies();
};

resetProxies();
var tune = {
  allowSFC: false
};

var preactAdapter = function preactAdapter(instance, resolveType) {
  var oldHandler = instance.options.vnode;
  Object.assign(configuration, tune);

  instance.options.vnode = function (vnode) {
    vnode.nodeName = resolveType(vnode.nodeName);

    if (oldHandler) {
      oldHandler(vnode);
    }
  };
};
/* global document */


var lastError = [];
var overlayStyle = {
  position: 'fixed',
  left: 0,
  top: 0,
  right: 0,
  backgroundColor: 'rgba(255,200,200,0.9)',
  color: '#000',
  fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif',
  margin: 0,
  padding: '16px',
  maxHeight: '50%',
  overflow: 'auto'
};
var inlineErrorStyle = {
  backgroundColor: '#FEE'
};
var listStyle = {};

var EmptyErrorPlaceholder = function EmptyErrorPlaceholder() {
  return React__default.createElement('span', {
    style: inlineErrorStyle,
    role: 'img',
    'aria-label': 'Rect-Hot-Loader Error'
  }, '\u269B\uFE0F\uD83D\uDD25\uD83E\uDD15');
};

var mapError = function mapError(_ref) {
  var error = _ref.error,
      errorInfo = _ref.errorInfo;
  return React__default.createElement('div', null, React__default.createElement('p', {
    style: {
      color: 'red'
    }
  }, error.toString ? error.toString() : error.message || 'undefined error'), errorInfo && errorInfo.componentStack ? React__default.createElement('div', null, React__default.createElement('div', null, 'Stack trace:'), React__default.createElement('ul', {
    style: {
      color: 'red',
      marginTop: '10px'
    }
  }, error.stack.split('\n').slice(1, 2).map(function (line, i) {
    return React__default.createElement('li', {
      key: String(i)
    }, line);
  }), errorInfo.componentStack.split('\n').filter(Boolean).map(function (line, i) {
    return React__default.createElement('li', {
      key: String(i)
    }, line);
  }))) : error.stack && React__default.createElement('div', null, React__default.createElement('div', null, 'Stack trace:'), React__default.createElement('ul', {
    style: {
      color: 'red',
      marginTop: '10px'
    }
  }, error.stack.split('\n').map(function (line, i) {
    return React__default.createElement('li', {
      key: String(i)
    }, line);
  }))));
};

var ErrorOverlay = function (_React$Component) {
  inherits(ErrorOverlay, _React$Component);

  function ErrorOverlay() {
    var _temp, _this, _ret;

    classCallCheck(this, ErrorOverlay);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = possibleConstructorReturn(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.state = {
      visible: true
    }, _this.toggle = function () {
      return _this.setState({
        visible: !_this.state.visible
      });
    }, _temp), possibleConstructorReturn(_this, _ret);
  }

  ErrorOverlay.prototype.render = function render() {
    var errors = this.props.errors;

    if (!errors.length) {
      return null;
    }

    var visible = this.state.visible;
    return React__default.createElement('div', {
      style: overlayStyle
    }, React__default.createElement('h2', {
      style: {
        margin: 0
      }
    }, '\u269B\uFE0F\uD83D\uDD25\uD83D\uDE2D: hot update was not successful', ' ', React__default.createElement('button', {
      onClick: this.toggle
    }, visible ? 'collapse' : 'expand')), visible && React__default.createElement('ul', {
      style: listStyle
    }, errors.map(function (err, i) {
      return React__default.createElement('li', {
        key: i
      }, mapError(err));
    })));
  };

  return ErrorOverlay;
}(React__default.Component);

var initErrorOverlay = function initErrorOverlay() {
  if (typeof document === 'undefined' || !document.body) {
    return;
  }

  var div = document.querySelector('.react-hot-loader-error-overlay');

  if (!div) {
    div = document.createElement('div');
    div.className = 'react-hot-loader-error-overlay';
    document.body.appendChild(div);
  }

  if (lastError.length) {
    var Overlay = configuration.ErrorOverlay || ErrorOverlay;
    ReactDOM.render(React__default.createElement(Overlay, {
      errors: lastError
    }), div);
  } else {
    div.parentNode.removeChild(div);
  }
};

var clearExceptions = function clearExceptions() {
  if (lastError.length) {
    lastError = [];
    initErrorOverlay();
  }
};

var logException = function logException(error, errorInfo) {
  lastError.push({
    error: error,
    errorInfo: errorInfo
  });
  initErrorOverlay();
};

var AppContainer = function (_React$Component) {
  inherits(AppContainer, _React$Component);

  function AppContainer() {
    var _temp, _this, _ret;

    classCallCheck(this, AppContainer);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = possibleConstructorReturn(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.state = {
      error: null,
      errorInfo: null,
      // eslint-disable-next-line react/no-unused-state
      generation: 0
    }, _temp), possibleConstructorReturn(_this, _ret);
  }

  AppContainer.getDerivedStateFromProps = function getDerivedStateFromProps(nextProps, prevState) {
    if (prevState.generation !== get$1()) {
      // Hot reload is happening.
      return {
        error: null,
        generation: get$1()
      };
    }

    return null;
  };

  AppContainer.prototype.shouldComponentUpdate = function shouldComponentUpdate(prevProps, prevState) {
    // Don't update the component if the state had an error and still has one.
    // This allows to break an infinite loop of error -> render -> error -> render
    // https://github.com/gaearon/react-hot-loader/issues/696
    if (prevState.error && this.state.error) {
      return false;
    }

    return true;
  };

  AppContainer.prototype.componentDidCatch = function componentDidCatch(error, errorInfo) {
    logger.error(error);
    var _props$errorReporter = this.props.errorReporter,
        errorReporter = _props$errorReporter === undefined ? configuration.errorReporter : _props$errorReporter;

    if (!errorReporter) {
      logException(error, errorInfo);
    }

    this.setState({
      error: error,
      errorInfo: errorInfo
    });
  };

  AppContainer.prototype.render = function render() {
    var _state = this.state,
        error = _state.error,
        errorInfo = _state.errorInfo;
    var _props$errorReporter2 = this.props.errorReporter,
        ErrorReporter = _props$errorReporter2 === undefined ? configuration.errorReporter || EmptyErrorPlaceholder : _props$errorReporter2;

    if (error && this.props.errorBoundary) {
      return React__default.createElement(ErrorReporter, {
        error: error,
        errorInfo: errorInfo
      });
    }

    if (this.hotComponentUpdate) {
      this.hotComponentUpdate();
    } else {
      throw new Error('React-Hot-Loader: AppContainer should be patched');
    }

    return React__default.Children.only(this.props.children);
  };

  return AppContainer;
}(React__default.Component);

AppContainer.propTypes = {
  children: function children(props) {
    if (React__default.Children.count(props.children) !== 1) {
      return new Error('Invalid prop "children" supplied to AppContainer. ' + 'Expected a single React element with your app’s root component, e.g. <App />.');
    }

    return undefined;
  },
  errorReporter: PropTypes.oneOfType([PropTypes.node, PropTypes.func]),
  errorBoundary: PropTypes.bool
};
AppContainer.defaultProps = {
  errorBoundary: true //  trying first react-lifecycles-compat.polyfill, then trying react-lifecycles-compat, which could be .default

};
var realPolyfill = defaultPolyfill.polyfill || defaultPolyfill__default;
realPolyfill(AppContainer);

var shouldNotPatchComponent = function shouldNotPatchComponent(type) {
  return isTypeBlacklisted(type);
};

function resolveType(type) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  if (isLazyType({
    type: type
  }) || isMemoType({
    type: type
  }) || isForwardType({
    type: type
  })) {
    return getProxyByType(type) || type;
  }

  if (!isCompositeComponent(type) || isProxyType(type)) {
    return type;
  }

  var existingProxy = getProxyByType(type);

  if (shouldNotPatchComponent(type)) {
    return existingProxy ? existingProxy.getCurrent() : type;
  }

  if (!existingProxy && configuration.onComponentCreate) {
    configuration.onComponentCreate(type, getComponentDisplayName(type));
    if (shouldNotPatchComponent(type)) return type;
  }

  var proxy = internalConfiguration.disableProxyCreation ? existingProxy : createProxyForType(type, options);
  return proxy ? proxy.get() : type;
}

var lazyConstructor = '_ctor';

var updateLazy = function updateLazy(target, type) {
  var ctor = type[lazyConstructor];

  if (target[lazyConstructor] !== type[lazyConstructor]) {
    ctor();
  }

  if (!target[lazyConstructor].isPatchedByReactHotLoader) {
    target[lazyConstructor] = function () {
      return ctor().then(function (m) {
        var C = resolveType(m.default); // chunks has been updated - new hot loader process is taking a place

        enterHotUpdate();
        return {
          default: function _default(props) {
            return React__default.createElement(AppContainer, null, React__default.createElement(C, props));
          }
        };
      });
    };

    target[lazyConstructor].isPatchedByReactHotLoader = true;
  }
};

var updateMemo = function updateMemo(target, _ref) {
  var type = _ref.type;
  target.type = resolveType(type);
};

var updateForward = function updateForward(target, _ref2) {
  var render = _ref2.render;
  target.render = render;
}; // some `empty` names, React can autoset display name to...


var UNDEFINED_NAMES = {
  Unknown: true,
  Component: true
};

var areNamesEqual = function areNamesEqual(a, b) {
  return a === b || UNDEFINED_NAMES[a] && UNDEFINED_NAMES[b];
};

var isFunctional = function isFunctional(fn) {
  return typeof fn === 'function';
};

var getTypeOf = function getTypeOf(type) {
  if (isReactClass(type)) return 'ReactComponent';
  if (isFunctional(type)) return 'StatelessFunctional';
  return 'Fragment'; // ?
};

var haveTextSimilarity = function haveTextSimilarity(a, b) {
  return (// equal or slight changed
    a === b || levenshtein.get(a, b) < a.length * 0.2
  );
};

var getBaseProto = function getBaseProto(source) {
  return source.prototype.hotComponentRender ? Object.getPrototypeOf(source.prototype) : source.prototype;
};

var equalClasses = function equalClasses(a, b) {
  var prototypeA = getBaseProto(a);
  var prototypeB = getBaseProto(b);
  var hits = 0;
  var misses = 0;
  var comparisons = 0;
  Object.getOwnPropertyNames(prototypeA).forEach(function (key) {
    var descriptorA = Object.getOwnPropertyDescriptor(prototypeA, key);
    var valueA = descriptorA && (descriptorA.value || descriptorA.get || descriptorA.set);
    var descriptorB = Object.getOwnPropertyDescriptor(prototypeB, key);
    var valueB = descriptorB && (descriptorB.value || descriptorB.get || descriptorB.set);

    if (typeof valueA === 'function' && key !== 'constructor') {
      comparisons++;

      if (haveTextSimilarity(String(valueA), String(valueB))) {
        hits++;
      } else {
        misses++;

        if (key === 'render') {
          misses++;
        }
      }
    }
  }); // allow to add or remove one function

  return hits > 0 && misses <= 1 || comparisons === 0;
};

var areSwappable = function areSwappable(a, b) {
  // both are registered components and have the same name
  if (getIdByType(b) && getIdByType(a) === getIdByType(b)) {
    return true;
  }

  if (getTypeOf(a) !== getTypeOf(b)) {
    return false;
  }

  if (isReactClass(a)) {
    return areNamesEqual(getComponentDisplayName(a), getComponentDisplayName(b)) && equalClasses(a, b);
  }

  if (isFunctional(a)) {
    var nameA = getComponentDisplayName(a);
    return areNamesEqual(nameA, getComponentDisplayName(b)) || nameA !== 'Component' && haveTextSimilarity(String(a), String(b));
  }

  return false;
};

var getInnerComponentType = function getInnerComponentType(component) {
  var unwrapper = component[UNWRAP_PROXY];
  return unwrapper ? unwrapper() : component;
};

var compareComponents = function compareComponents(oldType, newType, setNewType, baseType) {
  var defaultResult = oldType === newType;

  if (oldType && !newType || !oldType && newType) {
    return false;
  }

  if (isRegisteredComponent(oldType) || isRegisteredComponent(newType)) {
    if (resolveType(oldType) !== resolveType(newType)) {
      return false;
    }

    defaultResult = true;
  }

  if (isForwardType({
    type: oldType
  }) && isForwardType({
    type: newType
  })) {
    if (oldType.render === newType.render || areSwappable(oldType.render, newType.render)) {
      setNewType(newType);
      return true;
    }

    return defaultResult;
  }

  if (isMemoType({
    type: oldType
  }) && isMemoType({
    type: newType
  })) {
    if (oldType.type === newType.type || areSwappable(oldType.type, newType.type)) {
      if (baseType) {
        // memo form different fibers, why?
        if (oldType === baseType) {
          setNewType(newType);
        } else {
          setNewType(newType.type);
        }
      } else {
        logger.warn('Please update hot-loader/react-dom');

        if (isReactClass(newType.type)) {
          setNewType(newType);
        } else {
          setNewType(newType.type);
        }
      }

      return true;
    }

    return defaultResult;
  }

  if (newType !== oldType && areSwappable(newType, oldType)) {
    var unwrapFactory = newType[UNWRAP_PROXY];
    var oldProxy = unwrapFactory && getProxyByType(unwrapFactory());

    if (oldProxy) {
      oldProxy.dereference();
      updateProxyById(oldType[PROXY_KEY] || getIdByType(oldType), getInnerComponentType(newType));
    } else {
      setNewType(newType);
    }

    return true;
  }

  return defaultResult;
};

var knownPairs = new WeakMap();
var emptyMap = new WeakMap();

var hotComponentCompare = function hotComponentCompare(oldType, newType, setNewType, baseType) {
  var hotActive = hotComparisonOpen();
  var result = oldType === newType;

  if (!isReloadableComponent(oldType) || !isReloadableComponent(newType)) {
    return result;
  } // comparison should be active only if hot update window
  // or it would merge components it shall not


  if (hotActive) {
    result = compareComponents(oldType, newType, setNewType, baseType);

    var _pair = knownPairs.get(oldType) || new WeakMap();

    _pair.set(newType, result);

    knownPairs.set(oldType, _pair);
    return result;
  }

  if (result) {
    return result;
  }

  var pair = knownPairs.get(oldType) || emptyMap;
  return pair.get(newType) || false;
};
/* eslint-disable no-use-before-define */


var forceSimpleSFC = {
  proxy: {
    pureSFC: true
  }
};
var reactHotLoader = {
  IS_REACT_MERGE_ENABLED: false,
  register: function register(type, uniqueLocalName, fileName) {
    var options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
    var id = fileName + '#' + uniqueLocalName;

    if (isCompositeComponent(type) && typeof uniqueLocalName === 'string' && uniqueLocalName && typeof fileName === 'string' && fileName) {
      var proxy = getProxyById(id);

      if (proxy && proxy.getCurrent() !== type) {
        // component got replaced. Need to reconcile
        increment();

        if (!reactHotLoader.IS_REACT_MERGE_ENABLED) {
          if (isTypeBlacklisted(type) || isTypeBlacklisted(proxy.getCurrent())) {
            logger.error('React-hot-loader: Cold component', uniqueLocalName, 'at', fileName, 'has been updated');
          }
        }
      }

      if (configuration.onComponentRegister) {
        configuration.onComponentRegister(type, uniqueLocalName, fileName);
      }

      if (configuration.onComponentCreate) {
        configuration.onComponentCreate(type, getComponentDisplayName(type));
      }

      registerComponent(updateProxyById(id, type, options).get(), 2);
      registerComponent(type);
    }

    if (isLazyType({
      type: type
    })) {
      updateFunctionProxyById(id, type, updateLazy);
      increment();
    }

    if (isForwardType({
      type: type
    })) {
      updateFunctionProxyById(id, type, updateForward);
      increment();
    }

    if (isMemoType({
      type: type
    })) {
      reactHotLoader.register(type.type, uniqueLocalName + ':memo', fileName, forceSimpleSFC);
      updateFunctionProxyById(id, type, updateMemo);
      increment();
    }
  },
  reset: function reset() {
    resetProxies();
  },
  preact: function preact(instance) {
    preactAdapter(instance, resolveType);
  },
  resolveType: function resolveType$$1(type) {
    return resolveType(type);
  },
  patch: function patch(React$$1, ReactDOM$$1) {
    /* eslint-disable no-console */
    if (ReactDOM$$1 && ReactDOM$$1.setHotElementComparator) {
      ReactDOM$$1.setHotElementComparator(hotComponentCompare);
      configuration.disableHotRenderer = configuration.disableHotRendererWhenInjected;
      configuration.ignoreSFC = configuration.ignoreSFCWhenInjected;
      reactHotLoader.IS_REACT_MERGE_ENABLED = true;
      console.info('React-Hot-Loader: react-🔥-dom patch detected. You may use all the features.');
    } // Actually everything works...
    // console.warn(
    //   'React-Hot-Loader: react-🔥-dom patch is not detected. React 16.6+ features may not work.',
    // )

    /* eslint-enable */


    if (!React$$1.createElement.isPatchedByReactHotLoader) {
      var originalCreateElement = React$$1.createElement; // Trick React into rendering a proxy so that
      // its state is preserved when the class changes.
      // This will update the proxy if it's for a known type.

      React$$1.createElement = function (type) {
        for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
          args[_key - 1] = arguments[_key];
        }

        return originalCreateElement.apply(undefined, [resolveType(type)].concat(args));
      };

      React$$1.createElement.isPatchedByReactHotLoader = true;
    }

    if (!React$$1.cloneElement.isPatchedByReactHotLoader) {
      var originalCloneElement = React$$1.cloneElement;

      React$$1.cloneElement = function (element) {
        for (var _len2 = arguments.length, args = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
          args[_key2 - 1] = arguments[_key2];
        }

        var newType = element.type && resolveType(element.type);

        if (newType && newType !== element.type) {
          return originalCloneElement.apply(undefined, [_extends({}, element, {
            type: newType
          })].concat(args));
        }

        return originalCloneElement.apply(undefined, [element].concat(args));
      };

      React$$1.cloneElement.isPatchedByReactHotLoader = true;
    }

    if (!React$$1.createFactory.isPatchedByReactHotLoader) {
      // Patch React.createFactory to use patched createElement
      // because the original implementation uses the internal,
      // unpatched ReactElement.createElement
      React$$1.createFactory = function (type) {
        var factory = React$$1.createElement.bind(null, type);
        factory.type = type;
        return factory;
      };

      React$$1.createFactory.isPatchedByReactHotLoader = true;
    }

    if (!React$$1.Children.only.isPatchedByReactHotLoader) {
      var originalChildrenOnly = React$$1.Children.only; // Use the same trick as React.createElement

      React$$1.Children.only = function (children) {
        return originalChildrenOnly(_extends({}, children, {
          type: resolveType(children.type)
        }));
      };

      React$$1.Children.only.isPatchedByReactHotLoader = true;
    }

    reactHotLoader.reset();
  }
};
/* eslint-disable no-underscore-dangle */

function pushStack(stack, node) {
  stack.type = node.type;
  stack.children = [];
  stack.instance = typeof node.type === 'function' ? node.stateNode : stack;
  stack.fiber = node;

  if (!stack.instance) {
    stack.instance = {
      SFC_fake: stack.type,
      props: {},
      render: function render() {
        return stack.type(stack.instance.props);
      }
    };
  }
}

function hydrateFiberStack(node, stack) {
  pushStack(stack, node);

  if (node.child) {
    var child = node.child;

    do {
      var childStack = {};
      hydrateFiberStack(child, childStack);
      stack.children.push(childStack);
      child = child.sibling;
    } while (child);
  }
}
/* eslint-disable no-underscore-dangle */


function pushState(stack, type, instance) {
  stack.type = type;
  stack.children = [];
  stack.instance = instance || stack;

  if (typeof type === 'function' && type.isStatelessFunctionalProxy) {
    // In React 15 SFC is wrapped by component. We have to detect our proxies and change the way it works
    stack.instance = {
      SFC_fake: type,
      props: {},
      render: function render() {
        return type(stack.instance.props);
      }
    };
  }
}

function hydrateLegacyStack(node, stack) {
  if (node._currentElement) {
    pushState(stack, node._currentElement.type, node._instance || stack);
  }

  if (node._renderedComponent) {
    var childStack = {};
    hydrateLegacyStack(node._renderedComponent, childStack);
    stack.children.push(childStack);
  } else if (node._renderedChildren) {
    Object.keys(node._renderedChildren).forEach(function (key) {
      var childStack = {};
      hydrateLegacyStack(node._renderedChildren[key], childStack);
      stack.children.push(childStack);
    });
  }
}
/* eslint-disable no-underscore-dangle */


function getReactStack(instance) {
  var rootNode = getInternalInstance(instance);
  var stack = {};

  if (rootNode) {
    // React stack
    var isFiber = typeof rootNode.tag === 'number';

    if (isFiber) {
      hydrateFiberStack(rootNode, stack);
    } else {
      hydrateLegacyStack(rootNode, stack);
    }
  }

  return stack;
}

var markUpdate = function markUpdate(_ref) {
  var fiber = _ref.fiber;

  if (!fiber) {
    return;
  }

  fiber.expirationTime = 1;

  if (fiber.alternate) {
    fiber.alternate.expirationTime = 1;
  }

  fiber.memoizedProps = Object.assign({
    cacheBusterProp: true
  }, fiber.memoizedProps);
};

var deepMapUpdate = function deepMapUpdate(stack) {
  markUpdate(stack);

  if (stack.children) {
    stack.children.forEach(deepMapUpdate);
  }
};

var renderStack = [];

var stackReport = function stackReport() {
  var rev = renderStack.slice().reverse();
  logger.warn('in', rev[0].name, rev);
};

var emptyMap$1 = new Map();

var stackContext = function stackContext() {
  return (renderStack[renderStack.length - 1] || {}).context || emptyMap$1;
};

var shouldUseRenderMethod = function shouldUseRenderMethod(fn) {
  return fn && (isReactClassInstance(fn) || fn.SFC_fake);
};

var getElementType = function getElementType(child) {
  return child.type[UNWRAP_PROXY] ? child.type[UNWRAP_PROXY]() : child.type;
};

var filterNullArray = function filterNullArray(a) {
  if (!a) return [];
  return a.filter(function (x) {
    return !!x;
  });
};

var unflatten = function unflatten(a) {
  return a.reduce(function (acc, a) {
    if (Array.isArray(a)) {
      acc.push.apply(acc, unflatten(a));
    } else {
      acc.push(a);
    }

    return acc;
  }, []);
};

var isArray = function isArray(fn) {
  return Array.isArray(fn);
};

var asArray = function asArray(a) {
  return isArray(a) ? a : [a];
};

var render = function render(component) {
  if (!component) {
    return [];
  }

  if (component.hotComponentUpdate) {
    component.hotComponentUpdate();
  }

  if (shouldUseRenderMethod(component)) {
    // not calling real render method to prevent call recursion.
    // stateless components does not have hotComponentRender
    return component.hotComponentRender ? component.hotComponentRender() : component.render();
  }

  if (isForwardType(component)) {
    return component.type.render(component.props, null);
  }

  if (isArray(component)) {
    return component.map(render);
  }

  if (component.children) {
    return component.children;
  }

  return [];
};

var NO_CHILDREN = {
  children: []
};

var mapChildren = function mapChildren(children, instances) {
  return {
    children: children.filter(function (c) {
      return c;
    }).map(function (child, index) {
      if ((typeof child === 'undefined' ? 'undefined' : _typeof(child)) !== 'object' || child.isMerged) {
        return child;
      }

      var instanceLine = instances[index] || {};
      var oldChildren = asArray(instanceLine.children || []);

      if (Array.isArray(child)) {
        return _extends({
          type: null
        }, mapChildren(child, oldChildren));
      }

      var newChildren = asArray(child.props && child.props.children || child.children || []);
      var nextChildren = child.type !== 'function' && oldChildren.length && mapChildren(newChildren, oldChildren);
      return _extends({
        nextProps: child.props,
        isMerged: true
      }, instanceLine, nextChildren || {}, {
        type: child.type
      });
    })
  };
};

var mergeInject = function mergeInject(a, b, instance) {
  if (a && !Array.isArray(a)) {
    return mergeInject([a], b);
  }

  if (b && !Array.isArray(b)) {
    return mergeInject(a, [b]);
  }

  if (!a || !b) {
    return NO_CHILDREN;
  }

  if (a.length === b.length) {
    return mapChildren(a, b);
  } // in some cases (no confidence here) B could contain A except null children
  // in some cases - could not.
  // this depends on React version and the way you build component.


  var nonNullA = filterNullArray(a);

  if (nonNullA.length === b.length) {
    return mapChildren(nonNullA, b);
  }

  var flatA = unflatten(nonNullA);
  var flatB = unflatten(b);

  if (flatA.length === flatB.length) {
    return mapChildren(flatA, flatB);
  }

  if (flatB.length === 0 && flatA.length === 1 && _typeof(flatA[0]) !== 'object') ;else {
    logger.warn('React-hot-loader: unable to merge ', a, 'and children of ', instance);
    stackReport();
  }
  return NO_CHILDREN;
};

var transformFlowNode = function transformFlowNode(flow) {
  return flow.reduce(function (acc, node) {
    if (node && isFragmentNode(node)) {
      if (node.props && node.props.children) {
        return [].concat(acc, filterNullArray(asArray(node.props.children)));
      }

      if (node.children) {
        return [].concat(acc, filterNullArray(asArray(node.children)));
      }
    }

    return [].concat(acc, [node]);
  }, []);
};

var scheduledUpdates = [];
var scheduledUpdate = 0;

var flushScheduledUpdates = function flushScheduledUpdates() {
  var instances = scheduledUpdates;
  scheduledUpdates = [];
  scheduledUpdate = 0;
  instances.forEach(function (instance) {
    return instance[PROXY_IS_MOUNTED] && updateInstance(instance);
  });
};

var unscheduleUpdate = function unscheduleUpdate(instance) {
  scheduledUpdates = scheduledUpdates.filter(function (inst) {
    return inst !== instance;
  });
};

var scheduleInstanceUpdate = function scheduleInstanceUpdate(instance) {
  scheduledUpdates.push(instance);

  if (!scheduledUpdate) {
    scheduledUpdate = setTimeout(flushScheduledUpdates, 4);
  }
};

var hotReplacementRender = function hotReplacementRender(instance, stack) {
  if (isReactClassInstance(instance)) {
    var type = getElementType(stack);
    renderStack.push({
      name: getComponentDisplayName(type),
      type: type,
      props: stack.instance.props,
      context: stackContext()
    });
  }

  try {
    var flow = transformFlowNode(filterNullArray(asArray(render(instance))));
    var children = stack.children;
    flow.forEach(function (child, index) {
      var stackChild = children[index];

      var next = function next(instance) {
        // copy over props as long new component may be hidden inside them
        // child does not have all props, as long some of them can be calculated on componentMount.
        var realProps = instance.props;

        var nextProps = _extends({}, realProps, child.nextProps || {}, child.props || {});

        if (isReactClassInstance(instance) && instance.componentWillUpdate) {
          // Force-refresh component (bypass redux renderedComponent)
          instance.componentWillUpdate(_extends({}, realProps), instance.state);
        }

        instance.props = nextProps;
        hotReplacementRender(instance, stackChild);
        instance.props = realProps;
      }; // text node


      if ((typeof child === 'undefined' ? 'undefined' : _typeof(child)) !== 'object' || !stackChild || !stackChild.instance) {
        if (stackChild && stackChild.children && stackChild.children.length) {
          logger.error('React-hot-loader: reconciliation failed', 'could not dive into [', child, '] while some elements are still present in the tree.');
          stackReport();
        }

        return;
      }

      if (_typeof(child.type) !== _typeof(stackChild.type)) {
        // Portals could generate undefined !== null
        if (child.type && stackChild.type) {
          logger.warn('React-hot-loader: got ', child.type, 'instead of', stackChild.type);
          stackReport();
        }

        return;
      }

      if (isMemoType(child) || isLazyType(child)) {
        // force update memo children
        if (stackChild.children && stackChild.children[0]) {
          scheduleInstanceUpdate(stackChild.children[0].instance);
        }
      }

      if (isForwardType(child)) {
        next(stackChild.instance);
      } else if (isContextConsumer(child)) {
        try {
          next({
            children: (child.props ? child.props.children : child.children[0])(stackContext().get(getContextProvider(child.type)) || child.type[CONTEXT_CURRENT_VALUE])
          });
        } catch (e) {// do nothing, yet
        }
      } else if (typeof child.type !== 'function') {
        // React
        var childName = child.type ? getComponentDisplayName(child.type) : 'empty';
        var extraContext = stackContext();

        if (isContextProvider(child)) {
          extraContext = new Map(extraContext);
          extraContext.set(getContextProvider(child.type), _extends({}, child.nextProps || {}, child.props || {}).value);
          childName = 'ContextProvider';
        }

        renderStack.push({
          name: childName,
          type: child.type,
          props: stack.instance.props,
          context: extraContext
        });
        next( // move types from render to the instances of hydrated tree
        mergeInject(transformFlowNode(asArray(child.props ? child.props.children : child.children)), stackChild.instance.children, stackChild.instance));
        renderStack.pop();
      } else {
        if (child.type === stackChild.type) {
          next(stackChild.instance);
        } else {
          // unwrap proxy
          var childType = getElementType(child);

          if (!stackChild.type[PROXY_KEY]) {
            if (!reactHotLoader.IS_REACT_MERGE_ENABLED) {
              if (isTypeBlacklisted(stackChild.type)) {
                logger.warn('React-hot-loader: cold element got updated ', stackChild.type);
              }
            }
          }

          if (isRegisteredComponent(childType) || isRegisteredComponent(stackChild.type)) ;else if (areSwappable(childType, stackChild.type)) {
            // they are both registered, or have equal code/displayname/signature
            // update proxy using internal PROXY_KEY
            updateProxyById(stackChild.type[PROXY_KEY] || getIdByType(stackChild.type), childType);
            next(stackChild.instance);
          } else {
            logger.warn('React-hot-loader: a ' + getComponentDisplayName(childType) + ' was found where a ' + getComponentDisplayName(stackChild) + ' was expected.\n          ' + childType);
            stackReport();
          }
        }

        scheduleInstanceUpdate(stackChild.instance);
      }
    });
  } catch (e) {
    if (e.then) ;else {
      logger.warn('React-hot-loader: run time error during reconciliation', e);
    }
  }

  if (isReactClassInstance(instance)) {
    renderStack.pop();
  }
};

var hotReplacementRender$1 = function (instance, stack) {
  if (configuration.disableHotRenderer) {
    return;
  }

  try {
    // disable reconciler to prevent upcoming components from proxying.
    internalConfiguration.disableProxyCreation = true;
    renderStack = [];
    hotReplacementRender(instance, stack);
  } catch (e) {
    logger.warn('React-hot-loader: reconcilation failed due to error', e);
  } finally {
    internalConfiguration.disableProxyCreation = false;
  }
};

var reconcileHotReplacement = function reconcileHotReplacement(ReactInstance) {
  var stack = getReactStack(ReactInstance);
  hotReplacementRender$1(ReactInstance, stack);
  deepMapUpdate(stack);
};

var RENDERED_GENERATION = 'REACT_HOT_LOADER_RENDERED_GENERATION';

var renderReconciler = function renderReconciler(target, force) {
  // we are not inside parent reconcilation
  var currentGeneration = get$1();
  var componentGeneration = target[RENDERED_GENERATION];
  target[RENDERED_GENERATION] = currentGeneration;

  if (!internalConfiguration.disableProxyCreation) {
    if ((componentGeneration || force) && componentGeneration !== currentGeneration) {
      enterHotUpdate();
      reconcileHotReplacement(target);
      return true;
    }
  }

  return false;
};

function asyncReconciledRender(target) {
  renderReconciler(target, false);
}

function proxyWrapper(element) {
  // post wrap on post render
  if (!internalConfiguration.disableProxyCreation) {
    unscheduleUpdate(this);
  }

  if (!element) {
    return element;
  }

  if (Array.isArray(element)) {
    return element.map(proxyWrapper);
  }

  if (typeof element.type === 'function') {
    var proxy = getProxyByType(element.type);

    if (proxy) {
      return _extends({}, element, {
        type: proxy.get()
      });
    }
  }

  return element;
}

var ERROR_STATE = 'react-hot-loader-catched-error';
var OLD_RENDER = 'react-hot-loader-original-render';

function componentDidCatch(error, errorInfo) {
  this[ERROR_STATE] = {
    error: error,
    errorInfo: errorInfo,
    generation: get$1()
  };
  Object.getPrototypeOf(this)[ERROR_STATE] = this[ERROR_STATE];

  if (!configuration.errorReporter) {
    logException({
      error: error,
      errorInfo: errorInfo
    });
  }

  this.forceUpdate();
}

function componentRender() {
  var _ref = this[ERROR_STATE] || {},
      error = _ref.error,
      errorInfo = _ref.errorInfo,
      generation = _ref.generation;

  if (error && generation === get$1()) {
    return React__default.createElement(configuration.errorReporter || EmptyErrorPlaceholder, {
      error: error,
      errorInfo: errorInfo
    });
  }

  try {
    return this[OLD_RENDER].render.call(this);
  } catch (renderError) {
    this[ERROR_STATE] = {
      error: renderError,
      generation: get$1()
    };

    if (!configuration.errorReporter) {
      logException(renderError);
    }

    return componentRender.call(this);
  }
}

setComparisonHooks(function () {
  return {};
}, function (_ref2) {
  var prototype = _ref2.prototype;

  if (!prototype[OLD_RENDER]) {
    var renderDescriptior = Object.getOwnPropertyDescriptor(prototype, 'render');
    prototype[OLD_RENDER] = {
      descriptor: renderDescriptior ? renderDescriptior.value : undefined,
      render: prototype.render
    };
    prototype.componentDidCatch = componentDidCatch;
    prototype.render = componentRender;
  }
}, function () {
  return forEachKnownClass(function (_ref3) {
    var prototype = _ref3.prototype;

    if (prototype[OLD_RENDER]) {
      var _ref4 = prototype[ERROR_STATE] || {},
          generation = _ref4.generation;

      if (generation === get$1()) ;else {
        delete prototype.componentDidCatch;

        if (!prototype[OLD_RENDER].descriptor) {
          delete prototype.render;
        } else {
          prototype.render = prototype[OLD_RENDER].descriptor;
        }

        delete prototype[OLD_RENDER];
      }
    }
  });
});
setStandInOptions({
  componentWillRender: asyncReconciledRender,
  componentDidRender: proxyWrapper,
  componentDidUpdate: flushScheduledUpdates
});
var openedModules = {};
var lastModuleOpened = '';

var getLastModuleOpened = function getLastModuleOpened() {
  return lastModuleOpened;
};

var hotModules = {};

var createHotModule = function createHotModule() {
  return {
    instances: [],
    updateTimeout: 0
  };
};

var hotModule = function hotModule(moduleId) {
  if (!hotModules[moduleId]) {
    hotModules[moduleId] = createHotModule();
  }

  return hotModules[moduleId];
};

var isOpened = function isOpened(sourceModule) {
  return sourceModule && !!openedModules[sourceModule.id];
};

var enter = function enter(sourceModule) {
  if (sourceModule && sourceModule.id) {
    lastModuleOpened = sourceModule.id;
    openedModules[sourceModule.id] = true;
  } else {
    logger.warn('React-hot-loader: no `module` variable found. Did you shadow a system variable?');
  }
};

var leave = function leave(sourceModule) {
  if (sourceModule && sourceModule.id) {
    delete openedModules[sourceModule.id];
  }
};
/* eslint-disable camelcase, no-undef */


var requireIndirect =  true ? __webpack_require__ : undefined;
/* eslint-enable */

var chargeFailbackTimer = function chargeFailbackTimer(id) {
  return setTimeout(function () {
    var error = 'hot update failed for module "' + id + '". Last file processed: "' + getLastModuleOpened() + '".';
    logger.error(error);
    logException({
      toString: function toString() {
        return error;
      }
    }); // 100 ms more "code" tolerant that 0, and would catch error in any case
  }, 100);
};

var clearFailbackTimer = function clearFailbackTimer(timerId) {
  return clearTimeout(timerId);
};

var createHoc = function createHoc(SourceComponent, TargetComponent) {
  hoistNonReactStatic(TargetComponent, SourceComponent);
  TargetComponent.displayName = 'HotExported' + getComponentDisplayName(SourceComponent);
  return TargetComponent;
};

var makeHotExport = function makeHotExport(sourceModule) {
  var updateInstances = function updateInstances(possibleError) {
    if (possibleError && possibleError instanceof Error) {
      console.error(possibleError);
      return;
    }

    var module = hotModule(sourceModule.id);
    clearTimeout(module.updateTimeout);
    module.updateTimeout = setTimeout(function () {
      try {
        requireIndirect(sourceModule.id);
      } catch (e) {
        console.error('React-Hot-Loader: error detected while loading', sourceModule.id);
        console.error(e);
      }

      module.instances.forEach(function (inst) {
        return inst.forceUpdate();
      });
    });
  };

  if (sourceModule.hot) {
    // Mark as self-accepted for Webpack (callback is an Error Handler)
    // Update instances for Parcel (callback is an Accept Handler)
    sourceModule.hot.accept(updateInstances); // Webpack way

    if (sourceModule.hot.addStatusHandler) {
      if (sourceModule.hot.status() === 'idle') {
        sourceModule.hot.addStatusHandler(function (status) {
          if (status === 'apply') {
            clearExceptions();
            updateInstances();
          }
        });
      }
    }
  }
};

var hot = function hot(sourceModule) {
  if (!sourceModule || !sourceModule.id) {
    // this is fatal
    throw new Error('React-hot-loader: `hot` could not find the `id` property in the `module` you have provided');
  }

  var moduleId = sourceModule.id;
  var module = hotModule(moduleId);
  makeHotExport(sourceModule);
  clearExceptions();
  var failbackTimer = chargeFailbackTimer(sourceModule.id);
  var firstHotRegistered = false; // TODO: Ensure that all exports from this file are react components.

  return function (WrappedComponent, props) {
    clearFailbackTimer(failbackTimer); // register proxy for wrapped component
    // only one hot per file would use this registration

    if (!firstHotRegistered) {
      firstHotRegistered = true;
      reactHotLoader.register(WrappedComponent, getComponentDisplayName(WrappedComponent), 'RHL' + moduleId);
    }

    return createHoc(WrappedComponent, function (_Component) {
      inherits(ExportedComponent, _Component);

      function ExportedComponent() {
        classCallCheck(this, ExportedComponent);
        return possibleConstructorReturn(this, _Component.apply(this, arguments));
      }

      ExportedComponent.prototype.componentDidMount = function componentDidMount() {
        module.instances.push(this);
      };

      ExportedComponent.prototype.componentWillUnmount = function componentWillUnmount() {
        var _this2 = this;

        if (isOpened(sourceModule)) {
          var componentName = getComponentDisplayName(WrappedComponent);
          logger.error('React-hot-loader: Detected AppContainer unmount on module \'' + moduleId + '\' update.\n' + ('Did you use "hot(' + componentName + ')" and "ReactDOM.render()" in the same file?\n') + ('"hot(' + componentName + ')" shall only be used as export.\n') + 'Please refer to "Getting Started" (https://github.com/gaearon/react-hot-loader/).');
        }

        module.instances = module.instances.filter(function (a) {
          return a !== _this2;
        });
      };

      ExportedComponent.prototype.render = function render() {
        return React__default.createElement(AppContainer, props, React__default.createElement(WrappedComponent, this.props));
      };

      return ExportedComponent;
    }(React.Component));
  };
};

var getProxyOrType = function getProxyOrType(type) {
  var proxy = getProxyByType(type);
  return proxy ? proxy.get() : type;
};

var areComponentsEqual = function areComponentsEqual(a, b) {
  return getProxyOrType(a) === getProxyOrType(b);
};

var compareOrSwap = function compareOrSwap(oldType, newType) {
  return hotComponentCompare(oldType, newType);
};

var cold = function cold(type) {
  blacklistByType(type);
  return type;
};

var configureComponent = function configureComponent(component, options) {
  return setComponentOptions(component, options);
};

var setConfig = function setConfig(config) {
  return Object.assign(configuration, config);
};

reactHotLoader.patch(React__default, ReactDOM);
exports.default = reactHotLoader;
exports.AppContainer = AppContainer;
exports.hot = hot;
exports.enterModule = enter;
exports.leaveModule = leave;
exports.areComponentsEqual = areComponentsEqual;
exports.compareOrSwap = compareOrSwap;
exports.cold = cold;
exports.configureComponent = configureComponent;
exports.setConfig = setConfig;

/***/ }),

/***/ "./node_modules/react-hot-loader/dist/react-hot-loader.production.min.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/react-hot-loader/dist/react-hot-loader.production.min.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _interopDefault(e) {
  return e && "object" == typeof e && "default" in e ? e.default : e;
}

Object.defineProperty(exports, "__esModule", {
  value: !0
});

var React = _interopDefault(__webpack_require__(/*! react */ "react")),
    classCallCheck = function (e, t) {
  if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
},
    inherits = function (e, t) {
  if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
  e.prototype = Object.create(t && t.prototype, {
    constructor: {
      value: e,
      enumerable: !1,
      writable: !0,
      configurable: !0
    }
  }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t);
},
    possibleConstructorReturn = function (e, t) {
  if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return !t || "object" != typeof t && "function" != typeof t ? e : t;
},
    AppContainer = function (e) {
  function t() {
    return classCallCheck(this, t), possibleConstructorReturn(this, e.apply(this, arguments));
  }

  return inherits(t, e), t.prototype.render = function () {
    return React.Children.only(this.props.children);
  }, t;
}(React.Component),
    hot_prod = function () {
  return function (e) {
    return e;
  };
},
    areComponentsEqual = function (e, t) {
  return e === t;
},
    setConfig = function () {},
    cold = function (e) {
  return e;
},
    configureComponent = function () {};

exports.AppContainer = AppContainer, exports.hot = hot_prod, exports.areComponentsEqual = areComponentsEqual, exports.setConfig = setConfig, exports.cold = cold, exports.configureComponent = configureComponent;
;
/* eslint-disable global-require, import/no-unresolved */

(function register() {
  /* react-hot-loader/webpack */
  var reactHotLoader = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").default;

  if (!reactHotLoader) {
    return;
  }
  /* eslint-disable camelcase, no-undef */


  var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : exports;
  /* eslint-enable camelcase, no-undef */

  if (typeof webpackExports === 'function') {
    reactHotLoader.register(webpackExports, 'module.exports', "/Users/davidlee/WebstormProjects/occ-react-component/node_modules/react-hot-loader/dist/react-hot-loader.production.min.js");
    return;
  }
  /* eslint-disable no-restricted-syntax */


  for (var key in webpackExports) {
    /* eslint-enable no-restricted-syntax */
    if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) {
      continue;
    }

    var namedExport = void 0;

    try {
      namedExport = webpackExports[key];
    } catch (err) {
      continue;
    }

    reactHotLoader.register(namedExport, key, "/Users/davidlee/WebstormProjects/occ-react-component/node_modules/react-hot-loader/dist/react-hot-loader.production.min.js");
  }
})();

/***/ }),

/***/ "./node_modules/react-hot-loader/index.js":
/*!************************************************!*\
  !*** ./node_modules/react-hot-loader/index.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var evalAllowed = false;

try {
  eval('evalAllowed = true');
} catch (e) {} // eval not allowed due to CSP
// RHL needs setPrototypeOf to operate Component inheritance, and eval to patch methods


var platformSupported = !!Object.setPrototypeOf && evalAllowed;

if ( false || !platformSupported) {
  if (true) {
    // we are not in prod mode, but RHL could not be activated
    console.warn('React-Hot-Loaded is not supported in this environment');
  }

  module.exports = __webpack_require__(/*! ./dist/react-hot-loader.production.min.js */ "./node_modules/react-hot-loader/dist/react-hot-loader.production.min.js");
} else {
  module.exports = __webpack_require__(/*! ./dist/react-hot-loader.development.js */ "./node_modules/react-hot-loader/dist/react-hot-loader.development.js");
}

;
/* eslint-disable global-require, import/no-unresolved */

(function register() {
  /* react-hot-loader/webpack */
  var reactHotLoader = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").default;

  if (!reactHotLoader) {
    return;
  }
  /* eslint-disable camelcase, no-undef */


  var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : exports;
  /* eslint-enable camelcase, no-undef */

  if (typeof webpackExports === 'function') {
    reactHotLoader.register(webpackExports, 'module.exports', "/Users/davidlee/WebstormProjects/occ-react-component/node_modules/react-hot-loader/index.js");
    return;
  }
  /* eslint-disable no-restricted-syntax */


  for (var key in webpackExports) {
    /* eslint-enable no-restricted-syntax */
    if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) {
      continue;
    }

    var namedExport = void 0;

    try {
      namedExport = webpackExports[key];
    } catch (err) {
      continue;
    }

    reactHotLoader.register(namedExport, key, "/Users/davidlee/WebstormProjects/occ-react-component/node_modules/react-hot-loader/index.js");
  }
})();

/***/ }),

/***/ "./node_modules/react-hot-loader/root.js":
/*!***********************************************!*\
  !*** ./node_modules/react-hot-loader/root.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {if (true) {
  var hot = __webpack_require__(/*! ./index */ "./node_modules/react-hot-loader/index.js").hot;

  var cache = __webpack_require__.c; // access parent

  var parent = cache[module.parents[0]]; // remove itself from a cache

  delete cache[module.i]; // setup hot for caller

  exports.hot = hot(Object.assign({
    id: parent.i
  }, parent));
} else {}

;
/* eslint-disable global-require, import/no-unresolved */

(function register() {
  /* react-hot-loader/webpack */
  var reactHotLoader = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").default;

  if (!reactHotLoader) {
    return;
  }
  /* eslint-disable camelcase, no-undef */


  var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : exports;
  /* eslint-enable camelcase, no-undef */

  if (typeof webpackExports === 'function') {
    reactHotLoader.register(webpackExports, 'module.exports', "/Users/davidlee/WebstormProjects/occ-react-component/node_modules/react-hot-loader/root.js");
    return;
  }
  /* eslint-disable no-restricted-syntax */


  for (var key in webpackExports) {
    /* eslint-enable no-restricted-syntax */
    if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) {
      continue;
    }

    var namedExport = void 0;

    try {
      namedExport = webpackExports[key];
    } catch (err) {
      continue;
    }

    reactHotLoader.register(namedExport, key, "/Users/davidlee/WebstormProjects/occ-react-component/node_modules/react-hot-loader/root.js");
  }
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./node_modules/react-is/cjs/react-is.development.js":
/*!***********************************************************!*\
  !*** ./node_modules/react-is/cjs/react-is.development.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/** @license React v16.6.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */


if (true) {
  (function () {
    'use strict';

    Object.defineProperty(exports, '__esModule', {
      value: true
    }); // The Symbol used to tag the ReactElement-like types. If there is no native Symbol
    // nor polyfill, then a plain number is used for performance.

    var hasSymbol = typeof Symbol === 'function' && Symbol.for;
    var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 0xeac7;
    var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;
    var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;
    var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;
    var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;
    var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;
    var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace;
    var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for('react.async_mode') : 0xeacf;
    var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for('react.concurrent_mode') : 0xeacf;
    var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
    var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for('react.suspense') : 0xead1;
    var REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3;
    var REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4;

    function isValidElementType(type) {
      return typeof type === 'string' || typeof type === 'function' || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || typeof type === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE);
    }
    /**
     * Forked from fbjs/warning:
     * https://github.com/facebook/fbjs/blob/e66ba20ad5be433eb54423f2b097d829324d9de6/packages/fbjs/src/__forks__/warning.js
     *
     * Only change is we use console.warn instead of console.error,
     * and do nothing when 'console' is not supported.
     * This really simplifies the code.
     * ---
     * Similar to invariant but only logs a warning if the condition is not met.
     * This can be used to log issues in development environments in critical
     * paths. Removing the logging code for production environments will keep the
     * same logic and follow the same code paths.
     */


    var lowPriorityWarning = function () {};

    {
      var printWarning = function (format) {
        for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
          args[_key - 1] = arguments[_key];
        }

        var argIndex = 0;
        var message = 'Warning: ' + format.replace(/%s/g, function () {
          return args[argIndex++];
        });

        if (typeof console !== 'undefined') {
          console.warn(message);
        }

        try {
          // --- Welcome to debugging React ---
          // This error was thrown as a convenience so that you can use this stack
          // to find the callsite that caused this warning to fire.
          throw new Error(message);
        } catch (x) {}
      };

      lowPriorityWarning = function (condition, format) {
        if (format === undefined) {
          throw new Error('`lowPriorityWarning(condition, format, ...args)` requires a warning ' + 'message argument');
        }

        if (!condition) {
          for (var _len2 = arguments.length, args = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
            args[_key2 - 2] = arguments[_key2];
          }

          printWarning.apply(undefined, [format].concat(args));
        }
      };
    }
    var lowPriorityWarning$1 = lowPriorityWarning;

    function typeOf(object) {
      if (typeof object === 'object' && object !== null) {
        var $$typeof = object.$$typeof;

        switch ($$typeof) {
          case REACT_ELEMENT_TYPE:
            var type = object.type;

            switch (type) {
              case REACT_ASYNC_MODE_TYPE:
              case REACT_CONCURRENT_MODE_TYPE:
              case REACT_FRAGMENT_TYPE:
              case REACT_PROFILER_TYPE:
              case REACT_STRICT_MODE_TYPE:
                return type;

              default:
                var $$typeofType = type && type.$$typeof;

                switch ($$typeofType) {
                  case REACT_CONTEXT_TYPE:
                  case REACT_FORWARD_REF_TYPE:
                  case REACT_PROVIDER_TYPE:
                    return $$typeofType;

                  default:
                    return $$typeof;
                }

            }

          case REACT_PORTAL_TYPE:
            return $$typeof;
        }
      }

      return undefined;
    } // AsyncMode is deprecated along with isAsyncMode


    var AsyncMode = REACT_ASYNC_MODE_TYPE;
    var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
    var ContextConsumer = REACT_CONTEXT_TYPE;
    var ContextProvider = REACT_PROVIDER_TYPE;
    var Element = REACT_ELEMENT_TYPE;
    var ForwardRef = REACT_FORWARD_REF_TYPE;
    var Fragment = REACT_FRAGMENT_TYPE;
    var Profiler = REACT_PROFILER_TYPE;
    var Portal = REACT_PORTAL_TYPE;
    var StrictMode = REACT_STRICT_MODE_TYPE;
    var hasWarnedAboutDeprecatedIsAsyncMode = false; // AsyncMode should be deprecated

    function isAsyncMode(object) {
      {
        if (!hasWarnedAboutDeprecatedIsAsyncMode) {
          hasWarnedAboutDeprecatedIsAsyncMode = true;
          lowPriorityWarning$1(false, 'The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 17+. Update your code to use ' + 'ReactIs.isConcurrentMode() instead. It has the exact same API.');
        }
      }
      return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
    }

    function isConcurrentMode(object) {
      return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
    }

    function isContextConsumer(object) {
      return typeOf(object) === REACT_CONTEXT_TYPE;
    }

    function isContextProvider(object) {
      return typeOf(object) === REACT_PROVIDER_TYPE;
    }

    function isElement(object) {
      return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
    }

    function isForwardRef(object) {
      return typeOf(object) === REACT_FORWARD_REF_TYPE;
    }

    function isFragment(object) {
      return typeOf(object) === REACT_FRAGMENT_TYPE;
    }

    function isProfiler(object) {
      return typeOf(object) === REACT_PROFILER_TYPE;
    }

    function isPortal(object) {
      return typeOf(object) === REACT_PORTAL_TYPE;
    }

    function isStrictMode(object) {
      return typeOf(object) === REACT_STRICT_MODE_TYPE;
    }

    exports.typeOf = typeOf;
    exports.AsyncMode = AsyncMode;
    exports.ConcurrentMode = ConcurrentMode;
    exports.ContextConsumer = ContextConsumer;
    exports.ContextProvider = ContextProvider;
    exports.Element = Element;
    exports.ForwardRef = ForwardRef;
    exports.Fragment = Fragment;
    exports.Profiler = Profiler;
    exports.Portal = Portal;
    exports.StrictMode = StrictMode;
    exports.isValidElementType = isValidElementType;
    exports.isAsyncMode = isAsyncMode;
    exports.isConcurrentMode = isConcurrentMode;
    exports.isContextConsumer = isContextConsumer;
    exports.isContextProvider = isContextProvider;
    exports.isElement = isElement;
    exports.isForwardRef = isForwardRef;
    exports.isFragment = isFragment;
    exports.isProfiler = isProfiler;
    exports.isPortal = isPortal;
    exports.isStrictMode = isStrictMode;
  })();
}

;
/* eslint-disable global-require, import/no-unresolved */

(function register() {
  /* react-hot-loader/webpack */
  var reactHotLoader = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").default;

  if (!reactHotLoader) {
    return;
  }
  /* eslint-disable camelcase, no-undef */


  var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : exports;
  /* eslint-enable camelcase, no-undef */

  if (typeof webpackExports === 'function') {
    reactHotLoader.register(webpackExports, 'module.exports', "/Users/davidlee/WebstormProjects/occ-react-component/node_modules/react-is/cjs/react-is.development.js");
    return;
  }
  /* eslint-disable no-restricted-syntax */


  for (var key in webpackExports) {
    /* eslint-enable no-restricted-syntax */
    if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) {
      continue;
    }

    var namedExport = void 0;

    try {
      namedExport = webpackExports[key];
    } catch (err) {
      continue;
    }

    reactHotLoader.register(namedExport, key, "/Users/davidlee/WebstormProjects/occ-react-component/node_modules/react-is/cjs/react-is.development.js");
  }
})();

/***/ }),

/***/ "./node_modules/react-is/index.js":
/*!****************************************!*\
  !*** ./node_modules/react-is/index.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (false) {} else {
  module.exports = __webpack_require__(/*! ./cjs/react-is.development.js */ "./node_modules/react-is/cjs/react-is.development.js");
}

;
/* eslint-disable global-require, import/no-unresolved */

(function register() {
  /* react-hot-loader/webpack */
  var reactHotLoader = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").default;

  if (!reactHotLoader) {
    return;
  }
  /* eslint-disable camelcase, no-undef */


  var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : exports;
  /* eslint-enable camelcase, no-undef */

  if (typeof webpackExports === 'function') {
    reactHotLoader.register(webpackExports, 'module.exports', "/Users/davidlee/WebstormProjects/occ-react-component/node_modules/react-is/index.js");
    return;
  }
  /* eslint-disable no-restricted-syntax */


  for (var key in webpackExports) {
    /* eslint-enable no-restricted-syntax */
    if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) {
      continue;
    }

    var namedExport = void 0;

    try {
      namedExport = webpackExports[key];
    } catch (err) {
      continue;
    }

    reactHotLoader.register(namedExport, key, "/Users/davidlee/WebstormProjects/occ-react-component/node_modules/react-is/index.js");
  }
})();

/***/ }),

/***/ "./node_modules/react-lifecycles-compat/react-lifecycles-compat.es.js":
/*!****************************************************************************!*\
  !*** ./node_modules/react-lifecycles-compat/react-lifecycles-compat.es.js ***!
  \****************************************************************************/
/*! exports provided: polyfill */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "polyfill", function() { return polyfill; });
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
function componentWillMount() {
  // Call this.constructor.gDSFP to support sub-classes.
  var state = this.constructor.getDerivedStateFromProps(this.props, this.state);

  if (state !== null && state !== undefined) {
    this.setState(state);
  }
}

function componentWillReceiveProps(nextProps) {
  // Call this.constructor.gDSFP to support sub-classes.
  // Use the setState() updater to ensure state isn't stale in certain edge cases.
  function updater(prevState) {
    var state = this.constructor.getDerivedStateFromProps(nextProps, prevState);
    return state !== null && state !== undefined ? state : null;
  } // Binding "this" is important for shallow renderer support.


  this.setState(updater.bind(this));
}

function componentWillUpdate(nextProps, nextState) {
  try {
    var prevProps = this.props;
    var prevState = this.state;
    this.props = nextProps;
    this.state = nextState;
    this.__reactInternalSnapshotFlag = true;
    this.__reactInternalSnapshot = this.getSnapshotBeforeUpdate(prevProps, prevState);
  } finally {
    this.props = prevProps;
    this.state = prevState;
  }
} // React may warn about cWM/cWRP/cWU methods being deprecated.
// Add a flag to suppress these warnings for this special case.


componentWillMount.__suppressDeprecationWarning = true;
componentWillReceiveProps.__suppressDeprecationWarning = true;
componentWillUpdate.__suppressDeprecationWarning = true;

function polyfill(Component) {
  var prototype = Component.prototype;

  if (!prototype || !prototype.isReactComponent) {
    throw new Error('Can only polyfill class components');
  }

  if (typeof Component.getDerivedStateFromProps !== 'function' && typeof prototype.getSnapshotBeforeUpdate !== 'function') {
    return Component;
  } // If new component APIs are defined, "unsafe" lifecycles won't be called.
  // Error if any of these lifecycles are present,
  // Because they would work differently between older and newer (16.3+) versions of React.


  var foundWillMountName = null;
  var foundWillReceivePropsName = null;
  var foundWillUpdateName = null;

  if (typeof prototype.componentWillMount === 'function') {
    foundWillMountName = 'componentWillMount';
  } else if (typeof prototype.UNSAFE_componentWillMount === 'function') {
    foundWillMountName = 'UNSAFE_componentWillMount';
  }

  if (typeof prototype.componentWillReceiveProps === 'function') {
    foundWillReceivePropsName = 'componentWillReceiveProps';
  } else if (typeof prototype.UNSAFE_componentWillReceiveProps === 'function') {
    foundWillReceivePropsName = 'UNSAFE_componentWillReceiveProps';
  }

  if (typeof prototype.componentWillUpdate === 'function') {
    foundWillUpdateName = 'componentWillUpdate';
  } else if (typeof prototype.UNSAFE_componentWillUpdate === 'function') {
    foundWillUpdateName = 'UNSAFE_componentWillUpdate';
  }

  if (foundWillMountName !== null || foundWillReceivePropsName !== null || foundWillUpdateName !== null) {
    var componentName = Component.displayName || Component.name;
    var newApiName = typeof Component.getDerivedStateFromProps === 'function' ? 'getDerivedStateFromProps()' : 'getSnapshotBeforeUpdate()';
    throw Error('Unsafe legacy lifecycles will not be called for components using new component APIs.\n\n' + componentName + ' uses ' + newApiName + ' but also contains the following legacy lifecycles:' + (foundWillMountName !== null ? '\n  ' + foundWillMountName : '') + (foundWillReceivePropsName !== null ? '\n  ' + foundWillReceivePropsName : '') + (foundWillUpdateName !== null ? '\n  ' + foundWillUpdateName : '') + '\n\nThe above lifecycles should be removed. Learn more about this warning here:\n' + 'https://fb.me/react-async-component-lifecycle-hooks');
  } // React <= 16.2 does not support static getDerivedStateFromProps.
  // As a workaround, use cWM and cWRP to invoke the new static lifecycle.
  // Newer versions of React will ignore these lifecycles if gDSFP exists.


  if (typeof Component.getDerivedStateFromProps === 'function') {
    prototype.componentWillMount = componentWillMount;
    prototype.componentWillReceiveProps = componentWillReceiveProps;
  } // React <= 16.2 does not support getSnapshotBeforeUpdate.
  // As a workaround, use cWU to invoke the new lifecycle.
  // Newer versions of React will ignore that lifecycle if gSBU exists.


  if (typeof prototype.getSnapshotBeforeUpdate === 'function') {
    if (typeof prototype.componentDidUpdate !== 'function') {
      throw new Error('Cannot polyfill getSnapshotBeforeUpdate() for components that do not define componentDidUpdate() on the prototype');
    }

    prototype.componentWillUpdate = componentWillUpdate;
    var componentDidUpdate = prototype.componentDidUpdate;

    prototype.componentDidUpdate = function componentDidUpdatePolyfill(prevProps, prevState, maybeSnapshot) {
      // 16.3+ will not execute our will-update method;
      // It will pass a snapshot value to did-update though.
      // Older versions will require our polyfilled will-update value.
      // We need to handle both cases, but can't just check for the presence of "maybeSnapshot",
      // Because for <= 15.x versions this might be a "prevContext" object.
      // We also can't just check "__reactInternalSnapshot",
      // Because get-snapshot might return a falsy value.
      // So check for the explicit __reactInternalSnapshotFlag flag to determine behavior.
      var snapshot = this.__reactInternalSnapshotFlag ? this.__reactInternalSnapshot : maybeSnapshot;
      componentDidUpdate.call(this, prevProps, prevState, snapshot);
    };
  }

  return Component;
}


;
/* eslint-disable global-require, import/no-unresolved */

(function register() {
  /* react-hot-loader/webpack */
  var reactHotLoader = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").default;

  if (!reactHotLoader) {
    return;
  }
  /* eslint-disable camelcase, no-undef */


  var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : exports;
  /* eslint-enable camelcase, no-undef */

  if (typeof webpackExports === 'function') {
    reactHotLoader.register(webpackExports, 'module.exports', "/Users/davidlee/WebstormProjects/occ-react-component/node_modules/react-lifecycles-compat/react-lifecycles-compat.es.js");
    return;
  }
  /* eslint-disable no-restricted-syntax */


  for (var key in webpackExports) {
    /* eslint-enable no-restricted-syntax */
    if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) {
      continue;
    }

    var namedExport = void 0;

    try {
      namedExport = webpackExports[key];
    } catch (err) {
      continue;
    }

    reactHotLoader.register(namedExport, key, "/Users/davidlee/WebstormProjects/occ-react-component/node_modules/react-lifecycles-compat/react-lifecycles-compat.es.js");
  }
})();

/***/ }),

/***/ "./node_modules/shallowequal/index.js":
/*!********************************************!*\
  !*** ./node_modules/shallowequal/index.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

//
module.exports = function shallowEqual(objA, objB, compare, compareContext) {
  var ret = compare ? compare.call(compareContext, objA, objB) : void 0;

  if (ret !== void 0) {
    return !!ret;
  }

  if (objA === objB) {
    return true;
  }

  if (typeof objA !== "object" || !objA || typeof objB !== "object" || !objB) {
    return false;
  }

  var keysA = Object.keys(objA);
  var keysB = Object.keys(objB);

  if (keysA.length !== keysB.length) {
    return false;
  }

  var bHasOwnProperty = Object.prototype.hasOwnProperty.bind(objB); // Test for A's keys different from B.

  for (var idx = 0; idx < keysA.length; idx++) {
    var key = keysA[idx];

    if (!bHasOwnProperty(key)) {
      return false;
    }

    var valueA = objA[key];
    var valueB = objB[key];
    ret = compare ? compare.call(compareContext, valueA, valueB, key) : void 0;

    if (ret === false || ret === void 0 && valueA !== valueB) {
      return false;
    }
  }

  return true;
};

;
/* eslint-disable global-require, import/no-unresolved */

(function register() {
  /* react-hot-loader/webpack */
  var reactHotLoader = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").default;

  if (!reactHotLoader) {
    return;
  }
  /* eslint-disable camelcase, no-undef */


  var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : exports;
  /* eslint-enable camelcase, no-undef */

  if (typeof webpackExports === 'function') {
    reactHotLoader.register(webpackExports, 'module.exports', "/Users/davidlee/WebstormProjects/occ-react-component/node_modules/shallowequal/index.js");
    return;
  }
  /* eslint-disable no-restricted-syntax */


  for (var key in webpackExports) {
    /* eslint-enable no-restricted-syntax */
    if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) {
      continue;
    }

    var namedExport = void 0;

    try {
      namedExport = webpackExports[key];
    } catch (err) {
      continue;
    }

    reactHotLoader.register(namedExport, key, "/Users/davidlee/WebstormProjects/occ-react-component/node_modules/shallowequal/index.js");
  }
})();

/***/ }),

/***/ "./node_modules/style-loader/lib/addStyles.js":
/*!****************************************************!*\
  !*** ./node_modules/style-loader/lib/addStyles.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getTarget = function (target, parent) {
  if (parent){
    return parent.querySelector(target);
  }
  return document.querySelector(target);
};

var getElement = (function (fn) {
	var memo = {};

	return function(target, parent) {
                // If passing function in options, then use it for resolve "head" element.
                // Useful for Shadow Root style i.e
                // {
                //   insertInto: function () { return document.querySelector("#foo").shadowRoot }
                // }
                if (typeof target === 'function') {
                        return target();
                }
                if (typeof memo[target] === "undefined") {
			var styleTarget = getTarget.call(this, target, parent);
			// Special case to return head of iframe instead of iframe itself
			if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[target] = styleTarget;
		}
		return memo[target]
	};
})();

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(/*! ./urls */ "./node_modules/style-loader/lib/urls.js");

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
        if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertAt.before, target);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}

	if(options.attrs.nonce === undefined) {
		var nonce = getNonce();
		if (nonce) {
			options.attrs.nonce = nonce;
		}
	}

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function getNonce() {
	if (false) {}

	return __webpack_require__.nc;
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = typeof options.transform === 'function'
		 ? options.transform(obj.css) 
		 : options.transform.default(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),

/***/ "./node_modules/style-loader/lib/urls.js":
/*!***********************************************!*\
  !*** ./node_modules/style-loader/lib/urls.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */
module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  } // blank or null?


  if (!css || typeof css !== "string") {
    return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/"); // convert each url(...)

  /*
  This regular expression is just a way to recursively match brackets within
  a string.
  	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
     (  = Start a capturing group
       (?:  = Start a non-capturing group
           [^)(]  = Match anything that isn't a parentheses
           |  = OR
           \(  = Match a start parentheses
               (?:  = Start another non-capturing groups
                   [^)(]+  = Match anything that isn't a parentheses
                   |  = OR
                   \(  = Match a start parentheses
                       [^)(]*  = Match anything that isn't a parentheses
                   \)  = Match a end parentheses
               )  = End Group
               *\) = Match anything and then a close parens
           )  = Close non-capturing group
           *  = Match anything
        )  = Close capturing group
   \)  = Match a close parens
  	 /gi  = Get all matches, not the first.  Be case insensitive.
   */

  var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function (fullMatch, origUrl) {
    // strip quotes (if they exist)
    var unquotedOrigUrl = origUrl.trim().replace(/^"(.*)"$/, function (o, $1) {
      return $1;
    }).replace(/^'(.*)'$/, function (o, $1) {
      return $1;
    }); // already a full url? no change

    if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(unquotedOrigUrl)) {
      return fullMatch;
    } // convert the url to a full url


    var newUrl;

    if (unquotedOrigUrl.indexOf("//") === 0) {
      //TODO: should we add protocol?
      newUrl = unquotedOrigUrl;
    } else if (unquotedOrigUrl.indexOf("/") === 0) {
      // path should be relative to the base url
      newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
    } else {
      // path should be relative to current directory
      newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
    } // send back the fixed url(...)


    return "url(" + JSON.stringify(newUrl) + ")";
  }); // send back the fixed css

  return fixedCss;
};

;
/* eslint-disable global-require, import/no-unresolved */

(function register() {
  /* react-hot-loader/webpack */
  var reactHotLoader = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").default;

  if (!reactHotLoader) {
    return;
  }
  /* eslint-disable camelcase, no-undef */


  var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : exports;
  /* eslint-enable camelcase, no-undef */

  if (typeof webpackExports === 'function') {
    reactHotLoader.register(webpackExports, 'module.exports', "/Users/davidlee/WebstormProjects/occ-react-component/node_modules/style-loader/lib/urls.js");
    return;
  }
  /* eslint-disable no-restricted-syntax */


  for (var key in webpackExports) {
    /* eslint-enable no-restricted-syntax */
    if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) {
      continue;
    }

    var namedExport = void 0;

    try {
      namedExport = webpackExports[key];
    } catch (err) {
      continue;
    }

    reactHotLoader.register(namedExport, key, "/Users/davidlee/WebstormProjects/occ-react-component/node_modules/style-loader/lib/urls.js");
  }
})();

/***/ }),

/***/ "./node_modules/styled-components/dist/styled-components.browser.esm.js":
/*!******************************************************************************!*\
  !*** ./node_modules/styled-components/dist/styled-components.browser.esm.js ***!
  \******************************************************************************/
/*! exports provided: default, css, keyframes, createGlobalStyle, isStyledComponent, ThemeConsumer, ThemeContext, ThemeProvider, withTheme, ServerStyleSheet, StyleSheetManager, __DO_NOT_USE_OR_YOU_WILL_BE_HAUNTED_BY_SPOOKY_GHOSTS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(process) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "css", function() { return css; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "keyframes", function() { return keyframes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createGlobalStyle", function() { return createGlobalStyle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isStyledComponent", function() { return isStyledComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThemeConsumer", function() { return ThemeConsumer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThemeContext", function() { return ThemeContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThemeProvider", function() { return ThemeProvider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "withTheme", function() { return withTheme; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServerStyleSheet", function() { return ServerStyleSheet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StyleSheetManager", function() { return StyleSheetManager; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__DO_NOT_USE_OR_YOU_WILL_BE_HAUNTED_BY_SPOOKY_GHOSTS", function() { return __DO_NOT_USE_OR_YOU_WILL_BE_HAUNTED_BY_SPOOKY_GHOSTS; });
/* harmony import */ var stylis_stylis_min__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! stylis/stylis.min */ "./node_modules/stylis/stylis.min.js");
/* harmony import */ var stylis_stylis_min__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(stylis_stylis_min__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var stylis_rule_sheet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! stylis-rule-sheet */ "./node_modules/stylis-rule-sheet/index.js");
/* harmony import */ var stylis_rule_sheet__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(stylis_rule_sheet__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _emotion_unitless__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @emotion/unitless */ "./node_modules/@emotion/unitless/dist/unitless.browser.esm.js");
/* harmony import */ var react_is__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-is */ "./node_modules/react-is/index.js");
/* harmony import */ var react_is__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_is__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var memoize_one__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! memoize-one */ "./node_modules/memoize-one/dist/memoize-one.esm.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-dom */ "react-dom");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _emotion_is_prop_valid__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @emotion/is-prop-valid */ "./node_modules/@emotion/is-prop-valid/dist/is-prop-valid.browser.esm.js");








 // 

var interleave = function (strings, interpolations) {
  var result = [strings[0]];

  for (var i = 0, len = interpolations.length; i < len; i += 1) {
    result.push(interpolations[i], strings[i + 1]);
  }

  return result;
};

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
  return typeof obj;
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
};

var classCallCheck = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

var createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

var inherits = function (subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
};

var objectWithoutProperties = function (obj, keys) {
  var target = {};

  for (var i in obj) {
    if (keys.indexOf(i) >= 0) continue;
    if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
    target[i] = obj[i];
  }

  return target;
};

var possibleConstructorReturn = function (self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (typeof call === "object" || typeof call === "function") ? call : self;
}; // 


var isPlainObject = function (x) {
  return (typeof x === 'undefined' ? 'undefined' : _typeof(x)) === 'object' && x.constructor === Object;
}; // 


var EMPTY_ARRAY = Object.freeze([]);
var EMPTY_OBJECT = Object.freeze({}); // 

function isFunction(test) {
  return typeof test === 'function';
} // 


function getComponentName(target) {
  return ( true ? typeof target === 'string' && target : undefined) || target.displayName || target.name || 'Component';
} // 


function isStyledComponent(target) {
  return target && typeof target.styledComponentId === 'string';
} // 


var SC_ATTR = typeof process !== 'undefined' && process.env.SC_ATTR || 'data-styled';
var SC_VERSION_ATTR = 'data-styled-version';
var SC_STREAM_ATTR = 'data-styled-streamed';
var IS_BROWSER = typeof window !== 'undefined' && 'HTMLElement' in window;
var DISABLE_SPEEDY = typeof SC_DISABLE_SPEEDY === 'boolean' && SC_DISABLE_SPEEDY || "development" !== 'production'; // Shared empty execution context when generating static styles

var STATIC_EXECUTION_CONTEXT = {}; // 

/**
 * Parse errors.md and turn it into a simple hash of code: message
 */

var ERRORS =  true ? {
  "1": "Cannot create styled-component for component: %s.\n\n",
  "2": "Can't collect styles once you've consumed a `ServerStyleSheet`'s styles! `ServerStyleSheet` is a one off instance for each server-side render cycle.\n\n- Are you trying to reuse it across renders?\n- Are you accidentally calling collectStyles twice?\n\n",
  "3": "Streaming SSR is only supported in a Node.js environment; Please do not try to call this method in the browser.\n\n",
  "4": "The `StyleSheetManager` expects a valid target or sheet prop!\n\n- Does this error occur on the client and is your target falsy?\n- Does this error occur on the server and is the sheet falsy?\n\n",
  "5": "The clone method cannot be used on the client!\n\n- Are you running in a client-like environment on the server?\n- Are you trying to run SSR on the client?\n\n",
  "6": "Trying to insert a new style tag, but the given Node is unmounted!\n\n- Are you using a custom target that isn't mounted?\n- Does your document not have a valid head element?\n- Have you accidentally removed a style tag manually?\n\n",
  "7": "ThemeProvider: Please return an object from your \"theme\" prop function, e.g.\n\n```js\ntheme={() => ({})}\n```\n\n",
  "8": "ThemeProvider: Please make your \"theme\" prop an object.\n\n",
  "9": "Missing document `<head>`\n\n",
  "10": "Cannot find a StyleSheet instance. Usually this happens if there are multiple copies of styled-components loaded at once. Check out this issue for how to troubleshoot and fix the common cases where this situation can happen: https://github.com/styled-components/styled-components/issues/1941#issuecomment-417862021\n\n",
  "11": "_This error was replaced with a dev-time warning, it will be deleted for v4 final._ [createGlobalStyle] received children which will not be rendered. Please use the component without passing children elements.\n\n",
  "12": "It seems you are interpolating a keyframe declaration (%s) into an untagged string. This was supported in styled-components v3, but is not longer supported in v4 as keyframes are now injected on-demand. Please wrap your string in the css\\`\\` helper (see https://www.styled-components.com/docs/api#css), which ensures the styles are injected correctly.\n\n",
  "13": "%s is not a styled component and cannot be referred to via component selector. See https://www.styled-components.com/docs/advanced#referring-to-other-components for more details.\n"
} : undefined;
/**
 * super basic version of sprintf
 */

function format() {
  var a = arguments.length <= 0 ? undefined : arguments[0];
  var b = [];

  for (var c = 1, len = arguments.length; c < len; c += 1) {
    b.push(arguments.length <= c ? undefined : arguments[c]);
  }

  b.forEach(function (d) {
    a = a.replace(/%[a-z]/, d);
  });
  return a;
}
/**
 * Create an error file out of errors.md for development and a simple web link to the full errors
 * in production mode.
 */


var StyledComponentsError = function (_Error) {
  inherits(StyledComponentsError, _Error);

  function StyledComponentsError(code) {
    classCallCheck(this, StyledComponentsError);

    for (var _len = arguments.length, interpolations = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      interpolations[_key - 1] = arguments[_key];
    }

    if (false) { var _this; } else {
      var _this = possibleConstructorReturn(this, _Error.call(this, format.apply(undefined, [ERRORS[code]].concat(interpolations)).trim()));
    }

    return possibleConstructorReturn(_this);
  }

  return StyledComponentsError;
}(Error); // 


var SC_COMPONENT_ID = /^[^\S\n]*?\/\* sc-component-id:\s*(\S+)\s+\*\//gm;

var extractComps = function (maybeCSS) {
  var css = '' + (maybeCSS || ''); // Definitely a string, and a clone

  var existingComponents = [];
  css.replace(SC_COMPONENT_ID, function (match, componentId, matchIndex) {
    existingComponents.push({
      componentId: componentId,
      matchIndex: matchIndex
    });
    return match;
  });
  return existingComponents.map(function (_ref, i) {
    var componentId = _ref.componentId,
        matchIndex = _ref.matchIndex;
    var nextComp = existingComponents[i + 1];
    var cssFromDOM = nextComp ? css.slice(matchIndex, nextComp.matchIndex) : css.slice(matchIndex);
    return {
      componentId: componentId,
      cssFromDOM: cssFromDOM
    };
  });
}; // 


var COMMENT_REGEX = /^\s*\/\/.*$/gm; // NOTE: This stylis instance is only used to split rules from SSR'd style tags

var stylisSplitter = new stylis_stylis_min__WEBPACK_IMPORTED_MODULE_0___default.a({
  global: false,
  cascade: true,
  keyframe: false,
  prefix: false,
  compress: false,
  semicolon: true
});
var stylis = new stylis_stylis_min__WEBPACK_IMPORTED_MODULE_0___default.a({
  global: false,
  cascade: true,
  keyframe: false,
  prefix: true,
  compress: false,
  semicolon: false // NOTE: This means "autocomplete missing semicolons"

}); // Wrap `insertRulePlugin to build a list of rules,
// and then make our own plugin to return the rules. This
// makes it easier to hook into the existing SSR architecture

var parsingRules = []; // eslint-disable-next-line consistent-return

var returnRulesPlugin = function returnRulesPlugin(context) {
  if (context === -2) {
    var parsedRules = parsingRules;
    parsingRules = [];
    return parsedRules;
  }
};

var parseRulesPlugin = stylis_rule_sheet__WEBPACK_IMPORTED_MODULE_1___default()(function (rule) {
  parsingRules.push(rule);
});

var _componentId = void 0;

var _selector = void 0;

var _selectorRegexp = void 0;

var selfReferenceReplacer = function selfReferenceReplacer(match, offset, string) {
  if ( // the first self-ref is always untouched
  offset > 0 && // there should be at least two self-refs to do a replacement (.b > .b)
  string.slice(0, offset).indexOf(_selector) !== -1 && // no consecutive self refs (.b.b); that is a precedence boost and treated differently
  string.slice(offset - _selector.length, offset) !== _selector) {
    return '.' + _componentId;
  }

  return match;
};
/**
 * When writing a style like
 *
 * & + & {
 *   color: red;
 * }
 *
 * The second ampersand should be a reference to the static component class. stylis
 * has no knowledge of static class so we have to intelligently replace the base selector.
 */


var selfReferenceReplacementPlugin = function selfReferenceReplacementPlugin(context, _, selectors) {
  if (context === 2 && selectors.length && selectors[0].lastIndexOf(_selector) > 0) {
    // eslint-disable-next-line no-param-reassign
    selectors[0] = selectors[0].replace(_selectorRegexp, selfReferenceReplacer);
  }
};

stylis.use([selfReferenceReplacementPlugin, parseRulesPlugin, returnRulesPlugin]);
stylisSplitter.use([parseRulesPlugin, returnRulesPlugin]);

var splitByRules = function splitByRules(css) {
  return stylisSplitter('', css);
};

function stringifyRules(rules, selector, prefix) {
  var componentId = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : '&';
  var flatCSS = rules.join('').replace(COMMENT_REGEX, ''); // replace JS comments

  var cssStr = selector && prefix ? prefix + ' ' + selector + ' { ' + flatCSS + ' }' : flatCSS; // stylis has no concept of state to be passed to plugins
  // but since JS is single=threaded, we can rely on that to ensure
  // these properties stay in sync with the current stylis run

  _componentId = componentId;
  _selector = selector;
  _selectorRegexp = new RegExp('\\' + _selector + '\\b', 'g');
  return stylis(prefix || !selector ? '' : selector, cssStr);
} // 

/* eslint-disable camelcase, no-undef */


var getNonce = function () {
  return  true ? __webpack_require__.nc : undefined;
}; // 

/* These are helpers for the StyleTags to keep track of the injected
 * rule names for each (component) ID that they're keeping track of.
 * They're crucial for detecting whether a name has already been
 * injected.
 * (This excludes rehydrated names) */

/* adds a new ID:name pairing to a names dictionary */


var addNameForId = function addNameForId(names, id, name) {
  if (name) {
    // eslint-disable-next-line no-param-reassign
    var namesForId = names[id] || (names[id] = Object.create(null));
    namesForId[name] = true;
  }
};
/* resets an ID entirely by overwriting it in the dictionary */


var resetIdNames = function resetIdNames(names, id) {
  // eslint-disable-next-line no-param-reassign
  names[id] = Object.create(null);
};
/* factory for a names dictionary checking the existance of an ID:name pairing */


var hasNameForId = function hasNameForId(names) {
  return function (id, name) {
    return names[id] !== undefined && names[id][name];
  };
};
/* stringifies names for the html/element output */


var stringifyNames = function stringifyNames(names) {
  var str = ''; // eslint-disable-next-line guard-for-in

  for (var id in names) {
    str += Object.keys(names[id]).join(' ') + ' ';
  }

  return str.trim();
};
/* clones the nested names dictionary */


var cloneNames = function cloneNames(names) {
  var clone = Object.create(null); // eslint-disable-next-line guard-for-in

  for (var id in names) {
    clone[id] = _extends({}, names[id]);
  }

  return clone;
}; // 

/* These are helpers that deal with the insertRule (aka speedy) API
 * They are used in the StyleTags and specifically the speedy tag
 */

/* retrieve a sheet for a given style tag */


var sheetForTag = function sheetForTag(tag) {
  // $FlowFixMe
  if (tag.sheet) return tag.sheet;
  /* Firefox quirk requires us to step through all stylesheets to find one owned by the given tag */

  var size = document.styleSheets.length;

  for (var i = 0; i < size; i += 1) {
    var sheet = document.styleSheets[i]; // $FlowFixMe

    if (sheet.ownerNode === tag) return sheet;
  }
  /* we should always be able to find a tag */


  throw new StyledComponentsError(10);
};
/* insert a rule safely and return whether it was actually injected */


var safeInsertRule = function safeInsertRule(sheet, cssRule, index) {
  /* abort early if cssRule string is falsy */
  if (!cssRule) return false;
  var maxIndex = sheet.cssRules.length;

  try {
    /* use insertRule and cap passed index with maxIndex (no of cssRules) */
    sheet.insertRule(cssRule, index <= maxIndex ? index : maxIndex);
  } catch (err) {
    /* any error indicates an invalid rule */
    return false;
  }

  return true;
};
/* deletes `size` rules starting from `removalIndex` */


var deleteRules = function deleteRules(sheet, removalIndex, size) {
  var lowerBound = removalIndex - size;

  for (var i = removalIndex; i > lowerBound; i -= 1) {
    sheet.deleteRule(i);
  }
}; // 

/* this marker separates component styles and is important for rehydration */


var makeTextMarker = function makeTextMarker(id) {
  return '\n/* sc-component-id: ' + id + ' */\n';
};
/* add up all numbers in array up until and including the index */


var addUpUntilIndex = function addUpUntilIndex(sizes, index) {
  var totalUpToIndex = 0;

  for (var i = 0; i <= index; i += 1) {
    totalUpToIndex += sizes[i];
  }

  return totalUpToIndex;
};
/* create a new style tag after lastEl */


var makeStyleTag = function makeStyleTag(target, tagEl, insertBefore) {
  var el = document.createElement('style');
  el.setAttribute(SC_ATTR, '');
  el.setAttribute(SC_VERSION_ATTR, "4.1.3");
  var nonce = getNonce();

  if (nonce) {
    el.setAttribute('nonce', nonce);
  }
  /* Work around insertRule quirk in EdgeHTML */


  el.appendChild(document.createTextNode(''));

  if (target && !tagEl) {
    /* Append to target when no previous element was passed */
    target.appendChild(el);
  } else {
    if (!tagEl || !target || !tagEl.parentNode) {
      throw new StyledComponentsError(6);
    }
    /* Insert new style tag after the previous one */


    tagEl.parentNode.insertBefore(el, insertBefore ? tagEl : tagEl.nextSibling);
  }

  return el;
};
/* takes a css factory function and outputs an html styled tag factory */


var wrapAsHtmlTag = function wrapAsHtmlTag(css, names) {
  return function (additionalAttrs) {
    var nonce = getNonce();
    var attrs = [nonce && 'nonce="' + nonce + '"', SC_ATTR + '="' + stringifyNames(names) + '"', SC_VERSION_ATTR + '="' + "4.1.3" + '"', additionalAttrs];
    var htmlAttr = attrs.filter(Boolean).join(' ');
    return '<style ' + htmlAttr + '>' + css() + '</style>';
  };
};
/* takes a css factory function and outputs an element factory */


var wrapAsElement = function wrapAsElement(css, names) {
  return function () {
    var _props;

    var props = (_props = {}, _props[SC_ATTR] = stringifyNames(names), _props[SC_VERSION_ATTR] = "4.1.3", _props);
    var nonce = getNonce();

    if (nonce) {
      // $FlowFixMe
      props.nonce = nonce;
    } // eslint-disable-next-line react/no-danger


    return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement('style', _extends({}, props, {
      dangerouslySetInnerHTML: {
        __html: css()
      }
    }));
  };
};

var getIdsFromMarkersFactory = function getIdsFromMarkersFactory(markers) {
  return function () {
    return Object.keys(markers);
  };
};
/* speedy tags utilise insertRule */


var makeSpeedyTag = function makeSpeedyTag(el, getImportRuleTag) {
  var names = Object.create(null);
  var markers = Object.create(null);
  var sizes = [];
  var extractImport = getImportRuleTag !== undefined;
  /* indicates whether getImportRuleTag was called */

  var usedImportRuleTag = false;

  var insertMarker = function insertMarker(id) {
    var prev = markers[id];

    if (prev !== undefined) {
      return prev;
    }

    markers[id] = sizes.length;
    sizes.push(0);
    resetIdNames(names, id);
    return markers[id];
  };

  var insertRules = function insertRules(id, cssRules, name) {
    var marker = insertMarker(id);
    var sheet = sheetForTag(el);
    var insertIndex = addUpUntilIndex(sizes, marker);
    var injectedRules = 0;
    var importRules = [];
    var cssRulesSize = cssRules.length;

    for (var i = 0; i < cssRulesSize; i += 1) {
      var cssRule = cssRules[i];
      var mayHaveImport = extractImport;
      /* @import rules are reordered to appear first */

      if (mayHaveImport && cssRule.indexOf('@import') !== -1) {
        importRules.push(cssRule);
      } else if (safeInsertRule(sheet, cssRule, insertIndex + injectedRules)) {
        mayHaveImport = false;
        injectedRules += 1;
      }
    }

    if (extractImport && importRules.length > 0) {
      usedImportRuleTag = true; // $FlowFixMe

      getImportRuleTag().insertRules(id + '-import', importRules);
    }

    sizes[marker] += injectedRules;
    /* add up no of injected rules */

    addNameForId(names, id, name);
  };

  var removeRules = function removeRules(id) {
    var marker = markers[id];
    if (marker === undefined) return;
    var size = sizes[marker];
    var sheet = sheetForTag(el);
    var removalIndex = addUpUntilIndex(sizes, marker) - 1;
    deleteRules(sheet, removalIndex, size);
    sizes[marker] = 0;
    resetIdNames(names, id);

    if (extractImport && usedImportRuleTag) {
      // $FlowFixMe
      getImportRuleTag().removeRules(id + '-import');
    }
  };

  var css = function css() {
    var _sheetForTag = sheetForTag(el),
        cssRules = _sheetForTag.cssRules;

    var str = ''; // eslint-disable-next-line guard-for-in

    for (var id in markers) {
      str += makeTextMarker(id);
      var marker = markers[id];
      var end = addUpUntilIndex(sizes, marker);
      var size = sizes[marker];

      for (var i = end - size; i < end; i += 1) {
        var rule = cssRules[i];

        if (rule !== undefined) {
          str += rule.cssText;
        }
      }
    }

    return str;
  };

  return {
    clone: function clone() {
      throw new StyledComponentsError(5);
    },
    css: css,
    getIds: getIdsFromMarkersFactory(markers),
    hasNameForId: hasNameForId(names),
    insertMarker: insertMarker,
    insertRules: insertRules,
    removeRules: removeRules,
    sealed: false,
    styleTag: el,
    toElement: wrapAsElement(css, names),
    toHTML: wrapAsHtmlTag(css, names)
  };
};

var makeTextNode = function makeTextNode(id) {
  return document.createTextNode(makeTextMarker(id));
};

var makeBrowserTag = function makeBrowserTag(el, getImportRuleTag) {
  var names = Object.create(null);
  var markers = Object.create(null);
  var extractImport = getImportRuleTag !== undefined;
  /* indicates whether getImportRuleTag was called */

  var usedImportRuleTag = false;

  var insertMarker = function insertMarker(id) {
    var prev = markers[id];

    if (prev !== undefined) {
      return prev;
    }

    markers[id] = makeTextNode(id);
    el.appendChild(markers[id]);
    names[id] = Object.create(null);
    return markers[id];
  };

  var insertRules = function insertRules(id, cssRules, name) {
    var marker = insertMarker(id);
    var importRules = [];
    var cssRulesSize = cssRules.length;

    for (var i = 0; i < cssRulesSize; i += 1) {
      var rule = cssRules[i];
      var mayHaveImport = extractImport;

      if (mayHaveImport && rule.indexOf('@import') !== -1) {
        importRules.push(rule);
      } else {
        mayHaveImport = false;
        var separator = i === cssRulesSize - 1 ? '' : ' ';
        marker.appendData('' + rule + separator);
      }
    }

    addNameForId(names, id, name);

    if (extractImport && importRules.length > 0) {
      usedImportRuleTag = true; // $FlowFixMe

      getImportRuleTag().insertRules(id + '-import', importRules);
    }
  };

  var removeRules = function removeRules(id) {
    var marker = markers[id];
    if (marker === undefined) return;
    /* create new empty text node and replace the current one */

    var newMarker = makeTextNode(id);
    el.replaceChild(newMarker, marker);
    markers[id] = newMarker;
    resetIdNames(names, id);

    if (extractImport && usedImportRuleTag) {
      // $FlowFixMe
      getImportRuleTag().removeRules(id + '-import');
    }
  };

  var css = function css() {
    var str = ''; // eslint-disable-next-line guard-for-in

    for (var id in markers) {
      str += markers[id].data;
    }

    return str;
  };

  return {
    clone: function clone() {
      throw new StyledComponentsError(5);
    },
    css: css,
    getIds: getIdsFromMarkersFactory(markers),
    hasNameForId: hasNameForId(names),
    insertMarker: insertMarker,
    insertRules: insertRules,
    removeRules: removeRules,
    sealed: false,
    styleTag: el,
    toElement: wrapAsElement(css, names),
    toHTML: wrapAsHtmlTag(css, names)
  };
};

var makeServerTag = function makeServerTag(namesArg, markersArg) {
  var names = namesArg === undefined ? Object.create(null) : namesArg;
  var markers = markersArg === undefined ? Object.create(null) : markersArg;

  var insertMarker = function insertMarker(id) {
    var prev = markers[id];

    if (prev !== undefined) {
      return prev;
    }

    return markers[id] = [''];
  };

  var insertRules = function insertRules(id, cssRules, name) {
    var marker = insertMarker(id);
    marker[0] += cssRules.join(' ');
    addNameForId(names, id, name);
  };

  var removeRules = function removeRules(id) {
    var marker = markers[id];
    if (marker === undefined) return;
    marker[0] = '';
    resetIdNames(names, id);
  };

  var css = function css() {
    var str = ''; // eslint-disable-next-line guard-for-in

    for (var id in markers) {
      var cssForId = markers[id][0];

      if (cssForId) {
        str += makeTextMarker(id) + cssForId;
      }
    }

    return str;
  };

  var clone = function clone() {
    var namesClone = cloneNames(names);
    var markersClone = Object.create(null); // eslint-disable-next-line guard-for-in

    for (var id in markers) {
      markersClone[id] = [markers[id][0]];
    }

    return makeServerTag(namesClone, markersClone);
  };

  var tag = {
    clone: clone,
    css: css,
    getIds: getIdsFromMarkersFactory(markers),
    hasNameForId: hasNameForId(names),
    insertMarker: insertMarker,
    insertRules: insertRules,
    removeRules: removeRules,
    sealed: false,
    styleTag: null,
    toElement: wrapAsElement(css, names),
    toHTML: wrapAsHtmlTag(css, names)
  };
  return tag;
};

var makeTag = function makeTag(target, tagEl, forceServer, insertBefore, getImportRuleTag) {
  if (IS_BROWSER && !forceServer) {
    var el = makeStyleTag(target, tagEl, insertBefore);

    if (DISABLE_SPEEDY) {
      return makeBrowserTag(el, getImportRuleTag);
    } else {
      return makeSpeedyTag(el, getImportRuleTag);
    }
  }

  return makeServerTag();
};

var rehydrate = function rehydrate(tag, els, extracted) {
  /* add all extracted components to the new tag */
  for (var i = 0, len = extracted.length; i < len; i += 1) {
    var _extracted$i = extracted[i],
        componentId = _extracted$i.componentId,
        cssFromDOM = _extracted$i.cssFromDOM;
    var cssRules = splitByRules(cssFromDOM);
    tag.insertRules(componentId, cssRules);
  }
  /* remove old HTMLStyleElements, since they have been rehydrated */


  for (var _i = 0, _len = els.length; _i < _len; _i += 1) {
    var el = els[_i];

    if (el.parentNode) {
      el.parentNode.removeChild(el);
    }
  }
}; // 


var SPLIT_REGEX = /\s+/;
/* determine the maximum number of components before tags are sharded */

var MAX_SIZE = void 0;

if (IS_BROWSER) {
  /* in speedy mode we can keep a lot more rules in a sheet before a slowdown can be expected */
  MAX_SIZE = DISABLE_SPEEDY ? 40 : 1000;
} else {
  /* for servers we do not need to shard at all */
  MAX_SIZE = -1;
}

var sheetRunningId = 0;
var master = void 0;

var StyleSheet = function () {
  /* a map from ids to tags */

  /* deferred rules for a given id */

  /* this is used for not reinjecting rules via hasNameForId() */

  /* when rules for an id are removed using remove() we have to ignore rehydratedNames for it */

  /* a list of tags belonging to this StyleSheet */

  /* a tag for import rules */

  /* current capacity until a new tag must be created */

  /* children (aka clones) of this StyleSheet inheriting all and future injections */
  function StyleSheet() {
    var _this = this;

    var target = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : IS_BROWSER ? document.head : null;
    var forceServer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
    classCallCheck(this, StyleSheet);

    this.getImportRuleTag = function () {
      var importRuleTag = _this.importRuleTag;

      if (importRuleTag !== undefined) {
        return importRuleTag;
      }

      var firstTag = _this.tags[0];
      var insertBefore = true;
      return _this.importRuleTag = makeTag(_this.target, firstTag ? firstTag.styleTag : null, _this.forceServer, insertBefore);
    };

    sheetRunningId += 1;
    this.id = sheetRunningId;
    this.forceServer = forceServer;
    this.target = forceServer ? null : target;
    this.tagMap = {};
    this.deferred = {};
    this.rehydratedNames = {};
    this.ignoreRehydratedNames = {};
    this.tags = [];
    this.capacity = 1;
    this.clones = [];
  }
  /* rehydrate all SSR'd style tags */


  StyleSheet.prototype.rehydrate = function rehydrate$$1() {
    if (!IS_BROWSER || this.forceServer) return this;
    var els = [];
    var extracted = [];
    var isStreamed = false;
    /* retrieve all of our SSR style elements from the DOM */

    var nodes = document.querySelectorAll('style[' + SC_ATTR + '][' + SC_VERSION_ATTR + '="' + "4.1.3" + '"]');
    var nodesSize = nodes.length;
    /* abort rehydration if no previous style tags were found */

    if (!nodesSize) return this;

    for (var i = 0; i < nodesSize; i += 1) {
      var el = nodes[i];
      /* check if style tag is a streamed tag */

      if (!isStreamed) isStreamed = !!el.getAttribute(SC_STREAM_ATTR);
      /* retrieve all component names */

      var elNames = (el.getAttribute(SC_ATTR) || '').trim().split(SPLIT_REGEX);
      var elNamesSize = elNames.length;

      for (var j = 0, name; j < elNamesSize; j += 1) {
        name = elNames[j];
        /* add rehydrated name to sheet to avoid re-adding styles */

        this.rehydratedNames[name] = true;
      }
      /* extract all components and their CSS */


      extracted.push.apply(extracted, extractComps(el.textContent));
      /* store original HTMLStyleElement */

      els.push(el);
    }
    /* abort rehydration if nothing was extracted */


    var extractedSize = extracted.length;
    if (!extractedSize) return this;
    /* create a tag to be used for rehydration */

    var tag = this.makeTag(null);
    rehydrate(tag, els, extracted);
    /* reset capacity and adjust MAX_SIZE by the initial size of the rehydration */

    this.capacity = Math.max(1, MAX_SIZE - extractedSize);
    this.tags.push(tag);
    /* retrieve all component ids */

    for (var _j = 0; _j < extractedSize; _j += 1) {
      this.tagMap[extracted[_j].componentId] = tag;
    }

    return this;
  };
  /* retrieve a "master" instance of StyleSheet which is typically used when no other is available
   * The master StyleSheet is targeted by createGlobalStyle, keyframes, and components outside of any
    * StyleSheetManager's context */

  /* reset the internal "master" instance */


  StyleSheet.reset = function reset() {
    var forceServer = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
    master = new StyleSheet(undefined, forceServer).rehydrate();
  };
  /* adds "children" to the StyleSheet that inherit all of the parents' rules
   * while their own rules do not affect the parent */


  StyleSheet.prototype.clone = function clone() {
    var sheet = new StyleSheet(this.target, this.forceServer);
    /* add to clone array */

    this.clones.push(sheet);
    /* clone all tags */

    sheet.tags = this.tags.map(function (tag) {
      var ids = tag.getIds();
      var newTag = tag.clone();
      /* reconstruct tagMap */

      for (var i = 0; i < ids.length; i += 1) {
        sheet.tagMap[ids[i]] = newTag;
      }

      return newTag;
    });
    /* clone other maps */

    sheet.rehydratedNames = _extends({}, this.rehydratedNames);
    sheet.deferred = _extends({}, this.deferred);
    return sheet;
  };
  /* force StyleSheet to create a new tag on the next injection */


  StyleSheet.prototype.sealAllTags = function sealAllTags() {
    this.capacity = 1;
    this.tags.forEach(function (tag) {
      // eslint-disable-next-line no-param-reassign
      tag.sealed = true;
    });
  };

  StyleSheet.prototype.makeTag = function makeTag$$1(tag) {
    var lastEl = tag ? tag.styleTag : null;
    var insertBefore = false;
    return makeTag(this.target, lastEl, this.forceServer, insertBefore, this.getImportRuleTag);
  };
  /* get a tag for a given componentId, assign the componentId to one, or shard */


  StyleSheet.prototype.getTagForId = function getTagForId(id) {
    /* simply return a tag, when the componentId was already assigned one */
    var prev = this.tagMap[id];

    if (prev !== undefined && !prev.sealed) {
      return prev;
    }

    var tag = this.tags[this.tags.length - 1];
    /* shard (create a new tag) if the tag is exhausted (See MAX_SIZE) */

    this.capacity -= 1;

    if (this.capacity === 0) {
      this.capacity = MAX_SIZE;
      tag = this.makeTag(tag);
      this.tags.push(tag);
    }

    return this.tagMap[id] = tag;
  };
  /* mainly for createGlobalStyle to check for its id */


  StyleSheet.prototype.hasId = function hasId(id) {
    return this.tagMap[id] !== undefined;
  };
  /* caching layer checking id+name to already have a corresponding tag and injected rules */


  StyleSheet.prototype.hasNameForId = function hasNameForId(id, name) {
    /* exception for rehydrated names which are checked separately */
    if (this.ignoreRehydratedNames[id] === undefined && this.rehydratedNames[name]) {
      return true;
    }

    var tag = this.tagMap[id];
    return tag !== undefined && tag.hasNameForId(id, name);
  };
  /* registers a componentId and registers it on its tag */


  StyleSheet.prototype.deferredInject = function deferredInject(id, cssRules) {
    /* don't inject when the id is already registered */
    if (this.tagMap[id] !== undefined) return;
    var clones = this.clones;

    for (var i = 0; i < clones.length; i += 1) {
      clones[i].deferredInject(id, cssRules);
    }

    this.getTagForId(id).insertMarker(id);
    this.deferred[id] = cssRules;
  };
  /* injects rules for a given id with a name that will need to be cached */


  StyleSheet.prototype.inject = function inject(id, cssRules, name) {
    var clones = this.clones;

    for (var i = 0; i < clones.length; i += 1) {
      clones[i].inject(id, cssRules, name);
    }

    var tag = this.getTagForId(id);
    /* add deferred rules for component */

    if (this.deferred[id] !== undefined) {
      // Combine passed cssRules with previously deferred CSS rules
      // NOTE: We cannot mutate the deferred array itself as all clones
      // do the same (see clones[i].inject)
      var rules = this.deferred[id].concat(cssRules);
      tag.insertRules(id, rules, name);
      this.deferred[id] = undefined;
    } else {
      tag.insertRules(id, cssRules, name);
    }
  };
  /* removes all rules for a given id, which doesn't remove its marker but resets it */


  StyleSheet.prototype.remove = function remove(id) {
    var tag = this.tagMap[id];
    if (tag === undefined) return;
    var clones = this.clones;

    for (var i = 0; i < clones.length; i += 1) {
      clones[i].remove(id);
    }
    /* remove all rules from the tag */


    tag.removeRules(id);
    /* ignore possible rehydrated names */

    this.ignoreRehydratedNames[id] = true;
    /* delete possible deferred rules */

    this.deferred[id] = undefined;
  };

  StyleSheet.prototype.toHTML = function toHTML() {
    return this.tags.map(function (tag) {
      return tag.toHTML();
    }).join('');
  };

  StyleSheet.prototype.toReactElements = function toReactElements() {
    var id = this.id;
    return this.tags.map(function (tag, i) {
      var key = 'sc-' + id + '-' + i;
      return Object(react__WEBPACK_IMPORTED_MODULE_2__["cloneElement"])(tag.toElement(), {
        key: key
      });
    });
  };

  createClass(StyleSheet, null, [{
    key: 'master',
    get: function get$$1() {
      return master || (master = new StyleSheet().rehydrate());
    }
    /* NOTE: This is just for backwards-compatibility with jest-styled-components */

  }, {
    key: 'instance',
    get: function get$$1() {
      return StyleSheet.master;
    }
  }]);
  return StyleSheet;
}(); // 


var Keyframes = function () {
  function Keyframes(name, rules) {
    var _this = this;

    classCallCheck(this, Keyframes);

    this.inject = function (styleSheet) {
      if (!styleSheet.hasNameForId(_this.id, _this.name)) {
        styleSheet.inject(_this.id, _this.rules, _this.name);
      }
    };

    this.toString = function () {
      throw new StyledComponentsError(12, String(_this.name));
    };

    this.name = name;
    this.rules = rules;
    this.id = 'sc-keyframes-' + name;
  }

  Keyframes.prototype.getName = function getName() {
    return this.name;
  };

  return Keyframes;
}(); // 

/**
 * inlined version of
 * https://github.com/facebook/fbjs/blob/master/packages/fbjs/src/core/hyphenateStyleName.js
 */


var uppercasePattern = /([A-Z])/g;
var msPattern = /^ms-/;
/**
 * Hyphenates a camelcased CSS property name, for example:
 *
 *   > hyphenateStyleName('backgroundColor')
 *   < "background-color"
 *   > hyphenateStyleName('MozTransition')
 *   < "-moz-transition"
 *   > hyphenateStyleName('msTransition')
 *   < "-ms-transition"
 *
 * As Modernizr suggests (http://modernizr.com/docs/#prefixed), an `ms` prefix
 * is converted to `-ms-`.
 *
 * @param {string} string
 * @return {string}
 */

function hyphenateStyleName(string) {
  return string.replace(uppercasePattern, '-$1').toLowerCase().replace(msPattern, '-ms-');
} // 
// Taken from https://github.com/facebook/react/blob/b87aabdfe1b7461e7331abb3601d9e6bb27544bc/packages/react-dom/src/shared/dangerousStyleValue.js


function addUnitIfNeeded(name, value) {
  // https://github.com/amilajack/eslint-plugin-flowtype-errors/issues/133
  // $FlowFixMe
  if (value == null || typeof value === 'boolean' || value === '') {
    return '';
  }

  if (typeof value === 'number' && value !== 0 && !(name in _emotion_unitless__WEBPACK_IMPORTED_MODULE_3__["default"])) {
    return value + 'px'; // Presumes implicit 'px' suffix for unitless numbers
  }

  return String(value).trim();
} // 

/**
 * It's falsish not falsy because 0 is allowed.
 */


var isFalsish = function isFalsish(chunk) {
  return chunk === undefined || chunk === null || chunk === false || chunk === '';
};

var objToCss = function objToCss(obj, prevKey) {
  var css = Object.keys(obj).filter(function (key) {
    return !isFalsish(obj[key]);
  }).map(function (key) {
    if (isPlainObject(obj[key])) return objToCss(obj[key], key);
    return hyphenateStyleName(key) + ': ' + addUnitIfNeeded(key, obj[key]) + ';';
  }).join(' ');
  return prevKey ? prevKey + ' {\n  ' + css + '\n}' : css;
};

function flatten(chunk, executionContext, styleSheet) {
  if (Array.isArray(chunk)) {
    var ruleSet = [];

    for (var i = 0, len = chunk.length, result; i < len; i += 1) {
      result = flatten(chunk[i], executionContext, styleSheet);
      if (result === null) continue;else if (Array.isArray(result)) ruleSet.push.apply(ruleSet, result);else ruleSet.push(result);
    }

    return ruleSet;
  }

  if (isFalsish(chunk)) {
    return null;
  }
  /* Handle other components */


  if (isStyledComponent(chunk)) {
    return '.' + chunk.styledComponentId;
  }
  /* Either execute or defer the function */


  if (isFunction(chunk)) {
    if (executionContext) {
      var shouldThrow = false;

      try {
        // eslint-disable-next-line new-cap
        if (Object(react_is__WEBPACK_IMPORTED_MODULE_4__["isElement"])(new chunk(executionContext))) {
          shouldThrow = true;
        }
      } catch (e) {
        /* */
      }

      if (shouldThrow) {
        throw new StyledComponentsError(13, getComponentName(chunk));
      }

      return flatten(chunk(executionContext), executionContext, styleSheet);
    } else return chunk;
  }

  if (chunk instanceof Keyframes) {
    if (styleSheet) {
      chunk.inject(styleSheet);
      return chunk.getName();
    } else return chunk;
  }
  /* Handle objects */


  return isPlainObject(chunk) ? objToCss(chunk) : chunk.toString();
} // 


function css(styles) {
  for (var _len = arguments.length, interpolations = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    interpolations[_key - 1] = arguments[_key];
  }

  if (isFunction(styles) || isPlainObject(styles)) {
    // $FlowFixMe
    return flatten(interleave(EMPTY_ARRAY, [styles].concat(interpolations)));
  } // $FlowFixMe


  return flatten(interleave(styles, interpolations));
} // 


function constructWithOptions(componentConstructor, tag) {
  var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : EMPTY_OBJECT;

  if (!Object(react_is__WEBPACK_IMPORTED_MODULE_4__["isValidElementType"])(tag)) {
    throw new StyledComponentsError(1, String(tag));
  }
  /* This is callable directly as a template function */
  // $FlowFixMe: Not typed to avoid destructuring arguments


  var templateFunction = function templateFunction() {
    return componentConstructor(tag, options, css.apply(undefined, arguments));
  };
  /* If config methods are called, wrap up a new template function and merge options */


  templateFunction.withConfig = function (config) {
    return constructWithOptions(componentConstructor, tag, _extends({}, options, config));
  };
  /* Modify/inject new props at runtime */


  templateFunction.attrs = function (attrs) {
    return constructWithOptions(componentConstructor, tag, _extends({}, options, {
      attrs: Array.prototype.concat(options.attrs, attrs).filter(Boolean)
    }));
  };

  return templateFunction;
} // 
// Source: https://github.com/garycourt/murmurhash-js/blob/master/murmurhash2_gc.js


function murmurhash(c) {
  for (var e = c.length | 0, a = e | 0, d = 0, b; e >= 4;) {
    b = c.charCodeAt(d) & 255 | (c.charCodeAt(++d) & 255) << 8 | (c.charCodeAt(++d) & 255) << 16 | (c.charCodeAt(++d) & 255) << 24, b = 1540483477 * (b & 65535) + ((1540483477 * (b >>> 16) & 65535) << 16), b ^= b >>> 24, b = 1540483477 * (b & 65535) + ((1540483477 * (b >>> 16) & 65535) << 16), a = 1540483477 * (a & 65535) + ((1540483477 * (a >>> 16) & 65535) << 16) ^ b, e -= 4, ++d;
  }

  switch (e) {
    case 3:
      a ^= (c.charCodeAt(d + 2) & 255) << 16;

    case 2:
      a ^= (c.charCodeAt(d + 1) & 255) << 8;

    case 1:
      a ^= c.charCodeAt(d) & 255, a = 1540483477 * (a & 65535) + ((1540483477 * (a >>> 16) & 65535) << 16);
  }

  a ^= a >>> 13;
  a = 1540483477 * (a & 65535) + ((1540483477 * (a >>> 16) & 65535) << 16);
  return (a ^ a >>> 15) >>> 0;
} // 

/* eslint-disable no-bitwise */

/* This is the "capacity" of our alphabet i.e. 2x26 for all letters plus their capitalised
 * counterparts */


var charsLength = 52;
/* start at 75 for 'a' until 'z' (25) and then start at 65 for capitalised letters */

var getAlphabeticChar = function getAlphabeticChar(code) {
  return String.fromCharCode(code + (code > 25 ? 39 : 97));
};
/* input a number, usually a hash and convert it to base-52 */


function generateAlphabeticName(code) {
  var name = '';
  var x = void 0;
  /* get a char and divide by alphabet-length */

  for (x = code; x > charsLength; x = Math.floor(x / charsLength)) {
    name = getAlphabeticChar(x % charsLength) + name;
  }

  return getAlphabeticChar(x % charsLength) + name;
} // 


function hasFunctionObjectKey(obj) {
  // eslint-disable-next-line guard-for-in, no-restricted-syntax
  for (var key in obj) {
    if (isFunction(obj[key])) {
      return true;
    }
  }

  return false;
}

function isStaticRules(rules, attrs) {
  for (var i = 0; i < rules.length; i += 1) {
    var rule = rules[i]; // recursive case

    if (Array.isArray(rule) && !isStaticRules(rule, attrs)) {
      return false;
    } else if (isFunction(rule) && !isStyledComponent(rule)) {
      // functions are allowed to be static if they're just being
      // used to get the classname of a nested styled component
      return false;
    }
  }

  if (attrs.some(function (x) {
    return isFunction(x) || hasFunctionObjectKey(x);
  })) return false;
  return true;
} // 


var isHMREnabled =  true && module.hot;
/* combines hashStr (murmurhash) and nameGenerator for convenience */

var hasher = function hasher(str) {
  return generateAlphabeticName(murmurhash(str));
};
/*
 ComponentStyle is all the CSS-specific stuff, not
 the React-specific stuff.
 */


var ComponentStyle = function () {
  function ComponentStyle(rules, attrs, componentId) {
    classCallCheck(this, ComponentStyle);
    this.rules = rules;
    this.isStatic = !isHMREnabled && isStaticRules(rules, attrs);
    this.componentId = componentId;

    if (!StyleSheet.master.hasId(componentId)) {
      StyleSheet.master.deferredInject(componentId, []);
    }
  }
  /*
     * Flattens a rule set into valid CSS
     * Hashes it, wraps the whole chunk in a .hash1234 {}
     * Returns the hash to be injected on render()
     * */


  ComponentStyle.prototype.generateAndInjectStyles = function generateAndInjectStyles(executionContext, styleSheet) {
    var isStatic = this.isStatic,
        componentId = this.componentId,
        lastClassName = this.lastClassName;

    if (IS_BROWSER && isStatic && typeof lastClassName === 'string' && styleSheet.hasNameForId(componentId, lastClassName)) {
      return lastClassName;
    }

    var flatCSS = flatten(this.rules, executionContext, styleSheet);
    var name = hasher(this.componentId + flatCSS.join(''));

    if (!styleSheet.hasNameForId(componentId, name)) {
      styleSheet.inject(this.componentId, stringifyRules(flatCSS, '.' + name, undefined, componentId), name);
    }

    this.lastClassName = name;
    return name;
  };

  ComponentStyle.generateName = function generateName(str) {
    return hasher(str);
  };

  return ComponentStyle;
}(); // 


var LIMIT = 200;

var createWarnTooManyClasses = function (displayName) {
  var generatedClasses = {};
  var warningSeen = false;
  return function (className) {
    if (!warningSeen) {
      generatedClasses[className] = true;

      if (Object.keys(generatedClasses).length >= LIMIT) {
        // Unable to find latestRule in test environment.

        /* eslint-disable no-console, prefer-template */
        console.warn('Over ' + LIMIT + ' classes were generated for component ' + displayName + '. \n' + 'Consider using the attrs method, together with a style object for frequently changed styles.\n' + 'Example:\n' + '  const Component = styled.div.attrs({\n' + '    style: ({ background }) => ({\n' + '      background,\n' + '    }),\n' + '  })`width: 100%;`\n\n' + '  <Component />');
        warningSeen = true;
        generatedClasses = {};
      }
    }
  };
}; // 


var determineTheme = function (props, fallbackTheme) {
  var defaultProps = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : EMPTY_OBJECT; // Props should take precedence over ThemeProvider, which should take precedence over
  // defaultProps, but React automatically puts defaultProps on props.

  /* eslint-disable react/prop-types, flowtype-errors/show-errors */

  var isDefaultTheme = defaultProps ? props.theme === defaultProps.theme : false;
  var theme = props.theme && !isDefaultTheme ? props.theme : fallbackTheme || defaultProps.theme;
  /* eslint-enable */

  return theme;
}; // 


var escapeRegex = /[[\].#*$><+~=|^:(),"'`-]+/g;
var dashesAtEnds = /(^-|-$)/g;
/**
 * TODO: Explore using CSS.escape when it becomes more available
 * in evergreen browsers.
 */

function escape(str) {
  return str // Replace all possible CSS selectors
  .replace(escapeRegex, '-') // Remove extraneous hyphens at the start and end
  .replace(dashesAtEnds, '');
} // 


function isTag(target) {
  return typeof target === 'string' && ( true ? target.charAt(0) === target.charAt(0).toLowerCase() : undefined);
} // 


function generateDisplayName(target) {
  // $FlowFixMe
  return isTag(target) ? 'styled.' + target : 'Styled(' + getComponentName(target) + ')';
}

var _TYPE_STATICS;

var REACT_STATICS = {
  childContextTypes: true,
  contextTypes: true,
  defaultProps: true,
  displayName: true,
  getDerivedStateFromProps: true,
  propTypes: true,
  type: true
};
var KNOWN_STATICS = {
  name: true,
  length: true,
  prototype: true,
  caller: true,
  callee: true,
  arguments: true,
  arity: true
};
var TYPE_STATICS = (_TYPE_STATICS = {}, _TYPE_STATICS[react_is__WEBPACK_IMPORTED_MODULE_4__["ForwardRef"]] = {
  $$typeof: true,
  render: true
}, _TYPE_STATICS);
var defineProperty$1 = Object.defineProperty,
    getOwnPropertyNames = Object.getOwnPropertyNames,
    _Object$getOwnPropert = Object.getOwnPropertySymbols,
    getOwnPropertySymbols = _Object$getOwnPropert === undefined ? function () {
  return [];
} : _Object$getOwnPropert,
    getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor,
    getPrototypeOf = Object.getPrototypeOf,
    objectPrototype = Object.prototype;
var arrayPrototype = Array.prototype;

function hoistNonReactStatics(targetComponent, sourceComponent, blacklist) {
  if (typeof sourceComponent !== 'string') {
    // don't hoist over string (html) components
    var inheritedComponent = getPrototypeOf(sourceComponent);

    if (inheritedComponent && inheritedComponent !== objectPrototype) {
      hoistNonReactStatics(targetComponent, inheritedComponent, blacklist);
    }

    var keys = arrayPrototype.concat(getOwnPropertyNames(sourceComponent), // $FlowFixMe
    getOwnPropertySymbols(sourceComponent));
    var targetStatics = TYPE_STATICS[targetComponent.$$typeof] || REACT_STATICS;
    var sourceStatics = TYPE_STATICS[sourceComponent.$$typeof] || REACT_STATICS;
    var i = keys.length;
    var descriptor = void 0;
    var key = void 0; // eslint-disable-next-line no-plusplus

    while (i--) {
      key = keys[i];

      if ( // $FlowFixMe
      !KNOWN_STATICS[key] && !(blacklist && blacklist[key]) && !(sourceStatics && sourceStatics[key]) && // $FlowFixMe
      !(targetStatics && targetStatics[key])) {
        descriptor = getOwnPropertyDescriptor(sourceComponent, key);

        if (descriptor) {
          try {
            // Avoid failures from read-only properties
            defineProperty$1(targetComponent, key, descriptor);
          } catch (e) {
            /* fail silently */
          }
        }
      }
    }

    return targetComponent;
  }

  return targetComponent;
} // 


function isDerivedReactComponent(fn) {
  return !!(fn && fn.prototype && fn.prototype.isReactComponent);
} // 
// Helper to call a given function, only once


var once = function (cb) {
  var called = false;
  return function () {
    if (!called) {
      called = true;
      cb.apply(undefined, arguments);
    }
  };
}; // 


var ThemeContext = Object(react__WEBPACK_IMPORTED_MODULE_2__["createContext"])();
var ThemeConsumer = ThemeContext.Consumer;
/**
 * Provide a theme to an entire react component tree via context
 */

var ThemeProvider = function (_Component) {
  inherits(ThemeProvider, _Component);

  function ThemeProvider(props) {
    classCallCheck(this, ThemeProvider);

    var _this = possibleConstructorReturn(this, _Component.call(this, props));

    _this.getContext = Object(memoize_one__WEBPACK_IMPORTED_MODULE_5__["default"])(_this.getContext.bind(_this));
    _this.renderInner = _this.renderInner.bind(_this);
    return _this;
  }

  ThemeProvider.prototype.render = function render() {
    if (!this.props.children) return null;
    return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(ThemeContext.Consumer, null, this.renderInner);
  };

  ThemeProvider.prototype.renderInner = function renderInner(outerTheme) {
    var context = this.getContext(this.props.theme, outerTheme);
    return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(ThemeContext.Provider, {
      value: context
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.Children.only(this.props.children));
  };
  /**
   * Get the theme from the props, supporting both (outerTheme) => {}
   * as well as object notation
   */


  ThemeProvider.prototype.getTheme = function getTheme(theme, outerTheme) {
    if (isFunction(theme)) {
      var mergedTheme = theme(outerTheme);

      if ( true && (mergedTheme === null || Array.isArray(mergedTheme) || (typeof mergedTheme === 'undefined' ? 'undefined' : _typeof(mergedTheme)) !== 'object')) {
        throw new StyledComponentsError(7);
      }

      return mergedTheme;
    }

    if (theme === null || Array.isArray(theme) || (typeof theme === 'undefined' ? 'undefined' : _typeof(theme)) !== 'object') {
      throw new StyledComponentsError(8);
    }

    return _extends({}, outerTheme, theme);
  };

  ThemeProvider.prototype.getContext = function getContext(theme, outerTheme) {
    return this.getTheme(theme, outerTheme);
  };

  return ThemeProvider;
}(react__WEBPACK_IMPORTED_MODULE_2__["Component"]); // 


var ServerStyleSheet = function () {
  function ServerStyleSheet() {
    classCallCheck(this, ServerStyleSheet);
    /* The master sheet might be reset, so keep a reference here */

    this.masterSheet = StyleSheet.master;
    this.instance = this.masterSheet.clone();
    this.sealed = false;
  }
  /**
   * Mark the ServerStyleSheet as being fully emitted and manually GC it from the
   * StyleSheet singleton.
   */


  ServerStyleSheet.prototype.seal = function seal() {
    if (!this.sealed) {
      /* Remove sealed StyleSheets from the master sheet */
      var index = this.masterSheet.clones.indexOf(this.instance);
      this.masterSheet.clones.splice(index, 1);
      this.sealed = true;
    }
  };

  ServerStyleSheet.prototype.collectStyles = function collectStyles(children) {
    if (this.sealed) {
      throw new StyledComponentsError(2);
    }

    return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(StyleSheetManager, {
      sheet: this.instance
    }, children);
  };

  ServerStyleSheet.prototype.getStyleTags = function getStyleTags() {
    this.seal();
    return this.instance.toHTML();
  };

  ServerStyleSheet.prototype.getStyleElement = function getStyleElement() {
    this.seal();
    return this.instance.toReactElements();
  };

  ServerStyleSheet.prototype.interleaveWithNodeStream = function interleaveWithNodeStream(readableStream) {
    var _this = this;

    {
      throw new StyledComponentsError(3);
    }
    /* the tag index keeps track of which tags have already been emitted */

    var instance = this.instance;
    var instanceTagIndex = 0;
    var streamAttr = SC_STREAM_ATTR + '="true"';
    var transformer = new stream.Transform({
      transform: function appendStyleChunks(chunk,
      /* encoding */
      _, callback) {
        var tags = instance.tags;
        var html = '';
        /* retrieve html for each new style tag */

        for (; instanceTagIndex < tags.length; instanceTagIndex += 1) {
          var tag = tags[instanceTagIndex];
          html += tag.toHTML(streamAttr);
        }
        /* force our StyleSheets to emit entirely new tags */


        instance.sealAllTags();
        /* prepend style html to chunk */

        this.push(html + chunk);
        callback();
      }
    });
    readableStream.on('end', function () {
      return _this.seal();
    });
    readableStream.on('error', function (err) {
      _this.seal(); // forward the error to the transform stream


      transformer.emit('error', err);
    });
    return readableStream.pipe(transformer);
  };

  return ServerStyleSheet;
}(); // 


var StyleSheetContext = Object(react__WEBPACK_IMPORTED_MODULE_2__["createContext"])();
var StyleSheetConsumer = StyleSheetContext.Consumer;

var StyleSheetManager = function (_Component) {
  inherits(StyleSheetManager, _Component);

  function StyleSheetManager(props) {
    classCallCheck(this, StyleSheetManager);

    var _this = possibleConstructorReturn(this, _Component.call(this, props));

    _this.getContext = Object(memoize_one__WEBPACK_IMPORTED_MODULE_5__["default"])(_this.getContext);
    return _this;
  }

  StyleSheetManager.prototype.getContext = function getContext(sheet, target) {
    if (sheet) {
      return sheet;
    } else if (target) {
      return new StyleSheet(target);
    } else {
      throw new StyledComponentsError(4);
    }
  };

  StyleSheetManager.prototype.render = function render() {
    var _props = this.props,
        children = _props.children,
        sheet = _props.sheet,
        target = _props.target;
    return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(StyleSheetContext.Provider, {
      value: this.getContext(sheet, target)
    },  true ? react__WEBPACK_IMPORTED_MODULE_2___default.a.Children.only(children) : undefined);
  };

  return StyleSheetManager;
}(react__WEBPACK_IMPORTED_MODULE_2__["Component"]);

 true ? StyleSheetManager.propTypes = {
  sheet: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.instanceOf(StyleSheet), prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.instanceOf(ServerStyleSheet)]),
  target: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.shape({
    appendChild: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.func.isRequired
  })
} : undefined; // 

var didWarnAboutClassNameUsage = new Set();

var classNameUsageCheckInjector = function (target) {
  var elementClassName = '';
  var targetCDM = target.componentDidMount; // eslint-disable-next-line no-param-reassign

  target.componentDidMount = function componentDidMount() {
    if (typeof targetCDM === 'function') {
      targetCDM.call(this);
    }

    var forwardTarget = this.props.forwardedComponent.target;

    if (target.props && target.props.suppressClassNameWarning || target.attrs && target.attrs.suppressClassNameWarning || didWarnAboutClassNameUsage.has(forwardTarget)) {
      return;
    }

    didWarnAboutClassNameUsage.add(forwardTarget);
    var classNames = elementClassName.replace(/ +/g, ' ').trim().split(' '); // eslint-disable-next-line react/no-find-dom-node

    var node = react_dom__WEBPACK_IMPORTED_MODULE_7___default.a.findDOMNode(this);
    var selector = classNames.map(function (s) {
      return '.' + s;
    }).join('');

    if (node && node.nodeType === 1 && !classNames.every(function (className) {
      return node.classList && node.classList.contains(className);
    }) && !node.querySelector(selector)) {
      console.warn('It looks like you\'ve wrapped styled() around your React component (' + getComponentName(forwardTarget) + '), but the className prop is not being passed down to a child. No styles will be rendered unless className is composed within your React component.');
    }
  };

  var prevRenderInner = target.renderInner; // eslint-disable-next-line no-param-reassign

  target.renderInner = function renderInner() {
    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var element = prevRenderInner.apply(this, args);
    elementClassName = element.props.className;
    return element;
  };
}; // 


var identifiers = {};
/* We depend on components having unique IDs */

function generateId(_ComponentStyle, _displayName, parentComponentId) {
  var displayName = typeof _displayName !== 'string' ? 'sc' : escape(_displayName);
  /**
   * This ensures uniqueness if two components happen to share
   * the same displayName.
   */

  var nr = (identifiers[displayName] || 0) + 1;
  identifiers[displayName] = nr;

  var componentId = displayName + '-' + _ComponentStyle.generateName(displayName + nr);

  return parentComponentId ? parentComponentId + '-' + componentId : componentId;
} // $FlowFixMe


var StyledComponent = function (_Component) {
  inherits(StyledComponent, _Component);

  function StyledComponent() {
    classCallCheck(this, StyledComponent);

    var _this = possibleConstructorReturn(this, _Component.call(this));

    _this.attrs = {};
    _this.renderOuter = _this.renderOuter.bind(_this);
    _this.renderInner = _this.renderInner.bind(_this);

    if (true) {
      _this.warnInnerRef = once(function (displayName) {
        return (// eslint-disable-next-line no-console
          console.warn('The "innerRef" API has been removed in styled-components v4 in favor of React 16 ref forwarding, use "ref" instead like a typical component. "innerRef" was detected on component "' + displayName + '".')
        );
      });
      _this.warnAttrsFnObjectKeyDeprecated = once(function (key, displayName) {
        return (// eslint-disable-next-line no-console
          console.warn('Functions as object-form attrs({}) keys are now deprecated and will be removed in a future version of styled-components. Switch to the new attrs(props => ({})) syntax instead for easier and more powerful composition. The attrs key in question is "' + key + '" on component "' + displayName + '".')
        );
      });
      _this.warnNonStyledComponentAttrsObjectKey = once(function (key, displayName) {
        return (// eslint-disable-next-line no-console
          console.warn('It looks like you\'ve used a non styled-component as the value for the "' + key + '" prop in an object-form attrs constructor of "' + displayName + '".\n' + 'You should use the new function-form attrs constructor which avoids this issue: attrs(props => ({ yourStuff }))\n' + "To continue using the deprecated object syntax, you'll need to wrap your component prop in a function to make it available inside the styled component (you'll still get the deprecation warning though.)\n" + ('For example, { ' + key + ': () => InnerComponent } instead of { ' + key + ': InnerComponent }'))
        );
      });
    }

    if ( true && IS_BROWSER) {
      classNameUsageCheckInjector(_this);
    }

    return _this;
  }

  StyledComponent.prototype.render = function render() {
    return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(StyleSheetConsumer, null, this.renderOuter);
  };

  StyledComponent.prototype.renderOuter = function renderOuter() {
    var styleSheet = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : StyleSheet.master;
    this.styleSheet = styleSheet; // No need to subscribe a static component to theme changes, it won't change anything

    if (this.props.forwardedComponent.componentStyle.isStatic) return this.renderInner();
    return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(ThemeConsumer, null, this.renderInner);
  };

  StyledComponent.prototype.renderInner = function renderInner(theme) {
    var _props$forwardedCompo = this.props.forwardedComponent,
        componentStyle = _props$forwardedCompo.componentStyle,
        defaultProps = _props$forwardedCompo.defaultProps,
        displayName = _props$forwardedCompo.displayName,
        foldedComponentIds = _props$forwardedCompo.foldedComponentIds,
        styledComponentId = _props$forwardedCompo.styledComponentId,
        target = _props$forwardedCompo.target;
    var generatedClassName = void 0;

    if (componentStyle.isStatic) {
      generatedClassName = this.generateAndInjectStyles(EMPTY_OBJECT, this.props);
    } else if (theme !== undefined) {
      generatedClassName = this.generateAndInjectStyles(determineTheme(this.props, theme, defaultProps), this.props);
    } else {
      generatedClassName = this.generateAndInjectStyles(this.props.theme || EMPTY_OBJECT, this.props);
    }

    var elementToBeCreated = this.props.as || this.attrs.as || target;
    var isTargetTag = isTag(elementToBeCreated);
    var propsForElement = {};

    var computedProps = _extends({}, this.attrs, this.props);

    var key = void 0; // eslint-disable-next-line guard-for-in

    for (key in computedProps) {
      if ( true && key === 'innerRef' && isTargetTag) {
        this.warnInnerRef(displayName);
      }

      if (key === 'forwardedComponent' || key === 'as') continue;else if (key === 'forwardedRef') propsForElement.ref = computedProps[key];else if (!isTargetTag || Object(_emotion_is_prop_valid__WEBPACK_IMPORTED_MODULE_8__["default"])(key)) {
        // Don't pass through non HTML tags through to HTML elements
        propsForElement[key] = computedProps[key];
      }
    }

    if (this.props.style && this.attrs.style) {
      propsForElement.style = _extends({}, this.attrs.style, this.props.style);
    }

    propsForElement.className = Array.prototype.concat(foldedComponentIds, this.props.className, styledComponentId, this.attrs.className, generatedClassName).filter(Boolean).join(' ');
    return Object(react__WEBPACK_IMPORTED_MODULE_2__["createElement"])(elementToBeCreated, propsForElement);
  };

  StyledComponent.prototype.buildExecutionContext = function buildExecutionContext(theme, props, attrs) {
    var _this2 = this;

    var context = _extends({}, props, {
      theme: theme
    });

    if (!attrs.length) return context;
    this.attrs = {};
    attrs.forEach(function (attrDef) {
      var resolvedAttrDef = attrDef;
      var attrDefWasFn = false;
      var attr = void 0;
      var key = void 0;

      if (isFunction(resolvedAttrDef)) {
        // $FlowFixMe
        resolvedAttrDef = resolvedAttrDef(context);
        attrDefWasFn = true;
      }
      /* eslint-disable guard-for-in */
      // $FlowFixMe


      for (key in resolvedAttrDef) {
        attr = resolvedAttrDef[key];

        if (!attrDefWasFn) {
          if (isFunction(attr) && !isDerivedReactComponent(attr) && !isStyledComponent(attr)) {
            if (true) {
              _this2.warnAttrsFnObjectKeyDeprecated(key, props.forwardedComponent.displayName);
            }

            attr = attr(context);

            if ( true && react__WEBPACK_IMPORTED_MODULE_2___default.a.isValidElement(attr)) {
              _this2.warnNonStyledComponentAttrsObjectKey(key, props.forwardedComponent.displayName);
            }
          }
        }

        _this2.attrs[key] = attr;
        context[key] = attr;
      }
      /* eslint-enable */

    });
    return context;
  };

  StyledComponent.prototype.generateAndInjectStyles = function generateAndInjectStyles(theme, props) {
    var _props$forwardedCompo2 = props.forwardedComponent,
        attrs = _props$forwardedCompo2.attrs,
        componentStyle = _props$forwardedCompo2.componentStyle,
        warnTooManyClasses = _props$forwardedCompo2.warnTooManyClasses; // statically styled-components don't need to build an execution context object,
    // and shouldn't be increasing the number of class names

    if (componentStyle.isStatic && !attrs.length) {
      return componentStyle.generateAndInjectStyles(EMPTY_OBJECT, this.styleSheet);
    }

    var className = componentStyle.generateAndInjectStyles(this.buildExecutionContext(theme, props, attrs), this.styleSheet);
    if ( true && warnTooManyClasses) warnTooManyClasses(className);
    return className;
  };

  return StyledComponent;
}(react__WEBPACK_IMPORTED_MODULE_2__["Component"]);

function createStyledComponent(target, options, rules) {
  var isTargetStyledComp = isStyledComponent(target);
  var isClass = !isTag(target);
  var _options$displayName = options.displayName,
      displayName = _options$displayName === undefined ? generateDisplayName(target) : _options$displayName,
      _options$componentId = options.componentId,
      componentId = _options$componentId === undefined ? generateId(ComponentStyle, options.displayName, options.parentComponentId) : _options$componentId,
      _options$ParentCompon = options.ParentComponent,
      ParentComponent = _options$ParentCompon === undefined ? StyledComponent : _options$ParentCompon,
      _options$attrs = options.attrs,
      attrs = _options$attrs === undefined ? EMPTY_ARRAY : _options$attrs;
  var styledComponentId = options.displayName && options.componentId ? escape(options.displayName) + '-' + options.componentId : options.componentId || componentId; // fold the underlying StyledComponent attrs up (implicit extend)

  var finalAttrs = // $FlowFixMe
  isTargetStyledComp && target.attrs ? Array.prototype.concat(target.attrs, attrs).filter(Boolean) : attrs;
  var componentStyle = new ComponentStyle(isTargetStyledComp ? // fold the underlying StyledComponent rules up (implicit extend)
  // $FlowFixMe
  target.componentStyle.rules.concat(rules) : rules, finalAttrs, styledComponentId);
  /**
   * forwardRef creates a new interim component, which we'll take advantage of
   * instead of extending ParentComponent to create _another_ interim class
   */

  var WrappedStyledComponent = react__WEBPACK_IMPORTED_MODULE_2___default.a.forwardRef(function (props, ref) {
    return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(ParentComponent, _extends({}, props, {
      forwardedComponent: WrappedStyledComponent,
      forwardedRef: ref
    }));
  }); // $FlowFixMe

  WrappedStyledComponent.attrs = finalAttrs; // $FlowFixMe

  WrappedStyledComponent.componentStyle = componentStyle;
  WrappedStyledComponent.displayName = displayName; // $FlowFixMe

  WrappedStyledComponent.foldedComponentIds = isTargetStyledComp ? // $FlowFixMe
  Array.prototype.concat(target.foldedComponentIds, target.styledComponentId) : EMPTY_ARRAY; // $FlowFixMe

  WrappedStyledComponent.styledComponentId = styledComponentId; // fold the underlying StyledComponent target up since we folded the styles
  // $FlowFixMe

  WrappedStyledComponent.target = isTargetStyledComp ? target.target : target; // $FlowFixMe

  WrappedStyledComponent.withComponent = function withComponent(tag) {
    var previousComponentId = options.componentId,
        optionsToCopy = objectWithoutProperties(options, ['componentId']);
    var newComponentId = previousComponentId && previousComponentId + '-' + (isTag(tag) ? tag : escape(getComponentName(tag)));

    var newOptions = _extends({}, optionsToCopy, {
      attrs: finalAttrs,
      componentId: newComponentId,
      ParentComponent: ParentComponent
    });

    return createStyledComponent(tag, newOptions, rules);
  };

  if (true) {
    // $FlowFixMe
    WrappedStyledComponent.warnTooManyClasses = createWarnTooManyClasses(displayName);
  } // $FlowFixMe


  WrappedStyledComponent.toString = function () {
    return '.' + WrappedStyledComponent.styledComponentId;
  };

  if (isClass) {
    hoistNonReactStatics(WrappedStyledComponent, target, {
      // all SC-specific things should not be hoisted
      attrs: true,
      componentStyle: true,
      displayName: true,
      foldedComponentIds: true,
      styledComponentId: true,
      target: true,
      withComponent: true
    });
  }

  return WrappedStyledComponent;
} // 
// Thanks to ReactDOMFactories for this handy list!


var domElements = ['a', 'abbr', 'address', 'area', 'article', 'aside', 'audio', 'b', 'base', 'bdi', 'bdo', 'big', 'blockquote', 'body', 'br', 'button', 'canvas', 'caption', 'cite', 'code', 'col', 'colgroup', 'data', 'datalist', 'dd', 'del', 'details', 'dfn', 'dialog', 'div', 'dl', 'dt', 'em', 'embed', 'fieldset', 'figcaption', 'figure', 'footer', 'form', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'head', 'header', 'hgroup', 'hr', 'html', 'i', 'iframe', 'img', 'input', 'ins', 'kbd', 'keygen', 'label', 'legend', 'li', 'link', 'main', 'map', 'mark', 'marquee', 'menu', 'menuitem', 'meta', 'meter', 'nav', 'noscript', 'object', 'ol', 'optgroup', 'option', 'output', 'p', 'param', 'picture', 'pre', 'progress', 'q', 'rp', 'rt', 'ruby', 's', 'samp', 'script', 'section', 'select', 'small', 'source', 'span', 'strong', 'style', 'sub', 'summary', 'sup', 'table', 'tbody', 'td', 'textarea', 'tfoot', 'th', 'thead', 'time', 'title', 'tr', 'track', 'u', 'ul', 'var', 'video', 'wbr', // SVG
'circle', 'clipPath', 'defs', 'ellipse', 'foreignObject', 'g', 'image', 'line', 'linearGradient', 'mask', 'path', 'pattern', 'polygon', 'polyline', 'radialGradient', 'rect', 'stop', 'svg', 'text', 'tspan']; // 

var styled = function styled(tag) {
  return constructWithOptions(createStyledComponent, tag);
}; // Shorthands for all valid HTML Elements


domElements.forEach(function (domElement) {
  styled[domElement] = styled(domElement);
}); // 

var GlobalStyle = function () {
  function GlobalStyle(rules, componentId) {
    classCallCheck(this, GlobalStyle);
    this.rules = rules;
    this.componentId = componentId;
    this.isStatic = isStaticRules(rules, EMPTY_ARRAY);

    if (!StyleSheet.master.hasId(componentId)) {
      StyleSheet.master.deferredInject(componentId, []);
    }
  }

  GlobalStyle.prototype.createStyles = function createStyles(executionContext, styleSheet) {
    var flatCSS = flatten(this.rules, executionContext, styleSheet);
    var css = stringifyRules(flatCSS, '');
    styleSheet.inject(this.componentId, css);
  };

  GlobalStyle.prototype.removeStyles = function removeStyles(styleSheet) {
    var componentId = this.componentId;

    if (styleSheet.hasId(componentId)) {
      styleSheet.remove(componentId);
    }
  }; // TODO: overwrite in-place instead of remove+create?


  GlobalStyle.prototype.renderStyles = function renderStyles(executionContext, styleSheet) {
    this.removeStyles(styleSheet);
    this.createStyles(executionContext, styleSheet);
  };

  return GlobalStyle;
}(); // 
// place our cache into shared context so it'll persist between HMRs


if (IS_BROWSER) {
  window.scCGSHMRCache = {};
}

function createGlobalStyle(strings) {
  for (var _len = arguments.length, interpolations = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    interpolations[_key - 1] = arguments[_key];
  }

  var rules = css.apply(undefined, [strings].concat(interpolations));
  var id = 'sc-global-' + murmurhash(JSON.stringify(rules));
  var style = new GlobalStyle(rules, id);

  var GlobalStyleComponent = function (_React$Component) {
    inherits(GlobalStyleComponent, _React$Component);

    function GlobalStyleComponent() {
      classCallCheck(this, GlobalStyleComponent);

      var _this = possibleConstructorReturn(this, _React$Component.call(this));

      var _this$constructor = _this.constructor,
          globalStyle = _this$constructor.globalStyle,
          styledComponentId = _this$constructor.styledComponentId;

      if (IS_BROWSER) {
        window.scCGSHMRCache[styledComponentId] = (window.scCGSHMRCache[styledComponentId] || 0) + 1;
      }
      /**
       * This fixes HMR compatibility. Don't ask me why, but this combination of
       * caching the closure variables via statics and then persisting the statics in
       * state works across HMR where no other combination did. ¯\_(ツ)_/¯
       */


      _this.state = {
        globalStyle: globalStyle,
        styledComponentId: styledComponentId
      };
      return _this;
    }

    GlobalStyleComponent.prototype.componentWillUnmount = function componentWillUnmount() {
      if (window.scCGSHMRCache[this.state.styledComponentId]) {
        window.scCGSHMRCache[this.state.styledComponentId] -= 1;
      }
      /**
       * Depending on the order "render" is called this can cause the styles to be lost
       * until the next render pass of the remaining instance, which may
       * not be immediate.
       */


      if (window.scCGSHMRCache[this.state.styledComponentId] === 0) {
        this.state.globalStyle.removeStyles(this.styleSheet);
      }
    };

    GlobalStyleComponent.prototype.render = function render() {
      var _this2 = this;

      if ( true && react__WEBPACK_IMPORTED_MODULE_2___default.a.Children.count(this.props.children)) {
        // eslint-disable-next-line no-console
        console.warn('The global style component ' + this.state.styledComponentId + ' was given child JSX. createGlobalStyle does not render children.');
      }

      return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(StyleSheetConsumer, null, function (styleSheet) {
        _this2.styleSheet = styleSheet || StyleSheet.master;
        var globalStyle = _this2.state.globalStyle;

        if (globalStyle.isStatic) {
          globalStyle.renderStyles(STATIC_EXECUTION_CONTEXT, _this2.styleSheet);
          return null;
        } else {
          return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(ThemeConsumer, null, function (theme) {
            // $FlowFixMe
            var defaultProps = _this2.constructor.defaultProps;

            var context = _extends({}, _this2.props);

            if (typeof theme !== 'undefined') {
              context.theme = determineTheme(_this2.props, theme, defaultProps);
            }

            globalStyle.renderStyles(context, _this2.styleSheet);
            return null;
          });
        }
      });
    };

    return GlobalStyleComponent;
  }(react__WEBPACK_IMPORTED_MODULE_2___default.a.Component);

  GlobalStyleComponent.globalStyle = style;
  GlobalStyleComponent.styledComponentId = id;
  return GlobalStyleComponent;
} // 


var replaceWhitespace = function replaceWhitespace(str) {
  return str.replace(/\s|\\n/g, '');
};

function keyframes(strings) {
  /* Warning if you've used keyframes on React Native */
  if ( true && typeof navigator !== 'undefined' && navigator.product === 'ReactNative') {
    console.warn('`keyframes` cannot be used on ReactNative, only on the web. To do animation in ReactNative please use Animated.');
  }

  for (var _len = arguments.length, interpolations = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    interpolations[_key - 1] = arguments[_key];
  }

  var rules = css.apply(undefined, [strings].concat(interpolations));
  var name = generateAlphabeticName(murmurhash(replaceWhitespace(JSON.stringify(rules))));
  return new Keyframes(name, stringifyRules(rules, name, '@keyframes'));
} // 


var withTheme = function (Component$$1) {
  var WithTheme = react__WEBPACK_IMPORTED_MODULE_2___default.a.forwardRef(function (props, ref) {
    return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(ThemeConsumer, null, function (theme) {
      // $FlowFixMe
      var defaultProps = Component$$1.defaultProps;
      var themeProp = determineTheme(props, theme, defaultProps);

      if ( true && themeProp === undefined) {
        // eslint-disable-next-line no-console
        console.warn('[withTheme] You are not using a ThemeProvider nor passing a theme prop or a theme in defaultProps in component class "' + getComponentName(Component$$1) + '"');
      }

      return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Component$$1, _extends({}, props, {
        theme: themeProp,
        ref: ref
      }));
    });
  });
  hoistNonReactStatics(WithTheme, Component$$1);
  WithTheme.displayName = 'WithTheme(' + getComponentName(Component$$1) + ')';
  return WithTheme;
}; // 

/* eslint-disable */


var __DO_NOT_USE_OR_YOU_WILL_BE_HAUNTED_BY_SPOOKY_GHOSTS = {
  StyleSheet: StyleSheet
}; // 

/* Warning if you've imported this file on React Native */

if ( true && typeof navigator !== 'undefined' && navigator.product === 'ReactNative') {
  // eslint-disable-next-line no-console
  console.warn("It looks like you've imported 'styled-components' on React Native.\n" + "Perhaps you're looking to import 'styled-components/native'?\n" + 'Read more about this at https://www.styled-components.com/docs/basics#react-native');
}
/* Warning if there are several instances of styled-components */


if ( true && typeof window !== 'undefined' && typeof navigator !== 'undefined' && typeof navigator.userAgent === 'string' && navigator.userAgent.indexOf('Node.js') === -1 && navigator.userAgent.indexOf('jsdom') === -1) {
  window['__styled-components-init__'] = window['__styled-components-init__'] || 0;

  if (window['__styled-components-init__'] === 1) {
    // eslint-disable-next-line no-console
    console.warn("It looks like there are several instances of 'styled-components' initialized in this application. " + 'This may cause dynamic styles not rendering properly, errors happening during rehydration process ' + 'and makes your application bigger without a good reason.\n\n' + 'See https://s-c.sh/2BAXzed for more info.');
  }

  window['__styled-components-init__'] += 1;
} //


/* harmony default export */ __webpack_exports__["default"] = (styled);

;
/* eslint-disable global-require, import/no-unresolved */

(function register() {
  /* react-hot-loader/webpack */
  var reactHotLoader = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").default;

  if (!reactHotLoader) {
    return;
  }
  /* eslint-disable camelcase, no-undef */


  var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : exports;
  /* eslint-enable camelcase, no-undef */

  if (typeof webpackExports === 'function') {
    reactHotLoader.register(webpackExports, 'module.exports', "/Users/davidlee/WebstormProjects/occ-react-component/node_modules/styled-components/dist/styled-components.browser.esm.js");
    return;
  }
  /* eslint-disable no-restricted-syntax */


  for (var key in webpackExports) {
    /* eslint-enable no-restricted-syntax */
    if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) {
      continue;
    }

    var namedExport = void 0;

    try {
      namedExport = webpackExports[key];
    } catch (err) {
      continue;
    }

    reactHotLoader.register(namedExport, key, "/Users/davidlee/WebstormProjects/occ-react-component/node_modules/styled-components/dist/styled-components.browser.esm.js");
  }
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node-libs-browser/node_modules/process/browser.js */ "./node_modules/node-libs-browser/node_modules/process/browser.js")))

/***/ }),

/***/ "./node_modules/stylis-rule-sheet/index.js":
/*!*************************************************!*\
  !*** ./node_modules/stylis-rule-sheet/index.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

(function (factory) {
   true ? module['exports'] = factory() : undefined;
})(function () {
  'use strict';

  return function (insertRule) {
    var delimiter = '/*|*/';
    var needle = delimiter + '}';

    function toSheet(block) {
      if (block) try {
        insertRule(block + '}');
      } catch (e) {}
    }

    return function ruleSheet(context, content, selectors, parents, line, column, length, ns, depth, at) {
      switch (context) {
        // property
        case 1:
          // @import
          if (depth === 0 && content.charCodeAt(0) === 64) return insertRule(content + ';'), '';
          break;
        // selector

        case 2:
          if (ns === 0) return content + delimiter;
          break;
        // at-rule

        case 3:
          switch (ns) {
            // @font-face, @page
            case 102:
            case 112:
              return insertRule(selectors[0] + content), '';

            default:
              return content + (at === 0 ? delimiter : '');
          }

        case -2:
          content.split(needle).forEach(toSheet);
      }
    };
  };
});
/* eslint-disable global-require, import/no-unresolved */


(function register() {
  /* react-hot-loader/webpack */
  var reactHotLoader = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").default;

  if (!reactHotLoader) {
    return;
  }
  /* eslint-disable camelcase, no-undef */


  var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : exports;
  /* eslint-enable camelcase, no-undef */

  if (typeof webpackExports === 'function') {
    reactHotLoader.register(webpackExports, 'module.exports', "/Users/davidlee/WebstormProjects/occ-react-component/node_modules/stylis-rule-sheet/index.js");
    return;
  }
  /* eslint-disable no-restricted-syntax */


  for (var key in webpackExports) {
    /* eslint-enable no-restricted-syntax */
    if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) {
      continue;
    }

    var namedExport = void 0;

    try {
      namedExport = webpackExports[key];
    } catch (err) {
      continue;
    }

    reactHotLoader.register(namedExport, key, "/Users/davidlee/WebstormProjects/occ-react-component/node_modules/stylis-rule-sheet/index.js");
  }
})();

/***/ }),

/***/ "./node_modules/stylis/stylis.min.js":
/*!*******************************************!*\
  !*** ./node_modules/stylis/stylis.min.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

!function (e) {
   true ? module.exports = e(null) : undefined;
}(function e(a) {
  "use strict";

  var r = /^\0+/g,
      c = /[\0\r\f]/g,
      s = /: */g,
      t = /zoo|gra/,
      i = /([,: ])(transform)/g,
      f = /,+\s*(?![^(]*[)])/g,
      n = / +\s*(?![^(]*[)])/g,
      l = / *[\0] */g,
      o = /,\r+?/g,
      h = /([\t\r\n ])*\f?&/g,
      u = /:global\(((?:[^\(\)\[\]]*|\[.*\]|\([^\(\)]*\))*)\)/g,
      d = /\W+/g,
      b = /@(k\w+)\s*(\S*)\s*/,
      p = /::(place)/g,
      k = /:(read-only)/g,
      g = /\s+(?=[{\];=:>])/g,
      A = /([[}=:>])\s+/g,
      C = /(\{[^{]+?);(?=\})/g,
      w = /\s{2,}/g,
      v = /([^\(])(:+) */g,
      m = /[svh]\w+-[tblr]{2}/,
      x = /\(\s*(.*)\s*\)/g,
      $ = /([\s\S]*?);/g,
      y = /-self|flex-/g,
      O = /[^]*?(:[rp][el]a[\w-]+)[^]*/,
      j = /stretch|:\s*\w+\-(?:conte|avail)/,
      z = /([^-])(image-set\()/,
      N = "-webkit-",
      S = "-moz-",
      F = "-ms-",
      W = 59,
      q = 125,
      B = 123,
      D = 40,
      E = 41,
      G = 91,
      H = 93,
      I = 10,
      J = 13,
      K = 9,
      L = 64,
      M = 32,
      P = 38,
      Q = 45,
      R = 95,
      T = 42,
      U = 44,
      V = 58,
      X = 39,
      Y = 34,
      Z = 47,
      _ = 62,
      ee = 43,
      ae = 126,
      re = 0,
      ce = 12,
      se = 11,
      te = 107,
      ie = 109,
      fe = 115,
      ne = 112,
      le = 111,
      oe = 105,
      he = 99,
      ue = 100,
      de = 112,
      be = 1,
      pe = 1,
      ke = 0,
      ge = 1,
      Ae = 1,
      Ce = 1,
      we = 0,
      ve = 0,
      me = 0,
      xe = [],
      $e = [],
      ye = 0,
      Oe = null,
      je = -2,
      ze = -1,
      Ne = 0,
      Se = 1,
      Fe = 2,
      We = 3,
      qe = 0,
      Be = 1,
      De = "",
      Ee = "",
      Ge = "";

  function He(e, a, s, t, i) {
    for (var f, n, o = 0, h = 0, u = 0, d = 0, g = 0, A = 0, C = 0, w = 0, m = 0, $ = 0, y = 0, O = 0, j = 0, z = 0, R = 0, we = 0, $e = 0, Oe = 0, je = 0, ze = s.length, Je = ze - 1, Re = "", Te = "", Ue = "", Ve = "", Xe = "", Ye = ""; R < ze;) {
      if (C = s.charCodeAt(R), R === Je) if (h + d + u + o !== 0) {
        if (0 !== h) C = h === Z ? I : Z;
        d = u = o = 0, ze++, Je++;
      }

      if (h + d + u + o === 0) {
        if (R === Je) {
          if (we > 0) Te = Te.replace(c, "");

          if (Te.trim().length > 0) {
            switch (C) {
              case M:
              case K:
              case W:
              case J:
              case I:
                break;

              default:
                Te += s.charAt(R);
            }

            C = W;
          }
        }

        if (1 === $e) switch (C) {
          case B:
          case q:
          case W:
          case Y:
          case X:
          case D:
          case E:
          case U:
            $e = 0;

          case K:
          case J:
          case I:
          case M:
            break;

          default:
            for ($e = 0, je = R, g = C, R--, C = W; je < ze;) switch (s.charCodeAt(je++)) {
              case I:
              case J:
              case W:
                ++R, C = g, je = ze;
                break;

              case V:
                if (we > 0) ++R, C = g;

              case B:
                je = ze;
            }

        }

        switch (C) {
          case B:
            for (g = (Te = Te.trim()).charCodeAt(0), y = 1, je = ++R; R < ze;) {
              switch (C = s.charCodeAt(R)) {
                case B:
                  y++;
                  break;

                case q:
                  y--;
                  break;

                case Z:
                  switch (A = s.charCodeAt(R + 1)) {
                    case T:
                    case Z:
                      R = Qe(A, R, Je, s);
                  }

                  break;

                case G:
                  C++;

                case D:
                  C++;

                case Y:
                case X:
                  for (; R++ < Je && s.charCodeAt(R) !== C;);

              }

              if (0 === y) break;
              R++;
            }

            if (Ue = s.substring(je, R), g === re) g = (Te = Te.replace(r, "").trim()).charCodeAt(0);

            switch (g) {
              case L:
                if (we > 0) Te = Te.replace(c, "");

                switch (A = Te.charCodeAt(1)) {
                  case ue:
                  case ie:
                  case fe:
                  case Q:
                    f = a;
                    break;

                  default:
                    f = xe;
                }

                if (je = (Ue = He(a, f, Ue, A, i + 1)).length, me > 0 && 0 === je) je = Te.length;
                if (ye > 0) if (f = Ie(xe, Te, Oe), n = Pe(We, Ue, f, a, pe, be, je, A, i, t), Te = f.join(""), void 0 !== n) if (0 === (je = (Ue = n.trim()).length)) A = 0, Ue = "";
                if (je > 0) switch (A) {
                  case fe:
                    Te = Te.replace(x, Me);

                  case ue:
                  case ie:
                  case Q:
                    Ue = Te + "{" + Ue + "}";
                    break;

                  case te:
                    if (Ue = (Te = Te.replace(b, "$1 $2" + (Be > 0 ? De : ""))) + "{" + Ue + "}", 1 === Ae || 2 === Ae && Le("@" + Ue, 3)) Ue = "@" + N + Ue + "@" + Ue;else Ue = "@" + Ue;
                    break;

                  default:
                    if (Ue = Te + Ue, t === de) Ve += Ue, Ue = "";
                } else Ue = "";
                break;

              default:
                Ue = He(a, Ie(a, Te, Oe), Ue, t, i + 1);
            }

            Xe += Ue, O = 0, $e = 0, z = 0, we = 0, Oe = 0, j = 0, Te = "", Ue = "", C = s.charCodeAt(++R);
            break;

          case q:
          case W:
            if ((je = (Te = (we > 0 ? Te.replace(c, "") : Te).trim()).length) > 1) {
              if (0 === z) if ((g = Te.charCodeAt(0)) === Q || g > 96 && g < 123) je = (Te = Te.replace(" ", ":")).length;
              if (ye > 0) if (void 0 !== (n = Pe(Se, Te, a, e, pe, be, Ve.length, t, i, t))) if (0 === (je = (Te = n.trim()).length)) Te = "\0\0";

              switch (g = Te.charCodeAt(0), A = Te.charCodeAt(1), g) {
                case re:
                  break;

                case L:
                  if (A === oe || A === he) {
                    Ye += Te + s.charAt(R);
                    break;
                  }

                default:
                  if (Te.charCodeAt(je - 1) === V) break;
                  Ve += Ke(Te, g, A, Te.charCodeAt(2));
              }
            }

            O = 0, $e = 0, z = 0, we = 0, Oe = 0, Te = "", C = s.charCodeAt(++R);
        }
      }

      switch (C) {
        case J:
        case I:
          if (h + d + u + o + ve === 0) switch ($) {
            case E:
            case X:
            case Y:
            case L:
            case ae:
            case _:
            case T:
            case ee:
            case Z:
            case Q:
            case V:
            case U:
            case W:
            case B:
            case q:
              break;

            default:
              if (z > 0) $e = 1;
          }
          if (h === Z) h = 0;else if (ge + O === 0 && t !== te && Te.length > 0) we = 1, Te += "\0";
          if (ye * qe > 0) Pe(Ne, Te, a, e, pe, be, Ve.length, t, i, t);
          be = 1, pe++;
          break;

        case W:
        case q:
          if (h + d + u + o === 0) {
            be++;
            break;
          }

        default:
          switch (be++, Re = s.charAt(R), C) {
            case K:
            case M:
              if (d + o + h === 0) switch (w) {
                case U:
                case V:
                case K:
                case M:
                  Re = "";
                  break;

                default:
                  if (C !== M) Re = " ";
              }
              break;

            case re:
              Re = "\\0";
              break;

            case ce:
              Re = "\\f";
              break;

            case se:
              Re = "\\v";
              break;

            case P:
              if (d + h + o === 0 && ge > 0) Oe = 1, we = 1, Re = "\f" + Re;
              break;

            case 108:
              if (d + h + o + ke === 0 && z > 0) switch (R - z) {
                case 2:
                  if (w === ne && s.charCodeAt(R - 3) === V) ke = w;

                case 8:
                  if (m === le) ke = m;
              }
              break;

            case V:
              if (d + h + o === 0) z = R;
              break;

            case U:
              if (h + u + d + o === 0) we = 1, Re += "\r";
              break;

            case Y:
            case X:
              if (0 === h) d = d === C ? 0 : 0 === d ? C : d;
              break;

            case G:
              if (d + h + u === 0) o++;
              break;

            case H:
              if (d + h + u === 0) o--;
              break;

            case E:
              if (d + h + o === 0) u--;
              break;

            case D:
              if (d + h + o === 0) {
                if (0 === O) switch (2 * w + 3 * m) {
                  case 533:
                    break;

                  default:
                    y = 0, O = 1;
                }
                u++;
              }

              break;

            case L:
              if (h + u + d + o + z + j === 0) j = 1;
              break;

            case T:
            case Z:
              if (d + o + u > 0) break;

              switch (h) {
                case 0:
                  switch (2 * C + 3 * s.charCodeAt(R + 1)) {
                    case 235:
                      h = Z;
                      break;

                    case 220:
                      je = R, h = T;
                  }

                  break;

                case T:
                  if (C === Z && w === T && je + 2 !== R) {
                    if (33 === s.charCodeAt(je + 2)) Ve += s.substring(je, R + 1);
                    Re = "", h = 0;
                  }

              }

          }

          if (0 === h) {
            if (ge + d + o + j === 0 && t !== te && C !== W) switch (C) {
              case U:
              case ae:
              case _:
              case ee:
              case E:
              case D:
                if (0 === O) {
                  switch (w) {
                    case K:
                    case M:
                    case I:
                    case J:
                      Re += "\0";
                      break;

                    default:
                      Re = "\0" + Re + (C === U ? "" : "\0");
                  }

                  we = 1;
                } else switch (C) {
                  case D:
                    if (z + 7 === R && 108 === w) z = 0;
                    O = ++y;
                    break;

                  case E:
                    if (0 == (O = --y)) we = 1, Re += "\0";
                }

                break;

              case K:
              case M:
                switch (w) {
                  case re:
                  case B:
                  case q:
                  case W:
                  case U:
                  case ce:
                  case K:
                  case M:
                  case I:
                  case J:
                    break;

                  default:
                    if (0 === O) we = 1, Re += "\0";
                }

            }
            if (Te += Re, C !== M && C !== K) $ = C;
          }

      }

      m = w, w = C, R++;
    }

    if (je = Ve.length, me > 0) if (0 === je && 0 === Xe.length && 0 === a[0].length == false) if (t !== ie || 1 === a.length && (ge > 0 ? Ee : Ge) === a[0]) je = a.join(",").length + 2;

    if (je > 0) {
      if (f = 0 === ge && t !== te ? function (e) {
        for (var a, r, s = 0, t = e.length, i = Array(t); s < t; ++s) {
          for (var f = e[s].split(l), n = "", o = 0, h = 0, u = 0, d = 0, b = f.length; o < b; ++o) {
            if (0 === (h = (r = f[o]).length) && b > 1) continue;
            if (u = n.charCodeAt(n.length - 1), d = r.charCodeAt(0), a = "", 0 !== o) switch (u) {
              case T:
              case ae:
              case _:
              case ee:
              case M:
              case D:
                break;

              default:
                a = " ";
            }

            switch (d) {
              case P:
                r = a + Ee;

              case ae:
              case _:
              case ee:
              case M:
              case E:
              case D:
                break;

              case G:
                r = a + r + Ee;
                break;

              case V:
                switch (2 * r.charCodeAt(1) + 3 * r.charCodeAt(2)) {
                  case 530:
                    if (Ce > 0) {
                      r = a + r.substring(8, h - 1);
                      break;
                    }

                  default:
                    if (o < 1 || f[o - 1].length < 1) r = a + Ee + r;
                }

                break;

              case U:
                a = "";

              default:
                if (h > 1 && r.indexOf(":") > 0) r = a + r.replace(v, "$1" + Ee + "$2");else r = a + r + Ee;
            }

            n += r;
          }

          i[s] = n.replace(c, "").trim();
        }

        return i;
      }(a) : a, ye > 0) if (void 0 !== (n = Pe(Fe, Ve, f, e, pe, be, je, t, i, t)) && 0 === (Ve = n).length) return Ye + Ve + Xe;

      if (Ve = f.join(",") + "{" + Ve + "}", Ae * ke != 0) {
        if (2 === Ae && !Le(Ve, 2)) ke = 0;

        switch (ke) {
          case le:
            Ve = Ve.replace(k, ":" + S + "$1") + Ve;
            break;

          case ne:
            Ve = Ve.replace(p, "::" + N + "input-$1") + Ve.replace(p, "::" + S + "$1") + Ve.replace(p, ":" + F + "input-$1") + Ve;
        }

        ke = 0;
      }
    }

    return Ye + Ve + Xe;
  }

  function Ie(e, a, r) {
    var c = a.trim().split(o),
        s = c,
        t = c.length,
        i = e.length;

    switch (i) {
      case 0:
      case 1:
        for (var f = 0, n = 0 === i ? "" : e[0] + " "; f < t; ++f) s[f] = Je(n, s[f], r, i).trim();

        break;

      default:
        f = 0;
        var l = 0;

        for (s = []; f < t; ++f) for (var h = 0; h < i; ++h) s[l++] = Je(e[h] + " ", c[f], r, i).trim();

    }

    return s;
  }

  function Je(e, a, r, c) {
    var s = a,
        t = s.charCodeAt(0);
    if (t < 33) t = (s = s.trim()).charCodeAt(0);

    switch (t) {
      case P:
        switch (ge + c) {
          case 0:
          case 1:
            if (0 === e.trim().length) break;

          default:
            return s.replace(h, "$1" + e.trim());
        }

        break;

      case V:
        switch (s.charCodeAt(1)) {
          case 103:
            if (Ce > 0 && ge > 0) return s.replace(u, "$1").replace(h, "$1" + Ge);
            break;

          default:
            return e.trim() + s.replace(h, "$1" + e.trim());
        }

      default:
        if (r * ge > 0 && s.indexOf("\f") > 0) return s.replace(h, (e.charCodeAt(0) === V ? "" : "$1") + e.trim());
    }

    return e + s;
  }

  function Ke(e, a, r, c) {
    var l,
        o = 0,
        h = e + ";",
        u = 2 * a + 3 * r + 4 * c;
    if (944 === u) return function (e) {
      var a = e.length,
          r = e.indexOf(":", 9) + 1,
          c = e.substring(0, r).trim(),
          s = e.substring(r, a - 1).trim();

      switch (e.charCodeAt(9) * Be) {
        case 0:
          break;

        case Q:
          if (110 !== e.charCodeAt(10)) break;

        default:
          for (var t = s.split((s = "", f)), i = 0, r = 0, a = t.length; i < a; r = 0, ++i) {
            for (var l = t[i], o = l.split(n); l = o[r];) {
              var h = l.charCodeAt(0);
              if (1 === Be && (h > L && h < 90 || h > 96 && h < 123 || h === R || h === Q && l.charCodeAt(1) !== Q)) switch (isNaN(parseFloat(l)) + (-1 !== l.indexOf("("))) {
                case 1:
                  switch (l) {
                    case "infinite":
                    case "alternate":
                    case "backwards":
                    case "running":
                    case "normal":
                    case "forwards":
                    case "both":
                    case "none":
                    case "linear":
                    case "ease":
                    case "ease-in":
                    case "ease-out":
                    case "ease-in-out":
                    case "paused":
                    case "reverse":
                    case "alternate-reverse":
                    case "inherit":
                    case "initial":
                    case "unset":
                    case "step-start":
                    case "step-end":
                      break;

                    default:
                      l += De;
                  }

              }
              o[r++] = l;
            }

            s += (0 === i ? "" : ",") + o.join(" ");
          }

      }

      if (s = c + s + ";", 1 === Ae || 2 === Ae && Le(s, 1)) return N + s + s;
      return s;
    }(h);else if (0 === Ae || 2 === Ae && !Le(h, 1)) return h;

    switch (u) {
      case 1015:
        return 97 === h.charCodeAt(10) ? N + h + h : h;

      case 951:
        return 116 === h.charCodeAt(3) ? N + h + h : h;

      case 963:
        return 110 === h.charCodeAt(5) ? N + h + h : h;

      case 1009:
        if (100 !== h.charCodeAt(4)) break;

      case 969:
      case 942:
        return N + h + h;

      case 978:
        return N + h + S + h + h;

      case 1019:
      case 983:
        return N + h + S + h + F + h + h;

      case 883:
        if (h.charCodeAt(8) === Q) return N + h + h;
        if (h.indexOf("image-set(", 11) > 0) return h.replace(z, "$1" + N + "$2") + h;
        return h;

      case 932:
        if (h.charCodeAt(4) === Q) switch (h.charCodeAt(5)) {
          case 103:
            return N + "box-" + h.replace("-grow", "") + N + h + F + h.replace("grow", "positive") + h;

          case 115:
            return N + h + F + h.replace("shrink", "negative") + h;

          case 98:
            return N + h + F + h.replace("basis", "preferred-size") + h;
        }
        return N + h + F + h + h;

      case 964:
        return N + h + F + "flex-" + h + h;

      case 1023:
        if (99 !== h.charCodeAt(8)) break;
        return l = h.substring(h.indexOf(":", 15)).replace("flex-", "").replace("space-between", "justify"), N + "box-pack" + l + N + h + F + "flex-pack" + l + h;

      case 1005:
        return t.test(h) ? h.replace(s, ":" + N) + h.replace(s, ":" + S) + h : h;

      case 1e3:
        switch (o = (l = h.substring(13).trim()).indexOf("-") + 1, l.charCodeAt(0) + l.charCodeAt(o)) {
          case 226:
            l = h.replace(m, "tb");
            break;

          case 232:
            l = h.replace(m, "tb-rl");
            break;

          case 220:
            l = h.replace(m, "lr");
            break;

          default:
            return h;
        }

        return N + h + F + l + h;

      case 1017:
        if (-1 === h.indexOf("sticky", 9)) return h;

      case 975:
        switch (o = (h = e).length - 10, u = (l = (33 === h.charCodeAt(o) ? h.substring(0, o) : h).substring(e.indexOf(":", 7) + 1).trim()).charCodeAt(0) + (0 | l.charCodeAt(7))) {
          case 203:
            if (l.charCodeAt(8) < 111) break;

          case 115:
            h = h.replace(l, N + l) + ";" + h;
            break;

          case 207:
          case 102:
            h = h.replace(l, N + (u > 102 ? "inline-" : "") + "box") + ";" + h.replace(l, N + l) + ";" + h.replace(l, F + l + "box") + ";" + h;
        }

        return h + ";";

      case 938:
        if (h.charCodeAt(5) === Q) switch (h.charCodeAt(6)) {
          case 105:
            return l = h.replace("-items", ""), N + h + N + "box-" + l + F + "flex-" + l + h;

          case 115:
            return N + h + F + "flex-item-" + h.replace(y, "") + h;

          default:
            return N + h + F + "flex-line-pack" + h.replace("align-content", "").replace(y, "") + h;
        }
        break;

      case 973:
      case 989:
        if (h.charCodeAt(3) !== Q || 122 === h.charCodeAt(4)) break;

      case 931:
      case 953:
        if (true === j.test(e)) if (115 === (l = e.substring(e.indexOf(":") + 1)).charCodeAt(0)) return Ke(e.replace("stretch", "fill-available"), a, r, c).replace(":fill-available", ":stretch");else return h.replace(l, N + l) + h.replace(l, S + l.replace("fill-", "")) + h;
        break;

      case 962:
        if (h = N + h + (102 === h.charCodeAt(5) ? F + h : "") + h, r + c === 211 && 105 === h.charCodeAt(13) && h.indexOf("transform", 10) > 0) return h.substring(0, h.indexOf(";", 27) + 1).replace(i, "$1" + N + "$2") + h;
    }

    return h;
  }

  function Le(e, a) {
    var r = e.indexOf(1 === a ? ":" : "{"),
        c = e.substring(0, 3 !== a ? r : 10),
        s = e.substring(r + 1, e.length - 1);
    return Oe(2 !== a ? c : c.replace(O, "$1"), s, a);
  }

  function Me(e, a) {
    var r = Ke(a, a.charCodeAt(0), a.charCodeAt(1), a.charCodeAt(2));
    return r !== a + ";" ? r.replace($, " or ($1)").substring(4) : "(" + a + ")";
  }

  function Pe(e, a, r, c, s, t, i, f, n, l) {
    for (var o, h = 0, u = a; h < ye; ++h) switch (o = $e[h].call(Te, e, u, r, c, s, t, i, f, n, l)) {
      case void 0:
      case false:
      case true:
      case null:
        break;

      default:
        u = o;
    }

    if (u !== a) return u;
  }

  function Qe(e, a, r, c) {
    for (var s = a + 1; s < r; ++s) switch (c.charCodeAt(s)) {
      case Z:
        if (e === T) if (c.charCodeAt(s - 1) === T && a + 2 !== s) return s + 1;
        break;

      case I:
        if (e === Z) return s + 1;
    }

    return s;
  }

  function Re(e) {
    for (var a in e) {
      var r = e[a];

      switch (a) {
        case "keyframe":
          Be = 0 | r;
          break;

        case "global":
          Ce = 0 | r;
          break;

        case "cascade":
          ge = 0 | r;
          break;

        case "compress":
          we = 0 | r;
          break;

        case "semicolon":
          ve = 0 | r;
          break;

        case "preserve":
          me = 0 | r;
          break;

        case "prefix":
          if (Oe = null, !r) Ae = 0;else if ("function" != typeof r) Ae = 1;else Ae = 2, Oe = r;
      }
    }

    return Re;
  }

  function Te(a, r) {
    if (void 0 !== this && this.constructor === Te) return e(a);
    var s = a,
        t = s.charCodeAt(0);
    if (t < 33) t = (s = s.trim()).charCodeAt(0);
    if (Be > 0) De = s.replace(d, t === G ? "" : "-");
    if (t = 1, 1 === ge) Ge = s;else Ee = s;
    var i,
        f = [Ge];
    if (ye > 0) if (void 0 !== (i = Pe(ze, r, f, f, pe, be, 0, 0, 0, 0)) && "string" == typeof i) r = i;
    var n = He(xe, f, r, 0, 0);
    if (ye > 0) if (void 0 !== (i = Pe(je, n, f, f, pe, be, n.length, 0, 0, 0)) && "string" != typeof (n = i)) t = 0;
    return De = "", Ge = "", Ee = "", ke = 0, pe = 1, be = 1, we * t == 0 ? n : n.replace(c, "").replace(g, "").replace(A, "$1").replace(C, "$1").replace(w, " ");
  }

  if (Te.use = function e(a) {
    switch (a) {
      case void 0:
      case null:
        ye = $e.length = 0;
        break;

      default:
        if ("function" == typeof a) $e[ye++] = a;else if ("object" == typeof a) for (var r = 0, c = a.length; r < c; ++r) e(a[r]);else qe = 0 | !!a;
    }

    return e;
  }, Te.set = Re, void 0 !== a) Re(a);
  return Te;
});
;
/* eslint-disable global-require, import/no-unresolved */

(function register() {
  /* react-hot-loader/webpack */
  var reactHotLoader = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").default;

  if (!reactHotLoader) {
    return;
  }
  /* eslint-disable camelcase, no-undef */


  var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : exports;
  /* eslint-enable camelcase, no-undef */

  if (typeof webpackExports === 'function') {
    reactHotLoader.register(webpackExports, 'module.exports', "/Users/davidlee/WebstormProjects/occ-react-component/node_modules/stylis/stylis.min.js");
    return;
  }
  /* eslint-disable no-restricted-syntax */


  for (var key in webpackExports) {
    /* eslint-enable no-restricted-syntax */
    if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) {
      continue;
    }

    var namedExport = void 0;

    try {
      namedExport = webpackExports[key];
    } catch (err) {
      continue;
    }

    reactHotLoader.register(namedExport, key, "/Users/davidlee/WebstormProjects/occ-react-component/node_modules/stylis/stylis.min.js");
  }
})();

/***/ }),

/***/ "./node_modules/webpack/buildin/amd-define.js":
/*!***************************************!*\
  !*** (webpack)/buildin/amd-define.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function() {
	throw new Error("define cannot be used indirect");
};


/***/ }),

/***/ "./node_modules/webpack/buildin/amd-options.js":
/*!****************************************!*\
  !*** (webpack)/buildin/amd-options.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* WEBPACK VAR INJECTION */(function(__webpack_amd_options__) {/* globals __webpack_amd_options__ */
module.exports = __webpack_amd_options__;

/* WEBPACK VAR INJECTION */}.call(this, {}))

/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var g; // This works in non-strict mode

g = function () {
  return this;
}();

try {
  // This works if eval is allowed (see CSP)
  g = g || new Function("return this")();
} catch (e) {
  // This works if the window reference is available
  if (typeof window === "object") g = window;
} // g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}


module.exports = g;
;
/* eslint-disable global-require, import/no-unresolved */

(function register() {
  /* react-hot-loader/webpack */
  var reactHotLoader = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").default;

  if (!reactHotLoader) {
    return;
  }
  /* eslint-disable camelcase, no-undef */


  var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : exports;
  /* eslint-enable camelcase, no-undef */

  if (typeof webpackExports === 'function') {
    reactHotLoader.register(webpackExports, 'module.exports', "/Users/davidlee/WebstormProjects/occ-react-component/node_modules/webpack/buildin/global.js");
    return;
  }
  /* eslint-disable no-restricted-syntax */


  for (var key in webpackExports) {
    /* eslint-enable no-restricted-syntax */
    if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) {
      continue;
    }

    var namedExport = void 0;

    try {
      namedExport = webpackExports[key];
    } catch (err) {
      continue;
    }

    reactHotLoader.register(namedExport, key, "/Users/davidlee/WebstormProjects/occ-react-component/node_modules/webpack/buildin/global.js");
  }
})();

/***/ }),

/***/ "./node_modules/webpack/buildin/module.js":
/*!***********************************!*\
  !*** (webpack)/buildin/module.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = function (module) {
  if (!module.webpackPolyfill) {
    module.deprecate = function () {};

    module.paths = []; // module.parent = undefined by default

    if (!module.children) module.children = [];
    Object.defineProperty(module, "loaded", {
      enumerable: true,
      get: function () {
        return module.l;
      }
    });
    Object.defineProperty(module, "id", {
      enumerable: true,
      get: function () {
        return module.i;
      }
    });
    module.webpackPolyfill = 1;
  }

  return module;
};

;
/* eslint-disable global-require, import/no-unresolved */

(function register() {
  /* react-hot-loader/webpack */
  var reactHotLoader = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").default;

  if (!reactHotLoader) {
    return;
  }
  /* eslint-disable camelcase, no-undef */


  var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : exports;
  /* eslint-enable camelcase, no-undef */

  if (typeof webpackExports === 'function') {
    reactHotLoader.register(webpackExports, 'module.exports', "/Users/davidlee/WebstormProjects/occ-react-component/node_modules/webpack/buildin/module.js");
    return;
  }
  /* eslint-disable no-restricted-syntax */


  for (var key in webpackExports) {
    /* eslint-enable no-restricted-syntax */
    if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) {
      continue;
    }

    var namedExport = void 0;

    try {
      namedExport = webpackExports[key];
    } catch (err) {
      continue;
    }

    reactHotLoader.register(namedExport, key, "/Users/davidlee/WebstormProjects/occ-react-component/node_modules/webpack/buildin/module.js");
  }
})();

/***/ }),

/***/ "ccConstants":
/*!******************************!*\
  !*** external "ccConstants" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_ccConstants__;

/***/ }),

/***/ "ccLogger":
/*!***************************!*\
  !*** external "ccLogger" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_ccLogger__;

/***/ }),

/***/ "jquery":
/*!*************************!*\
  !*** external "jquery" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_jquery__;

/***/ }),

/***/ "knockout":
/*!***************************!*\
  !*** external "knockout" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_knockout__;

/***/ }),

/***/ "notifier":
/*!***************************!*\
  !*** external "notifier" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_notifier__;

/***/ }),

/***/ "pubsub":
/*!*************************!*\
  !*** external "pubsub" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_pubsub__;

/***/ }),

/***/ "react":
/*!**************************************************************************!*\
  !*** external "https://unpkg.com/react@16.6.3/umd/react.production.min" ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_react__;

/***/ }),

/***/ "react-dom":
/*!**********************************************************************************!*\
  !*** external "https://unpkg.com/react-dom@16.6.3/umd/react-dom.production.min" ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_react_dom__;

/***/ })

/******/ })});;