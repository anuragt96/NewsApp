import React, { Component } from 'react';
import { FlatList, Image, TouchableOpacity, View} from 'react-native';
import { H3, Content, Card, CardItem, Text, Body } from 'native-base';
const axios = require('axios');
import {useState} from 'react';

const HomeScreen = ({navigation}) => {
    const [mydata, setdata] = useState([])
     // Make a request for a user with a given ID
     axios.get('https://newsapi.org/v2/top-headlines?country=in&apiKey=34dd5c20a7704859ac3e6239bae6ca36')
     .then(function (response) {
         setdata(response.data.articles)
     })
     .catch(function (error) {
         console.log("Myerror",error);
     })

    return (
        <View>
             <FlatList
        data={mydata}
        renderItem={({item}) =>
        <Content>
          <Card style={{flex: 0}}>
          <TouchableOpacity onPress={() => navigation.navigate('Details', {itemId: item.url})}>
            <CardItem>
              <Body>
                <Image source={{uri: item.urlToImage}} style={{height: 200, width: 380, flex: 1}}/>
                <H3>{item.title}</H3>
                <Text style={{marginTOp:'10px' }}>{item.content} </Text>
              </Body>
            </CardItem>
            </TouchableOpacity>
          </Card>
        </Content>
        }>
    </FlatList>
        </View>
    )
}

export default HomeScreen
