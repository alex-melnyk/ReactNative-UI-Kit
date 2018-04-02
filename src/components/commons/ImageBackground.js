import React, {Component} from 'react';
import {View, Image} from 'react-native';
import image from '../../../assets/images/bgprofile.png';

class ImageBackground extends Component {
    render() {
        return (
            <View
                style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                }}>
                <Image
                    source={image}
                />
            </View>
        )
    }
}

export default ImageBackground;