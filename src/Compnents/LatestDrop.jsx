import React from "react";
import Bounded from "./Bounded";
import { Heading } from "./Heading";
import SkateBoardProduct from "./SkateBoardProduct";
import skateBoard1 from "../assets/Suburbia-Course-Assets/Add to Prismic/onimask-complete.png";
import skateBoard2 from "../assets/Suburbia-Course-Assets/Add to Prismic/pink-drop-complete.png";
import skateBoard3 from "../assets/Suburbia-Course-Assets/Add to Prismic/thank-you-complete.png";
import skateBoard4 from "../assets/Suburbia-Course-Assets/Add to Prismic/yellow-black-complete.png";
import { SlideIn } from "./slideIn";

function LatestDrop() {
  return (
    <div>
      <Bounded className="bg-texture bg-brand-gray">
        <SlideIn>
          <Heading className="text-center ~mb-4/6 bowl" as="h2">
            Latest Drop
          </Heading>
        </SlideIn>
        <SlideIn>
          <div className="text-center ~mb-6/10">
            Grab out freshest designs before thry sell out
          </div>
        </SlideIn>
        <div className="grid w-full grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
          <SkateBoardProduct
            image={skateBoard1}
            price={"1999"}
            name={"Oni Mask"}
            scribbleColor={"brown"}
            deck={"Oni Mask"}
            wheel={"Cream"}
            truck={"Black"}
            bolts={"Black"}
          />
          <SkateBoardProduct
            image={skateBoard2}
            price={"999"}
            name={"Pink Drop"}
            scribbleColor={"pink"}
            deck={"Pink Swirl"}
            wheel={"Pink"}
            truck={"steel"}
            bolts={"steel"}
          />
          <SkateBoardProduct
            image={skateBoard3}
            price={"999"}
            name={"Thank You"}
            scribbleColor={"#f00"}
            deck={"Thank You Deck"}
            wheel={"Red"}
            truck={"silver"}
            bolts={"silver"}
          />
          <SkateBoardProduct
            image={skateBoard4}
            price={"999"}
            name={"Yellow & Black"}
            scribbleColor={"yellow"}
            deck={"Yellow and Black"}
            wheel={"Yellow"}
            truck={"black"}
            bolts={"yellow"}
          />
        </div>
      </Bounded>
    </div>
  );
}

export default LatestDrop;
