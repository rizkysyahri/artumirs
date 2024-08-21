import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { art } from "@/lib/data";
import Link from "next/link";
import React from "react";
import Image from "next/image";

const page = () => {
  return (
    <div>
      <MaxWidthWrapper className="pt-10 lg:pt-20 pb-24 sm:pb-32 lg:pb-52">
        <div className="flex flex-col">
          <h1 className="font-bold text-5xl lg:text-7xl text-[#302898]">
            Latest Artumirs
          </h1>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 pt-20">
            {art.map((gallery) => (
              <Link
                href={`/product/${gallery.slug}`}
                className="flex flex-col text-[#302898] hover:text-pink-600 transition-all duration-300"
                key={gallery.id}
              >
                <Image
                  src={gallery.image}
                  alt="image"
                  width={500}
                  height={500}
                  className="w-full h-1/3 rounded-md object-cover"
                />
                <span className="pt-5 text-2xl lg:text-4xl font-bold">{gallery.title}</span>
                <span className="text-gray-600 group-hover:text-gray-600 text-lg font-sans py-3">
                  {gallery.article}
                </span>
                <span className="text-xl font-bold text-gray-600 group-hover:text-gray-600">{gallery.price}</span>
              </Link>
            ))}
          </div>
        </div>
      </MaxWidthWrapper>
    </div>
  );
};

export default page;
