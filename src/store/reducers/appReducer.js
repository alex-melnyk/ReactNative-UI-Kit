import * as AuthActions from "../actions/authActions";

const initialState = {
    authorized: true,
    processing: false,
    errorMessage: null
};

/**
 * Application reducer.
 */
export default (state = initialState, action) => {
    switch (action.type) {
        case AuthActions.ACTION_AUTH_SIGN_IN_REQUEST:
            return {
                ...state,
                processing: true
            };
        case AuthActions.ACTION_AUTH_SIGN_IN_SUCCESS:
            return {
                ...state,
                authorized: true,
                processing: false
            };
        case AuthActions.ACTION_AUTH_SIGN_IN_FAILURE:
            return {
                ...state,
                authorized: false,
                processing: false,
                errorMessage: action.payload.reason
            };
        case AuthActions.ACTION_AUTH_SIGN_OUT:
            return {
                ...state,
                ...initialState
            };
        default:
            return state;
    }
};