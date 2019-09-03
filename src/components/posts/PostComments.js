import React, { useEffect, useState } from "react";
import { getMetas } from "@/apis/metas";
import parse from "html-react-parser";
import AddNewComment from "./AddNewCommnet";

/** Comments of one single post */
const PostComments = ({ post_id }) => {
    const [comments, SetComments] = useState([]);

    useEffect(() => {
        const getComments = async (id) => {
            let resp = await getMetas("comments", { post_id: id });
            if (resp.status === 200) {
                SetComments(resp.data);
            }
        };

        getComments(post_id);
    }, []);

    const [newComment, SetNewComment] = useState({ post: post_id, content: "" });

    const handleReplyOnClick = (comment_id) => {
        SetNewComment({
            ...newComment,
            parent: comment_id,
        });
    };

    return (
        <React.Fragment>
            <AddNewComment post_id={post_id} />
            <div>
                {comments.length == 0 ? (
                    <div className="message">
                        <div className="message-body">No Comments Yet! Be the first to add a comment!</div>
                    </div>
                ) : (
                    <div className="card">
                        <header className="card-header">
                            <p className="card-header-title">Comments</p>
                        </header>
                        {comments.map((comment) => {
                            return (
                                <div key={comment.id} className="is-marginless">
                                    <div className="card-content">
                                        <div className="content">
                                            {parse(comment.content.rendered)}
                                            <div className="is-flex" style={{ justifyContent: "space-between" }}>
                                                <div>
                                                    <span>{comment.author_name}</span>
                                                    <br />
                                                    <span>{comment.date.replace("T", " ")}</span>
                                                </div>
                                                <div>
                                                    <a
                                                        className="card-footer-item button"
                                                        onClick={() => handleReplyOnClick(comment.id)}
                                                    >
                                                        Reply
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <hr className="hr is-marginless" />
                                </div>
                            );
                        })}
                    </div>
                )}
            </div>
        </React.Fragment>
    );
};

export default PostComments;
