import React, { createContext, useReducer } from "react";
import PostReducer from "@/reducers/PostReducer";

const PostContext = createContext();

export default PostContext;

const initialState = { all: [], pinned: [], search: [] };

export const PostContextProvider = (props) => {
    const [posts, dispatch] = useReducer(PostReducer, initialState);
    return <PostContext.Provider value={{ posts, dispatch }}>{props.children}</PostContext.Provider>;
};
