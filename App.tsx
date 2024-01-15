import React from 'react'
import { StyleSheet } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import HomeStack from './src/navigation/HomeStack';


const App = () => {
  return (
    <NavigationContainer>
    <HomeStack />
  </NavigationContainer>
  )
}

export default App

const styles = StyleSheet.create({})