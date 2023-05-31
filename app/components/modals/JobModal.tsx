"use client";
import useJobModal from "@/app/hooks/useJobModal";
import Modal from "./Modal";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import Input from "../inputs/Input";
import TextArea from "../inputs/TextArea";
import React, { ReactElement, useMemo, useState } from "react";
import Button from "../Button";
import { FaTrashAlt } from "react-icons/fa";
import ReactDOMServer from "react-dom/server";
import ReactDOM from "react-dom";

import ImageUploader from "../inputs/ImageUploader";
import {
  FormControl,
  FormControlLabel,
  FormLabel,
  IconButton,
  Radio,
  RadioGroup,
} from "@mui/material";

import { BsPlus } from "react-icons/bs";
import RequirementPage from "../formPages/RequirementPage";
import { ConstructionOutlined } from "@mui/icons-material";
enum FORM_STEP {
  BASIC_INFO = 0,
  IMAGE = 1,
  JOB_INFO = 2,
  JOB_INFO_2 = 3,
  EXTRA_INFO = 4,
}

const JobModal = function () {
  const jobModal = useJobModal();
  const [formStep, setFormStep] = useState(0);
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
  //   experience (beginner), education level, requirements, employment status
  const handleExperienceChange = (data: any) => {
    const radioValue = data.target.getAttribute("value");
    setCustomFormValue(experience, radioValue);
  };

  const handleEducationChange = (data: any) => {
    const radioValue = data.target.getAttribute("value");
    setCustomFormValue(educationLevel, radioValue);
  };
  if (formStep === FORM_STEP.JOB_INFO) {
    bodyContent = (
      <FormControl>
        <FormLabel id="demo-radio-buttons-group-label">Experience</FormLabel>
        <RadioGroup
          aria-labelledby="demo-radio-buttons-group-label"
          defaultValue="beginner"
          name="radio-buttons-group"
          onChange={(data) => {
            handleExperienceChange(data);
          }}
        >
          <FormControlLabel
            value="Beginner"
            control={<Radio />}
            label="Beginner"
          />
          <FormControlLabel
            value="Intermediate"
            control={<Radio />}
            label="Intermediate"
          />
          <FormControlLabel
            value="Advanced"
            control={<Radio />}
            label="Advanced"
          />
          <FormControlLabel value="Expert" control={<Radio />} label="Expert" />
        </RadioGroup>
        <FormLabel id="demo-radio-buttons-group-label">
          Minimum Education Level
        </FormLabel>
        <RadioGroup
          aria-labelledby="demo-radio-buttons-group-label"
          defaultValue="Bachelor"
          name="radio-buttons-group"
          onChange={(data) => {
            handleEducationChange(data);
          }}
        >
          <FormControlLabel
            value="Highschool"
            control={<Radio />}
            label="Highschool"
          />
          <FormControlLabel
            value="Bachelor"
            control={<Radio />}
            label="Bachelor"
          />
          <FormControlLabel value="Master" control={<Radio />} label="Master" />
          <FormControlLabel value="PhD" control={<Radio />} label="PhD" />
        </RadioGroup>
      </FormControl>
    );
  }

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

  const addFormReq = () => {
    // const currentReqs = getValues().requirements;
    // console.log("Hello");
    console.log(getValues());
    // // setValue("requirements", [...currentReqs, "Hello world"]);
    // console.log(getValues());
  };

  // if (formStep === FORM_STEP.JOB_INFO_2) {
  //   bodyContent = (
  //     <div id="jobRequirements" className="max-h-[200px] overflow-scroll">
  //       {...requirements}
  //       <div
  //         onClick={newRequirementField}
  //         className={`w-full flex items-center justify-center border py-1 bg-myLightBlue opacity-70 duration-300 hover:opacity-80 cursor-pointer rounded-md ${
  //           requirements.length !== 0 && "-mt-[10px]"
  //         } text-white gap-2`}
  //       >
  //         {" "}
  //         Add job requirement
  //         <BsPlus size={25} color="white" />
  //       </div>
  //     </div>
  //   );
  // }

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
      bodyContent={
        <RequirementPage
          iconFunctionality={removeRequirementField}
          register={register}
          onChange={handleInputChange}
          errors={errors}
          addFormReq={addFormReq}
          requirements={requirements}
          newRequirementField={newRequirementField}
        />
      }
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
// experience (beginner), education level,

// Job info 2
// requirements, employment status

// Extra info
// Keywords (frontend, backend, ai, ds)
