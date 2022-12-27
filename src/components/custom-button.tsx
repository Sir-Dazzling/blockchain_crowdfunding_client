import React from "react";
import { CustomButtonProps } from "../interfaces/general";

const CustomButton: React.FC<CustomButtonProps> = ({ action, title, type, styles }) => {
  return (
    <button
      type={type}
      className={`font-epilogue font-semibold text-base leading-[26px] text-white min-h-[52px] px-4 rounded-[10px] ${styles}`}
      onClick={action}>
      {title}
    </button>
  );
};

export default CustomButton;
