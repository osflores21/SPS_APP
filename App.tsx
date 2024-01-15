import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

function HomeScreen () {
  return(
    <View>
      <Text>HomeScreen</Text>
    </View>
  );
}

function DetailScreen () {
  return(
    <View>
      <Text>DetailScreen</Text>
    </View>
  );
}

const HomeStack = () => (
  <Stack.Navigator initialRouteName="HomeScreen" screenOptions={{ headerShown: false }}>
    <Stack.Screen name="HomeScreen" component={HomeScreen} />
    <Stack.Screen name="DetailScreen" component={DetailScreen} />
  </Stack.Navigator>
);

const App = () => {
  return (
    <NavigationContainer>
    <HomeStack />
  </NavigationContainer>
  )
}

export default App

const styles = StyleSheet.create({})