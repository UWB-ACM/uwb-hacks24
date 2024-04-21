import React from 'react';
import './Home.css';
import BioTech from "./media/biotech.png"
import Business from "./media/business.png"
import Education from "./media/education.png"
import Entertainment from "./media/entertainment.png"
import StackedCards from './TrackCard';

function Tracks() {
    return (
        <>
            <div className="bg-purple rounded-xl overflow-hidden" id="trackSection">
                <div className="font-stacker text-pink text-6xl text-center mt-3 mb-2">
                    Tracks
                </div>

                <div className="font-stacker text-pink flex flex-col items-center justify-center sm:flex-row sm:flex-wrap overflow-hidden pb-36">
                    <StackedCards cardTitle="BioTech" backgroundImage={BioTech}>AI transforms healthtech & biotech by optimizing drug discovery, diagnostics, precision medicine, and healthcare operations. It analyzes vast datasets to predict disease risks, personalize treatments, and enhance patient outcomes.</StackedCards>


                    <StackedCards cardTitle="Business" backgroundImage={Business}>AI revolutionizes business by automating tasks, personalizing customer experiences, optimizing operations, predicting trends, managing risks, and enhancing HR processes. It drives efficiency, innovation, and competitiveness across industries.</StackedCards>


                    <StackedCards cardTitle="Education" backgroundImage={Education}>AI enhances education by personalizing learning, enhancing teaching, analyzing data, improving accessibility, innovating content, and fostering lifelong learning.</StackedCards>

                    <StackedCards cardTitle="Entertainment" backgroundImage={Entertainment}>AI provides entertainment with personalized content, immersive experiences, efficient production, audience engagement, predictive analytics, recommendation systems, content moderation, and creative collaboration, shaping the future of digital entertainment.
</StackedCards>
                    

                </div>
            </div>
        </>
    );
}



// function Tracks() {
//     return (
//         <>
//             <div className="bg-purple overflow-hidden" id="trackSection">
//                 <div className="font-stacker text-pink text-6xl text-center mt-3 mb-2">
//                     Tracks
//                 </div>

//                 <div className="font-stacker text-pink flex flex-col items-center justify-center sm:flex-row sm:flex-wrap overflow-hidden pb-36">
//                     <StackedCards cardTitle="Soon..." backgroundImage={BioTech}>Tracks to be released soon. Stay tuned.</StackedCards>
//                 </div>
//             </div>
//         </>
//     );
// }


export default Tracks;