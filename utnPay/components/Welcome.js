
//dependecies
import React from 'react';
import { View, Text, Image,TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { withNavigation } from 'react-navigation';

//constants
import { SHOW_QR } from './../navigation/constants';

//styles
import { _bgVerdeApp, _screen } from './../styles/globalStyles';
import { useCredit } from "./../state/actions";



const Welcome = ({navigation, useCredit}) => {

    const leyenda = "*El crédito otorgado solo es valido para el  estacionamiento de la Universidad Tecnologica Nacional, regional La Plata. No se puede canjear por dinero, ni transferir a otro usuario."
    return (
        
        <View style={[_screen, _bgVerdeApp, {flex:1, alignItems:'center',justifyContent:'center',padding:20}]}>

            <Text style={{fontSize:45, color: 'white',fontWeight:'500',paddingBottom:10}}> ¡Bienvenido!</Text>

            <Text style={{fontSize:20, color: 'white',fontWeight:'300',paddingBottom:60}}> Tenemos un regalo para ti</Text>

            <Image source={require('./../assets/images/regalo.png')}/>

            <View style={{flexDirection: 'row', justifyContent:'center', paddingVertical:30}}>
                <Text style={{fontSize:50, color: 'white',fontWeight:'700',paddingBottom:10}}>$15</Text> 
                <Text style={{fontSize:28, color: 'white',fontWeight:'500',paddingBottom:40}}>*</Text>
            </View>

            <Text style={{fontSize:16, color: 'white',fontWeight:'300',paddingBottom:80,textAlign:'center'}}>{leyenda}</Text>
            <TouchableOpacity style = {{backgroundColor:'rgba(255,255,255,0.2)',borderRadius:15, padding:20}} onPress={()=>{setTimeout(useCredit,1000) ; navigation.navigate(SHOW_QR)}}>
                <Text style={{fontSize:25, color: 'white',fontWeight:'500'}}>USAR CREDITO</Text>
            </TouchableOpacity>
        </View>
    );
};




  
  const mapDispatchToProps = { useCredit };
  
  export default connect(
    null,
    mapDispatchToProps,
  )(withNavigation(Welcome));
