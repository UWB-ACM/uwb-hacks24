import React, { useState, useEffect } from 'react';
import './Home.css';
import Marquee from "react-fast-marquee";

function CountdownTimer() {
    const [countdown, setCountdown] = useState(Date.parse('2023-05-05T00:00:00') - Date.now());
    const [endTimer, setEndTimer] = useState(Date.parse('2023-05-07T11:00:00') - Date.now());

    useEffect(() => {
        const interval = setInterval(() => {
            setCountdown(countdown - 1000);
            setEndTimer(endTimer - 1000);
        }, 1000);

        return () => clearInterval(interval);
    }, [countdown, endTimer]);

    const days = Math.floor(countdown / (1000 * 60 * 60 * 24));
    const hours = Math.floor((countdown / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((countdown / (1000 * 60)) % 60);

    const endDays = Math.floor(endTimer / (1000 * 60 * 60 * 24));
    const endHours = Math.floor((endTimer / (1000 * 60 * 60)) % 24);
    const endMinutes = Math.floor((endTimer / (1000 * 60)) % 60);

    const [playMarquee, setPlayMarquee] = useState(true);

    function handleMarquee() {
        setPlayMarquee(false);
        setTimeout(() => {
            setPlayMarquee(true);
        }, 10);
    }

    useEffect(() => {

    }, [playMarquee]);

    /*
    if (countdown < 0) {
        if (endTimer < 0) {
            return (
                <div className="countdown-timer-box py-2">
                    <Marquee play={playMarquee} gradient={false} speed={Math.log(window.screen.width) *10} onCycleComplete={handleMarquee}>Hacking Ends! Thank You! &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</Marquee>
                </div>
            );
        }
        else {
            return (
                <div className="countdown-timer-box py-2">
                    <Marquee play={playMarquee} gradient={false} speed={Math.log(window.screen.width) *10} onCycleComplete={handleMarquee}>{endDays} days, {endHours} hours, {endMinutes} minutes until Hacking ends! &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</Marquee>
                </div>
            );
        }
    }
            <div className="countdown-timer-box py-2">
            <Marquee play={playMarquee} gradient={false} speed={Math.log(window.screen.width) *10} onCycleComplete={handleMarquee}>{days} days, {hours} hours, {minutes} minutes until Hacking begins! &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</Marquee>
        </div>
    */
    return (
        <div className="countdown-timer-box py-2">
            <Marquee play={playMarquee} gradient={false} speed={Math.log(window.screen.width) * 10} onCycleComplete={handleMarquee}>Hacking has ended! Thanks for attending! &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</Marquee>
        </div>
    );
}

export default CountdownTimer;
