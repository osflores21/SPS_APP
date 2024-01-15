import React from 'react'
import { StyleSheet } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import HomeStack from './src/navigation/HomeStack';
import { I18nextProvider } from 'react-i18next';
import i18next from './src/functions/i18next';

const App = () => {
  return (
    <I18nextProvider i18n={i18next}>
    <NavigationContainer>
    <HomeStack />
  </NavigationContainer>
  </I18nextProvider>
  )
}

export default App

const styles = StyleSheet.create({})