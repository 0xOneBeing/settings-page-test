import { useState, useEffect } from "react";
import { Avatar, Button, Flex, Input, Radio, Table, Tag } from "antd";
import type { RadioChangeEvent, TableColumnsType, TableProps } from "antd";
import {
  Check,
  CircleDot,
  CloudDownload,
  X,
  Mail,
  Plus,
  Users,
} from "lucide-react";
import { usersTable } from "../../data/mockUsersdata";
import type { UserTableItem } from "../../types/types";

type TableRowSelection<T extends object = object> =
  TableProps<T>["rowSelection"];

const style: React.CSSProperties = {
  display: "flex",
  width: "100%",
  flexDirection: "column",
  gap: 8,
};

const columns: TableColumnsType<UserTableItem> = [
  { title: "Name", dataIndex: "name" },
  { title: "Type", dataIndex: "type" },
  { title: "Date Created", dataIndex: "dateCreated" },
  {
    title: "Status",
    dataIndex: "status",
    render: (status) => (
      <div className="flex justify-center items-center w-full">
        {status === "Active" ? (
          <Tag
            color="success"
            icon={<Check size={16} />}
            className="!flex !items-center !justify-between !gap-1 !rounded-4xl !px-3"
          >
            {status}
          </Tag>
        ) : (
          <Tag
            icon={<X size={16} />}
            color="var(--orange-color)"
            className="!flex !items-center !justify-between !gap-1 !rounded-4xl !px-3"
          >
            {status}
          </Tag>
        )}
      </div>
    ),
  },
  {
    title: "Role users",
    dataIndex: "roleUsers",
    render: (roleUsers, record) => (
      <div className="flex items-center">
        <Avatar.Group
          maxCount={3}
          maxStyle={{ color: "#f56a00", backgroundColor: "#fde3cf" }}
        >
          {roleUsers.map((url: string, index: number) => (
            <Avatar key={index} src={url} />
          ))}
        </Avatar.Group>
        <span className="ml-2">+{record.userCount}</span>
      </div>
    ),
  },
  {
    title: <>&nbsp;</>,
    key: "action",
    render: () => <CloudDownload size={16} />,
  },
];

