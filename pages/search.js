import React from "react";
import Layout from "@/components/common/Layout";
import SideBar from "@/components/common/SideBar";
import SearchContainer from "@/components/posts/SearchContainer";

const Search = () => {
    return (
        <Layout>
            <div className="tile is-parent is-flex-widescreen">
                <div className="tile is-3">
                    <SideBar />
                </div>
                <div className="tile is-9">
                    <SearchContainer />
                </div>
            </div>
        </Layout>
    );
};

export default Search;
