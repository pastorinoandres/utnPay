import React from 'react';
import { FlatList } from 'react-native';
import { _list } from '../styles/globalStyles';

import SettingItem from "./../components/SettingItem";

const SettingOptions = ({options}) => {
    return (
                  
        <FlatList
            style={_list}
            data={options}
            renderItem={({item}) => <SettingItem title={item.title} icon={item.icon} detalle={item.detalle} fecha={item.fecha} precio={item.precio}></SettingItem>}>
        </FlatList>            
        
    );
};

export default SettingOptions;