import React, { useState } from "react";
import Logo from "../components/Logo";
import { BsFillSunFill, BsFillMoonFill, BsFillMicFill } from "react-icons/bs";
import { FaPlay, FaPause, FaStop } from "react-icons/fa";
import { IoTrashSharp } from "react-icons/io5";

const RecorderPage = () => {
  // microphone
  const [micStarted, setMicStarted] = useState("");

  // Play button
  const [played, setPlayed] = useState("hidden");

  // Pause button
  const [paused, setPaused] = useState("hidden");

  // Stop button
  const [stopped, setStopped] = useState("hidden");

  // Clear button
  const [cleared, setCleared] = useState("hidden");

  // theme button
  const [lightOrDark, setLightOrDark] = useState("Light"); /// Light or dark
  const [lightIcon, setLightIcon] = useState(""); /// light icon
  const [darkIcon, setDarkIcon] = useState("hidden"); /// dark icon
  const [themeTransition, setThemeTransition] = useState(
    "bg-PrimaryColor text-white"
  ); /// Movement from left to right and vise versa

  // theme button effect
  const [logoChange, setLogoChange] = useState("text-black"); /// logo
  const [backgroundChange, setBackgroundChange] = useState("bg-white"); /// recorder background
  const [visualizerBackgroundChange, setVisualizerBackgroundChange] = useState(
    "bg-white border-RecorderAscentColor"
  ); /// wave background and border
  // const [visualizerChange, setVisualizerChange] = useState(""); /// wave
  const [pageTitleColor, setPageTitleColor] = useState("text-black"); /// Page Title color
  const [counterTheme, setCounterTheme] = useState(
    "bg-white border-RecorderAscentColor text-black"
  ); /// counter theme
  const [themeBtnContainer, setThemeBtnContainer] = useState("bg-white");

  // $(window).resize(function () {
  //   winWidth = $(window).width();
  //   $("#resize").height(winWidth * 0.3);
  // });

  // const deviceHeight = window.resizeTo

  // device height <responsivity>
  const [deviceHeight, setDeviceHeight] = useState(window.innerHeight);
  const deviceHeightHandler = function () {
    console.log("device change");
    setDeviceHeight(window.innerHeight);
  };

  setInterval(deviceHeightHandler, 5000);
  console.log(deviceHeight);

  // mic is click
  const onMicStart = () => {
    setMicStarted("hidden");
    setPaused("");
    setPlayed("hidden");
    setStopped("");
  };

  // recorder is stopped
  const onPlay = () => {
    if (played === "hidden") {
      setPlayed("");
      setPaused("hidden");
    } else {
      setPlayed("hidden");
      setPaused("");
      setMicStarted("hidden");
    }
  };

  // recorder is paused
  const onPause = () => {
    if (paused === "hidden") {
      setPaused("");
      setPlayed("hidden");
    } else {
      setPaused("hidden");
      setPlayed("");
      if (cleared === "hidden") {
        setMicStarted("");
      } else {
        setMicStarted("hidden");
      }
    }
  };

  // recorder is stopped
  const onStopped = () => {
    setStopped("hidden");
    setPlayed("");
    setCleared("");
    setPaused("hidden");
    setMicStarted("hidden");
  };

  // recorder is cleared
  const onCleared = () => {};

  // Theme of the recorder
  const theme = function () {
    console.log("Change");
    if (lightOrDark === "Light") {
      //// light to dark
      setThemeTransition("translate-x-[67%] text-PrimaryColor bg-white");
      setLightOrDark("Dark");
      setDarkIcon("");
      setLightIcon("hidden");
      setLogoChange("text-white");
      setBackgroundChange("bg-black");
      setVisualizerBackgroundChange("bg-white/20 border-DarkRecorderBorder");
      setPageTitleColor("text-white");
      setCounterTheme("bg-[#333333] border-DarkRecorderBorder text-white");
      setThemeBtnContainer("bg-DarkThemeBtnContainer");
    } else {
      //// dark to light
      setThemeTransition("-translate-x-[0%] bg-PrimaryColor text-white");
      setLightOrDark("Light");
      setLightIcon("");
      setDarkIcon("hidden");
      setLogoChange("text-black");
      setBackgroundChange("bg-white");
      setVisualizerBackgroundChange("bg-white border-RecorderAscentColor");
      setPageTitleColor("text-black");
      setCounterTheme("bg-white border-RecorderAscentColor text-black");
      setThemeBtnContainer("bg-white");
    }
  };

  return (
    <div
      className={`w-screen flex items-center flex-col gap-5 Laptop:gap-0 h-[896px] ${backgroundChange}`}
    >
      <div className="flex items-center justify-between w-full px-24 py-6 Laptop:px-16">
        <Logo color={logoChange} />
        <div
          className={`w-[200px] rounded-full p-[4.5px] shadow-BtnboxShadow ${themeBtnContainer} Laptop:w-[150px] `}
        >
          <div
            className={`flex items-center justify-center w-3/5 rounded-full py-[8px] gap-2 Laptop:gap-[5px] duration-[600ms] ${themeTransition} Laptop:py-[5px]`}
            onClick={theme}
          >
            <BsFillSunFill
              className={`${lightIcon} w-7 h-7 Laptop:w-[20px] Laptop:h-[20px]`}
            />
            <BsFillMoonFill
              className={`${darkIcon} w-[22px] h-[22px] Laptop:w-[18px] Laptop:h-[18px]`}
            />
            <p className="text-xl Laptop:text-lg">{lightOrDark}</p>
          </div>
        </div>
      </div>
      <h1
        className={`text-4xl Laptop:text-3xl font-semibold mb-12 ${pageTitleColor}`}
      >
        Recorder
      </h1>
      <div className="w-full ">
        <div className=" flex flex-col items-center relative px-[12%] Laptop:px-[8%]">
          <p
            className={`text-2xl border-[2px] p-[6px] rounded-[4px] w-fit absolute -top-[23px] ${counterTheme}`}
          >
            0:00
          </p>
          <div
            className={`border-[2px] w-full h-[316px] Laptop:h-[250px] rounded-[22px] ${visualizerBackgroundChange}`}
          >
            {/*  */}
          </div>
        </div>
        <div
          className={`flex items-center justify-center w-full pb-16 gap-[72px] Laptop:gap-[60px] pt-16 Laptop:pt-10 Laptop:pb-10  ${backgroundChange}`}
        >
          <div className="flex items-start flex-col">
            {/* play button */}
            <div
              className={`p-[1.4rem] Laptop:p-[1.15rem] text-PrimaryColor flex items-center justify-center shadow-RocorderControlBtnBoxShadow rounded-full bg-white ${played}`}
              onClick={onPlay}
            >
              <FaPlay className="w-[44px] h-[44px] Laptop:w-[32px] Laptop:h-[32px]" />
            </div>
            {/* pause button */}
            <div
              className={`p-[1.4rem] Laptop:p-[1.15rem] text-PrimaryColor flex items-center justify-center shadow-RocorderControlBtnBoxShadow rounded-full bg-white ${paused}`}
              onClick={onPause}
            >
              <FaPause className="w-[44px] h-[44px] Laptop:w-[32px] Laptop:h-[32px]" />
            </div>
          </div>
          {/* microphone button */}
          <div
            className={`p-[1.4rem] Laptop:p-[1.15rem] text-PrimaryColor flex items-center justify-center shadow-RocorderControlBtnBoxShadow rounded-full bg-white ${micStarted}`}
            onClick={onMicStart}
          >
            <BsFillMicFill className="w-[72px] h-[72px] Laptop:w-[60px] Laptop:h-[60px]" />
          </div>
          <div className="flex flex-col items-center">
            {/* stop button */}
            <div
              className={`p-[1.4rem] Laptop:p-[1.15rem] text-PrimaryColor flex items-center justify-center shadow-RocorderControlBtnBoxShadow rounded-full bg-white ${stopped}`}
              onClick={onStopped}
            >
              <FaStop className="w-[44px] h-[44px] Laptop:w-[32px] Laptop:h-[32px]" />
            </div>
            {/* clear button */}
            <div
              className={`p-[1.4rem] Laptop:p-[1.15rem] text-PrimaryColor flex items-center justify-center shadow-RocorderControlBtnBoxShadow rounded-full bg-white ${cleared}`}
              onClick={onCleared}
            >
              <IoTrashSharp className="w-[44px] h-[44px] Laptop:w-[32px] Laptop:h-[32px]" />
            </div>
          </div>
        </div>
      </div>
      {/* <div className="bg-[#0000000F] w-full min-h-full max-h-screen blur-sm"></div> */}
    </div>
  );
};

export default RecorderPage;
