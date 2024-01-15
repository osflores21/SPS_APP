import React from 'react'
import { StyleSheet, Text, View, FlatList } from 'react-native'
import { useTranslation } from 'react-i18next';
import SplashScreen from './SplashScreen';
import Card from '../components/Card';
import TitleBar from '../components/TitleBar'; 
import UseGetNews from '../hooks/UseGetNews';


const HomeScreen = ({ navigation }) => {
  const { data, isLoading } = UseGetNews();
  const { t } = useTranslation();

  if (isLoading) {
    return <SplashScreen />;
  }
  return (
    <View style={styles.layout}>
      <TitleBar title={t('world-news')} />
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