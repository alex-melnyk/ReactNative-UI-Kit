import fetch from 'fetch-everywhere';
export const ACTION_AUTH_SIGN_IN_REQUEST = 'ACTION_AUTH_SIGN_IN_REQUEST';
export const ACTION_AUTH_SIGN_IN_SUCCESS = 'ACTION_AUTH_SIGN_IN_SUCCESS';
export const ACTION_AUTH_SIGN_IN_FAILURE = 'ACTION_AUTH_SIGN_IN_FAILURE';
export const ACTION_AUTH_SIGN_OUT = 'ACTION_AUTH_SIGN_OUT';

import {validateUsernameAndPassword} from "../../utils/auth";

/**
 *
 */
function signInRequestAction() {
    return {type: ACTION_AUTH_SIGN_IN_REQUEST};
}

/**
 *
 */
function signInSuccessAction() {
    return {type: ACTION_AUTH_SIGN_IN_SUCCESS};
}

/**
 *
 */
function signInFailureAction() {
    return {
        type: ACTION_AUTH_SIGN_IN_FAILURE,
        payload: {
            reason: 'Username or password is incorrect!'
        }
    };
}

/**
 *
 * @param username
 * @param password
 */
export function signInAction(username, password) {
    return (dispatch) => {
        dispatch(signInRequestAction());

        setTimeout(() => {
            if (validateUsernameAndPassword(username, password)) {
                dispatch(signInSuccessAction());
            } else {
                dispatch(signInFailureAction());
            }
        }, 1000);
    };
}

/**
 *
 */
export function signOutAction() {
    return {type: ACTION_AUTH_SIGN_OUT};
}