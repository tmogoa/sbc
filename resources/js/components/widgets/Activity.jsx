import React, { useContext } from "react";
import { AppContext } from "../util/AppContext";
import { BsCheck2All, BsClock } from "react-icons/bs";
import colors from "../../../assets/colors";
import { format, parse, isFuture } from "date-fns";
import { RiDeleteBin7Line } from "react-icons/ri";
import { BiEditAlt } from "react-icons/bi";

const Activity = ({ data, deleteActivity, updateActivity, edit }) => {
    const { user } = useContext(AppContext);
    const when = parse(data.when, "yyyy-MM-dd HH:mm:ss", new Date());
    return (
        <div className="">
            {user && edit && (
                <div className="px-4 py-2 flex flex-row-reverse gap-2 border border-gray-300">
                    <div
                        className="p-2 rounded-full hover:bg-red-200 active:bg-red-300"
                        onClick={() => deleteActivity(data.id)}
                    >
                        <RiDeleteBin7Line size={25} color={colors.red} />
                    </div>
                    <div
                        className="p-2 rounded-full hover:bg-orange-200 active:bg-orange-300"
                        onClick={() => updateActivity(data)}
                    >
                        <BiEditAlt size={25} color={colors.orange} />
                    </div>
                </div>
            )}
            <div className="p-4 relative flex flex-col">
                <img
                    src={data.featured_img}
                    alt=""
                    className="object-cover w-80 h-56"
                />
                <div
                    className={`absolute top-8 right-16 text-white text-sm font-medium z-30 rounded shadow ${
                        !isFuture(when) ? "bg-red-500" : "bg-green-500"
                    } px-4 py-2 flex flex-row items-center gap-2`}
                >
                    {!isFuture(when) ? (
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
                <span className="text-gray-500 p-1 font-medium text-sm">
                    {format(when, "MMM do, yyyy h:mm bbb")}
                </span>
                <span className="text-orange-400 text-xl p-1 font-heading">
                    {data.label}
                </span>

                <span className="text-gray-600 h-24 text-sm text-ellipsis whitespace-normal p-2">
                    {data.description}
                </span>
            </div>
        </div>
    );
};

export default Activity;
