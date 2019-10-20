import ReactGA from "react-ga";
const GA_TRACKING_ID = process.env.GA_TRACKING_ID;

export const initGA = () => {
    ReactGA.initialize(GA_TRACKING_ID);
};

export const logPageView = () => {
    ReactGA.set({ page: window.location.pathname });
    ReactGA.pageview(window.location.pathname);
};

// what's this ?
export const logEvent = (category = "", action = "") => {
    if (category && action) {
        ReactGA.event({ category, action });
    }
};

// what's this ?
export const logException = (description = "", fatal = false) => {
    if (description) {
        ReactGA.exception({ description, fatal });
    }
};
