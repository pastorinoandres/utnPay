
//dependecies
import { handleActions } from 'redux-actions';

//constants
import { ADD_CAR, EDIT_CAR, DELETE_CAR } from '../constants';

export class Car {
    constructor(dominio = '', marca = '', modelo = '', color = ''){

        this.DOMINIO = dominio;
        this.MARCA = marca;
        this.MODELO = modelo;
        this.COLOR= color;
        
    }
}

export default handleActions(
    {      
      [ADD_CAR]: (state) => state,
      [EDIT_CAR]: (state) => state,
      [DELETE_CAR]: (state) => state,
    },
    []
);