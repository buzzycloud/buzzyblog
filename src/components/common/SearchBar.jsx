import React, { useState, useContext } from "react";
import { useRouter } from "next/router";
import PostContext from "src/contexts/PostContext";
import { getPosts } from "src/apis/posts";
import { getMetas } from "src/apis/metas";
import { ACTIONS } from "src/utils/consts";

const SearchBar = () => {
    const router = useRouter();
    const { dispatch } = useContext(PostContext);

    /** search posts */
    const [keyword, setKeyword] = useState(null);
    const handleInpuOnChange = (value) => {
        setKeyword(value);
    };
    const handleEnterKeyUp = async (key) => {
        if (key === "Enter") {
            await search();
        }
    };
    const handleSearchIconOnClick = async () => {
        await search();
    };

    /** for now, not able to search the title field */
    const search = async () => {
        if (!!keyword) {
            let [respPosts, respTags] = await Promise.all([getPosts({ keyword }), getMetas("tags")]);
            let search = respPosts.status == 200 ? [...respPosts.data] : [];
            let tags = {};
            if (respTags.status == 200) {
                for (let tag of respTags.data) {
                    tags[tag.id] = tag.slug;
                }
            }
            dispatch({
                type: ACTIONS.SEARCH_POSTS,
                val: { search, tags },
            });

            if (router.pathname !== "/search") {
                router.push({
                    pathname: "/search",
                });
            }
        }
    };

    return (
        <div className="control has-icons-right">
            <input
                className="input is-rounded is-focused"
                type="email"
                placeholder="Search"
                autoFocus
                onChange={({ target: { value } }) => handleInpuOnChange(value)}
                onKeyUp={({ key }) => handleEnterKeyUp(key)}
            />
            <span
                className="icon is-right"
                onClick={handleSearchIconOnClick}
                style={{ pointerEvents: "auto", cursor: "pointer" }}
            >
                <i className="fas fa-search"></i>
            </span>
        </div>
    );
};

export default SearchBar;
