"use strict";

exports.__esModule = true;
exports.MainComponentData = void 0;

var _react = _interopRequireDefault(require("react"));

var _Styles = require("./Styles");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var MainComponentData = _ref => {
  var {
    data
  } = _ref;
  return /*#__PURE__*/_react.default.createElement(_Styles.DataValue, null, data.value);
};

exports.MainComponentData = MainComponentData;