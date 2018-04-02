import * as LocaleActions from "../actions/localeActions";
import I18n from "./index";

const initialState = {
    language: 'en'
};

/**
 * Application reducer.
 */
export default (state = initialState, action) => {
    switch (action.type) {
        case LocaleActions.ACTION_LOCALE_CHANGE_LANGUAGE:

            return {
                ...state,
                ...action.payload
            };
        default:
            return state;
    }
};