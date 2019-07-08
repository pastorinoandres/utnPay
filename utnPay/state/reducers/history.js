
//dependecies
import { handleActions } from 'redux-actions';

//constants
import { UPDATE_HISTORY } from '../constants';

export default handleActions(
    {      
      [UPDATE_HISTORY]: (state) => state
    },
    []
);

// HISTORY: arreglo de transacciones