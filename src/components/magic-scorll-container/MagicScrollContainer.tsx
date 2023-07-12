import { useEffect, useRef } from "react";

type MagicScrollContainerProps = {
  children: string | JSX.Element | JSX.Element[];
};

const MagicScrollContainer = ({ children }: MagicScrollContainerProps) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const hasColors = document?.querySelectorAll("[data-color]")?.length;
    if (!hasColors) return;

    const els = Array.from(
      document.querySelectorAll(".magic-container > div > *")
    );
    const section = els
      .map((section) => {
        const el = section;
        const rect = el.getBoundingClientRect();
        return { el, rect };
      })
      .find((section) => section.rect.bottom >= window.innerHeight * 0.5);
    if (containerRef.current) {
      containerRef.current.className =
        section?.el?.getAttribute("data-color") || "bg-white";
    }

    const onScrollHandler = () => {
      const section = els
        .map((section) => {
          const el = section;
          const rect = el.getBoundingClientRect();
          return { el, rect };
        })
        .find((section) => section.rect.bottom >= window.innerHeight * 0.5);

      if (containerRef.current) {
        containerRef.current.className =
          section?.el?.getAttribute("data-color") || "bg-white";
      }
    };

    window.addEventListener("scroll", onScrollHandler);
    return () => {
      window.removeEventListener("scroll", onScrollHandler);
    };
  }, []);

  return (
    <div className="magic-container transition ease-out duration-300">
      <div ref={containerRef}>{children}</div>
    </div>
  );
};

export default MagicScrollContainer;
