import React from "react";
import BackLayout from "../../../containers/BackLayout";
import Form from "../../../component/Product/form";
import { useRecoilState } from "recoil";
import { Product } from "../../../lib/recoil-atom";
import router from "next/router";

const AddProducts = () => {
  const [productList, setProductList] = useRecoilState(Product);
  const HandleonSave = (record: any) => {
    setProductList([...productList, record]);
    router.push("/backoffice/products");
  };
  return (
    <BackLayout>
      <Form title="Add Product" HandleonSave={HandleonSave} />
    </BackLayout>
  );
};

export default AddProducts;
