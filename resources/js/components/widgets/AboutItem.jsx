import React from "react";

const AboutItem = ({ about }) => {
    return (
        <div className="flex flex-row p-6 justify-between items-center">
            {/* Heading */}
            <div className="w-1/2 font-heading text-4xl text-gray-700 p-6">
                <div>
                    <div>{about.title}</div>
                    {/* <div className="w-10 h-1 bg-orange-400 mt-4"></div> */}
                </div>
            </div>
            {/* Explanation */}
            <div className="w-1/2 text-gray-500 p-6 text-lg bg-white rounded">
                {about.body}
            </div>
        </div>
    );
};

export default AboutItem;
