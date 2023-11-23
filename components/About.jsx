"use client";
import { useEffect, useState } from "react";
import Image from "next/image";

const About = () => {
  const [windowWidth, setWindowWidth] = useState(0);
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  const contentShow = () => {
    if (windowWidth > 800) {
      return true;
    } else {
      return false;
    }
  };
  return (
    <div id="about" className="bg-primary text-secondary px-10 sm:px-20 py-16 ">
      {/* <p>Window Width: {windowWidth}</p> */}
      <p className=" text-center mb-5 text-3xl font-extrabold ">About</p>
      <div className="flex sm:flex-row flex-col justify-center items-center sm:items-start">
        {windowWidth > 800 ? (
          <Image
            width={400}
            height={400}
            id="profile"
            className="rounded-lg shadow-lg"
            src="/profile.jpg"
            alt="profile"
          />
        ) : (
          <Image
            width={200}
            height={200}
            id="profile"
            className="rounded-lg shadow-lg"
            src="/profile.jpg"
            alt="profile"
          />
        )}
        <div className="sm:ml-5 sm:mt-0 mt-5 sm:w-[60%] sm:text-2xl">
          <p className="border-2 p-2">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Amet,
            atque quisquam? Ducimus porro qui eligendi libero quae doloremque,
            velit laudantium!
          </p>
          {contentShow === true ? (
            <p className="border-2 p-2 mt-5">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos at
              sapiente enim nobis consequatur aliquam sit voluptatibus laborum
              hic tempora.
            </p>
          ) : (
            <></>
          )}
        </div>
      </div>
    </div>
  );
};

export default About;
