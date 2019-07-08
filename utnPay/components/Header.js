
//dependecies
import React, { Component } from 'react';
import { View , Text, TouchableWithoutFeedback } from 'react-native';


//styles
import { 
    _header, 
    _titular, 
    _space, 
    _primerLinea,
    _segundaLinea,
    _terceraLinea, 
    _subTitular,
    _bigNumber,
    _link
} from "../styles/globalStyles";





class Header extends Component {
    render() {
        return (
            <View style={_header}>                

                <View style={_segundaLinea}>
                    <Text style={_subTitular}>Te quedan </Text>
                    <Text style={_bigNumber}>$400</Text>
                </View>

                <View style={_terceraLinea}>
                    <TouchableWithoutFeedback>
                        <Text style={_link}>cargar crédito</Text>
                    </TouchableWithoutFeedback>
                </View>
                
            </View>
        );
    }
}   



export default Header;