"use client";
import React, { useState, useEffect } from "react";
import Social from "./Social";
import Data from "./Data";
import MaxWidthWrapper from "../MaxWithWrapper";

type Props = {};

const Header = (props: Props) => {
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsDesktop(window.innerWidth > 768);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <section id="home">
      <MaxWidthWrapper>
        <div className="md:flex gap-12">
          {isDesktop && <Social />}
          <Data />
        </div>
      </MaxWidthWrapper>
    </section>
  );
};

export default Header;
