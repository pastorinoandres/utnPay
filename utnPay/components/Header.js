
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
        const {showModal , saldo} = this.props;
        return (
            <View style={_header}>                

                
                    {(saldo)?(
                        <View style={_segundaLinea}>
                            <Text style={_subTitular}>Te quedan </Text>
                            <Text style={_bigNumber}>{`$${saldo}`}</Text>
                        </View>
                    ):(
                        <View style={_segundaLinea}>
                            <Text style={_subTitular}>No posees fondos </Text>
                            <Text style={_bigNumber}>{`:(`}</Text>
                        </View>
                    )}
                    
                

                <View style={_terceraLinea}>
                    <TouchableWithoutFeedback onPress={()=>{showModal()}}>
                        <Text style={_link}>cargar crédito</Text>
                    </TouchableWithoutFeedback>
                </View>
                
            </View>
        );
    }
}   



export default Header;