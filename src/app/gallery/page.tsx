import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { art } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Gallery = () => {
  return (
    <div>
      <section>
        <MaxWidthWrapper className="pt-10 lg:pt-20 pb-24 sm:pb-32 lg:pb-52">
          <div className="flex flex-col">
            <h1 className="font-bold text-5xl lg:text-8xl text-[#302898]">
              Gallery
            </h1>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-3 pt-20">
              {art.map((gallery) => (
                <Link
                  href={`/gallery/${gallery.slug}`}
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
                  <span className="py-5 text-4xl font-bold">
                    {gallery.title}
                  </span>
                  <span className="text-[#302898] group-hover:text-[#302898] text-lg">
                    {gallery.year}
                  </span>
                  <span className="text-[#302898] group-hover:text-[#302898] text-lg font-sans">
                    {gallery.article}
                  </span>
                  <p className="line-clamp-3 pt-5 text-black group-hover:black font-sans">
                    {gallery.description}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </MaxWidthWrapper>
      </section>
    </div>
  );
};

export default Gallery;
