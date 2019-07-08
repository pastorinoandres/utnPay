
//dependecies
import React, { Component} from 'react';
import { connect } from 'react-redux';
import { ScrollView, View } from 'react-native';

//components
import Screen from './../components/Screen';
import HeaderProfile from './../components/HeaderProfile';
import Section from './../components/Section';
import SpaceSection from './../components/SpaceSection';
import SettingOptions from "./../components/SettingOptions";


import CarsList from "./../components/CarsList";

//data
import carsData from './../state/data/cars';
import SettingsData from './../state/data/settings';
import { _bgGrisClaroApp } from '../styles/globalStyles';




class ProfileScreen extends Component {

  goToBack= () =>{
    const { goBack } = this.props.navigation;
    goBack();
  }

  render(){

    return (
        <Screen _bgColor={_bgGrisClaroApp} goBack={true}>

          <HeaderProfile/>

          <View style={{backgroundColor : '#F2F2F2'}}>

            <Section title='Tus vehiculos'>
              <CarsList cars={carsData}></CarsList>          
            </Section>

            <SpaceSection/>

            <Section title='Configuración'>
              <SettingOptions options={SettingsData}></SettingOptions>
            </Section> 

          

          </View> 

        </Screen>
      
    );

  }  
    
}



// const mapStateToProps = state => ({
//   records: getRecords(state)
// });

// const mapDispatchToProps = {setCounterSelected, addAndSetCounter, getAndSet };


const mapStateToProps = null;
const mapDispatchToProps = null;

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ProfileScreen);

