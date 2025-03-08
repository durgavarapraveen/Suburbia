import React from "react";
import Bounded from "../Compnents/Bounded";
import LazyYoutubePlayer from "../Compnents/LazyYoutubePlayer";
import VideoMask from "../../public/video-mask.png";
import clsx from "clsx";

const MASK_CLASSES =
  "[mask-image:url(/video-mask.png)] [mask-mode:alpha] [mask-position:center_center] [mask-repeat:no-repeat] [mask-size:100%_auto]";

function VideoCard() {
  return (
    <div className="bg-zinc-900 bg-texture ">
      <Bounded className="">
        <h2 className="sr-only">Video Real</h2>
        <div className="relative aspect-video">
          {/* Mask */}
          <div
            className={clsx(
              MASK_CLASSES,
              "bg-brand-lime absolute inset-0 ~translate-x-2/3 ~translate-y-2/3"
            )}
          />
          <div
            className={clsx(
              MASK_CLASSES,
              "bg-white absolute inset-0 ~translate-x-1/3 ~translate-y-1/2"
            )}
          />
          <div
            className={clsx(
              MASK_CLASSES,
              "bg-white absolute inset-0 ~translate-x-1/2 ~-translate-y-1/3"
            )}
          />
          {/* video */}
          <div className={clsx(MASK_CLASSES, "relative h-full")}>
            <LazyYoutubePlayer />
            <img
              src="/image-texture.png"
              alt=""
              className="pointer-events-none object-cover opacity-50 absolute inset-0"
            />
          </div>
        </div>
      </Bounded>
    </div>
  );
}

export default VideoCard;
