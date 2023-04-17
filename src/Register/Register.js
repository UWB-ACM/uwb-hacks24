import React, {useCallback, useState} from 'react';
import Particles from "react-particles";
import options from "../Home/particleConfig";
import {loadFull} from "tsparticles";

function Register() {
    const [formData, setFormData] = useState(new FormData());

    // default values for select
    formData.append("gender", "male");
    formData.append("school", "UW Bothell");
    formData.append("occupation", "undergrad student");
    formData.append("team_options", "yes");
    formData.append("hear_about", "discord");

    const handleSubmit = (e) => {
        e.preventDefault();

        const scriptURL = 'https://script.google.com/macros/s/AKfycbzG7ZCma0GZ8kw66BWG48tD3sveEmdviXHeA3BOeYXF0Dq6FBJ-e25mvOaqS-U_655Kiw/exec';

        fetch(scriptURL, { method: 'POST', body: formData })
            .then(response => console.log('Success!', response))
            .catch(error => console.error('Error!', error.message));

        e.target.reset();
    }

    const handleInputChange = (e) => {
        const { name, value, type } = e.target;
        const inputValue = type === 'number' ? parseFloat(value) : value;
        setFormData(prevFormData => {
            const updatedFormData = new FormData(); // create a new FormData object
            // Loop through the entries of the previous FormData object and append them to the new FormData object
            for (let pair of prevFormData.entries()) {
                if (pair[0] === "") {
                    console.log(pair[0]);
                    updatedFormData.append(pair[0], pair.defaultValue);
                } else {
                    updatedFormData.append(pair[0], pair[1]);
                }
                console.log("hi");
            }
            updatedFormData.set(name, inputValue); // set the value of the changed input field
            return updatedFormData; // return the updated FormData object to update the state
        });
    }

    const particlesInit = useCallback(async (engine) => {
        await loadFull(engine);
    }, []);


    return (
        <div className="overflow-hidden flex flex-col items-center justify-center">
            <Particles className="particles" options={options} init={particlesInit} />
            <div className="flex shadow-md overflow-hidden border-1 rounded-xl mx-auto mt-5 flex-col sm:w-1/2 bg-light-purple">
                <form onSubmit={handleSubmit} name="submit-to-google-sheet" className="w-full px-5 py-3">
                    <div className="font-SecularOne block text-3xl font-medium leading-6 text-white pt-1 drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] mb-3 text-center"> REGISTRATION </div>
                    <label htmlFor="name" className="font-SecularOne block text-3xl font-medium leading-6 text-white  pt-3">
                        First Name: *
                    </label>
                    <input type="text" name="firstname" placeholder="First Name" className="relative mt-2 rounded-md shadow-sm border-1 text-xl w-full" required onChange={handleInputChange}/>

                    <label htmlFor="name" className="font-SecularOne block text-3xl font-medium leading-6 text-white  pt-3">
                        Last Name: *
                    </label>
                    <input type="text" name="lastname" placeholder="Last Name" className="relative mt-2 rounded-md shadow-sm border-1 text-xl w-full" required onChange={handleInputChange}/>

                    <label htmlFor="age" className="font-SecularOne block text-3xl font-medium leading-6 text-white pt-4">
                        Age: *
                    </label>
                    <input type="number" min="0" max="100" name="age" placeholder="Age" className="relative mt-2 rounded-md shadow-sm border-1 text-xl w-full" required onChange={handleInputChange}/>

                    <label htmlFor="email" className="font-SecularOne block text-3xl font-medium leading-6 text-white pt-4">
                        Email: *
                    </label>
                    <input type="email" name="email" placeholder="Email" className="relative mt-2 rounded-md shadow-sm border-1 text-xl w-full" required onChange={handleInputChange}/>

                    <label htmlFor="race" className="font-SecularOne block text-3xl font-medium leading-6 text-white pt-4">
                        Race/Ethnicity
                    </label>
                    <input type="text" name="race/ethnicity" className="relative mt-2 rounded-md shadow-sm border-1 text-xl w-full" onChange={handleInputChange}/>

                    <label htmlFor="gender" className="font-SecularOne block text-3xl font-medium leading-6 text-white pt-4">
                        Gender:
                    </label>
                    <select id="gender" name="gender" defaultValue="male" className="relative mt-2 rounded-md shadow-sm border-1 text-xl w-full" onChange={handleInputChange}>
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
                        <option value="prefer not to say">
                            Prefer not to say
                        </option>
                    </select>

                    <label htmlFor="occupation" className="font-SecularOne block text-3xl font-medium leading-6 text-white pt-4">
                        Occupation: *
                    </label>
                    <select id="occupation" name="occupation" defaultValue="undergrad student" className="relative mt-2 rounded-md shadow-sm border-1 text-xl w-full" required onChange={handleInputChange}>
                        <option value="high school student">
                            High School Student
                        </option>
                        <option value="undergrad student">
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
                    <input type="text" list="school" name="school" className="relative mt-2 rounded-md shadow-sm border-1 text-xl w-full" required onChange={handleInputChange}/>
                    <datalist id="school">
                        <option value="UW Bothell">
                            UW Bothell
                        </option>
                        <option value="UW Seattle">
                            UW Seattle
                        </option>
                        <option value="UW Tacoma">
                            UW Tacoma
                        </option>
                    </datalist>

                    <label htmlFor="Institutional Affiliation" className="font-SecularOne block text-3xl font-medium leading-6 text-white pt-4">
                        Institutional Affiliation (School, Employer...)
                    </label>
                    <input type="text" name="institution" className="relative mt-2 rounded-md shadow-sm border-1 text-xl w-full" onChange={handleInputChange}/>

                    <label htmlFor="team" className="font-SecularOne block text-3xl font-medium leading-6 text-white pt-4">
                        Do you have a team? *
                    </label>
                    <select id="team" name="team_options" defaultValue="yes" className="relative mt-2 rounded-md shadow-sm border-1 text-xl w-full" required onChange={handleInputChange}>
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
                    <select id="hear" name="hear_about" defaultValue="discord" className="relative mt-2 rounded-md shadow-sm border-1 text-xl w-full" onChange={handleInputChange}>
                        <option value="discord">
                            Discord
                        </option>
                        <option value="devpost">
                            Devpost
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
