
//dependecies
import React, { Component } from 'react';
import { Text, View, Image,  Keyboard, TouchableWithoutFeedback, TouchableOpacity, Dimensions, PixelRatio, KeyboardAvoidingView } from 'react-native';
import Constants from 'expo-constants';

//components
import Screen from './../components/Screen';
import Button from './../components/Button';
import Line from './../components/Line';

//styles
import { _bgGrisClaroApp, _bgVerdeApp, _bgFacebook  } from "../styles/globalStyles";

//forms
import SingInForm from './../forms/SingInForm';
import { StyleSheet } from 'react-native';
import { Platform } from 'react-native';


class SignInScreen extends Component {
    render() {

        const {navigation} = this.props
   
        return (
            <KeyboardAvoidingView style={styles.inputZone} behavior='padding' enabled keyboardVerticalOffset={-150}>
            <Screen scrollable={false} >                
                    
                    <View style={styles.container}>

                        <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
                            <View style={styles.header}>
                                <Image style={styles.logo} source={require('../assets/logo.png')}></Image>
                                {/* <Text style={styles.logotipo}>Pay</Text> */}
                            </View>
                        </TouchableWithoutFeedback>

                        <View style={styles.authOptions}>

                            <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
                                <Text style={styles.titleH1}>Iniciar sesión</Text>
                            </TouchableWithoutFeedback>
                            
                            <SingInForm/>
                            
                            <Button 
                                textButton= 'Ingresar con facebook' 
                                _bgButton={_bgFacebook}
                                onPressFn={()=>navigation.navigate('HOME')}                                
                            />
                            <Line color={'#219653'} margin={2}></Line>
                            <Text style={styles.message}>¿Todavía no tenes cuenta?</Text>
                            <TouchableOpacity 
                                style={styles.option}
                                onPress={()=>navigation.navigate('REGISTER')}
                            >
                                <Text style={styles.buttonText}>Crear cuenta</Text>
                            </TouchableOpacity>

                        </View>

                    </View>
                        
                        
                        
                
            </Screen>
            </KeyboardAvoidingView>
            
            
        );
    }
}

const deviceWidth = Dimensions.get('window').width
console.log(`Ancho en dp: ${deviceWidth}`);
const deviceHeight = Dimensions.get('window').height
const fnValue = x => PixelRatio.roundToNearestPixel((deviceWidth*x)/100);
// console.log('Dimensions.screen');
// console.log(Dimensions.get('window'));
// console.log('Dimensions.screen');
// console.log(Dimensions.get('window'));
console.log(` deviceName: ${Constants.deviceName}`);
deviceWidthSelect = 414;
const alfa = deviceWidth / deviceWidthSelect;

export const isIphoneX = () => {
    const dimen = Dimensions.get('window')
    return (
      Platform.OS === 'ios' && !Platform.isPad && !Platform.isTVOS && 
      (dimen.height === 812 || dimen.width === 812 || (dimen.height === 896 || dimen.width === 896))
    )
}

const footerSafe = isIphoneX() ? 40:10

const styles = StyleSheet.create({
    container:{flex:1,justifyContent:'space-between',paddingHorizontal:30},
    logo:{marginBottom:15, height:'40%',aspectRatio:1},
    logotipo:{fontSize: 0.035*deviceHeight, fontWeight:'600', marginBottom:5,color:'#219653'},
    titleH1:{fontSize: 27, fontWeight:'500', marginBottom:30,color:'#333333'},
    message:{fontSize: 20, fontWeight:'400', marginBottom:10,marginTop:10,color:'#333333'},
    option:{height:50, justifyContent:'center', alignItems:'center'},
    buttonText:{fontSize: 20, fontWeight:'400',color:'#333333',textDecorationLine: 'underline'},
    authOptions:{alignItems:'center',width:'100%',paddingBottom:footerSafe, justifyContent:'flex-end'},
    header:{flex:1, paddingTop:Constants.statusBarHeight, justifyContent:'center', alignItems:'center'},
    inputZone:{width:'100%',flex:1}
})

export default SignInScreen;