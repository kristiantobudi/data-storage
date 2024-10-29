"use client";

import useLocalStorage from "@/hooks/useLocalStorage";
import { MenuSidebar } from "./MenuSidebar";
import ClickOutside from "../ClickOutside";
import SidebarItem from "./SidebarItem";

interface SidebarProps {
  sidebarOpen: boolean;
  setSidebarOpen: (arg: boolean) => void;
}

interface SidebarSubItemType {
  label: string;
  route: string;
  svg?: JSX.Element;
}

interface SidebarItemType {
  name: string;
  route: string;
  svg: JSX.Element;
  label: string;
  children?: SidebarSubItemType[];
}

const Sidebar = ({ sidebarOpen, setSidebarOpen }: SidebarProps) => {
  const [pageName, setPageName] = useLocalStorage("selectedMenu", "dashboard");

  return (
    <ClickOutside onClick={() => setSidebarOpen(false)}>
      <aside
        className={`fixed left-0 top-0 z-9999 flex h-screen w-56 flex-col bg-[#F5EFFF] overflow-y-hidden duration-200 ease-linear lg:translate-x-0 ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between gap-2 px-6 py-5 lg:py-7">
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="block lg:hidden"
            aria-controls="sidebar"
          >
            <svg
              className="fill-current"
              width="20"
              height="18"
              viewBox="0 0 20 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M19 8.175H2.98748L9.36248 1.6875C9.69998 1.35 9.69998 0.825 9.36248 0.4875C9.02498 0.15 8.49998 0.15 8.16248 0.4875L0.399976 8.3625C0.0624756 8.7 0.0624756 9.225 0.399976 9.5625L8.16248 17.4375C8.31248 17.5875 8.53748 17.7 8.76248 17.7C8.98748 17.7 9.17498 17.625 9.36248 17.475C9.69998 17.1375 9.69998 16.6125 9.36248 16.275L3.02498 9.8625H19C19.45 9.8625 19.825 9.4875 19.825 9.0375C19.825 8.55 19.45 8.175 19 8.175Z"
                fill="currentColor"
              />
            </svg>
          </button>
        </div>
        <div className="no-scrollbar flex flex-col overflow-y-auto duration-200 ease-linear">
          <nav className="mt-6 px-4 py-4 lg:mt-9 lg:px-6">
            <div>
              <h3 className="mb-4 ml-4 text-sm font-semibold text-gray-900">
                {MenuSidebar.name}
              </h3>

              <ul className="mb-6 flex flex-col gap-2">
                {MenuSidebar.sidebar.map(
                  (sidebar: SidebarItemType, sidebarIndex: number) => (
                    <SidebarItem
                      key={sidebarIndex}
                      item={sidebar}
                      pageName={pageName}
                      setPageName={setPageName}
                    />
                  )
                )}
              </ul>
            </div>
          </nav>
        </div>
      </aside>
    </ClickOutside>
  );
};

export default Sidebar;
