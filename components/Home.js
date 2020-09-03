import React from 'react'
import {View, Text, TextInput} from 'react-native'

const Home = ({ presentation, imagePresentation }) => {
  console.log(presentation, 'state data from Home Reducer')
    return (
      <View>
        {presentation.map((text) => (
          <Text>{presentation}</Text>
        ))}
      </View>
    )
};

export default Home;