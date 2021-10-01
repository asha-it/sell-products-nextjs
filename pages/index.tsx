import Image from "next/image";
import { Card, Col, Row } from "antd";
import { ShoppingCartOutlined } from "@ant-design/icons";
import Layout from "../containers/Layout";
import { useRecoilState } from "recoil";
import { Product, Cart } from "../lib/recoil-atom";
import { IProduct } from "../interface/interface";
const Home = () => {
  const [productList] = useRecoilState(Product);
  const [cart, setCart] = useRecoilState(Cart);
  const HandleSelet = (data: IProduct) => [setCart([...cart, data])];

  return (
    <Layout title="Home">
      <Row className="contaner pt-5 mx-0" gutter={[12, 12]}>
        {productList.map((item) => {
          return (
            <Col lg={6} sm={8} xs={12} key={String(item.no)}>
              <div className="card-product">
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
                      <h4 className="color-grey text-3-row">{item.detail}</h4>
                    </div>
                    <div className="d-flex justify-between items-center w-100">
                      <h3 className="color-primary tw-b">฿ {item.price}</h3>
                      <ShoppingCartOutlined
                        style={{ color: "#0071bb", fontSize: "25px" }}
                        onClick={() => HandleSelet(item)}
                      />
                    </div>
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
