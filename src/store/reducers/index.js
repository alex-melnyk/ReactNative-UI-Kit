import {combineReducers} from 'redux';
import app from './appReducer';
import locale from './localeReducer';

export default combineReducers({
    app,
    locale
});