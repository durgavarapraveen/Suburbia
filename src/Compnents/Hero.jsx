import React from "react";
import Bounded from "./Bounded";
import { Heading } from "./Heading";
import { ButtonLink } from "./ButtonLinks";
import { WideLogo } from "./WideLogo";
import { TallLogo } from "./TallLogo";
import { SlideIn } from "./slideIn";
import InteractiveSkateBoard from "../3d_animations/InteractiveSkateBoard";
import WheelPng from "../assets/Suburbia-Course-Assets/Add to Prismic/wheel-green.png";
import DeckColor from "../assets/Suburbia-Course-Assets/Add to Prismic/green-and-navy.png";

const DEFAULT_DECK_TEXTURE = DeckColor;
const DEFAULT_WHELLS_TEXTURE = "/skateboard/SkateWheel1.png";
const DEFAULT_TRUCK_COLOR = "#6f6e6a";
const DEFAULT_BOLT_COLOR = "#6f6e6a";
const WheelColor = WheelPng;

function Hero() {
  return (
    <Bounded className="bg-[#f7d0e9] relative h-dvh overflow-hidden text-zinc-800 bg-texture">
      <div className="absolute inset-0 flex items-center pt-20 ">
        <WideLogo className="w-full text-brand-purple hidden opacity-20 mix-blend-multiply lg:block" />
        <TallLogo className="w-full text-brand-purple opacity-20 mix-blend-multiply lg:hidden" />
      </div>

      <div className="absolute inset-0 mx-auto mt-24 grid max-w-6xl grid-rows-[1fr, auto] place-items-end px-6 ~py-10/16">
        <Heading
          className="font-sans bowl uppercase relative max-w-2xl place-self-start"
          size="lg"
        >
          <SlideIn>Escape the Cul-de-sac</SlideIn>
        </Heading>
        <div className="flex relative flex-col w-full  items-center justify-between ~gap-2/4 lg:flex-row">
          <SlideIn>
            <div className="max-w-[45ch] font-semibold ~text-lg/xl">
              <p className="">
                Not just a board, your board. Design a board that's as real as
                the places you take it.
              </p>
            </div>
          </SlideIn>
          <ButtonLink
            icon="skateboard"
            size="lg"
            className="z-20 mt-2 block"
            field=""
            link={
              "/build?deck=Green and Navy&wheel=Green&truck=steel&bolt=steel"
            }
          >
            Build your Board
          </ButtonLink>
        </div>
      </div>
      <InteractiveSkateBoard
        boltColor={DEFAULT_BOLT_COLOR}
        truckColor={DEFAULT_TRUCK_COLOR}
        deckTexture={DEFAULT_DECK_TEXTURE}
        wheelsTexture={DEFAULT_WHELLS_TEXTURE}
        wheelPng={WheelColor}
      />
    </Bounded>
  );
}

export default Hero;
