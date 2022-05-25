import { View, Text, Button} from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

export default function Home({ navigation }) {
  return (
    <View>
      <Text>Home</Text>
        <Button
            title="Bored Api"
            onPress={() => navigation.navigate('Bored Api')}
        />
        <Button
            title="React Native Tutorial"
            onPress={() => navigation.navigate('React Native Tutorial')}
        />
        <Button
            title="Genderize Api"
            onPress={() => navigation.navigate('Genderize Api')}
        />
    </View>
  )
}