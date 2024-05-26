/**
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
import React, { createRef } from 'react';
import { styled } from '@superset-ui/core';
import { SupersetPluginChartMyFirstProps, SupersetPluginChartMyFirstStylesProps } from './types';
import { FilterComponent } from './components/FilterComponent/FilterComponent';
import { MainComponent } from './components/MainComponent/MainComponent';
import { FILTER_HAVING_HEADER, FILTER_WHERE_HEADER } from './constants/Literals';

const Styles = styled.div<SupersetPluginChartMyFirstStylesProps>`
  padding: ${({ theme }) => theme.gridUnit * 2}px;
  border-radius: ${({ theme }) => theme.gridUnit * 2}px;
  height: ${({ height }) => height}px;
  width: ${({ width }) => width}px;
  overflow-y: scroll;
`;

export default function SupersetPluginChartMyFirst(props: SupersetPluginChartMyFirstProps) {
  const { filterWhereData, filterHavingData, transformedData, height, width } = props;
  const rootElem = createRef<HTMLDivElement>();

  return (
    <Styles
      ref={rootElem}
      height={height}
      width={width}
    >
      {
        Boolean(filterWhereData.length) &&
        <FilterComponent header={FILTER_WHERE_HEADER} filterData={filterWhereData} />
      }

      {
        Boolean(filterHavingData.length) &&
        <FilterComponent header={FILTER_HAVING_HEADER} filterData={filterHavingData} />
      }

      {
        Boolean(transformedData.length) &&
        <MainComponent data={transformedData} />
      }
    </Styles>
  );
}
