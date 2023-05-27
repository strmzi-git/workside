"use client";
import Image from "next/image";
import useLoginModal from "../hooks/useLoginModal";
import { useState } from "react";
import { signOut } from "next-auth/react";

interface HeaderProps {
  currentUser: any;
}

const Header: React.FC<HeaderProps> = function ({ currentUser }) {
  const loginModal = useLoginModal();
  const [showLogout, setShowLogout] = useState(false);

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
      <div className="flex items-center gap-4 relative ">
        <div
          onClick={() => {
            if (!currentUser) {
              if (loginModal.isOpen) return loginModal.closeModal();
              loginModal.openModal();
            } else {
              if (showLogout) return setShowLogout(false);
              setShowLogout(true);
            }
          }}
          className="flex items-center gap-3 cursor-pointer"
        >
          <Image
            src={currentUser?.user?.image || "/placeholder.jpg"}
            className="rounded-full"
            alt="Profile Picture"
            width={30}
            height={30}
          />
          <p className="text-myGray text-sm">
            {currentUser?.user?.name || "Not logged in..."}
          </p>
          <Image
            src={"Assets/DownArrow.svg"}
            alt="Down arrow"
            className={` transform duration-300 ${
              loginModal.isOpen || showLogout ? "" : "-rotate-90"
            }`}
            width={10}
            height={10}
          />
        </div>{" "}
        {showLogout && (
          <div
            onClick={() => {
              signOut();
            }}
            className=" cursor-pointer absolute h-auto w-[100%] right-0 top-10 bg-myGray text-white p-2 text-center rounded-md shadow-md"
          >
            Logout
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
