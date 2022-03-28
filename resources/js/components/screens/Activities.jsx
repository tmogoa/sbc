import React, { useState } from "react";
import Footer from "../widgets/Footer";
import Navbar from "../widgets/Navbar";
import Activity from "../widgets/Activity";

const Activities = () => {
    const [acts, setActs] = useState([
        {
            title: "Ngong Forest Hike",
            body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum quod vitae, officiis.  Earum quod vitae, officiis.  Earum quod vitae, officiis.  Earum quod vitae, officiis.",
            past: false,
        },
        {
            title: "Ngong Forest Hike",
            body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum quod vitae, officiis.  Earum quod vitae, officiis.  Earum quod vitae, officiis.  Earum quod vitae, officiis.",
            past: true,
        },
        {
            title: "Ngong Forest Hike",
            body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum quod vitae, officiis.  Earum quod vitae, officiis.  Earum quod vitae, officiis.  Earum quod vitae, officiis.",
            past: true,
        },
    ]);
    return (
        <div className="w-full flex flex-col">
            <div className="flex flex-col h-[32rem] w-full bg-[url('../assets/img/3.jpg')] bg-cover">
                <Navbar />
                <div
                    className="flex-grow flex flex-row items-center p-10 gap-10 text-white bg-gray-800 bg-opacity-70 
"
                >
                    <div className="font-heading text-7xl w-6/12">
                        Activities
                    </div>
                </div>
            </div>
            <div className="flex flex-col bg-gray-100 p-6">
                <div className="mt-4 p-6 flex-grow grid grid-flow-row grid-cols-3 gap-y-16 gap-x-16">
                    {acts.map((act, index) => (
                        <Activity key={index} data={act} />
                    ))}
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Activities;
