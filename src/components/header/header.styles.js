import { StyleSheet } from "react-native";
import { SingupFormColors } from "../../colors/front-screen-colors/singup-screen.colors";
export const headerStyle = StyleSheet.create({
  headerContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 20,
    flex: 2,

    padding: 20,
  },
  headerContent: {
    textTransform: "capitalize",
    fontWeight: "bold",
    fontSize: 45,
    letterSpacing: 2,
    color: SingupFormColors.HEADER_COLOR,
  },
});
