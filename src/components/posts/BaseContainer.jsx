import React from "react";
import { useRouter } from "next/router";
import parse from "html-react-parser";
import PropTypes from "prop-types";

const BaseContainer = (props) => {
    const { posts, tags } = props;
    const router = useRouter();

    const handlePostOnClick = (post) => {
        const { id, slug } = post;
        let url = `${id}-${slug.split(" ").join("-")}.html`;
        router.push({
            pathname: `/post/${url}`,
        });
    };

    // pinned and all, they may contain duplicated posts
    // i.e., in the most recent 10 posts, one of them may be sticky/pinned posts
    const pinnedPosts = posts.pinned;
    const regularPosts = posts.all.filter((post) => !post.sticky);
    const sortedPosts = [...pinnedPosts, ...regularPosts];

    return (
        <div className="tile is-parent is-vertical is-y-paddingless">
            {sortedPosts.map((post) => {
                return (
                    <div className="tile is-child" key={post.id}>
                        <div
                            style={{ marginBottom: "0.5rem" }}
                            className="title is-clickable is-flex"
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
                                        {tags[tag]}
                                    </span>
                                ))
                            ) : (
                                <></>
                            )}
                        </div>
                        <summary className="content is-clickable" onClick={() => handlePostOnClick(post)}>
                            {parse(post.excerpt.rendered.replace("&hellip;", "<a>click me to read fulltext</a>"))}
                        </summary>
                    </div>
                );
            })}
        </div>
    );
};

BaseContainer.propTypes = {
    posts: PropTypes.object.isRequired,
    tags: PropTypes.object.isRequired,
};

export default BaseContainer;
