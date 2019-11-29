import React, { useState, useRef } from "react";
import styled from "styled-components";
import isEmail from "validator/lib/isEmail";
import { addOneComment } from "src/apis/posts";
import PropTypes from "prop-types";
import * as alert from "src/utils/alert";

const IconWrapper = styled.span.attrs((props) => ({
    className: "icon has-text-primary is-large",
}))``;

const AddNewComment = (props) => {
    const { post_id, parent_id } = props;
    const [comment, setComment] = useState({});
    const authorEmailRef = useRef(null);
    const authorNameRef = useRef(null);
    const commentContentRef = useRef(null);

    const resetComment = () => {
        authorEmailRef.current.value = "";
        authorNameRef.current.value = "";
        commentContentRef.current.value = "";
        setComment({});
    };

    const handleCommentOnChange = (val) => {
        setComment({ ...comment, ...val });
    };

    const handleSummit = async () => {
        /** payload:
         * {
         * "author_name":"XYZ",
         * "author_email":"abc@gamil.com",
         * "content":"xyz published a comement",
         * "parent":0,
         * "post":7
         * }
         */
        if (!isEmail(authorEmailRef.current.value)) {
            await alert.fire({ type: "error", msg: "Invalid Email Address" });
            return;
        }
        let len = Object.values(comment).filter((val) => !!val).length;
        if (len < 3) {
            await alert.fire({ type: "error", msg: "All Fields Are Required!" });
            return;
        }

        let payload = { ...comment, post: post_id, parent: parent_id };
        let resp = await addOneComment(payload);
        if (resp.status === 201) {
            await alert.fire({
                type: "success",
                msg: "Thanks!",
                submsg: "Your new comment is under the author's review!",
            });
            resetComment();
        } else {
            await alert.fire({ type: "error", msg: "Sorry! Error~~~" });
            return;
        }
    };
    return (
        <div>
            <div className="is-flex is-marginless" style={{ justifyContent: "space-between", alignItems: "center" }}>
                <div>
                    Add a comment here:
                    <IconWrapper>
                        <i className="fas fa-hand-point-down"></i>
                    </IconWrapper>
                </div>
                <div>
                    <a className="button is-primary" onClick={handleSummit}>
                        Submit
                    </a>
                </div>
            </div>
            <div className="field">
                <p className="control has-icons-left has-icons-right">
                    <input
                        ref={authorEmailRef}
                        className="input"
                        type="email"
                        placeholder="Email"
                        onChange={({ target: { value } }) => handleCommentOnChange({ author_email: value })}
                    />
                    <span className="icon is-small is-left">
                        <i className="fas fa-envelope"></i>
                    </span>
                </p>
            </div>
            <div className="field">
                <p className="control has-icons-left">
                    <input
                        ref={authorNameRef}
                        className="input"
                        type="text"
                        placeholder="Name"
                        onChange={({ target: { value } }) => handleCommentOnChange({ author_name: value })}
                    />
                    <span className="icon is-small is-left">
                        <i className="fas fa-user"></i>
                    </span>
                </p>
            </div>
            <div>
                <textarea
                    ref={commentContentRef}
                    className="textarea"
                    placeholder="e.g. Hello world"
                    onChange={({ target: { value } }) => handleCommentOnChange({ content: value })}
                ></textarea>
            </div>
            <br />
        </div>
    );
};

AddNewComment.propTypes = {
    post_id: PropTypes.number.isRequired,
    parent_id: PropTypes.number.isRequired,
};

export default AddNewComment;
