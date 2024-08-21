"use client";

import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { art } from "@/lib/data";
import Image from "next/image";
import * as React from "react";

const Page = ({ params }: { params: { slug: string } }) => {
  const selectedArt = art.find((p) => p.slug === params.slug);

  const [isModalOpen, setIsmodalOpen] = React.useState(false);

  const buttonShowModal = () => {
    setIsmodalOpen(!isModalOpen);
  };

  const closeModal = () => {
    setIsmodalOpen(false);
  };

  const confirmPurchase = () => {
    const phoneNumber = "6282141088313";
    const message = `Hello, I am interested in purchasing "${selectedArt?.title}" for ${selectedArt?.price}.`;
    const whatsappURL = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(
      message
    )}`;

    window.open(whatsappURL, "_blank");
  };

  return (
    <div>
      <MaxWidthWrapper className="pt-10 lg:pt-20 pb-24 sm:pb-32 lg:pb-52">
        <div className="grid grid-cols-1 lg:grid-cols-12 lg:space-x-10">
          <div className="col-span-6">
            <Image
              src={selectedArt?.image as string}
              alt="image"
              width={500}
              height={500}
              className="w-full h-full object-cover"
            />
          </div>

          <div className="col-span-5 flex flex-col font-sans pt-5">
            <h1 className="font-bold text-[#302898] text-4xl">
              {selectedArt?.title}
            </h1>
            <span className="pt-3 font-bold text-[#302898] text-3xl">
              Nizam Tumirs
            </span>
            <span className="py-5 font-normal text-[#302898] text-xl">
              {selectedArt?.article}
            </span>
            <span className="pt-3 font-bold text-[#302898] text-3xl">
              {selectedArt?.price}
            </span>
            <div className="pt-20">
              <span
                className="bg-pink-300 text-pink-800 py-3 px-10 rounded-full w-1/2"
                onClick={buttonShowModal}
              >
                Buy
              </span>
            </div>
          </div>
        </div>

        {isModalOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
            <div className="bg-white p-8 rounded-lg shadow-lg max-w-lg w-full relative">
              <button
                className="absolute top-2 right-2 text-gray-500 hover:text-gray-800"
                onClick={closeModal}
              >
                ✕
              </button>
              <h2 className="text-2xl font-bold text-[#302898] mb-4">
                Confirm Purchase
              </h2>
              <p className="text-lg text-gray-700 mb-4">
                Are you sure you want to buy &quot;{selectedArt?.title}&quot; for{" "}
                {selectedArt?.price}?
              </p>
              <p className="text-sm text-gray-600 mb-6">
                <strong>Disclaimer:</strong> We currently do not support
                interbank payments. By clicking "Confirm", you will be
                automatically redirected to WhatsApp to finalize your purchase.
                Thank you for your understanding.
              </p>

              <div className="flex justify-end">
                <button
                  className="bg-gray-300 text-gray-800 py-2 px-4 rounded-full mr-2"
                  onClick={closeModal}
                >
                  Cancel
                </button>
                <button
                  className="bg-pink-500 text-white py-2 px-4 rounded-full"
                  onClick={confirmPurchase}
                >
                  Confirm
                </button>
              </div>
            </div>
          </div>
        )}
      </MaxWidthWrapper>
    </div>
  );
};

export default Page;
