import React from "react";
import bg from "../../../assets/img/bg.jpg";
import { BsCheck2All, BsClock } from "react-icons/bs";
import colors from "../../../assets/colors";

const Activity = ({ data }) => {
    return (
        <div className="">
            <div className="overflow-hidden p-4 relative">
                <img src={bg} alt="" className="object-cover" />
                <div
                    className={`absolute top-10 right-6 text-white text-sm font-medium z-30 rounded shadow ${
                        data.past ? "bg-red-500" : "bg-green-500"
                    } px-4 py-2 flex flex-row items-center gap-2`}
                >
                    {data.past ? (
                        <>
                            <span>
                                <BsCheck2All size={20} color={colors.white} />
                            </span>
                            <span>Past</span>
                        </>
                    ) : (
                        <>
                            <span>
                                <BsClock size={20} color={colors.white} />
                            </span>
                            <span>Future</span>
                        </>
                    )}
                </div>
            </div>
            <div className="flex flex-col p-4">
                <span className="text-orange-400 text-xl p-1 font-heading">
                    {data.title}
                </span>
                <span className="text-gray-600 h-24 text-sm text-ellipsis whitespace-normal p-2">
                    {data.body}
                </span>
            </div>
        </div>
    );
};

export default Activity;
