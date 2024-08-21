import React from "react";
import Content from "./content/content";

const Footer = () => {
  return (
    <div
      className="relative h-[600px]"
      style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
    >
      <div className="fixed bottom-0 h-[600px] w-full">
        <Content />
      </div>
    </div>
  );
};

export default Footer;
