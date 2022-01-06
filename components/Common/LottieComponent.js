import React from "react";
import Lottie from "react-lottie-player";

const LottieComponent = ({ loop = true, play = true, lottieJson, style = { width: 200, height: "100%" } }) => {
  return <Lottie loop={loop}
                 play={play}
                 animationData={lottieJson}
                 style={style}/>;
};

export default LottieComponent;