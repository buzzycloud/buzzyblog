const PostReducer = (state, action) => {
    const { type, ...postState } = action;
    switch (type) {
        case "INIT_POSTS":
            return {
                ...postState,
            };
        case "SEARCH_POSTS":
            return {
                ...state,
                search: [...postState.search],
            };
        default:
            return state;
    }
};

export default PostReducer;
