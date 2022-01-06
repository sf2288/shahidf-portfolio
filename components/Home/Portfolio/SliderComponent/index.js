import React from "react";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";
import Shimmer from "../../../Common/ShimmerLoader";
import style from "../Styles.module.scss";
import { useTheme } from "@mui/styles";
import { Button, MobileStepper } from "@mui/material";
import { KeyboardArrowLeft, KeyboardArrowRight } from "@mui/icons-material";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

export const SliderComponent = ({ index: i, data, view, TYPE_GRID }) => {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState({});

  const maxSteps = data?.images.length;
  const step = Object.keys(activeStep).length && activeStep[i];

  const handleNext = (parentIndex) => {
    const idx = Object.keys(activeStep).length && activeStep[parentIndex] ? activeStep[parentIndex] : 0;
    setActiveStep({ [i]: idx + 1 });
  };

  const handleBack = (parentIndex) => {
    const idx = Object.keys(activeStep).length && activeStep[parentIndex] ? activeStep[parentIndex] : 0;
    setActiveStep({ [i]: idx - 1 });
  };

  const handleStepChange = (parentIndex) => {
    setActiveStep({ [i]: parentIndex });
  };

  return <>
    <span className={style.stepCounter}>{`${step + 1}/${maxSteps}`}</span>
    <SwipeableViews index={activeStep[i]}
                            axis={theme.direction === "rtl" ? "x-reverse" : "x"}
                            onChangeIndex={handleStepChange}
                            enableMouseEvents>
      {data?.images.map((image, j) => {
        return <div key={`${i}+${j}`}
                    className={`${style.sliderImages} ${view === TYPE_GRID ? style.sliderImagesGrid : ""}`}>
          <Shimmer src={image} alt={image} className={style.image}/>
        </div>;
      })}
    </SwipeableViews>
    <MobileStepper steps={maxSteps}
                   position="static"
                   className={style.stepper}
                   classes={{ dot: style.stepperDot }}
                   activeStep={step}
                   nextButton={step < maxSteps - 1 ? <Button size="small"
                                                             className={`${style.btnRight} ${style.stepperButton}`}
                                                             onClick={() => handleNext(i)}
                                                             disabled={step === maxSteps - 1}>
                     {theme.direction === "rtl" ? <KeyboardArrowLeft/> : <KeyboardArrowRight/>}
                   </Button> : null}
                   backButton={step > 0 ? <Button size="small"
                                                  className={`${style.btnLeft} ${style.stepperButton}`}
                                                  onClick={() => handleBack(i)}
                                                  disabled={step === 0}>
                     {theme.direction === "rtl" ? <KeyboardArrowRight/> : <KeyboardArrowLeft/>}
                   </Button> : null}/>
  </>;
};