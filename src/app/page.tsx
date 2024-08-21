"use client";

import * as React from "react";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { art } from "@/lib/data";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const sectionRef = React.useRef(null);
  const triggerRef = React.useRef(null);

  React.useEffect(() => {
    const pin = gsap.fromTo(
      sectionRef.current,
      {
        translateX: 0,
      },
      {
        translateX: "-200vw",
        ease: "none",
        duration: 1,
        scrollTrigger: {
          trigger: triggerRef.current,
          start: "top top",
          end: "2000 top",
          scrub: 0.6,
          pin: true,
        },
      }
    );

    return () => {
      pin.kill();
    };
  }, []);

  return (
    <main
      data-scroll-container
      className="flex flex-col mb-[50px] gap-[150px] overflow-hidden"
    >
      <section>
        <div className="w-full h-screen relative">
          <Image
            src="/images/snapinsta.jpg"
            alt="image"
            width={1000}
            height={1000}
            className="absolute inset-0 h-full w-full object-cover brightness-[.6]"
          />
          <MaxWidthWrapper className="absolute inset-0 flex items-center mt-32 md:mt-20">
            <div className="flex flex-col">
              <h1 className="text-[46px] md:text-[56px] lg:text-[96px] font-bold leading-normal text-white">
                Briliant Art{" "}
                <span className="text-[28px] lg:text-[64px] items-center text-center leading-normal">
                  and
                </span>
              </h1>

              <h1 className="text-[46px] md:text-[56px] lg:text-[96px] font-bold leading-normal text-white">
                Masterpice Gallery
              </h1>
              <div className="mt-10 md:mt-16">
                <p className="w-[90%] md:w-[60%] text-white text-base lg:text-lg">
                  Step into the Masterpiece Gallery, where every piece is a work
                  of art. Our collection features exquisite creations that
                  showcase the skill and vision of our artists. Immerse yourself
                  in the beauty and elegance of timeless art.
                </p>
                <span className="block text-start md:text-end text-white underline mt-10 md:mt-0">
                  Artist Nizam Tumirs
                </span>
              </div>
            </div>
          </MaxWidthWrapper>
        </div>
      </section>

      <section>
        <div className="flex flex-col">
          <MaxWidthWrapper>
            <h2 className="text-4xl md:text-5xl lg:text-7xl font-semibold w-full lg:w-[80%] text-[#50C878] pb-20">
              Discover the Artistry Behind Every Masterpiece
            </h2>
          </MaxWidthWrapper>

          <div className="flex gap-[20px]">
            <div className="w-[30%] relative h-[800px]">
              <Image
                src="/images/take care 2.jpg"
                alt="image"
                width={500}
                height={500}
                className="absolute w-full h-full inset-0 object-cover"
              />
            </div>
            <div className="w-[70%] relative h-[800px]">
              <Image
                src="/images/kulo lan 3.jpg"
                alt="image"
                width={500}
                height={500}
                className="absolute w-full h-full inset-0 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="overflow-hidden">
        <div ref={triggerRef}>
          <div
            ref={sectionRef}
            className="h-screen w-[300vw] flex flex-row relative gap-[100px]"
          >
            <div className="w-[80vw] h-full flex flex-col mt-20">
              <div className="items-start gap-5 whitespace-normal px-2.5 md:px-10 hidden md:block">
                <h1 className="w-full text-[#302898] text-2xl font-semibold">
                  Explore. Feel. Connect.
                </h1>
                <p>
                  Art is more than just visuals—it&apos;s an experience, a
                  journey into the heart of creativity. Dive into our curated
                  collections and let the art choose you. Feel the energy, the
                  emotion, the passion in every piece. This is your moment to
                  connect with something extraordinary.
                </p>
              </div>
              <div className="relative w-full h-[400px]">
                <Image
                  src="/images/take car 3.jpg"
                  alt="image"
                  width={500}
                  height={500}
                  className="absolute w-full h-full inset-0 object-cover"
                />
              </div>
            </div>
            <div className="flex items-center flex-nowrap gap-5 h-full w-[120vw] flex-shrink-0">
              <div className="relative w-1/2 h-[500px] ">
                <Image
                  src="/images/take care 1.jpg"
                  alt="images"
                  width={500}
                  height={500}
                  className="absolute w-full h-full inset-0 object-cover"
                />
              </div>
              <div className="relative w-[40%] h-full bg-[#CBE2B5]"></div>
            </div>
            <div className="h-full w-[30vw] flex justify-center items-center flex-shrink-0">
              <p>
                Transform your space with pieces that inspire and captivate.
                Explore our gallery and find the art that tells your story.
              </p>
            </div>

            <div className="flex flex-row w-[60vw] gap-[50px] flex-shrink-0 mt-20">
              <div className="relative w-1/2 h-[40%] bg-[#E0E5B6]"></div>
              <div className="relative w-1/2 h-full bg-[#E0E5B6]"></div>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full flex items-center">
        <MaxWidthWrapper>
          <div>
            <h1 className="font-bold text-6xl lg:text-8xl text-[#302898]">
              Artist
            </h1>

            <div className="flex lg:flex-row flex-col pt-10">
              <div className="flex justify-center w-full lg:w-1/2 mt-20 mb-10 lg:mb-0">
                <h1 className="font-bold text-4xl">Nizam Art</h1>
              </div>
              <div className="flex justify-end h-full w-full lg:w-[40%]">
                <Image
                  src="/images/tumirs.jpeg"
                  alt="tumirs"
                  width={500}
                  height={500}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </MaxWidthWrapper>
      </section>

      <section className="w-full flex flex-col items-center">
        <MaxWidthWrapper>
          <div className="flex items-center justify-between">
            <h1 className="font-bold text-4xl lg:text-8xl text-[#302898]">
              What&apos;s On
            </h1>
            <Link
              href="/gallery"
              className="flex items-center space-x-3 py-2 px-4 lg:py-3 lg:px-10 rounded-full bg-pink-300 hover:bg-pink-400 transition-all duration-300"
            >
              <span className="font-sans text-sm lg:text-base">View All</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>

          <div>
            <p className="w-full lg:w-1/2 text-md lg:text-2xl my-8">
              Step into a world where imagination meets inspiration. Our gallery
              is a canvas of dreams, where every brushstroke tells a story, and
              every color whispers a secret. Whether you&apos;re a seasoned
              collector or a curious soul, discover art that resonates,
              inspires, and transforms your space into a sanctuary of beauty.
            </p>

            <div className="grid grid-cols-2 lg:grid-cols-3 gap-3">
              {art.slice(0, 3).map((gallery) => (
                <Link
                  href={`/gallery/${gallery.slug}`}
                  key={gallery.id}
                  className="flex flex-col text-[#302898] hover:text-pink-600 transition-all duration-300"
                >
                  <Image
                    src={gallery.image}
                    alt="image"
                    width={500}
                    height={500}
                    className="w-full h-1/3 rounded-md object-cover"
                  />
                  <span className="py-5 text-2xl lg:text-4xl font-bold">
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
    </main>
  );
}
