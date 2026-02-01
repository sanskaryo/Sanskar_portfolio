import { useEffect } from "react";
import { useLocation } from "react-router-dom";

declare global {
  interface Window {
    gtag: (...args: any[]) => void;
  }
}

export default function TrackPageView() {
  const location = useLocation();

  useEffect(() => {
    if (window.gtag) {
      window.gtag("config", "G-271J2BC4BM", {
        page_path: location.pathname + location.search,
      });
    }
  }, [location]);

  return null;
}
