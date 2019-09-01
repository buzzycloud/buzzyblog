import React, { useEffect, useState } from "react";
import { getMetas } from "@/apis/metas";
import parse from "html-react-parser";

/** Comments of one single post */
const PostComments = ({ post_id }) => {
    const [comments, SetComments] = useState([]);

    useEffect(() => {
        const getComments = async (id) => {
            let resp = await getMetas("comments", { post_id: id });
            if (resp.status === 200) {
                SetComments(resp.data);
            }
        };

        getComments(post_id);
    }, []);

    return (
        <div>
            {comments.map((comm) => {
                return <div key={comm.id}>{parse(comm.content.rendered)}</div>;
            })}
        </div>
    );
};

export default PostComments;
