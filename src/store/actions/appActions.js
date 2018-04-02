export const ACTION_APP_PERSISTOR_LOADED = 'ACTION_APP_PERSISTOR_LOADED';

/**
 * Notify when application loaded and persistor available.
 *
 * @param persistor 'redux-persist' object.
 */
export function persistorLoadedAction(persistor) {
    return {
        type: ACTION_APP_PERSISTOR_LOADED,
        payload: {persistor}
    }
}