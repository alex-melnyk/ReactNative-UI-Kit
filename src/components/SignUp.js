import React, {Component} from 'react';
import ReactNative, {Animated, Keyboard, Text, TextInput, TouchableOpacity} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

import {signInStyles} from './commons/Styles';
import Logo from '../../assets/images/react.png';

import I18n from '../i18n';

const LOGOTYPE_MAX_SZIE = 160;
const LOGOTYPE_MIN_SZIE = 80;

class SignUp extends Component {
    state = {
        user: {
            username: '',
            first_name: '',
            last_name: '',
            email: '',
            password: '',
            rep_password: ''
        }
    };

    keyboardSize = new Animated.Value(0);
    logotypeSize = new Animated.Value(LOGOTYPE_MAX_SZIE);

    keyboardShow = (event) => {
        Animated.parallel([
            Animated.timing(this.keyboardSize, {
                duration: event.duration,
                toValue: event.endCoordinates.height,
            }),
            Animated.timing(this.logotypeSize, {
                duration: event.duration,
                toValue: LOGOTYPE_MIN_SZIE,
            })
        ]).start();
    };

    keyboardHide = (event) => {
        Animated.parallel([
            Animated.timing(this.keyboardSize, {
                duration: event.duration,
                toValue: 0,
            }),
            Animated.timing(this.logotypeSize, {
                duration: event.duration,
                toValue: LOGOTYPE_MAX_SZIE,
            })
        ]).start();
    };

    scrollToInput = ({target}) => {
        this.refs.scroll.scrollToFocusedInput(ReactNative.findNodeHandle(target))
    };

    saveUser = () => {
        console.log('USER', this.state.user);
    };

    componentDidMount() {
        this.keyboardDidShow = Keyboard.addListener('keyboardDidShow', this.keyboardShow);
        this.keyboardDidHide = Keyboard.addListener('keyboardDidHide', this.keyboardHide);
    }

    componentWillUnmount() {
        this.keyboardDidShow.remove();
        this.keyboardDidHide.remove();
    }

    render() {
        const {username, password, first_name, last_name, email, rep_password} = this.state.user;

        return (
            <Animated.View
                style={[
                    signInStyles.container,
                    {paddingBottom: this.keyboardSize, paddingTop: 0}
                ]}
                behavior="padding"
            >
                <KeyboardAwareScrollView
                    ref='scroll'
                >
                    <Animated.View style={{alignItems: 'center'}}>
                        <Animated.Image
                            style={[
                                signInStyles.logoImage,
                                {height: this.logotypeSize}
                            ]}
                            source={Logo}
                        />
                    </Animated.View>

                    <TextInput
                        selectTextOnFocus={true}
                        autoCapitalize="none"
                        autoCorrect={false}
                        style={signInStyles.textInput}
                        value={first_name}
                        placeholder={I18n.t('FirstName')}
                        returnKeyType="next"
                        onFocus={this.scrollToInput}
                        onSubmitEditing={() => this.refs.lastNameInput.focus()}
                        onChangeText={(firstName) => this.setState({user: {...this.state.user, first_name: firstName}})}
                    />

                    <TextInput
                        ref="lastNameInput"
                        autoCapitalize="none"
                        autoCorrect={false}
                        style={signInStyles.textInput}
                        value={last_name}
                        placeholder={I18n.t('LastName')}
                        returnKeyType="next"
                        onFocus={this.scrollToInput}
                        onSubmitEditing={() => this.refs.emailInput.focus()}
                        onChangeText={(last_name) => this.setState({user: {...this.state.user, last_name: last_name}})}
                    />

                    <TextInput
                        ref="emailInput"
                        autoCapitalize="none"
                        autoCorrect={false}
                        style={signInStyles.textInput}
                        value={email}
                        placeholder={I18n.t('Email')}
                        returnKeyType="next"
                        onFocus={this.scrollToInput}
                        onSubmitEditing={() => this.refs.usernameInput.focus()}
                        onChangeText={(email) => this.setState({user: {...this.state.user, email: email}})}
                    />

                    <TextInput
                        ref="usernameInput"
                        autoCapitalize="none"
                        autoCorrect={false}
                        style={signInStyles.textInput}
                        value={username}
                        placeholder={I18n.t('Username')}
                        returnKeyType="next"
                        onFocus={this.scrollToInput}
                        onSubmitEditing={() => this.refs.passwordInput.focus()}
                        onChangeText={(username) => this.setState({user: {...this.state.user, username: username}})}
                    />

                    <TextInput
                        ref="passwordInput"
                        autoCapitalize="none"
                        autoCorrect={false}
                        style={signInStyles.textInput}
                        value={password}
                        placeholder={I18n.t('Password')}
                        returnKeyType="next"
                        secureTextEntry={true}
                        onFocus={this.scrollToInput}
                        onSubmitEditing={() => this.refs.repPasswordInput.focus()}
                        onChangeText={(password) => this.setState({user: {...this.state.user, password: password}})}
                    />

                    <TextInput
                        ref="repPasswordInput"
                        autoCapitalize="none"
                        autoCorrect={false}
                        style={signInStyles.textInput}
                        value={rep_password}
                        placeholder={I18n.t('RetypePassword')}
                        returnKeyType="done"
                        secureTextEntry={true}
                        onFocus={this.scrollToInput}
                        onSubmitEditing={this.saveUser}
                        onChangeText={(rep_password) => this.setState({
                            user: {
                                ...this.state.user,
                                rep_password: rep_password
                            }
                        })}
                    />

                    <TouchableOpacity
                        style={[signInStyles.button, {marginTop: 10}]}
                        onPress={this.saveUser}
                    >
                        <Text style={signInStyles.buttonText}>{I18n.t('Save')}</Text>
                    </TouchableOpacity>
                </KeyboardAwareScrollView>
            </Animated.View>
        );
    }
}

SignUp.propTypes = {};

export default SignUp;