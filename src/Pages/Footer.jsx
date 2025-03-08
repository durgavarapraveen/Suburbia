import React from "react";
import Image from "../assets/Suburbia-Course-Assets/Add to Prismic/pexels-artempodrez-4816744.jpg";
import { Logo } from "../Compnents/Logo";
import Bounded from "../Compnents/Bounded";
import { FooterPhysics } from "../Compnents/FooterPhysics";
import img1 from "../assets/Suburbia-Course-Assets/Add to Prismic/thank-you-complete.png";
import img2 from "../assets/Suburbia-Course-Assets/Add to Prismic/green-navy-complete.png";
import img3 from "../assets/Suburbia-Course-Assets/Add to Prismic/gray-black-complete.png";
import img4 from "../assets/Suburbia-Course-Assets/Add to Prismic/grid-streaks-complete.png";
import img5 from "../assets/Suburbia-Course-Assets/Add to Prismic/onimask-complete.png";
import img6 from "../assets/Suburbia-Course-Assets/Add to Prismic/pink-drop-complete.png";
import img7 from "../assets/Suburbia-Course-Assets/Add to Prismic/red-black-complete.png";
import img8 from "../assets/Suburbia-Course-Assets/Add to Prismic/red-white-complete.png";

// fix size of images
const boardTextureURLs = [img1, img2, img3, img4, img5, img6, img7, img8];

function Footer() {
  return (
    <footer className="bg-texture bg-zinc-900 text-white overflow-hidden">
      <div className="relative h-[75vh]  md:aspect-auto">
        <img
          src={Image}
          className="object-cover w-full h-full"
          alt="footer"
          width={1200}
        />
        <FooterPhysics
          boardTextureURLs={boardTextureURLs}
          className="absolute inset-0 overflow-hidden"
        />
        <Logo className="pointer-events-none absolute h-20 mix-blend-exclusion md:h-28 top-10 left-10" />
      </div>
      <Bounded className="relative h-[25vh] bg-opacity-90 flex justify-center items-center mx-auto">
        <div className="text-center flex flex-row justify-center gap-5">
          <a
            href=""
            className="hover:border-b-2  hover:border-white ~text-lg/xl mono"
          >
            Team
          </a>
          <a href="" className="hover:border-b-2 border-white ~text-lg/xl mono">
            Customizer
          </a>
          <a href="" className="hover:border-b-2 border-white ~text-lg/xl mono">
            About
          </a>
        </div>
      </Bounded>
    </footer>
  );
}

export default Footer;
