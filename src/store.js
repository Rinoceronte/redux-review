import {createStore, combineReducers} from 'redux';
import movieConfirmReducer from './components/MovieConfirm/state/movieConfirmReducer';
import movieFormReducer from './components/MovieForm/state/movieFormReducer';
import {devToolsEnhancer} from 'redux-devtools-extension';

const rootReducer = combineReducers({
    movieConfirmReducer,
    movieFormReducer
})

export default createStore(rootReducer, devToolsEnhancer());