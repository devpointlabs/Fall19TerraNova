"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

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

var PickerUI =
/*#__PURE__*/
function (_React$Component) {
  (0, _inherits2["default"])(PickerUI, _React$Component);

  function PickerUI() {
    var _getPrototypeOf2;

    var _this;

    (0, _classCallCheck2["default"])(this, PickerUI);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = (0, _possibleConstructorReturn2["default"])(this, (_getPrototypeOf2 = (0, _getPrototypeOf3["default"])(PickerUI)).call.apply(_getPrototypeOf2, [this].concat(args)));
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "state", (0, _utils.getDefaultState)());
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "onDayMouseEnter", function (day) {
      var _this$state = _this.state,
          startDate = _this$state.startDate,
          endDate = _this$state.endDate;
      var range = day >= startDate ? endDate || day : startDate;

      _this.setState({
        range: range
      });
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "onDayClick", function (day) {
      var isOpen = _this.state.closedOrOpen === _utils.interval.OPEN;
      var startDate = isOpen ? _this.state.startDate : day;
      var endDate = isOpen && day >= startDate ? day : null;
      var range = endDate || startDate;
      var closedOrOpen = isOpen && day >= startDate ? _utils.interval.CLOSED : _utils.interval.OPEN;

      _this.setState({
        startDate: startDate,
        endDate: endDate,
        closedOrOpen: closedOrOpen,
        range: range
      });
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "onApply", function () {
      var _this$state2 = _this.state,
          startDate = _this$state2.startDate,
          endDate = _this$state2.endDate;
      var onDatesChange = _this.props.onDatesChange;

      if (onDatesChange && startDate && endDate) {
        onDatesChange({
          startDate: startDate,
          endDate: endDate
        });
      }
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "dateLabel", function () {
      var _this$state3 = _this.state,
          startDate = _this$state3.startDate,
          endDate = _this$state3.endDate;
      return startDate && endDate ? "".concat(startDate.format("DD/MM/YYYY"), " - ").concat(endDate.format("DD/MM/YYYY")) : "";
    });
    return _this;
  }

  (0, _createClass2["default"])(PickerUI, [{
    key: "render",
    value: function render() {
      var onDayClick = this.onDayClick,
          onDayMouseEnter = this.onDayMouseEnter;
      var props = (0, _objectSpread2["default"])({
        onDayClick: onDayClick,
        onDayMouseEnter: onDayMouseEnter
      }, this.state, this.props);
      var Component = this.props.component;
      return _react["default"].createElement(Component, props, _react["default"].createElement("div", {
        className: "ranges"
      }), _react["default"].createElement("div", {
        className: "drp-buttons"
      }, _react["default"].createElement("span", {
        className: "drp-selected"
      }, this.dateLabel()), _react["default"].createElement("button", {
        className: "cancelBtn btn btn-sm btn-default",
        type: "button"
      }, "Cancel"), _react["default"].createElement("button", {
        className: "applyBtn btn btn-sm btn-primary",
        type: "button",
        onClick: this.onApply
      }, "Apply"), " "));
    }
  }]);
  return PickerUI;
}(_react["default"].Component);

exports["default"] = PickerUI;