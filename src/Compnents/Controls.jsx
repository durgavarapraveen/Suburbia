import clsx from "clsx";
import React from "react";
import { Heading } from "./Heading";

function Controls({
  className,
  wheels,
  decks,
  metalColors,
  boltColors,
  selectedDeck,
  selectedWheel,
  selectedTruck,
  selectedBolt,
  setSelectedDeck,
  setSelectedWheel,
  setSelectedTruck,
  setSelectedBolt,
}) {
  return (
    <div className={clsx("flex flex-col gap-6", className)}>
      <Options title="Deck" selectedName={selectedDeck}>
        {decks.map((deck, index) => (
          <Option
            key={index}
            imageField={deck.image}
            selected={selectedDeck === deck.name}
            onClick={() => setSelectedDeck(deck.name)}
          >
            Deck {index + 1}
          </Option>
        ))}
      </Options>

      <Options title="Wheel" selectedName={selectedWheel}>
        {wheels.map((wheel, index) => (
          <Option
            key={index}
            imageField={wheel.image}
            selected={selectedWheel === wheel.name}
            onClick={() => setSelectedWheel(wheel.name)}
          >
            Wheel {index + 1}
          </Option>
        ))}
      </Options>

      <Options title="Trucks" selectedName={selectedTruck}>
        {metalColors.map((color, index) => (
          <Option
            key={index}
            imageField={""}
            color={color}
            selected={selectedTruck === color.name}
            onClick={() => setSelectedTruck(color.name)}
          >
            Truck {index + 1}
          </Option>
        ))}
      </Options>

      <Options title="Bolts" selectedName={selectedBolt}>
        {boltColors.map((color, index) => (
          <Option
            key={index}
            color={color}
            selected={selectedBolt === color.name}
            onClick={() => setSelectedBolt(color.name)}
          >
            Bolt {index + 1}
          </Option>
        ))}
      </Options>
    </div>
  );
}

export default Controls;

function Options({ title, selectedName, children }) {
  return (
    <div>
      <div className="flex ">
        <Heading size="xs" className="mb-2 bowl text-sm">
          {title}
        </Heading>
        <p className="ml-3 text-zinc-300">
          <span className="select-none text-zinc-500">| </span>
          {selectedName}
        </p>
      </div>
      <ul className="mb-1 flex flex-wrap gap-2">{children}</ul>
    </div>
  );
}

function Option({ children, selected, imageField, onClick, color }) {
  return (
    <li>
      <button
        className={clsx(
          "size-10 overflow-hidden cursor-pointer rounded-full bg-black p-0.5 flex items-center justify-center",
          selected ? "outline outline-2 outline-white" : "outline-none"
        )}
        onClick={onClick}
      >
        {imageField ? (
          <img
            src={imageField}
            alt=""
            className="pointer-events-none rounded-full w-full h-full"
          />
        ) : (
          <div
            className="h-full w-full rounded-full flex items-center justify-center"
            style={{ backgroundColor: color.hex }}
          />
        )}
        <span className="sr-only">{children}</span>
      </button>
    </li>
  );
}
