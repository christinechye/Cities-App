import React from 'react'
import { 
    View, 
    Text, 
    StyleSheet, 
    ScrollView,
    TouchableWithoutFeedback
} from 'react-native'
//import console = require('console');

import colors from '../theme'

import CenterMessage from '../components/CenterMessage'

export default class Cities extends React.Component { 

    static navigationOptions = { 
        title: 'Cities',  
        headerTitleStyle: { 
            color: 'white', 
            fontSize: 20, 
            fontWeight: '400'
        }
    }

    // when we click on a city we want to navigate them 
    // new function 
    viewCity = (city) => { 
        this.props.navigation.navigate('City', {city})
    }

    viewPropData = () => { 
        return this.props.screenProps.cities.map((city, index) => {
            return (
                <View>
                    <TouchableWithoutFeedback 
                    onPress={() => this.viewCity(city)}
                    > 
                        <View style = {styles.cityContainer}> 
                            <Text style={styles.city}>{city.city}</Text>
                            <Text style={styles.country}>{city.country}</Text>
                        </View>
                    </TouchableWithoutFeedback> 
                </View> 
            )
        })
    }

    render() { 
        // after adding a city through the submit button 
        console.log('props:', this.props)
        return ( 
            <ScrollView> 
                <View> 
                    {/* { 
                        !this.props.screenProps.cities.length && (
                            <CenterMessage message = 'No cities' /> 
                        )
                    }, */}
                    {this.viewPropData()}
                </View> 
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create ({ 
    cityContainer: { 
        padding: 10, 
        borderBottomWidth: 2, 
        borderBottomColor: colors.primary
    },
    city: { 
        fontSize: 20, 
    },
    country: { 
        color: 'rgba(0, 0, 0, 0.5)' 
    }
})
