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
