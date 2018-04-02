import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {View} from 'react-native';
import ImageBackground from './commons/ImageBackground';

class Trips extends Component {
    render() {
        return (
           <View>
               <ImageBackground/>
           </View>
        )
    }
}

Trips.propTypes = {

};

export default Trips;