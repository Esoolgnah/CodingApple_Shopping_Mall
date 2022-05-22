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

/*----- Import Images -----*/
var MainPage = function MainPage() {
  return "\n    <div id = 'mainpage_viewport'>\n      <div id = 'mainpage_container'>\n        <div class = 'title_wrapper'>\n          <p>\uC131\uC7A5 \uAE30\uD68C\uC758 \uD3C9\uB4F1\uC744 \uCD94\uAD6C\uD569\uB2C8\uB2E4.</p>\n        </div>\n        <div class = 'posts_wrapper'>\n\n          <div class = 'card'>\n            <div class = 'img_wrapper'>\n              <img src = ".concat(_defaultImg.default, " alt = 'defaultImg'/>\n            </div>\n            <div class = 'contents_wrapper'>\n              <p class = 'title'>Oracle SQL Database 11g PL</p>\n              <p class = 'tutor'>\uC9C0\uC2DD\uACF5\uC720\uC790400</p>\n              <p class = 'price'>\u20A9150,000</p>\n            </div>\n          </div>\n          <div class = 'card'>\n            <div class = 'img_wrapper'>\n              <img src = ").concat(_defaultImg.default, " alt = 'defaultImg'/>\n            </div>\n            <div class = 'contents_wrapper'>\n              <p class = 'title'>Oracle SQL Database 11g PL</p>\n              <p class = 'tutor'>\uC9C0\uC2DD\uACF5\uC720\uC790400</p>\n              <p class = 'price'>\u20A9150,000</p>\n            </div>\n          </div>\n          <div class = 'card'>\n            <div class = 'img_wrapper'>\n              <img src = ").concat(_defaultImg.default, " alt = 'defaultImg'/>\n            </div>\n            <div class = 'contents_wrapper'>\n              <p class = 'title'>Oracle SQL Database 11g PL</p>\n              <p class = 'tutor'>\uC9C0\uC2DD\uACF5\uC720\uC790400</p>\n              <p class = 'price'>\u20A9150,000</p>\n            </div>\n          </div>\n          <div class = 'card'>\n            <div class = 'img_wrapper'>\n              <img src = ").concat(_defaultImg.default, " alt = 'defaultImg'/>\n            </div>\n            <div class = 'contents_wrapper'>\n              <p class = 'title'>Oracle SQL Database 11g PL</p>\n              <p class = 'tutor'>\uC9C0\uC2DD\uACF5\uC720\uC790400</p>\n              <p class = 'price'>\u20A9150,000</p>\n            </div>\n          </div>\n          <div class = 'card'>\n            <div class = 'img_wrapper'>\n              <img src = ").concat(_defaultImg.default, " alt = 'defaultImg'/>\n            </div>\n            <div class = 'contents_wrapper'>\n              <p class = 'title'>Oracle SQL Database 11g PL</p>\n              <p class = 'tutor'>\uC9C0\uC2DD\uACF5\uC720\uC790400</p>\n              <p class = 'price'>\u20A9150,000</p>\n            </div>\n          </div>\n          <div class = 'card'>\n            <div class = 'img_wrapper'>\n              <img src = ").concat(_defaultImg.default, " alt = 'defaultImg'/>\n            </div>\n            <div class = 'contents_wrapper'>\n              <p class = 'title'>Oracle SQL Database 11g PL</p>\n              <p class = 'tutor'>\uC9C0\uC2DD\uACF5\uC720\uC790400</p>\n              <p class = 'price'>\u20A9150,000</p>\n            </div>\n          </div>\n          <div class = 'card'>\n            <div class = 'img_wrapper'>\n              <img src = ").concat(_defaultImg.default, " alt = 'defaultImg'/>\n            </div>\n            <div class = 'contents_wrapper'>\n              <p class = 'title'>Oracle SQL Database 11g PL</p>\n              <p class = 'tutor'>\uC9C0\uC2DD\uACF5\uC720\uC790400</p>\n              <p class = 'price'>\u20A9150,000</p>\n            </div>\n          </div>\n          <div class = 'card'>\n            <div class = 'img_wrapper'>\n              <img src = ").concat(_defaultImg.default, " alt = 'defaultImg'/>\n            </div>\n            <div class = 'contents_wrapper'>\n              <p class = 'title'>Oracle SQL Database 11g PL</p>\n              <p class = 'tutor'>\uC9C0\uC2DD\uACF5\uC720\uC790400</p>\n              <p class = 'price'>\u20A9150,000</p>\n            </div>\n          </div>\n          <div class = 'card'>\n            <div class = 'img_wrapper'>\n              <img src = ").concat(_defaultImg.default, " alt = 'defaultImg'/>\n            </div>\n            <div class = 'contents_wrapper'>\n              <p class = 'title'>Oracle SQL Database 11g PL</p>\n              <p class = 'tutor'>\uC9C0\uC2DD\uACF5\uC720\uC790400</p>\n              <p class = 'price'>\u20A9150,000</p>\n            </div>\n          </div>\n          <div class = 'card'>\n            <div class = 'img_wrapper'>\n              <img src = ").concat(_defaultImg.default, " alt = 'defaultImg'/>\n            </div>\n            <div class = 'contents_wrapper'>\n              <p class = 'title'>Oracle SQL Database 11g PL</p>\n              <p class = 'tutor'>\uC9C0\uC2DD\uACF5\uC720\uC790400</p>\n              <p class = 'price'>\u20A9150,000</p>\n            </div>\n          </div>\n          <div class = 'card'>\n            <div class = 'img_wrapper'>\n              <img src = ").concat(_defaultImg.default, " alt = 'defaultImg'/>\n            </div>\n            <div class = 'contents_wrapper'>\n              <p class = 'title'>Oracle SQL Database 11g PL</p>\n              <p class = 'tutor'>\uC9C0\uC2DD\uACF5\uC720\uC790400</p>\n              <p class = 'price'>\u20A9150,000</p>\n            </div>\n          </div>\n          <div class = 'card'>\n            <div class = 'img_wrapper'>\n              <img src = ").concat(_defaultImg.default, " alt = 'defaultImg'/>\n            </div>\n            <div class = 'contents_wrapper'>\n              <p class = 'title'>Oracle SQL Database 11g PL</p>\n              <p class = 'tutor'>\uC9C0\uC2DD\uACF5\uC720\uC790400</p>\n              <p class = 'price'>\u20A9150,000</p>\n            </div>\n          </div>\n\n\n        </div>\n\n        <div class = 'add_button'>\n          <img src = ").concat(_addButton.default, " alt='addButton'/>\n        </div>\n        \n      <div/>\n    </div>\n  ");
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

/*----- Import Images -----*/
var DetailPage = function DetailPage() {
  return "\n    <div id = 'detailpage_viewport'>\n      <div id = 'detailpage_container'>\n        <div id = 'jumbotron'>\n          <div class = 'all_wrapper'>\n            <div class = 'img_wrapper'>\n              <img src = ".concat(_defaultImg.default, " alt = 'defaultImg'/>\n            </div>\n            <div class = 'contents_wrapper'>\n              <p class = 'title'>Oracle SQL Database 11g PL Oracle SQL Database 11g PL</p>\n              <div class = 'mid_wrapper'>\n                <p class = 'tutor'>\uC9C0\uC2DD\uACF5\uC720\uC790400</p>\n                <p class = 'price'>\u20A9150,000</p>\n              </div>\n              <div class = 'button_wrapper'>\n                <button class = 'goCartButton'>\uBC14\uAD6C\uB2C8\uC5D0 \uB2F4\uAE30</button>\n                <button class = 'goBackButton'>\uB3CC\uC544\uAC00\uAE30</button>\n              </div>\n            </div>\n          </div>\n        </div>\n      <div/>\n    </div>\n  ");
};

exports.DetailPage = DetailPage;
},{"../images/defaultImg.png":"src/images/defaultImg.png"}],"src/components/modals/AddModal.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AddModal = void 0;

