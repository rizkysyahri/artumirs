import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { art } from "@/lib/data";
import Image from "next/image";
import React from "react";

const page = ({ params }: { params: { slug: string } }) => {
  const selectedArt = art.find((p) => p.slug === params.slug);

  return (
    <div>
      <MaxWidthWrapper className="pt-10 lg:pt-20 pb-24 sm:pb-32 lg:pb-52">
        <div className="flex flex-col">
          <Image
            src={selectedArt?.image as string}
            alt="image"
            width={500}
            height={500}
            className="w-full h-[600px] object-cover"
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 my-10">
            <div className="flex flex-col col-span-5">
              <h1 className="text-[#302898] font-bold text-4xl ">
                {selectedArt?.title}
              </h1>
              <div className="my-5">
                <h1 className="text-[#302898] font-bold text-3xl mb-3">Size</h1>
                <span>{selectedArt?.size}</span>
              </div>
            </div>
            <p className="col-span-7 text-lg">{selectedArt?.description}</p>
          </div>
        </div>
      </MaxWidthWrapper>
    </div>
  );
};

export default page;
