import clsx from "clsx";
import React from "react";

function Bounded({ children, className = "", ...restProps }) {
  return (
    <div className={clsx("px-4 py-8 ", className)} {...restProps}>
      <div className="mx-auto w-full max-w-6xl">{children}</div>
    </div>
  );
}

export default Bounded;
