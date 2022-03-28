import React from "react";
import TextInput from "../widgets/TextInput";
import Button from "../widgets/Button";
import Footer from "../widgets/Footer";

const RegisterBoy = () => {
    return (
        <div className="w-full pt-8 flex flex-col justify-center items-center bg-gray-100">
            <div className="w-4/12 p-6 border flex flex-col items-center shadow-sm rounded mb-6 bg-white">
                <span className="font-heading text-5xl mb-3">SBC</span>
                <span className="text-sm font-medium mb-6">
                    Register your boy
                </span>

                <div className="w-full p-4 text-orange-500 font-heading text-lg text-center">
                    Parent's details
                </div>

                <div className="mb-6 w-9/12">
                    <TextInput
                        placeholder="Firstname"
                        label="Firstname"
                        type="text"
                    />
                </div>

                <div className="mb-6 w-9/12">
                    <TextInput
                        placeholder="Lastname"
                        label="Lastname"
                        type="text"
                    />
                </div>

                <div className="mb-6 w-9/12">
                    <TextInput
                        placeholder="Phone"
                        label="Phone"
                        type="number"
                    />
                </div>

                <div className="w-full p-4 text-orange-500 font-heading text-lg text-center">
                    Boy's details
                </div>

                <div className="mb-6 w-9/12">
                    <TextInput
                        placeholder="Firstname"
                        label="Firstname"
                        type="text"
                    />
                </div>

                <div className="mb-6 w-9/12">
                    <TextInput
                        placeholder="Lastname"
                        label="Lastname"
                        type="text"
                    />
                </div>

                <div className="mb-6 w-9/12">
                    <Button label="Submit" />
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default RegisterBoy;
