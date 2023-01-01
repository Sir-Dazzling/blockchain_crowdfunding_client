import React from "react";
import { FundCardProps } from "../../interfaces/campaign";
import TagTypeIcon from "../../../public/svgs/type.svg";
import ThirdWebImage from "../../../public/images/thirdweb.png";
import { daysLeft } from "../../helpers/utils";
import Image from "next/image";

const FundCard: React.FC<FundCardProps> = ({
  action,
  amountCollected,
  deadline,
  description,
  imageUri,
  owner,
  pId,
  target,
  title,
}) => {
  const remainingDays = daysLeft(deadline);

  return (
    <div className="sm:w-[288px] w-full rounded-[15px] bg-[#1c1c24] cursor-pointer" onClick={action}>
      <Image
        src={imageUri}
        alt="fund"
        className="w-full h-[158px] object-cover rounded-[15px]"
        width={100}
        height={158}
      />
      <div className="flex flex-col p-4">
        <div className="flex flex-row items-center mb-[18px]">
          <Image src={TagTypeIcon} alt="tag" className="w-[17px] h-[17px] object-contain" />
          <p className="ml-[12px] mt-[2px] font-epilogue font-medium text-xs text-[#808191]">Education</p>
        </div>
        <div className="block">
          <h3 className="font-epilogue font-semibold text-base text-white leading-[26px] truncate">{title}</h3>
          <p className="mt-[5px] font-epilogue font-normal text-xs text-[#808191] text-left leading-[18px] truncate">
            {description}
          </p>
        </div>

        <div className="flex justify-between flex-wrap mt-[15px] gap-2">
          <div className="flex flex-col">
            <h4 className="font-epilogue font-semibold text-sm text-[#b2b3bd] leading-[22px]">{amountCollected}</h4>
            <p className="mt-[3px] font-epilogue font-normal text-sm leading-[18px] text-[#808191] sm:max-w-[120px] truncate">
              Raised of {target}
            </p>
          </div>
          <div className="flex flex-col">
            <h4 className="font-epilogue font-semibold text-sm text-[#b2b3bd] leading-[22px]">{remainingDays}</h4>
            <p className="mt-[3px] font-epilogue font-normal text-sm leading-[18px] text-[#808191] sm:max-w-[120px] truncate">
              Days Left
            </p>
          </div>
        </div>

        <div className="flex items-center mt-5 gap-3">
          <div className="w-[30px] h-[30px] rounded-full flex justify-center items-center bg-[#13131a]">
            <Image src={ThirdWebImage} alt="user" className="w-1/2 h-1/2 object-contain" />
          </div>
          <p className="flex-1 font-epilogue font-normal text-xs text-[#808191] truncate">
            <span className="text-[#b2b3bd]">{owner}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default FundCard;
