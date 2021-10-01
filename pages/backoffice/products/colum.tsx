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
      title: "No.",
      key: "no",
      dataIndex: "no",
      align: "center" as "center",
    },
    {
      title: "Image",
      dataIndex: "image",
      key: "image",

      render: () => {
        return (
          <img
            src={"/product/p1.jpg"}
            width={50}
            height={50}
            alt="Profile"
            className="border-radius-10"
          />
        );
      },
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Price",
      dataIndex: "price",
      key: "price",
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
                  router.push("/backoffice/products/view/" + record.no)
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
