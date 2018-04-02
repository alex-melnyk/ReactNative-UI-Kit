import React from 'react';
import {StackNavigator, TabNavigator} from 'react-navigation';
import Icon from 'react-native-vector-icons/FontAwesome';

import SignInContainer from '../containers/SignInContainer';
import SignUpContainer from '../containers/SignUpContainer';

import HomeContainer from '../containers/HomeContainer';
import ExploreContainer from '../containers/ExploreContainer';
import CreateContainer from '../containers/CreacteContainer';
import TripsContainer from '../containers/TripsContainer';
import ProfileContainer from '../containers/ProfileContainer';
import LanguagesContainer from '../containers/LanguagesContainer';
import NavTitle from '../components/commons/NavTitle';
import TabTitle from '../components/commons/TabTitle';
import TabIcon from '../components/commons/TabIcon';

import home from '../../assets/images/homewhite.png';
import create from '../../assets/images/create.png';
import tripswhite from '../../assets/images/tripswhite.png';
import profile_active from '../../assets/images/profile_active.png';

import {tabBarStyles} from "../components/commons/Styles";

const NAV_LABEL_SIZE = 20;
const TAB_ICON_SIZE = 22;
const TAB_LABEL_SIZE = 10;

export const AuthorizeNavigator = StackNavigator({
    SignIn: {
        screen: SignInContainer,
        navigationOptions: () => ({
            headerTitle: (
                <NavTitle
                    textKey="signIn"
                    size={NAV_LABEL_SIZE}
                />
            ),
            headerStyle: {
                backgroundColor: 'black',
            },
        })
    },
    SignUp: {
        screen: SignUpContainer,
        navigationOptions: () => ({
            headerTitle: (
                <NavTitle
                    textKey="signUp"
                    size={NAV_LABEL_SIZE}
                />
            )
        })
    }
});

export const ProfileNavigator = StackNavigator({
    SettingsRoot: {
        screen: ProfileContainer,
        navigationOptions: () => ({
            header: null
        })
    },
    Languages: {
        screen: LanguagesContainer,
        navigationOptions: () => ({
            headerTitle: (
                <NavTitle
                    textKey="settingsLanguages"
                    size={NAV_LABEL_SIZE}
                />
            )
        })
    }
}, {
    mode: 'card'
});

export const AppNavigator = StackNavigator({
    Root: {
        screen: TabNavigator({
            Home: {
                screen: HomeContainer,
                navigationOptions: () => ({
                    header: null,
                    tabBarIcon: ({tintColor}) => (
                        <TabIcon
                            path={home}
                            style={tabBarStyles.icon}
                        />
                    ),
                    tabBarLabel: ({tintColor}) => (
                        <TabTitle
                            textKey="home"
                            size={TAB_LABEL_SIZE}
                        />
                    )
                })
            },
            Explore: {
                screen: ExploreContainer,
                navigationOptions: () => ({
                    header: null,
                    tabBarIcon: ({tintColor}) => (
                        <Icon
                            name="search"
                            color={tintColor}
                            size={TAB_ICON_SIZE}
                        />
                    ),
                    tabBarLabel: ({tintColor}) => (
                        <TabTitle
                            textKey="explore"
                            size={TAB_LABEL_SIZE}
                        />
                    )
                })
            },
            Create: {
                screen: CreateContainer,
                navigationOptions: () => ({
                    header: null,
                    tabBarIcon: ({tintColor}) => (
                        <TabIcon
                            path={create}
                            style={tabBarStyles.iconLarge}
                        />
                    ),
                    tabBarLabel: ({tintColor}) => (
                        <TabTitle
                            textKey="explore"
                            size={TAB_LABEL_SIZE}
                        />
                    )
                })
            },
            Trips: {
                screen: TripsContainer,
                navigationOptions: () => ({
                    header: null,
                    tabBarIcon: ({tintColor}) => (
                        <TabIcon
                            path={tripswhite}
                            style={tabBarStyles.iconLarge}
                        />
                    ),
                    tabBarLabel: ({tintColor}) => (
                        <TabTitle
                            textKey="explore"
                            size={TAB_LABEL_SIZE}
                        />
                    )
                })
            },
            Profile: {
                screen: ProfileNavigator,
                navigationOptions: () => ({
                    header: null,
                    tabBarIcon: ({tintColor}) => (
                        <TabIcon
                            path={profile_active}
                            style={tabBarStyles.iconLarge}
                        />
                    ),
                    tabBarLabel: ({tintColor}) => (
                        <TabTitle
                            textKey="settings"
                            size={TAB_LABEL_SIZE}
                        />
                    )
                })
            }
        }, {
            // initialRouteName: 'Create',
            tabBarOptions: {
                style: {
                    backgroundColor: '#3F3F3C',
                    borderTopColor: 'orange',
                    borderTopWidth: 1
                },
                showIcon: true,
            },
            animationEnabled: true,
            tabBarPosition: 'bottom',
            swipeEnabled: false
        })
    }
});