export default function RolesTabUI() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [connectAltEmail, setConnectAltEmail] = useState("alternativeEmail");
  const [activeRoleValue, setActiveRoleValue] = useState("super-admin");

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([]);
  const [loading, setLoading] = useState(false);

  const start = () => {
    setLoading(true);
    setTimeout(() => {
      setSelectedRowKeys([]);
      setLoading(false);
    }, 1000);
  };

  const onSelectChange = (newSelectedRowKeys: React.Key[]) => {
    console.log("selectedRowKeys changed: ", newSelectedRowKeys);
    setSelectedRowKeys(newSelectedRowKeys);
  };

  const rowSelection: TableRowSelection<UserTableItem> = {
    selectedRowKeys,
    onChange: onSelectChange,
  };

  const hasSelected = selectedRowKeys.length > 0;

  const onConnectedEmailChange = (e: RadioChangeEvent) => {
    setConnectAltEmail(e.target.value);
  };

  const onActiveRoleChange = (e: RadioChangeEvent) => {
    setActiveRoleValue(e.target.value);
  };

  return (
    <section>
      <div className="roles-tab-heading">
        <h1 className="text-lg text-[var(--grey-900)] font-[500] mb-1">
          User Roles
        </h1>
        <p className="text-sm text-[var(--grey-500)] font-normal mb-0">
          Update user roles, details, and informaton
        </p>
      </div>

      <hr className="border-[var(--grey-200)] mt-5 mb-6" />

      <div className="w-full">
        <div className="w-full flex flex-col lg:flex-row gap-8">
          <div>
            <p className="text-sm text-[var(--grey-700)] mb-0">Connect email</p>
            <p className="text-sm text-[var(--grey-500)] mb-0">
              Select role account
            </p>
          </div>

          <div className="w-full">
            <Radio.Group
              style={style}
              onChange={onConnectedEmailChange}
              value={connectAltEmail}
              options={[
                {
                  value: "accountEmail",
                  label: (
                    <>
                      <p className="text-sm text-[var(--grey-700)] mb-0">
                        My account email
                      </p>
                      <p className="text-sm text-[var(--grey-500)] mb-0">
                        olivia@untitledui.com
                      </p>
                    </>
                  ),
                },
                {
                  value: "alternativeEmail",
                  label: (
                    <>
                      <p className="text-sm text-[var(--grey-700)] mb-3">
                        An alternative email
                      </p>
                      {connectAltEmail === "alternativeEmail" && (
                        <Input
                          size="large"
                          prefix={<Mail size={16} />}
                          placeholder="billing@untitledui.com"
                          style={{ width: windowWidth < 1024 ? "100%" : 400 }}
                        />
                      )}
                    </>
                  ),
                },
              ]}
            />
          </div>
        </div>

        <hr className="border-[var(--grey-200)] my-5" />

        <div className="w-full flex flex-col lg:flex-row gap-8">
          <div>
            <p className="text-sm text-[var(--grey-700)] mb-0">Active role</p>
            <p className="text-sm text-[var(--grey-500)] mb-0">
              Select active role available to the user
            </p>
          </div>

          <div className="w-full">
            <div className="w-full mb-5">
              <Radio.Group
                block
                style={style}
                optionType="button"
                value={activeRoleValue}
                onChange={onActiveRoleChange}
                options={[
                  {
                    value: "super-admin",
                    className: "super-admin",
                    label: (
                      <div className="!w-full flex justify-between p-4 !rounded-3xl">
                        <div className="flex gap-5">
                          <Users size={40} />

                          <div className="text-start">
                            <p className="text-sm mb-0 font-semibold">
                              Super admin
                            </p>
                            <p className="text-sm mb-2 font-light">
                              Last active 06/2023
                            </p>
                            <p className="text-sm mb-0">
                              Set as default:{" "}
                              <span className="cursor-pointer hover:underline font-semibold">
                                Edit
                              </span>
                            </p>
                          </div>
                        </div>

                        <CircleDot size={12} />
                      </div>
                    ),
                  },
                  {
                    value: "developer-admin",
                    className: "developer-admin",
                    label: (
                      <div className="!w-full flex justify-between p-4 !rounded-3xl">
                        <div className="flex gap-5">
                          <Users size={40} />

                          <div className="text-start">
                            <p className="text-sm mb-0 font-semibold">
                              Developer admin
                            </p>
                            <p className="text-sm mb-2 font-light">
                              Last active 01/2023
                            </p>
                            <p className="text-sm mb-0">
                              Set as default:{" "}
                              <span className="cursor-pointer hover:underline font-semibold">
                                Edit
                              </span>
                            </p>
                          </div>
                        </div>

                        <CircleDot size={12} />
                      </div>
                    ),
                  },
                  {
                    value: "support-admin",
                    className: "support-admin",
                    label: (
                      <div className="!w-full flex justify-between p-4 !rounded-3xl">
                        <div className="flex gap-5">
                          <Users size={40} />

                          <div className="text-start">
                            <p className="text-sm mb-0 font-semibold">
                              Support admin
                            </p>
                            <p className="text-sm mb-2 font-light">
                              Last active 10/2021
                            </p>
                            <p className="text-sm mb-0">
                              Set as default:{" "}
                              <span className="cursor-pointer hover:underline font-semibold">
                                Edit
                              </span>
                            </p>
                          </div>
                        </div>

                        <CircleDot size={12} />
                      </div>
                    ),
                  },
                ]}
              />
            </div>

            <Button type="text" size="large" icon={<Plus size={16} />}>
              Add role to user
            </Button>
          </div>
        </div>

        <div className="mt-8 mb-12">
          <div className="flex flex-col lg:flex-row justify-center lg:justify-between items-center">
            <h1 className="text-lg font-[500] text-[var(--grey-900)]">
              User Roles
            </h1>

            <div className="flex items-center gap-1">
              {hasSelected ? (
                <Flex align="center" gap="middle">
                  <Button
                    type="primary"
                    onClick={start}
                    disabled={!hasSelected}
                    loading={loading}
                  >
                    {`Download ${selectedRowKeys.length} ${
                      selectedRowKeys.length === 1 ? "item" : "items"
                    }`}
                  </Button>
                </Flex>
              ) : null}

              <Button
                type="default"
                icon={<CloudDownload size={16} />}
                className="!rounded-md border border-gray-400"
              >
                Download all
              </Button>
            </div>
          </div>

          <div className="roles-table">
            <Flex gap="middle" vertical>
              <Table<UserTableItem>
                columns={columns}
                pagination={false}
                className="shadow-lg"
                dataSource={usersTable}
                rowSelection={rowSelection}
                scroll={{ x: "max-content" }}
              />
            </Flex>
          </div>
        </div>
      </div>
    </section>
  );
}
