import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {FlatList, View} from "react-native";

import FlatListItem, {FLI_TYPE_CHECK} from "./commons/FlatListItem";

import I18n from '../i18n';

/**
 *
 */
class Languages extends Component {
    renderListItem = ({item}) => (
        <FlatListItem
            {...item}
        />
    );

    render() {
        const {language} = this.props;

        const commonItems = [
            {
                key: '1',
                text: I18n.t('settingsEnglish'),
                value: 'en',
                onClick: this.props.onChangeLanguage
            },
            {
                key: '2',
                text: I18n.t('settingsUkrainian'),
                value: 'ua',
                onClick: this.props.onChangeLanguage
            },
            {
                key: '3',
                text: I18n.t('settingsRussian'),
                value: 'ru',
                onClick: this.props.onChangeLanguage
            }
        ].map((item) => {
            if (item.value === language) {
                return {
                    ...item,
                    accessory: FLI_TYPE_CHECK
                }
            }

            return item;
        });

        return (
            <View>
                <FlatList
                    data={commonItems}
                    renderItem={this.renderListItem}
                />
            </View>
        );
    }
}

Languages.propTypes = {
    language: PropTypes.string.isRequired,
    onChangeLanguage: PropTypes.func.isRequired
};

export default Languages;