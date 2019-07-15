
//dependecies
import React from 'react';
import { View, Text,TouchableOpacity} from 'react-native';

//components
import Thumbnail from './Thumbnail';

//styles
import { _transactionContainer, 
    _titleTransaction, 
    _rightContainer, 
    _priceTransaction,
    _leftContainer, 
    _transactionDescription, 
    _detailTransaction, 
    _dateTransaction  
} from '../styles/globalStyles';




const SettingItem = ({title, icon, detalle, action }) => {

    const Left = View;
    const Container = View;
    const Title = Text;
    const Detalle = Text;
    
    return (
        <TouchableOpacity onPress={action}>
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