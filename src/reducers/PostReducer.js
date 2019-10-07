const PostReducer = (state, action) => {
    const { type, val } = action;
    switch (type) {
        case "INIT_POSTS":
            return { ...val };
        case "SEARCH_POSTS":
            return {
                ...state,
                search: [...val.search],
            };
        default:
            return state;
    }
};

export default PostReducer;
