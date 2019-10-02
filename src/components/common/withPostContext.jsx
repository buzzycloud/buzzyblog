import React from "react";
import PostContext from "@/contexts/PostContext";

export default function withPostContext(Component) {
    return function WrapperComponent(props) {
        return (
            <PostContext.Consumer>
                {({ postState, dispatch }) => <Component {...props} postState={postState} dispatch={dispatch} />}
            </PostContext.Consumer>
        );
    };
}
