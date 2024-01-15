import i18next from "i18next";

export const changeLanguage = (language, navigation) => {
    i18next.changeLanguage(language, (err, t) => {
        if (err) return console.log('something went wrong loading', err);
        t('key');
    });
    navigation.pop(1)
}

export const formattedDate = (dateW) => {
    const dateC = dateW.substring(0, 10);
    return dateC
}