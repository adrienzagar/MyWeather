import React from 'react'
import {View, Text, TextInput, StyleSheet} from 'react-native'
import Header from '../containers/Header/index'
// import { onChange } from 'react-native-reanimated';

const Home = ({ setInputValue, inputValue }) => {
  const handleOnSubmit = (evt) => {
    console.log(inputValue)
    evt.preventDefault();
    onSubmitSearch()
  }
  const handleChange = (evt) => {
    console.log(evt)
    setInputValue(evt)
  }
    return (
      <View>
        <Header style={style.Header} />
        <TextInput 
          style={style.container} 
          onChangeText={handleChange} 
          value={inputValue}
          onSubmitEditing={handleOnSubmit}
        ></TextInput>
      </View>
    )
};

const style = StyleSheet.create({
  container: {
    height: 40,
    marginTop: 100,
    borderColor: 'black',
    borderWidth: 1,
    backgroundColor: '#4f83cc',
    color: '#ac0800'
  },
  Header: {
    marginTop: 20
  }
})
export default Home;