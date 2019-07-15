
//info: Pantalla principal donde se puede observar el historial de transacciones y saldo actual.
//      De la misma se puede navegar al resto de las pantallas. 

//dependecies
import React, { Component} from 'react';
import { connect } from 'react-redux';
import { View, Text, Image, TouchableWithoutFeedback } from 'react-native';

//components
import Screen from './../components/Screen';
import Header from "./../components/Header";
import HeaderFixed from './../components/HeaderFixed';
import ServicesList from "./../components/ServicesList";
import TransactionsList from '../components/TransactionsList';
import Welcome from "../components/Welcome";

//styles
import { _screen, _bgVerdeApp, _bgGrisClaroApp, _toast } from "../styles/globalStyles";

//constants
import { PROFILE, SHOW_QR } from '../navigation/constants';

//modals
import ChargeCreditModal from '../modals/ChargeCreditModal';

//selectors
import { getHistory, getSaldo, getAlias, getPhoto, getServices, getAnswer, getGiftUsed } from '../state/selectors';



class HomeScreen extends Component {

  //metodos

  constructor(){
    super();
    this.state={
      visibility:false
    }
  }
 
  goToProfile = () =>{
    const { navigate } = this.props.navigation;
    navigate(PROFILE);
  }

  setVisibility = ()=>{
    this.setState({visibility:!this.state.visibility})
  }

  //subcomponentes

  HeaderFixedHome = ()=>(
    <HeaderFixed 
      goToProfile={this.goToProfile} 
      alias={this.props.alias} 
      photo={this.props.photo}/>)

  
  ContentScreen = ({showNotification})=>{

    const {history, services, chargedCreditToday, saldo} = this.props;


    if(history.length){

      return (
        <View style={_bgGrisClaroApp}>
          <ServicesList services={services} showNotification={showNotification} chargedCreditToday={chargedCreditToday} ></ServicesList>
          <TransactionsList history={history} saldo={saldo} showNotification={showNotification}></TransactionsList>
        </View>
      )

    }else{

      return (
        <View style={{flex:1}}>

          <ServicesList services={services} showNotification={showNotification} chargedCreditToday={chargedCreditToday} ></ServicesList>
            <TouchableWithoutFeedback onPress={()=>this.props.navigation.navigate(SHOW_QR)}>                          
              <View style={{flex:1, justifyContent: 'center', alignItems: 'center',paddingTop:100}}>  
                <Image source={require('./../assets/images/empty.png')}/>
                <Text style={{fontSize:20, color: 'white',fontWeight:'400',paddingTop:20,textAlign: 'center',color:'#4F4F4F'}}> Adquiere un servicio para verlo aqui</Text>       
              </View>
            </TouchableWithoutFeedback>        
        </View>
      )
    }

    
  }


  render(){
    
    const { ContentScreen } = this;
    const { saldo, history, giftUsed } = this.props;

    
    

    if(!giftUsed){
      return(<Welcome/>)
    }

    return (

      <Screen Header={this.HeaderFixedHome} _bgColor={(history.length)?_bgVerdeApp:_bgGrisClaroApp} withToast={true} scrollable={history.length} >
                
        <Header showModal={this.setVisibility} saldo={saldo}></Header>        
        <ContentScreen/>
        <ChargeCreditModal visibility={this.state.visibility} setVisibility={this.setVisibility}/>          
                
      </Screen>       
        
    );   
  }  
    
}


const mapStateToProps = state => ({
  history: getHistory(state),
  chargedCreditToday:getAnswer(state),
  saldo: getSaldo(state),
  alias: getAlias(state),
  photo: getPhoto(state),
  services: getServices(state),
  giftUsed: getGiftUsed(state)
});

export default connect(
  mapStateToProps,
  null,
)(HomeScreen);


