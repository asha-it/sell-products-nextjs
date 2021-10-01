import { Card, Col, Row } from "antd";
import React from "react";
import BackLayout from "../../containers/BackLayout";
import { useRecoilState } from "recoil";
import { Product, Orders } from "../../lib/recoil-atom";

const BackOffice = () => {
  const [productList] = useRecoilState(Product);
  const [orderList] = useRecoilState(Orders);
  return (
    <BackLayout>
      <Row gutter={[24, 24]} className="p-1">
        <div className="px-1 w-100">
          <h2 className="tw-b mb-0">Dashboard</h2>
        </div>

        <Col lg={12}>
          <Card className="card-radius10">
            <div className="d-flex items-ceter justify-between">
              <h2>All Product</h2> <h2>|</h2> <h2>{productList.length}</h2>
            </div>
          </Card>
        </Col>
        <Col lg={12}>
          <Card className="card-radius10">
            <div className="d-flex items-ceter justify-between">
              <h2>All Order</h2> <h2>|</h2> <h2>{orderList.length}</h2>
            </div>
          </Card>
        </Col>
      </Row>
    </BackLayout>
  );
};

export default BackOffice;
