
//dependecies
import React from 'react';
import { ScrollView, View, StyleSheet } from 'react-native';

//components
import CarItem from "./CarItem"
import CarItemEmpty from "./CarItemEmpty"

//styles
import {_listCar } from "../styles/globalStyles";

const CarsList = ({cars, addItem=true, selectCar, setSelectCar, doTransaction}) => {

    
            
    let list = cars.map((car)=>{

        let _opaque;
           
        if(car.dominio !== selectCar){
            _opaque = true
        }

        if(selectCar){
            return (
                <CarItem 
                    key={`${car.dominio}`} 
                    car={car} 
                    _opaque={_opaque}
                    setSelectCar={setSelectCar}
                    doTransaction={doTransaction}
                />);
        }else{
            return (
                <CarItem 
                    key={`${car.dominio}`} 
                    car={car}
                />)
        }                
        
    })
  
    if(addItem){
        list.push(<CarItemEmpty key={`emply`} car={null}/>)
    }

    return(
        <View style={_listCar}>
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                {list}
            </ScrollView>
        </View>       
    )
}


export default CarsList;