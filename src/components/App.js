import React from "react";
import NavBar from "@/components/common/NavBar";
import SideBar from "@/components/common/SideBar";
import Footer from "@/components/common/Footer";
import PostContainer from "@/components/posts/PostContainer";
import { PostContextProvider } from "@/contexts/PostContext";

const App = () => {
    return (
        <PostContextProvider>
            <NavBar />
            <div className="container" style={{ minHeight: "calc(80vh - 70px)" }}>
                <div className="tile is-parent is-flex-widescreen">
                    <div className="tile is-3 is-pulled-left">
                        <SideBar />
                    </div>
                    <div className="tile is-9 is-pulled-right">
                        <PostContainer />
                    </div>
                </div>
            </div>
            <div className="content is-marginless">
                <Footer />
            </div>
        </PostContextProvider>
    );
};

export default App;
