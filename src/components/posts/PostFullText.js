import React from "react";
import parse from "html-react-parser";
import PostComments from "./PostComments";

const PostFullText = ({ post }) => {
    const title = parse(post.title.rendered);
    const body = parse(post.content.rendered);
    return (
        <div className="container">
            <header className="tile is-parent is-vertical">
                <div className="tile is-child">
                    <h1 className="title has-text-centered">{title}</h1>
                </div>
                <div className="tile is-child">
                    <div className="tags has-addons is-marginless">
                        <span className="tag">Published At: </span>
                        <span className="tag is-primary">{post.date.replace("T", " ")}</span>
                    </div>
                    <div className="tags">
                        {post.tags.length ? (
                            post.tags.map((tag) => (
                                <span className="tag is-success" key={tag}>
                                    {tag}
                                </span>
                            ))
                        ) : (
                            <span className="tag">no tag assigned</span>
                        )}
                    </div>
                </div>
            </header>
            <hr></hr>
            <div className="tile is-parent is-vertical columns">
                <div className="column is-offset-2 is-8">{body}</div>
                <hr></hr>
                <div className="column is-offset-2 is-8">
                    <PostComments post_id={post.id} />
                </div>
            </div>
        </div>
    );
};

export default PostFullText;
