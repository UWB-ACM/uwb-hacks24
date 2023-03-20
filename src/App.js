import './App.css';
import Header from "./Header";
import CountdownTimer from "./CountDownTimer";
import Tracks from "./Tracks";
import Particles from "react-particles";
import options from "./particleConfig"; // configuration of particles
import { loadFull } from "tsparticles";
import { useCallback } from "react";
import { loadTrianglesPreset } from "tsparticles-preset-triangles";
import FAQ from "./FAQ";

function App() {

  const particlesInit = useCallback(async (engine) => {
      await loadFull(engine);
  }, [])



  return (
    <div className="App">
        <Header />
        <CountdownTimer />
        <Tracks />
        <FAQ />
        <Particles className="particles" options={options} init={particlesInit} />
    </div>

  );
}

export default App;
