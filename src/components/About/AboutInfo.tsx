"use client";
import React from "react";

const Info = () => {
  return (
    <div className="md:grid md:grid-cols-3 md:gap-10 my-12 md:my-0">
      <div className="bg-white rounded-2xl shadow-lg py-6 mt-8 md:mt-0">
        <i className="bx bx-award text-2xl"></i>
        <h3 className="mt-3 font-semibold">Experience</h3>
        <span className="mt-1 text-sm text-gray-500">8 Years Working</span>
      </div>
      <div className="bg-white rounded-2xl shadow-lg py-6 mt-8 md:mt-0">
        <i className="bx bx-briefcase-alt text-2xl"></i>
        <h3 className="mt-3 font-semibold">Completed</h3>
        <span className=" mt-1 text-sm text-gray-500">48 + Projects</span>
      </div>
      <div className="bg-white rounded-2xl shadow-lg py-6 mt-8 md:mt-0">
        <i className="bx bx-support text-2xl"></i>
        <h3 className="mt-3 font-semibold">Supprt</h3>
        <span className="mt-1 text-sm text-gray-600">online 24/7</span>
      </div>
    </div>
  );
};

export default Info;
