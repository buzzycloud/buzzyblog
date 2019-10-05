import React from "react";
import PostFullText from "@/components/posts/PostFullText";
import { useRouter } from "next/router";
import withPostContext from "@/components/common/withPostContext";
const PostPage = (props) => {
    const { postState } = props;
    // console.log(postState);
    const router = useRouter();
    const { pid } = router.query;
    const post_id = 13;
    const post = postState.all[0];
    return <div>Hello</div>;
    return <PostFullText post={post} />;
};

// PostPage.getInitialProps = ({ req }) => {
//     return {} // the return value will be part of the props
// };

export default withPostContext(PostPage);