var AddModal = function AddModal() {
  return "\n    <div id = 'addmodal_viewport'>\n      <div id = 'addmodal_background'></div>\n      <div id = 'addmodal_container'>\n        <div class = 'contents_wrapper'>\n          <p>\uAC15\uC758 \uC81C\uBAA9\uC744 \uC785\uB825\uD574\uC8FC\uC138\uC694.</p>\n          <div class = 'title_input_wrapper'>\n            <input placeholder = '\uC81C\uBAA9\uC744 \uC785\uB825\uD574\uC8FC\uC138\uC694.'/>\n          </div>\n          <div class = 'price_input_wrapper'>\n            <input placeholder = '\uAC00\uACA9\uC744 \uC785\uB825\uD574\uC8FC\uC138\uC694.'/>\n          </div>\n          <div class = 'button_wrapper'>\n            <button class = 'write_button'>\uC791\uC131\uD558\uAE30</button>\n            <button class = 'cancel_button'>\uCDE8\uC18C\uD558\uAE30</button>\n          </div>\n        </div>\n        </div>\n      </div>\n    </div>\n  ";
};

exports.AddModal = AddModal;
},{}],"src/images/errorImg.png":[function(require,module,exports) {
module.exports = "/errorImg.867d9ccf.png";
},{}],"src/components/modals/AlertModal.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AlertModal = void 0;

