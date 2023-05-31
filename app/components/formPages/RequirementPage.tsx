import { BsPlus } from "react-icons/bs";
import { FaTrashAlt } from "react-icons/fa";
import Input from "../inputs/Input";
import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form";

interface RequirementPageProps {
  requirements: { value: string; identifier: string }[];
  newRequirementField: () => void;
  register: UseFormRegister<FieldValues>;
  onChange: (value: string, id: string) => void;
  errors: FieldErrors;
  iconFunctionality: (id: string) => void;
}

const RequirementPage: React.FC<RequirementPageProps> = function ({
  requirements,
  newRequirementField,
  register,
  onChange,
  errors,

  iconFunctionality,
}) {
  return (
    <div id="jobRequirements" className="max-h-[350px] overflow-scroll">
      {requirements.map((identifier) => {
        return (
          <Input
            icon={FaTrashAlt}
            key={identifier.identifier}
            identifier={identifier.identifier}
            onChange={onChange}
            value={identifier.value}
            label="Requirement"
            id="requirement"
            iconFunctionality={iconFunctionality}
            register={register}
            errors={errors}
            type="text"
          />
        );
      })}
      <div
        onClick={() => {
          newRequirementField();
        }}
        className={`w-full flex items-center justify-center border py-1 bg-myLightBlue opacity-70 duration-300 hover:opacity-80 cursor-pointer rounded-md ${
          requirements.length !== 0 && "-mt-[10px]"
        } text-white gap-2`}
      >
        Add job requirement
        <BsPlus size={25} color="white" />
      </div>
    </div>
  );
};

export default RequirementPage;
