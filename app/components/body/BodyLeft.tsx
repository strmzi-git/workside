import Filter from "./Filter";
import JobOverview from "./JobOverview";

const BodyLeft = function () {
  return (
    <div className="w-[50%] h-[100%] flex ">
      <Filter />
      <div className="xl:pl-12 flex flex-col gap-6">
        <JobOverview />
        <JobOverview />
      </div>
    </div>
  );
};

export default BodyLeft;
