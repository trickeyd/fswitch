"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.or = exports.and = void 0;

var and = function and(input) {
  return function () {
    for (var _len = arguments.length, conditions = new Array(_len), _key = 0; _key < _len; _key++) {
      conditions[_key] = arguments[_key];
    }

    return conditions.every(function (condition) {
      return condition(input);
    });
  };
};

exports.and = and;

var or = function or(input) {
  return function () {
    for (var _len2 = arguments.length, conditions = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      conditions[_key2] = arguments[_key2];
    }

    return conditions.some(function (condition) {
      return condition(input);
    });
  };
};

exports.or = or;