var _errorImg = _interopRequireDefault(require("../../images/errorImg.png"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*----- Import Images -----*/
var AlertModal = function AlertModal() {
  return "\n    <div id = 'alertmodal_viewport'>\n      <div id = 'alertmodal_background'></div>\n      <div id = 'alertmodal_container'>\n        <div class = 'contents_wrapper'>\n          <div class = 'alert_img_wrapper'>\n            <img src = ".concat(_errorImg.default, " alt = 'errorImg'/>\n          </div>\n          <div class = 'alert_title_wrapper'>\uC81C\uBAA9\uACFC \uAC00\uACA9\uC744<br>\uC815\uD655\uD788 \uC785\uB825\uD574\uC8FC\uC138\uC694.</div>\n          <div class = 'button_wrapper'>\n            <button class = 'ok_button'>\uD655\uC778</button>\n          </div>\n        </div>\n        </div>\n      </div>\n    </div>\n  ");
};

exports.AlertModal = AlertModal;
},{"../../images/errorImg.png":"src/images/errorImg.png"}],"src/images/loadingSpinner.gif":[function(require,module,exports) {
module.exports = "/loadingSpinner.c6f90d4f.gif";
},{}],"src/images/logoImg.png":[function(require,module,exports) {
module.exports = "/logoImg.45c48681.png";
},{}],"src/images/searchIcon.png":[function(require,module,exports) {
module.exports = "/searchIcon.d69ccd09.png";
},{}],"src/images/closeButton.png":[function(require,module,exports) {
module.exports = "/closeButton.8fe2197f.png";
},{}],"src/components/Header.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Header = void 0;

var _MyReact = require("../core/MyReact.js");

var _loadingSpinner = _interopRequireDefault(require("../images/loadingSpinner.gif"));

var _logoImg = _interopRequireDefault(require("../images/logoImg.png"));

var _searchIcon = _interopRequireDefault(require("../images/searchIcon.png"));

