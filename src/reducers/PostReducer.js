const PostReducer = (state, action) => {
    // console.log(state);
    switch (action.type) {
        case "INIT_POSTS":
            return {
                all: [...action.all],
                pinned: [...action.pinned],
            };
        case "SEARCH_POSTS":
            return {
                all: [...action.all],
                pinned: [...state.pinned],
            };
        default:
            return state;
    }
};

export default PostReducer;
