
//info: Pantalla donde se provee la configuración del usuario, como el login, sus autos, etc 

//dependecies
import React, { Component} from 'react';
import { connect } from 'react-redux';
import { View } from 'react-native';

//components
import Screen from './../components/Screen';
import HeaderProfile from './../components/HeaderProfile';
import Section from './../components/Section';
import SpaceSection from './../components/SpaceSection';
import SettingOptions from "./../components/SettingOptions";
import CarsList from "./../components/CarsList";

//styles
import { _bgGrisClaroApp } from '../styles/globalStyles';

//selectors
import { getFullName, getCars, getPhoto, getSettings } from '../state/selectors';




class ProfileScreen extends Component {

  //metodos

  goToBack= () =>{
    const { goBack } = this.props.navigation;
    goBack();
  }

  render(){

    const {cars,fullName,photo,settings} = this.props;

    return (
        <Screen _bgColor={_bgGrisClaroApp} goBack={true}>

          <HeaderProfile fullName={fullName} photo={photo}/>

          <View style={{backgroundColor : '#F2F2F2'}}>

            <Section title='Tus vehiculos'>
              <CarsList cars={cars}></CarsList>          
            </Section>

            <SpaceSection/>

            <Section title='Configuración'>
              <SettingOptions options={settings}></SettingOptions>
            </Section>          

          </View> 

        </Screen>
      
    );

  }  
    
}



const mapStateToProps = state => ({
  photo: getPhoto(state),
  fullName: getFullName(state),
  cars: getCars(state),
  settings: getSettings(state)
});

export default connect(
  mapStateToProps,
  null,
)(ProfileScreen);

