import React from "react";
import { FaStar } from "react-icons/fa6";
import { ButtonLink } from "./ButtonLinks";
import { HorizontalLine, VerticalLine } from "./Line";
import clsx from "clsx";
import { Scribble } from "./Scribble";

const VERTICAL_LINE_CLASS =
  "stroke-2 text-stone-300 top-0 absolute h-full transition-colors group-hover:text-stone-400";

const HORIZONTAL_LINE_CLASS =
  "stroke-2 text-stone-300 left-0 absolute w-full transition-colors group-hover:text-stone-400";

function SkateBoardProduct({
  image,
  price,
  name,
  scribbleColor,
  deck,
  wheel,
  truck,
  bolts,
}) {
  return (
    <div className="group relative mx-auto w-full max-w-72 px-8 pt-4 justify-center items-center">
      <VerticalLine className={clsx(VERTICAL_LINE_CLASS, "left-4")} />
      <VerticalLine className={clsx(VERTICAL_LINE_CLASS, "right-4")} />
      <HorizontalLine className={clsx(HORIZONTAL_LINE_CLASS, "top-2")} />
      <HorizontalLine className={clsx(HORIZONTAL_LINE_CLASS, "bottom-2")} />

      <Scribble
        className="absolute bottom-0 inset-0 h-full w-full"
        color={scribbleColor}
      />

      <div className="flex items-center justify-between ~text-sm/2xl">
        <span> ₹ {price}</span>
        <span className="inline-flex items-center gap-1">
          <FaStar className="text-yellow-400" /> 37
        </span>
      </div>
      <div className="-mb-1 overflow-hidden py-4 mx-auto w-full flex justify-center">
        <img
          src={image}
          alt="skateboard"
          width={150}
          className="mx-auto w-[58%] origin-top transform-gpu transition-transform duration-500 ease-in-out group-hover:scale-150"
        />
      </div>
      <h3 className="my-3 text-center bowl leading-tight ~text-lg/xl">
        {name}
      </h3>
      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200 ">
        <ButtonLink
          filed="customizer_link"
          className={"cursor-pointer"}
          link={`/build?deck=${deck}&wheel=${wheel}&truck=${truck}&bolt=${bolts}`}
        >
          Customize
        </ButtonLink>
      </div>
    </div>
  );
}

export default SkateBoardProduct;
