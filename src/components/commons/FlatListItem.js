import React, {Component} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/FontAwesome';

import {listItemStyles} from './Styles';

export const FLI_TYPE_NONE = 'FLI_TYPE_NONE';
export const FLI_TYPE_ARROW = 'FLI_TYPE_ARROW';
export const FLI_TYPE_CHECK = 'FLI_TYPE_CHECK';

class FlatListItem extends Component {
    render() {
        const {text, value, accessory, additional, onClick} = this.props;

        return (
            <TouchableOpacity
                style={listItemStyles.containerWrapper}
                onPress={() => onClick(value)}
            >
                <View style={listItemStyles.container}>
                    <View style={listItemStyles.wrapper}>
                        <Text style={listItemStyles.text}>{text}</Text>
                    </View>

                    {this.renderAccessory(accessory)}
                </View>

                <View style={[listItemStyles.container, {height: 'auto'}]}>
                    {
                        additional &&
                        <View style={{paddingVertical: 10, paddingHorizontal: 20, flex: 1}}>
                            {additional}
                        </View>
                    }
                </View>
            </TouchableOpacity>
        );
    }

    renderAccessory = (accessoryType) => {
        switch (accessoryType) {
            case FLI_TYPE_ARROW:
                return (
                    <View style={listItemStyles.accessoryWrapper}>
                        <Icon
                            name="angle-right"
                            color="#AAAAAA"
                            size={24}
                        />
                    </View>
                );
            case FLI_TYPE_CHECK:
                return (
                    <View style={listItemStyles.accessoryWrapper}>
                        <Icon
                            name="check"
                            color="#3E7BEE"
                            size={18}
                        />
                    </View>
                );
            default:
                return null;
        }
    }
}

FlatListItem.propTypes = {
    text: PropTypes.string.isRequired,
    subtext: PropTypes.string,
    value: PropTypes.any,
    accessory: PropTypes.oneOf([FLI_TYPE_NONE, FLI_TYPE_ARROW, FLI_TYPE_CHECK]),
    additional: PropTypes.object,
    onClick: PropTypes.func
};

FlatListItem.defaultProps = {
    accessory: FLI_TYPE_NONE,
};

export default FlatListItem;