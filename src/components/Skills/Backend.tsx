import React from "react";

const Backend = () => {
  return (
    <div className="border bg-white rounded-[1.25rem] px-[2rem] py-[4rem] shadow-lg">
      <h3 className="text-center font-semibold">Backend</h3>
      <div className="flex items-center justify-around mt-4">
        <div>
          <div className="flex items-center gap-2 mt-2 mt-2">
            <i className="bx bx-badge-check -translate-y-3"></i>

            <div className="">
              <h3 className="font-bold ">Node Js</h3>
              <span className="text-sm text-gray-400">Advanced</span>
            </div>
          </div>
          <div className="flex items-center gap-2 mt-2">
            <i className="bx bx-badge-check -translate-y-3"></i>

            <div className="">
              <h3 className="font-bold ">PHP</h3>
              <span className="text-sm text-gray-400">Advanced</span>
            </div>
          </div>
          <div className="flex items-center gap-2 mt-2">
            <i className="bx bx-badge-check -translate-y-3"></i>

            <div className="">
              <h3 className="font-bold ">Python</h3>
              <span className="text-sm text-gray-400">Advanced</span>
            </div>
          </div>
        </div>
        <div>
          <div className="flex items-center gap-2">
            <i className="bx bx-badge-check -translate-y-3"></i>

            <div className="">
              <h3 className="font-bold ">Java</h3>
              <span className="text-sm text-gray-400">Advanced</span>
            </div>
          </div>
          <div className="flex items-center gap-2 mt-2">
            <i className="bx bx-badge-check -translate-y-3"></i>

            <div className="">
              <h3 className="font-bold ">SQL</h3>
              <span className="text-sm text-gray-400">Advanced</span>
            </div>
          </div>
          <div className="flex items-center gap-2 mt-2">
            <i className="bx bx-badge-check -translate-y-3"></i>

            <div className="">
              <h3 className="font-bold ">MongoDB Atlas</h3>
              <span className="text-sm text-gray-400">Advanced</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Backend;
