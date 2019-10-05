import React, { useEffect, useState } from "react";
import withPostContext from "@/components/common/withPostContext";
import { getMetas } from "@/apis/metas";
import { getPosts } from "@/apis/posts";
import { useRouter } from "next/router";
import Link from "next/link";

const SideBar = (props) => {
    const router = useRouter();
    const { postState } = props;

    const [categories, setCategories] = useState([]);
    const initCategories = async () => {
        let resp = await getMetas("categories");
        let categories = resp.status === 200 ? resp.data : [];
        setCategories(categories);
    };

    useEffect(() => {
        initCategories();
    }, []);
    // console.log(categories);

    const handlePostOnClick = (post) => {
        const { id, slug } = post;
        let url = `${id}-${slug.split(" ").join("_")}.html`;
        router.push({
            pathname: `/post/${url}`,
            state: { post: post },
        });
    };

    const handleCategoryOnClick = async ({ id, slug }) => {
        let resp = await getPosts({ category_id: id });
        // console.log(resp);
        let posts = resp.status == 200 ? [...resp.data] : [];
        router.push({
            pathname: `/category/${slug}`,
            // state: { posts: posts },
        });
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
                        <li key={c.id}>
                            <Link href="/category/[cid]" as={`/category/${c.id}-${c.slug}`}>
                                <a>{c.name}</a>
                            </Link>
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

export default withPostContext(SideBar);
