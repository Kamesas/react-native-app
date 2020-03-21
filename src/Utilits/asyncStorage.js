import { AsyncStorage } from "react-native";

export const _setStoreData = async (itemName, data) => {
  try {
    await AsyncStorage.setItem(itemName, JSON.stringify(data));
  } catch (error) {
    console.log(error);
  }
};

export const _retrieveData = async itemName => {
  try {
    const value = await AsyncStorage.getItem(itemName);
    if (value !== null) {
      return value;
    }
    return [];
  } catch (error) {
    console.log(error);
  }
};
