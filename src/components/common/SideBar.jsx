import React, { useEffect, useState, useContext } from "react";
import PostContext from "@/contexts/PostContext";
import { getMetas } from "@/apis/metas";
import { useRouter } from "next/router";

const SideBar = () => {
    const router = useRouter();
    const { postState } = useContext(PostContext);

    const [categories, setCategories] = useState([]);
    const initCategories = async () => {
        let resp = await getMetas("categories");
        let categories = resp.status === 200 ? resp.data : [];
        setCategories(categories);
    };

    useEffect(() => {
        initCategories();
    }, []);

    const handlePostOnClick = (post) => {
        const { id, slug } = post;
        let url = `${id}-${slug.split(" ").join("_")}.html`;
        router.push({
            pathname: `/post/${url}`,
            state: { post: post },
        });
    };

    const handleCategoryOnClick = async ({ id, slug }) => {
        const pathname = id == 0 ? "/category/all" : `/category/${id}-${slug}`;
        router.push({ pathname: pathname });
    };

    return (
        <aside className="menu">
            <p className="menu-label">Categories</p>
            <ul className="menu-list">
                <li onClick={() => handleCategoryOnClick({ id: 0, slug: "all" })}>
                    <a>All Categories</a>
                </li>
                {categories.map((c) => {
                    return (
                        <li key={c.id} onClick={() => handleCategoryOnClick({ id: c.id, slug: c.slug })}>
                            <a>{c.name}</a>
                        </li>
                    );
                })}
            </ul>
            <p className="menu-label is-hidden-mobile">Pinned Posts</p>
            <ul className="menu-list is-hidden-mobile">
                {postState.pinned.length ? (
                    postState.pinned.map((post) => {
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

export default SideBar;
