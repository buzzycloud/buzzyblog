import React, { createContext, useState, useEffect } from "react";
import { getAllPosts } from "@/apis/posts";

export const PostContext = createContext();

const PostContextProvider = (props) => {
    const [posts, setPosts] = useState([]);
    const initPosts = async () => {
        let resp = await getAllPosts();
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

export default PostContextProvider;
