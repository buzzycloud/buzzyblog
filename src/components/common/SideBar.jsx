import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { getMetas } from "src/apis/metas";
import { useRouter } from "next/router";

const SideBar = ({ page, posts: { pinned } }) => {
    const router = useRouter();

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
        let url = `${id}-${slug.split(" ").join("-")}.html`;
        router.push({
            pathname: `/post/${url}`,
        });
    };

    const handleCategoryOnClick = async ({ id, slug }) => {
        const pathname = id == 0 ? "/category/all" : `/category/${id}-${slug.split(" ").join("-")}`;
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
                {pinned.length ? (
                    pinned.map((post) => {
                        return (
                            <li key={post.id} onClick={() => handlePostOnClick(post)}>
                                <a>{post.title.rendered}</a>
                            </li>
                        );
                    })
                ) : (
                    <li>
                        <a>No pinned posts{page === "category" ? " in this category" : ""}</a>
                    </li>
                )}
            </ul>
        </aside>
    );
};

SideBar.propTypes = {
    page: PropTypes.string.isRequired,
    posts: PropTypes.object.isRequired,
};

export default SideBar;
