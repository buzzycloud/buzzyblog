import React, { useContext } from "react";
import PostContext from "@/contexts/PostContext";
import { withRouter } from "react-router-dom";
import parse from "html-react-parser";
import PropTypes from "prop-types";

const BaseContainer = (props) => {
    const { postContext } = useContext(PostContext);
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
                            style={{ marginBottom: "0.5rem", cursor: "pointer", display: "flex" }}
                            className="title"
                            onClick={() => handlePostOnClick(post)}
                        >
                            <h4 className="title is-4">{post.title.rendered}</h4>
                        </div>
                        <div className="tags has-addons is-marginless">
                            {post.sticky ? (
                                <span className="tag is-small" style={{ backgroundColor: "#ffdd57" }}>
                                    <i className="fas fa-thumbtack"></i>
                                </span>
                            ) : (
                                ""
                            )}
                            <span className="tag">Published At: </span>
                            <span className="tag is-primary">{post.date.replace("T", " ")}</span>
                        </div>
                        <div className="tags">
                            {post.tags.length ? (
                                post.tags.map((tag) => (
                                    <span className="tag is-info" key={tag}>
                                        {postContext.tags[tag]}
                                    </span>
                                ))
                            ) : (
                                <span className="tag">no tag assigned</span>
                            )}
                        </div>
                        <summary
                            className="content"
                            onClick={() => handlePostOnClick(post)}
                            style={{ cursor: "pointer" }}
                        >
                            {parse(post.excerpt.rendered.replace("&hellip;", "<a>click me to read fulltext</a>"))}
                        </summary>
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
