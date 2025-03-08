import React from "react";
import { ButtonLink } from "../Compnents/ButtonLinks";

import Bounded from "../Compnents/Bounded";
import clsx from "clsx";
import { Heading } from "./Heading";
import StackCardImages from "./StackCardImages";

function StackCards({
  image,
  desc,
  title,
  color,
  btnColor,
  tcolor,
  bgImg,
  imgonLeft,
  className,
}) {
  return (
    <div
      className={clsx(`bg-brand-lime} text-${tcolor}`, className)}
      style={{ backgroundColor: color }}
    >
      <Bounded className={clsx("bg-texture")}>
        <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2 md:gap-24">
          <div
            className={clsx(
              "flex flex-col items-center gap-8 text-center md:items-start md:text-left",
              `${imgonLeft ? "md:order-2" : ""}`
            )}
          >
            <Heading className={"bowl"} size="lg">
              {title}
            </Heading>
            <div className="max-w-md text-lg leading-relaxed">
              <p>{desc}</p>
            </div>
            <ButtonLink href="" color={btnColor} aria-label="Shop Boards">
              Shop Boards
            </ButtonLink>
          </div>
          <StackCardImages bgImg={bgImg} fImg={image} />
        </div>
      </Bounded>
    </div>
  );
}

export default StackCards;
