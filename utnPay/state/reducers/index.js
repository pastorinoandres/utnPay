import { combineReducers} from 'redux';
import userId from './userId';
import info from './info';
import cars from './cars';
import history from './history';

export default combineReducers({
  userId, info, cars, history
});