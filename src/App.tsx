import React from "react";
import { SearchOutlined } from "@ant-design/icons";
import {
  ChartNoAxesColumn,
  Flag,
  House,
  Layers,
  LifeBuoy,
  LogOut,
  Settings,
  SquareCheckBig,
  Users,
} from "lucide-react";
import type { MenuProps } from "antd";
import { Button, ConfigProvider, Input, Layout, Menu } from "antd";

const { Content, Sider } = Layout;

const siderStyle: React.CSSProperties = {
  top: 0,
  bottom: 0,
  height: "100vh",
  overflow: "auto",
  position: "sticky",
  insetInlineStart: 0,
  scrollbarWidth: "thin",
  scrollbarGutter: "stable",
};

const items2: MenuProps["items"] = [
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

const App: React.FC = () => {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "#7f56d9",
          // colorBgBase: "var(--white-color)",
          // colorTextBase: "var(--grey-900)",
          // colorBorder: "var(--grey-200)",
          // colorTextPlaceholder: "var(--grey-400)",
          // colorTextDisabled: "var(--grey-400)",
          // colorTextHeading: "var(--grey-900)",
          // colorText: "var(--grey-900)",
          // colorTextQuaternary: "var(--grey-400)",
          // colorTextTertiary: "var(--grey-400)",
          // colorBgContainer: "var(--white-color)",
          // colorBorderSecondary: "var(--grey-200)",
          // colorFillSecondary: "var(--grey-200)",
          // colorBgElevated: "var(--white-color)",
          // colorBgLayout: "var(--white-color)",
          // colorBgSpotlight: "var(--white-color)",
          // colorBgMask: "var(--white-color)",
        },
        components: {
          Input: { activeBorderColor: "var(--primary-color)" },
          Layout: {
            bodyBg: "var(--grey-50)",
            siderBg: "var(--white-color)",
          },
          Menu: {
            darkItemBg: "var(--white-color)",
            darkItemColor: "var(--grey-700)",
            darkItemSelectedBg: "var(--grey-50)",
            darkItemHoverColor: "var(--black-color)",
            darkItemSelectedColor: "var(--black-color)",
          },
        },
      }}
    >
      <Layout hasSider>
        <Sider width={279} style={siderStyle}>
          <div className="brand flex items-center justify-center gap-2 mt-4 px-5 text-center">
            <img src="/logo.svg" alt="brand-logo" />
            <p className="brand-text text-xl text-[var(--grey-900)]">
              Untitled UI
            </p>
          </div>

          <div className="flex items-center justify-center px-3 my-6 !mx-auto">
            <Input
              size="large"
              placeholder="Olivia Rhye"
              prefix={<SearchOutlined style={{ fontSize: "20px" }} />}
            />
          </div>

          <Menu
            theme="dark"
            mode="inline"
            items={items2}
            defaultSelectedKeys={["settings"]}
          />

          <div className="my-6 px-4 py-5 rounded-2xl bg-[var(--grey-50)]">
            <h1 className="text-sm font-[500] text-[var(--grey-900)] mb-2">
              New features available!
            </h1>

            <p className="text-sm font-light text-gray-500 mb-4">
              Check out the new dashboard view. Pages now load faster.
            </p>

            <div className="w-[215] h-[136] rounded-2xl bg-[url('/new_feature_graphics.jpg')]">
              <img src="/new_feature_graphics.jpg" className="object-contain" />
            </div>
          </div>

          <div className="px-3 mb-6 !mx-auto">
            <hr className="border-gray-200" />
          </div>

          <div className="flex items-center justify-center">
            <div className="flex gap-5 items-start">
              <img
                alt="Olivia Rhye"
                src="/olivia-rhye.jpg"
                className="rounded-full w-10 h-10 object-contain"
              />

              <div>
                <h1 className="text-sm text-[var(--grey-900)] mb-0">
                  Olivia Rhye
                </h1>
                <p className="text-sm text-[var(--grey-500)]">
                  olivia@untitleui.com
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
        </Sider>

        <Layout>
          <Content style={{ overflow: "initial" }}>
            <section
              style={{
                padding: 32,
              }}
            >
              <div className="heading mb-6">
                <h1 className="text-3xl text-[var(--grey-900)] font-[500] mb-1">
                  Settings
                </h1>
                <p className="text-base text-[var(--grey-500)] font-normal mb-0">
                  Manage your team preferrences here
                </p>
              </div>
            </section>
          </Content>
        </Layout>
      </Layout>
    </ConfigProvider>
  );
};

export default App;
