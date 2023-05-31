import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form";
import { IconType } from "react-icons";

interface InputProps {
  label: string;
  id: string;
  identifier?: string;
  register: UseFormRegister<FieldValues>;
  errors: FieldErrors;
  iconFunctionality?: (value: string) => void;
  icon?: IconType;
  onChange?: (value: string, id: string) => void;
  type: string;
  value?: string;
}

const Input: React.FC<InputProps> = function ({
  label,
  register,
  id,
  onChange,
  errors,
  type,
  identifier,
  iconFunctionality,
  icon: Icon,
  value,
}) {
  return (
    <div className="w-full relative p-[2px] h-[60px] mb-3">
      <input
        id={identifier && identifier}
        type={type}
        value={value && value}
        onChange={(e) => {
          register(id, { required: true });
          onChange && onChange(e.target.value, e.target.id);
        }}
        placeholder=" "
        className={`w-full outline-none hover:outline-none rounded-md  focus:border-black border-2 text-md s h-[100%] duration-300 px-4 py-2 pt-3 text-myDarkBlue peer 
        ${errors[id] ? "border-rose-400" : "border-neutral-300"}`}
      />
      {Icon && iconFunctionality && identifier && (
        <div className="absolute cursor-pointer top-5 right-4 ">
          <Icon
            onClick={() => {
              iconFunctionality(identifier);
            }}
            size={20}
            className="text-myGray duration-300 hover:text-rose-400"
          />
        </div>
      )}
      <label
        className={`absolute peer-focus:text-myDarkBlue duration-300 transition transform top-1 left-[19px] text-sm peer-placeholder-shown:translate-y-[14px] peer-placeholder-shown:scale-[1.2] origin-[0] peer-focus:translate-y-[1px] peer-focus:scale-[0.8]
        ${errors[id] ? "text-rose-600" : "text-myGray"} `}
      >
        {label}
      </label>
    </div>
  );
};

export default Input;
