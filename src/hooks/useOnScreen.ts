import React from "react";

const useOnScreen = ({ ref, rootMargin = "0px" }) => {
  const [isOnScreen, setOnScreen] = React.useState(false);

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setOnScreen(entry.isIntersecting);
      },
      { rootMargin },
    );
    if (ref.current) {
      observer.observe(ref.current);
    }
    return () => {
      observer.unobserve(ref.current);
    };
  }, []);

  return isOnScreen;
};

export default useOnScreen;
