import { useState } from "react";
import { Button, Input, Radio } from "antd";
import type { RadioChangeEvent } from "antd";
import { CircleDot, CloudDownload, Mail, Plus, Users } from "lucide-react";

const style: React.CSSProperties = {
  display: "flex",
  width: "100%",
  flexDirection: "column",
  gap: 8,
};

export default function RolesTabUI() {
  const [connectAltEmail, setConnectAltEmail] = useState("alternativeEmail");
  const [activeRoleValue, setActiveRoleValue] = useState("super-admin");

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
                          style={{ width: 400 }}
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
          <div className="flex justify-between items-center">
            <h1 className="text-lg font-[500] text-[var(--grey-900)]">
              User Roles
            </h1>

            <Button
              type="default"
              icon={<CloudDownload size={16} />}
              className="!rounded-md border border-gray-400"
            >
              Download all
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
