import { Platform } from "react-native";
import CombinedStyleSheet from "../internal/CombinedStyleSheet";
import suffixProperties from "../internal/suffixProperties";
import material from "./material";
import systemWeights from "../helpers/systemWeights";
import sanFranciscoSpacing from "../helpers/sanFranciscoSpacing";

// https://material.io/guidelines/style/typography.html#typography-styles

const getStylesForColor = color => {
  const colorSuffix = color === "white" ? "White" : "";
  return {
    display4: {
      ...material[`display4${colorSuffix}Object`],
      ...systemWeights.regular,
      lineHeight: 152
    },
    display3: {
      ...material[`display3${colorSuffix}Object`],
      lineHeight: 80
    },
    display2: {
      ...material[`display2${colorSuffix}Object`],
      textAlignVertical: "center",
      lineHeight: 63
    },
    display1: {
      ...material[`display1${colorSuffix}Object`],
      lineHeight: 48
    },
    headline: {
      ...material[`headline${colorSuffix}Object`],
      lineHeight: 34
    },
    title: {
      ...material[`title${colorSuffix}Object`],
      ...systemWeights.bold,
      fontSize: 21,
      lineHeight: 30,
      letterSpacing: Platform.OS === "ios" ? sanFranciscoSpacing(21) : undefined
    },
    subheading: {
      ...material[`subheading${colorSuffix}Object`],
      fontSize: 17,
      lineHeight: 26,
      letterSpacing: Platform.OS === "ios" ? sanFranciscoSpacing(17) : undefined
    },
    body2: {
      ...material[`body2${colorSuffix}Object`],
      ...systemWeights.bold,
      fontSize: 15,
      lineHeight: 26,
      letterSpacing: Platform.OS === "ios" ? sanFranciscoSpacing(15) : undefined
    },
    body1: {
      ...material[`body1${colorSuffix}Object`],
      fontSize: 15,
      lineHeight: 23,
      letterSpacing: Platform.OS === "ios" ? sanFranciscoSpacing(15) : undefined
    },
    caption: {
      ...material[`caption${colorSuffix}Object`],
      fontSize: 13,
      lineHeight: 18,
      letterSpacing: Platform.OS === "ios" ? sanFranciscoSpacing(13) : undefined
    },
    button: {
      ...material[`button${colorSuffix}Object`],
      ...systemWeights.bold,
      fontSize: 15,
      lineHeight: 23,
      letterSpacing: Platform.OS === "ios" ? sanFranciscoSpacing(15) : undefined
    }
  };
};

export default CombinedStyleSheet.create({
  ...getStylesForColor("black"),
  ...suffixProperties(getStylesForColor("white"), "White")
});
