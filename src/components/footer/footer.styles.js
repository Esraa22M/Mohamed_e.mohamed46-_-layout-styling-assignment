import { StyleSheet } from "react-native";
import { SingupFormColors } from "../../colors/front-screen-colors/singup-screen.colors";
export const footerStyle = StyleSheet.create({
  footerContainer: {
    flex: 2,
    width: "100%",
    marginHorizontal: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  shadowContainer: { width: "100%" },
  footerText: {
    color: SingupFormColors.HEADER_COLOR,
    marginVertical: 10,
    textTransform: "capitalize",
  },
});
