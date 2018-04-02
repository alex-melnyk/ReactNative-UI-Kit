import React from 'react';
import PropTypes from 'prop-types';
import {View} from "react-native";

import {AppNavigator, AuthorizeNavigator} from "../routers/index";
import ActivityIndicatorLayout from "./commons/ActivityIndicatorLayout";
import {commonStyles} from "./commons/Styles";

const Shunter = ({authorized, processing}) => {
    let Content = authorized ? AppNavigator : AuthorizeNavigator;

    return (
        <View style={{flex: 1}}>
            <View style={commonStyles.statusBar}></View>
            <Content/>
            <ActivityIndicatorLayout visible={processing}/>
        </View>
    );
};

Shunter.propTypes = {
    authorized: PropTypes.bool,
    processing: PropTypes.bool
};

export default Shunter;