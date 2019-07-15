
//dependecies
import React from 'react';
import { TouchableOpacity, Image } from 'react-native';

//styles
import { _small, _medium, _big, _border } from './../styles/globalStyles';



const Thumbnail = ({size, border = false, source, onPress = null}) => {
    
    let styles;

    switch (size) {
        case "small":
            style = _small;            
            break;
        case "medium":
            style = _medium;            
            break;
        case "big":
            style = _big;            
            break;
    
        default:
            style = _small; 
            break;
    };

    if(border){
        styles =[style,_border];
    }else{
        styles = style
    }

    

    if(onPress){
        return(
        <TouchableOpacity onPress={onPress}>
            <Image
                style={styles}
                source={source}>
            </Image>
        </TouchableOpacity>)
    }else{
        return(
            <Image
                style={styles}
                source={source}>
            </Image>)
    }
}

export default Thumbnail;
