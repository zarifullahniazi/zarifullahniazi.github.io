import React from "react";
import "./footer.css";
import MaxWidthWrapper from "../MaxWithWrapper";
import Link from "next/link";
import Image from "next/image";

export const Footer = () => {
  return (
    <footer className="text-center my-12">
      <MaxWidthWrapper>
        <Link
          href="/"
          className="font-bold text-2xl my-6 h-full w-[30px] inline-block mx-auto"
        >
          <div className="flex-shrink-0">
            <Image src="./logo.svg" alt="logo" width={30} height={30} />
          </div>
        </Link>

        <ul className="flex justify-center text-sm gap-8 text-gray-400">
          <li className="">
            <a href="#about" className="hover:text-gray-900">
              About
            </a>
          </li>
          <li className="">
            <a href="#project" className="hover:text-gray-900">
              Project
            </a>
          </li>
          <li className="">
            <a href="#testimonials" className="hover:text-gray-900">
              Testimonials
            </a>
          </li>
        </ul>

        <div className="flex justify-center my-8">
          <div className="flex items-center gap-4">
            <a href="/" className="hover:text-gray-900" target="_blank">
              <i className="uil text-3xl uil-instagram"></i>
            </a>
            <a href="/" className="" target="_blank">
              <i className="uil text-3xl uil-dribbble"></i>
            </a>
            <a href="/" className="" target="_blank">
              <i className="uil text-3xl uil-github-alt"></i>
            </a>
          </div>
        </div>

        <span className="text-sm text-gray-400 mt-10">
          &#169;All rigths reserved, 2024
        </span>
      </MaxWidthWrapper>
    </footer>
  );
};
