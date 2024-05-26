"use strict";

exports.__esModule = true;
exports.default = SupersetPluginChartMyFirst;

var _react = _interopRequireWildcard(require("react"));

var _core = require("@superset-ui/core");

var _FilterComponent = require("./components/FilterComponent/FilterComponent");

var _MainComponent = require("./components/MainComponent/MainComponent");

var _Literals = require("./constants/Literals");

var _templateObject;

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _taggedTemplateLiteralLoose(strings, raw) { if (!raw) { raw = strings.slice(0); } strings.raw = raw; return strings; }

var Styles = _core.styled.div(_templateObject || (_templateObject = _taggedTemplateLiteralLoose(["\n  padding: ", "px;\n  border-radius: ", "px;\n  height: ", "px;\n  width: ", "px;\n  overflow-y: scroll;\n"])), _ref => {
  var {
    theme
  } = _ref;
  return theme.gridUnit * 2;
}, _ref2 => {
  var {
    theme
  } = _ref2;
  return theme.gridUnit * 2;
}, _ref3 => {
  var {
    height
  } = _ref3;
  return height;
}, _ref4 => {
  var {
    width
  } = _ref4;
  return width;
});

function SupersetPluginChartMyFirst(props) {
  var {
    filterWhereData,
    filterHavingData,
    transformedData,
    height,
    width
  } = props;
  var rootElem = /*#__PURE__*/(0, _react.createRef)();
  return /*#__PURE__*/_react.default.createElement(Styles, {
    ref: rootElem,
    height: height,
    width: width
  }, Boolean(filterWhereData.length) && /*#__PURE__*/_react.default.createElement(_FilterComponent.FilterComponent, {
    header: _Literals.FILTER_WHERE_HEADER,
    filterData: filterWhereData
  }), Boolean(filterHavingData.length) && /*#__PURE__*/_react.default.createElement(_FilterComponent.FilterComponent, {
    header: _Literals.FILTER_HAVING_HEADER,
    filterData: filterHavingData
  }), Boolean(transformedData.length) && /*#__PURE__*/_react.default.createElement(_MainComponent.MainComponent, {
    data: transformedData
  }));
}