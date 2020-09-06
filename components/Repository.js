import React from 'react'
import { View, Text, Image, SafeAreaView, ScrollView, StyleSheet, FlatList } from 'react-native'
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';

const Repository = ({ name, descritpion, owner }) => {
    console.log(owner)
    const LeftContent = props => <Avatar.Icon {...props} icon="folder" />
    return(
        <Card>
            <Card.Title title={owner.login} subtitle={owner.type} left={LeftContent} source={{ uri: `${owner.avatar_url}` }} />
            <Card.Content>
            <Title>{name}</Title>
            <Paragraph>{descritpion}</Paragraph>
            </Card.Content>
            <Card.Cover source={{ uri: `${owner.avatar_url}` }} />
        </Card>
    )
};

const styles = StyleSheet.create({
    Text: {
        color: '#f0f',
        fontSize: 20   
    },
    Repository: {
        color: '#f0f',
        marginTop: 150,
        fontSize: 100,
    },
    Image: {
        width: 50,
        height: 50,
    }
    
});

export default Repository