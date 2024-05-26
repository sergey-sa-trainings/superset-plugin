var _templateObject, _templateObject2, _templateObject3;

function _taggedTemplateLiteralLoose(strings, raw) { if (!raw) { raw = strings.slice(0); } strings.raw = raw; return strings; }

import { css, styled } from '@superset-ui/core';
export default styled.div(_templateObject || (_templateObject = _taggedTemplateLiteralLoose(["\n  ", "\n"])), () => css(_templateObject2 || (_templateObject2 = _taggedTemplateLiteralLoose(["\n    display: flex;\n    flex-flow: row nowrap;\n    justify-content: flex-start;\n    color: darkslategrey;\n  "]))));
export var FilterValue = styled.span(_templateObject3 || (_templateObject3 = _taggedTemplateLiteralLoose(["\n  display: list-item;\n  font-size: 12px;\n  line-height: 15px;\n  margin-left: ", "px;\n"])), _ref => {
  var {
    theme
  } = _ref;
  return theme.gridUnit * 5;
});