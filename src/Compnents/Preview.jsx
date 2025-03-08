import {
  CameraControls,
  Environment,
  Preload,
  useTexture,
} from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React, { Suspense, useEffect, useRef } from "react";
import { SkateBoard } from "../3d_animations/SkateBoard";
import * as THREE from "three";

import WheelPng from "../assets/Suburbia-Course-Assets/Add to Prismic/wheel-green.png";
import DeckColor from "../assets/Suburbia-Course-Assets/Add to Prismic/green-and-navy.png";

const DEFAULT_DECK_TEXTURE = DeckColor;
const DEFAULT_WHELLS_TEXTURE = "/skateboard/SkateWheel1.png";
const DEFAULT_TRUCK_COLOR = "#6f6e6a";
const DEFAULT_BOLT_COLOR = "#6f6e6a";
const WheelColor = WheelPng;
const ENVIRONMENT_COLOR = "#3B3A3A";

function Preview({ selectedDeck, selectedWheel, selectedTruck, selectedBolt }) {
  const cameraControls = useRef(null);
  const floorRef = useRef(null);

  function onCameraControl() {
    if (
      !cameraControls.current ||
      !floorRef.current ||
      cameraControls.current.colliderMeshes.length > 0
    )
      return;

    cameraControls.current.colliderMeshes = [floorRef.current];
  }

  const deck = selectedDeck ? selectedDeck : DEFAULT_DECK_TEXTURE;
  const wheel = selectedWheel ? selectedWheel : DEFAULT_WHELLS_TEXTURE;
  const truck = selectedTruck ? selectedTruck : DEFAULT_TRUCK_COLOR;
  const bolt = selectedBolt ? selectedBolt : DEFAULT_BOLT_COLOR;

  useEffect(() => {
    setCameraControls(
      new THREE.Vector3(0, 0.3, 0),
      new THREE.Vector3(1.5, 0.8, 0)
    );
  }, [selectedDeck]);

  useEffect(() => {
    setCameraControls(
      new THREE.Vector3(-0.08, 0.54, 0.64),
      new THREE.Vector3(0.9, 1, 0.9)
    );
  }, [selectedWheel]);

  useEffect(() => {
    setCameraControls(
      new THREE.Vector3(-0.12, 0.29, 0.57),
      new THREE.Vector3(0.1, 0.25, 0.9)
    );
  }, [selectedTruck]);

  useEffect(() => {
    setCameraControls(
      new THREE.Vector3(-0.25, 0.3, 0.62),
      new THREE.Vector3(-0.5, 0.35, 0.8)
    );
  }, [selectedBolt]);

  function setCameraControls(target, position) {
    if (!cameraControls.current) return;
    cameraControls.current.setTarget(target.x, target.y, target.z, true);
    cameraControls.current.setPosition(
      position.x,
      position.y,
      position.z,
      true
    );
  }

  return (
    <Canvas camera={{ position: [2.5, 1, 0], fov: 50 }} shadows>
      <Suspense fallback={null}>
        <Environment
          files={"/hdr/warehouse-512.hdr"}
          environmentIntensity={0.6}
        />

        <directionalLight
          castShadow
          lookAt={[0, 0, 0]}
          position={[1, 1, 1]}
          intensity={1.6}
        />
        <fog attach="fog" args={[ENVIRONMENT_COLOR, 3, 10]} />
        <color attach="background" args={[ENVIRONMENT_COLOR]} />
        <StageFloor />

        <mesh
          rotation={[-Math.PI / 2, 0, 0]}
          position={[0, 0, 0]}
          receiveShadow
          ref={floorRef}
        >
          <planeGeometry args={[6, 6]} />
          <meshBasicMaterial visible={false} />
        </mesh>

        <SkateBoard
          boltColor={bolt}
          truckColor={truck}
          deckTexture={deck}
          wheelsTexture={wheel}
          wheelPng={wheel}
          pose="side"
        />
        <CameraControls
          ref={cameraControls}
          minDistance={0.2}
          maxDistance={4}
          onStart={onCameraControl}
        />
      </Suspense>
      <Preload all />
    </Canvas>
  );
}

function StageFloor() {
  const normalMap = useTexture("/concrete-normal.avif");
  normalMap.wrapS = THREE.RepeatWrapping;
  normalMap.wrapT = THREE.RepeatWrapping;
  normalMap.repeat.set(30, 30);
  normalMap.anisotropy = 8;

  const material = new THREE.MeshStandardMaterial({
    roughness: 0.75,
    color: ENVIRONMENT_COLOR,
    normalMap: normalMap,
  });

  return (
    <mesh
      castShadow
      receiveShadow
      position={[0, -0.005, 0]}
      rotation={[-Math.PI / 2, 0, 0]}
      material={material}
    >
      <circleGeometry args={[20, 32]} />
    </mesh>
  );
}

export default Preview;
