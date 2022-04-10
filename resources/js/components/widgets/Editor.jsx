import React, { useState } from "react";
import { Editor } from "react-draft-wysiwyg";
import { convertToRaw, EditorState } from "draft-js";
import DOMPurify from "dompurify";
import "../../../../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import draftToHtml from "draftjs-to-html";

const TextEditor = ({ editorState, onEditorStateChange, uploadCallback }) => {
    return (
        <div className="flex flex-col gap-10">
            <Editor
                wrapperClassName="flex flex-col items-center"
                editorClassName="prose lg:prose-xl bg-white shadow w-8/12 p-8 rounded mt-6 text-gray-700 border"
                toolbarClassName="border border-black text-sm font-medium text-gray-700"
                placeholder="Now write something great..."
                toolbar={{
                    image: {
                        uploadCallback: uploadCallback,
                        previewImage: true,
                    },
                }}
                // onContentStateChange={onContentStateChange}
                editorState={editorState}
                onEditorStateChange={onEditorStateChange}
            />
            {/* <div>
                {JSON.stringify(
                    convertToRaw(editorState.getCurrentContent()),
                    null,
                    4
                )}
            </div> */}
            {/* <div
                className="prose lg:prose-xl"
                dangerouslySetInnerHTML={createMarkup(
                    draftToHtml(convertToRaw(editorState.getCurrentContent()))
                )}
            ></div> */}
        </div>
    );

    function createMarkup(html) {
        return {
            __html: DOMPurify.sanitize(html),
        };
    }
};

export default TextEditor;
