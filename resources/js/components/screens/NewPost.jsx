import React, { useState, useEffect, useContext } from "react";
import { AppContext } from "../util/AppContext";
import Navbar from "../widgets/Navbar";
import TextEditor from "../widgets/Editor";
import Button from "../widgets/Button";
import TextInput from "../widgets/TextInput";
import { convertToRaw, EditorState } from "draft-js";
import { useParams } from "react-router-dom";
import axios from "axios";
import { convertFromRaw } from "draft-js";
import Modal from "../widgets/Modal";
import { IoCloseOutline } from "react-icons/io5";

const NewPost = () => {
    const { user, setLoaderHidden } = useContext(AppContext);
    const [title, setTitle] = useState("Untitled");
    const [author, setAuthor] = useState("Unknown author");
    const [editorState, onEditorStateChange] = useState(
        EditorState.createEmpty()
    );
    const [timeoutId, setTimeoutId] = useState(null);
    const [saveStatus, setSaveStatus] = useState("");
    const [modalHidden, setModalHidden] = useState(true);
    const [publishStatus, setPublishStatus] = useState(null);
    const [imgUrls, setImgUrls] = useState([]);
    const params = useParams();

    useEffect(() => {
        getPostData();
    }, []);

    useEffect(() => {
        if (timeoutId) {
            clearTimeout(timeoutId);
        }

        const newTimeoutId = setTimeout(() => {
            autosave();
        }, 1000);

        setTimeoutId(newTimeoutId);
    }, [editorState, title, author]);

    function getPostData() {
        axios
            .get(`/api/blogposts/${params.postId}`)
            .then((resp) => {
                console.log(resp.data);
                setTitle(resp.data.title);
                setAuthor(resp.data.author);
                setPublishStatus(resp.data.status);
                const body = JSON.parse(resp.data.body);
                onEditorStateChange(
                    EditorState.createWithContent(convertFromRaw(body))
                );
            })
            .catch((err) => console.log(err.reponse.data));
    }

    function autosave() {
        setSaveStatus("Saving...");

        const config = {
            headers: { Authorization: `Bearer ${user.token}` },
        };

        const apiParams = new FormData();
        apiParams.append("title", title);
        apiParams.append("author", author);
        apiParams.append(
            "body",
            JSON.stringify(convertToRaw(editorState.getCurrentContent()))
        );

        axios
            .post(`/api/blogposts/${params.postId}`, apiParams, config)
            .then((resp) => {
                console.log(resp.data);
                setSaveStatus("");
            })
            .catch((err) => {
                console.log(err.response.data);
                setSaveStatus("Error occurred!");
            });
    }

    function uploadCallback(file) {
        setLoaderHidden(false);
        const config = {
            headers: { Authorization: `Bearer ${user.token}` },
        };

        const apiParams = new FormData();
        apiParams.append("image", file);

        return axios
            .post("/api/upload/blogposts", apiParams, config)
            .then((resp) => {
                console.log(resp.data);
                setLoaderHidden(true);
                setImgUrls((imgUrls) => {
                    return [...imgUrls, resp.data.url];
                });
                return {
                    data: {
                        link: resp.data.url,
                    },
                };
            })
            .catch((err) => {
                console.log(err.response.data);
                setLoaderHidden(true);
                return new Error("Failed to upload and attach image");
            });
    }

    return (
        <>
            <Modal hidden={modalHidden}>
                <div className="flex flex-col bg-white h-5/6 rounded-lg shadow-2xl w-6/12">
                    <div className="py-3 px-6 border-b text-sm font-medium text-gray-600 flex justify-between items-center">
                        <span>Publish Post</span>
                        <div
                            className="p-2 rounded-full border border-white hover:border-gray-200 text-red-500"
                            onClick={() => setModalHidden(true)}
                        >
                            <IoCloseOutline size={20} />
                        </div>
                    </div>
                    <div className="p-6 text-gray-700">
                        <div className="flex flex-col">
                            <span className="font-heading font-medium mb-2">
                                Status
                            </span>
                            <div
                                className={`text-sm p-2 ${
                                    publishStatus === "draft"
                                        ? "bg-yellow-500"
                                        : "bg-green-500"
                                } text-white rounded font-medium`}
                            >
                                {publishStatus === "draft"
                                    ? "Not Published"
                                    : "Published"}
                            </div>
                            {publishStatus === "published" && (
                                <div className="mt-4 flex justify-end">
                                    <Button label="Unpublish" />
                                </div>
                            )}
                            <span className="font-heading font-medium mb-2 mt-4">
                                Featured Image
                            </span>
                            <div>
                                {imgUrls.map((imgUrl, index) => (
                                    <div key={index} className="flex flex-row">
                                        <img src={imgUrl} />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </Modal>
            <div className="w-full flex flex-col">
                <div className="bg-[url('../assets/img/3.jpg')] bg-cover">
                    <Navbar />
                </div>
                <div className="flex flex-row-reverse justify-between items-center p-6">
                    <div>
                        <Button
                            label="Publish"
                            onClick={() => setModalHidden(false)}
                        />
                    </div>
                    <div className="text-sm font-medium text-gray-700">
                        {saveStatus}
                    </div>
                </div>
                <div className="flex flex-col p-6">
                    <div className="px-6 mb-5 flex flex-row gap-4">
                        <div className="flex-grow">
                            <TextInput
                                label="Title"
                                value={title}
                                onChange={(event) =>
                                    setTitle(event.target.value)
                                }
                                placeholder="Enter a title"
                            />
                        </div>
                        <div>
                            <TextInput
                                label="Author"
                                value={author}
                                onChange={(event) =>
                                    setAuthor(event.target.value)
                                }
                                placeholder="Enter an author"
                            />
                        </div>
                    </div>
                    <TextEditor
                        editorState={editorState}
                        onEditorStateChange={onEditorStateChange}
                        uploadCallback={uploadCallback}
                    />
                </div>
            </div>
        </>
    );
};

export default NewPost;
