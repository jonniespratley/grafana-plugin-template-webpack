define(["app/plugins/sdk","app/core/config"], function(__WEBPACK_EXTERNAL_MODULE_3__, __WEBPACK_EXTERNAL_MODULE_5__) { return /******/ (function(modules) { // webpackBootstrap
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
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LogsPageCtrl = exports.StreamPageCtrl = exports.ConfigCtrl = exports.PanelCtrl = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _stream = __webpack_require__(1);

var _config = __webpack_require__(2);

var _sdk = __webpack_require__(3);

var _logs = __webpack_require__(4);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // will be resolved to app/plugins/sdk


var Ctrl = function (_PanelCtrl) {
  _inherits(Ctrl, _PanelCtrl);

  function Ctrl($scope, $injector) {
    _classCallCheck(this, Ctrl);

    return _possibleConstructorReturn(this, (Ctrl.__proto__ || Object.getPrototypeOf(Ctrl)).call(this, $scope, $injector));
  }

  _createClass(Ctrl, [{
    key: 'link',
    value: function link(scope, element) {}
  }]);

  return Ctrl;
}(_sdk.PanelCtrl);

Ctrl.template = "<div>Hello from <b>Template Plugin</b></div>";

exports.PanelCtrl = Ctrl;
exports.ConfigCtrl = _config.ExampleAppConfigCtrl;
exports.StreamPageCtrl = _stream.StreamPageCtrl;
exports.LogsPageCtrl = _logs.LogsPageCtrl;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var StreamPageCtrl = exports.StreamPageCtrl = function StreamPageCtrl() {
  _classCallCheck(this, StreamPageCtrl);
};

StreamPageCtrl.templateUrl = 'components/stream.html';

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ConfigCtrl = exports.ConfigCtrl = function () {
  /** @ngInject */
  function ConfigCtrl($scope, $injector, $q) {
    _classCallCheck(this, ConfigCtrl);

    this.$q = $q;
    this.enabled = false;
    this.appEditCtrl.setPostUpdateHook(this.postUpdate.bind(this));
  }

  _createClass(ConfigCtrl, [{
    key: "postUpdate",
    value: function postUpdate() {
      var _this = this;

      if (!this.appModel.enabled) {
        return this.$q.resolve();
      }
      return this.appEditCtrl.importDashboards().then(function () {
        _this.enabled = true;
        return {
          url: "plugins/raintank-kubernetes-app/page/clusters",
          message: "Kubernetes App enabled!"
        };
      });
    }
  }]);

  return ConfigCtrl;
}();

ConfigCtrl.templateUrl = 'components/config/config.html';

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_3__;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LogsPageCtrl = undefined;

var _config = __webpack_require__(5);

var _config2 = _interopRequireDefault(_config);

__webpack_require__(6);

__webpack_require__(11);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var LogsPageCtrl = exports.LogsPageCtrl = function LogsPageCtrl() {
  _classCallCheck(this, LogsPageCtrl);

  this.name = _config2.default.bootData.user.name;
  window.clippy.load('Clippy', function (agent) {

    agent.show();
    agent.moveTo(300, 300);
    agent.play('GetAttention');
    agent.speak("It looks like you're writing a plugin \n\n Would you like help?");
    agent.speak("Feel free to pass by our irc channel #grafana @ freenode");
    agent.animate();

    setInterval(function () {
      agent.animate();
    }, 30000);
  });
};

LogsPageCtrl.templateUrl = 'components/logs/logs.html';

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_5__;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(7);

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(9)(content, options);

if(content.locals) module.exports = content.locals;

if(false) {
	module.hot.accept("!!../../node_modules/css-loader/index.js!./clippy.css", function() {
		var newContent = require("!!../../node_modules/css-loader/index.js!./clippy.css");

		if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];

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
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(8)(false);
// imports


// module
exports.push([module.i, ".clippy, .clippy-balloon {\n    position: fixed;\n    z-index: 1000;\n    cursor: pointer;\n}\n\n.clippy-balloon {\n\n    background: #FFC;\n    color: black;\n    padding: 8px;\n    border: 1px solid black;\n    border-radius: 5px;\n\n}\n\n.clippy-content {\n    max-width: 200px;\n    min-width: 120px;\n    font-family: \"Microsoft Sans\", sans-serif;\n    font-size: 10pt;\n}\n\n.clippy-tip {\n    width: 10px;\n    height: 16px;\n    background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAgCAMAAAAlvKiEAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAAlQTFRF///MAAAA////52QwgAAAAAN0Uk5T//8A18oNQQAAAGxJREFUeNqs0kEOwCAIRFHn3//QTUU6xMyyxii+jQosrTPkyPEM6IN3FtzIRk1U4dFeKWQiH6pRRowMVKEmvronEynkwj0uZJgR22+YLopPSo9P34wJSamLSU7lSIWLJU7NkNomNlhqxUeAAQC+TQLZyEuJBwAAAABJRU5ErkJggg==) no-repeat;\n    position: absolute;\n}\n\n.clippy-top-left .clippy-tip {\n    top: 100%;\n    margin-top: 0px;\n    left: 100%;\n    margin-left: -50px;\n}\n\n.clippy-top-right .clippy-tip {\n    top: 100%;\n    margin-top: 0px;\n    left: 0;\n    margin-left: 50px;\n    background-position: -10px 0;\n\n}\n\n.clippy-bottom-right .clippy-tip {\n    top: 0;\n    margin-top: -16px;\n    left: 0;\n    margin-left: 50px;\n    background-position: -10px -16px;\n}\n\n.clippy-bottom-left .clippy-tip {\n    top: 0;\n    margin-top: -16px;\n    left: 100%;\n    margin-left: -50px;\n    background-position: 0px -16px;\n}\n\n", ""]);

// exports


/***/ }),
/* 8 */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
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
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),
/* 9 */
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

var	fixUrls = __webpack_require__(10);

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
	if (false) {
		return null;
	}

	return __webpack_require__.nc;
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = options.transform(obj.css);

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
/* 10 */
/***/ (function(module, exports) {


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
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
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
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
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
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// thank you Smore for this wonderful script!
// https://www.smore.com/clippy-js

;(function () {

    window.clippy = {};
    /******
     *
     *
     * @constructor
     */
    clippy.Agent = function (path, data, sounds) {
        this.path = path;

        this._queue = new clippy.Queue($.proxy(this._onQueueEmpty, this));

        this._el = $('<div class="clippy"></div>').hide();

        $(document.body).append(this._el);

        this._animator = new clippy.Animator(this._el, path, data, sounds);

        this._balloon = new clippy.Balloon(this._el);

        this._setupEvents();
    };

    clippy.Agent.prototype = {

        /**************************** API ************************************/

        /***
         *
         * @param {Number} x
         * @param {Number} y
         */
        gestureAt: function gestureAt(x, y) {
            var d = this._getDirection(x, y);
            var gAnim = 'Gesture' + d;
            var lookAnim = 'Look' + d;

            var animation = this.hasAnimation(gAnim) ? gAnim : lookAnim;
            return this.play(animation);
        },

        /***
         *
         * @param {Boolean=} fast
         *
         */
        hide: function hide(fast, callback) {
            this._hidden = true;
            var el = this._el;
            this.stop();
            if (fast) {
                this._el.hide();
                this.stop();
                this.pause();
                if (callback) callback();
                return;
            }

            return this._playInternal('Hide', function () {
                el.hide();
                this.pause();
                if (callback) callback();
            });
        },

        moveTo: function moveTo(x, y, duration) {
            var dir = this._getDirection(x, y);
            var anim = 'Move' + dir;
            if (duration === undefined) duration = 1000;

            this._addToQueue(function (complete) {
                // the simple case
                if (duration === 0) {
                    this._el.css({ top: y, left: x });
                    this.reposition();
                    complete();
                    return;
                }

                // no animations
                if (!this.hasAnimation(anim)) {
                    this._el.animate({ top: y, left: x }, duration, complete);
                    return;
                }

                var callback = $.proxy(function (name, state) {
                    // when exited, complete
                    if (state === clippy.Animator.States.EXITED) {
                        complete();
                    }
                    // if waiting,
                    if (state === clippy.Animator.States.WAITING) {
                        this._el.animate({ top: y, left: x }, duration, $.proxy(function () {
                            // after we're done with the movement, do the exit animation
                            this._animator.exitAnimation();
                        }, this));
                    }
                }, this);

                this._playInternal(anim, callback);
            }, this);
        },

        _playInternal: function _playInternal(animation, callback) {

            // if we're inside an idle animation,
            if (this._isIdleAnimation() && this._idleDfd && this._idleDfd.state() === 'pending') {
                this._idleDfd.done($.proxy(function () {
                    this._playInternal(animation, callback);
                }, this));
            }

            this._animator.showAnimation(animation, callback);
        },

        play: function play(animation, timeout, cb) {
            if (!this.hasAnimation(animation)) return false;

            if (timeout === undefined) timeout = 5000;

            this._addToQueue(function (complete) {
                var completed = false;
                // handle callback
                var callback = function callback(name, state) {
                    if (state === clippy.Animator.States.EXITED) {
                        completed = true;
                        if (cb) cb();
                        complete();
                    }
                };

                // if has timeout, register a timeout function
                if (timeout) {
                    window.setTimeout($.proxy(function () {
                        if (completed) return;
                        // exit after timeout
                        this._animator.exitAnimation();
                    }, this), timeout);
                }

                this._playInternal(animation, callback);
            }, this);

            return true;
        },

        /***
         *
         * @param {Boolean=} fast
         */
        show: function show(fast) {

            this._hidden = false;
            if (fast) {
                this._el.show();
                this.resume();
                this._onQueueEmpty();
                return;
            }

            if (this._el.css('top') === 'auto' || !this._el.css('left') === 'auto') {
                var left = $(window).width() * 0.8;
                var top = ($(window).height() + $(document).scrollTop()) * 0.8;
                this._el.css({ top: top, left: left });
            }

            this.resume();
            return this.play('Show');
        },

        /***
         *
         * @param {String} text
         */
        speak: function speak(text, hold) {
            this._addToQueue(function (complete) {
                this._balloon.speak(complete, text, hold);
            }, this);
        },

        /***
         * Close the current balloon
         */
        closeBalloon: function closeBalloon() {
            this._balloon.hide();
        },

        delay: function delay(time) {
            time = time || 250;

            this._addToQueue(function (complete) {
                this._onQueueEmpty();
                window.setTimeout(complete, time);
            });
        },

        /***
         * Skips the current animation
         */
        stopCurrent: function stopCurrent() {
            this._animator.exitAnimation();
            this._balloon.close();
        },

        stop: function stop() {
            // clear the queue
            this._queue.clear();
            this._animator.exitAnimation();
            this._balloon.hide();
        },

        /***
         *
         * @param {String} name
         * @returns {Boolean}
         */
        hasAnimation: function hasAnimation(name) {
            return this._animator.hasAnimation(name);
        },

        /***
         * Gets a list of animation names
         *
         * @return {Array.<string>}
         */
        animations: function animations() {
            return this._animator.animations();
        },

        /***
         * Play a random animation
         * @return {jQuery.Deferred}
         */
        animate: function animate() {
            var animations = this.animations();
            var anim = animations[Math.floor(Math.random() * animations.length)];
            // skip idle animations
            if (anim.indexOf('Idle') === 0) {
                return this.animate();
            }
            return this.play(anim);
        },

        /**************************** Utils ************************************/

        /***
         *
         * @param {Number} x
         * @param {Number} y
         * @return {String}
         * @private
         */
        _getDirection: function _getDirection(x, y) {
            var offset = this._el.offset();
            var h = this._el.height();
            var w = this._el.width();

            var centerX = offset.left + w / 2;
            var centerY = offset.top + h / 2;

            var a = centerY - y;
            var b = centerX - x;

            var r = Math.round(180 * Math.atan2(a, b) / Math.PI);

            // Left and Right are for the character, not the screen :-/
            if (-45 <= r && r < 45) return 'Right';
            if (45 <= r && r < 135) return 'Up';
            if (135 <= r && r <= 180 || -180 <= r && r < -135) return 'Left';
            if (-135 <= r && r < -45) return 'Down';

            // sanity check
            return 'Top';
        },

        /**************************** Queue and Idle handling ************************************/

        /***
         * Handle empty queue.
         * We need to transition the animation to an idle state
         * @private
         */
        _onQueueEmpty: function _onQueueEmpty() {
            if (this._hidden || this._isIdleAnimation()) return;
            var idleAnim = this._getIdleAnimation();
            this._idleDfd = $.Deferred();

            this._animator.showAnimation(idleAnim, $.proxy(this._onIdleComplete, this));
        },

        _onIdleComplete: function _onIdleComplete(name, state) {
            if (state === clippy.Animator.States.EXITED) {
                this._idleDfd.resolve();
            }
        },

        /***
         * Is the current animation is Idle?
         * @return {Boolean}
         * @private
         */
        _isIdleAnimation: function _isIdleAnimation() {
            var c = this._animator.currentAnimationName;
            return c && c.indexOf('Idle') === 0;
        },

        /**
         * Gets a random Idle animation
         * @return {String}
         * @private
         */
        _getIdleAnimation: function _getIdleAnimation() {
            var animations = this.animations();
            var r = [];
            for (var i = 0; i < animations.length; i++) {
                var a = animations[i];
                if (a.indexOf('Idle') === 0) {
                    r.push(a);
                }
            }

            // pick one
            var idx = Math.floor(Math.random() * r.length);
            return r[idx];
        },

        /**************************** Events ************************************/

        _setupEvents: function _setupEvents() {
            $(window).on('resize', $.proxy(this.reposition, this));

            this._el.on('mousedown', $.proxy(this._onMouseDown, this));

            this._el.on('dblclick', $.proxy(this._onDoubleClick, this));
        },

        _onDoubleClick: function _onDoubleClick() {
            if (!this.play('ClickedOn')) {
                this.animate();
            }
        },

        reposition: function reposition() {
            if (!this._el.is(':visible')) return;
            var o = this._el.offset();
            var bH = this._el.outerHeight();
            var bW = this._el.outerWidth();

            var wW = $(window).width();
            var wH = $(window).height();
            var sT = $(window).scrollTop();
            var sL = $(window).scrollLeft();

            var top = o.top - sT;
            var left = o.left - sL;
            var m = 5;
            if (top - m < 0) {
                top = m;
            } else if (top + bH + m > wH) {
                top = wH - bH - m;
            }

            if (left - m < 0) {
                left = m;
            } else if (left + bW + m > wW) {
                left = wW - bW - m;
            }

            this._el.css({ left: left, top: top });
            // reposition balloon
            this._balloon.reposition();
        },

        _onMouseDown: function _onMouseDown(e) {
            e.preventDefault();
            this._startDrag(e);
        },

        /**************************** Drag ************************************/

        _startDrag: function _startDrag(e) {
            // pause animations
            this.pause();
            this._balloon.hide(true);
            this._offset = this._calculateClickOffset(e);

            this._moveHandle = $.proxy(this._dragMove, this);
            this._upHandle = $.proxy(this._finishDrag, this);

            $(window).on('mousemove', this._moveHandle);
            $(window).on('mouseup', this._upHandle);

            this._dragUpdateLoop = window.setTimeout($.proxy(this._updateLocation, this), 10);
        },

        _calculateClickOffset: function _calculateClickOffset(e) {
            var mouseX = e.pageX;
            var mouseY = e.pageY;
            var o = this._el.offset();
            return {
                top: mouseY - o.top,
                left: mouseX - o.left
            };
        },

        _updateLocation: function _updateLocation() {
            this._el.css({ top: this._targetY, left: this._taregtX });
            this._dragUpdateLoop = window.setTimeout($.proxy(this._updateLocation, this), 10);
        },

        _dragMove: function _dragMove(e) {
            e.preventDefault();
            var x = e.clientX - this._offset.left;
            var y = e.clientY - this._offset.top;
            this._taregtX = x;
            this._targetY = y;
        },

        _finishDrag: function _finishDrag() {
            window.clearTimeout(this._dragUpdateLoop);
            // remove handles
            $(window).off('mousemove', this._moveHandle);
            $(window).off('mouseup', this._upHandle);
            // resume animations
            this._balloon.show();
            this.reposition();
            this.resume();
        },

        _addToQueue: function _addToQueue(func, scope) {
            if (scope) func = $.proxy(func, scope);
            this._queue.queue(func);
        },

        /**************************** Pause and Resume ************************************/

        pause: function pause() {
            this._animator.pause();
            this._balloon.pause();
        },

        resume: function resume() {
            this._animator.resume();
            this._balloon.resume();
        }

    };

    /******
     *
     *
     * @constructor
     */
    clippy.Animator = function (el, path, data, sounds) {
        this._el = el;
        this._data = data;
        this._path = path;
        this._currentFrameIndex = 0;
        this._currentFrame = undefined;
        this._exiting = false;
        this._currentAnimation = undefined;
        this._endCallback = undefined;
        this._started = false;
        this._sounds = {};
        this.currentAnimationName = undefined;
        this.preloadSounds(sounds);
        this._overlays = [this._el];
        var curr = this._el;

        this._setupElement(this._el);
        for (var i = 1; i < this._data.overlayCount; i++) {
            var inner = this._setupElement($('<div></div>'));

            curr.append(inner);
            this._overlays.push(inner);
            curr = inner;
        }
    };

    clippy.Animator.prototype = {
        _setupElement: function _setupElement(el) {
            var frameSize = this._data.framesize;
            el.css('display', "none");
            el.css({ width: frameSize[0], height: frameSize[1] });
            el.css('background', "url('" + this._path + "/map.png') no-repeat");

            return el;
        },

        animations: function animations() {
            var r = [];
            var d = this._data.animations;
            for (var n in d) {
                r.push(n);
            }
            return r;
        },

        preloadSounds: function preloadSounds(sounds) {

            for (var i = 0; i < this._data.sounds.length; i++) {
                var snd = this._data.sounds[i];
                var uri = sounds[snd];
                if (!uri) continue;
                this._sounds[snd] = new Audio(uri);
            }
        },
        hasAnimation: function hasAnimation(name) {
            return !!this._data.animations[name];
        },

        exitAnimation: function exitAnimation() {
            this._exiting = true;
        },

        showAnimation: function showAnimation(animationName, stateChangeCallback) {
            this._exiting = false;

            if (!this.hasAnimation(animationName)) {
                return false;
            }

            this._currentAnimation = this._data.animations[animationName];
            this.currentAnimationName = animationName;

            if (!this._started) {
                this._step();
                this._started = true;
            }

            this._currentFrameIndex = 0;
            this._currentFrame = undefined;
            this._endCallback = stateChangeCallback;

            return true;
        },

        _draw: function _draw() {
            var images = [];
            if (this._currentFrame) images = this._currentFrame.images || [];

            for (var i = 0; i < this._overlays.length; i++) {
                if (i < images.length) {
                    var xy = images[i];
                    var bg = -xy[0] + 'px ' + -xy[1] + 'px';
                    this._overlays[i].css({ 'background-position': bg, 'display': 'block' });
                } else {
                    this._overlays[i].css('display', 'none');
                }
            }
        },

        _getNextAnimationFrame: function _getNextAnimationFrame() {
            if (!this._currentAnimation) return undefined;
            // No current frame. start animation.
            if (!this._currentFrame) return 0;
            var currentFrame = this._currentFrame;
            var branching = this._currentFrame.branching;

            if (this._exiting && currentFrame.exitBranch !== undefined) {
                return currentFrame.exitBranch;
            } else if (branching) {
                var rnd = Math.random() * 100;
                for (var i = 0; i < branching.branches.length; i++) {
                    var branch = branching.branches[i];
                    if (rnd <= branch.weight) {
                        return branch.frameIndex;
                    }

                    rnd -= branch.weight;
                }
            }

            return this._currentFrameIndex + 1;
        },

        _playSound: function _playSound() {
            var s = this._currentFrame.sound;
            if (!s) return;
            var audio = this._sounds[s];
            if (audio) audio.play();
        },

        _atLastFrame: function _atLastFrame() {
            return this._currentFrameIndex >= this._currentAnimation.frames.length - 1;
        },

        _step: function _step() {
            if (!this._currentAnimation) return;
            var newFrameIndex = Math.min(this._getNextAnimationFrame(), this._currentAnimation.frames.length - 1);
            var frameChanged = !this._currentFrame || this._currentFrameIndex !== newFrameIndex;
            this._currentFrameIndex = newFrameIndex;

            // always switch frame data, unless we're at the last frame of an animation with a useExitBranching flag.
            if (!(this._atLastFrame() && this._currentAnimation.useExitBranching)) {
                this._currentFrame = this._currentAnimation.frames[this._currentFrameIndex];
            }

            this._draw();
            this._playSound();

            this._loop = window.setTimeout($.proxy(this._step, this), this._currentFrame.duration);

            // fire events if the frames changed and we reached an end
            if (this._endCallback && frameChanged && this._atLastFrame()) {
                if (this._currentAnimation.useExitBranching && !this._exiting) {
                    this._endCallback(this.currentAnimationName, clippy.Animator.States.WAITING);
                } else {
                    this._endCallback(this.currentAnimationName, clippy.Animator.States.EXITED);
                }
            }
        },

        /***
         * Pause animation execution
         */
        pause: function pause() {
            window.clearTimeout(this._loop);
        },

        /***
         * Resume animation
         */
        resume: function resume() {
            this._step();
        }
    };

    clippy.Animator.States = { WAITING: 1, EXITED: 0 };

    /******
     *
     *
     * @constructor
     */
    clippy.Balloon = function (targetEl) {
        this._targetEl = targetEl;

        this._hidden = true;
        this._setup();
    };

    clippy.Balloon.prototype = {

        WORD_SPEAK_TIME: 320,
        CLOSE_BALLOON_DELAY: 2000,

        _setup: function _setup() {

            this._balloon = $('<div class="clippy-balloon"><div class="clippy-tip"></div><div class="clippy-content"></div></div> ').hide();
            this._content = this._balloon.find('.clippy-content');

            $(document.body).append(this._balloon);
        },

        reposition: function reposition() {
            var sides = ['top-left', 'top-right', 'bottom-left', 'bottom-right'];

            for (var i = 0; i < sides.length; i++) {
                var s = sides[i];
                this._position(s);
                if (!this._isOut()) break;
            }
        },

        _BALLOON_MARGIN: 15,

        /***
         *
         * @param side
         * @private
         */
        _position: function _position(side) {
            var o = this._targetEl.offset();
            var h = this._targetEl.height();
            var w = this._targetEl.width();

            var bH = this._balloon.outerHeight();
            var bW = this._balloon.outerWidth();

            this._balloon.removeClass('clippy-top-left');
            this._balloon.removeClass('clippy-top-right');
            this._balloon.removeClass('clippy-bottom-right');
            this._balloon.removeClass('clippy-bottom-left');

            var left, top;
            switch (side) {
                case 'top-left':
                    // right side of the balloon next to the right side of the agent
                    left = o.left + w - bW;
                    top = o.top - bH - this._BALLOON_MARGIN;
                    break;
                case 'top-right':
                    // left side of the balloon next to the left side of the agent
                    left = o.left;
                    top = o.top - bH - this._BALLOON_MARGIN;
                    break;
                case 'bottom-right':
                    // right side of the balloon next to the right side of the agent
                    left = o.left;
                    top = o.top + h + this._BALLOON_MARGIN;
                    break;
                case 'bottom-left':
                    // left side of the balloon next to the left side of the agent
                    left = o.left + w - bW;
                    top = o.top + h + this._BALLOON_MARGIN;
                    break;
            }

            this._balloon.css({ top: top, left: left });
            this._balloon.addClass('clippy-' + side);
        },

        _isOut: function _isOut() {
            var o = this._balloon.offset();
            var bH = this._balloon.outerHeight();
            var bW = this._balloon.outerWidth();

            var wW = $(window).width();
            var wH = $(window).height();
            var sT = $(document).scrollTop();
            var sL = $(document).scrollLeft();

            var top = o.top - sT;
            var left = o.left - sL;
            var m = 5;
            if (top - m < 0 || left - m < 0) return true;
            if (top + bH + m > wH || left + bW + m > wW) return true;

            return false;
        },

        speak: function speak(complete, text, hold) {
            this._hidden = false;
            this.show();
            var c = this._content;
            // set height to auto
            c.height('auto');
            c.width('auto');
            // add the text
            c.text(text);
            // set height
            c.height(c.height());
            c.width(c.width());
            c.text('');
            this.reposition();

            this._complete = complete;
            this._sayWords(text, hold, complete);
        },

        show: function show() {
            if (this._hidden) return;
            this._balloon.show();
        },

        hide: function hide(fast) {
            if (fast) {
                this._balloon.hide();
                return;
            }

            this._hiding = window.setTimeout($.proxy(this._finishHideBalloon, this), this.CLOSE_BALLOON_DELAY);
        },

        _finishHideBalloon: function _finishHideBalloon() {
            if (this._active) return;
            this._balloon.hide();
            this._hidden = true;
            this._hiding = null;
        },

        _sayWords: function _sayWords(text, hold, complete) {
            this._active = true;
            this._hold = hold;
            var words = text.split(/[^\S-]/);
            var time = this.WORD_SPEAK_TIME;
            var el = this._content;
            var idx = 1;

            this._addWord = $.proxy(function () {
                if (!this._active) return;
                if (idx > words.length) {
                    this._active = false;
                    if (!this._hold) {
                        complete();
                        this.hide();
                    }
                } else {
                    el.text(words.slice(0, idx).join(' '));
                    idx++;
                    this._loop = window.setTimeout($.proxy(this._addWord, this), time);
                }
            }, this);

            this._addWord();
        },

        close: function close() {
            if (this._active) {
                this._hold = false;
            } else if (this._hold) {
                this._complete();
            }
        },

        pause: function pause() {
            window.clearTimeout(this._loop);
            if (this._hiding) {
                window.clearTimeout(this._hiding);
                this._hiding = null;
            }
        },

        resume: function resume() {
            if (this._addWord) this._addWord();
            this._hiding = window.setTimeout($.proxy(this._finishHideBalloon, this), this.CLOSE_BALLOON_DELAY);
        }

    };

    clippy.BASE_PATH = '//s3.amazonaws.com/clippy.js/Agents/';

    clippy.load = function (name, successCb, failCb) {
        var path = clippy.BASE_PATH + name;

        var mapDfd = clippy.load._loadMap(path);
        var agentDfd = clippy.load._loadAgent(name, path);
        var soundsDfd = clippy.load._loadSounds(name, path);

        var data;
        agentDfd.done(function (d) {
            data = d;
        });

        var sounds;

        soundsDfd.done(function (d) {
            sounds = d;
        });

        // wrapper to the success callback
        var cb = function cb() {
            var a = new clippy.Agent(path, data, sounds);
            successCb(a);
        };

        $.when(mapDfd, agentDfd, soundsDfd).done(cb).fail(failCb);
    };

    clippy.load._maps = {};
    clippy.load._loadMap = function (path) {
        var dfd = clippy.load._maps[path];
        if (dfd) return dfd;

        // set dfd if not defined
        dfd = clippy.load._maps[path] = $.Deferred();

        var src = path + '/map.png';
        var img = new Image();

        img.onload = dfd.resolve;
        img.onerror = dfd.reject;

        // start loading the map;
        img.setAttribute('src', src);

        return dfd.promise();
    };

    clippy.load._sounds = {};

    clippy.load._loadSounds = function (name, path) {
        var dfd = clippy.load._sounds[name];
        if (dfd) return dfd;

        // set dfd if not defined
        dfd = clippy.load._sounds[name] = $.Deferred();

        var audio = document.createElement('audio');
        var canPlayMp3 = !!audio.canPlayType && "" != audio.canPlayType('audio/mpeg');
        var canPlayOgg = !!audio.canPlayType && "" != audio.canPlayType('audio/ogg; codecs="vorbis"');

        if (!canPlayMp3 && !canPlayOgg) {
            dfd.resolve({});
        } else {
            var src = path + (canPlayMp3 ? '/sounds-mp3.js' : '/sounds-ogg.js');
            // load
            clippy.load._loadScript(src);
        }

        return dfd.promise();
    };

    clippy.load._data = {};
    clippy.load._loadAgent = function (name, path) {
        var dfd = clippy.load._data[name];
        if (dfd) return dfd;

        dfd = clippy.load._getAgentDfd(name);

        var src = path + '/agent.js';

        clippy.load._loadScript(src);

        return dfd.promise();
    };

    clippy.load._loadScript = function (src) {
        var script = document.createElement('script');
        script.setAttribute('src', src);
        script.setAttribute('async', 'async');
        script.setAttribute('type', 'text/javascript');

        document.head.appendChild(script);
    };

    clippy.load._getAgentDfd = function (name) {
        var dfd = clippy.load._data[name];
        if (!dfd) {
            dfd = clippy.load._data[name] = $.Deferred();
        }
        return dfd;
    };

    clippy.ready = function (name, data) {
        var dfd = clippy.load._getAgentDfd(name);
        dfd.resolve(data);
    };

    clippy.soundsReady = function (name, data) {
        var dfd = clippy.load._sounds[name];
        if (!dfd) {
            dfd = clippy.load._sounds[name] = $.Deferred();
        }

        dfd.resolve(data);
    };

    /******
     * Tiny Queue
     *
     * @constructor
     */
    clippy.Queue = function (onEmptyCallback) {
        this._queue = [];
        this._onEmptyCallback = onEmptyCallback;
    };

    clippy.Queue.prototype = {
        /***
         *
         * @param {function(Function)} func
         * @returns {jQuery.Deferred}
         */
        queue: function queue(func) {
            this._queue.push(func);

            if (this._queue.length === 1 && !this._active) {
                this._progressQueue();
            }
        },

        _progressQueue: function _progressQueue() {

            // stop if nothing left in queue
            if (!this._queue.length) {
                this._onEmptyCallback();
                return;
            }

            var f = this._queue.shift();
            this._active = true;

            // execute function
            var completeFunction = $.proxy(this.next, this);
            f(completeFunction);
        },

        clear: function clear() {
            this._queue = [];
        },

        next: function next() {
            this._active = false;
            this._progressQueue();
        }
    };
}).call(undefined);

/***/ })
/******/ ])});;