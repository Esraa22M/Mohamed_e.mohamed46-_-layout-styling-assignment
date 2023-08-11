import { View, Text } from "react-native";
import { ButtonWithGradient } from "../button-with-gradient/button-with-gradient.components";
import { footerStyle } from "./footer.styles";
export const Footer = ({ handleFormSubmittion }) => (
  <View style={footerStyle.footerContainer}>
    <ButtonWithGradient textValue={"sing up"} onPress={handleFormSubmittion} />
    <Text style={footerStyle.footerText}>read user license agreement</Text>
  </View>
);
