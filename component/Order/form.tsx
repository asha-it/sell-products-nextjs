import React, { useState } from "react";
import Image from "next/image";
import { Card, Col, Row, Button, Form, Input } from "antd";
import { LeftOutlined, DeleteFilled } from "@ant-design/icons";
import router from "next/router";
import { IOrder } from "../../interface/interface";
import ProductModal from "../../component/Modal/product";
import { useRecoilState } from "recoil";
import { Product, SelectProduct } from "../../lib/recoil-atom";

type Props = {
  title: string;
  data?: IOrder;
  HandleonSave: (record: any) => void;
};

const FormOrder = ({ title, data, HandleonSave }: Props) => {
  const [productList] = useRecoilState(Product);
  const [productSelect, setProductSelect] = useRecoilState(SelectProduct);
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);
  const onFinish = async (values: IOrder) => {
    HandleonSave(values);
  };
  const HandleRemoveProduct = (index: string) => {
    const updateList = productSelect.filter((item) => {
      return item.no !== index;
    });
    setProductSelect([...updateList]);
  };

  return (
    <Form
      layout="vertical"
      initialValues={{
        no: data?.no,
        cusName: data?.cusName,
      }}
      onFinish={onFinish}
    >
      <Row className="pt-1 px-1">
        <h2 className="tw-b">{title}</h2>
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
              <Button htmlType="submit" className="bt-primary-color px-3">
                Save
              </Button>
            </div>
          </Card>
        </Col>
        <Col lg={24}>
          <Card>
            <Row gutter={[12, 12]}>
              <Col lg={9}>
                <Form.Item
                  label="Order No."
                  name="no"
                  rules={[
                    {
                      required: true,
                      message: "Please Input Order Number.",
                    },
                  ]}
                >
                  <Input className="h-3rem" placeholder="" />
                </Form.Item>
              </Col>
              <Col lg={15}>
                <Form.Item
                  label="Customer Name"
                  name="cusName"
                  rules={[
                    {
                      required: true,
                      message: "Please Input Customer Name.",
                    },
                  ]}
                >
                  <Input className="h-3rem" placeholder="" />
                </Form.Item>
              </Col>
            </Row>
          </Card>
        </Col>
        <Col lg={24}>
          <Card className="card-bottom-radius10">
            <Button
              className="bt-primary-color px-3 mb-2"
              onClick={() => setIsModalVisible(true)}
            >
              Select Product
            </Button>
            {title === "Add Order" && (
              <Row gutter={[12, 12]}>
                {productSelect.map((item) => {
                  if (item.no !== "init") {
                    return (
                      <Col lg={6}>
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
                              <DeleteFilled
                                style={{
                                  fontSize: "25px",
                                  color: "red",
                                }}
                                onClick={() => HandleRemoveProduct(item.no)}
                              />
                            </div>
                          </div>
                        </Card>
                      </Col>
                    );
                  }
                })}
              </Row>
            )}
            {title === "Edit Order" && (
              <Row gutter={[12, 12]}>
                {data?.product.map((item) => {
                  if (item.no !== "init") {
                    return (
                      <Col lg={6}>
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
                              <DeleteFilled
                                style={{
                                  fontSize: "25px",
                                  color: "red",
                                }}
                                onClick={() => HandleRemoveProduct(item.no)}
                              />
                            </div>
                          </div>
                        </Card>
                      </Col>
                    );
                  }
                })}
              </Row>
            )}
          </Card>
        </Col>
      </Row>
      <ProductModal
        productList={productList}
        modalVisible={isModalVisible}
        onClose={() => setIsModalVisible(false)}
      />
    </Form>
  );
};

export default FormOrder;
