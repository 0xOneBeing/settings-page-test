import React, { useEffect } from "react";
import { Menu as MenuIcon } from "lucide-react";

import { Button, ConfigProvider, Drawer, Layout, Radio } from "antd";
import { useState } from "react";
import SiderContent from "./components/SiderContent/SiderContent";
import { tabsItems } from "./data/tabsItems";

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

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>("roles");
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [drawerVisible, setDrawerVisible] = useState(false);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const isMobile = windowWidth < 1024;
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "#7f56d9",
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
        {!isMobile && (
          <Sider width={279} style={siderStyle}>
            <SiderContent />
          </Sider>
        )}

        <Drawer
          placement="left"
          closable={false}
          onClose={() => setDrawerVisible(false)}
          open={isMobile && drawerVisible}
          width={279}
          bodyStyle={{ padding: 0 }}
        >
          <SiderContent />
        </Drawer>

        <Layout>
          <Content style={{ overflow: "initial" }}>
            <section
              style={{
                padding: 32,
              }}
            >
              <div className="flex items-center justify-between mb-8">
                <div className="heading">
                  <h1 className="text-3xl text-[var(--grey-900)] font-[500] mb-1">
                    Settings
                  </h1>
                  <p className="text-base text-[var(--grey-500)] font-normal mb-0">
                    Manage your team preferrences here
                  </p>
                </div>

                {isMobile && (
                  <Button
                    type="text"
                    icon={<MenuIcon />}
                    onClick={() => setDrawerVisible(true)}
                  />
                )}
              </div>

              <div>
                <Radio.Group
                  block
                  optionType="button"
                  defaultValue="roles"
                  className="!w-full !overflow-x-scroll"
                  options={tabsItems.map((item) => ({
                    label: item.label,
                    value: item.key,
                  }))}
                  onChange={(e) => setActiveTab(e.target.value)}
                />
                <div className="mt-6">
                  {tabsItems.find((item) => item.key === activeTab)?.children}
                </div>
              </div>
            </section>
          </Content>
        </Layout>
      </Layout>
    </ConfigProvider>
  );
};

export default App;
