import React from "react";
import MaxWidthWrapper from "../MaxWithWrapper";
import Frontend from "./Fontend";
import Backend from "./Backend";
const Skills = () => {
  return (
    <div className="bg-gray-100 py-16" id="skills">
      <MaxWidthWrapper className="md:max-w-[1000px] max-w-[400px]">
        {/* Title */}
        <div className="pb-10">
          <h1 className="font-bold text-4xl text-center my-4">Skills</h1>
          <p className="text-gray-600 text-sm text-center">
            My technical Skills
          </p>
        </div>

        {/* skills */}

        <div className="md:grid md:grid-cols-2 md:gap-12 space-y-3 md:space-y-0">
          <Frontend />
          <Backend />
        </div>
      </MaxWidthWrapper>
    </div>
  );
};

export default Skills;
