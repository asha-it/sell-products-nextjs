import React, { useState, useEffect } from "react";
import Image from "next/image";
import BackLayout from "../../../../containers/BackLayout";
import { Row, Col, Card, Button } from "antd";
import { LeftOutlined } from "@ant-design/icons";
import router from "next/router";
import { useRecoilState } from "recoil";
import { Orders } from "../../../../lib/recoil-atom";

type Props = {
  id: string;
};

const ViewOrder = ({ id }: Props) => {
  const [order, setOrder] = useRecoilState(Orders);
  const data = order.filter((item) => {
    if (item.no === id) {
      return item;
    }
  });
  const HandleonDelete = async () => {
    let result = order.filter((item) => {
      if (item.no !== id) {
        return item;
      }
    });
    setOrder(result);
    router.push("/backoffice/order");
  };
  return (
    <BackLayout>
      <Row className="p-1">
        <h2 className="tw-b">View Order</h2>
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
                  onClick={() => router.push("/backoffice/order/edit/" + id)}
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
                <h2 className="tw-b">Order No : </h2>
              </Col>
              <Col lg={20}>
                <h2>{data[0].no} </h2>
              </Col>
              <Col lg={4}>
                <h2 className="tw-b">Customer Name : </h2>
              </Col>
              <Col lg={20}>
                <h2>{data[0].cusName} </h2>
              </Col>
              <Col lg={4}>
                <h2 className="tw-b">Products : </h2>
              </Col>
              <Col lg={20}>
                <Row gutter={[12, 12]}>
                  {data[0].product.map((item) => {
                    return (
                      <Col lg={6} key={item.no}>
                        <Card
                          hoverable
                          cover={
                            <Image
                              src={"/product/p1.jpg"}
                              width={6}
                              height={4}
                              layout="responsive"
                              objectFit="cover"
                            ></Image>
                          }
                        >
                          <div className="position-product-card">
                            <div>
                              <h3 className="tw-b">{item.name}</h3>
                              <h4 className="color-grey text-3-row">
                                {item.detail}
                              </h4>
                            </div>
                            <div className="d-flex justify-between items-center w-100">
                              <h3 className="color-primary tw-b">
                                ฿ {item.price}
                              </h3>
                            </div>
                          </div>
                        </Card>
                      </Col>
                    );
                  })}
                </Row>
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
export default ViewOrder;
