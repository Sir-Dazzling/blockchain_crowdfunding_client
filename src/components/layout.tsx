import Head from "next/head";
import { LayoutTypes } from "../interfaces/general";
import SideBar from "./sidebar";
import NavBar from "./navbar";

const Layout: React.FC<LayoutTypes> = ({ className, title, children }) => {
  return (
    <>
      <Head>
        <link rel="shortcut-icon" href="/favicon.ico" type="image/x-icon" />
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
        <title>{`${title ?? "CrowdFunding"}`}</title>
      </Head>

      <div className="relative sm:-8 p-4 bg-[#13131a] min-h-screen flex flex-row">
        <div className="sm:flex hidden mr-10">
          <SideBar />
        </div>
        <div className="flex-1 max-sm:w-full max-w-[1280px] mx-auto sm:pr-5">
          <NavBar />
          <div className={className}>{children}</div>
        </div>
      </div>
    </>
  );
};

export default Layout;
