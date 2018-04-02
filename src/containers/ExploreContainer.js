import {connect} from 'react-redux';
import Explore from "../components/Explore";

const matStateToProps = (state) => ({
    ...state.locale
});

const matDispatchToProps = (dispatch) => ({});

export default connect(
    matStateToProps,
    matDispatchToProps
)(Explore);