var _closeButton = _interopRequireDefault(require("../images/closeButton.png"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return generator._invoke = function (innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; }(innerFn, self, context), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; this._invoke = function (method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator.return && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (object) { var keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, catch: function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

/*----- 클래스명 변경 관리 Desktop -----*/
// desktop_search_box: 검색창 인풋 박스 전체
// &_active: 활성화 상태
// desktop_search_input: 검색 input
// &_typed: 검색어 입력시
// desktop_search_result: 검색결과창
// &_active: 검색어 입력시

/*----- 클래스명 변경 관리 Mobile -----*/
// mobile_search_box: 검색창 인풋 박스 전체
// &_active: 활성화 상태
// mobile_search_input: 검색 input
// &_active: 활성화 상태
// mobile_search_result: 검색결과창
// &_active: 활성화 상태
// search_background: 검색창 배경
// &_active: 활성화 상태
var Header = function Header() {
  //데스크탑 search 상태
  var _useState = (0, _MyReact.useState)(false),
      _useState2 = _slicedToArray(_useState, 2),
      isDesktopInputTyped = _useState2[0],
      setIsDesktopInputTyped = _useState2[1];

  var _useState3 = (0, _MyReact.useState)(''),
      _useState4 = _slicedToArray(_useState3, 2),
      desktopInputText = _useState4[0],
      setDesktopInputText = _useState4[1];

  var _useState5 = (0, _MyReact.useState)([]),
      _useState6 = _slicedToArray(_useState5, 2),
      desktopSearchResult = _useState6[0],
      setDesktopSearchResult = _useState6[1];

  var _useState7 = (0, _MyReact.useState)(true),
      _useState8 = _slicedToArray(_useState7, 2),
      isDesktopSearchLoaded = _useState8[0],
      setIsDesktopSearchLoaded = _useState8[1]; //모바일 search 상태


  var _useState9 = (0, _MyReact.useState)(false),
      _useState10 = _slicedToArray(_useState9, 2),
      isMobileSearchButtonClicked = _useState10[0],
      setIsMobileSearchButtonClicked = _useState10[1];

  var _useState11 = (0, _MyReact.useState)(''),
      _useState12 = _slicedToArray(_useState11, 2),
      mobileInputText = _useState12[0],
      setMobileInputText = _useState12[1];

  var _useState13 = (0, _MyReact.useState)([]),
      _useState14 = _slicedToArray(_useState13, 2),
      mobileSearchResult = _useState14[0],
      setMobileSearchResult = _useState14[1];

  var _useState15 = (0, _MyReact.useState)(true),
      _useState16 = _slicedToArray(_useState15, 2),
      isMobileSearchLoaded = _useState16[0],
      setIsMobileSearchLoaded = _useState16[1]; // 모바일 검색 결과 받아오기


  var getMobileSearchResult = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(value) {
      var searchInput, response, _mobileSearchResult;

      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              // 검색 로딩 시작
              setIsMobileSearchLoaded(false);
              _context.prev = 1;
              searchInput = value;
              _context.next = 5;
              return axios.get("http://localhost:3000/api/courses?search=".concat(searchInput));

            case 5:
              response = _context.sent;

              if (response.data.ok) {
                _mobileSearchResult = Object.entries(response.data)[1][1].courses;
                setIsMobileSearchLoaded(true);
                setMobileSearchResult(_mobileSearchResult);
              }

              _context.next = 13;
              break;

            case 9:
              _context.prev = 9;
              _context.t0 = _context["catch"](1);
              alert('Server Error!\n다시 시도합니다.');
              getMobileSearchResult(value);

            case 13:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[1, 9]]);
    }));

    return function getMobileSearchResult(_x) {
      return _ref.apply(this, arguments);
    };
  }(); // 모바일 검색버튼 클릭시 검색어 이미 있고 길이 2 이상이면 검색!


  var clickMobileSearchButton = function clickMobileSearchButton(isClicked) {
    if (isClicked === true) {
      // 검색창 열려있을시 검색어 검색
      checkIsValidMobileSearch(mobileInputText);
    } else if (isClicked === false) {
      setIsMobileSearchButtonClicked(true);
    }
  }; // 검색어 이미 있고 길이 2 이상이면 검색


  var checkIsValidMobileSearch = function checkIsValidMobileSearch(mobileInputText) {
    if (mobileInputText.length >= 2) {
      getMobileSearchResult(mobileInputText);
    } else if (mobileInputText.length < 2) {
      alert('검색어를 2글자 이상 입력해주세요!');
    }
  }; // 모바일 검색창 닫기


  var closeMobileSearch = function closeMobileSearch(isClosed) {
    setIsMobileSearchButtonClicked(isClosed);
  }; //모바일 검색결과 비우기


  var deleteMobileSearchResult = function deleteMobileSearchResult() {
    setMobileSearchResult([]);
  }; // 모바일 검색창 입력할 때마다


  var changeMobileInput = function changeMobileInput(keyCode, inputValue) {
    var value = inputValue;
    var valueLength = value.length; // enter 입력시

    if (keyCode === 13) {
      if (valueLength >= 2) {
        getMobileSearchResult(value);
      } else if (valueLength < 2) {
        alert('검색어를 2글자 이상 입력해주세요!');
      }
    }
  }; // 모바일 검색창 포커싱 떠나도 검색어 저장


  var saveMobileInput = function saveMobileInput(value) {
    setMobileInputText(value);
  }; // 모바일 검색어 클릭시 상세페이지 이동


  var goDetailPage = function goDetailPage(id) {
    closeMobileSearch();
    deleteMobileSearchResult();
    setIsMobileSearchButtonClicked(false);
    setMobileInputText('');
    console.log(id);
    deleteDesktopSearchResult();
    closeDesktopSearch();
    setDesktopInputText('');
    setIsDesktopInputTyped(false);
  }; // 데스크탑 검색창 입력할 때마다


  var changeDesktopInput = function changeDesktopInput(keyCode, inputValue) {
    var value = inputValue;
    var valueLength = value.length; // enter 입력시

    if (keyCode === 13) {
      if (valueLength >= 2) {
        getDesktopSearchResult(value);
        setIsDesktopInputTyped(true);
      } else if (valueLength < 2) {
        alert('검색어를 2글자 이상 입력해주세요!');
      }
    }
  }; // 데스크탑 검색창 닫기


  var closeDesktopSearch = function closeDesktopSearch(isClosed) {
    setIsDesktopInputTyped(isClosed);
  }; //모바일 검색결과 비우기


  var deleteDesktopSearchResult = function deleteDesktopSearchResult() {
    setDesktopSearchResult([]);
  }; // 데스크탑 검색창 포커싱 떠나도 검색어 저장


  var saveDesktopInput = function saveDesktopInput(value) {
    setDesktopInputText(value);
  }; // 검색어 이미 있고 길이 2 이상이면 검색


  var checkIsValidDesktopSearch = function checkIsValidDesktopSearch(desktopInputText) {
    if (desktopInputText.length >= 2) {
      setIsDesktopInputTyped(true);
      getDesktopSearchResult(desktopInputText);
    } else if (desktopInputText.length < 2) {
      alert('검색어를 2글자 이상 입력해주세요!');
    }
  }; // 데스크탑 검색버튼 클릭시 검색어 이미 있고 길이 2 이상이면 검색!


  var clickDesktopSearchButton = function clickDesktopSearchButton(searchButtonIsClicked) {
    if (searchButtonIsClicked === true) {
      // 검색창 열려있을시 검색어 검색
      checkIsValidDesktopSearch(desktopInputText);
    }
  }; // 데스크탑 검색 결과 받아오기


  var getDesktopSearchResult = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(value) {
      var searchInput, response, _desktopSearchResult;

      return _regeneratorRuntime().wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              // 검색 로딩 시작
              setIsDesktopSearchLoaded(false);
              _context2.prev = 1;
              searchInput = value;
              _context2.next = 5;
              return axios.get("http://localhost:3000/api/courses?search=".concat(searchInput));

            case 5:
              response = _context2.sent;

              if (response.data.ok) {
                _desktopSearchResult = Object.entries(response.data)[1][1].courses;
                setIsDesktopSearchLoaded(true);
                setDesktopSearchResult(_desktopSearchResult);
              }

              _context2.next = 13;
              break;

            case 9:
              _context2.prev = 9;
              _context2.t0 = _context2["catch"](1);
              alert('Server Error!\n다시 시도합니다.');
              getDesktopSearchResult(value);

            case 13:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, null, [[1, 9]]);
    }));

    return function getDesktopSearchResult(_x2) {
      return _ref2.apply(this, arguments);
    };
  }(); // 검색결과가 이미 있고 2글자 이상이라면 다시 결과창 보여줌


  var checkDesktopSearchResult = function checkDesktopSearchResult(result) {
    if (result.length > 0 && desktopInputText.length >= 2 && isDesktopInputTyped === false) setIsDesktopInputTyped(true);
  }; //모바일


  window.clickMobileSearchButton = function () {
    return clickMobileSearchButton(isMobileSearchButtonClicked);
  };

  window.closeMobileSearch = function () {
    return closeMobileSearch(false);
  };

  window.changeMobileInput = function (keyCode, inputValue) {
    return changeMobileInput(keyCode, inputValue);
  };

  window.saveMobileInput = function (value) {
    return saveMobileInput(value);
  }; //데스크탑


  window.clickDesktopSearchButton = function () {
    return clickDesktopSearchButton(true);
  };

  window.closeDesktopSearch = function () {
    return closeDesktopSearch(false);
  };

  window.changeDesktopInput = function (keyCode, inputValue) {
    return changeDesktopInput(keyCode, inputValue);
  };

  window.saveDesktopInput = function (value) {
    return saveDesktopInput(value);
  };

  window.checkDesktopSearchResult = function () {
    return checkDesktopSearchResult(desktopSearchResult);
  }; //상세 페이지 이동


  window.goDetailPage = function (id) {
    return goDetailPage(id);
  };

  return "\n    <div id = 'header_container'>\n      <div id = 'desktop_wrapper'>\n        <div class = 'logo_wrapper'>\n          <img src = ".concat(_logoImg.default, " alt = 'logoImg'/>\n        </div>\n        <div class = ").concat(isDesktopInputTyped === true ? 'desktop_search_box_active' : 'desktop_search_box', ">\n          <input class = ").concat(isDesktopInputTyped === true ? 'desktop_search_input_typed' : 'desktop_search_input', " \n          type = 'text'\n          placeholder = '\uBC30\uC6B0\uACE0 \uC2F6\uC740 \uC9C0\uC2DD\uC744 \uC785\uB825\uD574\uBCF4\uC138\uC694.'\n          onkeyup = \"changeDesktopInput(event.keyCode,this.value)\"\n          onchange = \"saveDesktopInput(event.target.value)\"\n          onfocus = \"checkDesktopSearchResult()\"\n          value=").concat(desktopInputText.length > 0 ? desktopInputText : '', "\n          >\n          <div class = 'icon_wrapper' onclick=\"clickDesktopSearchButton()\">\n            <img src = ").concat(_searchIcon.default, " alt = 'searchIcon'/>\n          </div>\n        </div>\n        <div class = ").concat(isDesktopInputTyped === true ? 'desktop_search_result_active' : 'desktop_search_result', ">\n        ").concat(desktopSearchResult.length > 0 && isDesktopSearchLoaded === true ? desktopSearchResult.map(function (e) {
    return "<ul class='result' key=".concat(e.id, " onclick=\"goDetailPage(").concat(e.id, ")\">").concat(e.title, "</ul>");
  }) : desktopSearchResult.length === 0 && isDesktopSearchLoaded === true ? "<div class = 'desktop_search_loading_wrapper'>\n                 \n              </div>" : "<div class = 'desktop_search_loading_wrapper'>\n                 <div class = 'img_wrapper'>\n                  <img src = ".concat(_loadingSpinner.default, " alt = 'loadingSpinner'/>\n                </div>\n              </div>"), "\n        </div>\n      </div>\n        \n      <div class = ").concat(isMobileSearchButtonClicked === true ? 'search_mobile_background_active' : 'search_mobile_background', " onclick=\"closeMobileSearch()\"></div>\n\n\n      <div id = 'mobile_wrapper'>\n        <div class = 'mobile_icon_wrapper' onclick=\"clickMobileSearchButton()\">\n          <img src = ").concat(_searchIcon.default, " alt = 'searchIcon'/>\n        </div>\n        <div class = 'mobile_logo_wrapper'>\n          <img src = ").concat(_logoImg.default, " alt = 'logoImg'/>\n        </div>\n\n        <div class = ").concat(isMobileSearchButtonClicked === true ? 'mobile_search_box_active' : 'mobile_search_box', ">\n          <input\n          class = ").concat(isMobileSearchButtonClicked === true ? 'mobile_search_input_active' : 'mobile_search_input', " \n            type = 'text'\n            placeholder = '\uBC30\uC6B0\uACE0 \uC2F6\uC740 \uC9C0\uC2DD\uC744 \uC785\uB825\uD574\uBCF4\uC138\uC694.'\n            onkeyup = \"changeMobileInput(event.keyCode,this.value)\"\n            onchange = \"saveMobileInput(event.target.value)\"\n            value=").concat(mobileInputText.length > 0 ? mobileInputText : '', "\n            >\n          <div class='icon_wrapper' onclick=\"clickMobileSearchButton()\">\n            <img src = ").concat(_searchIcon.default, " alt = 'searchIcon'/>\n          </div>\n          <div class = 'close_wrapper' onclick=\"closeMobileSearch()\">\n            <img src = ").concat(_closeButton.default, " alt = 'closeButton'/>\n          </div>\n        </div>\n        \n        <div class = ").concat(isMobileSearchButtonClicked === true ? 'mobile_search_result_active' : 'mobile_search_result', ">\n          ").concat(mobileSearchResult.length > 0 && isMobileSearchLoaded === true ? mobileSearchResult.map(function (e) {
    return "<ul class='result' key=".concat(e.id, " onclick=\"goDetailPage(").concat(e.id, ")\">").concat(e.title, "</ul>");
  }) : mobileSearchResult.length === 0 && isMobileSearchLoaded === true ? "<div class = 'mobile_search_loading_wrapper'>\n                   \n                </div>" : "<div class = 'mobile_search_loading_wrapper'>\n                   <div class = 'img_wrapper'>\n                    <img src = ".concat(_loadingSpinner.default, " alt = 'loadingSpinner'/>\n                  </div>\n                </div>"), "\n          \n        </div>\n      </div>\n\n      <div class = ").concat(isDesktopInputTyped === true ? 'search_desktop_background_active' : 'search_desktop_background', " onclick=\"closeDesktopSearch()\"></div>\n    </div>\n  ");
};

