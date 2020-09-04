import React, { Component } from "react";
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Animated,
  Image,
  Easing,
  Dimensions,
  StatusBar
} from "react-native";
import LinearGradient from "react-native-linear-gradient";
import SplashImage from "../Images/logo.png"

const { width, height } = Dimensions.get("window");

export default class SplashScreen extends Component {
  constructor(props) {
    super(props);
    this.animatedValue = new Animated.Value(0.5);
    this.animatedValue2 = new Animated.Value(0);
  }

  componentDidMount() {
    setTimeout(() => {
        this.props.navigation.navigate("Login");
     
    }, 4000)
    Animated.spring(this.animatedValue, {
      toValue: 1,
      friction: 4,
      delay: 2500
    }).start();

    Animated.timing(this.animatedValue2, {
      toValue: 1,
      delay: 200,
      duration: 3000
    }).start();
    // firebase.auth().onAuthStateChanged(user => {
    //   this.props.navigation.navigate(user ? "Home" : "Login");
    // });
  }

  render() {
    const truckStyle = {
      transform: [{ scale: this.animatedValue }]
    };

    const scaleText = {
      transform: [{ scale: this.animatedValue2 }]
    };

    return (
      
      <LinearGradient
        colors={[
          "#ffc108",
          "#ffc108",
          
        ]}
        style={styles.container}
      >
           <StatusBar hidden={false} backgroundColor="#ffc108" translucent={true} />
        <Animated.View style={[styles.ring, truckStyle]}>
          <Animated.Image
            source={SplashImage}
            style={[
              {
                resizeMode: "contain",
                width: 200,
                height: 190,
                borderRadius:20
              }
            ]}
          />
          
        </Animated.View>
      </LinearGradient>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ffc108"
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10
  },
  instructions: {
    textAlign: "center",
    color: "#333333",
    marginBottom: 5
  },
  ring: {
    backgroundColor: "#ffc108",
    borderRadius: 50,
    borderWidth: 2,
    borderColor: "#FFF",
    padding: 10
  },
  starStyle: {
    width: 100,
    height: 20,
    marginBottom: 20
  }
});