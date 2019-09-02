const PostReducer = (state, action) => {
    // console.log(state, action);
    switch (action.type) {
        case "INIT_POSTS":
            return {
                all: [...action.all],
                pinned: [...action.pinned],
            };
        case "SEARCH_POSTS":
            return {
                all: [...state.all],
                pinned: [...state.pinned],
                search: [...action.search],
            };
        case "GET_POSTS_BY":
            return {
                all: [...action.all],
                pinned: [...state.pinned],
                search: [],
            };
        default:
            return state;
    }
};

export default PostReducer;
