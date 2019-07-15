
//dependecies
import React from 'react';
import { View } from 'react-native';

//styles
import { _toastCard } from '../styles/globalStyles';

const ToastCard = ({styleLayout, children}) => {
    return (
        <View style={(styleLayout)?[_toastCard,styleLayout]:_toastCard}>
            {children}            
        </View>
    );
};

export default ToastCard; 