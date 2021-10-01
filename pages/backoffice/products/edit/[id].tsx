import React, { useState, useEffect } from "react";
import BackLayout from "../../../../containers/BackLayout";
import Form from "../../../../component/Product/form";
import { useRecoilState } from "recoil";
import { Product } from "../../../../lib/recoil-atom";
import { IProduct } from "../../../../interface/interface";
import router from "next/router";
type Props = {
  id: string;
};

const EditProduct = ({ id }: Props) => {
  const [product, setProduct] = useRecoilState(Product);
  const data = product.filter((item) => {
    if (item.no === id) {
      return item;
    }
  });
  const HandleonSave = (value: any) => {
    const index = product.findIndex((item) => item.no === id);
    product[index].no = value.no;
    product[index].name = value.name;
    product[index].price = value.price;
    product[index].detail = value.detail;
    router.push("/backoffice/products");
  };
  return (
    <BackLayout>
      <Form title="Edit Product" HandleonSave={HandleonSave} data={data[0]} />
    </BackLayout>
  );
};
export const getServerSideProps = async (context: any) => {
  const id = context.params?.id
    ? Array.isArray(context.params.id)
      ? context.params.id[0]
      : context.params.id
    : "";

  return {
    props: {
      id: id,
    },
  };
};
export default EditProduct;
