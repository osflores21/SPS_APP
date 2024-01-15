import React from 'react'
import { StyleSheet, Text, View, FlatList } from 'react-native'
import Card from '../components/Card';
import UseGetNews from '../hooks/UseGetNews';
import TitleBar from '../components/TitleBar';
import SplashScreen from './SplashScreen';

const HomeScreen = ({ navigation }) => {
  const { data, isLoading } = UseGetNews();

  if(isLoading){
    return <SplashScreen/>
  }
  return (
    <View style={styles.layout}>
      <TitleBar title={"Noticias del Mundo"} />
      <FlatList
        data={data.articles}
        ItemSeparatorComponent={() => <Text> </Text>}
        renderItem={({ item }) => (
          <Card {...item} navigation={navigation} />
        )}
      />
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  layout: {
    flex: 1,
  },

})