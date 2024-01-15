import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/AntDesign';

const TitleBar = ({ title}) => {
  const navigation = useNavigation();
  const back = navigation.canGoBack();

  return (
    <View style={styles.contentTitleScreen}>
      <View style={styles.contentButtonSettings}>
        {back && (
          <TouchableOpacity onPress={() => { navigation.goBack() }}>
            <Icon name="arrowleft" size={30} color="#000" style={styles.icon} />
          </TouchableOpacity>
        )}

        <View style={styles.contentTitle}>
          <Text style={styles.titleScreen}>{title} </Text>
        </View>
      </View>
    </View >
  )
}

export default TitleBar

const styles = StyleSheet.create({
  titleScreen: {
    fontSize: 30,
    margin: 5,
    paddingLeft: "5%",
    textAlign: 'center'
  },
  contentTitleScreen: {
    alignItems: 'center',
    backgroundColor: "#5555",
    width: "100%",
  },
  contentButtonSettings: {
    flexDirection: "row",
    alignItems: 'center',
  },
  contentTitle: {
    flex: 1,
    textAlign: 'center',
  },
  icon: {
    padding: 5,
    textAlign: 'center',
  },

})