"use client";

import { useEffect, useMemo, useState } from "react";
import Filter from "./Filter";
import JobOverview from "./JobOverview";
import useShowDetails from "@/app/hooks/useShowDetails";

const BodyLeft = function () {
  // const showDetails = useShowDetails();
  const LARGE_BREAKPOINT = 1300;
  const MEDIUM_BREAKPOINT = 660;
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
  });
  useEffect(() => {
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
      });
    }
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className={`h-[100%] flex mx-auto md:mx-0  w-[90%] md:w-[50%]  `}>
      {windowSize.width >= LARGE_BREAKPOINT && <Filter />}

      <div
        className={`${
          windowSize.width >= LARGE_BREAKPOINT ? "pl-14" : "w-full"
        } flex flex-col gap-4 sm:gap-2`}
      >
        <JobOverview />
        <JobOverview />
      </div>
    </div>
  );
};

export default BodyLeft;
