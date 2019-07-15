
//dependecies
import React from 'react';
import ToastCard from './ToastCard';
import { StyleSheet, Text } from 'react-native';

const Notification = ({title, detail}) => {

    const style = StyleSheet.create({
        notification:{
            justifyContent:'space-between',
            alignItems:'flex-start'
        }
    })
    return (
        <ToastCard styleLayout={style.notification}>
            <Text style={{fontSize:20, fontWeight:'600', textAlign:'left'}}>{title}</Text>
            <Text style={{fontSize:20, fontWeight:'400', textAlign:'left'}}>{detail}</Text>
        </ToastCard>
    );
};

export default Notification;