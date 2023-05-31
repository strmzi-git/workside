"use client";
import useJobModal from "@/app/hooks/useJobModal";
import Modal from "./Modal";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import React, { useState } from "react";
import Button from "../Button";
// Form page components
import RequirementPage from "../formPages/RequirementPage";
import JobInfo from "../formPages/JobInfo";
import BasicInfo from "../formPages/BasicInfo";
import ImagePage from "../formPages/Image";
enum FORM_STEP {
  BASIC_INFO = 0,
  IMAGE = 1,
  JOB_INFO = 2,
  JOB_INFO_2 = 3,
  EXTRA_INFO = 4,
}

const JobModal = function () {
  const jobModal = useJobModal();
  const [formPage, setFormPage] = useState(0);
  // const [requirements, setRequirements] = useState<
  //   { value: string; identifier: string }[]
  // >([]);
  const {
    reset,
    handleSubmit,
    formState: { errors },
    register,
    getValues,
    watch,
    setValue,
  } = useForm<FieldValues>({
    defaultValues: {
      companyName: "",
      title: "",
      companyOverview: "",
      experience: "Beginner" || "Intermediate" || "Advanced" || "Expert",
      educationLevel: "Highschool" || "Bachelor" || "Master" || "PhD",
      companyImg: "",
      requirements: [],
    },
  });

  const companyImg = watch("companyImg");
  const experience = watch("experience");
  const educationLevel = watch("educationLevel");
  const requirements = watch("requirements");

  const setCustomFormValue = (id: string, value: any) => {
    setValue(id, value);
  };

  const onSubmit: SubmitHandler<FieldValues> = function (data) {};

  const handleNext = () => {
    console.log(formPage);
    if (formPage !== FORM_STEP.EXTRA_INFO) {
      setFormPage(formPage + 1);
    } else {
      handleSubmit(onSubmit);
    }
  };

  const handleBack = () => {
    if (formPage !== FORM_STEP.BASIC_INFO) setFormPage(formPage - 1);
    return;
  };

  //   experience (beginner), education level, requirements, employment status
  const handleExperienceChange = (data: any) => {
    const radioValue = data.target.getAttribute("value");
    setCustomFormValue(experience, radioValue);
  };

  const handleEducationChange = (data: any) => {
    const radioValue = data.target.getAttribute("value");
    setCustomFormValue(educationLevel, radioValue);
  };

  const removeRequirementField = function (id: string) {
    const newReqs = requirements.filter((req: any) => req.identifier !== id);

    setCustomFormValue("requirements", newReqs);
    // setRequirements(newReqs);
  };

  const newRequirementField = () => {
    const randomIdentifier = Math.random().toString();
    const newInput = { identifier: randomIdentifier, value: "" };
    setCustomFormValue("requirements", [...requirements, newInput]);
    // setRequirements((reqs) => [...reqs, newInput]);
  };

  const handleInputChange = (value: string, id: string) => {
    const index = requirements.findIndex(
      (input: any) => input.identifier === id
    );
    if (!index && index !== 0) return;
    const newRequirements = [...requirements];
    const newFocusReq = requirements[index];
    newFocusReq.value = value;
    newRequirements[index] = newFocusReq;
    setCustomFormValue("requirements", newRequirements);
    // setRequirements(newRequirements);
  };

  let footer = (
    <div
      className="
    flex items-center justify-between gap-6"
    >
      <Button
        functionality={handleBack}
        label="Previous"
        disabled={formPage === FORM_STEP.BASIC_INFO}
      />
      <Button
        functionality={handleNext}
        label={formPage === FORM_STEP.EXTRA_INFO ? "Submit" : "Continue"}
      />
    </div>
  );

  if (formPage === FORM_STEP.BASIC_INFO) {
    return (
      <Modal
        modalIsOpen={jobModal.isOpen}
        onClose={jobModal.closeModal}
        title="Job Posting"
        subtitle="Create a new job listing!"
        bodyContent={<BasicInfo register={register} errors={errors} />}
        footer={footer}
      />
    );
  }
  if (formPage === FORM_STEP.IMAGE) {
    return (
      <Modal
        modalIsOpen={jobModal.isOpen}
        onClose={jobModal.closeModal}
        title="Job Posting"
        subtitle="Create a new job listing!"
        bodyContent={
          <ImagePage companyImg={companyImg} setValue={setCustomFormValue} />
        }
        footer={footer}
      />
    );
  }
  if (formPage === FORM_STEP.JOB_INFO) {
    return (
      <Modal
        modalIsOpen={jobModal.isOpen}
        onClose={jobModal.closeModal}
        title="Job Posting"
        subtitle="Create a new job listing!"
        bodyContent={
          <JobInfo
            handleEducationChange={handleEducationChange}
            handleExperienceChange={handleExperienceChange}
          />
        }
        footer={footer}
      />
    );
  }
  if (formPage === FORM_STEP.JOB_INFO_2) {
    return (
      <Modal
        modalIsOpen={jobModal.isOpen}
        onClose={jobModal.closeModal}
        title="Job Posting"
        subtitle="Create a new job listing!"
        bodyContent={
          <RequirementPage
            iconFunctionality={removeRequirementField}
            register={register}
            onChange={handleInputChange}
            errors={errors}
            requirements={requirements}
            newRequirementField={newRequirementField}
          />
        }
        footer={footer}
      />
    );
  }
};

export default JobModal;
