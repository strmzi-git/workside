"use client";

import BodyLeft from "./BodyLeft";
import BodyRight from "./BodyRight";

const BodyContent = function () {
  return (
    <div className="h-[92%] pt-8 w-full flex gap-10">
      <BodyLeft />
      <BodyRight />
    </div>
  );
};

export default BodyContent;
