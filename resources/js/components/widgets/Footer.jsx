import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <div className="flex flex-col w-full">
            <div className="flex flex-row p-6 justify-around items-start text-sm">
                {/* Logo */}
                <div className="p-6 flex justify-center items-center h-full">
                    <div className="font-heading text-8xl  text-center text-orange-400">
                        SBC
                    </div>
                </div>
                {/* Patners */}
                <div className="flex flex-col items-center justify-start p-6">
                    <div className="font-heading text-orange-400 text-2xl w-full">
                        OUR PATNERS
                    </div>
                    <div className="text-gray-700 font-medium flex flex-col gap-1 p-2 w-full">
                        <a
                            href="https://www.sudek.org/"
                            className="hover:text-orange-400"
                        >
                            - Sudek Study Centre
                        </a>
                        <a
                            href="https://mbagathistudycentre.org/"
                            className="hover:text-orange-400"
                        >
                            - Mbagathi Study Centre
                        </a>
                        <a
                            href="https://junior.hodariclub.or.ke/"
                            className="hover:text-orange-400"
                        >
                            - Hodari Boys Club
                        </a>
                        <a
                            href="https://satima.org/"
                            className="hover:text-orange-400"
                        >
                            - Satima Study Centre
                        </a>
                    </div>
                </div>
                {/* Links */}
                <div className="flex flex-col items-center justify-start p-6">
                    <div className="font-heading text-orange-400 text-2xl w-full">
                        USEFUL LINKS
                    </div>
                    <div className="text-gray-700 font-medium flex flex-col gap-1 p-2 w-full">
                        <Link to="/" className="hover:text-orange-400">
                            - Home
                        </Link>
                        <Link
                            to="/register-boy"
                            className="hover:text-orange-400"
                        >
                            - Register
                        </Link>
                        <Link to="/about" className="hover:text-orange-400">
                            - About
                        </Link>
                        <Link to="/contact-us" className="">
                            - Contact us
                        </Link>
                    </div>
                </div>
            </div>
            <div className="p-4 text-center text-gray-700 font-medium  bg-gray-200 border-orange-400 text-sm">
                Copyright ©2021 SBC
            </div>
        </div>
    );
};

export default Footer;
