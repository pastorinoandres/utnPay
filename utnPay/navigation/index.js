//info: Apartado de configuración donde diseña la navegación de la app con React Navigation

//dependecies
import { createStackNavigator } from 'react-navigation';

//constants
import { HOME, PROFILE, SHOW_QR, SIGN_IN, REGISTER } from './constants' ;

//screens
import HomeScreen from '../screens/HomeScreen';
import ProfileScreen from './../screens/ProfileScreen';
import ShowQRScreen from './../screens/ShowQRScreen';
import SignInScreen from './../screens/SignInScreen';
import RegisterScreen from '../screens/RegisterScreen';



export const Navigator = createStackNavigator(
    {
      [HOME]: HomeScreen,
      [PROFILE]: ProfileScreen,
      [SHOW_QR]: ShowQRScreen,
      [SIGN_IN] : SignInScreen, 
      [REGISTER]: RegisterScreen
    },
    {
      initialRouteName: SIGN_IN,   
      headerMode: 'none'
    },
  );
  