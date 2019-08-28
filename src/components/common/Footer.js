import React from "react";

const Footer = () => {
    return (
        <footer className="footer tile is-12 is-flex-mobile">
            <div className="container">
                <div className="content has-text-centered">
                    <p>
                        <strong>Buzzy Blog</strong> by <a href="https://guiyumin.com">Yumin Gui</a>. The{" "}
                        <a href="https://github.com/buzzycloud">source code</a> is licensed under
                        <a href="https://www.apache.org/licenses/LICENSE-2.0"> Apache 2.0</a>. The website content is
                        licensed <a href="http://creativecommons.org/licenses/by-nc-sa/4.0/">CC BY NC SA 4.0</a>.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
