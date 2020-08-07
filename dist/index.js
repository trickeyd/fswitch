"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _exportNames = {
  fSwitch: true,
  fCase: true,
  fDefault: true
};
exports.fDefault = exports.fCase = exports.fSwitch = void 0;

var _responses = require("./cases/responses");

Object.keys(_responses).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _responses[key];
    }
  });
});

var _combiners = require("./src/utils/combiners");

Object.keys(_combiners).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _combiners[key];
    }
  });
});

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var fSwitch = function fSwitch(input) {
  for (var i = 0, l = arguments.length <= 1 ? 0 : arguments.length - 1; i < l; i++) {
    var _fCase = i + 1 < 1 || arguments.length <= i + 1 ? undefined : arguments[i + 1];

    if (typeof _fCase === "function") {
      if (i !== l - 1) throw new Error("fDefault must be the last argument");
      return _fCase(input);
    } else if (Array.isArray(_fCase)) {
      var _fCase2 = _slicedToArray(_fCase, 2),
          condition = _fCase2[0],
          callback = _fCase2[1];

      if (condition(input)) {
        return callback(input);
      }
    } else {
      throw new Error("Unknown case type ".concat(_typeof(_fCase), " passed to fSwitch"));
    }
  }
};

exports.fSwitch = fSwitch;

fSwitch.try = function (input) {
  for (var _len = arguments.length, cases = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    cases[_key - 1] = arguments[_key];
  }

  return {
    catch: function _catch(onError) {
      try {
        return fSwitch.apply(void 0, [input].concat(cases));
      } catch (error) {
        onError(error);
      }
    }
  };
};

var fCase = function fCase(condition, callback) {
  return [condition, callback];
};

exports.fCase = fCase;

var fDefault = function fDefault(callback) {
  return callback;
};

exports.fDefault = fDefault;