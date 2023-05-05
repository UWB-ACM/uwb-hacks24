import React, { useState} from 'react'
import { Dialog, Popover} from '@headlessui/react'
import {
    Bars3Icon,
    XMarkIcon,
} from '@heroicons/react/24/outline'
import {NavLink} from "react-router-dom";
import {Link} from "react-scroll";
import {useLocation} from "react-router-dom";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faRocket} from "@fortawesome/free-solid-svg-icons";
import CountdownTimer from "./CountDownTimer";

export default function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);


    function handleCloseMenu() {
        setMobileMenuOpen(false);
    }

    const location = useLocation();

    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };


    if (location.pathname === "/uwb-hacks23/Contact" || location.pathname === "/uwb-hacks23/Registration" || location.pathname === "/uwb-hacks23/Login") {
        return (
            <>
                <header className="h-20 flex justify-end ">
                    <div className="px-5 py-4">
                        {!isHovered ? (
                            <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                                <NavLink
                                    to="/uwb-hacks23"
                                    className="text-lg font-semibold leading-6 text-purple pt-5 px-1 hover:text-orange"
                                >
                                    Return to Home
                                    <span> </span>
                                    <FontAwesomeIcon icon={faRocket} style={{ color: "purple" }}/>
                                </NavLink>
                            </div>

                        ) : (
                            <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} onClick={() => setIsHovered(false)}>
                                <NavLink
                                    to="/uwb-hacks23"
                                    className="text-lg font-semibold leading-6 text-orange pt-5 px-1 hover:text-orange"
                                >
                                    Return to Home
                                    <span> </span>
                                    <FontAwesomeIcon icon={faRocket} beat style={{ color: "orange" }}/>
                                </NavLink>
                            </div>
                        )}
                    </div>
                </header>
                <CountdownTimer/>
            </>
        )
    }

    return (
        <header className={`bg-white`}>
            <nav className="mx-auto flex max-w-7xl items-center justify-between  lg:px-8 h-20" aria-label="Global">
                <div className="flex lg:flex-1  h-full">
                    <span className="mt-4 mx-4 text-light-purple text-2xl font-bold ">UWB Hacks 2023</span>
                    {/*<img className="h-full" src=" " alt="UWB Hacks Logo" />*/}
                </div>
                <div className="flex lg:hidden ">
                    <button
                        type="button"
                        className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5  hover:bg-light-purple mr-3.5"
                        onClick={() => setMobileMenuOpen(true)}
                    >
                        <span className="sr-only">Open main menu</span>
                        <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                    </button>
                </div>

                <Popover.Group className="hidden lg:flex h-full items-center justify-between">
                    <Link to="aboutSection"
                          smooth={'easeInOutQuint'}
                          duration={200}
                          offset={0}
                          className="text-1xl px-4 font-semibold leading-6 cursor-pointer items-center bg-opacity-10  hover:bg-light-purple h-full transition duration-500">
                            <div className="text-black h-full mt-4">About</div>            
                    </Link>
                    <Link to="trackSection"
                          smooth={'easeInOutQuint'}
                          duration={200}
                          offset={-10}
                          className="text-1xl px-4 font-semibold leading-6 cursor-pointer items-center bg-opacity-10 hover:bg-light-purple h-full transition duration-500">
                            <div className="text-black h-full mt-4">Tracks</div>            
                    </Link>
                    {/*<Link to="schedule"*/}
                    {/*      smooth={'easeInOutQuint'}*/}
                    {/*      duration={200}*/}
                    {/*      offset={-10}*/}
                    {/*      className="text-1xl px-4 font-semibold leading-6 cursor-pointer items-center bg-opacity-10 hover:bg-light-purple h-full transition duration-500">*/}
                    {/*    <div className="text-black h-full mt-4">Schedule</div>*/}
                    {/*</Link>*/}
                    <Link to="faqSection"
                          smooth={'easeInOutQuint'}
                          duration={200}
                          offset={-10}
                          className="text-1xl px-4 font-semibold leading-6 cursor-pointer items-center bg-opacity-10 hover:bg-light-purple h-full transition duration-500">
                            <div className="text-black h-full mt-4">FAQ</div>            
                    </Link>
                    <NavLink to="/uwb-hacks23/Contact" className="text-1xl px-4 font-semibold leading-6 cursor-pointer items-center bg-opacity-10 hover:bg-light-purple h-full transition duration-500">
                            <div className="text-black h-full mt-4">Contact</div>   
                    </NavLink>
                    {/*                     <NavLink to="/uwb-hacks23/Registration" className="text-1xl px-4 font-semibold leading-6 cursor-pointer items-center bg-opacity-10 hover:bg-light-purple h-full transition duration-500">
                            <div className="text-black h-full mt-4">Registration</div>
                    </NavLink>*/}

                    <NavLink to="https://uwb-acm-hacks-in-person.devpost.com" className="text-1xl px-4 font-semibold leading-6 cursor-pointer items-center bg-opacity-10 hover:bg-light-purple h-full transition duration-500" target="_blank">
                            <div className="text-black h-full mt-4">Devpost</div>
                    </NavLink>
                    <NavLink to="https://discord.gg/aADBZChg2s" className="text-1xl px-4 font-semibold leading-6 cursor-pointer items-center bg-opacity-10 hover:bg-light-purple h-full transition duration-500" target="_blank">
                            <div className="text-black h-full mt-4">Discord</div>
                    </NavLink>

                </Popover.Group>
            </nav>

            <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
                <div className="fixed inset-0 " />
                <Dialog.Panel className="fixed inset-y-0 right-0 z-20 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1">
                    <div className="flex items-center justify-between">
                        <a href="#" className="-m-1.5 p-1.5">
                        <span className="mt-4 text-purple text-2xl font-bold ">UWB Hacks 2023</span>
                            {/*<img*/}
                            {/*    className="h-8 w-auto"*/}
                            {/*    src=""*/}
                            {/*    alt="Uwb Hacks 23"*/}
                            {/*/>*/}
                        </a>
                        <button
                            type="button"
                            className="-m-2.5 rounded-md p-2.5  hover:bg-light-purple"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            <span className="sr-only">Close menu</span>
                            <XMarkIcon className="h-6 w-6  rounded" aria-hidden="true" />
                        </button>
                    </div>
                    <div className="mt-6 flow-root">
                        <div className="-my-6 divide-y divide-gray-500/10">
                            <div className="space-y-2 py-6">
                                <Link
                                    to="aboutSection"
                                    smooth={'easeInOutQuint'}
                                    duration={200}
                                    offset={0}
                                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 hover:text-yellow cursor-pointer"
                                    onClick={handleCloseMenu}
                                >
                                    About
                                </Link>
                                <Link
                                    to="trackSection"
                                    smooth={'easeInOutQuint'}
                                    duration={200}
                                    offset={-10}
                                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 hover:text-yellow cursor-pointer"
                                    onClick={handleCloseMenu}
                                >
                                    Tracks
                                </Link>
                                {/*<Link*/}
                                {/*    to="schedule"*/}
                                {/*    smooth={'easeInOutQuint'}*/}
                                {/*    duration={200}*/}
                                {/*    offset={-10}*/}
                                {/*    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 hover:text-yellow cursor-pointer"*/}
                                {/*    onClick={handleCloseMenu}*/}
                                {/*>*/}
                                {/*    Schedule*/}
                                {/*</Link>*/}
                                <Link
                                    to="faqSection"
                                    smooth={'easeInOutQuint'}
                                    duration={200}
                                    offset={-10}
                                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 hover:text-yellow cursor-pointer"
                                    onClick={handleCloseMenu}
                                >
                                    FAQ
                                </Link>
                                <NavLink
                                    to="/uwb-hacks23/Contact"
                                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 hover:text-yellow"
                                    onClick={handleCloseMenu}
                                >
                                    Contact
                                </NavLink>

                                {/*                                 <NavLink
                                    to="/uwb-hacks23/Registration"
                                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 hover:text-yellow"
                                    onClick={handleCloseMenu}
                                >
                                    Registration
                                </NavLink>*/}
                                <NavLink
                                    to="https://uwb-acm-hacks-in-person.devpost.com"
                                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 hover:text-yellow"
                                    onClick={handleCloseMenu}
                                    target="_blank"
                                >
                                    Devpost
                                </NavLink>
                                <NavLink
                                    to="https://discord.gg/aADBZChg2s"
                                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 hover:text-yellow"
                                    onClick={handleCloseMenu}
                                    target="_blank"
                                >
                                    Discord
                                </NavLink>
                            </div>
                        </div>
                    </div>
                </Dialog.Panel>
            </Dialog>
        </header>
    )
}
