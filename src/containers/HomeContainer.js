import {connect} from 'react-redux';
import Home from "../components/Home";

const matStateToProps = (state) => ({
    ...state.locale
});

const matDispatchToProps = (dispatch) => ({});

export default connect(
    matStateToProps,
    matDispatchToProps
)(Home);