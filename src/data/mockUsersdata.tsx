import type { AvailableRolesType, UsersTableDataType } from "../types/types";

export const usersTable: UsersTableDataType = [
  {
    key: "1",
    name: "Super admin",
    type: "DEFAULT",
    dateCreated: "Jan 1, 2023",
    status: "Active",
    roleUsers: [
      "https://images.unsplash.com/photo-1494790108755-2616b612b1a8?w=32&h=32&fit=crop&crop=face",
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=32&h=32&fit=crop&crop=face",
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=32&h=32&fit=crop&crop=face",
    ],
    userCount: 6,
  },
  {
    key: "2",
    name: "Merchant admin",
    type: "DEFAULT",
    dateCreated: "Feb 1, 2023",
    status: "Active",
    roleUsers: [
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32&h=32&fit=crop&crop=face",
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=32&h=32&fit=crop&crop=face",
    ],
    userCount: 4,
  },
  {
    key: "3",
    name: "Support admin",
    type: "DEFAULT",
    dateCreated: "Feb 1, 2023",
    status: "Active",
    roleUsers: [
      "https://images.unsplash.com/photo-1494790108755-2616b612b1a8?w=32&h=32&fit=crop&crop=face",
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=32&h=32&fit=crop&crop=face",
    ],
    userCount: 3,
  },
  {
    key: "4",
    name: "Sales personnel",
    type: "CUSTOM",
    dateCreated: "Mar 1, 2023",
    status: "Active",
    roleUsers: [
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=32&h=32&fit=crop&crop=face",
    ],
    userCount: 2,
  },
  {
    key: "5",
    name: "Deputy sales personnel",
    type: "CUSTOM",
    dateCreated: "Apr 1, 2023",
    status: "Inactive",
    roleUsers: [
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32&h=32&fit=crop&crop=face",
    ],
    userCount: 2,
  },
  {
    key: "6",
    name: "Developer admin",
    type: "SYSTEM-CUSTOM",
    dateCreated: "May 1, 2023",
    status: "Active",
    roleUsers: [
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=32&h=32&fit=crop&crop=face",
    ],
    userCount: 3,
  },
  {
    key: "7",
    name: "Developer basic",
    type: "SYSTEM-CUSTOM",
    dateCreated: "Jun 1, 2023",
    status: "Active",
    roleUsers: [
      "https://images.unsplash.com/photo-1494790108755-2616b612b1a8?w=32&h=32&fit=crop&crop=face",
    ],
    userCount: 2,
  },
];

export const availableRoles: AvailableRolesType = [
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
];
