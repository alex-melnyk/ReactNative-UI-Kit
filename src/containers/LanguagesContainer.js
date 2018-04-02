import {connect} from 'react-redux';
import Languages from "../components/Languages";
import * as LocaleActions from "../store/actions/localeActions";

const matStateToProps = (state) => ({
    ...state.locale
});

const matDispatchToProps = (dispatch) => ({
    onChangeLanguage: (language) => {
        dispatch(LocaleActions.changeLanguage(language));
    }
});

export default connect(
    matStateToProps,
    matDispatchToProps
)(Languages);