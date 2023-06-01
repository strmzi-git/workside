import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form";
import Input from "../inputs/Input";
import { useState } from "react";
import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
} from "@mui/material";
interface ExtraInfoProps {
  register: UseFormRegister<FieldValues>;
  errors: FieldErrors;
  setValue: (id: string, value: string) => void;
}
const ExtraInfo: React.FC<ExtraInfoProps> = function ({
  register,
  errors,
  setValue,
}) {
  const [customError, setCustomError] = useState(false);
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (value: string) => {
    const keywords = value.split(" ");

    if (keywords.length >= 6) {
      setCustomError(true);
    } else {
      setCustomError(false);
    }
    setInputValue(value);
  };
  return (
    <div className="">
      <Input
        customError={customError}
        value={inputValue}
        onChange={(id, value) => {
          console.log(id, value);
          handleInputChange(value);
        }}
        label="Seperate <6 keywords by a space"
        id="keywords"
        register={register}
        errors={errors}
        type="text"
      />
      <FormControl>
        <FormLabel id="demo-radio-buttons-group-label">
          Employment type
        </FormLabel>
        <RadioGroup
          aria-labelledby="demo-radio-buttons-group-label"
          defaultValue="Internship"
          name="radio-buttons-group"
          onChange={(data: any) => {
            const value = data.target.getAttribute("value");
            setValue("experience", value);
          }}
        >
          <FormControlLabel
            value="Internship"
            control={<Radio />}
            label="Internship"
          />
          <FormControlLabel
            value="PartTime"
            control={<Radio />}
            label="Part-time"
          />
          <FormControlLabel
            value="Full-time"
            control={<Radio />}
            label="Full-time"
          />
        </RadioGroup>
      </FormControl>
    </div>
  );
};
// Tags,
export default ExtraInfo;
