import React, { useContext } from "react";
import { withRouter } from "react-router-dom";
import parse from "html-react-parser";
import PostContext from "@/contexts/PostContext";

const PostContainer = (props) => {
    const { posts } = useContext(PostContext);
    // console.log(posts);
    if (posts.all.length === 0) {
        return (
            <div className="tile is-parent is-vertical">
                <div className="tile is-child">
                    <div className="content">
                        <p>Not Found Any Posts</p>
                    </div>
                </div>
            </div>
        );
    }

    const handlePostOnClick = (post) => {
        const { id, slug } = post;
        let url = `${id}-${slug.split(" ").join("_")}.html`;
        props.history.push({
            pathname: `/post/${url}`,
            state: { post: post },
        });
    };

    const pinnedPosts = posts.all.filter((post) => post.sticky);
    const regularPosts = posts.all.filter((post) => !post.sticky);
    const sortedPosts = [...pinnedPosts, ...regularPosts];

    return (
        <div className="tile is-parent is-vertical">
            {sortedPosts.map((post) => {
                return (
                    <div className="tile is-child" key={post.id}>
                        <div
                            style={{ marginBottom: "0.5rem", cursor: "pointer" }}
                            className="title"
                            onClick={() => handlePostOnClick(post)}>
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

export default withRouter(PostContainer);
