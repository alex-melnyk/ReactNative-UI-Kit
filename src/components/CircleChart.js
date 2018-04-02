import React, {Component} from 'react';
import {View, Text} from 'react-native';
import PropTypes from 'prop-types';
import ProgressCircleCustom from './commons/ProgressCircleCustom';
import {progressBarStyles} from "./commons/Styles";

class CircleChart extends Component {
    render() {
        return (
            <View style={progressBarStyles.view}>
                <ProgressCircleCustom
                    style={progressBarStyles.line1}
                    progress={0.63}
                    progressColor={'#73D3E3'}
                />
                <ProgressCircleCustom
                    style={progressBarStyles.line2}
                    progress={0.98}
                    progressColor={'#DF6890'}
                />
                <ProgressCircleCustom
                    style={progressBarStyles.line3}
                    progress={0.87}
                    progressColor={'#EFC24B'}
                />
                <ProgressCircleCustom
                    style={progressBarStyles.line4}
                    progress={0.74}
                    progressColor={'#EB8F70'}
                />
                <View style={{height: 90,
                    position: 'absolute',
                    width: '100%', alignItems: 'center', justifyContent: 'center', backgroundColor: 'transparent', marginTop: '13%'}}>
                    <Text style={{color: '#737370'}}>DISTANCE</Text>
                </View>
            </View>
        )
    }
}

export default CircleChart;
