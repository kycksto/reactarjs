import './App.css';
import { ARCanvas, ARMarker } from "@artcom/react-three-arjs";

function App() {
  return (
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
  );
}

export default App;
