import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form";
import Input from "../inputs/Input";
import TextArea from "../inputs/TextArea";

interface BasicInfoProps {
  register: UseFormRegister<FieldValues>;
  errors: FieldErrors;
}

const BasicInfo: React.FC<BasicInfoProps> = function ({ register, errors }) {
  return (
    <div>
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
};

export default BasicInfo;
