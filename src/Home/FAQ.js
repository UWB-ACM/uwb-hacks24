import React, {useCallback} from 'react';
import './Home.css';
import {loadFull} from "tsparticles";
import options from "./particleConfig";
import Particles from "react-particles";

function FAQ() {
        const particlesInit = useCallback(async (engine) => {
            await loadFull(engine);
        }, [])

        return (
            <div id="repulse-div" className="faq">
                <div id="repulse-div" className="faqHeader">
                    FAQ
                </div>
                <Particles className="particles" options={options} init={particlesInit} />
            </div>


        );
}

export default FAQ;