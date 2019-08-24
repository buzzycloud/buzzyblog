import React from "react";
import NavBar from "@/components/common/NavBar";
import PostContainer from "@/components/posts/PostContainer";
import PostContextProvider from "@/contexts/PostContext";

const App = () => {
    return (
        <PostContextProvider>
            <NavBar />
            <PostContainer />
        </PostContextProvider>
    );
};

export default App;
