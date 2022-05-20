// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"src/utils/debounceFrame.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.debounceFrame = debounceFrame;

function debounceFrame(callback) {
  var nextFrameCallback = -1;
  return function () {
    cancelAnimationFrame(nextFrameCallback);
    nextFrameCallback = requestAnimationFrame(callback);
  };
}
},{}],"src/core/MyReact.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useState = exports.render = void 0;

var _debounceFrame = require("../utils/debounceFrame.js");

var MyReact = function MyReact() {
  var options = {
    currentStateKey: 0,
    renderCount: 0,
    states: [],
    root: null,
    rootComponent: null
  };

  var useState = function useState(initState) {
    var key = options.currentStateKey,
        states = options.states;
    if (states.length === key) states.push(initState);
    var state = states[key];

    var setState = function setState(newState) {
      states[key] = newState;

      _render();
    };

    options.currentStateKey += 1;
    return [state, setState];
  };

  var _render = (0, _debounceFrame.debounceFrame)(function () {
    var root = options.root,
        rootComponent = options.rootComponent;
    if (!root || !rootComponent) return;
    root.innerHTML = rootComponent();
    options.currentStateKey = 0;
    options.renderCount += 1;
  });

  var render = function render(rootComponent, root) {
    options.root = root;
    options.rootComponent = rootComponent;

    _render();
  };

  return {
    useState: useState,
    render: render
  };
};

var _MyReact = MyReact(),
    useState = _MyReact.useState,
    render = _MyReact.render;

exports.render = render;
exports.useState = useState;
},{"../utils/debounceFrame.js":"src/utils/debounceFrame.js"}],"src/images/defaultImg.png":[function(require,module,exports) {
module.exports = "/defaultImg.340e2ef0.png";
},{}],"src/images/addButton.png":[function(require,module,exports) {
module.exports = "/addButton.9a351d2a.png";
},{}],"src/pages/MainPage.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MainPage = void 0;

var _defaultImg = _interopRequireDefault(require("../images/defaultImg.png"));

