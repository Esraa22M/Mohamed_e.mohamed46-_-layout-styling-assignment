import { Text } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { SingupFormColors } from "../../colors/front-screen-colors/singup-screen.colors";
import { buttonWithGradient } from "./button-with.styles";
export const ButtonWithGradient = ({ textValue, ...otherProps }) => (
  <LinearGradient
    colors={[SingupFormColors.HEADER_COLOR, SingupFormColors.SHADOW_COLOR]}
    style={buttonWithGradient.linearGradient}
    {...otherProps}
  >
    <Text style={buttonWithGradient.buttonText} {...otherProps}>
      {textValue}
    </Text>
  </LinearGradient>
);
