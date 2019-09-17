//info: Es un modal informativo que muestra como se debe cargar crédito en la cuenta

//dependecies
import React from 'react';
import { Platform } from 'react-native';

//components
import Modal from './../components/Modal';
import PickerIOS from "./../components/PickerIOS";
import PickerANDROID from './../components/PickerANDROID';


const PickerModal = ({visibility = false, setVisibility, fkProps, items, name}) => {

    const goOut = ()=>{

        setVisibility();

        if(!fkProps.touched[name]){
            fkProps.setFieldTouched(name)
        }        
        
    }
    if (Platform.OS === 'ios'){
        
        return (
            <Modal visibility={visibility} animationType='slide' onPressModalFn={goOut} dark={false}>
                <PickerIOS fkProps={fkProps} setVisibility={goOut} items={items} name={name}/>
            </Modal>
        );

    }
    else{

        return (
            <Modal visibility={visibility} animationType='fade' onPressModalFn={goOut} dark={true}>
                <PickerANDROID fkProps={fkProps} setVisibility={goOut} items={items} name={name}/>
            </Modal>
        );

    }
};

export default PickerModal;