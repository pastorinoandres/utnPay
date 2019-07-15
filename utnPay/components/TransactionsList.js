
//dependecies
import React, { Component } from 'react';
import { View, Text, FlatList } from 'react-native';

//styles
import { _card, _titleCard, _list } from '../styles/globalStyles';
import TransactionItem from './TransactionItem';

//components
import SpaceSection from './../components/SpaceSection';

class TransactionsList extends Component{

    componentDidMount() {

        const {showNotification, history} = this.props;
        const lastTransaction = [...history].shift()
        const title = 'Transacción exitosa';
        const detail = `Se registro un pago de $${lastTransaction.precio} referente a ${lastTransaction.category}`;

        if(history.length ===1){
            showNotification(title,detail,1500)    
        }       
    }
    

    componentDidUpdate(prevProps) {

        const {showNotification, history} = this.props;
        const lastTransaction = [...history].shift()
        const title = 'Transacción exitosa';
        const detail = `Se registro un pago de $${lastTransaction.precio} referente a ${lastTransaction.category}`;

        if(history.length > prevProps.history.length){
            showNotification(title,detail,1500)    
        }

    }

    render(){
        const {history} = this.props;
        return (
            <View style={_card}>
                <Text style={_titleCard}>Ultimos Movimientos</Text>
                <FlatList
                    style={_list}
                    data={history}
                    renderItem={({item}) => (
                        <TransactionItem 
                            title={item.title} 
                            icon={item.icon} 
                            detalle={item.detalle} 
                            fecha={item.fecha} 
                            precio={item.precio}
                            category={item.category}
                            playa={item.playa}>
                        </TransactionItem>)}/>
                <SpaceSection/>
    
            </View>
        );
    }
};

export default TransactionsList;