import React from 'react';
import PropTypes from 'prop-types';

import {ActivityIndicator, View} from 'react-native';

const ActivityIndicatorLayout = ({visible}) => {
    if (visible) {
        return (
            <View style={{
                position: 'absolute',
                left: 0,
                top: 0,
                width: '100%',
                height: '100%',
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: 'rgba(255,255,255,0.75)'
            }}>
                <ActivityIndicator size="large"/>
            </View>
        );
    }

    return null;
};

ActivityIndicatorLayout.propTypes = {
    visible: PropTypes.bool
};

export default ActivityIndicatorLayout;