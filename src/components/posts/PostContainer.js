import React, { useContext } from "react";
import parse from "html-react-parser";
import { PostContext } from "@/contexts/PostContext";

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
                        <div className="tags is-marginless">
                            <span className="tag is-rounded ">{post.date.replace("T", " ")}</span>
                        </div>
                        <div>{parse(post.excerpt.rendered)}</div>
                        <div className="tags">
                            {post.tags.length ? <span className="tag is-success">{post.tags}</span> : ""}
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default PostContainer;
