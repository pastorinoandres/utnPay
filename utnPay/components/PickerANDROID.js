import React from 'react';
import { Picker as PickerRN, View, Text, TouchableWithoutFeedback } from 'react-native';
import { _bgVerdeApp } from '../styles/globalStyles';
import PickerList from './PickerList';

const PickerANDROID = (props) => {
    
    const { setVisibility, items, name, fkProps } = props;
    const { values, handleChange } = fkProps;
    
    return (
        <PickerList 
            setVisibility={setVisibility}
            items={items}
            name={name}
            selectedValue={values[name]}
            onValueChange={handleChange(name)}
        />
    );
};

export default PickerANDROID;