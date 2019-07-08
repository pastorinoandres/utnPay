import React, {Fragment} from 'react';
import { View, ScrollView } from 'react-native';
import activacionSimulador , { _screen, _simulador, _subZonaVerde } from './../styles/globalStyles';
import ArrowBack from './ArrowBack';



//En caso de querer simular un dispositivo mas pequeño,
//configurar el mismo desde './../styles/globalStyles';
const Screen = ({children, Header, goToProfile, _bgColor, goBack = false}) => {
    
    const Simulator = View;
    const ContainerScreen = View;
    const ZonaVerde = View;


    if(activacionSimulador){
        return (
            <Simulator style={_simulador}>
                {(goBack)?<ArrowBack/>:null}
                {(Header)?<Header/>:null}
                <ContainerScreen style={[_screen, _bgColor]}>
                    <ScrollView bounces={true}>
                        {children}
                    </ScrollView>
                </ContainerScreen>
            </Simulator>
        );
    }else{
        return(
            <Fragment>
                {(goBack)?<ArrowBack/>:null}
                {(Header)?<Header/>:null}
                <ContainerScreen style={[_screen, _bgColor]}>
                    <ScrollView bounces={true}>
                        {children}
                    </ScrollView>
                </ContainerScreen>
            </Fragment>
        )
    }
};

export default Screen;