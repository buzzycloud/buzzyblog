import { ACTIONS } from "src/utils/consts";

const PostReducer = (state, action) => {
    const { type, val } = action;
    switch (type) {
        case ACTIONS.INIT_POSTS:
            return { ...val };
        case ACTIONS.SEARCH_POSTS:
            return {
                ...state,
                search: [...val.search],
                tags: { ...val.tags },
            };
        default:
            return state;
    }
};

export default PostReducer;
