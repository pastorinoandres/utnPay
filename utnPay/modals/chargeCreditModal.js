//info: Es un modal informativo que muestra como se debe cargar crédito en la cuenta

//dependecies
import React from 'react';
import { View, Text, Image } from 'react-native';

//components
import Card from './../components/Card';
import Modal from './../components/Modal';

const ChargeCreditModal = ({visibility = false, setVisibility}) => {

    return (
        <Modal visibility={visibility}>

            <Card onCloseFn={setVisibility}>

              <View style={{flex:1,justifyContent:'space-between', alignItems:'center',}}>

                <Text 
                  style={{fontSize:25,fontWeight: '700',color: '#333333', textAlign: 'center', padding:20, marginTop:50}}>
                  Cargue crédito con tan solo tu DNI
                </Text>

                <Image 
                  source={require('./../assets/images/efectivo.png')}
                  style={{width:125, height:125, margin:20}}
                ></Image>

                <Text
                  style={{fontSize:18,fontWeight: '500',color: '#4F4F4F', textAlign: 'center', padding:20,}}>
                  Acerquese hasta la oficina de pagos y abone un minimo de $100
                </Text>

              </View>          
              
            </Card>

        </Modal>
    );
};

export default ChargeCreditModal;