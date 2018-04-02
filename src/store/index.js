import {AsyncStorage} from 'react-native';
import {applyMiddleware, compose, createStore} from 'redux';
import {createLogger} from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import {autoRehydrate, persistStore} from 'redux-persist';

import * as AppActions from './actions/appActions';
import localeMiddleware from './middlewares/localeMiddleware';
import reducers from './reducers';

const middleware = [
    thunkMiddleware,
    localeMiddleware,
    createLogger(),
];

const appStore = createStore(
    reducers,
    undefined,
    compose(applyMiddleware(...middleware), autoRehydrate())
);

const persistor = persistStore(appStore, {
    storage: AsyncStorage,
    whitelist: ['locale']
}, () => {
    appStore.dispatch(AppActions.persistorLoadedAction(persistor));
});

export default appStore;