import React from "react";
import { View, Text, Image, StyleSheet, Dimensions,useWindowDimensions,ScrollView } from "react-native";
import Title from "../components/Title";
import Colors from "../constants/colors";
import PrimaryButton from "../components/PrimaryButton";

const OverScreen = ({ roundsNumber, userNumber, onStartNewGame }) => {
  const { width, height } = useWindowDimensions();

  let imageSize = 300;

  if (width<380){
    imageSize = 150;
  }

  if (height <400){
    imageSize = 80;
  }

  const imageStyle={
    width: imageSize,
    height: imageSize,
    borderRadius: imageSize / 2,  

  }


  return (
    <ScrollView style={styles.screen}>
    <View style={styles.rootContainer}>
      <Title>GAME OVER</Title>
      <View style={[styles.imageContainer,imageStyle]}>
        <Image style={styles.image} source={require("../assets/success.png")} />
      </View>
      <View>
        <Text style={styles.summaryText}>
          Your phone needed{" "}
          <Text style={styles.highlight}>{roundsNumber} </Text>rounds to guess
          the number <Text style={styles.highlight}>{userNumber} </Text>😊
        </Text>
      </View>
      <PrimaryButton onPress={onStartNewGame}> Start New Game</PrimaryButton>
    </View>
    </ScrollView> 
  );
};

export default OverScreen;

// const deviceWidth = Dimensions.get("window").width;
// const deviceHeight = Dimensions.get("window").height;

const styles = StyleSheet.create({
  screen:{
    flex: 1,
  
  },
  rootContainer: {
    flex: 1,
    paddingTop: 45,
    padding: 25,
    justifyContent: "center",
    alignItems: "center",
  },
  imageContainer: {
    // borderRadius: deviceWidth < 380 ? 75 : 150,
    // width: deviceWidth < 380 ? 150 : 300,
    // height: deviceWidth < 380 ? 150 : 300,
    borderWidth: 3,
    borderColor: Colors.primary800,
    overflow: "hidden",
    margin: 36,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  summaryText: {
    fontFamily: "open-sans",
    fontSize: 24,
    textAlign: "center",
    marginBottom: 24,
  },
  highlight: {
    fontFamily: "open-sans-bold",
    color: Colors.primary500,
  },
});
