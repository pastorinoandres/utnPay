
//dependecies
import { createStackNavigator } from 'react-navigation';

//constants
import { HOME, PROFILE, TRANSACTION, SHOW_QR } from './constants' ;

//screens
import HomeScreen from '../screens/HomeScreen';
import ProfileScreen from './../screens/ProfileScreen';
// import TransactionScreen from '../screens/TransactionScreen';
import ShowQRScreen from './../screens/ShowQRScreen';



export const Navigator = createStackNavigator(
    {
      [HOME]: HomeScreen,
      [PROFILE]: ProfileScreen,
      [SHOW_QR]: ShowQRScreen
    },
    {
      initialRouteName: HOME,   
      headerMode: 'none'
    },
  );
  