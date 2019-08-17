/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
//import console = require('console');

// disabling the yellow box 
console.disableYellowBox = true 

AppRegistry.registerComponent(appName, () => App);
