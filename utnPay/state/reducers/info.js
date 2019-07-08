//dependecies
import { handleActions } from 'redux-actions';

//constants
import {

    SET_TYPE_USER,
    SET_FULL_NAME,
    SET_ALIAS,
    SET_EMAIL,
    SET_PASSWORD,
    SET_LEGAJO 

} from '../constants';


export class User {
    constructor(typeUser= 'alumno', fullName = '', alias = '', email = '', password = '', legajo = null){

        this.TYPE_USER = typeUser;
        this.FULL_NAME = fullName;
        this.ALIAS = alias;
        this.EMAIL = email;
        this.PASSWORD = password;

        if (legajo){
            this.legajo = legajo;
        }

    }
}

const user = new User();
export default handleActions(
    {      
      [SET_TYPE_USER]: (state) => state,
      [SET_FULL_NAME]: (state) => state,
      [SET_ALIAS]: (state) => state,
      [SET_EMAIL]: (state) => state,
      [SET_PASSWORD]: (state) => state,
      [SET_LEGAJO]: (state) => state,
    },
    user
);

