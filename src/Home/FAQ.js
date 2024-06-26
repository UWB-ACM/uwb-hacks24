import './Home.css';
import CollapseButton from "./CollapseButton"
import { NavLink } from "react-router-dom";
import COC from "./media/Code_of_Conduct.pdf"

function FAQ() {

        return (
                <div className="bg-black overflow-hidden">
                        <div id="faqSection" className="shadow-md overflow-hidden border-2 border-pink bg-black bg-opacity-100 rounded-xl mx-4 my-5">
                                <div className="font-Stacker text-6xl text-pink text-center mb-2 mt-3 font-bold">FAQ</div>
                                <div className="mx-4">
                                        <CollapseButton buttonID="faqb1" buttonText="Will UWB Hacks 2024 be in-person or virtual?" >
                                                This will be a hybrid event, with in-person and virtual offerings. <br /><br />
                                                The venue for in-person activities will be the top floor of the Activities and Recreation Center (ARC) at UW Bothell. <br /><br />
                                                We will have a Discord channel devoted to the hackathon that you can use to keep track of the schedule and to ask questions or attend virtual events.
                                        </CollapseButton>
                                        <CollapseButton buttonID="faqb2" buttonText="How will UWB HACKS AI run?">
                                                This will be a hybrid event, with in-person and virtual offerings. The venue for in-person activities will be the top floor of the Activities and Recreation Center (ARC) at UW Bothell. <br /><br />
                                                We will be hosting online events such as workshops and guest speakers through Zoom (Schedule coming soon). <br /><br />
                                                For teamwork on your project, communication methods are entirely up to you, but we recommend Zoom, Microsoft Teams, or <NavLink to="https://discord.gg/GnSTYYcUEa" className=" cursor-pointer text-cyan font-bold">Discord</NavLink>.
                                        </CollapseButton>
                                        <CollapseButton buttonID="faqb3" buttonText="Do I have to be a UWB student to register?">
                                                No, we accept all students from high schools, community colleges, and universities. Hackers from non-traditional institutions like boot camps and academies are welcome as well.
                                        </CollapseButton>
                                        <CollapseButton buttonID="faqb4" buttonText="How much coding experience do I need to have?">
                                                You do not need to have any prior coding experience. We are welcoming students of all experience and skill levels. Hackathons are a great opportunity to work with people of all skill levels.
                                        </CollapseButton>
                                        <CollapseButton buttonID="faqb5" buttonText="What if I don't have a team?">
                                                You are welcome to work individually or with a team. <br /><br />
                                                Friday, we will have an in-person Opening Ceremony and Team Building time, from 10:00am until 1:00pm. Free snacks will be provided. The top floor of the Activities and Recreation Center (ARC) at UW Bothell is reserved. <br /><br />
                                                If you are struggling to find a team or don't have a team and want to work with one, we recommend you join our UWB Hacks AI Discord. There is a '#team-formation' channel where you can find other people looking for teams.
                                        </CollapseButton>
                                        <CollapseButton buttonID="faqb6" buttonText="How many people can be on a team?">
                                                We have a limit of 3 members per team. Any more than 3 members would potentially reduce team production and cause further difficulties for your projects.
                                        </CollapseButton>
                                        <CollapseButton buttonID="faqb7" buttonText="What are tracks?">
                                                In Hackathons, tracks are used to help you come up with ideas and help guide you through your project. For example: a project for the Education track could be an app that helps students keep track of their school and personal life to maintain a healthy work life balance.
                                        </CollapseButton>
                                        <CollapseButton buttonID="faqb8" buttonText="Are there any rules?">
                                                Behave Appropriately: This is an event on a university campus, and thus you should act as you would on campus. Inappropriate behavior or posts are not acceptable under any circumstances. <br /><br />
                                                <a className="font-bold text-yellow" target="_blank" href={COC}>Read our code of conduct</a>
                                        </CollapseButton>
                                        <CollapseButton buttonID="faqb9" buttonText="Does UWB Hacks AI cost money?">
                                                This event is entirely free! No sign up or registration fees required. <br /><br />
                                                For parking, the daily rate is $2.00/hour and $10.00/day (or all day). For more information about parking, check <a className="font-bold text-white" target="_blank" href='https://www.uwb.edu/commuter-services/parking/parking-permits#daily-parking '>here</a>
                                        </CollapseButton>
                                        <CollapseButton buttonID="faqb10" buttonText="Can I do a team of 4 or more if only 3 people get prizes?">
                                                We have a strict cap at 3 students maximum per team. Any more than that would be unfair to other teams because that team would have more help.
                                        </CollapseButton>
                                        <CollapseButton buttonID="faqb11" buttonText="If I compete by myself, do I get the prize amount of a 3 person team if I win?">
                                                If you compete by yourself (team of one), you will get the amount of a 1 person team, $250 + and additional $250 if chosen for the grand prize. Whether you compete alone or in a team of 3 will not make a difference in the amount you will win individually. 
                                        </CollapseButton>
                                        <CollapseButton buttonID="faqb12" buttonText="What if I have a question that wasn't answered in the FAQ?">
                                                Please feel free to reach out to event organizers in the “#organizer-discussion” channel of the UWB Hacks AI <NavLink to="https://discord.gg/GnSTYYcUEa" className=" cursor-pointer text-cyan font-bold">Discord</NavLink> or fill out the <NavLink to="https://forms.gle/bS1QrjXdHP7dVVNt6" className=" cursor-pointer text-cyan font-bold"> contact form. </NavLink>
                                        </CollapseButton>


                                </div>
                        </div >
                </div>
        );
}

export default FAQ;