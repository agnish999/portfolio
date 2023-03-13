"use client";
import { BtnStyles } from "@/utils/variants";
import Image from "next/image";
import React, { useEffect } from "react";
import "./home.css";
import VanillaTilt from "vanilla-tilt";

export default function Hero() {
  useEffect(() => {
    if (document) {
      const heroImg: HTMLElement | HTMLElement[] = document.querySelector(
        ".hero-img-container"
      ) as HTMLElement | HTMLElement[];

      VanillaTilt.init(heroImg, {
        max: 25,
        speed: 400,
      });
    }
  }, []);

  return (
    <section className="content-width">
      <h1 className="z-30 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 tracking-tighter">
        <div className="whitespace-nowrap">Bringing your</div>
        <div className="flex items-center justify-between">
          <div className="whitespace-nowrap -ml-28">ideas into</div>
          <button className={BtnStyles()}>Discover what I do</button>
        </div>
        <div className="-mr-20 text-right -mt-4">existence</div>
      </h1>

      <div
        id="anchor"
        className="hero-img-container absolute top-0 left-0 z-20 w-full h-full bg-transparent flex items-center justify-center"
        // className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-black rounded-[32px] overflow-hidden"
      >
        <div className="hero-img z-[5]"></div>
        {/* <Image
          id="hero"
          src="/hero-banner.jpg"
          width={700}
          height={800}
          className="object-cover opacity-75"
          alt="Picture of the author"
        /> */}
      </div>
    </section>
  );
}
