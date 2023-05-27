import Image from "next/image";

import { MapPin } from "react-feather";
const JobOverview = function () {
  return (
    <div className="rounded-lg bg-myDarkBlue h-auto w-[400px] p-4">
      <div className="flex flex-col">
        <div className="flex items-start gap-4 mb-2 ">
          <Image
            src={"/Assets/FirstJobLogo.svg"}
            alt="Company logo"
            width={50}
            height={50}
          />
          <div>
            <p className="block font-semibold text-white text-[18px] mb-1">
              nGrock
            </p>
            <p className="blocks font-semibold text-white text-[14px] mb-1">
              Looking for a freelance front-end developer
            </p>
          </div>
        </div>
        <div className="w-full flex items-center gap-2 justify-between">
          <p className="blocks font-normal text-myGray text-sm mb-2">
            Employment Status: <br />{" "}
            <span className="text-light font-semibold text-white">
              Full-time
            </span>
          </p>
          <p className="flex items-center gap-2 text-sm text-myGray">
            <MapPin size={13} />
            New York, United States
          </p>
        </div>
      </div>
      <div className="flex flex-wrap">
        <div className="mr-2 mb-2 p-2 rounded-sm inline-block bg-myBlack text-white font-thin text-sm">
          Full-stack
        </div>
        <div className="p-2 mr-2 mb-2 inline-block bg-myBlack text-white font-thin text-sm">
          Webdev
        </div>
        <div className="p-2 mb-2 inline-block bg-myBlack text-white font-thin text-sm">
          Machine Learning
        </div>
        <div className="p-2 mb-2 mr-2 inline-block bg-myBlack text-white font-thin text-sm">
          Graphic Design
        </div>
      </div>
    </div>
  );
};

export default JobOverview;
