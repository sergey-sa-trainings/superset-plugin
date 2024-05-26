import React from 'react';
import { FilterComponentHeader } from './FilterComponentHeader';
import { FilterComponentData } from './FilterComponentData';
import { FilterComponentPropsType } from '../../types';

export const FilterComponent = ({ header, filterData }: FilterComponentPropsType) => (
    <>
        <FilterComponentHeader header={header} />
        {filterData.map(item => (
            <FilterComponentData key={item.key} value={item.value} />
        ))}
    </>
)