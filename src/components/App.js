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
            <div className="tiles is-ancestor is-vertical">
                <div className="tile is-12">
                    <div className="container">
                        <SideBar />
                        <PostContainer />
                    </div>
                </div>
                <div className="tile">
                    <Footer />
                </div>
            </div>
        </PostContextProvider>
    );
};

export default App;
