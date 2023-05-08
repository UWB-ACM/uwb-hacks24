import './Home.css';
import {useEffect} from "react";

function Schedule() {
    const handleIntersection = (entries, observer) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("animated");
                observer.unobserve(entry.target);
            }
        });
    };

    const observer = new IntersectionObserver(handleIntersection, { threshold: 0.5 });

    useEffect(() => {
        const elements = document.querySelectorAll(".schedule");
        elements.forEach((element) => observer.observe(element));
    }, [observer]);

    return (
        <div id="schedule" className="h-auto bg-opacity-90 shadow-lg mb-40 bg-light-purple text-center">
            <div className={"font-SecularOne text-6xl text-white pt-4"}>Schedule</div>
            <div className="flex flex-wrap h-auto pb-4">
                <div id={"schedule-1"} className="bg-white bg-opacity-50 w-96 h-96 my-3 mx-auto text-center font-semibold border-2 border-light-purple rounded-2xl container schedule">
                    <div className={"text-4xl mt-2 text-purple font-SecularOne"}>Fri 5/5</div>
                    <div className="border-1 border-light-purple rounded-xl h-12 my-3 flex justify-center items-center">
                        10:00am - 11:50am: Team Building
                    </div>
                    <div className="border-1 border-light-purple rounded-xl h-12 my-3 flex justify-center items-center">
                        12:00pm - 2:00pm: Opening Ceremony
                    </div>
                    <div className="border-1 border-light-purple rounded-xl h-12 my-3 flex justify-center items-center">
                        2:00pm - 5:00pm: Coding
                    </div>
                    <div className="border-1 border-light-purple rounded-xl h-12 my-3 flex justify-center items-center">
                        5:05pm - 6:05pm: Sustainability Workshop
                    </div>
                    <div className="border-1 border-light-purple rounded-xl h-12 my-1 flex justify-center items-center text-xs lg:text-sm break-words">
                        6:30pm - 7:30pm: "The Engineering Mindset: From Aerospace to the Artificial Space"
                    </div>
                </div>
                <div id={"schedule-2"} className="bg-white bg-opacity-50 w-96 h-96 my-3 mx-auto text-center font-semibold border-2 border-light-purple rounded-2xl container schedule delay-1">
                    <div className={"text-4xl mt-2 text-purple font-SecularOne"}>Sat 5/6</div>
                    <div className="border-1 border-light-purple rounded-xl h-12 my-3 flex justify-center items-center">
                        9:00am - 12:00pm: Coding
                    </div>
                    <div className="border-1 border-light-purple rounded-xl h-12 my-3 flex justify-center items-center">
                        12:00pm - 1:00pm: Pizza Lunch
                    </div>
                    <div className="border-1 border-light-purple rounded-xl h-12 my-3 text-sm flex justify-center items-center">
                        1:05 pm - 2:20 pm: "Lessons from Building Software at the Pace of Science"
                    </div>
                    <div className="border-1 border-light-purple rounded-xl h-12 my-3 flex justify-center items-center">
                        2:25pm - 3:45pm: "App Dev Crash Course"
                    </div>
                    <div className="border-1 border-light-purple rounded-xl h-12 my-3 flex justify-center items-center">
                        3:45 pm - 4:00 pm: Wrap-up
                    </div>
                </div>
                <div id={"schedule-3"} className="bg-white bg-opacity-50 w-96 h-96 my-3 mx-auto text-center font-semibold border-2 border-light-purple rounded-2xl container schedule delay-2">
                    <div className={"text-4xl mt-2 text-purple font-SecularOne"}>Sun 5/7</div>
                    <div className="border-1 border-light-purple rounded-xl h-12 my-3 flex justify-center items-center">
                        10:00 am - 10:30 am: Closing ceremony
                    </div>
                    <div className="border-1 border-light-purple rounded-xl h-12 my-3 flex justify-center items-center">
                        10:30 am - 11:30 am: Career Workshops
                    </div>
                    <div className="border-1 border-light-purple rounded-xl h-12 my-3 flex justify-center items-center">
                        One-on-One Resume Review by Appointment
                    </div>
                    <div className="border-1 border-light-purple rounded-xl h-12 my-3 flex justify-center items-center">
                        Talk on Interviewing and Mock-interviews
                    </div>
                    <div className="border-1 border-light-purple rounded-xl h-12 my-3 flex justify-center items-center">
                        12:00 pm - 2:00 pm: Judging
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Schedule;