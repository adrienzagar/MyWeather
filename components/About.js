import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const About = () => {
    return (
        <View style={style.view}>
            <Text style={style.title}>About this App</Text>
            <Text>This application allows you to type a search and display informations about GitHub repositories</Text>
        </View>
    )
}

const style = StyleSheet.create({
    view: {
        margin: 20
    },
    title: {
        fontSize: 22,
        marginBottom: 20
    }
})
export default About;