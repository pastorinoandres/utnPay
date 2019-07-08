//dependecies
import React, { Component } from 'react';
import QRCode from 'react-native-qrcode';
import { Text, View, StyleSheet, Button } from 'react-native';
import Constants from 'expo-constants';
import * as Permissions from 'expo-permissions';
import { BarCodeScanner } from 'expo-barcode-scanner';

//components
import Screen from '../components/Screen';
import ArrowBack from '../components/ArrowBack';
import CarsList from "../components/CarsList";

//styles
import { _upContainer, _titular, _titleHeader, _cardQr, _dominioTxt, _dominioLet, _bgGrisClaroApp, _headerShowQr, _headerFixed } from '../styles/globalStyles';

//data
import carsData from '../state/data/cars';


class showQRScreen extends Component {

  
    render() {

        const ZonaVerde = View;
        const carQr = JSON.stringify({dominio:"MWU131", userId:"37218703"});

        const headerFixedGreen = ()=>(
            <ZonaVerde style={[_headerFixed, _headerShowQr]}>
                <Text style={[_titular , _titleHeader]}>Mostrar el código QR {"\n"} al playero </Text>
            </ZonaVerde>)


        return (

            <Screen _bgColor={_bgGrisClaroApp} Header={headerFixedGreen} goBack={true} >                                

                <View style={_cardQr}>
                <QRCode
                        value={carQr}
                        size={300}
                        bgColor='black'
                        fgColor='white'
                    />
                    <Text style={_dominioTxt}>dominio</Text>
                    <Text style={_dominioLet}>MWU131</Text>
                </View>



                <CarsList cars={carsData}></CarsList>

            </Screen>
            
        );
    }

}



  
export default showQRScreen;


