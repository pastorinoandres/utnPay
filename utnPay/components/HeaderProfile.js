
//dependecies
import React from 'react';
import { View, Text } from 'react-native';


//components
import ArrowBack from './../components/ArrowBack';
import PhotoProfile from './PhotoProfile';

//Styles
import { _screen, _header, _headerProfile, _upContainer, _downContainer, _nameUser } from "../styles/globalStyles";


const HeaderProfile = () => {

    const ZonaVerde = View;
    const ZonaBlanca = View;
    
    return (

        <View style={_headerProfile}>

            <PhotoProfile source={require('../assets/images/photo.jpg')}/>

            <ZonaVerde style={_upContainer}></ZonaVerde>

            <ZonaBlanca style={_downContainer}>
                <Text style={_nameUser}>Andres Pastorino</Text>
            </ZonaBlanca>

        </View>
    );
};

export default HeaderProfile;