
//dependecies
import React from 'react';
import { TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

//styles
import { _closeButton } from './../styles/globalStyles';

const Close = ({onCloseFn}) => {

    return (
        <TouchableOpacity style={_closeButton} onPress={onCloseFn}>
            <Ionicons 
                name="ios-close" 
                size={48} 
                color="#828282" />                      
        </TouchableOpacity>
    )
};

export default Close;