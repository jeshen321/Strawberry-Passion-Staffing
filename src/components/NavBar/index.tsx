import { Layout, Menu } from "antd";
import { Link, useLocation } from "react-router-dom";
import React, { useEffect, useState } from "react";
import menus from "../../pages/menus";

const { Header } = Layout;

const NavBar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const handleScroll = () => {
    setIsScrolled(window.scrollY > 50);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Layout>
      <Header
        style={{
          display: "flex",
          alignItems: "center",
          position: "fixed",
          width: "100%",
          zIndex: 100,
          backgroundColor: isScrolled ? "#E0653B" : "#C1BB41",
          transition: "background-color 0.3s ease",
          boxShadow: isScrolled ? "0 2px 5px rgba(0, 0, 0, 0.5)" : "none",
        }}
      >
        <div style={{ width: "160px", flexShrink: 0 }}>
          <img
            src="./src/assets/logo.png"
            alt="Logo"
            style={{ width: "100%" }}
          />
        </div>

        <Menu
          theme="dark"
          mode="horizontal"
          selectedKeys={[location.pathname]}
          style={{
            flex: 1,
            background: "transparent",
            justifyContent: "flex-end", // aligns menu items to the right
            minWidth: 0, // allow shrinking
          }}
        >
          {menus.map((menu) =>
            menu.children ? (
              <Menu.SubMenu key={menu.name} title={menu.name}>
                {menu.children.map((child) => (
                  <Menu.Item key={child.path}>
                    <Link to={child.path}>{child.name}</Link>
                  </Menu.Item>
                ))}
              </Menu.SubMenu>
            ) : (
              menu.path && (
                <Menu.Item key={menu.path}>
                  <Link to={menu.path}>{menu.name}</Link>
                </Menu.Item>
              )
            )
          )}
        </Menu>
      </Header>
    </Layout>
  );
};

export default NavBar;
