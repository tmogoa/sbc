import React from "react";
import Footer from "../widgets/Footer";
import Navbar from "../widgets/Navbar";
const BoysCorner = () => {
    return (
        <div className="w-full flex flex-col">
            <div className="flex flex-col h-[32rem] w-full bg-[url('../assets/img/4.jpg')] bg-cover">
                <Navbar />
                <div
                    className="flex-grow flex flex-row items-center p-10 gap-10 text-white bg-gray-800 bg-opacity-70 
"
                >
                    <div className="font-heading text-7xl w-6/12">
                        Boy's Corner
                    </div>
                </div>
            </div>
            <div className="flex flex-col bg-gray-100 p-6"></div>
            <Footer />
        </div>
    );
};

export default BoysCorner;
