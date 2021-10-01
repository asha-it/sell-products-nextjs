import React, { ReactNode, useState } from "react";
import Headers from "./BackHeader";
import Head from "next/head";
import { Col, Layout, Row } from "antd";
import { useRouter } from "next/router";
import {
  GiftOutlined,
  FormOutlined,
  DashboardOutlined,
} from "@ant-design/icons";

type Props = {
  children?: ReactNode;
  title?: string;
};
function BackLayout({ children, title = "" }: Props) {
  const Router = useRouter();
  const currentRoute = Router.pathname;
  const { Header, Content, Sider } = Layout;
  const [active, setActive] = useState(currentRoute);
  const menuList = [
    {
      name: "Dashboard",
      icon: (
        <DashboardOutlined
          style={{
            fontSize: 30,
          }}
        />
      ),
      path: "/backoffice/",
    },
    {
      name: "Products Manage",
      icon: (
        <GiftOutlined
          style={{
            fontSize: 30,
          }}
        />
      ),
      path: "/backoffice/products",
    },
    {
      name: "Order Manage",
      icon: (
        <FormOutlined
          style={{
            fontSize: 30,
          }}
        />
      ),
      path: "/backoffice/order",
    },
  ];
  return (
    <Layout className="back-layout">
      <Header className="w-100">
        <Head>
          <title>{title}</title>
          <meta charSet="utf-8" />
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
          />
        </Head>
        <Headers />
      </Header>
      <Layout>
        <Sider className="min-hight">
          <Row>
            {menuList.map((item, index) => {
              return (
                <Col lg={24} key={index} className="px-1">
                  <div
                    className={
                      "color-white border-radius-10 text-center px-1 py-2 pointer " +
                      (item.path.split("/")[2] === (active.split("/")[2] || "")
                        ? "active-sidebar"
                        : "")
                    }
                    onClick={() => {
                      setActive(item.name), Router.push(item.path);
                    }}
                  >
                    {item.icon}
                    <br />
                    <h3 className="color-white tw-b">{item.name}</h3>
                  </div>
                </Col>
              );
            })}
          </Row>
        </Sider>
        <Content style={{ overflow: "auto" }}>{children}</Content>
      </Layout>
    </Layout>
  );
}

export default BackLayout;
