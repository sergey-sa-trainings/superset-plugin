import React from 'react';
import { FilterComponentHeaderPropsType } from '../../types';
import Styles from './Styles';

export const FilterComponentHeader = ({ header }: FilterComponentHeaderPropsType) => (
    <Styles>
        <strong>{header}</strong>
    </Styles>
)