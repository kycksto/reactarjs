import { ARCanvas, ARMarker } from "@artcom/react-three-arjs";
import { Navigate } from "react-router-dom";

function Arjsreact() {
  return (
    <>
    <div>
      <ARCanvas
    camera={{ position: [0, 0, 0] }}
    dpr={window.devicePixelRatio}
    onCreated={({ gl }) => {
      gl.setSize(window.innerWidth, window.innerHeight);
    }}
  >
    <ambientLight />
    <pointLight position={[10, 10, 0]} />
    <ARMarker type={"pattern"} patternUrl={"data/hiro.patt"}>
      <mesh>
        <boxBufferGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color={"green"} />
      </mesh>
    </ARMarker>
  </ARCanvas>
  </div>
  <a className="absolute inset-x-0 bg-white" href="http://localhost:3000/reactarjs" >
    <p className=" justify-center">
    Home
    </p> 
  </a>
  </>
  );
}

export default Arjsreact;
