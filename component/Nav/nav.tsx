import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Badge } from "antd";
import { ShoppingCartOutlined, UserOutlined } from "@ant-design/icons";
import { useRecoilState } from "recoil";
import { Cart } from "../../lib/recoil-atom";

const nav = () => {
  const [cart] = useRecoilState(Cart);
  let cartList = cart.filter((item) => item.no !== "init");

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
            <div className="pointer">
              <Badge count={cartList ? cartList.length : 0}>
                <ShoppingCartOutlined
                  style={{ fontSize: "25px", color: "white" }}
                />
              </Badge>
            </div>
          </Link>
          <Link href="/backoffice">
            <div className="pointer">
              <UserOutlined style={{ fontSize: "25px", marginLeft: "1rem" }} />
            </div>
          </Link>
        </div>
      </div>
    </>
  );
};

export default nav;
