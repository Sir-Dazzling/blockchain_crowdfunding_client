/* eslint-disable @next/next/no-img-element */
import { NavIconProps, SidebarProps } from "../interfaces/general";
import navlinks from "../helpers/navlinks";
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

const NavIcon = ({ styles, name, imgUri, disabled, handleClick, activeLink }: NavIconProps) => (
  <div
    className={`w-[48px] h-[48px] rounded-[10px] ${
      activeLink && activeLink === name && `bg-[#2c2f32]`
    } flex justify-center items-center ${!disabled && "cursor-pointer"} ${styles}`}
    onClick={handleClick}>
    {!activeLink ? (
      <img src={imgUri} alt="logo" className="w-1/2 h-1.2" />
    ) : (
      <img src={imgUri} alt="logo" className={`w-1/2 h-1.2 ${activeLink !== name && "grayscale"}`} />
    )}
  </div>
);

const SideBar: React.FC<SidebarProps> = () => {
  const [activeLink, setActiveLink] = useState("home");
  const router = useRouter();

  return (
    <div className="flex justify-between items-center flex-col sticky top-5 h-[93vh]">
      <Link href="/">
        <NavIcon styles="w-[52px] h-[52px] bg-[#2cf32]" imgUri="/svgs/logo.svg" />
      </Link>

      <div className="flex-1 flex flex-col justify-between items-center bg-[#1c1c24] rounded-[20px] w-[76px] py-4 mt-12">
        <div className="flex flex-col justify-center items-center gap-3">
          {navlinks.map((item, index) => (
            <NavIcon
              key={index}
              {...item}
              activeLink={activeLink}
              handleClick={() => {
                if (!item.disabled) {
                  setActiveLink(item.name);
                  router.push(item?.link as string);
                }
              }}
            />
          ))}
        </div>

        <NavIcon styles="bg-[#1c1c24] shadow-secondary" imgUri="/svgs/sun.svg" />
      </div>
    </div>
  );
};

export default SideBar;
