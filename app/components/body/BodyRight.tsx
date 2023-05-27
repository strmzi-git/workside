import Image from "next/image";
import Button from "../Button";

const BodyRight = function () {
  return (
    <div className="flex-1 max-h-[600px] flex flex-col gap-3 text-white items-end bg-myDarkBlue rounded-md py-8 px-10">
      {/* Header */}
      <div className="flex w-full items-start justify-between h-[50px] mb-4">
        <div>
          <p className="block text-lg font-semibold">Frontend Developer</p>
          <p className="block text-md font-light text-myGray">
            Texas, United States
          </p>
        </div>
        <p className="text-sm text-myGray font-light">Posted 4 days ago</p>
      </div>
      {/*  */}
      <div className="w-full bg-myBlack items-center mb-4 rounded-md h-[75px] justify-between flex px-6">
        <div className="flex flex-col items-start">
          <p className="font-semibold text-md">Experience</p>
          <p className="text-sm font-light text-myGray">Beginner</p>
        </div>
        <div className="flex flex-col items-start">
          <p className="font-semibold text-md">Education Level</p>
          <p className="text-sm font-light text-myGray">Bachelor</p>
        </div>
        <div className="flex flex-col items-start">
          <p className="font-semibold text-md">Salary Range</p>
          <p className="text-sm font-light text-myGray">110€-150€/hr</p>
        </div>
      </div>
      {/*  */}
      <div>
        <p className="block font-semibold mb-2">Company Overview</p>
        <p className="font-light text-myGray text-sm">
          Dividstar was established in 1932 by Matthew Cohens in Virginia,
          United States. Dividstar has been the leader application for personal
          finance over the past 10 decades and aim to continue holding that
          position. As times continue to evolve, we do too.
        </p>
      </div>
      {/*  */}
      <div>
        <p className="block font-semibold mb-2 mt-3">Job requirements</p>
        <div className="flex gap-2 mb-3 items-start">
          <Image
            src={"/Assets/CheckmarkVerified.svg"}
            alt="Checkmark"
            height={20}
            width={20}
          />
          <p className="font-light text-myGray text-sm">
            4 years of professional working experience
          </p>
        </div>
        <div className="flex gap-2 mb-3 items-start">
          <Image
            src={"/Assets/CheckmarkVerified.svg"}
            alt="Checkmark"
            height={20}
            width={20}
          />
          <p className="font-light text-myGray text-sm">
            Understanding of Next.js, React and Angular.
          </p>
        </div>
        <div className="flex gap-2 mb-3 items-start">
          <Image
            src={"/Assets/CheckmarkVerified.svg"}
            alt="Checkmark"
            height={20}
            width={20}
          />
          <p className="font-light text-myGray text-sm">
            Knowledge of REACT tools including React.js, Webpack, Enzyme, Redux,
            and Flux.
          </p>
        </div>
      </div>
      <Button label="Apply to job" />
    </div>
  );
};

export default BodyRight;
