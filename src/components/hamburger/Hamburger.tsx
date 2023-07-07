import { useEffect, useRef } from "react";
import Lottie from "lottie-react";
import hamburgerClose from "./Hamburger-Close.json";

const Hamburger = () => {
  const lottieRef = useRef<any>(null);
  const directionRef = useRef<number>(1);

  const onClickHandler = () => {
    if (lottieRef.current) {
      lottieRef.current.setDirection(directionRef.current);
      lottieRef.current.play();
      directionRef.current = directionRef.current * -1;
    }
  };

  useEffect(() => {
    if (lottieRef.current) {
      lottieRef.current.setSpeed(2);
    }
  }, []);

  return (
    <Lottie
      animationData={hamburgerClose}
      style={{ width: 100, cursor: "pointer" }}
      loop={false}
      autoplay={false}
      onClick={onClickHandler}
      lottieRef={lottieRef}
    />
  );
};

export default Hamburger;
