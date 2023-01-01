import Image from "next/image";
import LoaderIcon from "../../public/svgs/loader.svg";
import { CustomLoaderProps } from "../interfaces/general";

const CustomLoader: React.FC<CustomLoaderProps> = ({ message }) => {
  return (
    <div className="fixed inset-0 z-10 h-screen bg-[rgba(0,0,0,0.7)] flex items-center justify-center flex-col">
      <Image src={LoaderIcon} alt="loader" className="w-[100px] h-[100px] object-contain" />
      <p className="mt-[20px] font-epilogue font-bold text-[20px] text-white text-center">
        {message} <br /> Please wait...
      </p>
    </div>
  );
};

export default CustomLoader;
