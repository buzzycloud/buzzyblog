const PostReducer = (state, action) => {
    switch (action.type) {
        case "INIT_POSTS":
        case "SEARCH_POSTS":
            return [...action.posts];
        default:
            return state;
    }
};

export default PostReducer;
