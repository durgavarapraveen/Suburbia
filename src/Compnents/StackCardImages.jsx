import clsx from "clsx";
import React, { useEffect, useRef } from "react";

function StackCardImages({ bgImg, fImg, className }) {
  const backgroundRef = useRef(null);
  const foregroundRef = useRef(null);

  const targetPosition = useRef({ x: 0, y: 0 });
  const currentPosition = useRef({ x: 0, y: 0 });

  const onMouseMove = (e) => {
    const { innerWidth, innerHeight } = window;

    const xPercent = (e.clientX / innerWidth - 0.5) * 2;
    const yPercent = (e.clientY / innerHeight - 0.5) * 2;

    targetPosition.current = {
      x: xPercent * -20,
      y: yPercent * -20,
    };
  };

  useEffect(() => {
    const frameId = requestAnimationFrame(animationFrame);

    window.addEventListener("mousemove", onMouseMove);

    function animationFrame() {
      const { x: targetX, y: targetY } = targetPosition.current;
      const { x: currentX, y: currentY } = currentPosition.current;

      const newX = currentX + (targetX - currentX) * 0.1;
      const newY = currentY + (targetY - currentY) * 0.1;

      currentPosition.current = { x: newX, y: newY };

      if (backgroundRef.current) {
        backgroundRef.current.style.transform = `translate(${newX}px, ${newY}px)`;
      }

      if (foregroundRef.current) {
        foregroundRef.current.style.transform = `translate(${newX * 2.5}px, ${
          newY * 2.5
        }px)`;
      }

      requestAnimationFrame(animationFrame);
    }

    return () => {
      window.removeEventListener("mousemove", onMouseMove),
        cancelAnimationFrame(frameId);
    };
  }, []);

  return (
    <div
      className={clsx(
        "grid grid-cols-1 place-items-center h-full w-full relative",
        className
      )}
    >
      <div
        ref={backgroundRef}
        className="col-span-1 row-start-1 transition-transform absolute"
      >
        <img src={bgImg} alt="Bg" className="w-11/12 max-h-[500px]" />
      </div>
      <div
        ref={foregroundRef}
        className="col-span-1 row-start-1 transition-transform relative h-full w-full place-items-center"
      >
        <img src={fImg} alt="Image 1" className="h-full max-h-[500px]" />
      </div>
    </div>
  );
}

export default StackCardImages;
