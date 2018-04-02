import {connect} from 'react-redux';
import Create from '../components/Create';

const mapStateToProps = (state) => ({
    ...state
});

const mapDispatchToProps = (dispatch) => ({

});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Create);
