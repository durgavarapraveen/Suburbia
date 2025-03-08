import React, { useEffect, useMemo, useRef } from "react";
import { useGLTF, useTexture } from "@react-three/drei";
import * as THREE from "three";
import { useFrame } from "@react-three/fiber";
import gsap from "gsap";
import WheelCream from "../assets/Suburbia-Course-Assets/Add to Prismic/wheel-cream.png";
import WheelGreen from "../assets/Suburbia-Course-Assets/Add to Prismic/wheel-green.png";
import WheelRed from "../assets/Suburbia-Course-Assets/Add to Prismic/wheel-red.png";
import WheelBlue from "../assets/Suburbia-Course-Assets/Add to Prismic/wheel-blue.png";
import WheelYellow from "../assets/Suburbia-Course-Assets/Add to Prismic/wheel-yellow.png";
import WheelPink from "../assets/Suburbia-Course-Assets/Add to Prismic/wheel-pink.png";
import WheelBlack from "../assets/Suburbia-Course-Assets/Add to Prismic/wheel-black.png";
import WheelNavy from "../assets/Suburbia-Course-Assets/Add to Prismic/wheel-navy.png";
import WheelPurple from "../assets/Suburbia-Course-Assets/Add to Prismic/wheel-purple.png";

import Deck1 from "../assets/Suburbia-Course-Assets/Add to Prismic/against-the-tide.png";
import Deck2 from "../assets/Suburbia-Course-Assets/Add to Prismic/black-and-yellow.png";
import Deck3 from "../assets/Suburbia-Course-Assets/Add to Prismic/gray-and-black.png";
import Deck4 from "../assets/Suburbia-Course-Assets/Add to Prismic/green-and-navy.png";
import Deck5 from "../assets/Suburbia-Course-Assets/Add to Prismic/grid-streaks.png";
import Deck6 from "../assets/Suburbia-Course-Assets/Add to Prismic/OniMask.png";
import Deck7 from "../assets/Suburbia-Course-Assets/Add to Prismic/PinkSwirl.png";
import Deck8 from "../assets/Suburbia-Course-Assets/Add to Prismic/red-and-black.png";
import Deck9 from "../assets/Suburbia-Course-Assets/Add to Prismic/red-and-white.png";
import Deck10 from "../assets/Suburbia-Course-Assets/Add to Prismic/thank-you-deck.png";
import Deck11 from "../assets/Suburbia-Course-Assets/Add to Prismic/yellow-and-black.png";

const wheels = [
  { name: "Cream", image: WheelCream },
  { name: "Green", image: WheelGreen },
  { name: "Red", image: WheelRed },
  { name: "Blue", image: WheelBlue },
  { name: "Yellow", image: WheelYellow },
  { name: "Pink", image: WheelPink },
  { name: "Black", image: WheelBlack },
  { name: "Navy", image: WheelNavy },
  { name: "Purple", image: WheelPurple },
];
const decks = [
  { name: "Against the Tide", image: Deck1 },
  { name: "Black and Yellow", image: Deck2 },
  { name: "Gray and Black", image: Deck3 },
  { name: "Green and Navy", image: Deck4 },
  { name: "Grid Streaks", image: Deck5 },
  { name: "Oni Mask", image: Deck6 },
  { name: "Pink Swirl", image: Deck7 },
  { name: "Red and Black", image: Deck8 },
  { name: "Red and White", image: Deck9 },
  { name: "Thank You Deck", image: Deck10 },
  { name: "Yellow and Black", image: Deck11 },
];

const colors = [
  { name: "black", hex: "#333333" },
  { name: "steel", hex: "#6F6E6A" },
  { name: "asphalt", hex: "#34495E" },
  { name: "gold", hex: "#DEB887" },
  { name: "silver", hex: "#EEEEEE" },
  { name: "red", hex: "#E84118" },
  { name: "blue", hex: "#068BD3" },
  { name: "lime", hex: "#A6E22E" },
  { name: "yellow", hex: "#F1C40F" },
  { name: "purple", hex: "#8E44AD" },
  { name: "raspberry", hex: "#BA3763" },
  { name: "pink", hex: "#F1396E" },
];

