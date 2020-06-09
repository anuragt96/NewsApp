import React,{useState} from 'react';
import {View, Text} from 'react-native';
import { WebView } from 'react-native-webview';

const Details = ({route, navigation}) => {
    const { itemId } = route.params;
    const [state, setstate] = useState(itemId)    
    console.log(JSON.stringify(itemId))
    return (
        <WebView source={{ uri: state }} />
        
    )
}

export default Details