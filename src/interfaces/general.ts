export interface LayoutTypes {
  title?: string;
  className?: string;
  children?: React.ReactNode;
}

export interface ToastProps {
  message: string;
  position: "bottom-center" | "bottom-left" | "bottom-right" | "top-center" | "top-left" | "top-right";
}

export interface NavLink {
  name: string;
  imgUri: string;
  link?: string;
  disabled: boolean;
}

export interface NavIconProps {
  styles?: any;
  name?: string;
  imgUri: string;
  activeLink?: string;
  disabled?: boolean;
  handleClick?: () => void;
}

export interface SidebarProps {}

export interface NavbarProps {}

export interface CustomButtonProps {
  type: "button" | "reset" | "submit";
  title: string;
  action: () => void;
  styles?: string;
}

export interface PayloadType {
  payload: {
    data?: [] | any;
    message?: string | any;
    error?: any;
    action?: () => void;
  };
}

export type ActiveLinkTypes = "home" | "create-campaign" | "payment" | "withdraw" | "profile" | "logout";

export interface GeneralAppState {
  mobileNavBarOpen: boolean;
  activeLink: ActiveLinkTypes;
}
