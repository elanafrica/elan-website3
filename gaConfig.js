import ReactGA from "react-ga";

export const initGA = () => {
  ReactGA.initialize("G-EK15DZ5E01");
};

export const logPageView = () => {
  ReactGA.set({ page: window.location.pathname });
  ReactGA.pageview(window.location.pathname);
};
