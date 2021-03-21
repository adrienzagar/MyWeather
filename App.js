import 'react-native-gesture-handler'
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { Provider as PaperProvider } from 'react-native-paper';

// Local Import
import store from './store'
import About from './components/About'
import Home from './containers/Home/index'

const Tab = createMaterialTopTabNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <PaperProvider>
        <NavigationContainer>
          <Tab.Navigator         
            tabBarOptions={{
            activeTintColor: '#e64a19',
            inactiveTintColor: 'gray',
            activeBackgroundColor: '#01579b',
            style: {
              borderTopColor: '#e64a19',
              fontSize: 20
            }
          }}>
            <Tab.Screen name="Home" component={Home} />
            <Tab.Screen name="About" component={About} />
          </Tab.Navigator>
        </NavigationContainer>  
      </PaperProvider>
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
