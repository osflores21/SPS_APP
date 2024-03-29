import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import Icon from 'react-native-vector-icons/AntDesign';
import { useTranslation } from 'react-i18next';
import { formattedDate } from '../functions/Functions';

const Card = ({ navigation, title, description, urlToImage, content, author, url, publishedAt }) => {
  const { t } = useTranslation();
  return (
    <View style={styles.card}>
      <View style={styles.cardContainer}>
        <View style={styles.imageContainer}>
          <Image
            source={{ uri: urlToImage || 'https://assets.stickpng.com/images/5a4613e5d099a2ad03f9c995.png' }}
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
          onPress={() => {
            navigation.navigate("DetailScreen", { title, description, urlToImage, content, author, url, publishedAt: formattedDate(publishedAt) });
          }}
        >
          <View style={styles.buttonContent}>
            <Text style={styles.buttonText}>{t('read-more')} </Text>
            <Icon name="arrowright" size={20} color="#000" style={styles.icon} />
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Card

const styles = StyleSheet.create({
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