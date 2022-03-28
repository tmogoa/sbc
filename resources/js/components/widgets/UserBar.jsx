import React from "react";
import { HiOutlineChevronDown } from "react-icons/hi";
import colors from "../../../assets/colors";
import { BsPerson } from "react-icons/bs";

const UserBar = () => {
    return (
        <div className="flex flex-row items-center text-gray-700 py-3 px-4 gap-3 border z-40 shadow rounded bg-white hover:bg-gray-100 cursor-pointer">
            <BsPerson size={22} color={colors.black} />

            <div>
                <span className="text-xs font-medium">Elly Okinyo</span>
            </div>
            <div>
                <HiOutlineChevronDown size={14} color={colors.black} />
            </div>
        </div>
    );
};

export default UserBar;
