import React, { useState, useEffect } from "react";
import BackLayout from "../../../../containers/BackLayout";
import { Row, Col, Card, Button } from "antd";
import { LeftOutlined } from "@ant-design/icons";
import router from "next/router";
import { useRecoilState } from "recoil";
import { Product } from "../../../../lib/recoil-atom";

type Props = {
  id: string;
};

const ViewProduct = ({ id }: Props) => {
  const [product, setProduct] = useRecoilState(Product);
  const data = product.filter((item) => {
    if (item.no === id) {
      return item;
    }
  });
  const HandleonSave = (record: any) => {};
  const HandleonDelete = async () => {
    let result = product.filter((item) => {
      if (item.no !== id) {
        return item;
      }
    });
    setProduct(result);
    router.push("/backoffice/products");
  };
  return (
    <BackLayout>
      <Row className="p-1">
        <h2 className="tw-b">View Product</h2>
        <Col lg={24}>
          <Card className="card-top-radius10">
            <div className="d-flex justify-between items-center">
              <LeftOutlined
                style={{
                  fontSize: 40,
                  color: "#3b4c92",
                }}
                onClick={() => router.back()}
              />

              <div>
                <Button
                  className="bt-primary-color px-3"
                  onClick={() => router.push("/backoffice/products/edit/" + id)}
                >
                  Edit
                </Button>
                <Button
                  className="bt-danger-color px-3"
                  onClick={HandleonDelete}
                >
                  Delete
                </Button>
              </div>
            </div>
          </Card>
        </Col>
        <Col lg={24}>
          <Card className="card-bottom-radius10">
            <Row gutter={[12, 12]}>
              <Col lg={4}>
                <h2 className="tw-b">Prodduct No : </h2>
              </Col>
              <Col lg={20}>
                <h2>{data[0].no} </h2>
              </Col>
              <Col lg={4}>
                <h2 className="tw-b">Prodduct Name : </h2>
              </Col>
              <Col lg={20}>
                <h2>{data[0].name} </h2>
              </Col>
              <Col lg={4}>
                <h2 className="tw-b">Prodduct Price : </h2>
              </Col>
              <Col lg={20}>
                <h2>{data[0].price} ฿ </h2>
              </Col>
              <Col lg={4}>
                <h2 className="tw-b">Prodduct Detail : </h2>
              </Col>
              <Col lg={20}>
                <h2>{data[0].detail}</h2>
              </Col>
            </Row>
          </Card>
        </Col>
      </Row>
    </BackLayout>
  );
};
export const getServerSideProps = async (context: any) => {
  const id = context.params?.id
    ? Array.isArray(context.params.slug)
      ? context.params.id[0]
      : context.params.id
    : "";

  return {
    props: {
      id: id,
    },
  };
};
export default ViewProduct;
