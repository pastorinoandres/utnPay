
//dependecies
import React from 'react';
import { FlatList, Alert } from 'react-native';
import { connect } from 'react-redux';
import { withNavigation } from 'react-navigation';

//components
import SettingItem from "./../components/SettingItem";

//styles
import { _list } from '../styles/globalStyles';

//actions
import { resetSetup, chargeInitialSetup } from './../state/actions/index';

const SettingOptions = ({options, resetSetup, chargeInitialSetup, navigation}) => {

    
    const commingSoon = ()=>{Alert.alert('Caracteristica en desarrollo')}
    const initialSetup= ()=>{chargeInitialSetup();navigation.goBack()}
    const reset= ()=>{resetSetup();navigation.goBack()}

    const action = (key)=>{
        switch (key) {
            case "setting1":{
                return commingSoon
                break;
            }
            case "setting2":{
                return commingSoon
                break;
            }
            case "setting3":{
                return initialSetup
                break;
            }
            case "setting4":{
                return reset
                break;
            }
            default:
                break;
        }
    }


    return (
                  
        <FlatList
            style={_list}
            data={options}
            renderItem={({item}) => {
                return (
                    <SettingItem 
                        title={item.title} 
                        icon={item.icon} 
                        detalle={item.detalle}
                        action={action(item.key)}>
                    </SettingItem>)
            }}>
        </FlatList>            
        
    );
};




const mapDispatchToProps = { chargeInitialSetup, resetSetup };

export default connect(null,mapDispatchToProps)(withNavigation(SettingOptions));