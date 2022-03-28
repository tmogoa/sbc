import React from "react";
import Footer from "../widgets/Footer";
import Navbar from "../widgets/Navbar";

const ContactUs = () => {
    return (
        <div className="w-full flex flex-col">
            <div className="flex flex-col h-[32rem] w-full bg-[url('../assets/img/2.jpg')] bg-cover">
                <Navbar />
                <div
                    className="flex-grow flex flex-row items-center p-10 gap-10 text-white bg-gray-800 bg-opacity-70 
        "
                >
                    <div className="font-heading text-7xl w-6/12">
                        Contact Us
                    </div>
                </div>
            </div>
            <div className="flex flex-col bg-gray-100 p-6">
                <div className="mb-4 p-6">
                    <div className="font-heading text-gray-700 text-xl mb-2">
                        Address
                    </div>
                    <div className="text-gray-600">
                        Siwaka Estate, Ole Sangale Road, Madaraka, Nairobi
                    </div>
                </div>
                <div className="mb-4 p-6">
                    <div className="font-heading text-gray-700 text-xl mb-2">
                        Telephone
                    </div>
                    <div className="text-gray-600">+254 707 700744</div>
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default ContactUs;
