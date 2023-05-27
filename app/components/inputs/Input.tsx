import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form";

interface InputProps {
  label: string;
  id: string;
  register: UseFormRegister<FieldValues>;
  errors: FieldErrors;
  type: string;
}

const Input: React.FC<InputProps> = function ({
  label,
  register,
  id,
  errors,
  type,
}) {
  return (
    <div className="w-full relative p-[2px] h-[60px] mb-3">
      <input
        type={type}
        {...register(id, { required: true })}
        placeholder=" "
        className={`w-full outline-none hover:outline-none rounded-md  focus:border-black border-2 text-md s h-[100%] duration-300 px-4 py-2 pt-3 text-myDarkBlue peer 
        ${errors[id] ? "border-rose-400" : "border-neutral-400"}`}
      />
      <label
        className={`absolute peer-focus:text-myDarkBlue duration-300 transition transform top-1 left-[19px] text-sm peer-placeholder-shown:translate-y-[14px] peer-placeholder-shown:scale-[1.2] origin-[0] peer-focus:translate-y-[1px] peer-focus:scale-[0.8]
        ${errors[id] ? "text-rose-400" : "text-myGray"} `}
      >
        {label}
      </label>
    </div>
  );
};

export default Input;
