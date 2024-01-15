import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import DetailScreen from '../screens/DetailScreen';
import ChangeLng from '../screens/ChangeLng';

const Stack = createNativeStackNavigator();

const HomeStack = () => (
    <Stack.Navigator initialRouteName="HomeScreen" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="DetailScreen" component={DetailScreen} />
        <Stack.Screen name="ChangeLng" component={ChangeLng} />

    </Stack.Navigator>
);

export default HomeStack
