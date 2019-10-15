"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.cellMapper = exports.WeekCell = exports.DayCell = void 0;

var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/objectSpread"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/possibleConstructorReturn"));

var _getPrototypeOf3 = _interopRequireDefault(require("@babel/runtime/helpers/esm/getPrototypeOf"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/inherits"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/defineProperty"));

var _react = _interopRequireDefault(require("react"));

var _utils = require("./utils");

var _cellMapper;

var DayCell =
/*#__PURE__*/
function (_React$Component) {
  (0, _inherits2["default"])(DayCell, _React$Component);

  function DayCell() {
    var _getPrototypeOf2;

    var _this;

    (0, _classCallCheck2["default"])(this, DayCell);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = (0, _possibleConstructorReturn2["default"])(this, (_getPrototypeOf2 = (0, _getPrototypeOf3["default"])(DayCell)).call.apply(_getPrototypeOf2, [this].concat(args)));
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "handleOnMouseEnter", function () {
      var _this$props = _this.props,
          onDayMouseEnter = _this$props.onDayMouseEnter,
          day = _this$props.day;

      if (onDayMouseEnter) {
        onDayMouseEnter(day);
      }
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "handleOnClick", function () {
      var _this$props2 = _this.props,
          onDayClick = _this$props2.onDayClick,
          day = _this$props2.day;

      if (onDayClick) {
        onDayClick(day);
      }
    });
    return _this;
  }

  (0, _createClass2["default"])(DayCell, [{
    key: "render",
    value: function render() {
      var day = this.props.day;
      var className = (0, _utils.cx)((0, _objectSpread2["default"])({}, this.props));
      return _react["default"].createElement("td", {
        className: className,
        onClick: this.handleOnClick,
        onMouseEnter: this.handleOnMouseEnter
      }, day.format("DD"));
    }
  }]);
  return DayCell;
}(_react["default"].Component);

exports.DayCell = DayCell;

var WeekCell =
/*#__PURE__*/
function (_React$Component2) {
  (0, _inherits2["default"])(WeekCell, _React$Component2);

  function WeekCell() {
    (0, _classCallCheck2["default"])(this, WeekCell);
    return (0, _possibleConstructorReturn2["default"])(this, (0, _getPrototypeOf3["default"])(WeekCell).apply(this, arguments));
  }

  (0, _createClass2["default"])(WeekCell, [{
    key: "render",
    value: function render() {
      var week = this.props.week;
      return _react["default"].createElement("td", {
        className: "week"
      }, week);
    }
  }]);
  return WeekCell;
}(_react["default"].Component);

exports.WeekCell = WeekCell;
var cellMapper = (_cellMapper = {}, (0, _defineProperty2["default"])(_cellMapper, _utils.unitType.DAY, DayCell), (0, _defineProperty2["default"])(_cellMapper, _utils.unitType.WEEK, WeekCell), _cellMapper);
exports.cellMapper = cellMapper;