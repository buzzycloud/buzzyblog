import React, { useContext, useEffect, useState } from "react";
import PostContext from "@/contexts/PostContext";
import { getMetas } from "@/apis/metas";

const SideBar = () => {
    const { posts } = useContext(PostContext);
    const pinnedPosts = posts.filter((post) => post.sticky);
    // console.log(pinnedPosts);

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
    return (
        <aside className="menu is-4 is-pulled-left" style={{ padding: "0.75rem" }}>
            <p className="menu-label">Categories</p>
            <ul className="menu-list">
                {/* at least 1 category, Uncategorized */}
                {categories.map((c) => {
                    return (
                        <li key={c.id}>
                            <a>{c.name}</a>
                        </li>
                    );
                })}
            </ul>
            <p className="menu-label">Pinned Posts</p>
            <ul className="menu-list">
                {pinnedPosts.length ? (
                    pinnedPosts.map((post) => {
                        return (
                            <li key={post.id}>
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
