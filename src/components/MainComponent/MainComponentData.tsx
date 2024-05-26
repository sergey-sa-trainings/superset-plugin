import React from 'react';
import { MainComponentDataPropsType } from '../../types';
import { DataValue } from './Styles';

export const MainComponentData = ({ data }: MainComponentDataPropsType) => (
    <DataValue>{data.value}</DataValue>
)