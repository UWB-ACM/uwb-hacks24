import { useCallback } from "react";
import { loadFull } from "tsparticles";
import Tracks from "./Tracks";
import FAQ from "./FAQ";
import './Home.css';
import HeaderSection from "./HeaderSection";
import ScrollToTopButton from "./ScrollToTopButton"

function Home() {
    const particlesInit = useCallback(async (engine) => {
        await loadFull(engine);
    }, [])
    return (
        <div className="w-full Home">
            <HeaderSection />
            <Tracks />
            <FAQ />
            {/*<Particles className="particles" options={options} init={particlesInit} />*/}
            <ScrollToTopButton/>
        </div>
    );
}

export default Home;
