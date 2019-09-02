import React from "react";

const NoPostMessage = ({ msg }) => {
    return (
        <div className="tile is-parent is-vertical">
            <div className="tile is-child">
                <div className="content">
                    <div className="message">
                        <div className="message-body has-text-danger">{msg}</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NoPostMessage;
