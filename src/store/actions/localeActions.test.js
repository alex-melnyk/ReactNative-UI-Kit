import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import * as LocaleActions from './localeActions';
import locale from '../reducers/localeReducer';

const mockStore = configureMockStore([thunk]);

const language = 'ua';

describe('Localization actions', () => {
    const store = mockStore({
        locale: locale(undefined, {})
    });

    beforeEach(() => {
        store.clearActions();
    });

    it('Change language', (done) => {
        store.dispatch(LocaleActions.changeLanguage(language));

        setTimeout(() => {
            expect([LocaleActions.ACTION_LOCALE_CHANGE_LANGUAGE]).toEqual(store.getActions().map((action) => action.type));
            store.getState().locale.language = store.getActions()
                    .find((action) => action.type === LocaleActions.ACTION_LOCALE_CHANGE_LANGUAGE).payload.language;
            expect(language).toEqual(store.getState().locale.language);
            done();
        }, 1000);
    })
});
