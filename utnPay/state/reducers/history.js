
//dependecies
import { handleActions } from 'redux-actions';

//constants
import { UPDATE_HISTORY, CLEAR_HISTORY, INITIAL_SETUP} from '../constants';

//default data
const history = [
  {
    category:'Estacionamiento',
    playa: 'Calle 126 e/ 59 y 60',
    title: 'Pagaste estacionamiento', 
    icon: require('../../assets/images/auto.png'),
    detalle: 'MWU131',
    fecha: '1 de Julio',      
    precio: 15,
    key: "1 de julio-MWU131-2019"
  },
  {
    category:'Estacionamiento',
    playa: 'Calle 126 e/ 59 y 60',
    title: 'Pagaste estacionamiento', 
    icon: require('../../assets/images/auto.png'),
    detalle: 'MWU131',
    fecha: '7 de Junio',
    precio: 15,
    key: "7 de Junio-MWU131-2019"
    
  },
  { 
    category:'Estacionamiento',
    playa: 'Calle 126 e/ 59 y 60',
    title: 'Pagaste estacionamiento', 
    icon: require('../../assets/images/auto.png'),
    detalle: 'MWU131',
    fecha: '3 de Junio',
    precio: 15,
    key: "3 de Junio-MWU131-2019"
  },
  {
    category:'Estacionamiento',
    playa: 'Calle 126 e/ 59 y 60',
    title: 'Pagaste estacionamiento', 
    icon: require('../../assets/images/auto.png'),
    detalle: 'MWU131',
    fecha: '27 de Mayo',
    precio: 15,
    key: "27 de Mayo-MWU131-2019"
  },
  {
    category:'Estacionamiento',
    playa: 'Calle 126 e/ 59 y 60',
    title: 'Pagaste estacionamiento', 
    icon: require('../../assets/images/auto.png'),
    detalle: 'MWU131',
    fecha: '13 de Mayo',
    precio: 15,
    key: "13 de Mayo-MWU131-2019"
  },
  {
    category:'Estacionamiento',
    playa: 'Calle 126 e/ 59 y 60',
    title: 'Pagaste estacionamiento', 
    icon: require('../../assets/images/auto.png'),
    detalle: 'MWU131',
    fecha: '10 de Mayo',
    precio: 15,
    key: "10 de Mayo-MWU131-2019"
  },
  {
    category:'Estacionamiento',
    playa: 'Calle 126 e/ 59 y 60',
    title: 'Pagaste estacionamiento', 
    icon: require('../../assets/images/auto.png'),
    detalle: 'MWU131',
    fecha: '7 de Mayo',
    precio: 15,
    key: "7 de Mayo-MWU131-2019"
  },
];



const updateHistoryReducer = (state,action)=>{
  return [action.payload, ...state]
}

const initialSetupReducer = () => {
  return history
}
const clearHistoryReducer = () => {
  return []
}

export default handleActions(
    {      
      [UPDATE_HISTORY]: updateHistoryReducer,
      [CLEAR_HISTORY]: clearHistoryReducer,
      [INITIAL_SETUP]: initialSetupReducer
    },
    history
);

// HISTORY: arreglo de transacciones