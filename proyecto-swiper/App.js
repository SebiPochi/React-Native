import { View, Text, FlatList, StyleSheet, Button } from 'react-native'
import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BoredApi from './screens/BoredApi';
import Home from './screens/Home';
import ReactNativeTutorial from './screens/ReactNativeTutorial'

export default function App() {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Bored Api" component={BoredApi} />
        <Stack.Screen name="React Native Tutorial" component={ReactNativeTutorial} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}