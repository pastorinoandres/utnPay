
//dependecies
import React from 'react';
import { TouchableOpacity, Text } from 'react-native';

//styles
import { _itemCarEmpty , _detailCarText  } from '../styles/globalStyles';

const CarItemEmpty = () => {
    
    return(

        <TouchableOpacity style={_itemCarEmpty}>

            <Text style={_detailCarText}>Agrega otro vehiculo</Text>
                    
        </TouchableOpacity>
    );

};

export default CarItemEmpty;