var _addButton = _interopRequireDefault(require("../images/addButton.png"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var MainPage = function MainPage() {
  return "\n    <div id = 'mainpage_viewport'>\n      <div id = 'mainpage_container'>\n        <div class = 'title_wrapper'>\n          <p>\uC131\uC7A5 \uAE30\uD68C\uC758 \uD3C9\uB4F1\uC744 \uCD94\uAD6C\uD569\uB2C8\uB2E4.</p>\n        </div>\n        <div class = 'posts_wrapper'>\n\n          <div class = 'card'>\n            <div class = 'img_wrapper'>\n              <img src = ".concat(_defaultImg.default, " alt = 'defaultImg'/>\n            </div>\n            <div class = 'contents_wrapper'>\n              <p class = 'title'>Oracle SQL Database 11g PL</p>\n              <p class = 'tutor'>\uC9C0\uC2DD\uACF5\uC720\uC790400</p>\n              <p class = 'price'>\u20A9150,000</p>\n            </div>\n          </div>\n          <div class = 'card'>\n            <div class = 'img_wrapper'>\n              <img src = ").concat(_defaultImg.default, " alt = 'defaultImg'/>\n            </div>\n            <div class = 'contents_wrapper'>\n              <p class = 'title'>Oracle SQL Database 11g PL</p>\n              <p class = 'tutor'>\uC9C0\uC2DD\uACF5\uC720\uC790400</p>\n              <p class = 'price'>\u20A9150,000</p>\n            </div>\n          </div>\n          <div class = 'card'>\n            <div class = 'img_wrapper'>\n              <img src = ").concat(_defaultImg.default, " alt = 'defaultImg'/>\n            </div>\n            <div class = 'contents_wrapper'>\n              <p class = 'title'>Oracle SQL Database 11g PL</p>\n              <p class = 'tutor'>\uC9C0\uC2DD\uACF5\uC720\uC790400</p>\n              <p class = 'price'>\u20A9150,000</p>\n            </div>\n          </div>\n          <div class = 'card'>\n            <div class = 'img_wrapper'>\n              <img src = ").concat(_defaultImg.default, " alt = 'defaultImg'/>\n            </div>\n            <div class = 'contents_wrapper'>\n              <p class = 'title'>Oracle SQL Database 11g PL</p>\n              <p class = 'tutor'>\uC9C0\uC2DD\uACF5\uC720\uC790400</p>\n              <p class = 'price'>\u20A9150,000</p>\n            </div>\n            </div>\n            <div class = 'card'>\n              <div class = 'img_wrapper'>\n                <img src = ").concat(_defaultImg.default, " alt = 'defaultImg'/>\n              </div>\n              <div class = 'contents_wrapper'>\n                <p class = 'title'>Oracle SQL Database 11g PL</p>\n                <p class = 'tutor'>\uC9C0\uC2DD\uACF5\uC720\uC790400</p>\n                <p class = 'price'>\u20A9150,000</p>\n              </div>\n            </div>\n            <div class = 'card'>\n              <div class = 'img_wrapper'>\n                <img src = ").concat(_defaultImg.default, " alt = 'defaultImg'/>\n              </div>\n              <div class = 'contents_wrapper'>\n                <p class = 'title'>Oracle SQL Database 11g PL</p>\n                <p class = 'tutor'>\uC9C0\uC2DD\uACF5\uC720\uC790400</p>\n                <p class = 'price'>\u20A9150,000</p>\n              </div>\n            </div>\n            <div class = 'card'>\n            <div class = 'img_wrapper'>\n              <img src = ").concat(_defaultImg.default, " alt = 'defaultImg'/>\n            </div>\n            <div class = 'contents_wrapper'>\n              <p class = 'title'>Oracle SQL Database 11g PL</p>\n              <p class = 'tutor'>\uC9C0\uC2DD\uACF5\uC720\uC790400</p>\n              <p class = 'price'>\u20A9150,000</p>\n            </div>\n          </div>\n          <div class = 'card'>\n            <div class = 'img_wrapper'>\n              <img src = ").concat(_defaultImg.default, " alt = 'defaultImg'/>\n            </div>\n            <div class = 'contents_wrapper'>\n              <p class = 'title'>Oracle SQL Database 11g PL</p>\n              <p class = 'tutor'>\uC9C0\uC2DD\uACF5\uC720\uC790400</p>\n              <p class = 'price'>\u20A9150,000</p>\n            </div>\n          </div>\n          <div class = 'card'>\n            <div class = 'img_wrapper'>\n              <img src = ").concat(_defaultImg.default, " alt = 'defaultImg'/>\n            </div>\n            <div class = 'contents_wrapper'>\n              <p class = 'title'>Oracle SQL Database 11g PL</p>\n              <p class = 'tutor'>\uC9C0\uC2DD\uACF5\uC720\uC790400</p>\n              <p class = 'price'>\u20A9150,000</p>\n            </div>\n          </div>\n        \n        </div>\n\n        <div class = 'add_button'>\n          <img src = ").concat(_addButton.default, " alt='addButton'/>\n        </div>\n        \n      <div/>\n    </div>\n  ");
};

exports.MainPage = MainPage;
},{"../images/defaultImg.png":"src/images/defaultImg.png","../images/addButton.png":"src/images/addButton.png"}],"src/pages/DetailPage.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DetailPage = void 0;

var _defaultImg = _interopRequireDefault(require("../images/defaultImg.png"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var DetailPage = function DetailPage() {
  return "\n    <div id = 'detailpage_viewport'>\n      <div id = 'detailpage_container'>\n        <div id = 'jumbotron'>\n          <div class = 'all_wrapper'>\n            <div class = 'img_wrapper'>\n              <img src = ".concat(_defaultImg.default, " alt = 'defaultImg'/>\n            </div>\n            <div class = 'contents_wrapper'>\n              <p class = 'title'>Oracle SQL Database 11g PL Oracle SQL Database 11g PL</p>\n              <p class = 'tutor'>\uC9C0\uC2DD\uACF5\uC720\uC790400</p>\n              <p class = 'price'>\u20A9150,000</p>\n              <div class = 'button_wrapper'>\n                <button class = 'goCartButton'>\uB2F4\uAE30</button>\n                <button class = 'goBackButton'>\uB3CC\uC544\uAC00\uAE30</button>\n              </div>\n            </div>\n          </div>\n        </div>\n      <div/>\n    </div>\n  ");
};

exports.DetailPage = DetailPage;
},{"../images/defaultImg.png":"src/images/defaultImg.png"}],"src/images/logoImg.png":[function(require,module,exports) {
module.exports = "/logoImg.45c48681.png";
},{}],"src/images/searchIcon.png":[function(require,module,exports) {
module.exports = "/searchIcon.d69ccd09.png";
},{}],"src/components/Header.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Header = void 0;

var _logoImg = _interopRequireDefault(require("../images/logoImg.png"));

