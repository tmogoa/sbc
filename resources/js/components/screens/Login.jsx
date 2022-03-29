import React, { useEffect } from "react";
import TextInput from "../widgets/TextInput";
import Button from "../widgets/Button";
import { Link } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";
import colors from "../../../assets/colors";
import axios from "axios";

const Login = () => {
    useEffect(() => {
        axios
            .post("/api/login")
            .then((resp) => console.log(resp.data))
            .catch((err) => console.log(err.response));
    }, []);

    return (
        <div className="w-full h-screen flex flex-col justify-center items-center bg-gray-100">
            <div className="w-4/12 p-6 border flex flex-col items-center shadow-sm rounded mb-6 bg-white">
                <span className="font-heading text-5xl mb-3">SBC</span>
                <span className="text-sm font-medium mb-6">Admin Login</span>

                <div className="mb-6 w-9/12">
                    <TextInput
                        placeholder="Email address"
                        label="Email"
                        type="text"
                    />
                </div>

                <div className="mb-8 w-9/12">
                    <TextInput
                        placeholder="Enter password"
                        label="Password"
                        type="password"
                    />
                </div>

                <div className="mb-6 w-9/12">
                    <Button label="Login" />
                </div>
            </div>
            <div className="w-4/12 flex flex-row items-center justify-end border bg-gray-50 p-4 shadow">
                <div className="flex flex-row items-center p-2 gap-2 border border-gray-50 hover:border-gray-200 rounded text-gray-600">
                    <Link to="/adminregister">Register</Link>
                    <BsArrowRight color={colors.black} size={16} />
                </div>
            </div>
        </div>
    );
};

export default Login;
