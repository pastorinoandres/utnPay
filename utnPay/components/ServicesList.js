
//dependecies
import React from 'react';
import { ScrollView, View } from 'react-native';

//components
import ServiceItem from "./ServiceItem"

//styles ..
import { 
    _item,
    _listHorizontal
} from "../styles/globalStyles";


const ServicesList = ({services, showNotification, chargedCreditToday}) =>{

    
    const list = services.map((service,index)=>{

        return (
            <ServiceItem 
                key={`${index})${service.name}`}
                icon={service.icon} 
                name={service.name} 
                screenName={service.screenName} 
                enabled={service.enabled}
                showNotification={showNotification}
                chargedCreditToday={chargedCreditToday}
            />
        )
    })

    

    return(
        <View style={_listHorizontal}>
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                {list}
            </ScrollView>
        </View>       
    )
}
export default ServicesList;