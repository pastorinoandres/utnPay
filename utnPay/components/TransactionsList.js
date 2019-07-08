
//dependecies
import React from 'react';
import { View, Text, FlatList } from 'react-native';

//styles
import { _card, _titleCard, _list } from '../styles/globalStyles';
import TransactionItem from './TransactionItem';

//components
import SpaceSection from './../components/SpaceSection';

const TransactionsList = ({history}) => {
    return (
        <View style={_card}>
            <Text style={_titleCard}>Ultimos Movimientos</Text>
            <FlatList
                style={_list}
                data={history}
                renderItem={({item}) => <TransactionItem title={item.title} icon={item.icon} detalle={item.detalle} fecha={item.fecha} precio={item.precio}></TransactionItem>}>
            </FlatList>
            <SpaceSection/>

        </View>
    );
};

export default TransactionsList;