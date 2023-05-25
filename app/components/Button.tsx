"use client";
import { signIn } from "next-auth/react";

interface ButtonProps {
  auth?: boolean;
  label?: string;
  functionality?: () => void;
}
const Button: React.FC<ButtonProps> = function ({
  label,
  functionality,
  auth,
}) {
  return (
    <>
      <button
        onClick={auth ? () => signIn("github") : functionality}
        className="bg-myLightBlue py-2 px-4 rounded-md text-md text-white font-semibold"
      >
        {label}
      </button>
    </>
  );
};

export default Button;
