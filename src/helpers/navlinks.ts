import { NavLink } from "../interfaces/general";
import PAGES from "./page-names";

const NavLinks: NavLink[] = [
  {
    name: "home",
    imgUri: "/svgs/dashboard.svg",
    link: PAGES.HOME,
    disabled: false,
  },
  {
    name: "campaign",
    imgUri: "/svgs/create-campaign.svg",
    link: PAGES.CREATE_CAMPAIGN,
    disabled: false,
  },
  {
    name: "payment",
    imgUri: "/svgs/payment.svg",
    disabled: true,
  },
  {
    name: "withdraw",
    imgUri: "/svgs/withdraw.svg",
    link: PAGES.WITHDRAW,
    disabled: false,
  },
  {
    name: "profile",
    imgUri: "/svgs/profile.svg",
    disabled: false,
  },
  {
    name: "logout",
    imgUri: "/svgs/logout.svg",
    disabled: true,
  },
];

export default NavLinks;
