import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/AntDesign';

const TitleBar = ({ title, showIcon = true }) => {
  const navigation = useNavigation();
  const back = navigation.canGoBack();

  const openSettings = () => {
    navigation.navigate('ChangeLng')
  };

  return (
    <View style={styles.contentTitleScreen}>
      <View style={styles.contentItem}>
        <View style={styles.contentBack}>
          {back && (
            <TouchableOpacity onPress={() => { navigation.goBack() }}>
              <Icon name="arrowleft" size={30} color="#000" style={styles.icon} />
            </TouchableOpacity>
          )}
        </View>
        <View style={styles.contentTitle}>
          <Text style={styles.titleScreen}>{title} </Text>
        </View>
        <View style={styles.contentSettings}>
          {showIcon && (
            <TouchableOpacity onPress={openSettings}>
              <Icon name="setting" size={30} color="#000" style={styles.icon} />
            </TouchableOpacity>
          )}
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
  contentItem: {
    flexDirection: "row",
    alignItems: 'center',
    width: "100%",
  },
  contentTitle: {
    textAlign: 'center',
    width: "80%",
  },
  contentBack: {
    width: "10%",
  },
  contentSettings: {
    width: "10%",
  },
  icon: {
    padding: 5,
    textAlign: 'center',
  },

})