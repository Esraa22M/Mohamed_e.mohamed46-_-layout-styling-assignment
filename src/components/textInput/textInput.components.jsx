import { Shadow } from "react-native-shadow-2";
import { TextInput } from "react-native";
export const TextInputWithShadow = ({
  style,
  startColor,
  textStyle,
  ...otherprops
}) => {
  return (
    <Shadow style={style} startColor={startColor}>
      <TextInput {...otherprops} style={textStyle} />
    </Shadow>
  );
};
