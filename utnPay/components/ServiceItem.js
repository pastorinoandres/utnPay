import React from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native';
import { _item, _itemTitle, _iconService, _itemService, _disabled, _nivel1,_nivel2 } from '../styles/globalStyles';
import Etiqueta from './Etiqueta';
import { withNavigation } from 'react-navigation';

const ServiceItem = ({icon, name, screenName, enabled, navigation}) => {
    
    const activo = (enabled)? _nivel1 : [_nivel1 , _disabled];
       
    
    return (
        
        <TouchableOpacity 
            style={_item}
            onPress={()=>{if(screenName){navigation.navigate(screenName)}}}>
            <View style={activo}>
                <View style={_itemService}>
                    <Image style={_iconService} source={icon}></Image>
                </View>            
                <Text style={_itemTitle}>{name}</Text>
            </View>
            {(!enabled)?(
                <View style={_nivel2}>
                    <Etiqueta>proximamente</Etiqueta>            
                </View> ):null}
                           
        </TouchableOpacity>
    );
};

export default withNavigation(ServiceItem);