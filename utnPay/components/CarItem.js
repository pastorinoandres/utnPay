import React from 'react';
import { View, Image, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { _itemCar, _headerCar, _detailCar, _detailCarText, _iconService,_itemCarEmpty } from '../styles/globalStyles';

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





const HeaderCar = ({color}) => {

    const background = StyleSheet.create({

        Color:{
            backgroundColor:colors[color]
        }}
        
    )
    
    let iconCar = require('./../assets/images/auto_white.png')
    if(color ==="Blanco"){
        iconCar = require('./../assets/images/auto.png')
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

const CarItem = ({car}) => {

    if(car){

        return (
            
            <TouchableOpacity style={_itemCar}>

                <HeaderCar color={car.color}></HeaderCar>
                <DetailCar 
                    marca={car.marca}
                    modelo={car.modelo}
                    color={car.color}
                    dominio={car.dominio}
                />
                            
            </TouchableOpacity>
        );

    }else{

        return(

            <TouchableOpacity style={_itemCarEmpty}>

                <Text style={_detailCarText}>Agrega otro vehiculo</Text>
                        
            </TouchableOpacity>
        );

    }
};

export default CarItem;



