import React, {Component} from 'react';
import {Provider} from "react-redux";
import appStore from './src/store';
import ShunterContainer from './src/containers/ShunterContainer';

/**
 * Main application class.
 */
export default class App extends Component {
    render() {
        return (
            <Provider store={appStore}>
                <ShunterContainer />
            </Provider>
        );
    }
}