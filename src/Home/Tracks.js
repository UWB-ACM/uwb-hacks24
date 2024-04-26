import React from 'react';
import './Home.css';
import StackedCards from './TrackCard';



function Tracks() {
    return (
        <>
            <div className="bg-purple overflow-hidden" id="trackSection">
                <div className="font-stacker text-pink text-6xl text-center mt-3 mb-2">
                    Tracks
                </div>

                <div className="font-stacker text-pink flex flex-col items-center justify-center sm:flex-row sm:flex-wrap overflow-hidden pb-36">
                    <StackedCards cardTitle="Soon..." backgroundImage={null}>Tracks to be released soon. Stay tuned.</StackedCards>
                </div>
            </div>
        </>
    );
}


export default Tracks;