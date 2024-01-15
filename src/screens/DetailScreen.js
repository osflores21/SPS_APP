import React from 'react'
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import TitleBar from '../components/TitleBar';

const DetailScreen = ({ route }) => {
  const { author, title, description, content, urlToImage, publishedAt } = route.params

  return (
    <View style={styles.layout}>
      <TitleBar title={"Detalle"} />
      <View style={styles.contentDetail}>
        <ScrollView>
          <View style={styles.contentTitle}>
            <Text style={styles.titles}>{title}</Text>
          </View>
          <View style={styles.contentDate}>
            <Text style={styles.dates}>{publishedAt} </Text>
          </View>
          <View style={styles.contentDescription}>
            <Text style={styles.descriptions}>{description} </Text>
          </View>
          <View style={styles.contentImage}>
            <Image
              source={{ uri: urlToImage || 'https://assets.stickpng.com/images/5a4613e5d099a2ad03f9c995.png' }}
              style={styles.images}
              resizeMode='contain'
            />
          </View>
          <View style={styles.contentAuthor}>
            <Text style={styles.authors}>Por: {author} </Text>
          </View>
          <View style={styles.contentContent}>
            <Text style={styles.contents}>{content} </Text>
          </View>
        </ScrollView>
      </View>
    </View>
  )
}

export default DetailScreen

const styles = StyleSheet.create({
  layout: {
    flex: 1,
  },
  titleScreen: {
    fontSize: 30
  },
  contentTitleScreen: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: "#5555",
    padding: 10
  },
  contentDetail: {
    margin: 10,
    padding: 10,
    borderColor: "#5555",
    borderWidth: 1,
    flex: 1

  },
  contentTitle: {
    justifyContent: 'center'
  },
  titles: {
    fontWeight: 'bold',
    fontSize: 30
  },
  contentDate: {
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },
  dates: {
    fontSize: 10
  },
  contentAuthor: {
    paddingTop: 10
  },
  authors: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  contentImage: {
    paddingTop: 10
  },
  images: {
    width: "100%",
    height: 200
  },
  contentDescription: {
    paddingTop: 10
  },
  descriptions: {
    fontSize: 16,
  },
  contentContent: {
    paddingTop: 10
  },
  contents: {
    fontSize: 16,

  }


})