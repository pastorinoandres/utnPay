
//dependecies
import React from 'react';
import { View } from 'react-native';

//components
import Close from './Close';

//styles
import { _cardModal } from "./../styles/globalStyles";

const Card = ({onCloseFn, children}) => {
    
    const Card = View;
    return (
        <Card style={_cardModal}>
            <Close onCloseFn={onCloseFn}/>
            {children}
        </Card>
    );
};

export default Card;