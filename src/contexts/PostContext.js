import React, { createContext, useReducer } from "react";

const PostContext = createContext();

export default PostContext;

const initialState = { all: [], pinned: [], search: [], tags: {} };

export const PostContextProvider = (props) => {
    const [postState, dispatch] = useReducer(PostReducer, initialState);
    return <PostContext.Provider value={{ postState, dispatch }}>{props.children}</PostContext.Provider>;
};

const PostReducer = (state, action) => {
    switch (action.type) {
        case "INIT_POSTS":
            return {
                ...action,
            };
        case "SEARCH_POSTS":
            return {
                ...state,
                search: [...action.search],
            };
        default:
            return state;
    }
};
