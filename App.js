import 'react-native-gesture-handler'
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';
import { TabNavigator } from 'react-navigation'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons'

// Local Import
import store from './store'
import About from './components/About'
import Home from './containers/Home/index'
import Header from './containers/Header/index'

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <Header />
      <NavigationContainer>
        <Tab.Navigator         
          tabBarOptions={{
          activeTintColor: '#e64a19',
          inactiveTintColor: 'gray',
          activeBackgroundColor: '#01579b',
          style: {
            borderColor: '#e64a19',
            borderWidth: 5,
            borderTopWidth: 5,
            borderTopColor: '#e64a19',
            fontSize: 20
          }
        }}>
          <Tab.Screen name="Home" component={Home} />
          <Tab.Screen name="About" component={About} />
        </Tab.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#4f83cc',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
