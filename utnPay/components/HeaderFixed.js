//dependecies
import React from 'react';
import { View , Text } from 'react-native';

//components
import Thumbnail from "./Thumbnail";

//styles
import {
    _headerFixed,
    _titular, 
    _space, 
    _primerLinea
} from "../styles/globalStyles";

const HeaderFixed = ({goToProfile}) => {
    return (
        <View style={[_headerFixed, _primerLinea]}>
            <View style={_space}></View>
            <Text style={_titular}>Hola Andres!</Text> 
            <Thumbnail
                size="small"
                source={require('../assets/images/photo.jpg')}
                onPress={goToProfile}>
            </Thumbnail>
        </View>
    );
};

export default HeaderFixed;