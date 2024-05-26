import React from 'react';
import { MainComponentPropsType } from '../../types';
import Styles from './Styles';
import { MainComponentDataRecord } from './MainComponentDataRecord';

export const MainComponent = ({ data }: MainComponentPropsType) => (
    <>
        <hr />
        <Styles>
            {data.map(item => {
                const record = Array.from(item.values());
                const keys: string[] = [];
                record.forEach((recordItem) => { keys.push(recordItem.value) })
                const listKey = keys.join();

                return (<MainComponentDataRecord key={listKey} record={item} />)
            })}
        </Styles>
    </>
)