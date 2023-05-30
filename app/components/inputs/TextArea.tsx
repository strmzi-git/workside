import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form";

interface TextAreaProps {
  label?: string;
  register: UseFormRegister<FieldValues>;
  required?: boolean;
  id: string;
  errors: FieldErrors;
}

const TextArea: React.FC<TextAreaProps> = function ({
  label,
  register,
  required,
  id,
  errors,
}) {
  return (
    <div
      className={`relative peer-focus:border-black p-2 overflow-hidden  border-2 pt-4 rounded-lg h-[110px]
      ${errors[id] ? "border border-rose-500" : "border-neutral-300"}
      `}
    >
      <textarea
        placeholder=" "
        {...register(id, { required })}
        rows={4}
        className="focus:border-black container-snap text-myDarkBlue overflow-y-scroll w-full focus:outline-none peer"
      />
      <label
        className={`left-4 peer-focus:text-myDarkBlue  top-2 absolute peer-focus:-translate-y-2 peer-focus:scale-[0.68] duration-300  scale-[0.80] -translate-y-[10px] peer-placeholder-shown:-translate-y-0 peer-placeholder-shown:scale-[1] origin-[0]
      ${errors[id] ? "text-rose-500 " : "text-myGray"}
      `}
      >
        {label}
      </label>
    </div>
  );
};
export default TextArea;
