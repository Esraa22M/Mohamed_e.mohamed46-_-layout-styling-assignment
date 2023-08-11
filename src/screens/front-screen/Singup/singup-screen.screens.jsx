import { View } from "react-native";
import { Header } from "../../../components/header/header.component";
import { headerStyle } from "../../../components/header/header.styles";
import { singupStyles } from "./singup-screen.styles";
import { SingupFormBody } from "../../../components/singup-form-body/singup-form-body.components";
import { Footer } from "../../../components/footer/footer.component";
import { useState } from "react";

export const Singup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  handleUnmatchedPasswod = () => {
    if (password !== repeatPassword) {
      console.log("unmatched");
    } else {
      console.log("matched");
    }
  };
  handleWrongEmail = () => {
    const validRegex =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (!email.match(validRegex)) {
      console.log("wrong email format");
    } else {
      console.log("right one ");
    }
  };
  handleFormSubmittion = () => {
    setEmail("");
    setPassword("");
    setRepeatPassword("");
    handleWrongEmail();
    handleUnmatchedPasswod();
  };
  return (
    <View style={singupStyles.container}>
      <Header textValue={"sing up"} headerStyle={headerStyle} />
      <SingupFormBody
        email={email}
        password={password}
        repeatPassword={repeatPassword}
        setPassword={setPassword}
        setEmail={setEmail}
        setRepeatPassword={setRepeatPassword}
      />
      <Footer handleFormSubmittion={handleFormSubmittion} />
    </View>
  );
};
