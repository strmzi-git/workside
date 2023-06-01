"use client";

import useLoginModal from "@/app/hooks/useLoginModal";
import { useCallback, useEffect, useMemo, useState } from "react";
import { AiOutlineConsoleSql } from "react-icons/ai";
import { RxCross1 } from "react-icons/rx";
import { useMediaQuery } from "react-responsive";
interface ModalProps {
  bodyContent?: JSX.Element;
  title: string;
  subtitle: string;
  onClose: () => void;
  modalIsOpen: boolean;
  footer?: JSX.Element;
}

const Modal: React.FC<ModalProps> = function ({
  bodyContent,
  title,
  onClose,
  subtitle,
  modalIsOpen,
  footer,
}) {
  const [isOpen, setIsOpen] = useState(false);

  const smallScreen = useMediaQuery({ minWidth: 450 });

  useEffect(() => {
    setIsOpen(modalIsOpen);
  }, [modalIsOpen]);

  const handleClose = useCallback(() => {
    setIsOpen(false);
    setTimeout(() => {
      onClose();
    }, 300);
  }, []);
  if (!modalIsOpen) return null;

  return (
    <div
      className={`absolute top-0 left-0 h-[100%] w-[100%] bg-myBlack bg-opacity-60 z-40 flex items-center justify-center`}
    >
      <div
        className={`bg-white duration-300 transition h-auto max-h-[590px] overflow-y-scroll w-[80%] z-50 3xs:w-5/6 sm:w-4/6 md:w-3/6 xl:w-2/6 rounded-lg overflow-hidden py-4 ${
          smallScreen ? "px-4" : "px-0"
        } ${
          isOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-full"
        }`}
      >
        {/* HEADER */}
        <div className="h-[75px] bg-white w-full text-center pb-0 relative">
          <RxCross1
            size={20}
            className="absolute top-2 left-4 cursor-pointer"
            onClick={handleClose}
          />
          <p className="text-3xl font-normal mb-1">{title}</p>
          <p className="text-md font-light text-myGray">{subtitle}</p>
        </div>
        <hr />
        {/* BODY CONTENT */}
        <div className="p-4">{bodyContent}</div>
        {footer && (
          <>
            {" "}
            <hr />
            <div className="p-4">{footer}</div>
          </>
        )}
      </div>
    </div>
  );
};

export default Modal;
