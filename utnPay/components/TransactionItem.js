

//dependecies
import React, { Fragment, useState } from 'react';
import { View, Text,TouchableOpacity} from 'react-native';

//components
import Thumbnail from './Thumbnail';

//modals
import TransactionModal from './../modals/TransactionModal';

//styles
import { 
    _transactionContainer, 
    _titleTransaction, 
    _rightContainer, 
    _priceTransaction, 
    _leftContainer, 
    _transactionDescription, 
    _detailTransaction, 
    _dateTransaction 
} from '../styles/globalStyles';




const TransactionItem = ({title, icon, detalle, fecha, precio, category, playa}) => {

    const [visibility, setVisibility]= useState(false);

    const showModal = ()=>{
        setVisibility(!visibility)
    }

    const Left = View;
    const Right = View;
    const Container = View;
    const Title = Text;
    const Detalle = Text;
    const Precio = Text;
    const Fecha = Text;

    return (
        <Fragment>
            <TouchableOpacity onPress={showModal} >
                <Container style={_transactionContainer}>
                    <Left style={_leftContainer}>
                        <Thumbnail
                            size="medium"
                            source={icon}
                            border={true}>
                        </Thumbnail>
                        <View style={_transactionDescription}>
                            <Title style={_titleTransaction}>{title}</Title>
                            <Detalle style={_detailTransaction}>{`Dominio: ${detalle}`}</Detalle>
                        </View>                    
                    </Left>
                    <Right style={_rightContainer}>
                        <Precio style={_priceTransaction}>{`$${precio}`}</Precio>
                        <Fecha style={_dateTransaction}>{fecha}</Fecha>
                    </Right>
                </Container>
            </TouchableOpacity>
            <TransactionModal visibility={visibility} setVisibility={showModal} info={{category,playa,detalle,fecha}}/>            
        </Fragment>
                
    );
};

export default TransactionItem;