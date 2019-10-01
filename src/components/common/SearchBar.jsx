import React, { useState, useContext } from "react";
import { useRouter } from "next/router";
import PostContext from "@/contexts/PostContext";
import { getPosts } from "@/apis/posts";

const SearchBar = () => {
    const router = useRouter();

    /** search posts */
    const [keyword, setKeyword] = useState(null);
    const { dispatch } = useContext(PostContext);

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
            let resp = await getPosts({ keyword });

            dispatch({
                type: "SEARCH_POSTS",
                search: resp.status == 200 ? [...resp.data] : [],
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
