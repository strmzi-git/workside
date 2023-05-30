"use client";

import Filter from "./Filter";
import JobOverview from "./JobOverview";
import useShowDetails from "@/app/hooks/useShowDetails";
import MediaQuery from "react-responsive";

const BodyLeft = function () {
  return (
    <div className={`h-[100%] flex mx-auto md:mx-0  w-[90%] md:w-[50%]  `}>
      <MediaQuery minWidth={1300}>
        <Filter />
      </MediaQuery>

      <div className={` w-full flex flex-col gap-4 sm:gap-2`}>
        <JobOverview />
        <JobOverview />
      </div>
    </div>
  );
};

export default BodyLeft;
