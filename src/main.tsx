import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";
import ReactGA from "react-ga4";

ReactGA.initialize("G-271J2BC4BM");
ReactGA.send("pageview");

createRoot(document.getElementById("root")!).render(<App />);
