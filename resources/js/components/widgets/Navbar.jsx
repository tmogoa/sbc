import React from "react";
import { Link } from "react-router-dom";
import UserBar from "./UserBar";

const Navbar = () => {
    return (
        <div className="flex flex-row p-5 z-30 shadow text-white bg-opacity-70 bg-gray-600 items-center gap-4">
            <div className="font-heading text-5xl w-2/12 text-center">
                <Link to="/">SBC</Link>
            </div>
            <div className="flex-grow flex flex-row gap-6 text-base">
                <Link to="/">
                    <div className="px-4 rounded-3xl py-2 text-center hover:bg-orange-400 cursor-pointer">
                        Home
                    </div>
                </Link>
                <Link to="/activities">
                    <div className="px-4 rounded-3xl py-2 text-center hover:bg-orange-400 cursor-pointer">
                        Activities
                    </div>
                </Link>
                <Link to="/register-boy">
                    <div className="px-4 rounded-3xl py-2 text-center hover:bg-orange-400 cursor-pointer">
                        Register
                    </div>
                </Link>
                <Link to="/boys-corner">
                    <div className="px-4 rounded-3xl py-2 text-center hover:bg-orange-400 cursor-pointer">
                        Boy's Corner
                    </div>
                </Link>
                <Link to="/about">
                    <div className="px-4 rounded-3xl py-2 text-center hover:bg-orange-400 cursor-pointer">
                        About
                    </div>
                </Link>
                <Link to="/contact-us">
                    <div className="px-4 rounded-3xl py-2 text-center hover:bg-orange-400 cursor-pointer">
                        Contact us
                    </div>
                </Link>
            </div>
            <div className="w-2/12 flex justify-end">
                <UserBar />
            </div>
        </div>
    );
};

export default Navbar;
