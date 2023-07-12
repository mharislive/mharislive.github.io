import { NavLink } from "react-router-dom";
import { navigation } from "../../contants";
import { useEffect, useState } from "react";
import clsx from "clsx";

type Marker = {
  top: number;
  fixedTop: number;
  height: number;
};

const Navigation = () => {
  const [show, setShow] = useState<boolean>(false);
  const [marker, setMarker] = useState<Marker>({
    top: 0,
    fixedTop: 0,
    height: 0,
  });
  const { top, height, fixedTop } = marker;

  const onMouseMoveHandler = (e: React.MouseEvent<HTMLElement>) => {
    const item = e.target as HTMLElement;
    const isNavItem = item.tagName.toLowerCase() === "a";
    if (isNavItem) {
      const { top, height } = item.getBoundingClientRect();
      setMarker({ ...marker, top, height });
    }
  };

  const onMouseLeaveHandler = () => {
    setMarker({ ...marker, top: marker.fixedTop });
  };

  const onClickHandler = (e: React.MouseEvent<HTMLElement>) => {
    const item = e.target as HTMLElement;
    const isNavItem = item.tagName.toLowerCase() === "a";
    if (isNavItem) {
      const { top, height } = item.getBoundingClientRect();
      setMarker({ top, height, fixedTop: top });
    }
  };

  useEffect(() => {
    const activeItem = document.querySelector("nav .active");
    const { top = 0, height = 0 } = activeItem?.getBoundingClientRect() || {};
    setMarker({ ...marker, top, height });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <header
      className={clsx(
        "fixed transition ease-out duration-300 min-h-screen z-10 w-72 bg-slate-900 shadow-lg",
        show ? "translate-x-0" : "-translate-x-full"
      )}
    >
      <nav
        className="inline-flex flex-col w-full"
        onMouseMove={onMouseMoveHandler}
        onMouseLeave={onMouseLeaveHandler}
        onClick={onClickHandler}
      >
        {navigation.map(({ path, label }) => (
          <NavLink to={path} key={path} className="p-1 text-center">
            {label}
          </NavLink>
        ))}
        <div
          className={clsx(
            "bg-fuchsia-950 absolute w-11/12 left-2/4 -translate-x-2/4 -z-10 -skew-x-12 transition-all ease-out duration-300",
            fixedTop === top && "animate-custom-pulse"
          )}
          style={{ top, height }}
        />
        <button
          className={clsx(
            "absolute left-full top-1/2 -translate-x-1/4 -translate-y-2/4 rotate-90 bg-fuchsia-950 px-3 py-1 shadow-lg -ml-px rounded-t"
          )}
          onClick={() => setShow((show) => !show)}
        >
          Menu
        </button>
      </nav>
    </header>
  );
};

export default Navigation;
