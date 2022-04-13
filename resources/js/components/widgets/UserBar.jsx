import React, { useContext, useState } from "react";
import { AppContext } from "../util/AppContext";
import { HiOutlineChevronDown } from "react-icons/hi";
import colors from "../../../assets/colors";
import { BsPerson } from "react-icons/bs";
import Button from "./Button";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const UserBar = () => {
    const navigate = useNavigate();
    const { user, deleteSession, setLoaderHidden } = useContext(AppContext);
    const [dropdownVisible, setDropdownVisible] = useState(false);

    document.addEventListener("click", () => {
        if (dropdownVisible) {
            setDropdownVisible(false);
        }
    });

    if (user) {
        return (
            <div
                className="flex flex-row items-center text-gray-700 py-3 px-4 gap-3 border z-40 shadow rounded bg-white hover:bg-gray-100 cursor-pointer"
                onClick={toggleShow}
            >
                <BsPerson size={22} color={colors.black} />

                <div>
                    <span className="text-xs font-medium">
                        {user.user.name}
                    </span>
                </div>
                <div>
                    <HiOutlineChevronDown size={14} color={colors.black} />
                </div>
                <div
                    className={`absolute w-44 h-20 bg-white rounded shadow top-20 p-4 right-5 z-30 ${
                        !dropdownVisible && "hidden"
                    }`}
                >
                    <Button label="Logout" onClick={logout} />
                </div>
            </div>
        );
    }

    return null;

    function toggleShow(e) {
        e.preventDefault();
        e.stopPropagation();
        setDropdownVisible(!dropdownVisible);
    }

    function logout() {
        setLoaderHidden(false);
        const config = {
            headers: { Authorization: `Bearer ${user.token}` },
        };
        axios
            .post("api/logout", {}, config)
            .then((resp) => {
                deleteSession();
                setLoaderHidden(true);

                navigate("/");
            })
            .catch((err) => {
                setLoaderHidden(true);
            });
    }
};

export default UserBar;
