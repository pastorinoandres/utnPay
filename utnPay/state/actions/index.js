
//dependecies
import { createAction } from 'redux-actions';

//constants
import { 
  DESCONTAR, 
  INITIAL_SETUP, 
  USE_CREDIT, 
  UPDATE_HISTORY, 
  CLEAR_HISTORY, 
  RESET_BALANCE 
} from '../constants';



export const descontarSaldo = createAction(DESCONTAR, (monto) => monto );
export const agregarTransaccion = createAction(UPDATE_HISTORY, (transaction)=> transaction);
export const chargeInitialSetup = createAction(INITIAL_SETUP);
export const clearHistory = createAction(CLEAR_HISTORY);
export const resetBalance = createAction(RESET_BALANCE);
export const useCredit = createAction(USE_CREDIT);


export const setWallet = (trans) => {
  
    return (dispatch) => {
  
      setTimeout(() => {

        dispatch(agregarTransaccion(trans));
        dispatch(descontarSaldo(15)); 
          
      }, 1000);         
      
    }
}


export const resetSetup = () => {
  
  return (dispatch) => {

    dispatch(clearHistory());
    dispatch(resetBalance()); 
    
  }
}


