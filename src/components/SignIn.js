import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Animated, Keyboard, KeyboardAvoidingView, Text, TextInput, TouchableOpacity} from 'react-native';

import {signInStyles} from './commons/Styles';
import Logo from '../../assets/images/react.png';

import I18n from '../i18n';

const LOGOTYPE_MAX_SZIE = 160;
const LOGOTYPE_MIN_SZIE = 80;

class SignIn extends Component {
    state = {
        username: '',
        password: ''
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

    componentDidMount() {
        this.keyboardDidShow = Keyboard.addListener('keyboardDidShow', this.keyboardShow);
        this.keyboardDidHide = Keyboard.addListener('keyboardDidHide', this.keyboardHide);
    }

    componentWillUnmount() {
        this.keyboardDidShow.remove();
        this.keyboardDidHide.remove();
    }

    render() {
        const {errorMessage} = this.props;
        const {username, password} = this.state;

        return (
            <Animated.View
                style={[
                    signInStyles.container,
                    {paddingBottom: this.keyboardSize}
                ]}
            >
                <KeyboardAvoidingView
                    behavior="position">
                    <Animated.View style={{alignItems: 'center'}}>
                        <Animated.Image
                            style={[
                                signInStyles.logoImage,
                                {height: this.logotypeSize}
                            ]}
                            source={Logo}
                        />
                        <Text style={signInStyles.logoText}>
                            {I18n.t('projectName')}
                        </Text>
                    </Animated.View>

                    <TextInput
                        autoCapitalize="none"
                        autoCorrect={false}
                        style={signInStyles.textInput}
                        value={username}
                        placeholder={I18n.t('username')}
                        returnKeyType="next"
                        onBlur={() => this.refs.passwordInput.focus()}
                        onChangeText={(username) => this.setState({username})}
                    />

                    <TextInput
                        ref="passwordInput"
                        autoCapitalize="none"
                        autoCorrect={false}
                        style={signInStyles.textInput}
                        value={password}
                        placeholder={I18n.t('password')}
                        returnKeyType="done"
                        secureTextEntry={true}
                        onChangeText={(password) => this.setState({password})}
                    />

                    <TouchableOpacity
                        style={[signInStyles.button, {marginTop: 10}]}
                        onPress={() => this.props.onSignIn(username, password)}
                    >
                        <Text style={signInStyles.buttonText}>{I18n.t('signIn')}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => this.props.navigation.navigate('SignUp')}
                        style={signInStyles.signUpButton}
                    >
                        <Text style={signInStyles.signUpButtonText}>{I18n.t('signUp')}</Text>
                    </TouchableOpacity>

                    <Text style={signInStyles.errorMessage}>{errorMessage}</Text>
                </KeyboardAvoidingView>
            </Animated.View>
        );
    }
}

SignIn.propTypes = {
    onSignIn: PropTypes.func.isRequired
};

export default SignIn;