/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
import React, {Fragment} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  Image, // added
  View,
  Text,
  StatusBar,
  //AsyncStorage
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

// adding this part 
import Tabs from './src'

// keeping a key for storage 
//const key = 'cities'

export default class App extends React.Component {

  // adding the following to control the data 
  state = { 
    cities : [], // an array for now 
  };

  // async componentDidMount() { 
  //   try { 
  //     const cities = await AsyncStorage.getItem(key)
  //     console.log('cities:', cities)
  //     this.setState({
  //       cities: JSON.parse(cities)
  //     })
  //   } catch (error) { 
  //     console.log('error: ', error)
  //   }
  // }

  // need a function to add a city, takes city as an argument
  addCity = (city) => {
    const newCities = this.state.cities
    newCities.push(city)
    // need to save the data 
    // AsyncStorage.setItem(key, JSON.stringify(cities)) 
    // .then(() => console.log('item stored'))
    // .catch(error => { 
    //   console.log('error: ', error)
    // })
    this.setState({ cities: newCities }) 
  };

  // function to add a location to a city 
  addLocation = (location, city) => { 
    const index = this.state.cities.findIndex (item => { 
      return (item.id === city.id)
    }) // when we create a new city we set the id of that to be unique 
    const chosenCity = this.state.cities[index]
    chosenCity.locations.push(location)
    const cities = [ 
      ...this.state.cities.slice(0, index), 
      chosenCity, 
      ...this.state.cities.slice(index + 1)
    ] // code above creates the cities array with the chosen city 
    this.setState({ 
      cities
    // }, () => { 
    //   AsyncStorage.setItem (key, JSON.stringify(cities))
    //     .then(() => console.log('item stored'))
    //     .catch(error => { 
    //     console.log('error: ', error)
    //   })
    // 
  }
    )
  };

  render () { 
    return ( 
      <Tabs
        screenProps = {{
          cities: this.state.cities,
          addCity: this.addCity,
          addLocation: this.addLocation
      }}
      /> 
    )
  }
};


