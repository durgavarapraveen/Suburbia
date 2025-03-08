import clsx from "clsx";

export function Heading({ className, children, size = "lg" }) {
  return (
    <div
      className={clsx(
        "font-sans uppercase",
        size === "xl" && "~text-4xl/8xl",
        size === "lg" && "~text-4xl/7xl",
        size === "md" && "~text-3xl/5xl",
        size === "sm" && "~text-2xl/4xl",
        size === "xs" && "~text-lg/xl",
        className
      )}
    >
      {children}
    </div>
  );
}
