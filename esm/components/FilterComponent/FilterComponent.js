import React from 'react';
import { FilterComponentHeader } from './FilterComponentHeader';
import { FilterComponentData } from './FilterComponentData';
export var FilterComponent = _ref => {
  var {
    header,
    filterData
  } = _ref;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(FilterComponentHeader, {
    header: header
  }), filterData.map(item => /*#__PURE__*/React.createElement(FilterComponentData, {
    key: item.key,
    value: item.value
  })));
};