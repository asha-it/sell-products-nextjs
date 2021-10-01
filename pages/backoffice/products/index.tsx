import React from "react";
import BackLayout from "../../../containers/BackLayout";
import Link from "next/link";
import { MainColumn } from "./colum";
import { Card, Col, Row, Button, Table } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import router from "next/router";
import { useRecoilState } from "recoil";
import { Product } from "../../../lib/recoil-atom";

const Products = () => {
  const [productList, setProductList] = useRecoilState(Product);

  const HandleonDelete = async (record: any) => {
    let result = productList.filter((item) => {
      return item !== record;
    });
    setProductList(result);
  };
  const HandleonEdit = (record: any) => {
    router.push("/backoffice/products/edit/" + record.no);
  };

  return (
    <BackLayout>
      <Row className="p-1">
        <h2 className="tw-b">Products</h2>
        <Col lg={24}>
          <Card className="card-top-radius10">
            <Link href="/backoffice/products/add">
              <div className="d-flex justify-end">
                <Button className="bt-primary-color">
                  <PlusOutlined /> Add Product
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
              dataSource={productList}
            />
          </Card>
        </Col>
      </Row>
    </BackLayout>
  );
};

export default Products;
