import React, { createContext, useReducer } from "react";
import PostReducer from "@/reducers/PostReducer";

const PostContext = createContext();

export default PostContext;

const initialState = { all: [], pinned: [], search: [], tags: {} };

export const PostContextProvider = (props) => {
    const [postState, dispatch] = useReducer(PostReducer, initialState);
    return <PostContext.Provider value={{ postState, dispatch }}>{props.children}</PostContext.Provider>;
};
