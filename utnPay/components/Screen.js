
//dependecies
import React, {Component, Fragment} from 'react';
import { View, ScrollView } from 'react-native';
import Toast from 'react-native-easy-toast'

//styles
import { _screen, _simulador, _subZonaVerde } from './../styles/globalStyles';

//components
import ArrowBack from './ArrowBack';
import Notification from './Notification';

//Styles
import { _toast } from "../styles/globalStyles";

//En caso de querer simular un dispositivo mas pequeño,
//configurar el mismo desde './../styles/globalStyles';



class Screen extends Component{
    
    showNotification = (title='Notification Title',detail="Detail of notification",duration=1000,callback=()=>{})=>{
        const notify = (<Notification title={title} detail={detail}/>);
        this.refs.toast.show(notify,duration,callback);
    }

    render(){        

        const {children, Header, _bgColor, goBack = false, withToast, scrollable= true} = this.props;
        const ContainerScreen = View;


        const contentScreen = 
        (withToast)
            ?React.Children.map(
            this.props.children, child => {
                return React.cloneElement(child, { showNotification: this.showNotification })})
            :children        

    
        return(
            <Fragment>
                <Toast 
                    ref="toast" 
                    style={_toast} 
                    position='top' 
                    positionValue={30}
                    fadeInDuration={750}
                    fadeOutDuration={1000}/>
                {(goBack)?<ArrowBack/>:null}
                {(Header)?<Header/>:null}
                <ContainerScreen style={[_screen, _bgColor]}>
                    <ScrollView bounces={scrollable}>
                        {contentScreen}
                    </ScrollView>
                </ContainerScreen>                    
            </Fragment>
        )
        

    }
};

export default Screen;






