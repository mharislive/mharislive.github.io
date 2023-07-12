import { useEffect, useRef } from "react";

const COLORS = ["orange", "yellow", "green", "purple", "fuchsia", "pink"];

const COLOR_CLASSES = COLORS.map((color) => `bg-${color}-500`);

const MagicScroll = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const els = document.querySelectorAll(".magic-container");
    let observer: IntersectionObserver;
    const options = {
      threshold: [0.3, 0.7],
    };

    const initObserver = () => {
      els.forEach((el) => {
        observer.observe(el);
      });
    };

    /* const resetObserver = () => {
      observer.disconnect();
      initObserver();
    }; */

    const callback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && containerRef.current) {
          containerRef.current.className =
            entry.target.getAttribute("data-color") || "bg-white";

          // this can be helpful in some scenarios
          // resetObserver();
        }
      });
    };

    if (els.length > 0) {
      observer = new IntersectionObserver(callback, options);
      initObserver();
    }

    return () => observer?.disconnect();
  }, []);

  return (
    <div className="transition ease-out duration-300" ref={containerRef}>
      {COLOR_CLASSES.map((item, index) => (
        <div
          className="magic-container h-screen flex justify-center text-white items-center"
          data-color={item}
          key={index}
        >
          {item.toUpperCase()}
        </div>
      ))}
    </div>
  );
};

export default MagicScroll;
