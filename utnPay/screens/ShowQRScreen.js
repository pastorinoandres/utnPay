
//info: Pantalla que permite mostrar al playero un código qr respectivo a la patente del auto a elección

//dependecies
import React, { Component} from 'react';
import { connect } from 'react-redux';
import { Text, View } from 'react-native';
import QRCode from 'react-native-qrcode';


//components
import Screen from '../components/Screen';
import CarsList from "../components/CarsList";

//styles
import { 
    _upContainer, 
    _titular, 
    _titleHeader, 
    _cardQr, 
    _dominioTxt, 
    _dominioLet, 
    _bgGrisClaroApp, 
    _headerShowQr, 
    _headerFixed 
} from '../styles/globalStyles';

//selectors
import { getCars, getUserId, getSaldo } from './../state/selectors/index';

//actions
import { setWallet } from './../state/actions/index';

//services
import createTransaction from './../services/createTransaction';


class showQRScreen extends Component {

    //metedos

    constructor(){
        super();
        this.state = {
            selectCar:''
        }
    }

    componentDidMount() {
        const { cars } = this.props;
        this.setState({selectCar:cars[0].dominio})
    }

    setSelectCar = (dominio)=>{
        this.setState({selectCar:dominio});
    }

    //subcomponentes
    
    headerFixedGreen = ()=>(
        <View style={[_headerFixed, _headerShowQr]}>
            <Text style={[_titular , _titleHeader]}>Mostrar el código QR {"\n"} al playero </Text>
        </View>
    )

    CardQr = ()=>{
        
        
        const { userId } = this.props;
        const { selectCar } = this.state;        
        const carQr = JSON.stringify({dominio:selectCar, userId:userId});        

        return(            
            
            <View style={_cardQr}>
                <QRCode value={carQr} size={300} bgColor='black'fgColor='white'/>
                <Text style={_dominioTxt}>dominio</Text>
                <Text style={_dominioLet}>{selectCar}</Text>
            </View>
                                      
        )
    }

    CarOptions = ({showNotification})=>{
        
        const { cars, setWallet, navigation, saldo } = this.props;
        const { selectCar } = this.state; 

        const TransactionAddFn = ()=>{
            if(saldo>=15){
                setWallet(createTransaction(selectCar));
                navigation.goBack(); 
            }else{
                const title = 'No posees credito suficiente';
                const detail = 'Paga en efectivo o carga crédito a tu cuenta'
                showNotification(title,detail,1500);
            }
                      
        }

        if((cars.length>1) && (!!selectCar)){

            return (
                <CarsList 
                    cars={cars} 
                    addItem={false} 
                    selectCar={selectCar} 
                    setSelectCar={this.setSelectCar}
                    doTransaction={TransactionAddFn}
                    saldo={saldo}>
                </CarsList>
            )
        }else{
            return null
        }

    }

    
    

  
    render() {

        const {CardQr, headerFixedGreen, CarOptions} = this;
    
        return (

            <Screen _bgColor={_bgGrisClaroApp} Header={headerFixedGreen} goBack={true} withToast={true} >                                

                <CardQr/>
                <CarOptions/>

            </Screen>
            
        );
    }

}



 




const mapStateToProps = state => ({
    cars: getCars(state),
    userId: getUserId(state),
    saldo: getSaldo(state),
  });
  
  const mapDispatchToProps = { setWallet };
  
  export default connect(
    mapStateToProps,
    mapDispatchToProps,
  )(showQRScreen);

