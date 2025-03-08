import React, { useState } from "react";
import WheelCream from "../assets/Suburbia-Course-Assets/Add to Prismic/wheel-cream.png";
import WheelGreen from "../assets/Suburbia-Course-Assets/Add to Prismic/wheel-green.png";
import WheelRed from "../assets/Suburbia-Course-Assets/Add to Prismic/wheel-red.png";
import WheelBlue from "../assets/Suburbia-Course-Assets/Add to Prismic/wheel-blue.png";
import WheelYellow from "../assets/Suburbia-Course-Assets/Add to Prismic/wheel-yellow.png";
import WheelPink from "../assets/Suburbia-Course-Assets/Add to Prismic/wheel-pink.png";
import WheelBlack from "../assets/Suburbia-Course-Assets/Add to Prismic/wheel-black.png";
import WheelNavy from "../assets/Suburbia-Course-Assets/Add to Prismic/wheel-navy.png";
import WheelPurple from "../assets/Suburbia-Course-Assets/Add to Prismic/wheel-purple.png";

import Deck1 from "../assets/Suburbia-Course-Assets/Add to Prismic/against-the-tide.png";
import Deck2 from "../assets/Suburbia-Course-Assets/Add to Prismic/black-and-yellow.png";
import Deck3 from "../assets/Suburbia-Course-Assets/Add to Prismic/gray-and-black.png";
import Deck4 from "../assets/Suburbia-Course-Assets/Add to Prismic/green-and-navy.png";
import Deck5 from "../assets/Suburbia-Course-Assets/Add to Prismic/grid-streaks.png";
import Deck6 from "../assets/Suburbia-Course-Assets/Add to Prismic/OniMask.png";
import Deck7 from "../assets/Suburbia-Course-Assets/Add to Prismic/PinkSwirl.png";
import Deck8 from "../assets/Suburbia-Course-Assets/Add to Prismic/red-and-black.png";
import Deck9 from "../assets/Suburbia-Course-Assets/Add to Prismic/red-and-white.png";
import Deck10 from "../assets/Suburbia-Course-Assets/Add to Prismic/thank-you-deck.png";
import Deck11 from "../assets/Suburbia-Course-Assets/Add to Prismic/yellow-and-black.png";
import { Logo } from "../Compnents/Logo";
import { Heading } from "../Compnents/Heading";
import { ButtonLink } from "../Compnents/ButtonLinks";
import { CustomizerControlsProvider } from "../lib/context";
import Preview from "../Compnents/Preview";
import Controls from "../Compnents/Controls";
import { useSearchParams } from "react-router-dom";
import Loading from "../Compnents/Loading";

const colors = [
  { name: "black", hex: "#333333" },
  { name: "steel", hex: "#6F6E6A" },
  { name: "asphalt", hex: "#34495E" },
  { name: "gold", hex: "#DEB887" },
  { name: "silver", hex: "#EEEEEE" },
  { name: "red", hex: "#E84118" },
  { name: "blue", hex: "#068BD3" },
  { name: "lime", hex: "#A6E22E" },
  { name: "yellow", hex: "#F1C40F" },
  { name: "purple", hex: "#8E44AD" },
  { name: "raspberry", hex: "#BA3763" },
  { name: "pink", hex: "#F1396E" },
];

function Build() {
  const [searchParams] = useSearchParams();

  const bolt = searchParams.get("bolt");
  console.log(bolt);
  const wheels = [
    { name: "Cream", image: WheelCream },
    { name: "Green", image: WheelGreen },
    { name: "Red", image: WheelRed },
    { name: "Blue", image: WheelBlue },
    { name: "Yellow", image: WheelYellow },
    { name: "Pink", image: WheelPink },
    { name: "Black", image: WheelBlack },
    { name: "Navy", image: WheelNavy },
    { name: "Purple", image: WheelPurple },
  ];
  const decks = [
    { name: "Against the Tide", image: Deck1 },
    { name: "Black and Yellow", image: Deck2 },
    { name: "Gray and Black", image: Deck3 },
    { name: "Green and Navy", image: Deck4 },
    { name: "Grid Streaks", image: Deck5 },
    { name: "Oni Mask", image: Deck6 },
    { name: "Pink Swirl", image: Deck7 },
    { name: "Red and Black", image: Deck8 },
    { name: "Red and White", image: Deck9 },
    { name: "Thank You Deck", image: Deck10 },
    { name: "Yellow and Black", image: Deck11 },
  ];

  const [selectedDeck, setSelectedDeck] = useState(searchParams.get("deck"));
  const [selectedWheel, setSelectedWheel] = useState(searchParams.get("wheel"));
  const [selectedTruck, setSelectedTruck] = useState(searchParams.get("truck"));
  const [selectedBolt, setSelectedBolt] = useState(searchParams.get("bolt"));

  const metalColors = colors;
  const boltColors = colors;

  return (
    <div className="flex min-h-screen flex-col lg:flex-row">
      <div className="relative aspect-square shrink-0 bg-[#3a414a] lg:aspect-auto lg:grow">
        <div className="absolute inset-0">
          <Preview
            wheels={wheels}
            decks={decks}
            metalColors={metalColors}
            boltColors={boltColors}
            selectedDeck={selectedDeck}
            selectedWheel={selectedWheel}
            selectedTruck={selectedTruck}
            selectedBolt={selectedBolt}
          />
        </div>
        <a href="/" className="left-6 top-6 absolute z-10">
          <Logo className="h-12 text-white" />
        </a>
      </div>
      <div className="grow bg-texture bg-zinc-900 text-white ~p-4/6 lg:w-96 lg:shrink-0 lg:grow-0">
        <Heading size="sm" className={"mb-6 mt-0 bowl"}>
          Build your Board
        </Heading>
        <Controls
          wheels={wheels}
          decks={decks}
          metalColors={metalColors}
          boltColors={boltColors}
          selectedDeck={selectedDeck}
          selectedWheel={selectedWheel}
          selectedTruck={selectedTruck}
          selectedBolt={selectedBolt}
          setSelectedDeck={setSelectedDeck}
          setSelectedWheel={setSelectedWheel}
          setSelectedTruck={setSelectedTruck}
          setSelectedBolt={setSelectedBolt}
        />
        <ButtonLink color="lime" href="" icon={"plus"}>
          Add to Cart
        </ButtonLink>
      </div>
      <Loading />
    </div>
  );
}

export default Build;
