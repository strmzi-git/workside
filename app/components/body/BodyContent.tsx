"use client";

import { useEffect, useState } from "react";
import BodyLeft from "./BodyLeft";
import BodyRight from "./BodyRight";

const BodyContent = function () {
  // const showDetails = useShowDetails();
  const MEDIUM_BREAKPOINT = 720;
  const [windowSize, setWindowSize] = useState({
    width: window?.innerWidth,
  });
  useEffect(() => {
    function handleResize() {
      setWindowSize({ width: window.innerWidth });
    }

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className={`h-[92%] pt-8 w-full px-0 flex gap-2`}>
      <BodyLeft />
      {windowSize.width >= MEDIUM_BREAKPOINT && <BodyRight />}
      {/* <BodyRight /> */}
    </div>
  );
};

export default BodyContent;
