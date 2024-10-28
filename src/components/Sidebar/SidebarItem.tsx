import Link from "next/link";
import { usePathname } from "next/navigation";

interface SidebarItemType {
  name: string;
  route: string;
  svg: JSX.Element;
  label: string;
  children?: { label: string; route: string }[];
}

interface SidebarItemProps {
  item: SidebarItemType;
  pageName: string;
  setPageName: (name: string) => void;
}

const SidebarItem = ({ item, pageName, setPageName }: SidebarItemProps) => {
  const pathname = usePathname();

  const handleClick = () => {
    const updatePageName =
      pageName !== item.label.toLowerCase() ? item.label.toLowerCase() : "";
    setPageName(updatePageName);
  };

  const isActive = (
    currentItem: SidebarItemType | { label: string; route: string }
  ): boolean => {
    if (currentItem.route === pathname) return true;
    if ("children" in currentItem) {
      return (
        currentItem.children?.some((child) => child.route === pathname) ?? false
      );
    }
    return false;
  };

  const isItemActive = isActive(item);

  return (
    <li>
      <Link
        href={item.route}
        onClick={handleClick}
        className={`group relative flex items-center gap-2 px-4 py-2 font-medium duration-300 ease-in-out rounded-lg ${
          isItemActive
            ? "bg-[#3F72AF] text-[#F9F7F7]"
            : "text-gray-800 hover:text-white hover:bg-[#3F72AF]"
        }`}
      >
        {item.svg}
        {item.label}
        {item.children && (
          <svg
            className={`absolute right-4 top-1/2 -translate-y-1/2 fill-current transition-transform duration-200 ease-in-out ${
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

      {item.children && pageName === item.label.toLowerCase() && (
        <ul className="mt-4 space-y-2 border-l-2 border-gray-200 pl-5">
          {item.children.map((child, index) => (
            <li key={index}>
              <Link
                href={child.route}
                className={`group flex items-center gap-2 px-4 py-2 text-sm font-medium duration-300 ease-in-out rounded-lg ${
                  pathname === child.route
                    ? "bg-[#3F72AF] text-[#F9F7F7]"
                    : "text-gray-800 hover:text-white hover:bg-[#3F72AF]"
                }`}
              >
                {child.label}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </li>
  );
};

export default SidebarItem;
