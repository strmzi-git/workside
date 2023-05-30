"use client";

import BodyLeft from "./BodyLeft";
import { useEffect, useMemo, useState } from "react";
import BodyRight from "./BodyRight";

import MediaQuery from "react-responsive";

const BodyContent = function () {
  return (
    <div className={`h-[92%] pt-8 w-full px-0 pb-4 flex gap-2`}>
      <BodyLeft />
      <MediaQuery minWidth={720}>
        {/* {windowSize >= 720 && <BodyRight />} */}
        <BodyRight />
      </MediaQuery>
    </div>
  );
};

export default BodyContent;
