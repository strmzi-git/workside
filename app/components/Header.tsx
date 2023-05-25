import Image from "next/image";
import Button from "./Button";
import { signIn } from "next-auth/react";
import getCurrentUser from "../actions/getCurrentUser";

const Header = async function () {
  const currentUser = await getCurrentUser();
  return (
    <div className="w-content flex items-center justify-between h-[50px]  relative">
      <div className="">
        <Image
          src={"Assets/WorksideLogo.svg"}
          alt="Logo"
          width={100}
          height={100}
        />
      </div>
      <div className="text-myGray text-sm  flex items-center gap-4 mx-auto absolute left-[50%] top-[50%] transform translate-y-[-50%] translate-x-[-50%]">
        <p className="pt-1 cursor-pointer border-b-myBlack border-b-2 hover:border-b-myGray duration-300 transition">
          Find a job
        </p>
        <p className="pt-1 cursor-pointer border-b-myBlack border-b-2 hover:border-b-myGray duration-300 transition">
          Submit a job
        </p>
        <p className="pt-1 cursor-pointer border-b-myBlack border-b-2 hover:border-b-myGray duration-300 transition">
          Buy me a coffee
        </p>
      </div>
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-3 cursor-pointer">
          {currentUser ? (
            <>
              <Image
                src={currentUser.user?.image || "Assets/Avatar.svg"}
                className="rounded-full"
                alt="Profile Picture"
                width={30}
                height={30}
              />
              <p className="text-myGray text-sm">{currentUser.user?.name}</p>
              <Image
                src={"Assets/DownArrow.svg"}
                alt="Down arrow"
                width={10}
                height={10}
              />
            </>
          ) : (
            <>
              <Button label="Log in" auth />
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
