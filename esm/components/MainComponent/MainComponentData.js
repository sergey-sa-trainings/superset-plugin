import React from 'react';
import { DataValue } from './Styles';
export var MainComponentData = _ref => {
  var {
    data
  } = _ref;
  return /*#__PURE__*/React.createElement(DataValue, null, data.value);
};