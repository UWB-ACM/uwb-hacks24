import React from 'react';
import './Home.css';
import Entertainment from "./media/entertainment.png"
import Sustainability from "./media/sustainability.png"
import Education from "./media/education.png"
import StackedCards from './TrackCard';

function Tracks() {
    return (
        <>
            <div className="rounded-xl overflow-hidden my-5" id="trackSection">
                <div className="font-SecularOne text-6xl text-center mt-3 mb-2">
                    Tracks
                </div>
                
                <div className="flex flex-col items-center justify-center sm:flex-row sm:flex-wrap overflow-hidden pb-24">
                    <StackedCards cardTitle="Sustainability" backgroundImage={Sustainability}> As we start to move away from quarantine, how can we ensure people are being environmentally conscious when engaging in outdoor activities? Look into ways <b className="text-yellow">sustainability</b> can be maintained now that gatherings and events are moving in-person. </StackedCards>
                    <StackedCards cardTitle="Education" backgroundImage={Education}> <b className="text-yellow">Education</b> was moved online during quarantine causing many to adjust their way of learning for their new environment. As society moves back to learning in-person, how can we help assimilate people back to learning in-person? </StackedCards>
                    <StackedCards cardTitle="Entertainment" backgroundImage={Entertainment}> <b className="text-yellow">Entertainment</b> was majorly affected by the pandemic resulting in people having to find sources of enjoyment through different avenues that worked under the quarantine. Now that quarantine is over, how can we help people transition and find in-person entertainment again? </StackedCards>
                </div>
            </div>
        </>
    );
}

export default Tracks;