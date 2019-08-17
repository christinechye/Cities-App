import React from 'react'
import { 
    View, 
    Text, 
    StyleSheet, 
    TextInput, 
    TouchableOpacity
} from 'react-native'

import uuidV4 from 'uuid/v4' // will help write a unique identifier
import colors from '../theme'
//import console = require('console');

export default class AddCity extends React.Component { 
  
    // we need forms to keep up with the cities and the country
    state = { 
        // setting them as empty strings 
        city: '', 
        country: ''
    };
    
    // function to change text 
    OnChangeText = (key, value) => { 
        this.setState({
            [key]: value
        })
    };

    // need a submit function 
    submit = () => { 
        // check if it's an empty string 
        if (this.state.city === '' || this.state.country === '') return 
       
        // if not then execute below 
        const city = { // creating city object to add it to the array 
            city: this.state.city,
            country: this.state.country,
            locations: [], // empty array
            id: uuidV4(), // makes sure it's unique 
        }
        this.props.screenProps.addCity(city) // will call in the city 
        this.setState ({ // clearing out the city and country input 
            city: '', 
            country: ''
        }, () => { // callback function
                   // if you want to perform an action immediately after 
                   // setting state then a callback function is helpful 
            this.props.navigation.navigate('Cities')
        })
    }

    render() { 

        // want to be able to add a city (functionality)
        console.log('props:', this.props)

        return ( 
            <View style = {styles.container}>
                <Text style={styles.heading}>Where did you get boba?</Text> 
                <TextInput 
                placeholder = 'Boba Shop'
                value = {this.state.city}
                onChangeText={val => this.OnChangeText('city', val)}
                style = {styles.input}
                /> 
                <TextInput 
                placeholder = 'Location'
                value = {this.state.country}
                onChangeText={val => this.OnChangeText('country', val)}
                style = {styles.input}
                /> 
                <TouchableOpacity onPress = {this.submit}> 
                    <View style = {styles.button}> 
                        <Text style={styles.buttonText}>Add Store!</Text>
                    </View>
                </TouchableOpacity>
            </View> 
        )
    }
}

const styles = StyleSheet.create({ 
    input: {
        backgroundColor: 'white', 
        margin: 10, 
        paddingHorizontal: 8, 
        height: 50
    }, 
    button: {
        height: 50, 
        backgroundColor: colors.button, 
        justifyContent: 'center',
        alignItems: 'center', 
        margin: 10
    }, 
    buttonText: {
        color: 'gray'
    }, 
    container: {
        backgroundColor: colors.primary, 
        flex: 1, 
        justifyContent: 'center'
    }, 
    heading: {
        fontSize: 40, 
        textAlign: 'center',
        margin: 10,
        color: 'white',
    }
})