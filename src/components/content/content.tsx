import React from "react";

export default function Content() {
  return (
    <div className="bg-[#302898] py-8 px-12 h-full w-full flex flex-col justify-between">
      <Section1 />
      <Section2 />
    </div>
  );
}

const Section1 = () => {
  return (
    <div>
      <Nav />
    </div>
  );
};

const Section2 = () => {
  return (
    <div className="flex justify-between items-end text-white">
      <h1 className="text-[11vw] leading-[0.8] mt-10">Artumirs Gallery</h1>
      <p>©copyright</p>
    </div>
  );
};

const Nav = () => {
  return (
    <div className="flex shrink-0 gap-20">
      <div className="flex flex-col gap-2">
        <h3 className="mb-2 uppercase text-white">Gallery</h3>
      </div>
      <div className="flex flex-col gap-2">
        <h3 className="mb-2 uppercase text-white">Artist Program</h3>
      </div>
    </div>
  );
};
