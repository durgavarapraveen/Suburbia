import { Billboard } from "@react-three/drei";
import React, { useRef } from "react";

function Hotspot({ position, color, visible }) {
  const hotSpotRef = useRef();

  return (
    <Billboard position={position} follow={true}>
      <mesh ref={hotSpotRef} visible={visible}>
        <circleGeometry args={[0.02, 32]} />
        <meshStandardMaterial color={color} transparent={true} opacity={1} />
      </mesh>

      <mesh
        visible={visible}
        onPointerOver={() => {
          document.body.style.cursor = "pointer";
        }}
        onPointerOut={() => {
          document.body.style.cursor = "default";
        }}
      >
        <circleGeometry args={[0.03, 32]} />
        <meshBasicMaterial color={color} />
      </mesh>
    </Billboard>
  );
}

export default Hotspot;
