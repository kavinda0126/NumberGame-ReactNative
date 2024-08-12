import React from "react";
import { Text, StyleSheet,Platform } from "react-native";
import Colors from "../constants/colors";

const Title = ({ children }) => {
  return <Text style={styles.title}>{children}</Text>;
};

export default Title;

const styles = StyleSheet.create({
  title: {
    fontFamily: "OpenSans-Bold",
    fontSize: 24,
    color: "white",
    textAlign: "center",
   // borderWidth: Platform.OS === "android" ? 0 : 1,
    borderWidth:Platform.select({ios:1,android:0}),
    borderColor: "white",
    padding: 12,
    maxWidth:'80%',
    width: 300,
  },
});
