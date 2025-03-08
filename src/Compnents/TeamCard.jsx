import React from "react";
import { ButtonLink } from "./ButtonLinks";
import { SkaterScribble } from "./SkaterScribble";
import clsx from "clsx";

function TeamCard({
  img,
  first_name,
  last_name,
  bg,
  scrible_color,
  deck,
  wheel,
  truck,
  bolts,
}) {
  return (
    <div className="skater group relative flex flex-col items-center gap-4">
      <div className="stack-layout overflow-hidden">
        <img
          src={bg}
          alt=""
          className="scale-110 transform transition-all duration-1000 ease-in-out group-hover:scale-100 group-hover:brightness-75 group-hover:saturate-[.8]"
        />
        <SkaterScribble
          className={clsx(
            "absolute -top-10 left-0 w-full h-full ",
            scrible_color
          )}
        />
        <img
          src={img}
          alt=""
          className="transform transition-transform duration-1000 ease-in-out group-hover:scale-110"
        />

        <div className="relative h-48 w-full place-self-end bg-gradient-to-t from-black via-transparent to-transparent"></div>
        <h3 className="relative grid place-self-end justify-self-start p-2 font-sans text-brand-gray ~text-2xl/3xl">
          <span className="mb-[-.3em] block uppercase bowl">{first_name}</span>
          <span className="block uppercase bowl">{last_name}</span>
        </h3>
      </div>
      <ButtonLink
        color="orange"
        link={`/build?deck=${deck}&wheel=${wheel}&truck=${truck}&bolt=${bolts}`}
      >
        Build their board
      </ButtonLink>
    </div>
  );
}

export default TeamCard;
