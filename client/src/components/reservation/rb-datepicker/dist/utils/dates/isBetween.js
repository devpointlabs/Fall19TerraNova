"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = isBetween;

var _isNotBetween = _interopRequireDefault(require("./isNotBetween"));

function isBetween(minDate, maxDate, selectedDay) {
  return !(0, _isNotBetween["default"])(minDate, maxDate, selectedDay);
}