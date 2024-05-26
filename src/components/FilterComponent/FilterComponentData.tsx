import React from 'react';
import { FilterComponentDataPropsType } from '../../types';
import Styles, { FilterValue } from './Styles';

export const FilterComponentData = ({ value }: FilterComponentDataPropsType) => (
    <Styles>
        <FilterValue>{value}</FilterValue>
    </Styles>
)