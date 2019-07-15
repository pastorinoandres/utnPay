import { handleAction } from 'redux-actions';
import { SET_USER_ID } from '../constants';

const setUserReducer = (state,action) => action.payload ;

export default handleAction(SET_USER_ID , setUserReducer, 37218703);
