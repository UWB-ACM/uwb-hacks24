import React, {useCallback} from 'react';
import './Home.css';
import TrackCard from "./TrackCard"
import Entertainment from "./placeholder images/entertainment.png"
import Sustainability from "./placeholder images/sustainability.png"
import Education from "./placeholder images/education.png"

function Tracks() {
    return (
        <>
            <div className="rounded-xl overflow-hidden my-5">
                <div className="font-SecularOne text-6xl text-center mt-3 mb-2">
                    Tracks
                </div>
                <div className="flex flex-col items-center justify-center sm:flex-row sm:flex-wrap overflow-hidden">
                    <TrackCard cardTitle="Sustainability" backgroundImage={Sustainability}> As we start to move away from quarantine, how can we ensure people are being environmentally conscious when engaging in outdoor activities? Look into ways sustainability can be maintained now that gatherings and events are moving in-person. </TrackCard>
                    <TrackCard cardTitle="Education" backgroundImage={Education}> Education was moved online during quarantine causing many to adjust their way of learning for their new environment. As society moves back to learning in-person, how can we help assimilate people back to learning in-person? </TrackCard>
                    <TrackCard cardTitle="Entertainment" backgroundImage={Entertainment}> Entertainment was majorly affected by the pandemic resulting in people having to find sources of enjoyment through different avenues that worked under the quarantine. Now that quarantine is over, how can we help people transition and find in-person entertainment again? </TrackCard>
                </div>
            </div>
        </>
    );

}

export default Tracks;