import React from "react";
import MaxWidthWrapper from "./MaxWithWrapper";
import { Card, CardContent } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import Image from "next/image";

type Props = {};

const Services = () => {
  return (
    <section id="services" className="bg-gray-100 py-16">
      <MaxWidthWrapper className="">
        <div className="pb-10">
          <h1 className="font-bold text-4xl text-center my-4">Services</h1>
          <p className="text-gray-600 text-sm text-center">What I offer</p>
        </div>
        <div className="md:grid md:grid-cols-3 md:gap-12 md:px-20 px-10 space-y-12 md:space-y-0">
          <Card className="">
            <CardContent className="p-9">
              <Image
                src="/hand.svg"
                className="mt-16"
                alt="hand"
                height={30}
                width={30}
              />
              <p className="font-semibold w-2/3 py-6 text-1xl">
                App <br />
                Developer
              </p>
              <Dialog>
                <DialogTrigger className="text-gray-400 text-sm">
                  View More...
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>As an App Developer</DialogTitle>
                    <DialogDescription>hello Dear</DialogDescription>
                  </DialogHeader>
                </DialogContent>
              </Dialog>
            </CardContent>
          </Card>
          <Card className="">
            <CardContent className="p-9">
              <Image
                src="/hand.svg"
                className="mt-16"
                alt="somecard"
                height={30}
                width={30}
              />
              <p className="font-semibold w-2/3 py-6 text-1xl">
                App <br />
                Developer
              </p>
              <a href="" className="text-gray-500 text-sm mt-2 text-left">
                View More
              </a>
            </CardContent>
          </Card>
          <Card className="">
            <CardContent className="p-9">
              <Image
                src="/hand.svg"
                className="mt-16"
                alt="somecard"
                height={30}
                width={30}
              />
              <p className="font-semibold w-2/3 py-6 text-1xl">
                App <br />
                Developer
              </p>
              <a href="" className="text-gray-500 text-sm mt-2 text-left">
                View More
              </a>
            </CardContent>
          </Card>
        </div>
      </MaxWidthWrapper>
    </section>
  );
};

export default Services;
