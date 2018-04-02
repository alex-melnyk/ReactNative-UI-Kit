import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import app from '../reducers/appReducer';

import * as AuthActions from './authActions';

const mockStore = configureMockStore([thunk]);

const username = 'user';
const password = '1234';

describe('Authorization actions', () => {
    const store = mockStore({
       app: app(undefined, {})
    });

    beforeEach(() => {
        store.clearActions();
    });

    it('Authorization with right credentials', (done) => {
        const expectedTypes = [
            AuthActions.ACTION_AUTH_SIGN_IN_REQUEST,
            AuthActions.ACTION_AUTH_SIGN_IN_SUCCESS
        ];

        store.dispatch(AuthActions.signInAction(username, password));

        setTimeout(() => {
            expect(expectedTypes).toEqual(store.getActions().map((action) => action.type));
            done();
        }, 1000);
    });

    it('Authorization with wrong credentials or without credentials', (done) => {
        store.dispatch(AuthActions.signInAction('user', '123'));

        const expectedTypes = [
          AuthActions.ACTION_AUTH_SIGN_IN_REQUEST,
          AuthActions.ACTION_AUTH_SIGN_IN_FAILURE
        ];

        setTimeout(() => {
            expect(expectedTypes).toEqual(store.getActions().map((action) => action.type));

            const error = store.getActions().find((action) => action.type === AuthActions.ACTION_AUTH_SIGN_IN_FAILURE);
            store.getState().app.errorMessage = error.payload;

            expect(store.getState().app.errorMessage).toEqual(error.payload);
            done();
        }, 1000);
    });
});