import React, { createContext, useState, useEffect } from "react";
import { getPosts } from "@/apis/posts";

const PostContext = createContext();

export default PostContext;

export const PostContextProvider = (props) => {
    const [posts, setPosts] = useState([]);
    const initPosts = async () => {
        let resp = await getPosts();
        if (resp.status == 200) {
            setPosts(resp.data);
        } else {
            setPosts(null);
        }
    };

    useEffect(() => {
        initPosts();
    }, []);

    return <PostContext.Provider value={{ posts }}>{props.children}</PostContext.Provider>;
};
