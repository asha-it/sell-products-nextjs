import React from "react";
import Image from "next/image";
import { Col, Row } from "antd";

const Footer = () => {
  return (
    <div className="contaner footer">
      <div className="d-flex justify-between">
        <div>Copyright 2021 ©SILENCER . </div>
        <Image
          className="img-white pointer"
          src={"/logo.png"}
          width={100}
          height={30}
          alt="Logo"
        />
        <div>Created by Mumad-asha Barateh</div>
      </div>
    </div>
  );
};

export default Footer;
