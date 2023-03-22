import { useCallback } from "react";
import Particles from "react-particles";
import { loadFull } from "tsparticles";
import Header from "./Header";
import CountdownTimer from "./CountDownTimer";
import Tracks from "./Tracks";
import options from "./particleConfig"; // configuration of particles
import FAQ from "./FAQ";
import './Home.css';

function Home() {

  const particlesInit = useCallback(async (engine) => {
      await loadFull(engine);
  }, [])

  return (
    <div className="Home">
        {/*<Header />*/}
        <CountdownTimer />
        <Tracks />
        <FAQ />
        <Particles className="particles" options={options} init={particlesInit} />
    </div>

  );
}

export default Home;
