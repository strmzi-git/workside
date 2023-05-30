"use client";

import Image from "next/image";
import useLoginModal from "../hooks/useLoginModal";
import { useState } from "react";
import { signOut } from "next-auth/react";
import MediaQuery, { useMediaQuery } from "react-responsive";
import HeaderExtention from "./HeaderExtention";
interface HeaderProps {
  currentUser: any;
}

const Header: React.FC<HeaderProps> = function ({ currentUser }) {
  const loginModal = useLoginModal();
  const shouldShow = useMediaQuery({ minWidth: 660 });

  const [showLogout, setShowLogout] = useState(false);

  return (
    <div className="flex flex-col gap-2">
      <div className="w-content flex items-center justify-between h-[50px] px-6 3xs:px-8 md:px-0 relative">
        <div className="">
          <Image
            src={"Assets/WorksideLogo.svg"}
            alt="Logo"
            width={100}
            height={100}
          />
        </div>
        <MediaQuery minWidth={620}>
          <HeaderExtention shouldShow={shouldShow} />
        </MediaQuery>

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

      <MediaQuery maxWidth={620}>
        <div className=" w-full flex items-center justify-center h-[45px] bg-myLightBlue bg-opacity-80 ">
          <HeaderExtention alternative />
        </div>
      </MediaQuery>
    </div>
  );
};

export default Header;
