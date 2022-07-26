import { combineReducers } from 'redux';
import passengerReducer from './passengerReducer';


const appReducers = combineReducers({
    passengers : passengerReducer

})
export default appReducers;