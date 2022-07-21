import { Animated } from "react-native";
import React from "react";
import AnimatedLottieView from "lottie-react-native";

const Commentaires = () => {
  return (
    <Animated.View
      style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
    >
      <AnimatedLottieView
        source={require("../assets/99220-blue-square-ss.json")}
        speed={0.8}
        autoPlay
      />
    </Animated.View>
  );
};
export default Commentaires;