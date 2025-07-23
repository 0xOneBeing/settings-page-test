import type { MenuProps } from "antd";
import {
  ChartNoAxesColumn,
  Flag,
  House,
  Layers,
  LifeBuoy,
  Settings,
  SquareCheckBig,
  Users,
} from "lucide-react";

export const menuItems: MenuProps["items"] = [
  {
    key: "home",
    icon: <House size={16} />,
    label: "Home",
  },
  {
    key: "dashboard",
    icon: <ChartNoAxesColumn size={16} />,
    label: "Dashboard",
  },
  {
    key: "projects",
    icon: <Layers size={16} />,
    label: "Projects",
  },
  {
    key: "tasks",
    icon: <SquareCheckBig size={16} />,
    label: "Tasks",
  },
  {
    key: "reporting",
    icon: <Flag size={16} />,
    label: "Reporting",
  },
  {
    key: "users",
    icon: <Users size={16} />,
    label: "Users",
  },
  {
    key: "support",
    icon: <LifeBuoy size={16} />,
    label: "Support",
  },
  {
    key: "settings",
    icon: <Settings size={16} />,
    label: "Settings",
  },
];
