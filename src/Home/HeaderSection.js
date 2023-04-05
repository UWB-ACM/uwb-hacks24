import "./Home.css"
import CountDownTimer from "./CountDownTimer";

export default function HeaderSection() {
    return (
        <>
            <CountDownTimer/>
            <div className="h-screen mx-auto py-32 sm:py-48 lg:py-56">
                <div className="text-center">
                    <h1 className="text-5xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                        UWB
                        <span> </span>
                        <span className="magic">
                            <span className="magic-star">
                                <svg viewBox="0 0 512 512">
                                    <path
                                        d="M512 255.1c0 11.34-7.406 20.86-18.44 23.64l-171.3 42.78l-42.78 171.1C276.7 504.6 267.2 512 255.9 512s-20.84-7.406-23.62-18.44l-42.66-171.2L18.47 279.6C7.406 276.8 0 267.3 0 255.1c0-11.34 7.406-20.83 18.44-23.61l171.2-42.78l42.78-171.1C235.2 7.406 244.7 0 256 0s20.84 7.406 23.62 18.44l42.78 171.2l171.2 42.78C504.6 235.2 512 244.6 512 255.1z"/>
                                </svg>
                            </span>
                            <span className="magic-star">
                                <svg viewBox="0 0 512 512">
                                    <path
                                        d="M512 255.1c0 11.34-7.406 20.86-18.44 23.64l-171.3 42.78l-42.78 171.1C276.7 504.6 267.2 512 255.9 512s-20.84-7.406-23.62-18.44l-42.66-171.2L18.47 279.6C7.406 276.8 0 267.3 0 255.1c0-11.34 7.406-20.83 18.44-23.61l171.2-42.78l42.78-171.1C235.2 7.406 244.7 0 256 0s20.84 7.406 23.62 18.44l42.78 171.2l171.2 42.78C504.6 235.2 512 244.6 512 255.1z"/>
                                </svg>
                            </span>
                            <span className="magic-star">
                                <svg viewBox="0 0 512 512">
                                <path
                                    d="M512 255.1c0 11.34-7.406 20.86-18.44 23.64l-171.3 42.78l-42.78 171.1C276.7 504.6 267.2 512 255.9 512s-20.84-7.406-23.62-18.44l-42.66-171.2L18.47 279.6C7.406 276.8 0 267.3 0 255.1c0-11.34 7.406-20.83 18.44-23.61l171.2-42.78l42.78-171.1C235.2 7.406 244.7 0 256 0s20.84 7.406 23.62 18.44l42.78 171.2l171.2 42.78C504.6 235.2 512 244.6 512 255.1z"/>
                                </svg>
                            </span>
                            <span className="magic-text">
                                Hacks in Person
                            </span>
                        </span>
                    </h1>
                </div>
                <div className="flex flex-col items-center justify-center mt-5">
                    <div
                        className="inline-flex items-center justify-center border-2 border-gray-900 rounded-full p-2 w-1/4">
                        <span className="text-lg font-medium text-gray-900">May 5th - 7th</span>
                        <span className="text-lg text-gray-900 mx-2">&middot;</span>
                        <span className="text-lg font-medium text-gray-900">UWB</span>
                    </div>
                </div>
            </div>
        </>
    );
}
