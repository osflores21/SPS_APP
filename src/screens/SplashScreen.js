import React from 'react'
import { StyleSheet, Text, View, ActivityIndicator } from 'react-native'

const SplashScreen = () => {
  return (
    <View style={styles.contentSplash}>
      <ActivityIndicator size="large" color="#5555" />
      <Text>Oswaldo Flores Morales</Text>
    </View>
  )
}
export default SplashScreen

const styles = StyleSheet.create({
  contentSplash: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
})