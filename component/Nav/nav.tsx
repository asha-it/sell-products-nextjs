import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Badge } from "antd";
import { ShoppingCartOutlined, UserOutlined } from "@ant-design/icons";

const nav = () => {
  return (
    <>
      <div className="nav-bar d-flex justify-between items-center w-100 mx-0">
        <Link href="/">
          <div className="d-flex items-center h-100">
            <Image
              className="img-white pointer"
              src={"/logo.png"}
              width={200}
              height={50}
              alt="Logo"
            />
          </div>
        </Link>
        <div className="d-flex items-center h-100">
          <Link href="/cart">
            <div>
              <Badge count={4}>
                <ShoppingCartOutlined
                  style={{ fontSize: "25px", color: "white" }}
                />
              </Badge>
            </div>
          </Link>
          <Link href="/backoffice">
            <div>
              <UserOutlined style={{ fontSize: "25px", marginLeft: "1rem" }} />
            </div>
          </Link>
        </div>
      </div>
    </>
  );
};

export default nav;
