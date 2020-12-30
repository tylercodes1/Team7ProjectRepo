import loginReducer from './login-reducer';
import suggestionReducer from './suggestion-reducer';
import { combineReducers } from 'redux';

// combin multiple reducers together, so we only pass this combinReducers to store.
const allReducers = combineReducers({
    isLogged: loginReducer,
    isAccept: suggestionReducer
});

export default allReducers;