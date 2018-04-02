import {connect} from 'react-redux';
import Profile from "../components/Profile";
import * as AuthActions from "../store/actions/authActions";

const matStateToProps = (state) => ({
    ...state.locale
});

const matDispatchToProps = (dispatch, props) => ({
    onSignout: () => {
        dispatch(AuthActions.signOutAction());
    },
    onGoToLAnguages: () => {
        props.navigation.navigate('Languages');
    }
});

export default connect(
    matStateToProps,
    matDispatchToProps
)(Profile);