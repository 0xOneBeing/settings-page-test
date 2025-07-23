import { SearchOutlined } from "@ant-design/icons";
import { Button, Input, Menu } from "antd";
import { LogOut } from "lucide-react";
import { menuItems } from "../../data/menuItems";
import { loggedInUser } from "../../data/loggedInUser";

export default function SiderContent() {
  return (
    <section className="sider-content">
      <div className="brand flex items-center justify-center gap-2 mt-4 px-5 text-center">
        <img src="/logo.svg" alt="brand-logo" />
        <p className="brand-text text-xl text-[var(--grey-900)]">Untitled UI</p>
      </div>

      <div className="flex items-center justify-center px-3 my-6 !mx-auto">
        <Input
          size="large"
          placeholder={loggedInUser?.firstName + " " + loggedInUser?.lastName}
          prefix={<SearchOutlined style={{ fontSize: "20px" }} />}
        />
      </div>

      <Menu
        theme="dark"
        mode="inline"
        items={menuItems}
        defaultSelectedKeys={["settings"]}
      />

      <div className="my-6 px-4 py-5 rounded-2xl bg-[var(--grey-50)]">
        <h1 className="text-sm font-[500] text-[var(--grey-900)] mb-2">
          New features available!
        </h1>

        <p className="text-sm font-light text-gray-500 mb-4">
          Check out the new dashboard view. Pages now load faster.
        </p>

        <div className="w-[215] h-[136]">
          <img
            src="/new_feature_graphics.jpg"
            className=" rounded-2xl object-contain"
          />
        </div>
      </div>

      <div className="px-3 mb-6 !mx-auto">
        <hr className="border-gray-200" />
      </div>

      <div className="flex items-center justify-center">
        <div className="flex gap-5 items-start">
          <img
            alt={loggedInUser?.firstName + " " + loggedInUser?.lastName}
            src={loggedInUser?.imageSrc}
            className="rounded-full w-10 h-10 object-contain"
          />

          <div>
            <h1 className="text-sm text-[var(--grey-900)] mb-0">
              {loggedInUser?.firstName} {loggedInUser?.lastName}
            </h1>
            <p className="text-sm text-[var(--grey-500)]">
              {loggedInUser?.email}
            </p>
          </div>

          <Button
            type={undefined}
            icon={<LogOut size={16} />}
            style={{
              border: 0,
              color: "var(--grey-500)",
              backgroundColor: "var(--white-color)",
            }}
          />
        </div>
      </div>
    </section>
  );
}
