export interface UserTableItem {
  key: string | number;
  name:
    | "Super admin"
    | "Merchant admin"
    | "Support admin"
    | "Sales personnel"
    | "Deputy sales personnel"
    | "Developer admin"
    | "Developer basic";
  type: "DEFAULT" | "CUSTOM" | "SYSTEM-CUSTOM";
  dateCreated: string;
  status: "Active" | "Inactive";
  roleUsers: string[];
  userCount: number;
}

export interface AvailableRolesItem {
  value: "super admin" | "developer admin" | "support admin";
  label: "Super admin" | "Developer admin" | "Support admin";
  lastActive: string;
  isActive: boolean;
}

export interface TabsItemsType {
  key: string;
  label: string;
  children: React.ReactNode | string;
}

export type UsersTableDataType = UserTableItem[];
export type AvailableRolesType = AvailableRolesItem[];
export type TabsItemsTypeArray = TabsItemsType[];
