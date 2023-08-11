import { View, TextInput, Text } from "react-native";
import { textInputStyle } from "../textInput/textInput.styles";
import { TextInputWithShadow } from "../textInput/textInput.components";
import { singupFormBodyStyle } from "./singup-form-body.styles";
import { SingupFormColors } from "../../colors/front-screen-colors/singup-screen.colors";
import { useState } from "react";

export const SingupFormBody = ({
  email,
  password,
  repeatPassword,
  setEmail,
  setPassword,
  setRepeatPassword,
}) => {
  handleEmailInput = (enteredEmail) => setEmail(enteredEmail);
  handlePasswordInput = (enteredPassword) => setPassword(enteredPassword);
  handleRpeatPasswordInput = (enteredPassword) =>
    setRepeatPassword(enteredPassword);

  return (
    <View style={singupFormBodyStyle.formBody}>
      <TextInputWithShadow
        value={email}
        onChangeText={handleEmailInput}
        style={textInputStyle.textInputContainer}
        textStyle={textInputStyle.textInput}
        startColor={SingupFormColors.SHADOW_COLOR}
        placeholder="e-mail"
        keyboardType="email-address"
      />
      <TextInputWithShadow
        value={password}
        onChangeText={handlePasswordInput}
        style={textInputStyle.textInputContainer}
        textStyle={textInputStyle.textInput}
        startColor={SingupFormColors.SHADOW_COLOR}
        placeholder="password"
        secureTextEntry
      />
      <TextInputWithShadow
        value={repeatPassword}
        style={textInputStyle.textInputContainer}
        textStyle={textInputStyle.textInput}
        startColor={SingupFormColors.SHADOW_COLOR}
        onChangeText={handleRpeatPasswordInput}
        placeholder="repeat password"
        secureTextEntry
      />
    </View>
  );
};
