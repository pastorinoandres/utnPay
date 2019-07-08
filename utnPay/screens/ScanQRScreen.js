//dependecies
import React, { Component } from 'react';
import QRCode from 'react-native-qrcode';
import { Text, View, StyleSheet, Button } from 'react-native';
import Constants from 'expo-constants';
import * as Permissions from 'expo-permissions';
import { BarCodeScanner } from 'expo-barcode-scanner';

//components
import Screen from './../components/Screen';
import ArrowBack from './../components/ArrowBack';
import CarsList from "./../components/CarsList";

//styles
import { _upContainer, _titular, _titleHeader, _cardQr, _dominioTxt, _dominioLet, _bgGrisClaroApp } from './../styles/globalStyles';

//data
import carsData from './../state/data/cars';


class ScanQRScreen extends Component {

    state = {
        hasCameraPermission: null,
        scanned: false,
    };
    
    async componentDidMount() {
        this.getPermissionsAsync();
    }
    
    getPermissionsAsync = async () => {
        const { status } = await Permissions.askAsync(Permissions.CAMERA);
        this.setState({ hasCameraPermission: status === 'granted' });
    };
    
    render() {

        const ZonaVerde = View;
        const carQr = JSON.stringify({dominio:"MWU131", userId:"37218703"});

        const { hasCameraPermission, scanned } = this.state;

        if (hasCameraPermission === null) {
        return <Text>Requesting for camera permission</Text>;
        }
        if (hasCameraPermission === false) {
        return <Text>No access to camera</Text>;
        }

       
        return (

            <View
                style={{
                flex: 1,
                flexDirection: 'column',
                justifyContent: 'flex-end',
                }}>
                <BarCodeScanner
                onBarCodeScanned={scanned ? undefined : this.handleBarCodeScanned}
                style={StyleSheet.absoluteFillObject}
                />

                {scanned && (
                <Button title={'Tap to Scan Again'} onPress={() => this.setState({ scanned: false })} />
                )}
            </View>
            
        );
    }

    handleBarCodeScanned = ({ type, data }) => {
        this.setState({ scanned: true });
        alert(`Bar code with type ${type} and data ${data} has been scanned!`);
        console.log(type);
        console.log(data);
    };
}



  
export default ScanQRScreen;
