import React, { useState } from "react";
import AboutItem from "../widgets/AboutItem";
import Footer from "../widgets/Footer";
import Navbar from "../widgets/Navbar";

const About = () => {
    const [abouts, setAbouts] = useState([
        {
            title: "Mission",
            body: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore, sint. Repudiandae unde, quam qui quasi voluptatibus ducimus eligendi, soluta ea quas corrupti, officiis tenetur culpa iusto ratione voluptatem doloribus itaque.",
        },
        {
            title: "Vision",
            body: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore, sint. Repudiandae unde, quam qui quasi voluptatibus ducimus eligendi, soluta ea quas corrupti, officiis tenetur culpa iusto ratione voluptatem doloribus itaque.",
        },
        {
            title: "About Us",
            body: "Sudek Boys Club (SBC) is a Family Club run by a group of Nairobi parents whose aim is to help their sons grow into young men of character through constructive use of their free time on weekends and school holidays.",
        },
        {
            title: "Club Membership",
            body: "The Club is open to boys 7-13 years old (the boy should be turning at least 7 years old in the year he joins the club). Its Saturday activities run from 8.45 am to 2.30 pm. Holiday activities will be indicated in the respective holiday planner will be sent out to members and their parents.",
        },
        {
            title: "To become a member",
            body: (
                <>
                    <div className="mb-2">
                        a) The parents need to register by sending an email to
                        sudek.boysclub@gmail.com and then fill in the
                        registration form that will be sent by a representative
                        of the Club Coordinators.
                    </div>
                    <div>
                        b) The boy attends activities for at least one Saturday,
                        parents can then decide with the boy whether SBC is
                        indeed what they are after and petition for membership.
                    </div>
                </>
            ),
        },
        {
            title: "Club Membership Fees",
            body: " This will be communicated in due course. In the meantime, we will be charging the boys for each activity.",
        },
    ]);
    return (
        <div className="w-full flex flex-col">
            <div className="flex flex-col h-[32rem] w-full bg-[url('../assets/img/1.jpg')] bg-cover">
                <Navbar />
                <div
                    className="flex-grow flex flex-row justify-around items-center p-10 gap-10 text-white bg-gray-800 bg-opacity-70 
                "
                >
                    <div className="font-heading text-7xl w-6/12">About Us</div>
                    <div className="w-6/12 p-6 flex justify-end flex-col h-full">
                        <div className="w-10 h-1 bg-orange-400 mb-4"></div>
                        <div className="text-lg text-gray-200">
                            Sudek Boys Club (SBC) is a Family Club run by a
                            group of Nairobi parents whose aim is to help their
                            sons grow into young men of character through
                            constructive use of their free time on weekends and
                            school holidays.
                        </div>
                    </div>
                </div>
            </div>
            {/* More */}
            <div className="flex flex-col p-12 gap-20  bg-gray-100">
                {abouts.map((about, index) => (
                    <AboutItem key={index} about={about} />
                ))}
            </div>
            <Footer />
        </div>
    );
};

export default About;
