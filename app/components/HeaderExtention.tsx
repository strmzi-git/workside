interface HeaderExtentionProps {
  shouldShow?: boolean;
  alternative?: boolean;
}

const HeaderExtention: React.FC<HeaderExtentionProps> = function ({
  shouldShow,
  alternative,
}) {
  return (
    <div
      className={`
      ${alternative ? "text-white" : "text-myGray"}
       text-sm  flex items-center gap-4 mx-auto 
    ${
      shouldShow
        ? " absolute left-[50%] top-[50%] transform translate-y-[-50%] translate-x-[-50%]"
        : ""
    }
   
    `}
    >
      <p className="pt-1 cursor-pointer ${alternative ? 'border-b-myLightBlue border-opacity-80' : 'border-b-myBlack'}  border-b-2 hover:border-b-myGray duration-300 transition">
        Find a job
      </p>
      <p className="pt-1 cursor-pointer ${alternative ? 'border-b-myLightBlue border-opacity-80' : 'border-b-myBlack'}  border-b-2 hover:border-b-myGray duration-300 transition">
        Submit a job
      </p>
      <p className="pt-1 cursor-pointer ${alternative ? 'border-b-myLightBlue border-opacity-80' : 'border-b-myBlack'}  border-b-2 hover:border-b-myGray duration-300 transition">
        Buy me a coffee
      </p>
    </div>
  );
};

export default HeaderExtention;
