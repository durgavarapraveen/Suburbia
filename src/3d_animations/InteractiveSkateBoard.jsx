import { ContactShadows, Environment, Html } from "@react-three/drei";
import { Canvas, useThree } from "@react-three/fiber";
import * as THREE from "three";
import React, { Suspense, useEffect, useRef } from "react";
import { SkateBoard } from "./SkateBoard";
import gsap from "gsap";
import Hotspot from "./Hotspot";
import { WavyPaths } from "../Compnents/WavyPath";

const CAMERA_POSITION = [1.5, 1, 1.4];

function InteractiveSkateBoard({
  boltColor,
  truckColor,
  deckTexture,
  wheelsTexture,
  wheelPng,
}) {
  return (
    <div className="absolute inset-0 z-10 flex items-center justify-center">
      <Canvas
        className="min-h-[rem] w-full "
        camera={{ position: CAMERA_POSITION, fov: 55 }}
      >
        <Suspense>
          <Scene
            boltColor={boltColor}
            truckColor={truckColor}
            deckTexture={deckTexture}
            wheelsTexture={wheelsTexture}
            wheelPng={wheelPng}
          />
        </Suspense>
      </Canvas>
    </div>
  );
}

export default InteractiveSkateBoard;

function Scene({
  boltColor,
  truckColor,
  deckTexture,
  wheelsTexture,
  wheelPng,
}) {
  const containerRef = useRef();
  const originRef = useRef();

  const [showHotspots, setShowHotspots] = React.useState({
    front: true,
    middle: true,
    back: true,
  });
  const [animating, setAnimating] = React.useState(false);

  const { camera } = useThree();

  useEffect(() => {
    if (!containerRef.current || !originRef.current) return;

    gsap.to(containerRef.current.position, {
      x: 0.2,
      duration: 3,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    });

    gsap.to(originRef.current.rotation, {
      y: Math.PI / 64,
      duration: 3,
      repeat: -1,
      ease: "sine.inOut",
      yoyo: true,
    });
  }, []);

  useEffect(() => {
    camera.lookAt(new THREE.Vector3(-0.2, 0.15, 0));

    setZoom();

    window.addEventListener("resize", setZoom);

    function setZoom() {
      const scale = Math.max(Math.min(1000 / window.innerWidth, 2.2), 1);

      camera.position.x = CAMERA_POSITION[0] * scale;
      camera.position.y = CAMERA_POSITION[1] * scale;
      camera.position.z = CAMERA_POSITION[2] * scale;
    }

    return () => window.removeEventListener("resize", setZoom);
  }, [camera]);

  function onClick(event) {
    event.stopPropagation();

    const board = containerRef.current;
    const origin = originRef.current;

    if (!board || !origin || animating) return;

    const { name } = event.object;

    setShowHotspots((prev) => ({ ...prev, [name]: false }));

    if (name === "back") {
      ollie(board);
    } else if (name === "middle") {
      kickflip(board);
    } else if (name === "front") {
      heelflip(board, origin);
    }
  }

  const heelflip = (board, origin) => {
    jumpBoard(board);

    gsap
      .timeline()
      .to(board.rotation, {
        x: -0.6,
        duration: 0.26,
        ease: "none",
      })
      .to(board.rotation, {
        x: 0.4,
        duration: 0.82,
        ease: "power2.in",
      })
      .to(
        origin.rotation,
        {
          y: `+=${Math.PI * 2}`,
          duration: 0.77,
          ease: "none",
        },
        0.3
      )
      .to(board.rotation, {
        x: 0,
        duration: 0.14,
        ease: "none",
      });
  };

  function kickflip(board) {
    jumpBoard(board);

    gsap
      .timeline()
      .to(board.rotation, {
        x: -0.6,
        duration: 0.26,
        ease: "none",
      })
      .to(board.rotation, {
        x: 0.4,
        duration: 0.82,
        ease: "power2.in",
      })
      .to(
        board.rotation,
        {
          z: `+=${Math.PI * 2}`,
          duration: 0.78,
          ease: "none",
        },
        0.3
      )
      .to(board.rotation, {
        x: 0,
        duration: 0.12,
        ease: "none",
      });
  }

  function ollie(board) {
    jumpBoard(board);

    gsap
      .timeline()
      .to(board.rotation, {
        x: -0.6,
        duration: 0.26,
        ease: "none",
      })
      .to(board.rotation, {
        x: 0.4,
        duration: 0.82,
        ease: "power2.in",
      })
      .to(board.rotation, {
        x: 0,
        duration: 0.12,
        ease: "none",
      });
  }

  function jumpBoard(board) {
    setAnimating(true);

    gsap
      .timeline({ onComplete: () => setAnimating(false) })
      .to(board.position, {
        y: 0.8,
        duration: 0.51,
        ease: "power2.out",
        delay: 0.26,
      })
      .to(board.position, {
        y: 0,
        duration: 0.43,
        ease: "power2.in",
      });
  }

  return (
    <group>
      <Environment files={"/hdr/warehouse-512.hdr"} />
      <group ref={originRef}>
        <group ref={containerRef} position={[-0.25, 0, -0.635]}>
          <group position={[0, -0.086, 0.635]}>
            <SkateBoard
              boltColor={boltColor}
              truckColor={truckColor}
              deckTexture={deckTexture}
              wheelsTexture={wheelsTexture}
              constantWheelSpin={true}
              wheelPng={wheelPng}
              pose="upright"
            />

            <Hotspot
              position={[0, 0.38, 1]}
              color="#B8FC39"
              visible={!animating && showHotspots?.front}
            />
            <Hotspot
              position={[0, 0.33, 0]}
              color="#FF7A51"
              visible={!animating && showHotspots?.middle}
            />
            <Hotspot
              position={[0, 0.35, -0.9]}
              color="#46ACFA"
              visible={!animating && showHotspots?.back}
            />

            <mesh position={[0, 0.27, 0.9]} name="front" onClick={onClick}>
              <boxGeometry args={[0.6, 0.2, 0.58]} />
              <meshStandardMaterial visible={false} />
            </mesh>
            <mesh position={[0, 0.27, 0]} name="middle" onClick={onClick}>
              <boxGeometry args={[0.6, 0.1, 1.2]} />
              <meshStandardMaterial visible={false} />
            </mesh>
            <mesh position={[0, 0.27, -0.9]} name="back" onClick={onClick}>
              <boxGeometry args={[0.6, 0.2, 0.58]} />
              <meshStandardMaterial visible={false} />
            </mesh>
          </group>
        </group>
      </group>
      <ContactShadows opacity={0.6} position={[0, -0.08, 0]} />
      <group
        position={[0, -0.09, -0.5]}
        rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
        scale={[0.2, 0.2, 0.2]}
      >
        <Html
          transform
          zIndexRange={[1, 0]}
          occlude="blending"
          wrapperClass="pointer-events-none"
        >
          <WavyPaths />
        </Html>
      </group>
    </group>
  );
}
