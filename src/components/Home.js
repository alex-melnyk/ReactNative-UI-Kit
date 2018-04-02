import React, {Component} from 'react';
import {Text, View} from "react-native";
import ImageBackground from './commons/ImageBackground';

import {commonStyles} from "./commons/Styles";
import I18n from '../i18n';

/**
 *
 */
class Home extends Component {
    state = {fontLoaded: false};

    async componentDidMount() {
        await Expo.Font.loadAsync({
            'brandon-med': require('../../assets/fonts/Brandon_med.otf')
        });

        this.setState({fontLoaded: true})
    }

    render() {
        if (!this.state.fontLoaded) {
            return null;
        }

        return (
            <View style={commonStyles.containerTopPaddedCentered}>
                <ImageBackground/>
                <Text style={[
                    commonStyles.textGrayed,
                    {
                        fontFamily: 'brandon-med'
                    }
                ]}>&lt; {I18n.t('home')} &gt;</Text>
            </View>
        );
    }
}

Home.propTypes = {};

export default Home;