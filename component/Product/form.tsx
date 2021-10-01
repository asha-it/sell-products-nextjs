import React, { useState } from "react";
import { Card, Col, Row, Button, Form, Input } from "antd";
import { LeftOutlined } from "@ant-design/icons";
import router from "next/router";
import { IProduct } from "../../interface/interface";

type Props = {
  title: string;
  data?: IProduct;
  HandleonSave: (record: any) => void;
};

const FormProducts = ({ title, data, HandleonSave }: Props) => {
  const { TextArea } = Input;
  const onFinish = async (values: IProduct) => {
    HandleonSave(values);
  };

  return (
    <Form
      layout="vertical"
      initialValues={{
        no: data?.no,
        name: data?.name,
        price: data?.price,
        detail: data?.detail,
      }}
      onFinish={onFinish}
    >
      <Row className="p-1">
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
          <Card className="card-bottom-radius10">
            <Row gutter={[12, 12]}>
              <Col lg={6}>
                <Form.Item
                  label="Product No."
                  name="no"
                  rules={[
                    {
                      required: true,
                      message: "Please Input Product Number.",
                    },
                  ]}
                >
                  <Input className="h-3rem" placeholder="" />
                </Form.Item>
              </Col>
              <Col lg={12}>
                <Form.Item
                  label="Product Name"
                  name="name"
                  rules={[
                    {
                      required: true,
                      message: "Please Input Product Name.",
                    },
                  ]}
                >
                  <Input className="h-3rem" placeholder="" />
                </Form.Item>
              </Col>
              <Col lg={6}>
                <Form.Item
                  label="Price"
                  name="price"
                  rules={[
                    {
                      required: true,
                      message: "Please Input Price.",
                    },
                  ]}
                >
                  <Input className="h-3rem" placeholder="" />
                </Form.Item>
              </Col>
              <Col lg={24}>
                <Form.Item
                  label="Product Deatail"
                  name="detail"
                  rules={[
                    {
                      required: true,
                      message: "Please Input Product Detail.",
                    },
                  ]}
                >
                  <TextArea rows={10} />
                </Form.Item>
              </Col>
            </Row>
          </Card>
        </Col>
      </Row>
    </Form>
  );
};

export default FormProducts;
