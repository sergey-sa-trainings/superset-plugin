import styled from '@emotion/styled'
import { css } from '@superset-ui/core';

export default styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-flow: column;
    font-family: Geologica, sans-serif;
  `}
`;

export const DataValue = styled.div`
  display: flex;
  flex-basis: 33%;
  font-size: 56px;
  font-weight: 500;
  line-height: 70px;

  &:nth-of-type(2) {
    color: #00A8A8;
  }
  &:nth-of-type(3) {
    color: #959EAB;
  }
  &:nth-of-type(4) {
    color: #A52A2A;
  }
  &:nth-of-type(5) {
    color: #00008B;
  }
`;

export const DataRecord = styled.div`
  display: flex;

  &:nth-of-type(1) ${DataValue} {
    color: black;
    font-size: 20px;
    font-weight: 500;
    text-transform: uppercase;
    line-height: 24px;
  }
`;