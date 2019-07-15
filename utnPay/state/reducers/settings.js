
//dependecies
import { handleActions } from 'redux-actions';

//constants
import { SET_SETTINGS } from '../constants';

//default data
const settings = [
  {
    title: 'Cerrar sesión', 
    icon: require('../../assets/images/logout.png'),
    detalle: 'Sesión iniciada',
    key: "setting1"
  },
  {
    title: 'Activar recortorios', 
    icon: require('../../assets/images/noti.png'),
    detalle: 'Desactivado',
    key: "setting2"      
  },
  {
    title: 'PROBAR DEMO', 
    icon: require('../../assets/images/initial.png'),
    detalle: 'Valores ya cargados',
    key: "setting3"      
  },
  {
    title: 'Restaurar de fábrica', 
    icon: require('../../assets/images/reset.png'),
    detalle: 'Borra los datos de la app',
    key: "setting4"      
  }
];

export default handleActions(
    {      
      [SET_SETTINGS]: (state) => state,
    },
    settings
);