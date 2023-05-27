"use client";
import { signIn } from "next-auth/react";
import { IconType } from "react-icons";

interface ButtonProps {
  icon?: IconType;
  disabled?: boolean;
  label: string;
  custom?: string;
  outline?: boolean;
  large?: boolean;

  full?: boolean;
  functionality?: () => void;
}

const Button: React.FC<ButtonProps> = function ({
  label,
  functionality,

  outline,
  custom,
  icon: Icon,
  disabled,
  large,
  full,
}) {
  return (
    <>
      <button
        disabled={disabled}
        onClick={functionality}
        className={`py-2 px-4 rounded-md text-md flex justify-center relative items-center text-white
        ${!custom ? (full ? "w-full" : "w-[50%]") : `w-[${custom}]`} 
          }
        ${outline ? "border border-myLightBlue" : "bg-myLightBlue"}
        ${large ? "py-[10px] text-lg" : "py-2 text-md"}
        ${disabled && " opacity-60"}
        `}
      >
        {Icon && (
          <Icon
            className="absolute top-[50%] left-[20px] -translate-y-[50%]"
            width={30}
            height={30}
          />
        )}
        {label}
      </button>
    </>
  );
};

export default Button;
