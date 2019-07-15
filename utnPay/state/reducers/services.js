
//dependecies
import { handleActions } from 'redux-actions';

//constants
import { ADD_SERVICES } from '../constants';

//default data
const services = [
    {
      name: 'Estacionamiento', 
      icon: require('../../assets/images/auto.png'),
      screenName: 'SHOW_QR',
      enabled: true
    },
    {
      name: 'Vianda', 
      icon: require('../../assets/images/buffet.png'),
      screenName:null,
      enabled: false,
    },
    {
      name: 'Buffet', 
      icon: require('../../assets/images/buffet.png'),
      screenName:null,
      enabled: false,
    },
  ];

export default handleActions(
    {      
      [ADD_SERVICES]: (state) => state,
    },
    services
);