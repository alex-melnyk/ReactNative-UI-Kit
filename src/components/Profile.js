import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {FlatList, View} from "react-native";

import {commonStyles} from "./commons/Styles";
import FlatListItem, {FLI_TYPE_ARROW} from "./commons/FlatListItem";
import ImageBackground from './commons/ImageBackground';

import I18n from '../i18n';

/**
 *
 */
class Settings extends Component {
    renderListItem = ({item}) => (
        <FlatListItem
            {...item}
        />
    );

    render() {
        const commonItems = [
            {
                key: '1',
                text: I18n.t('settingsSignOut'),
                onClick: this.props.onSignout
            },
            {
                key: '2',
                text: I18n.t('settingsLanguages'),
                onClick: this.props.onGoToLAnguages
            }
        ].map((item) => ({
            ...item,
            accessory: FLI_TYPE_ARROW
        }));

        return (
            <View style={[
                commonStyles.container,
                {backgroundColor: 'transparent'}
            ]}>
                <ImageBackground/>
                <FlatList
                    data={commonItems}
                    renderItem={this.renderListItem}
                />
            </View>
        );
    }
}

Settings.propTypes = {
    onSignout: PropTypes.func.isRequired,
    onGoToLAnguages: PropTypes.func.isRequired
};

export default Settings;