import React, { useContext } from "react";
import parse from "html-react-parser";
import PostContext from "@/contexts/PostContext";

const PostContainer = () => {
    const { posts } = useContext(PostContext);
    if (posts.length === 0) {
        return (
            <div className="tile is-parent is-vertical is-8 is-pulled-right">
                <div className="tile is-child">
                    <div className="content">
                        <p>Not Found Any Posts</p>
                    </div>
                </div>
            </div>
        );
    }
    const pinnedPosts = posts.all.filter((post) => post.sticky);
    const regularPosts = posts.all.filter((post) => !post.sticky);
    const sortedPosts = [...pinnedPosts, ...regularPosts];
    return (
        <div className="tile is-parent is-vertical is-9">
            {sortedPosts.map((post) => {
                return (
                    <div className="tile is-child" key={post.id}>
                        <div style={{ marginBottom: "0.5rem" }} className="title">
                            {post.sticky ? (
                                <span className="tag is-medium" style={{ backgroundColor: "#ffdd57" }}>
                                    <i className="fas fa-thumbtack"></i>
                                </span>
                            ) : (
                                ""
                            )}
                            {post.title.rendered}
                        </div>
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
                        <div className="content">{parse(post.excerpt.rendered)}</div>
                    </div>
                );
            })}
        </div>
    );
};

export default PostContainer;
