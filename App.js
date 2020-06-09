import 'react-native-gesture-handler';
import React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './Screens/HomeScreen';
import Details from './Screens/Details';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="NewsApps" 
      component={HomeScreen}
      options={{
          title: 'My NewsApp',
          headerStyle: {
            backgroundColor: '#58b4ae',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold'
          },
        }} />
      <Stack.Screen name="Details" 
      component={Details}
      options={{
          title: 'Details',
          headerStyle: {
            backgroundColor: '#58b4ae',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold'
          }
        }} />
    </Stack.Navigator>
    </NavigationContainer>
  );
}