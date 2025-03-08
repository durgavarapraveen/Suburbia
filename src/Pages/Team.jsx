import React from "react";
import Bounded from "../Compnents/Bounded";
import { Heading } from "../Compnents/Heading";
import TeamCard from "../Compnents/TeamCard";
import Image1 from "../assets/Suburbia-Course-Assets/Add to Prismic/dylan-front.png";
import { SlideIn } from "../Compnents/slideIn";
import bg1 from "../assets/Suburbia-Course-Assets/Add to Prismic/dylan-back.png";
import bg2 from "../assets/Suburbia-Course-Assets/Add to Prismic/sophie-back.png";
import Image2 from "../assets/Suburbia-Course-Assets/Add to Prismic/sophie-front.png";
import Image3 from "../assets/Suburbia-Course-Assets/Add to Prismic/carter-front.png";
import bg3 from "../assets/Suburbia-Course-Assets/Add to Prismic/carter-back.png";
import Image4 from "../assets/Suburbia-Course-Assets/Add to Prismic/jordan-front.png";
import bg4 from "../assets/Suburbia-Course-Assets/Add to Prismic/jordan-back.png";

function Team() {
  return (
    <div className="bg-brand-navy bg-texture">
      <Bounded>
        <SlideIn>
          <Heading
            className={"bowl uppercase text-white text-center"}
            size="lg"
          >
            Team
          </Heading>
        </SlideIn>
        <SlideIn>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
            <TeamCard
              img={Image2}
              first_name={"Sophie"}
              last_name={"Castillo"}
              bg={bg2}
              scrible_color={"text-brand-blue"}
              deck={"Yellow and Black"}
              wheel={"Yellow"}
              truck={"black"}
              bolts={"yellow"}
            />
            <TeamCard
              img={Image1}
              first_name={"Dylan"}
              last_name={"Foster"}
              bg={bg1}
              scrible_color={"text-brand-lime"}
              deck={"Grid Streaks"}
              wheel={"Yellow"}
              truck={"black"}
              bolts={"yellow"}
            />
            <TeamCard
              img={Image3}
              first_name={"Carter"}
              last_name={"Bell"}
              bg={bg3}
              scrible_color={"text-brand-orange"}
              deck={"Pink Swirl"}
              wheel={"Pink"}
              truck={"blue"}
              bolts={"steel"}
            />
            <TeamCard
              img={Image4}
              first_name={"Jordan"}
              last_name={"Lee"}
              bg={bg4}
              scrible_color={"text-brand-pink"}
              deck={"Red and White"}
              wheel={"Red"}
              truck={"silver"}
              bolts={"silver"}
            />
          </div>
        </SlideIn>
      </Bounded>
    </div>
  );
}

export default Team;
