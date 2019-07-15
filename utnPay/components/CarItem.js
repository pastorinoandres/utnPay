
//dependecies
import React from 'react';
import { View, Image, Text, TouchableOpacity, StyleSheet } from 'react-native';


//styles
import { 
    _itemCar, 
    _itemCarNoSelect,
    _headerCar, 
    _detailCar, 
    _detailCarText, 
    _iconService, 
    _itemCarEmpty, 
    _itemCarSelected 
} from '../styles/globalStyles';

const colors = {

    "Negro":       '#000000',
    "Gris Oscuro": '#4F4F4F',    
    "Gris Plata":  '#E0E0E0',
    "Blanco":      '#FFFFFF',
    "Naranja":     '#F2994A',
    "Celeste":     '#56CCF2',
    "Marron":      '#7A4A1F',
    "Violeta":     '#9B51E0',
    "Amarillo":    '#F2C94C',
    "Azul":        '#2F80ED',
    "Verde":       '#219653',
    "Rojo":        '#EB5757'

}





const HeaderCar = ({color, opaque}) => {

    

    let background = StyleSheet.create({

        Color:{
            backgroundColor:colors[color]
        }}
        
    )



    if(color==='Blanco'){

        background = StyleSheet.create({

            Color:{
                backgroundColor:colors[color],
                borderBottomColor:'#828282',
                borderBottomWidth:1,
                borderStyle:'solid'
            }
        },
                        
        )

    }
    
    let iconCar = require('./../assets/images/car_white.png')
    if(color ==="Blanco"){
        iconCar = require('./../assets/images/car.png')
    }

    return (
        <View style={[_headerCar, background.Color]}>
            <Image style={_iconService} source={iconCar}></Image>
        </View>
    );
};


const DetailCar = ({marca, modelo, color, dominio}) => {
    return (
        <View style={_detailCar}>
            <Text style={_detailCarText}>Marca: {marca}</Text>
            <Text style={_detailCarText}>Modelo: {modelo}</Text>
            <Text style={_detailCarText}>Color: {color}</Text>
            <Text style={_detailCarText}>Dominio: {dominio}</Text>
        </View>
    );
};





const CarItem = ({car, setSelectCar, _opaque, doTransaction})=>(
        
    <TouchableOpacity 
        style={(_opaque)?[_itemCar, _itemCarNoSelect]:[_itemCar, _itemCarSelected]}
        onPress = {()=>{
            if(setSelectCar && _opaque){
                setSelectCar(car.dominio)                
            }
        }}
        onLongPress={doTransaction}
    >
        <View style={(_opaque)?{flex:1, opacity:0.4}:{flex:1}}>

            <HeaderCar 
                color={car.color}/>
            <DetailCar 
                marca={car.marca}
                modelo={car.modelo}
                color={car.color}
                dominio={car.dominio}
            />
            
        </View>

    </TouchableOpacity>

);

export default CarItem;