exports.Header = Header;
},{"../core/MyReact.js":"src/core/MyReact.js","../images/loadingSpinner.gif":"src/images/loadingSpinner.gif","../images/logoImg.png":"src/images/logoImg.png","../images/searchIcon.png":"src/images/searchIcon.png","../images/closeButton.png":"src/images/closeButton.png"}],"node_modules/parcel-bundler/src/builtins/bundle-url.js":[function(require,module,exports) {
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

var _AddModal = require("./components/modals/AddModal.js");

var _AlertModal = require("./components/modals/AlertModal.js");

var _Header = require("./components/Header.js");

require("./scss/main.scss");

/*----- Import Pages -----*/

/*----- Import Components -----*/

/*----- Import Style -----*/
var App = function App() {
  return "\n  <div>\n    <div>\n    </div>\n    <div>\n      ".concat((0, _Header.Header)(), "\n    </div>\n    <div>\n      ").concat((0, _MainPage.MainPage)(), "\n    </div>\n  </div>\n");
};

exports.App = App;
},{"./pages/MainPage.js":"src/pages/MainPage.js","./pages/DetailPage.js":"src/pages/DetailPage.js","./components/modals/AddModal.js":"src/components/modals/AddModal.js","./components/modals/AlertModal.js":"src/components/modals/AlertModal.js","./components/Header.js":"src/components/Header.js","./scss/main.scss":"src/scss/main.scss"}],"src/main.js":[function(require,module,exports) {
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
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "65348" + '/');

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