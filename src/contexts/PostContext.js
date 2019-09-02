import React, { createContext, useReducer } from "react";
import PostReducer from "@/reducers/PostReducer";

const PostContext = createContext();

export default PostContext;

export const PostContextProvider = (props) => {
    const [posts, dispatch] = useReducer(PostReducer, { all: [], pinned: [], search: [] });

    return <PostContext.Provider value={{ posts, dispatch }}>{props.children}</PostContext.Provider>;
};
