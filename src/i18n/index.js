import I18n from 'ex-react-native-i18n';
import en from './locales/en';
import ua from './locales/ua';
import ru from './locales/ru';

I18n.fallbacks = true;
I18n.translations = {
    en,
    ua,
    ru
};

export default I18n;