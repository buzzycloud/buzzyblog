import React from "react";
import { PostContextProvider } from "@/contexts/PostContext";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import NavBar from "@/components/common/NavBar";
// import { Homepage, Resume, Post} from "@/components/routes";
import * as Routes from "@/components/routes";
import Footer from "@/components/common/Footer";

const App = () => {
    return (
        <BrowserRouter>
            <PostContextProvider>
                <NavBar />
                <div className="container" style={{ minHeight: "calc(80vh - 70px)" }}>
                    <Switch>
                        <Route exact path="/" component={Routes.Homepage} />
                        <Route path="/search" component={Routes.Search} />
                        <Route path="/category/:slug" component={Routes.Category} />
                        <Route path="/resume" component={Routes.Resume} />
                        <Route path="/post/:slug" component={Routes.Post} />
                    </Switch>
                </div>
                <div className="content is-marginless">
                    <Footer />
                </div>
            </PostContextProvider>
        </BrowserRouter>
    );
};

export default App;
