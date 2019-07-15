
//dependecies
import React from 'react';
import { View, Text } from 'react-native';

//styles
import { _etiquetaTitle, _etiquetaContainer } from './../styles/globalStyles';

const Etiqueta = ({children}) => {
    return (
        <View  style={_etiquetaContainer}>
            <Text style={_etiquetaTitle}>{children}</Text>
        </View>
    );
};

export default Etiqueta;