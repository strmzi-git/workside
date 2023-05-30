import Image from "next/image";
import Button from "../Button";
import BodyRightContent from "./BodyRightContent";

const BodyRight = function () {
  return (
    <div className="flex-1 max-h-[600px] overflow-y-scroll min-w-min min-h-fit flex flex-col gap-3 text-white items-end bg-myDarkBlue rounded-md py-4 px-6">
      {/* Header */}
      <BodyRightContent />
    </div>
  );
};

export default BodyRight;
