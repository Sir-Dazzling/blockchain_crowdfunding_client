import React from "react";
import { CustomInputProps } from "../interfaces/general";

const CustomInput: React.FC<CustomInputProps> = ({ action, label, placeholder, type, value, isTextArea, name }) => {
  return (
    <label className="flex-1 w-full flex flex-col">
      {label && (
        <span className="font-epilogue font-medium text-sm leading-[2px] text-[#808191] mb-[10px]">{label}</span>
      )}

      {isTextArea ? (
        <textarea
          required
          name={name}
          value={value}
          rows={10}
          onChange={action}
          placeholder={placeholder}
          className="py-[15px] sm:px-[25px] px-[15px] outline-none border-[1px] border-[#3a3a43] bg-transparent font-epilogue text-white text-sm placeholder:text-[#4b5264] rounded-[10px] sm: min-w-[300px]"
        />
      ) : (
        <input
          required
          name={name}
          value={value}
          onChange={action}
          type={type}
          step="0.1"
          placeholder={placeholder}
          className="py-[15px] sm:px-[25px] px-[15px] outline-none border-[1px] border-[#3a3a43] bg-transparent font-epilogue text-white text-sm placeholder:text-[#4b5264] rounded-[10px] sm: min-w-[300px]"
        />
      )}
    </label>
  );
};

export default CustomInput;
