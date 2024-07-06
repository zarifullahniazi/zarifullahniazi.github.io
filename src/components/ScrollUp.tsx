"use client";
import React, { useState, useEffect } from "react";

const ScrollUp = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const show = window.scrollY > 200;
      if (show) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    document.addEventListener("scroll", handleScroll);
    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <a
      href="#home"
      className={`${
        isVisible ? "md:fixed" : ""
      } right-20 bottom-20 bg-black text-white p-3 rounded-xl font-md`}
    >
      <i className="uil uil-arrow-up text-md"></i>
    </a>
  );
};

export default ScrollUp;
