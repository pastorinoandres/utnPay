
//dependecies
import React from 'react';
import { ScrollView, View } from 'react-native';

//components
import CarItem from "./CarItem"

//styles ..
import {
    _listCar
} from "../styles/globalStyles";

const CarsList = ({cars}) => {

    let list = cars.map((car)=>{
        return (<CarItem key={`${car.dominio}`} car={car}/>)
    })
    
    list.push(<CarItem key={`emply`} car={null}/>)

    return(
        <View style={_listCar}>
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                {list}
            </ScrollView>
        </View>       
    )
}


export default CarsList;