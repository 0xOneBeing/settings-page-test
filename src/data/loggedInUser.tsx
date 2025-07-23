import type { LoggedInUserType } from "../types/types";

export const loggedInUser: LoggedInUserType = {
  firstName: "Olivia",
  lastName: "Rhye",
  email: "olivia@untitledui.com",
  imageSrc: "/olivia_rhye.jpg",
  activeRoles: [
    {
      value: "super admin",
      label: "Super admin",
      lastActive: "06/2023",
      isActive: true,
    },
    {
      value: "developer admin",
      label: "Developer admin",
      lastActive: "01/2023",
      isActive: false,
    },
    {
      value: "support admin",
      label: "Support admin",
      lastActive: "10/2022",
      isActive: false,
    },
  ],
};
