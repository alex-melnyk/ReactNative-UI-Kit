import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Image} from 'react-native';

class TabIcon extends Component {
    render() {
        return (
            <Image source={this.props.path} style={this.props.style}/>
        )
    }
}

TabIcon.propTypes = {
    path: PropTypes.number.isRequired
};

export default TabIcon;