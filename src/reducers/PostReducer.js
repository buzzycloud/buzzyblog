const PostReducer = (state, action) => {
    console.log(action.type);
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

export default PostReducer;
