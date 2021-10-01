import React from "react";
import { EditOutlined, DeleteOutlined, EyeFilled } from "@ant-design/icons";
import { Button, Col, Row } from "antd";
import router from "next/router";
type Props = {
  HandleonEdit: (record: any) => void;
  HandleonDelete: (record: any) => void;
};
export const MainColumn = ({ HandleonEdit, HandleonDelete }: Props) => {
  return [
    {
      title: "Order No.",
      key: "no",
      dataIndex: "no",
      align: "center" as "center",
    },

    {
      title: "Customer Name",
      dataIndex: "cusName",
      key: "cusName",
    },
    {
      title: "Product",
      dataIndex: "product",
      key: "product",
      render: (record: any) => {
        console.log("Record :", record);
        return record.map((item: any) => {
          return <p key={item.no}>{item.name}</p>;
        });
      },
    },

    {
      title: "Action",
      key: "action",
      align: "center" as "center",
      render: (record: any) => (
        <div>
          <Row gutter={[10, 10]} justify="center">
            <Col>
              <Button
                className="bt-view d-flex items-center"
                onClick={() =>
                  router.push("/backoffice/order/view/" + record.no)
                }
              >
                <EyeFilled /> View
              </Button>
            </Col>
            <Col>
              <Button
                className="bt-edit d-flex items-center"
                onClick={() => HandleonEdit(record)}
              >
                <EditOutlined /> Edit
              </Button>
            </Col>
            <Col>
              <Button
                className="bt-del d-flex items-center"
                onClick={() => HandleonDelete(record)}
              >
                <DeleteOutlined /> Delete
              </Button>
            </Col>
          </Row>
        </div>
      ),
    },
  ];
};
