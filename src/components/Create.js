import React, {Component} from 'react';
import {FlatList, Image, Text, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import ImageBackground from './commons/ImageBackground';
import {LineChart, XAxis, YAxis} from 'react-native-svg-charts';
import {LinearGradient, Stop} from 'react-native-svg';
import CircleChart from './CircleChart';
import me from '../../assets/images/me.png';
import mark from '../../assets/images/markwhite.png';
import jane from '../../assets/images/jane_doe.png';

import {createStyles} from "./commons/Styles";

class Create extends Component {
    state = {
        index: 0
    };

    render() {
        const {index} = this.state;

        return (
            <View style={{padding: 15}}>
                <ImageBackground/>
                <View style={createStyles.headerView}>
                    <TouchableOpacity
                        style={createStyles.menu}
                        onPress={() => {
                        }}>
                        <Icon
                            name="bars"
                            color='#FBFBFA'
                            size={15}
                        />
                    </TouchableOpacity>
                    <Text style={createStyles.headerText}>DISTANCE</Text>
                    <Text/>
                </View>
                <View style={createStyles.buttonGroup}>
                    <TouchableOpacity
                        style={index === 0 ?
                            createStyles.buttonGroupButtonsActive :
                            createStyles.buttonGroupButtons}
                        onPress={() => {
                            this.setState({index: 0});
                        }}>
                        <View style={createStyles.headerView}>
                            <Icon
                                name="line-chart"
                                color={index === 0 ? '#fff' : '#737370'}
                                size={15}
                            />
                            <Text style={index === 0 ?
                                createStyles.buttonsTextActive :
                                createStyles.buttonsText}>
                                STATS
                            </Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={index === 1 ?
                            createStyles.buttonGroupButtonsActive :
                            createStyles.buttonGroupButtons}
                        onPress={() => {
                            this.setState({index: 1});
                        }}>
                        <View style={createStyles.headerView}>
                            <Icon
                                name="bar-chart"
                                color={index === 1 ? '#fff' : '#737370'}
                                size={15}
                            />
                            <Text style={index === 1 ?
                                createStyles.buttonsTextActive :
                                createStyles.buttonsText}>
                                VISUALISATIONS
                            </Text>
                        </View>
                    </TouchableOpacity>
                </View>
                {index === 0 ? this.renderStats() : this.renderVisualisations()}
            </View>
        );
    }

    renderStats = () => {
        const data = [5000, -1000, 4000, -2000, 3000, -2500];
        return (
            <View>
                <View style={createStyles.statsView}>
                    <View style={createStyles.buttonsView}>
                        <TouchableOpacity
                            style={createStyles.buttonCircle}
                            onPress={() => {
                            }}>
                            <Text style={createStyles.buttonCircleText}>
                                MILES
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={createStyles.buttonCircle}
                            onPress={() => {
                            }}>
                            <Text style={createStyles.buttonCircleText}>
                                MONTH
                            </Text>
                        </TouchableOpacity>
                    </View>
                    <LineChart
                        style={createStyles.lineChart}
                        dataPoints={data}
                        numberOfTicks={3}
                        contentInset={{top: 0, bottom: 10}}
                        renderGradient={({id}) => (
                            <LinearGradient id={id} x1={'0%'} y1={'0%'} x2={'100%'} y2={'0%'}>
                                <Stop offset={'0%'} stopColor={'#E7C687'}/>
                                <Stop offset={'100%'} stopColor={'#F0847C'}/>
                            </LinearGradient>
                        )}
                    />
                    <YAxis
                        dataPoints={data}
                        labelStyle={{color: 'grey'}}
                        formatLabel={value => `${value}`}
                    />
                </View>
                <View style={createStyles.statsView}>
                    <XAxis
                        style={createStyles.xData}
                        values={['Jun', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct']}
                        labelStyle={createStyles.xLabelData}
                        formatLabel={value => `${value}`}
                    />
                </View>
                <View style={createStyles.statsView}>
                    <View style={createStyles.buttonsView}>
                        <TouchableOpacity
                            style={createStyles.buttonCircle}
                            onPress={() => {
                            }}>
                            <Text style={createStyles.buttonCircleText}>
                                COMPARE
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={createStyles.buttonCircle}
                            onPress={() => {
                            }}>
                            <Icon
                                name="share-alt"
                                color={'#737370'}
                                size={15}
                            />
                            <Text style={createStyles.buttonCircleText}>
                                SHARE
                            </Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{width: '80%'}}>
                        <CircleChart/>
                    </View>
                </View>
                <View style={[createStyles.statsView, {marginTop: 10}]}>
                    <View style={createStyles.buttonsView}>
                        <TouchableOpacity
                            style={createStyles.buttonEditAdd}
                            onPress={() => {

                            }}>
                            <Text style={createStyles.buttonsText}>
                                EDIT
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={[createStyles.buttonEditAddActive, {marginTop: 10}]}
                            onPress={() => {

                            }}>
                            <Icon
                                name="plus"
                                color={'#737370'}
                                size={15}
                            />
                        </TouchableOpacity>
                    </View>
                    <View style={createStyles.listView}>
                        <FlatList
                            horizontal={true}
                            data={[
                                {key: 'a', color: '#73D3E3', name: 'Me', path: me},
                                {key: 'b', color: '#DF6890', name: 'Mark White', path: mark},
                                {key: 'c', color: '#EFC24B', name: 'Jack Black', path: jane},
                                {key: 'd', color: '#EB8F70', name: 'Jon Dou', path: me},
                                {key: 'e', color: '#EB8F70', name: 'Mike', path: me},
                                {key: 'f', color: '#EB8F70', name: 'Alice', path: me}
                            ]}
                            renderItem={({item}) => (
                                <View style={createStyles.usersView}>
                                    <View style={createStyles.viewUserImage}>
                                        <View style={createStyles.imageView}>
                                            <Image source={item.path} style={createStyles.image}/>
                                        </View>

                                    </View>
                                    <View style={[createStyles.viewUserName, {backgroundColor: item.color}]}>
                                        <Text style={createStyles.userNameText}>
                                            {item.name.toUpperCase()}
                                        </Text>
                                    </View>
                                </View>
                            )}
                        />
                    </View>
                </View>
            </View>
        )
    };

    renderVisualisations = () => {
        return (
            <View style={[createStyles.statsView]}>

            </View>
        )
    };
}

Create.propTypes = {};

export default Create;