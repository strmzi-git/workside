import { FieldValues, UseFormRegister } from "react-hook-form";
import ImageUploader from "../inputs/ImageUploader";

interface ImagePageProps {
  companyImg: string;
  register: UseFormRegister<FieldValues>;
  setValue: (id: string, value: string) => void;
}

const ImagePage: React.FC<ImagePageProps> = function ({
  companyImg,
  setValue,
  register,
}) {
  return (
    <div className="">
      <ImageUploader
        value={companyImg}
        register={register}
        onChange={(value) => {
          setValue("companyImg", value);
        }}
      />
    </div>
  );
};

export default ImagePage;
