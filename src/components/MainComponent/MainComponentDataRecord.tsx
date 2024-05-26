import React from 'react';
import { MainComponentDataListPropsType } from '../../types';
import { DataRecord } from './Styles';
import { MainComponentData } from './MainComponentData';

export const MainComponentDataRecord = ({ record }: MainComponentDataListPropsType) => (
  <DataRecord>
    {record.map(item => (<MainComponentData key={item.key} data={item} />))}
  </DataRecord>
)