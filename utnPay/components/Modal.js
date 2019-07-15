
//dependecies
import React from 'react';
import { View, Modal } from 'react-native';

//styles
import { _darkLayer } from "./../styles/globalStyles";

const ChargeCreditModal = ({visibility = false, children}) => {

    const DarkLayer = View;

    return (
        <Modal animationType="fade" transparent={true} visible={visibility}>

          <DarkLayer style={_darkLayer}>

            {children}

          </DarkLayer>

        </Modal>
    );
};

export default ChargeCreditModal;