import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDiscord, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import {NavLink} from "react-router-dom";
export default function Footer() {
    return (
        <footer className="bg-gradient-to-r from-light-purple via-purple to-light-purple h-16 flex justify-center items-center">
            <div className="mx-auto text-white font-SecularOne lg:text-3xl md:text-2xl opacity-100">
                Follow UWB ACM for More Events!
            </div>
            <NavLink to={"https://discord.gg/7jFyNVCcpH"} className="mx-auto">
                <FontAwesomeIcon icon={faDiscord} style={{color: "white", transform: "scale(2)"}} />
            </NavLink>
            <NavLink to={"https://www.linkedin.com/company/uwb-acm-club/"} className="mx-auto">
                <FontAwesomeIcon icon={faLinkedin} style={{color: "white", transform: "scale(2)"}} />
            </NavLink>
        </footer>
    );
}