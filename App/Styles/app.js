import { StyleSheet } from "react-native";
import Dimensions from "Dimensions";


const AppStyles = StyleSheet.create({
  appContainer: {
    backgroundColor: "#303030",
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height
  }
})
export default AppStyles;
