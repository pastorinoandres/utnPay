import React from 'react';
import { View, Text,TouchableOpacity} from 'react-native';
import Thumbnail from './Thumbnail';
import { _transactionContainer, _titleTransaction, _rightContainer, _priceTransaction } from '../styles/globalStyles';
import { _leftContainer, _transactionDescription, _detailTransaction, _dateTransaction } from './../styles/globalStyles';

const Left = View;
const Container = View;
const Title = Text;
const Detalle = Text;


const SettingItem = ({title, icon, detalle }) => {
    return (
        <TouchableOpacity>
            <Container style={_transactionContainer}>
                <Left style={_leftContainer}>
                    <Thumbnail
                        size="medium"
                        source={icon}
                        border={true}>
                    </Thumbnail>
                    <View style={_transactionDescription}>
                        <Title style={_titleTransaction}>{title}</Title>
                        <Detalle style={_detailTransaction}>{detalle}</Detalle>
                    </View>                    
                </Left>               
            </Container>
        </TouchableOpacity>        
    );
};

export default SettingItem;