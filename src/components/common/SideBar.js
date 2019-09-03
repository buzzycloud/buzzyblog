import React, { useContext, useEffect, useState } from "react";
import { withRouter } from "react-router-dom";
import PostContext from "@/contexts/PostContext";
import { getMetas } from "@/apis/metas";
import { searchPosts } from "@/apis/posts";

const SideBar = (props) => {
    const { posts } = useContext(PostContext);
    // console.log(posts);

    const [categories, setCategories] = useState([]);

    useEffect(() => {
        const initCategories = async () => {
            let resp = await getMetas("categories");
            if (resp.status === 200) {
                setCategories(resp.data);
            } else {
                setCategories([]);
            }
        };
        initCategories();
    }, []);
    // console.log(categories);

    const handlePostOnClick = (post) => {
        const { id, slug } = post;
        let url = `${id}-${slug.split(" ").join("_")}.html`;
        props.history.push({
            pathname: `/post/${url}`,
            state: { post: post },
        });
    };

    const handleCategoryOnClick = async ({ id, slug }) => {
        let resp = await searchPosts({ category_id: id });
        // console.log(resp);
        let posts = resp.status == 200 ? [...resp.data] : [];
        props.history.push({
            pathname: `/category/${slug.split(" ").join("_")}`,
            state: { posts: posts },
        });
    };

    return (
        <aside className="menu" style={{ padding: "0.75rem" }}>
            <p className="menu-label">Categories</p>
            <ul className="menu-list">
                <li onClick={() => handleCategoryOnClick({ id: 0, slug: "all" })}>
                    <a>All Categories</a>
                </li>
                {categories.map((c) => {
                    return (
                        <li key={c.id} onClick={() => handleCategoryOnClick(c)}>
                            <a>{c.name}</a>
                        </li>
                    );
                })}
            </ul>
            <p className="menu-label is-hidden-mobile">Pinned Posts</p>
            <ul className="menu-list is-hidden-mobile">
                {posts.pinned.length ? (
                    posts.pinned.map((post) => {
                        return (
                            <li key={post.id} onClick={() => handlePostOnClick(post)}>
                                <a>{post.title.rendered}</a>
                            </li>
                        );
                    })
                ) : (
                    <li>
                        <a>No Pinned Posts Yet</a>
                    </li>
                )}
            </ul>
        </aside>
    );
};

export default withRouter(SideBar);
