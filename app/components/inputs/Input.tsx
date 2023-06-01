import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form";
import { IconType } from "react-icons";

interface InputProps {
  label: string;
  customError?: boolean;
  id: string;
  identifier?: string;
  sendIdentifier?: boolean;
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
  customError,
  type,
  identifier,
  iconFunctionality,
  sendIdentifier,
  icon: Icon,
  value,
}) {
  return (
    <div className="w-full relative p-[2px] h-[60px] mb-3">
      <input
        id={identifier && identifier}
        type={type}
        value={value}
        {...register(identifier || id, { required: true })}
        onChange={(e) => {
          if (!sendIdentifier) {
            onChange && onChange(id, e.target.value);
          } else {
            onChange && onChange(e.target.id, e.target.value);
          }
        }}
        placeholder=" "
        className={`w-full outline-none hover:outline-none rounded-md  focus:border-black border-2 text-md s h-[100%] duration-300 px-4 py-2 pt-3 text-myDarkBlue peer 
        ${
          customError
            ? "border-rose-400 focus:border-rose-400"
            : "border-neutral-300"
        }
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
        ${
          customError ? "text-rose-400 peer-focus:text-rose-600" : "text-myGray"
        }
        ${errors[id] ? "text-rose-600" : "text-myGray"} `}
      >
        {label}
      </label>
    </div>
  );
};

export default Input;
