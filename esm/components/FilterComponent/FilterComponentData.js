import React from 'react';
import Styles, { FilterValue } from './Styles';
export var FilterComponentData = _ref => {
  var {
    value
  } = _ref;
  return /*#__PURE__*/React.createElement(Styles, null, /*#__PURE__*/React.createElement(FilterValue, null, value));
};