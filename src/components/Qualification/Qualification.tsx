"use client";
import React, { useState } from "react";
import MaxWidthWrapper from "../MaxWithWrapper";

type Props = {};

const Qualification = (props: Props) => {
  const [education, setEducation] = useState(true);
  return (
    <div className="bg-gray-100">
      <MaxWidthWrapper>
        <div className="">
          <h1 className="font-bold text-4xl text-center">Qualifications</h1>
          <p className="text-gray-600 text-sm text-center">
            What I have been doing
          </p>
        </div>

        {/* Content */}

        <div className="mx-auto max-w-[900px]">
          <div className="flex mx-auto gap-3 items-center justify-center mt-4 text-sm">
            <div
              className={`cursor-pointer ${
                education === true
                  ? "text-white bg-black rounded-lg py-2 px-3"
                  : ""
              }`}
              onClick={() => {
                setEducation(true);
              }}
            >
              <i className="uil uil-graduation-cap mr-1"></i>
              Education
            </div>
            <div
              className={`cursor-pointer ${
                education === false
                  ? "text-white bg-black rounded-lg py-2 px-3"
                  : ""
              }`}
              onClick={() => {
                setEducation(false);
              }}
            >
              <i className="uil uil-briefcase-alt mr-1"></i>
              Experience
            </div>
          </div>
          <div className="flex mx-auto w-full">
            {education === true ? (
              <div className="">
                <div>
                  <h1 className="text-md font-bold mt-4">Kabul University</h1>
                  <p className="text-gray-600 text-sm">2018 - 2022</p>
                  <p className="text-gray-600 text-sm max-w-[200px]">
                    Majored in subjects like Database Concepts, Object Oriented
                    Programming, Computer Networks, Network Security
                  </p>
                </div>
                <div>
                  <h1 className="text-md font-bold mt-4">
                    American University of Afghanistan
                  </h1>
                  <p className="text-gray-600 text-sm">2022 - 2026</p>
                  <p className="text-gray-600 text-sm max-w-[250px]">
                    Studied managerial finance subjects to understand working
                    capital management, capital budgeting etc.
                  </p>
                </div>
              </div>
            ) : (
              <div>
                <div>
                  <h1 className="text-md font-bold mt-4">
                    Full Stack Developer
                  </h1>
                  <p className="text-gray-600 text-sm">2020</p>
                  <p className="text-gray-600 text-sm">Freelance</p>
                </div>
                <div>
                  <h1 className="text-md font-bold mt-4">IT assitant</h1>
                  <p className="text-gray-600 text-sm">2022-2023</p>
                  <p className="text-gray-600 text-sm">CTG</p>
                </div>
                <div>
                  <h1 className="text-md font-bold mt-4">Web Developer</h1>
                  <p className="text-gray-600 text-sm">2021-2022</p>
                  <p className="text-gray-600 text-sm">BAB ALFAHIDI Ltd</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </MaxWidthWrapper>
    </div>
  );
};

export default Qualification;