var _searchIcon = _interopRequireDefault(require("../images/searchIcon.png"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Header = function Header() {
  return "\n    <div id = 'header_container'>\n      <div id = 'desktop_wrapper'>\n        <div class = 'logo_wrapper'>\n          <img src = ".concat(_logoImg.default, " alt = 'logoImg'/>\n        </div>\n        <div class = 'search_box'>\n          <input placeholder = '\uBC30\uC6B0\uACE0 \uC2F6\uC740 \uC9C0\uC2DD\uC744 \uC785\uB825\uD574\uBCF4\uC138\uC694.'/>\n          <div class = 'icon_wrapper'>\n            <img src = ").concat(_searchIcon.default, " alt = 'searchIcon'/>\n          </div>\n        </div>\n      </div>\n\n      <div id = 'mobile_wrapper'>\n        <div class = 'mobile_icon_wrapper'>\n          <img src = ").concat(_searchIcon.default, " alt 'searchIcon'/>\n        </div>\n        <div class = 'mobile_logo_wrapper'>\n          <img src = ").concat(_logoImg.default, " alt 'logoImg'/>\n        </div>\n      </div>\n\n    </div>\n  ");
};

exports.Header = Header;
},{"../images/logoImg.png":"src/images/logoImg.png","../images/searchIcon.png":"src/images/searchIcon.png"}],"node_modules/parcel-bundler/src/builtins/bundle-url.js":[function(require,module,exports) {
var bundleURL = null;

function getBundleURLCached() {
  if (!bundleURL) {
    bundleURL = getBundleURL();
  }

  return bundleURL;
}

function getBundleURL() {
  // Attempt to find the URL of the current script and use that as the base URL
  try {
    throw new Error();
  } catch (err) {
    var matches = ('' + err.stack).match(/(https?|file|ftp|chrome-extension|moz-extension):\/\/[^)\n]+/g);

    if (matches) {
      return getBaseURL(matches[0]);
    }
  }

  return '/';
}

function getBaseURL(url) {
  return ('' + url).replace(/^((?:https?|file|ftp|chrome-extension|moz-extension):\/\/.+)?\/[^/]+(?:\?.*)?$/, '$1') + '/';
}

exports.getBundleURL = getBundleURLCached;
exports.getBaseURL = getBaseURL;
},{}],"node_modules/parcel-bundler/src/builtins/css-loader.js":[function(require,module,exports) {
var bundle = require('./bundle-url');

function updateLink(link) {
  var newLink = link.cloneNode();

  newLink.onload = function () {
    link.remove();
  };

  newLink.href = link.href.split('?')[0] + '?' + Date.now();
  link.parentNode.insertBefore(newLink, link.nextSibling);
}

var cssTimeout = null;

function reloadCSS() {
  if (cssTimeout) {
    return;
  }

  cssTimeout = setTimeout(function () {
    var links = document.querySelectorAll('link[rel="stylesheet"]');

    for (var i = 0; i < links.length; i++) {
      if (bundle.getBaseURL(links[i].href) === bundle.getBundleURL()) {
        updateLink(links[i]);
      }
    }

    cssTimeout = null;
  }, 50);
}

module.exports = reloadCSS;
},{"./bundle-url":"node_modules/parcel-bundler/src/builtins/bundle-url.js"}],"src/scss/main.scss":[function(require,module,exports) {
var reloadCSS = require('_css_loader');

module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"_css_loader":"node_modules/parcel-bundler/src/builtins/css-loader.js"}],"src/App.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.App = void 0;

var _MainPage = require("./pages/MainPage.js");

var _DetailPage = require("./pages/DetailPage.js");

var _Header = require("./components/Header.js");

require("./scss/main.scss");

/* Import Pages */

/* Import Components */

/* Import Style */
var App = function App() {
  return "\n  <div>\n    ".concat((0, _Header.Header)(), "\n    ").concat((0, _MainPage.MainPage)(), "\n  </div>\n");
};

exports.App = App;
},{"./pages/MainPage.js":"src/pages/MainPage.js","./pages/DetailPage.js":"src/pages/DetailPage.js","./components/Header.js":"src/components/Header.js","./scss/main.scss":"src/scss/main.scss"}],"src/main.js":[function(require,module,exports) {
"use strict";

var _MyReact = require("./core/MyReact.js");

var _App = require("./App.js");

(0, _MyReact.render)(_App.App, document.querySelector('#app'));
},{"./core/MyReact.js":"src/core/MyReact.js","./App.js":"src/App.js"}],"node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "60061" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["node_modules/parcel-bundler/src/builtins/hmr-runtime.js","src/main.js"], null)
//# sourceMappingURL=/main.1e43358e.js.map