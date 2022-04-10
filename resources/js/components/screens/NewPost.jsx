import React from "react";
import Navbar from "../widgets/Navbar";
import TextEditor from "../widgets/Editor";
import Button from "../widgets/Button";
import TextInput from "../widgets/TextInput";

const NewPost = () => {
    return (
        <div className="w-full flex flex-col">
            <div className="bg-[url('../assets/img/3.jpg')] bg-cover">
                <Navbar />
            </div>
            <div className="flex flex-row-reverse justify-between items-center p-6">
                {/* <div className="font-heading text-3xl text-gray-700 p-6">
                    New Post for Boy's Corner
                </div> */}
                <div>
                    <Button label="Publish" />
                </div>
            </div>
            <div className="flex flex-col p-6">
                <div className="px-6 mb-5 flex flex-row gap-4">
                    <div className="flex-grow">
                        <TextInput label="Title" />
                    </div>
                    <div>
                        <TextInput label="Author" />
                    </div>
                </div>
                <TextEditor />
            </div>
        </div>
    );
};

export default NewPost;
