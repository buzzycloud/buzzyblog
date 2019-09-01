import React from "react";
import parse from "html-react-parser";

const PostDetail = ({ post }) => {
    const title = parse(post.title.rendered);
    const body = parse(post.content.rendered);
    return (
        <div className="container">
            <header className="tile is-parent">
                <div className="tile is-child">
                    <h1 className="title has-text-centered">{title}</h1>
                </div>
            </header>
            <div className="columns">
                <div className="column is-offset-2 is-8">{body}</div>
            </div>
        </div>
    );
};

export default PostDetail;
