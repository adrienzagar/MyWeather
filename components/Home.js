import React from 'react';
import {View, Text, TextInput, SafeAreaView, ScrollView, StyleSheet} from 'react-native';
import { Searchbar } from 'react-native-paper';
import Constants from 'expo-constants';
import Header from '../containers/Header/index';
import Repository from './Repository';
// import { onChange } from 'react-native-reanimated';

const Home = ({ setInputValue, inputValue, getRepositories, repositories }) => {

  const handleOnSubmit = (evt) => {
    // console.log(inputValue)
    evt.preventDefault();
    getRepositories()
    // onSubmitSearch()
  }
  const handleChange = (evt) => {
    console.log(repositories)
    setInputValue(evt)
  }
    return (
      <View>
        <Header style={style.Header} />
        {/* <TextInput 
          style={style.container} 
          onChangeText={handleChange} 
          value={inputValue}
          onSubmitEditing={handleOnSubmit}
        ></TextInput> */}
        <Searchbar
          placeholder="Search a repository"
          onChangeText={handleChange}
          onSubmitEditing={handleOnSubmit}
          value={inputValue}
        />
        <SafeAreaView style={style.scrollContainer}>    
           <ScrollView style={style.scrollView}>
        {repositories.map((result) => (
          <Repository key={result.id} {...result} />
        ))}
            </ScrollView>
        </SafeAreaView>
        {/* <Repository repositories={repositories} /> */}
      </View>
    )
};

const style = StyleSheet.create({
  container: {
    height: 40,
    marginTop: 50,
    borderColor: 'black',
    borderWidth: 1,
    backgroundColor: '#4f83cc',
    color: '#ac0800'
  },
  Header: {
    marginTop: 20
  },
  scrollView: {
    backgroundColor: '#F0F',
    marginHorizontal: 20,
    height: 500,
  },
  scrollContainer: {
    flex: 1,
    marginTop: Constants.statusBarHeight,
  },
})
export default Home;