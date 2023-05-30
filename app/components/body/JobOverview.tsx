import Image from "next/image";
import { useEffect, useState } from "react";

import { MapPin } from "react-feather";
const JobOverview = function () {
  const [windowSize, setWindowSize] = useState({ width: window.innerWidth });

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
    <div className="rounded-lg w-auto bg-myDarkBlue h-auto p-4">
      <div className="flex flex-col">
        {/*  HEADER */}
        <div className="flex items-start gap-4 mb-2 ">
          <Image
            src={"/Assets/FirstJobLogo.svg"}
            alt="Company logo"
            width={50}
            height={50}
          />
          <div className="pt-[2px]">
            {/* {windowSize.width >= 375 && ( */}
            <p className={`font-semibold text-white text-[14px] mb-1 `}>
              nGrock
            </p>
            {/* )} */}
            <p className=" font-semibold text-white text-[14px] mb-1">
              Freelance front-end developer
            </p>
          </div>
        </div>
        {/* ---------- */}

        <div className="w-full flex 3xs:items-center flex-col items-start gap-0 3xs:gap-2 sm:gap-0 justify-between 3xs:flex-row sm:flex-col sm:items-start">
          <p className="block font-normal text-myGray text-sm mb-2">
            Employment Status: <br />{" "}
            <span className="text-light font-semibold text-white">
              Full-time
            </span>
          </p>
          <p className="flex items-center justify-end gap-2 mb-2 text-sm text-myGray">
            <MapPin size={13} />
            New York, United States
          </p>
        </div>
      </div>
      {/* {windowSize.width >= 377 && ( */}
      <div className="flex flex-wrap">
        <div className="mr-2 mb-1 p-1 rounded-sm inline-block bg-myBlack text-white font-thin text-sm">
          Full-stack
        </div>
        <div className="p-1 mr-2 mb-1 inline-block bg-myBlack text-white font-thin text-sm">
          Webdev
        </div>
        <div className="p-1 mb-1 mr-2 inline-block bg-myBlack text-white font-thin text-sm">
          Machine Learning
        </div>
        <div className="p-1 mb-1 mr-2 inline-block bg-myBlack text-white font-thin text-sm">
          Graphic Design
        </div>
      </div>
      {/* )} */}
    </div>
  );
};

export default JobOverview;
