//info: Modal que muestra los detalles de la transacción en cuestion

//dependecies
import React from 'react';
import { View, Text, Image } from 'react-native';

//components
import Card from './../components/Card';
import Modal from './../components/Modal';

//styles
import { _titleTransaction } from './../styles/globalStyles';


const Item = ({title, data})=>{

    return (

        <View style={{justifyContent:'space-between',borderBottomColor:'828282',borderBottomWidth:'1',borderStyle:'solid',marginBottom:15}}> 
            <Text
                style={{fontSize:16,fontWeight: '400',color: '#4F4F4F', textAlign: 'left', paddingBottom:7}}>
                {title}
            </Text>
            <Text
                style={{fontSize:20,fontWeight: '600',color: '#333333', textAlign: 'left', paddingVertical:5}}>
                {data}
            </Text>

        </View>

    )
}

const CoverPage = ({image, title})=>{

    const TitleTransaction = Text;
    const IconTransaction = Image;

    return (

        <View style={{flex:1, justifyContent: 'center', alignItems:'center'}}>

            <IconTransaction
            source={image}
            style={{width:125, height:125}}
            />

            <TitleTransaction 
                style={{fontSize:25,fontWeight: '800',color: '#333333', textAlign: 'center', padding:20}}>
                {title}
            </TitleTransaction>

        </View>

    )

    

}

const TransactionModal = ({visibility = false, setVisibility, info}) => {

    const ContainerDescription = View;
    

    return (
        <Modal visibility={visibility}>

            <Card onCloseFn={setVisibility}>

                <View style={{flex:1}}>

                    <CoverPage image={require('./../assets/images/carIcon.png')} title={info.category}/>                    

                    <ContainerDescription style={{marginHorizontal: 30}}>
                        <Item title="Fecha" data={info.fecha}/>
                        <Item title="Dominio" data={info.detalle}/>
                        <Item title="Playa" data={info.playa}/>
                    </ContainerDescription>

                </View>             

              
              
            </Card>

        </Modal>
    );
};

export default TransactionModal;
