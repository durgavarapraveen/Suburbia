import React from "react";
import { ButtonLink } from "../Compnents/ButtonLinks";
import image1 from "../assets/Suburbia-Course-Assets/Add to Prismic/guy-1.png";
import image2 from "../assets/Suburbia-Course-Assets/Add to Prismic/guy-2.png";
import image3 from "../assets/Suburbia-Course-Assets/Add to Prismic/guy-3.png";
import image4 from "../assets/Suburbia-Course-Assets/Add to Prismic/guy-4.png";
import background from "../assets/Suburbia-Course-Assets/Add to Prismic/paint-background.png";

import StackCards from "../Compnents/StackCards";

function StackedPages() {
  return (
    <div className="">
      <StackCards
        desc={
          "Built for big tricks and hard landings, our boards are designed to handle every flip, grind, and bail. Perfect balance, every time."
        }
        title={"Crafted for the kick flip"}
        color={"#4876ff"}
        image={image1}
        btnColor={"lime"}
        tcolor={"white"}
        bgImg={background}
        imgonLeft={false}
        className="sticky top-0 z-0"
      />
      <StackCards
        desc={
          "Built for big tricks and hard landings, our boards are designed to handle every flip, grind, and bail. Perfect balance, every time."
        }
        title={"Crafted for the kick flip"}
        color={"#ff7347"}
        image={image2}
        btnColor={"lime"}
        tcolor={"white"}
        bgImg={background}
        imgonLeft={true}
        className="sticky top-10 z-10"
      />
      <StackCards
        desc={
          "Built for big tricks and hard landings, our boards are designed to handle every flip, grind, and bail. Perfect balance, every time."
        }
        title={"Crafted for the kick flip"}
        color={"#2e3192"}
        image={image4}
        btnColor={"lime"}
        tcolor={"white"}
        bgImg={background}
        imgonLeft={false}
        className="sticky top-20 z-20"
      />
      <StackCards
        desc={
          "Built for big tricks and hard landings, our boards are designed to handle every flip, grind, and bail. Perfect balance, every time."
        }
        title={"Crafted for the kick flip"}
        color={"#d9f154"}
        image={image3}
        btnColor={"orange"}
        tcolor={"black"}
        bgImg={background}
        imgonLeft={true}
        className="sticky z-50"
      />
    </div>
  );
}

export default StackedPages;
