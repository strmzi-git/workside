"use client";
import useJobModal from "@/app/hooks/useJobModal";
import Modal from "./Modal";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import Input from "../inputs/Input";
import TextArea from "../inputs/TextArea";
import { useState } from "react";
import Button from "../Button";
import ImageUploader from "../inputs/ImageUploader";

enum FORM_STEP {
  BASIC_INFO = 0,
  IMAGE = 1,
  JOB_INFO = 2,
  EXTRA_INFO = 3,
}

const JobModal = function () {
  const jobModal = useJobModal();
  const [formStep, setFormStep] = useState(0);
  const {
    reset,
    handleSubmit,
    formState: { errors },
    register,
    watch,
    setValue,
  } = useForm<FieldValues>({
    defaultValues: {
      companyName: "",
      title: "",
      companyOverview: "",
      experience: "Beginner" || "Intermediate" || "Advanced" || "Expert",
      companyImg: "",
    },
  });

  const companyImg = watch("companyImg");

  const setCustomFormValue = (id: string, value: string) => {
    setValue(id, value);
  };

  const onSubmit: SubmitHandler<FieldValues> = function (data) {};

  const handleNext = () => {
    if (formStep !== FORM_STEP.EXTRA_INFO) {
      setFormStep(formStep + 1);
    } else {
      handleSubmit(onSubmit);
    }
  };

  const handleBack = () => {
    if (formStep !== FORM_STEP.BASIC_INFO) setFormStep(formStep - 1);
    return;
  };

  let bodyContent = <></>;
  if (formStep === FORM_STEP.BASIC_INFO) {
    bodyContent = (
      <div className="">
        <Input
          label="Company Name"
          type="text"
          id="companyname"
          register={register}
          errors={errors}
        />
        <Input
          label="Job Title"
          type="text"
          id="jobtitle"
          register={register}
          errors={errors}
        />
        <Input
          label="Location"
          type="text"
          id="location"
          register={register}
          errors={errors}
        />
        <TextArea
          label="Company Name"
          required
          id="companyname"
          register={register}
          errors={errors}
        />
      </div>
    );
  }

  if (formStep === FORM_STEP.IMAGE) {
    bodyContent = (
      <div className="">
        <ImageUploader
          value={companyImg}
          onChange={(value) => {
            setCustomFormValue("companyImg", value);
          }}
        />
      </div>
    );
  }
  let footer = (
    <div
      className="
    flex items-center justify-between gap-6"
    >
      <Button
        functionality={handleBack}
        label="Previous"
        disabled={formStep === FORM_STEP.BASIC_INFO}
      />
      <Button
        functionality={handleNext}
        label={formStep === FORM_STEP.EXTRA_INFO ? "Submit" : "Continue"}
      />
    </div>
  );
  return (
    <Modal
      modalIsOpen={jobModal.isOpen}
      onClose={jobModal.closeModal}
      title="Job Posting"
      subtitle="Create a new job listing!"
      bodyContent={bodyContent}
      footer={footer}
    />
  );
};

export default JobModal;

// Basic info
// companyName, title, companyOverview,  location

// Image
// Company img

// Job info
// experience (beginner), education level, requirements, employment status

// Extra info
// Keywords (frontend, backend, ai, ds)
