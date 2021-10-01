import React from "react";
import Image from "next/image";
import { Card, Col, Row, Modal } from "antd";
import { CheckOutlined } from "@ant-design/icons";
import { IProduct } from "../../interface/interface";
import { useRecoilState } from "recoil";
import { SelectProduct } from "../../lib/recoil-atom";
type Props = {
  productList?: IProduct[];
  modalVisible: boolean;
  onClose: Function;
};
const Product = ({ productList, modalVisible, onClose }: Props) => {
  const [productSelect, setProductSelect] = useRecoilState(SelectProduct);
  const HandleSelectProduct = (data: any) => {
    setProductSelect([...productSelect, data]);
  };

  const HandleRemoveProduct = (index: string) => {
    const updateList = productSelect.filter((item) => {
      return item.no !== index;
    });
    setProductSelect([...updateList]);
  };

  return (
    <>
      <Modal
        title={<h3 className="tw-b">Select Product</h3>}
        visible={modalVisible}
        onCancel={() => onClose()}
        width={1000}
        footer={null}
      >
        <Row gutter={[12, 12]}>
          {productList?.map((item) => {
            if (productSelect.find((itemk: IProduct) => itemk.no === item.no)) {
              return (
                <Col lg={6} sm={8} xs={12} key={String(item.no)}>
                  <div
                    style={{
                      padding: "5px",
                      background: "#0071bb",
                      width: "33px",
                      textAlign: "center",
                      borderRadius: "50%",
                      position: "absolute",
                      top: "10px",
                      zIndex: 20,
                      right: "20px",
                    }}
                  >
                    <CheckOutlined />
                  </div>

                  <div className="card-product">
                    <Card
                      hoverable
                      onClick={() => HandleRemoveProduct(item.no)}
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
                          <h3 className="color-primary tw-b">฿ {item.price}</h3>
                        </div>
                      </div>
                    </Card>
                  </div>
                </Col>
              );
            } else {
              return (
                <Col lg={6} sm={8} xs={12} key={String(item.no)}>
                  <div className="card-product">
                    <Card
                      hoverable
                      onClick={() => HandleSelectProduct(item)}
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
                          <h3 className="color-primary tw-b">฿ {item.price}</h3>
                        </div>
                      </div>
                    </Card>
                  </div>
                </Col>
              );
            }
          })}
        </Row>
      </Modal>
    </>
  );
};

export default Product;
