export const ACTION_LOCALE_CHANGE_LANGUAGE = 'ACTION_LOCALE_CHANGE_LANGUAGE';

/**
 *
 * @param language new language.
 */
export function changeLanguage(language) {
    return {
        type: ACTION_LOCALE_CHANGE_LANGUAGE,
        payload: {language}
    }
}