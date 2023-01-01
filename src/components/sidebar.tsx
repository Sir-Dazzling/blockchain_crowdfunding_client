/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import LogoIcon from "../../public/svgs/logo.svg";
import SunIcon from "../../public/svgs/sun.svg";
import navlinks from "../helpers/navlinks";
import { NavIconProps, SidebarProps } from "../interfaces/general";
import { generalAppSelector, setActiveLink } from "../redux-store/reducers/general";

const NavIcon = ({ styles, name, imgUri, disabled, handleClick, activeLink }: NavIconProps) => (
  <div
    className={`w-[48px] h-[48px] rounded-[10px] ${
      activeLink && activeLink === name && `bg-[#2c2f32]`
    } flex justify-center items-center ${!disabled && "cursor-pointer"} ${styles}`}
    onClick={handleClick}>
    {!activeLink ? (
      <Image src={imgUri} alt="logo" className="w-1/2 h-1.2" />
    ) : (
      <Image src={imgUri} alt="logo" className={`w-1/2 h-1.2 ${activeLink !== name && "grayscale"}`} />
    )}
  </div>
);

const SideBar: React.FC<SidebarProps> = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const { activeLink } = useSelector(generalAppSelector);

  return (
    <div className="flex justify-between items-center flex-col sticky top-5 h-[93vh]">
      <Link href="/">
        <NavIcon styles="w-[52px] h-[52px] bg-[#2c2f32]" imgUri={LogoIcon} />
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
                  router.push(item?.link as string);
                  dispatch(setActiveLink({ data: item.name }));
                }
              }}
            />
          ))}
        </div>
        <NavIcon styles="bg-[#1c1c24] shadow-secondary" imgUri={SunIcon} />
      </div>
    </div>
  );
};

export default SideBar;
