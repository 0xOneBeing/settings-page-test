import RolesTabUI from "../components/RolesTabUI/RolesTabUI";
import type { TabsItemsTypeArray } from "../types/types";

export const tabsItems: TabsItemsTypeArray = [
  {
    key: "my-details",
    label: "My details",
    children: "Content of My details",
  },
  {
    key: "profile",
    label: "Profile",
    children: "Content of Profile",
  },
  {
    key: "password",
    label: "Password",
    children: "Content of Password",
  },
  {
    key: "team",
    label: "Team",
    children: "Content of Team",
  },
  {
    key: "plan",
    label: "Plan",
    children: "Content of Plan",
  },
  {
    key: "roles",
    label: "Roles",
    children: <RolesTabUI />,
  },
  {
    key: "notifications",
    label: "Notifications",
    children: "Content of Notifications",
  },
  {
    key: "integrations",
    label: "Integrations",
    children: "Content of Integrations",
  },
  {
    key: "api",
    label: "API",
    children: "Content of API",
  },
];
