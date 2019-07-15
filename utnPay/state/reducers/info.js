//dependecies
import { handleActions } from 'redux-actions';

//constants
import { DESCONTAR, INITIAL_SETUP, RESET_BALANCE, USE_CREDIT } from '../constants';


export class User {
    constructor(dni,typeUser= 'alumno', fullName = '', alias = '', email = '', password = '', legajo = null, saldo, photo){

        this.DNI = dni
        this.TYPE_USER = typeUser;
        this.FULL_NAME = fullName;
        this.ALIAS = alias;
        this.EMAIL = email;
        this.PASSWORD = password;
        this.SALDO = saldo;
        this.PHOTO = photo;
        this.GIFT = false //disponibilidad de regalo

        if (legajo){
            this.legajo = legajo;
        }

    }
}

//default data
const user = new User(
    37218703,
    'alumno', 
    'Andres Pastorino', 
    'Andres', 
    'pastorinoandres@outlook.com', 
    '*******', 
    '24708',
    400,
    require('./../../assets/images/photo.jpg')
);

const descontarSaldoReducer = (state,action) => {
    const saldoResultante = state.SALDO - action.payload
    return {...state, SALDO:saldoResultante};
}

const resetBalanceReducer = (state) => {
    return {...state, SALDO:15, GIFT:true};
}

const initialSetupReducer = (state) => {
    return {...state, SALDO:400};
}

const useCreditReducer = (state) => {
    return {...state, GIFT:false};
}





export default handleActions(
    {      
      [DESCONTAR]: descontarSaldoReducer,
      [RESET_BALANCE]: resetBalanceReducer,
      [INITIAL_SETUP]: initialSetupReducer,
      [USE_CREDIT]: useCreditReducer
    
    },
    user
);

