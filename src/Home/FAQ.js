import './Home.css';
import CollapseButton from "./CollapseButton"

function FAQ() {
        return (
            <div id="faqSection" className="bg-white shadow-md overflow-hidden border-1 border-yellow-600 rounded-xl mx-4 my-5">
                <div className="font-SecularOne text-6xl text-center mb-2 mt-3">FAQ</div>
                    <div className="mx-4">
                            <CollapseButton buttonID="faqb" buttonText= "Will UWB Hacks 2023 be in-person or virtual?"> 
                            This will be a hybrid event, with in-person and virtual offerings. <br/><br/>
                            The venue for in-person activities will be the top floor of the Activities and Recreation Center (ARC) at UW Bothell. <br/><br/>
                            We will have a Discord channel devoted to the hackathon that you can use to keep track of the schedule and to ask questions or attend virtual events.
                            </CollapseButton>
                            <CollapseButton buttonID="faqb" buttonText= "How will UWB Hacks In Person run?"> 
                            This will be a hybrid event, with in-person and virtual offerings. The venue for in-person activities will be the top floor of the Activities and Recreation Center (ARC) at UW Bothell. <br/><br/>
                            Friday 10am-2pm: Opening Ceremony, Team Building, FREE SNACKS! <br/><br/>
                            Saturday 9am-4pm: Development Workshops, Seminars, Coding + FREE PIZZA <br/><br/>
                            Sunday 10am-2pm: Career Workshops, Closing Ceremony + FREE DONUTS <br/><br/>
                            We will be hosting online events such as workshops and guest speakers through Zoom (Schedule coming soon). <br/><br/>
                            For teamwork on your project, communication methods are entirely up to you, but we recommend Zoom, Microsoft Teams, or Discord.
                            </CollapseButton>
                            <CollapseButton buttonID="faqb" buttonText= "Do I have to be a UWB student to register?"> 
                            Yes, however, we accept all students from not only high schools, community colleges, and universities, but non-traditional institutions like boot camps and academies as well. 
                            </CollapseButton>
                            <CollapseButton buttonID="faqb" buttonText= "How much coding experience do I need to have?"> 
                            You do not need to have any prior coding experience. We are welcoming students of all experience and skill levels. Hackathons are a great opportunity to work with people of all skill levels.
                            </CollapseButton>
                            <CollapseButton buttonID="faqb" buttonText= "What if I don't have a team?"> 
                            You are welcome to work individually or with a team. <br/><br/>
                            Friday, we will have an in-person Opening Ceremony and Team Building time, from 10:00am until 2:00pm. Free snacks will be provided. The top floor of the Activities and Recreation Center (ARC) at UW Bothell is reserved. <br/><br/>
                            If you are struggling to find a team or don't have a team and want to work with one, we recommend you join our UWB Hacks In Person Discord. There is a '#team-formation' channel where you can find other people looking for teams.
                            </CollapseButton>    
                            <CollapseButton buttonID="faqb" buttonText= "How many people can be on a team?"> 
                            We have a limit of 5 members per team. Any more than 5 members would potentially reduce team production and cause further difficulties for your projects.
                            </CollapseButton>
                            <CollapseButton buttonID="faqb" buttonText= "What are tracks?"> 
                            In Hackathons, tracks are used to help you come up with ideas and help guide you through your project. For example: a project for the Education track could be an app that helps students keep track of their school and personal life to maintain a healthy work life balance.
                            </CollapseButton>
                            <CollapseButton buttonID="faqb" buttonText= "Are there any rules?"> 
                            Behave Appropriately: This is an event on a university campus, and thus you should act as you would on campus. Inappropriate behavior or posts are not acceptable under any circumstances. <br/><br/>
                            <b>Read our code of conduct</b>
                            </CollapseButton>
                            <CollapseButton buttonID="faqb" buttonText= "Does UWB Hacks In Person cost money?"> 
                            This event is entirely free! No sign up or registration fees required.
                            </CollapseButton>
                            <CollapseButton buttonID="faqb" buttonText= "What if I have a question that wasn't answered in the FAQ?"> 
                            Please feel free to reach out to event organizers in the “#organizer-discussion” channel of the UWB Hacks In Person Discord or email uwbacmhackinperson2023@gmail.com 
                            </CollapseButton>


                    </div>
            </div>
        );
}

export default FAQ;