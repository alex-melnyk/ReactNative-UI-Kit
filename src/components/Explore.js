import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Text, View} from "react-native";
import ImageBackground from './commons/ImageBackground';

import {commonStyles} from "./commons/Styles";
import I18n from '../i18n';

/**
 *
 */
class ScreenTwo extends Component {
    render() {
        return (
            <View style={commonStyles.containerTopPaddedCentered}>
                <ImageBackground/>
                <Text style={commonStyles.textGrayed}>&lt; {I18n.t('screenTwo')} &gt;</Text>
            </View>
        );
    }
}

ScreenTwo.propTypes = {

};

export default ScreenTwo;