export function SkateBoard(props) {
  const wheelRefs = useRef([]);

  const { nodes } = useGLTF("/skateboard.gltf");

  const boltColor =
    colors.find((color) => color.name === props.boltColor)?.hex || "#6f6e6a";
  const truckColor =
    colors.find((color) => color.name === props.truckColor)?.hex || "#6f6e6a";
  const deckTexture = useTexture(
    decks.find((deck) => deck.name === props.deckTexture)?.image || Deck3
  );
  const wheelTexture = useTexture(
    wheels.find((wheel) => wheel.name === props.wheelPng)?.image || WheelGreen
  );
  deckTexture.flipY = false;

  const gripTapeDiffuse = useTexture("/skateboard/griptape-diffuse.webp");
  const gripTapeRoughness = useTexture("/skateboard/griptape-roughness.webp");

  const gripTapeMaterial = useMemo(() => {
    const material = new THREE.MeshStandardMaterial({
      map: gripTapeDiffuse,
      bumpMap: gripTapeRoughness,
      roughnessMap: gripTapeRoughness,
      bumpScale: 3.5,
      roughness: 0.8,
      color: "#555555",
    });

    if (gripTapeDiffuse) {
      gripTapeDiffuse.wrapS = THREE.RepeatWrapping;
      gripTapeDiffuse.wrapT = THREE.RepeatWrapping;
      gripTapeDiffuse.repeat.set(9, 9);
      gripTapeDiffuse.needsUpdate = true;
    }

    if (gripTapeRoughness) {
      gripTapeRoughness.wrapS = THREE.RepeatWrapping;
      gripTapeRoughness.wrapT = THREE.RepeatWrapping;
      gripTapeRoughness.repeat.set(9, 9);
      gripTapeRoughness.needsUpdate = true;
      gripTapeRoughness.anisotropy = 8;
    }

    return material;
  }, [gripTapeDiffuse, gripTapeRoughness]);

  const boltMateial = useMemo(
    () =>
      new THREE.MeshStandardMaterial({
        color: boltColor,
        metalness: 0.5,
        roughness: 0.3,
      }),
    [boltColor]
  );

  const metalNormal = useTexture("/skateboard/metal-normal.avif");
  metalNormal.wrapS = THREE.RepeatWrapping;
  metalNormal.wrapT = THREE.RepeatWrapping;
  metalNormal.anisotropy = 8;
  metalNormal.repeat.set(8, 8);

  const truckMaterial = useMemo(
    () =>
      new THREE.MeshStandardMaterial({
        color: truckColor,
        normalMap: metalNormal,
        normalScale: new THREE.Vector2(0.3, 0.3),
        metalness: 0.8,
        roughness: 0.25,
      }),
    [truckColor, metalNormal]
  );

  const deckMaterial = useMemo(
    () =>
      new THREE.MeshStandardMaterial({
        roughness: 0.1,
        map: deckTexture,
      }),
    [deckTexture]
  );

  wheelTexture.flipY = false;

  const whellMaterial = useMemo(
    () =>
      new THREE.MeshStandardMaterial({
        roughness: 0.35,
        map: wheelTexture,
      }),
    [wheelTexture]
  );

  const addtoWheelRefs = (ref) => {
    if (ref && !wheelRefs.current.includes(ref)) {
      wheelRefs.current.push(ref);
    }
  };

  useFrame(() => {
    if (!wheelRefs.current || !props.constantWheelSpin) return;

    for (const wheel of wheelRefs.current) {
      wheel.rotation.x += 0.08;
    }
  });

  useEffect(() => {
    if (!wheelRefs.current || props.constantWheelSpin) return;

    for (const wheel of wheelRefs.current) {
      gsap.to(wheel.rotation, {
        x: "-=30",
        duration: 2.5,
        ease: "circ.out",
      });
    }
  }, [props.constantWheelSpin, wheelTexture]);

  const positions = useMemo(
    () => ({
      upright: {
        rotation: [0, 0, 0],
        position: [0, 0, 0],
      },
      side: {
        rotation: [0, 0, Math.PI / 2],
        position: [0, 0.295, 0],
      },
    }),
    []
  );

  return (
    <group
      {...props}
      dispose={null}
      rotation={positions[props.pose].rotation}
      position={positions[props.pose].position}
    >
      <group name="Scene">
        <mesh
          name="GripTape"
          castShadow
          receiveShadow
          geometry={nodes.GripTape.geometry}
          material={gripTapeMaterial}
          position={[0, 0.286, -0.002]}
        />
        <mesh
          name="Wheel1"
          castShadow
          receiveShadow
          geometry={nodes.Wheel1.geometry}
          material={whellMaterial}
          position={[0.238, 0.086, 0.635]}
          ref={addtoWheelRefs}
        />
        <mesh
          name="Wheel2"
          castShadow
          receiveShadow
          geometry={nodes.Wheel2.geometry}
          material={whellMaterial}
          position={[-0.237, 0.086, 0.635]}
          ref={addtoWheelRefs}
        />
        <mesh
          name="Deck"
          castShadow
          receiveShadow
          geometry={nodes.Deck.geometry}
          material={deckMaterial}
          position={[0, 0.271, -0.002]}
        />
        <mesh
          name="Wheel4"
          castShadow
          receiveShadow
          geometry={nodes.Wheel4.geometry}
          material={whellMaterial}
          position={[-0.238, 0.086, -0.635]}
          rotation={[Math.PI, 0, Math.PI]}
          ref={addtoWheelRefs}
        />
        <mesh
          name="Bolts"
          castShadow
          receiveShadow
          geometry={nodes.Bolts.geometry}
          material={boltMateial}
          position={[0, 0.198, 0]}
          rotation={[Math.PI, 0, Math.PI]}
        />
        <mesh
          name="Wheel3"
          castShadow
          receiveShadow
          geometry={nodes.Wheel3.geometry}
          material={whellMaterial}
          position={[0.237, 0.086, -0.635]}
          rotation={[Math.PI, 0, Math.PI]}
          ref={addtoWheelRefs}
        />
        <mesh
          name="Baseplates"
          castShadow
          receiveShadow
          geometry={nodes.Baseplates.geometry}
          material={truckMaterial}
          position={[0, 0.211, 0]}
        />
        <mesh
          name="Truck1"
          castShadow
          receiveShadow
          geometry={nodes.Truck1.geometry}
          material={truckMaterial}
          position={[0, 0.101, -0.617]}
        />
        <mesh
          name="Truck2"
          castShadow
          receiveShadow
          geometry={nodes.Truck2.geometry}
          material={truckMaterial}
          position={[0, 0.101, 0.617]}
          rotation={[Math.PI, 0, Math.PI]}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/skateboard.gltf");
