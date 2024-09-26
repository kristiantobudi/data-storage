import {
  DashboardIcon,
  InventoryIcon,
  ItemIcon,
  SettingIcon,
  StorageIcon,
  TransactionIcon,
} from "../../../public/svg";

interface SidebarItemType {
  name: string;
  route: string;
  svg: JSX.Element;
  label: string;
}

interface MenuGroupType {
  name: string;
  sidebar: SidebarItemType[];
}

export const MenuSidebar: MenuGroupType = {
  name: "Menu",
  sidebar: [
    {
      name: "Dashboard",
      route: "/dashboard",
      svg: <DashboardIcon />,
      label: "Dashboard",
    },
    {
      name: "Items",
      route: "/dashboard/items",
      svg: <ItemIcon />,
      label: "Items",
    },
    {
      name: "Inventory",
      route: "/dashboard/inventory",
      svg: <InventoryIcon />,
      label: "Inventory",
    },
    {
      name: "Settings",
      route: "/dashboard/settings",
      svg: <SettingIcon />,
      label: "Settings",
    },
    {
      name: "Transactions",
      route: "/dashboard/transactions",
      svg: <TransactionIcon />,
      label: "Transactions",
    },
    {
      name: "Storage",
      route: "/dashboard/storage",
      svg: <StorageIcon />,
      label: "Storage",
    },
  ],
};
