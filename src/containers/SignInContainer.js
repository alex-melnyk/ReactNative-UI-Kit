import {connect} from 'react-redux';
import SignIn from "../components/SignIn";
import * as AuthActions from "../store/actions/authActions";

const matStateToProps = (state) => ({
    ...state.app
});

const matDispatchToProps = (dispatch) => ({
    onSignIn: (username, password) => {
        dispatch(AuthActions.signInAction(username, password));
    }
});

export default connect(
    matStateToProps,
    matDispatchToProps
)(SignIn);