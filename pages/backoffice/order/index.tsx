import React from "react";
import BackLayout from "../../../containers/BackLayout";
import Link from "next/link";
import { MainColumn } from "./colum";
import { Card, Col, Row, Button, Table } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import router from "next/router";
import { useRecoilState } from "recoil";
import { Orders } from "../../../lib/recoil-atom";

const Order = () => {
  const [orderList, setorderList] = useRecoilState(Orders);
  console.log("OrderList :", orderList);

  const HandleonDelete = async (record: any) => {
    let result = orderList.filter((item) => {
      return item !== record;
    });
    setorderList(result);
  };
  const HandleonEdit = (record: any) => {
    router.push("/backoffice/order/edit/" + record.no);
  };

  return (
    <BackLayout>
      <Row className="p-1">
        <h2 className="tw-b">Order</h2>
        <Col lg={24}>
          <Card className="card-top-radius10">
            <Link href="/backoffice/order/add">
              <div className="d-flex justify-end">
                <Button className="bt-primary-color">
                  <PlusOutlined /> Add Order
                </Button>
              </div>
            </Link>
          </Card>
        </Col>
        <Col lg={24}>
          <Card className="card-bottom-radius10">
            <Table
              rowKey="id"
              columns={MainColumn({ HandleonEdit, HandleonDelete })}
              dataSource={orderList}
            />
          </Card>
        </Col>
      </Row>
    </BackLayout>
  );
};

export default Order;
