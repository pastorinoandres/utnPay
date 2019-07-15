
//dependecies
import { createSelector } from 'reselect';
import moment from 'moment';
import 'moment/locale/es';



export const getSaldo = state => state.info.SALDO
export const getHistory = state => state.history;
export const getCars = state => state.cars;
export const getAlias = state => state.info.ALIAS;
export const getFullName= state => state.info.FULL_NAME;
export const getPhoto = state => state.info.PHOTO;
export const getServices = state => state.services;
export const getSettings = state => state.settings;
export const getUserId = state => state.userId;
export const getGiftUsed = state => !state.info.GIFT;

const returnAnswer = (history)=>{

    const today = `${moment().format('D')} de ${moment().format('MMMM')}`;
    let copyHistory = [...history];

    if(copyHistory.length){
        let lastTransaction = copyHistory.shift();
        return (lastTransaction.fecha === today)? true : false;        
    }else{
        return false;        
    }
    

}

export const getAnswer = createSelector(getHistory, returnAnswer)
