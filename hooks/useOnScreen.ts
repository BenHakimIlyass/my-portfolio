import React from "react";

const useOnScreen = (rootMargin = "0px") => {
  const [isOnScreen, setOnScreen] = React.useState(false);

  const domRef = React.useRef(null);
  React.useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setOnScreen(entry.isIntersecting);
      },
      { rootMargin }
    );
    if (domRef.current) {
      observer.observe(domRef.current);
    }
    return () => {
      observer.unobserve(domRef.current);
    };
  }, []);

  return [domRef, isOnScreen];
};

export default useOnScreen;
