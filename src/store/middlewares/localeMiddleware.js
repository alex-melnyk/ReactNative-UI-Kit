import {REHYDRATE} from 'redux-persist/constants';
import * as types from '../actions/localeActions';
import I18n from '../../i18n';

I18n.fallbacks = true;

/**
 * Middleware for localization.
 */
export default (store) => (next) => (action) => {
  switch (action.type) {
    case types.ACTION_LOCALE_CHANGE_LANGUAGE:
      I18n.locale = action.payload.language;
      break;
    case REHYDRATE:
      if (action.payload.locale) {
          I18n.locale = action.payload.locale.language || 'en';
      }
      break;
  }

  return next(action);
};