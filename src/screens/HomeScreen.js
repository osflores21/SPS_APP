import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity, FlatList } from 'react-native'
import axios from 'axios';

const Card = ({ navigation, title, description, urlToImage, content, author, url, publishedAt }) => {
  
  return (
    <View style={styles.card}>
      <View style={styles.cardContainer}>
        <View style={styles.imageContainer}>
          <Image
            source={{ uri: urlToImage||'https://assets.stickpng.com/images/5a4613e5d099a2ad03f9c995.png' }}
            style={styles.image}
            resizeMode='cover'
          />
        </View>
        <View style={styles.descriptionContainer}>
          <Text style={styles.titles}>{title}</Text>
          <Text style={styles.description}>{description}</Text>
        </View>
      </View>

      <View style={styles.ReadMoreContainer}>
        <TouchableOpacity
        >
          <View style={styles.buttonContent}>
            <Text style={styles.buttonText}>Leer más</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const HomeScreen = () => {
  const KEY = '939b9d2512294a14aa2859841bc9c922';
  const URL = 'https://newsapi.org/v2/top-headlines';
  const SOURCE = 'bbc-news';

  const [data, setData] = useState([]);
/*   const [isLoading, setIsLoading] = useState(true); */

  const fetchData = async () => {
    try {
      const response = await axios.get(URL, {
        params: {
          sources: SOURCE,
          apiKey: KEY,
        },
      });
      setData(response.data);
 /*      setIsLoading(false); */
    } catch (error) {
      console.error('Error fetching news data:', error);
      setData({ error: true });
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

 
  return (
    <View style={styles.layout}>
      <Text>Noticias del Mundo</Text>
      <FlatList
        data={data.articles}
        ItemSeparatorComponent={() => <Text> </Text>}
        renderItem={({ item }) => (
          <Card {...item} />
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
  card: {
    borderColor: "#5555",
    borderWidth: 1,
    margin: 5
  },
  cardContainer: {
    flexDirection: 'row',
    padding: 5,
    justifyContent: 'space-around',

  },
  imageContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 7,
    width: '40%',
  },
  ReadMoreContainer: {
    alignItems: 'flex-end',
    justifyContent: 'flex-end',

  },
  descriptionContainer: {
    flex: 1,
    borderBottomWidth: 1,
    borderColor: 'black',

  },
  titleContainar: {
    borderWidth: 1,
    borderColor: 'black',
  },
  image: {
    alignItems: 'center',
    aspectRatio: 1,
    width: '100%',
  },

  buttonContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    marginRight: 5,
  },
  icon: {
    margin: 5,
  },
  titles: {
    fontWeight: 'bold',
    fontSize: 20
  }
})