import React from 'react'
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';

const LanguageOption = ({ flagSource, label, onPress }) => {
  return (
    <TouchableOpacity
      style={styles.contentOption}
      onPress={onPress}
    >
      <Image source={flagSource} style={styles.imageLng} />
      <View style={styles.contentFlags}>
        <Text style={styles.LabelLng}>{label}</Text>
        <Icon name="right" size={20} color="#0005" />
      </View>
    </TouchableOpacity>
  )
}

export default LanguageOption

const styles = StyleSheet.create({

  contentOption: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderColor: "#5555",
    borderBottomWidth: 1,
  },
  imageLng: {
    width: 30,
    height: 30
  },
  contentFlags: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1
  },
  LabelLng: {
    padding: 10, fontSize: 20, flex: 1
  },


})