import { signIn } from "next-auth/react";
import { AiFillGithub } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";

const AuthButtons = function () {
  return (
    <div className="w-full flex flex-col gap-4 mt-3">
      <button
        disabled
        onClick={() => signIn("google")}
        className="flex opacity-60 pointer-events-none justify-center bg-myLightBlue bg-opacity-80 relative items-center w-full py-3 rounded-lg "
      >
        <FcGoogle
          className="  absolute top-[50%] left-4 translate-y-[-50%]"
          size={30}
        />
        Continue with Google
      </button>
      <button
        onClick={() => signIn("github")}
        className=" bg-myBlack text-white justify-center flex relative items-center w-full py-3 rounded-lg "
      >
        <AiFillGithub
          className=" absolute top-[50%] left-4 translate-y-[-50%]"
          size={30}
        />
        Continue with Github
      </button>
    </div>
  );
};

export default AuthButtons;
