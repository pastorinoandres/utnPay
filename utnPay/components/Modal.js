
//dependecies
import React from 'react';
import { View, TouchableWithoutFeedback, Modal as ModalRN  } from 'react-native';

//styles
import { _darkLayer } from "./../styles/globalStyles";

const Modal = ({visibility = false, animationType='fade', onPressModalFn, dark=true, children}) => {

    const DarkLayer = View;
    const TransparentLayer = (dark)?{}:{backgroundColor:'rgba(0, 0, 0, 0)'}

    return (
        <ModalRN animationType={animationType} transparent={true} visible={visibility}>
          <TouchableWithoutFeedback onPress={onPressModalFn}>
            <DarkLayer style={[_darkLayer,TransparentLayer]}>
              {children}
            </DarkLayer>
          </TouchableWithoutFeedback>
        </ModalRN>
    );
};

export default Modal;