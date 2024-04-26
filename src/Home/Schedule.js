import './Home.css';
import { useEffect } from "react";
import React from 'react';



function ScheduleItem({ day, theme, dressCode, events }) {
    return (
        <div className="bg-black bg-opacity-90 w-96 h-auto my-3 mx-auto text-center font-semibold border-2 border-pink rounded-2xl container schedule">
            <div className={"text-4xl mt-2 text-pink font-stacker"}>{day}</div>
            <div className={"text-sm"} style={{ color: '#CFD30C' }}>
                {theme}<br />{dressCode}
            </div>
            {events.map((event, index) => (
                <React.Fragment key={index}>
                    <div className="h-12 mt-4 mb-1 flex items-center justify-start">
                        <div className={"border-1 border-pink rounded-md py-1 px-2 text-sm font-light bg-black"}>
                            <p style={{ color: '#CFD30C' }}>{event.time}</p>
                        </div>
                        <div className={"text-sm ml-2"} style={{ color: '#CFD30C' }}>
                            {event.activity} - {event.location}
                        </div>
                    </div>
                    {index < events.length - 1 && <hr className={"border-t border-pink"} />}
                </React.Fragment>
            ))}
        </div>
    );
}

function Schedule() {
    // Define your schedule data
    const scheduleData = [
        {
            "day": "Friday",
            "theme": "Fandom Day!",
            "dressCode": "Wear clothes that reflect your passions to find like-minded teammates.",
            "events": [
                {
                    "time": "10:00am - 11:45am",
                    "activity": "Team formation / BizAI Networking",
                    "location": "ARC Overlook"
                },
                {
                    "time": "11:45am - 12:00pm",
                    "activity": "Lunch/Sandwiches",
                    "location": "ARC Overlook"
                },
                {
                    "time": "12:00pm - 1:00pm",
                    "activity": "Opening Ceremony, Sponsor Introductions",
                    "speakers": ["Heba Ramzy", "Sai Bathina", "Erika Odmark"],
                    "location": "ARC Overlook"
                },
                {
                    "time": "1:30pm - 2:30pm",
                    "activity": "Guest Speaker: WiCyS - Basma Basem",
                    "topic": "Safeguarding Tomorrow: The Evolution of Cybersecurity through AI Automation",
                    "location": "ARC Overlook"
                },
                {
                    "time": "3:00pm - 4:00pm",
                    "activity": "Rotating Workshops",
                    "details": "See details below",
                    "location": "Discovery Hall"
                },
                {
                    "time": "4:00pm - 6:00pm",
                    "activity": "In-Person Work Time",
                    "location": "ARC Overlook"
                },
                {
                    "time": "6:00pm - 7:00pm",
                    "activity": "Live Music (Background): Developers of Sound",
                    "location": "ARC Overlook"
                },
                {
                    "time": "7:00pm - 9:00pm",
                    "activity": "In-Person Work Time",
                    "location": "ARC Overlook"
                },
                {
                    "time": "9:00pm",
                    "activity": "Clean Up",
                    "location": "ARC Overlook"
                }
            ]
        },
        {
            "day": "Saturday",
            "date": "4/27",
            "theme": "Husky Spirit Wear Day!",
            "dressCode": "Wear purple and gold to show your Husky spirit.",
            "events": [
                {
                    "time": "10:00am - 11:30am",
                    "activity": "In-Person Work Time",
                    "location": "ARC Overlook"
                },
                {
                    "time": "11:30am - 12:00pm",
                    "activity": "Lunch/Pizza",
                    "location": "ARC Overlook"
                },
                {
                    "time": "12:00pm - 1:00pm",
                    "activity": "Guest Speaker: Avanade",
                    "speaker": "Tripti Sethi - Making AI Relevant to Today's Need for All",
                    "location": "ARC Overlook"
                },
                {
                    "time": "1:00pm - 2:00pm",
                    "activity": "Guest Speaker: Microsoft",
                    "speaker": "Tina Zhang-Powell - A Roadmap to Cybersecurity",
                    "location": "ARC Overlook"
                },
                {
                    "time": "2:00pm - 4:00pm",
                    "activity": "Rotating Workshops",
                    "details": "See details below",
                    "location": "Discovery Hall"
                },
                {
                    "time": "4:00pm - 9:00pm",
                    "activity": "In-Person Work Time",
                    "location": "ARC Overlook"
                },
                {
                    "time": "9:00pm",
                    "activity": "Clean Up",
                    "location": "ARC Overlook"
                }
            ]
        },
        {
            "day": "Sunday",
            "theme": "Professional Attire Day!",
            "dressCode": "Wear professional or business casual clothes for your pitch/demo in front of the judges.",
            "events": [
                {
                    "time": "10:00am",
                    "activity": "Student Favorite Voting Opens",
                    "location": "ARC Overlook"
                },
                {
                    "time": "10:30am - 11:00am",
                    "activity": "Closing Ceremony, Introducing Judges, Serving Donuts",
                    "sponsorReps": ["Heba Ramzy", "Angela Ferro Capera"],
                    "location": "ARC Overlook"
                },
                {
                    "time": "11:00am - 1:00pm",
                    "activity": "First Round of Judging",
                    "details": "See details below",
                    "location": "ARC Overlook"
                },
                {
                    "time": "1:00pm - 1:30pm",
                    "activity": "Judges Deliberate & Pick Top 8 Teams / Break for Participants",
                    "location": "ARC Overlook"
                },
                {
                    "time": "1:30pm",
                    "activity": "Student Favorite Voting Closes",
                    "location": "ARC Overlook"
                },
                {
                    "time": "1:30pm - 2:30pm",
                    "activity": "Top 8 Teams Present",
                    "location": "ARC Overlook"
                },
                {
                    "time": "2:30pm - 3:00pm",
                    "activity": "The Grand Jury Determines Grand Prize Winner",
                    "location": "ARC Overlook"
                },
                {
                    "time": "3:00pm - 3:30pm",
                    "activity": "Winners Announced - Wrap Up",
                    "location": "ARC Overlook"
                },
                {
                    "time": "3:30pm - 4:00pm",
                    "activity": "Clean Up",
                    "location": "ARC Overlook"
                }
            ]
        }
        
    ];

    // Workshops for Friday and Saturday would need to be included in the 'events' array where the 'activity' specifies 'Rotating Workshops'.


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
        <div id="schedule" className="h-auto bg-opacity-90 shadow-lg mb-44 bg-light-purple text-center" style={{ backgroundColor: '#6f07d6', overflow: 'hidden', margin: '0', padding: '0' }}>
            <div className={"font-Stacker text-6xl  pt-4"} style={{ color: '#18e4ec' }}>Schedule</div>
            <div className="flex flex-wrap h-auto pb-4">
                {scheduleData.map((daySchedule, index) => (
                    <ScheduleItem
                        key={index}
                        day={daySchedule.day}
                        theme={daySchedule.theme}
                        dressCode={daySchedule.dressCode}
                        events={daySchedule.events}
                    />
                ))}
            </div>
        </div>
    );
}

export default Schedule;