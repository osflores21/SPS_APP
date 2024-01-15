import React from 'react'
import { StyleSheet, Text, View,  FlatList } from 'react-native'
import Card from '../components/Card';
import UseGetNews from '../hooks/UseGetNews';

const HomeScreen = ({navigation}) => {
  const { data, isLoading } = UseGetNews();
 
  return (
    <View style={styles.layout}>
      <Text>Noticias del Mundo</Text>
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