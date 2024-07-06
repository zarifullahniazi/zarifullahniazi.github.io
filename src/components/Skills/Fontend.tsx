import React from "react";

const Fontend = () => {
  return (
    <div className="border bg-white rounded-[1.25rem] px-[2rem] py-[4rem] shadow-lg md:mb-0">
      <h3 className="text-center font-semibold">Frontend</h3>
      <div className="flex items-center justify-around mt-4">
        <div>
          <div className="flex items-center gap-2 mt-2">
            <i className="bx bx-badge-check -translate-y-3"></i>

            <div className="">
              <h3 className="font-bold ">HTML</h3>
              <span className="text-sm text-gray-400">Advanced</span>
            </div>
          </div>
          <div className="flex items-center gap-2 mt-2">
            <i className="bx bx-badge-check -translate-y-3"></i>

            <div className="">
              <h3 className="font-bold ">CSS</h3>
              <span className="text-sm text-gray-400">Advanced</span>
            </div>
          </div>
          <div className="flex items-center gap-2 mt-2">
            <i className="bx bx-badge-check -translate-y-3"></i>

            <div className="">
              <h3 className="font-bold ">JavaScript</h3>
              <span className="text-sm text-gray-400">Advanced</span>
            </div>
          </div>
        </div>
        <div>
          <div className="flex items-center gap-2 mt-2">
            <i className="bx bx-badge-check -translate-y-3"></i>

            <div className="">
              <h3 className="font-bold ">Python</h3>
              <span className="text-sm text-gray-400">Advanced</span>
            </div>
          </div>
          <div className="flex items-center gap-2 mt-2">
            <i className="bx bx-badge-check -translate-y-3"></i>

            <div className="">
              <h3 className="font-bold ">Git</h3>
              <span className="text-sm text-gray-400">Advanced</span>
            </div>
          </div>
          <div className="flex items-center gap-2 mt-2">
            <i className="bx bx-badge-check -translate-y-3"></i>

            <div className="">
              <h3 className="font-bold ">React</h3>
              <span className="text-sm text-gray-400">Advanced</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Fontend;
