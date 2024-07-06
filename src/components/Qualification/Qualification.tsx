import React from "react";
import MaxWidthWrapper from "../MaxWithWrapper";

type Props = {};

const Qualification = (props: Props) => {
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

        <div>
          <div>
            <div>
              <i className="uil uil-graduation-cap"></i>
              Education
            </div>
            <div>
              <i className="uil uil-briefcase-alt"></i>
              Experience
            </div>
          </div>
        </div>
      </MaxWidthWrapper>
    </div>
  );
};

export default Qualification;
