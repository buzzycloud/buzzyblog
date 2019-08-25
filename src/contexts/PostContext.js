import React, { createContext, useReducer } from "react";
import PostReducer from "@/reducers/PostReducer";

const PostContext = createContext();

export default PostContext;

export const PostContextProvider = (props) => {
    const [posts, dispatch] = useReducer(PostReducer, []);

    return <PostContext.Provider value={{ posts, dispatch }}>{props.children}</PostContext.Provider>;
};
