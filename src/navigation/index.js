// In App.js in a new project

import React from 'react';
import {View, Image, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import LoginScreen from '../screens/LoginScreen';
import HomeScreen from '../screens/HomeScreen';
import {styles} from './styles';

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{
            headerTitle: 'Sign In',
            headerTitleAlign: 'center',
            headerTitleStyle: styles.headerStyle,
            headerTintColor: 'white',
            headerStyle: {
              elevation: 0,
              backgroundColor: '#B02E46',
            },
          }}
        />
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            headerTitle: 'Index.',
            headerTitleStyle: styles.headerStyle,
            headerTintColor: 'white',
            headerStyle: {
              backgroundColor: '#B02E46',
            },
            headerRight: () => (
              <View style={styles.headerRightContainer}>
                <View style={{marginRight: 15}}>
                  <View style={styles.badge}>
                    <Text style={{color: '#B02E46'}}>0</Text>
                  </View>
                  <Image source={require('../assets/basket.png')} />
                </View>
                <Image source={require('../assets/menu.png')} />
              </View>
            ),
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
