import React from 'react';
import {View, ScrollView, StyleSheet} from 'react-native';
import { Searchbar } from 'react-native-paper';
import Constants from 'expo-constants';
import Header from '../containers/Header/index';
import Repository from './Repository';
import PropTypes from 'prop-types';
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
        <Searchbar
          style={style.SearchBar}
          placeholder="Search a repository"
          onChangeText={handleChange}
          onSubmitEditing={handleOnSubmit}
          value={inputValue}
        />
           <ScrollView style={style.scrollView}>
        {repositories.map((result) => (
          <Repository key={result.id} {...result} />
        ))}
            </ScrollView>
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
  SearchBar: {
    marginBottom: 10
  },
  scrollView: {
    marginHorizontal: 40,
    height: 500,
  },
  scrollContainer: {
    flex: 1,
    marginTop: Constants.statusBarHeight,
  },
})

Home.propTypes = {
  inputValue: PropTypes.string,
  getRepositories: PropTypes.func.isRequired,
  setInputValue: PropTypes.func.isRequired,
  repositories: PropTypes.arrayOf(
    PropTypes.shape({
      result: PropTypes.array.isRequired,
      id: PropTypes.number.isRequired,
    })
  )
}

export default Home;