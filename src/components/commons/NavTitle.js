import React from 'react';
import {Text} from 'react-native';
import PropTypes from 'prop-types';
import I18n from '../../i18n';
import {connect} from "react-redux";

const NavTitle = ({textKey, size}) => (
    <Text style={{fontSize: 18, fontWeight: '500'}}>
        {I18n.t(textKey)}
    </Text>
);

NavTitle.propTypes = {
    textKey: PropTypes.string.isRequired,
    size: PropTypes.number.isRequired
};

export default connect((state) => ({
    ...state.locale
}))(NavTitle);