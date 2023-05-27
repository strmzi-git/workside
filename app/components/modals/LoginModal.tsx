"use client";
import useLoginModal from "@/app/hooks/useLoginModal";
import Modal from "./Modal";
import { useRouter } from "next/navigation";
import {
  FieldValue,
  FieldValues,
  SubmitHandler,
  useForm,
} from "react-hook-form";
import Input from "../inputs/Input";
import Button from "../Button";
import { useCallback, useMemo, useState } from "react";
import { signIn } from "next-auth/react";
import { toast } from "react-hot-toast";
import axios from "axios";

const LoginModal = function () {
  const loginModal = useLoginModal();
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const defaultValues: any = {
    email: "",
    password: "",
  };
  if (loginModal.showSignUp) defaultValues["user"] = "";

  const {
    formState: { errors },
    handleSubmit,
    register,
    reset,
  } = useForm<FieldValues>({
    defaultValues,
  });

  const handleRegister = (data: any) => {
    axios
      .post("/api/register", { ...data })
      .then(() => {
        toast.success("Successfully created an account.");
        loginModal.closeModal();
        reset();
      })
      .catch(() => {
        toast.error("An error occured");
      })
      .finally(() => {
        setIsLoading(false);
        router.refresh();
      });
  };

  const handleLogin = (data: any) => {
    setIsLoading(true);
    signIn("credentials", { ...data, redirect: false }).then((res) => {
      if (res?.ok) {
        toast.success("Successfully logged in!");
        loginModal.closeModal();
        reset();
      } else {
        toast.error("Invalid login credentials provided...");
      }
      setIsLoading(false);
      router.refresh();
    });
  };
  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    if (data.name) return handleRegister(data);
    return handleLogin(data);
  };

  let body = (
    <div className="">
      <Input
        label="Email"
        id="email"
        type="text"
        register={register}
        errors={errors}
      />
      {loginModal.showSignUp && (
        <Input
          label="Name"
          id="name"
          type="text"
          register={register}
          errors={errors}
        />
      )}
      <Input
        type="password"
        label="Password"
        id="password"
        register={register}
        errors={errors}
      />
      <hr className="text-myBlack mb-3" />
      <Button
        disabled={isLoading}
        functionality={handleSubmit(onSubmit)}
        full
        large
        label={`${loginModal.showSignUp ? "Create account" : "Log in"}`}
      />
      <p className="text-center mt-2">
        {loginModal.showSignUp ? (
          <>
            Already got an account?{" "}
            <span
              className="cursor-pointer hover:underline text-neutral-500"
              onClick={() => {
                loginModal.setLogin();
                reset();
              }}
            >
              Log in!
            </span>
          </>
        ) : (
          <>
            Don't have an account yet?
            <span
              className="cursor-pointer hover:underline text-neutral-500"
              onClick={() => {
                reset();
                loginModal.setSignUp();
              }}
            >
              {" "}
              Sign up!
            </span>
          </>
        )}
      </p>
    </div>
  );
  useMemo(() => {
    console.log(loginModal.isOpen);
  }, [loginModal.isOpen]);
  if (!loginModal.isOpen) {
    return null;
  }
  return (
    <Modal
      title={loginModal.showSignUp ? "Sign up!" : "Log in!"}
      subtitle={`Welcome${
        loginModal.showSignUp ? ", sign up" : " back, log in"
      } to get started `}
      bodyContent={body}
    />
  );
};

export default LoginModal;
