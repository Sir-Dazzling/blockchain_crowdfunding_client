import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import ThirdWebImage from "../../public/images/thirdweb.png";
import MenuIcon from "../../public/svgs/menu.svg";
import SearchIcon from "../../public/svgs/search.svg";
import navLinks from "../helpers/navlinks";
import PAGES from "../helpers/page-names";
import { NavbarProps } from "../interfaces/general";
import { generalAppSelector, setActiveLink, toggleMobileNavbar } from "../redux-store/reducers/general";
import CustomButton from "./custom-button";

const NavBar: React.FC<NavbarProps> = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const { mobileNavBarOpen, activeLink } = useSelector(generalAppSelector);

  const address = "0x";

  return (
    <div className="flex md:flex-row flex-col-reverse justify-between mb-[35px] gap-6">
      <div className="lg:flex-1 flex flex-row max-w-[458px] py-2 pl-4 pr-2 h-[52px] bg-[#1c1c24] rounded-[100px]">
        <input
          type="text"
          placeholder="Search for campaigns"
          className="flex w-full font-epilogue font-normal text-[14px] placeholder:text-[#4b5264] text-white bg-transparent outline-none"
        />
        <div className="w-[72px] h-full rounded-[20px] bg-[#4acd8d] flex justify-center items-center cursor-pointer">
          <Image src={SearchIcon} alt="search" className="w-[15px] h-[15px] object-contain" />
        </div>
      </div>
      <div className="sm:flex hidden flex-row justify-end gap-4">
        <CustomButton
          type="button"
          action={() => {
            if (address) {
              router.push(PAGES.CREATE_CAMPAIGN);
            } else {
              // TODO: connect()
            }
          }}
          title={address ? "Create a campaign" : "Connect"}
          styles={address ? "bg-[#1dc071]" : "bg-[#8c8c8c]"}
        />

        <Link href={PAGES.PROFILE}>
          <div className="w-[52px] h-[52px] rounded-full  bg-[#2c2f32] flex justify-center items-center cursor-pointer">
            <Image src={ThirdWebImage} alt="Thirdweb logo" className="w-3/5 h-3/5 object-contain" />
          </div>
        </Link>
      </div>

      {/* Small Screen navigation */}
      <div className="sm:hidden flex justify-between items-center relative">
        <div className="w-10 h-10 rounded-[10px] bg-[#2c2f32] flex justify-center items-center cursor-pointer">
          <Image src={ThirdWebImage} alt="Thirdweb logo" className="w-3/5 h-3/5 object-contain" />
        </div>
        <Image
          src={MenuIcon}
          alt="menu"
          className="w-[34px] h-[34px] object-contain cursor-pointer"
          onClick={() => dispatch(toggleMobileNavbar({ data: !mobileNavBarOpen }))}
        />
        <div
          className={`absolute top-[60px] left-0 right-0 bg-[#1c1c24] z-10 shadow-secondary py-4 ${
            !mobileNavBarOpen ? "-translate-y-[100vh]" : "translate-y-0"
          } transition-all duration-700`}>
          <ul className="mb-4">
            {navLinks.map((item, index) => (
              <li
                key={index}
                className={`flex p-4 ${activeLink === item.name && "bg-[#3a3a43]"} items-center cursor-pointer`}
                onClick={() => {
                  // setActiveLink(item.name);
                  dispatch(setActiveLink({ data: item.name }));
                  dispatch(toggleMobileNavbar({ data: false }));
                  router.push(item?.link as string);
                }}>
                <Image
                  src={item.imgUri}
                  alt={item.name}
                  className={`w-6 h-6 object-contain ${activeLink === item.name ? "grayscale-0" : "grayscale"}`}
                />
                <p
                  className={`ml-5 font-epilogue font-semibold text-sm ${
                    activeLink === item.name ? "text-[#1dc071]" : "text-[#808191]"
                  } capitalize`}>
                  {item.name}
                </p>
              </li>
            ))}
          </ul>

          <div className="flex mx-4">
            <CustomButton
              type="button"
              action={() => {
                if (address) {
                  router.push(PAGES.CREATE_CAMPAIGN);
                } else {
                  // TODO: connect()
                }
              }}
              title={address ? "Create a campaign" : "Connect"}
              styles={address ? "bg-[#1dc071]" : "bg-[#8c6dfd]"}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
