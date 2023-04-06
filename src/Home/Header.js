import React, { useState } from 'react'
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

export default function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

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
            <header className="h-20 flex justify-end">
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
        )
    }

    return (
        <header className="bg-white">
            <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
                <div className="flex lg:flex-1 -m-1.5 p-1.5">
                    <span className="sr-only">UWB Hacks</span>
                    <img className="h-8 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="UWB Hacks Logo" />
                </div>
                <div className="flex lg:hidden">
                    <button
                        type="button"
                        className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                        onClick={() => setMobileMenuOpen(true)}
                    >
                        <span className="sr-only">Open main menu</span>
                        <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                    </button>
                </div>

                <Popover.Group className="hidden lg:flex lg:gap-x-12">
                    <NavLink to="/uwb-hacks23" className="text-sm font-semibold leading-6 text-gray-900">
                        Home
                    </NavLink>
                    <NavLink to="/uwb-hacks23/Registration" className="text-sm font-semibold leading-6 text-gray-900">
                        Registration
                    </NavLink>
                    <NavLink to="/uwb-hacks23/Contact" className="text-sm font-semibold leading-6 text-gray-900">
                        Contact
                    </NavLink>
                    <Link to="faqSection"
                          smooth={'easeInOutQuint'}
                          duration={200}
                          offset={-10}
                          className="text-sm font-semibold leading-6 text-gray-900 cursor-pointer">
                        FAQ
                    </Link>
                    <div className="hidden lg:flex lg:flex-1 lg:justify-end">
                        <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
                            Log In
                        </a>
                    </div>
                </Popover.Group>
            </nav>

            <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
                <div className="fixed inset-0 z-10" />
                <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                    <div className="flex items-center justify-between">
                        <a href="#" className="-m-1.5 p-1.5">
                            <span className="sr-only">Your Company</span>
                            <img
                                className="h-8 w-auto"
                                src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                                alt=""
                            />
                        </a>
                        <button
                            type="button"
                            className="-m-2.5 rounded-md p-2.5 text-gray-700"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            <span className="sr-only">Close menu</span>
                            <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                        </button>
                    </div>
                    <div className="mt-6 flow-root">
                        <div className="-my-6 divide-y divide-gray-500/10">
                            <div className="space-y-2 py-6">
                                <NavLink
                                    to="/uwb-hacks23"
                                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                    onClick={handleCloseMenu}
                                >
                                    Home
                                </NavLink>
                                <NavLink
                                    to="/uwb-hacks23/Registration"
                                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                    onClick={handleCloseMenu}
                                >
                                    Registration
                                </NavLink>
                                <NavLink
                                    to="/uwb-hacks23/Contact"
                                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                    onClick={handleCloseMenu}
                                >
                                    Contact
                                </NavLink>
                                <Link
                                    to="faqSection"
                                    smooth={'easeInOutQuint'}
                                    duration={200}
                                    offset={-10}
                                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                    onClick={handleCloseMenu}
                                >
                                    FAQ
                                </Link>
                                <div className="py-6">
                                    <a
                                        href="#"
                                        className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                    >
                                        Log in
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </Dialog.Panel>
            </Dialog>
        </header>
    )
}
