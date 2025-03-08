import React from "react";
import { SVGProps } from "react";
import { ButtonLink } from "./ButtonLinks";
import { Logo } from "./Logo";

function Herder() {
  return (
    <header className="absolute header left-0 right-0 top-0 z-50 ~h-32/48 ~px-4/6 ~py-4/5 hd:h-32">
      <div className="grid w-full max-w-6xl mx-auto grid-cols-2 md:grid-cols-3 items-center gap-6">
        <a href="/" className="justify-self-start w-fit">
          <Logo className="text-brand-purple ~h-12/20" />
        </a>
        <nav
          aria-label="Main"
          className="col-span-full row-start-2 md:col-span-1 md:col-start-2 md:row-start-1"
        >
          <ul className="flex flex-wrap justify-center gap-8 ~text-lg/xl">
            <li>Team</li>
            <li>Customizer</li>
            <li>About</li>
          </ul>
        </nav>
        <div className="justify-self-end">
          <ButtonLink href="" icon="cart" color="purple" aria-label="Cart (1)">
            <span className="md:hidden">1</span>
            <span className="hidden md:inline">Cart (1)</span>
          </ButtonLink>
        </div>
      </div>
    </header>
  );
}

export default Herder;
