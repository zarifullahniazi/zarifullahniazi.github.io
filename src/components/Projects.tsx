import React from "react";
import MaxWidthWrapper from "./MaxWithWrapper";
import Image from "next/image";
import { View } from "lucide-react";

type Props = {};

const data = [
  {
    name: "Travello",
    image: "/travelo.jpg",
    view: "https://travello-eta.vercel.app/",
  },
  {
    name: "Personal Website",
    image: "/personal.jpg",
    view: "https://personal-website-niaziz.vercel.app/",
  },
  {
    name: "Logis",
    image: "/logis.jpg",
    view: "https://logis-one.vercel.app/",
  },
  {
    name: "Blog AI",
    image: "/blogai.jpg",
    View: "https://blog-ai-gules.vercel.app/",
  },
];

const Projects = (props: Props) => {
  return (
    <section className="bg-gray-100 py-12" id="#projects">
      <MaxWidthWrapper className="md:max-w-[1000px]">
        <div className="">
          <h1 className="font-bold text-4xl text-center">Projects</h1>
          <p className="text-gray-600 text-sm text-center mt-6">
            Most recent works
          </p>
        </div>
        <hr className="mt-4" />
        <div className="md:grid grid-cols-2 gap-8 mt-8 ">
          {data.map((item) => (
            <div className=" relative h-64 shadow-md rounded-2xl hover:shadow-xl transition-all duration-150">
              <Image
                src={item.image}
                alt="travelo"
                fill
                className="rounded-2xl"
              />
              <div className="flex justify-between items-center z-1  bg-white text-black p-2 bottom-0 left-0 text-center w-full absolute rounded-b-2xl px-3 py-2.5">
                <p className="text-sm font-semibold">{item.name}</p>
                <a
                  href={item.view}
                  target="_blank"
                  className="bg-black text-white rounded-full px-3 py-1 text-xs"
                >
                  Preview
                </a>
              </div>
            </div>
          ))}
        </div>
      </MaxWidthWrapper>
    </section>
  );
};

export default Projects;
