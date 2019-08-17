// creating navigation 

import React from 'react'
import AddCity from './AddCity/AddCity'
import Cities from './Cities/Cities'
import City from './Cities/City'

import { 
    createStackNavigator, 
    createBottomTabNavigator, 
    createAppContainer
} from 'react-navigation'; 

import colors from './theme'

// stack 
const CitiesNav = createStackNavigator({ 

    Cities: {
        screen: Cities,
        // THE NAVIGATION OPTIONS BELOW TOOK A VERY LONG TIME 
        // TL;DR PUT IT INSIDE OF A SCREEN IN CREATE STACK NAVIGATOR 
        navigationOptions: ({ }) => ({
            headerStyle: { 
                backgroundColor: colors.primary,
            }, 
            headerTintColor: '#fff',
        }), 
    },
    City: { screen: City },
});

const Tabs = createBottomTabNavigator({
    Add: { screen: AddCity }, // originally called "AddCity"
    Shops: { screen: CitiesNav}, // originally called "Cities"
});

const AppContainer = createAppContainer(Tabs); 
// Now AppContainer is the main component for React to render 

export default AppContainer;  
