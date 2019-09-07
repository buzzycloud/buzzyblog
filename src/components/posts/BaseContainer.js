import React from "react";
import { withRouter } from "react-router-dom";
import parse from "html-react-parser";
import PropTypes from "prop-types";
const BaseContainer = (props) => {
    const { history, posts } = props;
    const handlePostOnClick = (post) => {
        const { id, slug } = post;
        let url = `${id}-${slug.split(" ").join("_")}.html`;
        history.push({
            pathname: `/post/${url}`,
            state: { post: post },
        });
    };

    const pinnedPosts = posts.filter((post) => post.sticky);
    const regularPosts = posts.filter((post) => !post.sticky);
    const sortedPosts = [...pinnedPosts, ...regularPosts];

    return (
        <div className="tile is-parent is-vertical">
            {sortedPosts.map((post) => {
                return (
                    <div className="tile is-child" key={post.id}>
                        <div
                            style={{ marginBottom: "0.5rem", cursor: "pointer" }}
                            className="title"
                            onClick={() => handlePostOnClick(post)}
                        >
                            {post.sticky ? (
                                <span className="icon is-medium" style={{ backgroundColor: "#ffdd57" }}>
                                    <i className="fas fa-thumbtack"></i>
                                </span>
                            ) : (
                                ""
                            )}
                            <span>{post.title.rendered}</span>
                        </div>
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
                        <div className="content" onClick={() => handlePostOnClick(post)} style={{ cursor: "pointer" }}>
                            {parse(post.excerpt.rendered)}
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

BaseContainer.propTypes = {
    posts: PropTypes.array.isRequired,
};

export default withRouter(BaseContainer);
