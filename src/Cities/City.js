import React from 'react'
import { 
    View, 
    Text, 
    StyleSheet, 
    TextInput, 
    ScrollView, 
    TouchableWithoutFeedback, 
    TouchableOpacity,
    KeyboardAvoidingView, 
    Keyboard
} from 'react-native'

// import {
//     KeyboardAwareScrollView // to show keyboard in ios

// } from 'react-native-keyboard-aware-scroll-view'

import colors from '../theme' 

import CenterMessage from '../components/CenterMessage'

export default class City extends React.Component { 
    static navigationOptions = (props) => { 
        return {
            title: props.navigation.state.params.city.city, 
            headerTitleStyle: { 
                fontSize: 20, 
                fontWeight: '400',
            }
        }
    }

    state = { // this will be holding information from the location 
        name: '',
        info: ''
    }

    // function to change text 
    OnChangeText = (key, value) => { 
        this.setState({
            [key]: value
        })
    };

    addLocation = () => { 
        if (this.state.name === '' || this.state.info === '') return 
        // if not execute below 
        // need a way to access the city 
        const { city } = this.props.navigation.state.params // removed curly braces from city
        const location = { 
            name: this.state.name, 
            info: this.state.info 
        }
        this.props.screenProps.addLocation(location, city)
        this.setState({ 
            name: '', 
            info: ''
        })
    }

    render() { 
        const { city } = this.props.navigation.state.params // removed curly braces from city 
        return ( 
            <KeyboardAvoidingView
                behavior={Platform.OS === "ios" ? "padding" : null}
                style={{ flex: 1}}
            >
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                    <View style = {styles.main}> 
                        {   
                            !city.locations.length && 
                            <CenterMessage message = 'No places added :('/> 
                        }
                        { 
                            city.locations.map((location, index) => ( 
                                <View style = {styles.locationContainer}>
                                    <Text style = {styles.name}>{location.name}</Text>
                                    <Text style = {styles.info}>{location.info}</Text>
                                </View> 
                            ))
                        }
                        <TextInput
                            value = {this.state.name}
                            placeholder = 'Name' 
                            onChangeText = {val => this.OnChangeText('name', val)}
                            style = {styles.input} 
                            placeholderTextColor = 'white'
                        /> 
                        <TextInput 
                            value = {this.state.info}
                            placeholder = 'Info' 
                            onChangeText = {val => this.OnChangeText('info', val)}
                            style = {[styles.input, styles.input2]} 
                            placeholderTextColor = 'white'
                        />
                        <View style = {styles.buttonContainer}> 
                            <TouchableOpacity onPress = {this.addLocation}>
                                <View style = {styles.button}>
                                    <Text style = {styles.buttonText}>Add location!</Text>
                                </View> 
                            </TouchableOpacity>
                        </View>
                        {/* <View style={{ flex : 1 }} /> */}
                    </View> 
                </TouchableWithoutFeedback>
            </KeyboardAvoidingView>
        )
    }
}

const styles = StyleSheet.create ({ 
    main: { 
        flex: 1, 
        backgroundColor: colors.button,
        // justifyContent: "flex-end",
    },
    locationContainer: {
        padding: 10, 
        borderBottomColor: colors.primary, 
        borderBottomWidth: 2, 
    }, 
    name: {
        fontSize: 20
    }, 
    info: {
        color: 'rgba(0, 0, 0, 0.5)'
    }, 
    input: { 
        position: 'absolute', 
        height: 50, 
        backgroundColor: colors.primary,
        width: '100%', 
        bottom: 104, 
        left: 0,
        color: 'white'
    },
    input2: { 
        bottom: 52,
    }, 
    buttonContainer: { 
        position: 'absolute', 
        bottom: 0, 
        left: 0, 
        width: '100%'
    },
    button: { 
        height: 50, 
        backgroundColor: colors.primary, 
        justifyContent: 'center', 
        alignItems: 'center',
    },
    buttonText: { 
        color: 'white', 
        fontSize: 20, 
    }
})
