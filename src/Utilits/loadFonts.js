import * as Font from "expo-font";

export const loadFonts = async () => {
  await Font.loadAsync({
    LemonadaRegular: require("../../assets/fonts/Lemonada/static/Lemonada-Regular.ttf"),
    RobotoRegular: require("../../assets/fonts/Roboto/Roboto-Regular.ttf"),
    RobotoBold: require("../../assets/fonts/Roboto/Roboto-Bold.ttf")
    // "Montserrat-SemiBold": {
    //   uri: require("./assets/fonts/Montserrat-SemiBold.ttf"),
    //   fontDisplay: FontDisplay.FALLBACK
    // }
  });
};
