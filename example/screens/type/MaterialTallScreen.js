import React from "react";
import { View, Text } from "react-native";
import { materialTall } from "react-native-typography";
import TypeDemoScreen from "./TypeDemoScreen";

const MaterialTallScreen = ({ navigation }) => {
  return (
    <TypeDemoScreen
      navigation={navigation}
      renderLightSection={guides => (
        <View>
          <Text style={[materialTall.display4, guides]}>ภาษาไทย</Text>
          <Text style={[materialTall.display3, guides]}>ภาษาไทย</Text>
          <Text style={[materialTall.display2, guides]}>ภาษาไทย</Text>
          <Text style={[materialTall.display1, guides]}>ภาษาไทย</Text>
          <Text style={[materialTall.headline, guides]}>ภาษาไทย</Text>
          <Text style={[materialTall.title, guides]}>ภาษาไทย</Text>
          <Text style={[materialTall.subheading, guides]}>ภาษาไทย</Text>
          <Text style={[materialTall.body2, guides]}>ภาษาไทย</Text>
          <Text style={[materialTall.body1, guides]}>ภาษาไทย</Text>
          <Text style={[materialTall.caption, guides]}>ภาษาไทย</Text>
          <Text style={[materialTall.button, guides]}>ภาษาไทย</Text>
        </View>
      )}
      renderDarkSection={guides => (
        <View>
          <Text style={[materialTall.display4White, guides]}>ภาษาไทย</Text>
          <Text style={[materialTall.display3White, guides]}>ภาษาไทย</Text>
          <Text style={[materialTall.display2White, guides]}>ภาษาไทย</Text>
          <Text style={[materialTall.display1White, guides]}>ภาษาไทย</Text>
          <Text style={[materialTall.headlineWhite, guides]}>ภาษาไทย</Text>
          <Text style={[materialTall.titleWhite, guides]}>ภาษาไทย</Text>
          <Text style={[materialTall.subheadingWhite, guides]}>ภาษาไทย</Text>
          <Text style={[materialTall.body2White, guides]}>ภาษาไทย</Text>
          <Text style={[materialTall.body1White, guides]}>ภาษาไทย</Text>
          <Text style={[materialTall.captionWhite, guides]}>ภาษาไทย</Text>
          <Text style={[materialTall.buttonWhite, guides]}>ภาษาไทย</Text>
        </View>
      )}
    />
  );
};

export default MaterialTallScreen;
