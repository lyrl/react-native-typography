import { Platform } from "react-native";
import CombinedStyleSheet from "../internal/CombinedStyleSheet";
import suffixProperties from "../internal/suffixProperties";
import material from "./material";
import sanFranciscoSpacing from "../helpers/sanFranciscoSpacing";

// https://material.io/guidelines/style/typography.html#typography-styles

const getStylesForColor = color => {
  const colorSuffix = color === "white" ? "White" : "";
  return {
    display4: material[`display4${colorSuffix}Object`],
    display3: material[`display3${colorSuffix}Object`],
    display2: material[`display2${colorSuffix}Object`],
    display1: material[`display1${colorSuffix}Object`],
    headline: material[`headline${colorSuffix}Object`],
    title: {
      ...material[`title${colorSuffix}Object`],
      fontSize: 21,
      letterSpacing: Platform.OS === "ios" ? sanFranciscoSpacing(21) : undefined
    },
    subheading: {
      ...material[`subheading${colorSuffix}Object`],
      fontSize: 17,
      letterSpacing: Platform.OS === "ios" ? sanFranciscoSpacing(17) : undefined
    },
    body2: {
      ...material[`body2${colorSuffix}Object`],
      fontSize: 15,
      letterSpacing: Platform.OS === "ios" ? sanFranciscoSpacing(15) : undefined
    },
    body1: {
      ...material[`body1${colorSuffix}Object`],
      fontSize: 15,
      letterSpacing: Platform.OS === "ios" ? sanFranciscoSpacing(15) : undefined
    },
    caption: {
      ...material[`caption${colorSuffix}Object`],
      fontSize: 13,
      letterSpacing: Platform.OS === "ios" ? sanFranciscoSpacing(13) : undefined
    },
    button: {
      ...material[`button${colorSuffix}Object`],
      fontSize: 15,
      letterSpacing: Platform.OS === "ios" ? sanFranciscoSpacing(15) : undefined
    }
  };
};

export default CombinedStyleSheet.create({
  ...getStylesForColor("black"),
  ...suffixProperties(getStylesForColor("white"), "White")
});
