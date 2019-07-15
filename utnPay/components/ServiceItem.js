
//dependecies
import React, {Component, Fragment} from 'react';
import { View, Image, Text, TouchableOpacity, Alert } from 'react-native';
import { withNavigation } from 'react-navigation';

//components
import Etiqueta from './Etiqueta';

//styles
import { 
    _item, 
    _itemTitle, 
    _iconService, 
    _itemService, 
    _disabled, 
    _nivel1,
    _nivel2 
} from '../styles/globalStyles';



class ServiceItem extends Component {

    onPressService = ()=>{

        const {screenName, navigation, name, chargedCreditToday} = this.props;

        if(screenName){

            if(chargedCreditToday){

                const title = `Ya pagaste estacionamiento hoy!`;
                const detail= `Podes usar la playa de estacionamiento durante todo el dia :)`;
                this.props.showNotification(title,detail);

            }else{

               navigation.navigate(screenName);
                
            }

        }else{
            const title = `Proximamente ${name}!`;
            const detail= `Pronto podras disfrutar de este nuevo servicio :)`;
            this.props.showNotification(title,detail);
        }

    }

    render() {
        
        
        const {icon, name, enabled} = this.props;
        const activo = (enabled)? _nivel1 : [_nivel1 , _disabled];

        return (
            
            <Fragment>
                <TouchableOpacity 
                    style={_item}
                    onPress={this.onPressService}>
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
            </Fragment>
            
        );
    }
}
export default withNavigation(ServiceItem);