'use client'
import React, { useState, useEffect } from "react";

const Hero = () => {
  const [text, setText] = useState("");
  const fullText = "Roohan Khan."; // Replace with your desired text
  const typingSpeed = 50; // Adjust the typing speed as needed

  useEffect(() => {
    let currentIndex = 0;
    const intervalId = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setText(fullText.slice(0, currentIndex));
        currentIndex += 1;
      } else {
        clearInterval(intervalId);
      }
    }, typingSpeed);

    return () => clearInterval(intervalId);
  }, [fullText, typingSpeed]);

  return (
    <div id="home" className="py-20 border">
      <div
        id="home"
        className="flex flex-col justify-center items-center font-extrabold text-3xl"
      >
        <p className=" font-light">Hi, This is</p>
        <p className="typing-container">
          <span className="typed-text text-accent">{text}</span>
        </p>
      </div>
      <div className="font-semibold text-center px-16 py-2 text-sm ">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla nemo,
        sed qui nihil voluptas voluptate!
      </div>
    </div>
  );
};

export default Hero;
