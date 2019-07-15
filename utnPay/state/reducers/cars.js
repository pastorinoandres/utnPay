
//dependecies
import { handleActions } from 'redux-actions';

//constants
import { ADD_CAR, EDIT_CAR, DELETE_CAR } from '../constants';

//default data
const cars = [
    {
        marca:"Peugeot",
        modelo: "208",
        color: "Azul",
        dominio: "MWU131"
    },
    {
        marca:"Peugeot",
        modelo: "Partner",
        color: "Rojo",
        dominio: "AA985QU"
    }
]

export default handleActions(
    {      
      [ADD_CAR]: (state) => state,
      [EDIT_CAR]: (state) => state,
      [DELETE_CAR]: (state) => state,
    },
    cars
);