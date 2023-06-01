import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form";
import Input from "../inputs/Input";
import TextArea from "../inputs/TextArea";

interface BasicInfoProps {
  register: UseFormRegister<FieldValues>;
  errors: FieldErrors;
  handleFormChange: (id: string, value: string) => void;
}

const BasicInfo: React.FC<BasicInfoProps> = function ({
  register,
  errors,
  handleFormChange,
}) {
  return (
    <div>
      <Input
        label="Company Name"
        type="text"
        id="companyName"
        onChange={handleFormChange}
        register={register}
        errors={errors}
      />
      <Input
        label="Job Title"
        type="text"
        identifier="title"
        id="title"
        register={register}
        onChange={handleFormChange}
        errors={errors}
      />
      <Input
        label="Location"
        type="text"
        id="location"
        register={register}
        errors={errors}
        onChange={handleFormChange}
      />
      <TextArea
        label="Company Overview"
        required
        id="companyOverview"
        onChange={handleFormChange}
        register={register}
        errors={errors}
      />
    </div>
  );
};

export default BasicInfo;
