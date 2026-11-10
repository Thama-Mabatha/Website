import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function ScrollToTop() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (!hash) {
      window.scrollTo(0, 0);
      return undefined;
    }

    let frame;
    let attempts = 0;
    const scrollToHash = () => {
      const target = document.querySelector(hash);
      if (target) {
        target.scrollIntoView({ block: "start" });
        return;
      }

      attempts += 1;
      if (attempts < 12) frame = window.requestAnimationFrame(scrollToHash);
    };

    frame = window.requestAnimationFrame(scrollToHash);

    return () => window.cancelAnimationFrame(frame);
  }, [pathname, hash]);
  return null;
}

export default ScrollToTop;
