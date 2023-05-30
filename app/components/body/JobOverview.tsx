"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { BsArrowDownShort } from "react-icons/bs";

import { MapPin } from "react-feather";
import BodyRightContent from "./BodyRightContent";
import MediaQuery, { useMediaQuery } from "react-responsive";
const JobOverview = function () {
  const [displayDetails, setDisplayDetails] = useState(false);
  const [hovering, setHovering] = useState(false);
  const windowSize = useMediaQuery({ minWidth: 1400 });
  // console.log("Windowsize:", windowSize);
  return (
    <div
      className={`relative duration-300 border-b-2 border-b-transparent ${
        hovering && "border-b-myLightBlue"
      }`}
    >
      <div
        className={`rounded-lg w-auto bg-myDarkBlue h-auto p-4 pb-2 ${
          !windowSize && "rounded-b-none overflow-hidden"
        }
      `}
      >
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
          <div className="mr-2 mb-1 p-[5.5px] rounded-sm inline-block bg-myBlack text-white font-thin text-sm">
            Full-stack
          </div>
          <div className="p-[5.5px] mr-2 mb-1 inline-block bg-myBlack text-white font-thin text-sm">
            Webdev
          </div>
          <div className="p-[5.5px] mb-1 mr-2 inline-block bg-myBlack text-white font-thin text-sm">
            Machine Learning
          </div>
          <div className="p-[5.5px] mb-1 mr-2 inline-block bg-myBlack text-white font-thin text-sm">
            Graphic Design
          </div>
        </div>
        <MediaQuery maxWidth={719}>
          <div
            onMouseEnter={() => setHovering(true)}
            onMouseLeave={() => setHovering(false)}
            onClick={() => {
              setDisplayDetails(!displayDetails);
            }}
            className="flex items-center text-sm justify-center pt-2 cursor-pointer opacity-60  duration-300 text-white"
          >
            Discover <BsArrowDownShort />
          </div>
        </MediaQuery>

        {/* )} */}
      </div>
      <MediaQuery maxWidth={719}>
        <div
          className={`
          ${
            !displayDetails ? "h-0 opacity-0" : "h-[500px] py-4 opacity-100"
          } w-full
        transition duration-1000 cursor-pointer
        rounded-b-none bg-myLightBlue bg-opacity-80  text-white overflow-hidden`}
        >
          <BodyRightContent />
        </div>
      </MediaQuery>
    </div>
  );
};

export default JobOverview;
