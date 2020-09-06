import React from 'react';
import {View, Text, StyleSheet, ActivityIndicator} from 'react-native';

const About = () => {
    return (
        <View style={style.view}>
            <Text style={style.title}>A propos de cette application</Text>
            <Text> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Exercitationem architecto odio quam hic. Obcaecati molestiae illo molestias adipisci in saepe accusantium culpa itaque dolorum voluptatibus consectetur repellat velit, suscipit officia?Odit veniam molestiae maxime, tempora totam explicabo sit quod beatae necessitatibus deserunt inventore id! Sapiente dolor optio praesentium veritatis temporibus labore quibusdam! Esse recusandae dolorum quaerat odit. Nulla, temporibus vel. </Text>
            <View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-between'}}>
                <ActivityIndicator style={style.view} size="large" color="#00ff00" />
                <ActivityIndicator style={style.view} size="large" color="#00ff00" />
            </View>
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