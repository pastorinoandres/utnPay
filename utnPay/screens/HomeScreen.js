
//dependecies
import React, { Component} from 'react';
import { connect } from 'react-redux';
import { View, ScrollView, Text, StyleSheet, ImageBackground, TouchableOpacity } from 'react-native';

//constanst

//data
import servicesData from './../state/data/services';
import historyData from './../state/data/history';

//components
import Header from "./../components/Header";
import ServicesList from "./../components/ServicesList";
import TransactionsList from '../components/TransactionsList';
import Screen from './../components/Screen';
import ModalExample from "./../modals/ModalExample";

//Styles
import { _screen, _bgVerdeApp, _bgGrisClaroApp } from "../styles/globalStyles";
import { PROFILE } from '../navigation/constants';
import Simulador from './../components/Simulador';
import HeaderFixed from './../components/HeaderFixed';
import { Fragment } from 'react';


//selectors

//actions





class HomeScreen extends Component {


  goToProfile = () =>{
    const { navigate } = this.props.navigation;
    navigate(PROFILE);
  }

  HeaderFixedHome = ()=>(<HeaderFixed goToProfile={this.goToProfile}/>)

  render(){

    
    return (

      <Screen Header={this.HeaderFixedHome} _bgColor={_bgVerdeApp}>
                
        <Header></Header>
        <View style={_bgGrisClaroApp}>
          <ServicesList services={servicesData}></ServicesList>
          <TransactionsList history={historyData}></TransactionsList>
        </View>
        
                
      </Screen>       
        
    );   
  }  
    
}




// const mapStateToProps = state => ({
//   records: getRecords(state)
// });

// const mapDispatchToProps = {setCounterSelected, addAndSetCounter, getAndSet };


// const mapStateToProps = null;
// const mapDispatchToProps = null;

// export default connect(
//   mapStateToProps,
//   mapDispatchToProps,
// )(HomeScreen);

export default HomeScreen;

