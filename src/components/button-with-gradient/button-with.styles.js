import { StyleSheet } from "react-native"; // Later on in your styles..
export const buttonWithGradient = StyleSheet.create({
  linearGradient: {
    paddingHorizontal: 5,
    paddingVertical: 5,
    width: "70%",
    borderRadius: 30,
  },
  buttonText: {
    fontSize: 18,
    textAlign: "center",
    textTransform: "capitalize",
    justifyContent: "center",
    alignItems: "center",
    color: "#ffffff",
    padding: 10,
    backgroundColor: "transparent",
  },
});
