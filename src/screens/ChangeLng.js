import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useTranslation } from 'react-i18next';
import TitleBar from '../components/TitleBar';
import { changeLanguage } from '../functions/Functions';
import LanguageOption from '../components/LanguageOption';

const ChangeLng = ({ navigation }) => {
  const { t } = useTranslation();

  return (
    <View style={styles.layout}>
      <TitleBar title={t('settings')} showIcon={false} navigation={navigation} />
      <View style={styles.contentLng}>
        <View style={styles.contentItemsLng}>
          <View>
            <Text style={styles.titles}>{t('select-lenguage')}</Text>
          </View>
          <LanguageOption
            flagSource={require('../assets/flag_mx.png')}
            label={t("lng-spanish")}
            onPress={() => changeLanguage('es', navigation)}
          />
          <LanguageOption
            flagSource={require('../assets/flag_us.png')}
            label={t("lng-english")}
            onPress={() => changeLanguage('en', navigation)}
          />
        </View>
      </View>
    </View>
  );
};

export default ChangeLng;

const styles = StyleSheet.create({
  layout: {
    flex: 1,
  },
  titles: {
    fontSize: 30,
    fontWeight: '600',
    marginBottom: 10,
    padding: 10,
    textAlign: "center",
  },
  contentLng: {
    alignItems: 'center',
    flex: 1,
    justifyContent: "center",
  },
  contentItemsLng: {
    borderRadius: 8,
    borderColor: "#5555",
    borderWidth: 1,
    justifyContent: "center",
    padding: 40,
    width: "90%",
  },
})