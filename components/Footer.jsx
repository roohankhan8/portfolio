// "use client";
// import { useState, useEffect } from "react";
import { FaGithub, FaFacebook, FaInstagram } from "react-icons/fa";
import { FiFigma } from "react-icons/fi";
import Link from "next/link";
import { SiAdobephotoshop } from "react-icons/si";

const Footer = () => {
  // const [tilt, setTilt] = useState({ x: 0, y: 0 });
  // const handleMouseMove = (e) => {
  //   const { clientX, clientY } = e;
  //   const { left, top, width, height } = e.target.getBoundingClientRect();

  //   const x = (clientX - left - width / 2) / (width / 2);
  //   const y = -(clientY - top - height / 2) / (height / 2);

  //   setTilt({ x, y });
  // };
  // const handleMouseLeave = () => {
  //   setTilt({ x: 0, y: 0 });
  // };
  // useEffect(() => {
  //   document.addEventListener("mousemove", handleMouseMove);
  //   return () => {
  //     document.removeEventListener("mousemove", handleMouseMove);
  //   };
  // }, []);
  return (
    <div className="footer">
      <div>
        <p>Developer</p>
        <span>
          <Link href="">
            <FaGithub />
          </Link>
        </span>
      </div>
      <div>
        <p>Designer</p>
        <span>
          <Link href="">
            <FiFigma />
          </Link>
        </span>
        <br />
        <span>
          <Link href="">
            <SiAdobephotoshop />
          </Link>
        </span>
      </div>
      <div>
        <p>Human</p>
        <span>
          <Link href="">
            <FaFacebook />
          </Link>
        </span>
        <br />
        <span>
          <Link href="">
            <FaInstagram />
          </Link>
        </span>
      </div>
      {/* <div
        className="tiltingDiv"
        style={{
          transform: `rotateX(${tilt.y * 20}deg) rotateY(${tilt.x * 20}deg)`,
        }}
        onMouseLeave={handleMouseLeave}
      >
        Tilt me!
      </div> */}
    </div>
  );
};

export default Footer;
