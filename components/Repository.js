import React from 'react'
import { View, Text, Image, StyleSheet, } from 'react-native'
import * as Linking from 'expo-linking';
import { Card, Title, Paragraph } from 'react-native-paper';
import PropTypes from 'prop-types';


const Repository = ({ name, descritpion, owner, stargazers_count }) => {

    const handlePress = () => {
        Linking.openURL(`${owner.htlm_url}`)
    }
    
    const LeftContent = () => <Image style={{ width: 50, height: 50 }} source={{ uri: `${owner.avatar_url}` }} />

    return(
        <Card key={owner.id}>
            <Card.Title title={owner.login} subtitle={owner.type} left={LeftContent} source={{ uri: `${owner.avatar_url}` }} />
            <Card.Content>
            <Title onPress={handlePress}>{name}</Title>
            <Paragraph>{descritpion}</Paragraph>
            <View style={style.stars}>
                <Image  source={require('../assets/star.png')} />
                <Text >{stargazers_count} </Text>
            </View>
            </Card.Content>
            {/* <Card.Cover source={{ uri: `${owner.avatar_url}` }} /> */}
        </Card>
    )
};

const style = StyleSheet.create({
    stars: {
        flex: 1,
        flexDirection: "row",
    }
})

Repository.propTypes = {
    name: PropTypes.string.isRequired,
    description: PropTypes.string,
    owner: PropTypes.object.isRequired,
    stargazers_count: PropTypes.number.isRequired,
}

export default Repository