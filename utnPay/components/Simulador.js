import React, {Fragment} from 'react';
import { View, StyleSheet } from 'react-native';
import { _simulador, activacionSimulador } from "./../styles/globalStyles";

const Simulador = ({children}) => {
    if(activacionSimulador){
        return (
            <View style={_simulador}>
                {children}
            </View>
        );
    }else{
        return (
            <Fragment>
                {children}
            </Fragment>
        );
    }
    
};

export default Simulador;
