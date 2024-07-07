"use client";
import React, { useState, useEffect } from "react";
import MaxWidthWrapper from "./MaxWithWrapper";
import Image from "next/image";

type Props = {};

const Header = (props: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const show = window.scrollY > 0;
      if (show) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    document.addEventListener("scroll", handleScroll);
    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section className="relative">
      <section
        className={`fixed top-0 left-0 right-0 bg-white z-10 ${
          isScrolled ? "shadow-md" : ""
        }`}
      >
        <MaxWidthWrapper className="">
          <nav className="flex justify-between h-24 max-w-full items-center">
            <div className="flex-shrink-0">
              <a href="" className="">
                <div className="h-full w-[30px] flex items-center gap-1">
                  <Image src="./logo-z.svg" alt="logo" height={20} width={20} />
                  <Image src="./logo.svg" alt="logo" height={20} width={20} />
                </div>
              </a>
            </div>

            <ul className=" hidden md:flex items-center space-x-8 text-sm h-full">
              <li>
                <a href="" className="">
                  Home
                  <i className=""></i>
                </a>
              </li>
              <li>
                <a href="#about" className="href">
                  About
                  <i className=""></i>
                </a>
              </li>
              <li>
                <a href="#skills" className="href">
                  Skills
                  <i className=""></i>
                </a>
              </li>
              <li>
                <a href="#service" className="href">
                  Service
                  <i className=""></i>
                </a>
              </li>
              <li>
                <a href="#projects" className="href">
                  Projects
                  <i className=""></i>
                </a>
              </li>
              <li>
                <a href="#contact" className="href">
                  Contact
                  <i className=""></i>
                </a>
              </li>
            </ul>

            <div className="md:hidden flex">
              <button onClick={() => setIsOpen(!isOpen)}>
                {isOpen ? (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                ) : (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                )}
              </button>
            </div>
          </nav>

          {isOpen && (
            <div className="md:hidden duration-200">
              <div className="flex flex-col text-center text-sm pb-3 sm:px-3">
                <a
                  href="/home"
                  className="font-medium text-base hover:bg-gray-500 py-3 hover:text-gray-100 duration-300 rounded-md"
                >
                  <i className="uil uil-search"></i>
                  Home
                </a>
                <a
                  href="/about"
                  className="font-medium text-base hover:bg-gray-500 py-3 hover:text-gray-100 duration-300 rounded-md"
                >
                  About
                </a>
                <a
                  href="/skills"
                  className="font-medium text-base hover:bg-gray-500 py-3 hover:text-gray-100 duration-300 rounded-md"
                >
                  Skills
                </a>
                <a
                  href="#services"
                  className="font-medium text-base hover:bg-gray-500 py-3 hover:text-gray-100 duration-300 rounded-md"
                >
                  Service
                </a>
                <a
                  href="/Projects"
                  className="font-medium text-base hover:bg-gray-500 py-3 hover:text-gray-100 duration-300 rounded-md"
                >
                  Projects
                </a>
                <a
                  href="/"
                  className="font-medium text-base hover:bg-gray-500 py-3 hover:text-gray-100 duration-300 rounded-md"
                >
                  Contact
                </a>
              </div>
            </div>
          )}
        </MaxWidthWrapper>
      </section>
    </section>
  );
};

export default Header;
