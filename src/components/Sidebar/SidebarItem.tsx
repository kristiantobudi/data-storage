import Link from "next/link";
import { usePathname } from "next/navigation";

interface SidebarItemType {
  route: string;
  label: string;
  svg: JSX.Element;
  children?: SidebarItemType[];
}

interface SidebarItemProps {
  item: SidebarItemType;
  pageName: string;
  setPageName: (name: string) => void;
}

const SidebarItem = ({ item, pageName, setPageName }: SidebarItemProps) => {
  const handleClick = () => {
    const updatePageName =
      pageName !== item.label.toLowerCase() ? item.label.toLowerCase() : "";
    setPageName(updatePageName);
  };

  const pathname = usePathname(); // Call usePathname function here

  const isActive = (item: SidebarItemType): boolean => {
    if (item.route === pathname) return true;
    if (item.children) {
      return item.children.some((child) => isActive(child));
    }
    return false;
  };

  const isItemActive = isActive(item);

  return (
    <li>
      <Link
        href={item.route}
        onClick={handleClick}
        className={`${
          isItemActive ? "bg-[#DBE2EF] text-[#F9F7F7]" : ""
        } group relative flex items-center gap-2 px-4 py-2 font-medium text-gray-800 duration-300 ease-in-out hover:text-white hover:bg-[#3F72AF] rounded-lg`}
      >
        {item.svg}
        {item.label}
        {item.children && (
          <svg
            className={`absolute right-4 top-1/2 -translate-y-1/2 fill-current ${
              pageName === item.label.toLowerCase() ? "rotate-180" : ""
            }`}
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M4.41107 6.9107C4.73651 6.58527 5.26414 6.58527 5.58958 6.9107L10.0003 11.3214L14.4111 6.91071C14.7365 6.58527 15.2641 6.58527 15.5896 6.91071C15.915 7.23614 15.915 7.76378 15.5896 8.08922L10.5896 13.0892C10.2641 13.4147 9.73651 13.4147 9.41107 13.0892L4.41107 8.08922C4.08563 7.76378 4.08563 7.23614 4.41107 6.9107Z"
              fill="currentColor"
            />
          </svg>
        )}
      </Link>
    </li>
  );
};

export default SidebarItem;
