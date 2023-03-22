import React, {useCallback, useState} from 'react';
import './Home.css';
import {loadFull} from "tsparticles";
import options from "./particleConfig";
import Particles from "react-particles";
import CollapseButton from "./CollapseButton"


function FAQ() {
        const particlesInit = useCallback(async (engine) => {
            await loadFull(engine);
        }, [])

        return (
            <div id="repulse-div" className="faq d-grid gap-2">
                <div id="repulse-div" className = "faqHeader" >FAQ</div>
                <CollapseButton buttonText= "Will UWB Hacks 2023 be in-person or virtual?"> Consequat ullamco id voluptate quis. Nostrud qui duis cupidatat excepteur minim sit ad irure elit qui Lorem do qui proident. Culpa ea sunt occaecat duis esse. Exercitation id laboris qui culpa eu. Proident minim enim Lorem commodo proident consequat qui sit commodo quis. In proident aute est amet nulla dolore quis Lorem duis commodo amet do.</CollapseButton>
                <CollapseButton buttonText= "Do I have to be a UWB student to register?"> Minim exercitation laboris do officia ea magna magna veniam aute ipsum dolor. Enim Lorem nostrud irure fugiat deserunt. Lorem magna pariatur nulla reprehenderit ullamco eu ea eiusmod nostrud nisi magna non. </CollapseButton>
                <Particles className="particles" options={options} init={particlesInit} />
            </div>
        );
}

export default FAQ;