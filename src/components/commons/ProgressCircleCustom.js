import React, {Component} from 'react';
import {View} from 'react-native';
import PropTypes from 'prop-types';
import * as shape from 'd3-shape';
import Svg, {G, Path} from 'react-native-svg';

class ProgressCircleCustom extends Component {
    state = {
        height: 0,
        width: 0
    };

    _onLayout(event) {
        const {nativeEvent: {layout: {height, width}}} = event;
        this.setState({height, width})
    };

    render() {
        const {
            style,
            progressColor,
            startAngle,
            endAngle,
            animate,
            animateDuration,
        } = this.props;

        let {progress} = this.props;

        const {height, width} = this.state;

        const outerDiameter = Math.min(width, height);

        if (!isFinite(progress) || isNaN(progress)) {
            progress = 0
        }

        const data = [
            {
                key: 'rest',
                value: 1 - progress,
                color: '#353535',
                cutted: true
            },
            {
                key: 'progress',
                value: 1,
                color: progressColor
            },
        ];

        const pieSlices = shape
            .pie()
            .sort(null)
            .startAngle(-startAngle)
            .endAngle(-endAngle)
            (data.map(d => d.value));

        const arcs = pieSlices.map((slice, index) => ({
            ...data[index],
            ...slice,
            path: shape.arc()
                .outerRadius(outerDiameter / 2)  // Radius of the pie
                .innerRadius((outerDiameter / 2) - 7)  // Inner radius: to create a donut or pie
                .startAngle(slice.startAngle + (data[index].cutted ? Math.PI * 0.1 : 0))
                .endAngle(slice.endAngle + (data[index].cutted ? Math.PI * -0.1 : 0))
                .cornerRadius(45)
                ()
        }));

        return (
            <View
                style={style}
                onLayout={event => this._onLayout(event)}>
                <Svg style={{flex: 1}}>
                    <G x={width / 2}
                       y={height / 2}>
                        {
                            arcs.map((shape, index) => (
                                <Path
                                    key={index}
                                    fill={shape.color}
                                    d={shape.path}
                                    onPress={() => console.log(shape)}
                                    animate={animate}
                                    animationDuration={animateDuration}
                                />
                            ))
                        }
                    </G>
                </Svg>
            </View>
        )
    }
}

ProgressCircleCustom.propTypes = {
    progress: PropTypes.number.isRequired,
    style: PropTypes.any,
    progressColor: PropTypes.any,
    startAngle: PropTypes.number,
    endAngle: PropTypes.number,
    animate: PropTypes.bool,
    animateDuration: PropTypes.number
};

ProgressCircleCustom.defaultProps = {
    progressColor: '#22B6B0',
    startAngle: 0,
    endAngle: Math.PI * 2
};

export default ProgressCircleCustom;
