import Image from "next/image";
import { Card, Col, Row } from "antd";
import { ShoppingCartOutlined } from "@ant-design/icons";
import Layout from "../containers/Layout";
const Home = () => {
  const products = [
    {
      id: 1,
      name: "product1",
      price: 1200,
      desc: "product...",
      img: "/product/p1.jpg",
    },
    {
      id: 2,
      name: "product2",
      price: 1200,
      desc: "product...",
      img: "/product/p1.jpg",
    },
    {
      id: 3,
      name: "product3",
      price: 1200,
      desc: "product...",
      img: "/product/p1.jpg",
    },
    {
      id: 4,
      name: "product4",
      price: 1200,
      desc: "product...",
      img: "/product/p1.jpg",
    },
    {
      id: 5,
      name: "product5",
      price: 1200,
      desc: "product...",
      img: "/product/p1.jpg",
    },
    {
      id: 6,
      name: "product6",
      price: 1200,
      desc: "product...",
      img: "/product/p1.jpg",
    },
    {
      id: 7,
      name: "product7",
      price: 1200,
      desc: "product...",
      img: "/product/p1.jpg",
    },
    {
      id: 8,
      name: "product8",
      price: 1200,
      desc: "product...",
      img: "/product/p1.jpg",
    },
    {
      id: 9,
      name: "product9",
      price: 1200,
      desc: "product...",
      img: "/product/p1.jpg",
    },
    {
      id: 10,
      name: "product10",
      price: 1200,
      desc: "product...",
      img: "/product/p1.jpg",
    },
    {
      id: 11,
      name: "product11",
      price: 1200,
      desc: "product...",
      img: "/product/p1.jpg",
    },
    {
      id: 12,
      name: "product12",
      price: 1200,
      desc: "product...",
      img: "/product/p1.jpg",
    },
  ];
  return (
    <Layout title="Home">
      <Row className="contaner pt-5 mx-0" gutter={[12, 12]}>
        {products.map((item) => {
          return (
            <Col lg={6} sm={8} xs={12} key={String(item.id)}>
              <div className="card-product">
                <Card
                  hoverable
                  cover={
                    <Image
                      src={item.img}
                      width={6}
                      height={4}
                      layout="responsive"
                      objectFit="cover"
                    ></Image>
                  }
                >
                  <h3 className="tw-b">{item.name}</h3>
                  <h4 className="color-grey">{item.desc}</h4>
                  <div className="d-flex justify-between items-center w-100">
                    <h3 className="color-primary tw-b">฿ {item.price}</h3>
                    <ShoppingCartOutlined
                      style={{ color: "#0071bb", fontSize: "25px" }}
                    />
                  </div>
                </Card>
              </div>
            </Col>
          );
        })}
      </Row>
    </Layout>
  );
};

export default Home;
