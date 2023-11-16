import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    // console.log("pathname:", pathname);
    // console.log("hash:", hash);

    if (!hash) {
      window.scrollTo(0, 0);
    }
  }, [pathname]);

  return null;
}
