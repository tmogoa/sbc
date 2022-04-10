import React, { useContext } from "react";
import { AppContext } from "../util/AppContext";
import Footer from "../widgets/Footer";
import Navbar from "../widgets/Navbar";
import Fab from "../widgets/Fab";
import { IoAddOutline } from "react-icons/io5";
import colors from "../../../assets/colors";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { convertToRaw, EditorState } from "draft-js";

const BoysCorner = () => {
    const { user, setLoaderHidden } = useContext(AppContext);
    const navigate = useNavigate();
    return (
        <>
            {user && (
                <Fab
                    icon={<IoAddOutline size={40} color={colors.white} />}
                    onClick={createNewPost}
                />
            )}
            <div className="w-full flex flex-col">
                <div className="flex flex-col h-[32rem] w-full bg-[url('../assets/img/4.jpg')] bg-cover">
                    <Navbar />
                    <div
                        className="flex-grow flex flex-row items-center p-10 gap-10 text-white bg-gray-800 bg-opacity-70 
"
                    >
                        <div className="font-heading text-7xl w-6/12">
                            Boy's Corner
                        </div>
                    </div>
                </div>

                <Footer />
            </div>
        </>
    );

    function createNewPost() {
        setLoaderHidden(false);
        const config = {
            headers: { Authorization: `Bearer ${user.token}` },
        };
        const params = new FormData();
        params.append("title", "Untitled");
        params.append(
            "body",
            JSON.stringify(
                convertToRaw(EditorState.createEmpty().getCurrentContent())
            )
        );
        params.append("author", "Unknown author");
        params.append("status", "draft");

        axios
            .post("api/blogposts", params, config)
            .then((resp) => {
                console.log(resp.data);
                setLoaderHidden(true);
                navigate(`/post/${resp.data.post.id}`);
            })
            .catch((err) => {
                console.log(err.response.data);
                setLoaderHidden(true);
            });
    }
};

export default BoysCorner;
