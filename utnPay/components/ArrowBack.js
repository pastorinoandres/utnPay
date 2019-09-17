
//dependecies
import React from 'react';
import { TouchableOpacity, Platform } from 'react-native';
import { withNavigation } from 'react-navigation';
import { Ionicons } from '@expo/vector-icons';

//styles
import { _tochedZone } from './../styles/globalStyles';

const ArrowBack = (props) => {

    const goToBack = ()=>{
        props.navigation.goBack();
    }

    if(Platform.OS==='android'){
        return null
    }
    
    return (
        <TouchableOpacity style={_tochedZone} onPress={goToBack}>
            <Ionicons 
                name="ios-arrow-round-back" 
                size={48} 
                color="white" />                      
        </TouchableOpacity>
    )
};

export default withNavigation(ArrowBack);