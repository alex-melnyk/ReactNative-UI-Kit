import {connect} from 'react-redux';
import Shunter from "../components/Shunter";

const matStateToProps = (state) => ({
    ...state.app,
    ...state.locale
});

const matDispatchToProps = (dispatch) => ({});

export default connect(
    matStateToProps,
    matDispatchToProps
)(Shunter);