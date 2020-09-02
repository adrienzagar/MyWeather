import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import About from './components/About'
import Home from './components/Home'
import { Provider } from 'react-redux';
import Store from './store'

export default function App() {
  return (
    <Provider store={Store}>
      <View style={styles.container}>
        <StatusBar style="auto" />
        <Home />
      </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#a1f2a3',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
