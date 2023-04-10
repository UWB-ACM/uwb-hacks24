import React, {useCallback, useRef} from 'react';
import Particles from "react-particles";
import options from "../Home/particleConfig";
import {loadFull} from "tsparticles";

function Register() {
    const form = useRef();

    const particlesInit = useCallback(async (engine) => {
        await loadFull(engine);
    }, []);

    return (
        <div className="overflow-hidden flex flex-col items-center justify-center">
            <Particles className="particles" options={options} init={particlesInit} />
            <div className="flex shadow-md overflow-hidden border-1 rounded-xl mx-auto mt-5 flex-col sm:w-1/2 bg-light-purple">
                <form ref={form} className="w-full px-5 py-3">
                    <div className="font-SecularOne block text-3xl font-medium leading-6 text-white pt-1 drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] mb-3 text-center"> REGISTRATION </div>
                    <label htmlFor="name" className="font-SecularOne block text-3xl font-medium leading-6 text-white  pt-3">
                        First Name: *
                    </label>
                    <input type="text" name="first_name" placeholder="First Name" className="relative mt-2 rounded-md shadow-sm border-1 text-xl w-full"/>

                    <label htmlFor="name" className="font-SecularOne block text-3xl font-medium leading-6 text-white  pt-3">
                        Last Name: *
                    </label>
                    <input type="text" name="last_name" placeholder="Last Name" className="relative mt-2 rounded-md shadow-sm border-1 text-xl w-full"/>

                    <label htmlFor="age" className="font-SecularOne block text-3xl font-medium leading-6 text-white pt-4">
                        Age: *
                    </label>
                    <input type="number" name="age" placeholder="Age" className="relative mt-2 rounded-md shadow-sm border-1 text-xl w-full"/>

                    <label htmlFor="email" className="font-SecularOne block text-3xl font-medium leading-6 text-white pt-4">
                        Email: *
                    </label>
                    <input type="email" name="user_email" placeholder="Email" className="relative mt-2 rounded-md shadow-sm border-1 text-xl w-full"/>

                    <label htmlFor="race" className="font-SecularOne block text-3xl font-medium leading-6 text-white pt-4">
                        Race/Ethnicity
                    </label>
                    <input type="text" name="race/ethnicity" className="relative mt-2 rounded-md shadow-sm border-1 text-xl w-full"/>

                    <label htmlFor="gender" className="font-SecularOne block text-3xl font-medium leading-6 text-white pt-4">
                        Gender:
                    </label>
                    <select id="gender" name="gender" className="relative mt-2 rounded-md shadow-sm border-1 text-xl w-full">
                        <option value="male">
                            Male
                        </option>
                        <option value="female">
                            Female
                        </option>
                        <option value="non-binary">
                            Non-binary
                        </option>
                        <option value="other">
                            Other
                        </option>
                        <option value="prefer not to say" selected>
                            Prefer not to say
                        </option>
                    </select>

                    <label htmlFor="occupation" className="font-SecularOne block text-3xl font-medium leading-6 text-white pt-4">
                        Occupation: *
                    </label>
                    <select id="occupation" name="occupation" className="relative mt-2 rounded-md shadow-sm border-1 text-xl w-full">
                        <option value="high school student">
                            High School Student
                        </option>
                        <option value="undergrad student" selected>
                            Undergraduate Student
                        </option>
                        <option value="graduate student">Graduate Student</option>
                        <option value="working professional">
                            Working Professional
                        </option>
                        <option value="Other">
                            Other
                        </option>
                    </select>
                    <label htmlFor="school" className="font-SecularOne block text-3xl font-medium leading-6 text-white pt-4">
                        School: *
                    </label>
                    <select id="school" name="school" className="relative mt-2 rounded-md shadow-sm border-1 text-xl w-full">
                        <option value="UW Bothell" selected>
                            UW Bothell
                        </option>
                        <option value="UW Seattle">
                            UW Seattle
                        </option>
                        <option value="UW Tacoma">
                            UW Tacoma
                        </option>
                    </select>
                    <label htmlFor="Institutional Affiliation" className="font-SecularOne block text-3xl font-medium leading-6 text-white pt-4">
                        Institutional Affiliation (School, Employer...)
                    </label>
                    <input type="email" name="user_email" className="relative mt-2 rounded-md shadow-sm border-1 text-xl w-full"/>
                    <label htmlFor="team" className="font-SecularOne block text-3xl font-medium leading-6 text-white pt-4">
                        Do you have a team? *
                    </label>
                    <select id="team" name="team options" className="relative mt-2 rounded-md shadow-sm border-1 text-xl w-full">
                        <option value="yes">
                            Yes
                        </option>
                        <option value="no">
                            No
                        </option>
                        <option value="solo">
                            Solo
                        </option>
                    </select>

                    <label htmlFor="hear" className="font-SecularOne block text-3xl font-medium leading-6 text-white pt-4">
                        How did you hear about us? *
                    </label>
                    <select id="hear" name="hear about" className="relative mt-2 rounded-md shadow-sm border-1 text-xl w-full">
                        <option value="discord">
                            Discord
                        </option>
                        <option value="word of mouth">
                            Word of Mouth
                        </option>
                        <option value="acm officers">
                            Acm Officers
                        </option>
                        <option value="professors">
                            Professors
                        </option>
                        <option value="email">
                            Email
                        </option>
                        <option value="linkedIn">
                            LinkedIn
                        </option>
                        <option value="news letter">
                            News Letter
                        </option>
                        <option value="other">
                            Other
                        </option>
                    </select>

                    <div className="pt-4 pb-2">
                        <button
                            className="bg-white text-blue-700 font-semibold py-2 px-4 rounded w-full">
                            <input type="submit" value="Register" className="text-2xl"/>
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Register;
