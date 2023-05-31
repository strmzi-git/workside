import ImageUploader from "../inputs/ImageUploader";

interface ImagePageProps {
  companyImg: string;
  setValue: (id: string, value: string) => void;
}

const ImagePage: React.FC<ImagePageProps> = function ({
  companyImg,
  setValue,
}) {
  return (
    <div className="">
      <ImageUploader
        value={companyImg}
        onChange={(value) => {
          setValue("companyImg", value);
        }}
      />
    </div>
  );
};

export default ImagePage;
