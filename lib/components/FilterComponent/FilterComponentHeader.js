"use strict";

exports.__esModule = true;
exports.FilterComponentHeader = void 0;

var _react = _interopRequireDefault(require("react"));

var _Styles = _interopRequireDefault(require("./Styles"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var FilterComponentHeader = _ref => {
  var {
    header
  } = _ref;
  return /*#__PURE__*/_react.default.createElement(_Styles.default, null, /*#__PURE__*/_react.default.createElement("strong", null, header));
};

exports.FilterComponentHeader = FilterComponentHeader;