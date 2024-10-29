import {
  DashboardIcon,
  InventoryIcon,
  ItemIcon,
  SettingIcon,
  StorageIcon,
  TransactionIcon,
} from "../../svg";

interface SidebarItemType {
  name: string;
  route: string;
  svg: JSX.Element;
  label: string;
  children?: { label: string; route: string }[];
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
      route: "#",
      svg: <ItemIcon />,
      label: "Products",
      children: [
        {
          label: "Item",
          route: "/dashboard/items",
        },
        {
          label: "Supplier",
          route: "/dashboard/suppliers",
        },
      ],
    },
    {
      name: "Stocks",
      route: "/dashboard/stocks",
      svg: <InventoryIcon />,
      label: "Stock",
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
    {
      name: "Settings",
      route: "/dashboard/settings",
      svg: <SettingIcon />,
      label: "Settings",
    },
  ],
};
