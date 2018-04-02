import {connect} from 'react-redux';
import Trips from '../components/Trips';

const mapStateToProps = (state) => ({
    ...state
});

const mapDispatchToProps = (dispatch) => ({

});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Trips);