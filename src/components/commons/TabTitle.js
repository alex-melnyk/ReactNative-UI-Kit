import React from 'react';
import {Text} from 'react-native';
import PropTypes from 'prop-types';
import I18n from '../../i18n';
import {connect} from "react-redux";

const TabTitle = ({textKey, size}) => (
    <Text style={{
        marginTop: 20,
        fontSize: size,
        color: '#b6b6b6'
    }}>
        {I18n.t(textKey)}
    </Text>
);

TabTitle.propTypes = {
    textKey: PropTypes.string.isRequired,
    size: PropTypes.number.isRequired
};

export default connect((state) => ({
    ...state.locale
}))(TabTitle);