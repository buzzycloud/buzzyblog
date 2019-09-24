import React, { createContext, useReducer } from "react";
import PostReducer from "@/reducers/PostReducer";

const PostContext = createContext();

export default PostContext;

const initialState = { all: [], pinned: [], search: [], tags: {} };

export const PostContextProvider = (props) => {
    const [postContext, dispatch] = useReducer(PostReducer, initialState);
    return <PostContext.Provider value={{ postContext, dispatch }}>{props.children}</PostContext.Provider>;
};
