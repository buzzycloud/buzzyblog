import React, { useContext } from "react";
import parse from "html-react-parser";
import PostContext from "@/contexts/PostContext";

const PostContainer = () => {
    const { posts } = useContext(PostContext);
    // console.log(posts);
    return (
        <div className="tile is-parent is-vertical is-8 is-pulled-right">
            {posts.map((post) => {
                return (
                    <div className="tile is-child " key={post.id}>
                        <div style={{ marginBottom: "0.5rem" }} className="title">
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
