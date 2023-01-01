import { NavLink } from "../interfaces/general";
import PAGES from "./page-names";
import DashboardIcon from "../../public/svgs/dashboard.svg";
import CampaignIcon from "../../public/svgs/create-campaign.svg";
import PaymentIcon from "../../public/svgs/payment.svg";
import WithdrawIcon from "../../public/svgs/withdraw.svg";
import ProfileIcon from "../../public/svgs/profile.svg";
import LogoutIcon from "../../public/svgs/logout.svg";

const NavLinks: NavLink[] = [
  {
    name: "home",
    imgUri: DashboardIcon,
    link: PAGES.HOME,
    disabled: false,
  },
  {
    name: "create-campaign",
    imgUri: CampaignIcon,
    link: PAGES.CREATE_CAMPAIGN,
    disabled: false,
  },
  {
    name: "payment",
    imgUri: PaymentIcon,
    disabled: true,
  },
  {
    name: "withdraw",
    imgUri: WithdrawIcon,
    link: PAGES.WITHDRAW,
    disabled: false,
  },
  {
    name: "profile",
    imgUri: ProfileIcon,
    disabled: false,
    link: PAGES.PROFILE,
  },
  {
    name: "logout",
    imgUri: LogoutIcon,
    disabled: true,
  },
];

export default NavLinks;
