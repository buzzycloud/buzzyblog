import React from "react";
import parse from "html-react-parser";
import PostComments from "./PostComments";
import PropTypes from "prop-types";
const PostFullText = ({ post }) => {
    const title = parse(post.title.rendered);
    const body = parse(post.content.rendered);
    return (
        <article className="container">
            <header className="tile is-parent is-vertical">
                <div className="tile is-child">
                    <h1 className="title has-text-centered">{title}</h1>
                </div>
                <div className="tile is-child">
                    <div className="column is-offset-2 is-paddingless">
                        <div className="tags has-addons is-marginless">
                            <span className="tag">Published At: </span>
                            <span className="tag is-primary">{post.date.replace("T", " ")}</span>
                        </div>
                        <div className="tags">
                            {post.tags.length ? (
                                post.tags.map((tag) => (
                                    <span className="tag is-info" key={tag}>
                                        {tag}
                                    </span>
                                ))
                            ) : (
                                <span className="tag">no tag assigned</span>
                            )}
                        </div>
                    </div>
                </div>
            </header>
            <hr className="hr"></hr>
            <div className="tile is-parent is-vertical columns">
                <div className="column is-offset-2 is-8">{body}</div>
                <div className="column is-offset-2 is-8">
                    <PostComments post_id={post.id} />
                </div>
            </div>
        </article>
    );
};

PostFullText.propTypes = {
    post: PropTypes.object.isRequired,
};

export default PostFullText;
