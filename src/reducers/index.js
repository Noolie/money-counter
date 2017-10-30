import {combineReducers} from 'redux';
import data from './child-reducers/reducer-items.js'

const allReducers = combineReducers({
  data: data
});

export default allReducers;
