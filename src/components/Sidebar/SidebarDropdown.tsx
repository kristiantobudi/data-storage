import Link from "next/link";
import { usePathname } from "next/navigation";

interface SidebarItemType {
  route: string;
  label: string;
}

interface SidebarDropdownProps {
  item: SidebarItemType[];
}

const SidebarDropdown = ({ item }: SidebarDropdownProps) => {
  const pathname = usePathname();

  return (
    <ul className="mb-6 mt-4 flex flex-col gap-3 pl-6">
      {item.map((subItem, index) => (
        <li key={index}>
          <Link
            href={subItem.route}
            className={`group relative flex items-center gap-2.5 rounded-md px-4 font-medium text-bodydark2 duration-300 ease-in-out hover:text-white ${
              pathname === subItem.route ? "text-white" : ""
            }`}
          >
            {subItem.label}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default SidebarDropdown;
