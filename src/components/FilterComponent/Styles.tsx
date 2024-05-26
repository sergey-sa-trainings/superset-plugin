import { css, styled } from '@superset-ui/core';

export default styled.div`
  ${() => css`
    display: flex;
    flex-flow: row nowrap;
    justify-content: flex-start;
    color: darkslategrey;
  `}
`;

export const FilterValue = styled.span`
  display: list-item;
  font-size: 12px;
  line-height: 15px;
  margin-left: ${({ theme }) => theme.gridUnit * 5}px;
`;