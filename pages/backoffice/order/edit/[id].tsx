import React, { useState, useEffect } from "react";
import BackLayout from "../../../../containers/BackLayout";
import Form from "../../../../component/Order/form";
import { useRecoilState } from "recoil";
import { Orders, SelectProduct } from "../../../../lib/recoil-atom";
import { IOrder } from "../../../../interface/interface";
import router from "next/router";
type Props = {
  id: string;
};

const EditOrder = ({ id }: Props) => {
  const [order] = useRecoilState(Orders);
  const [, setProductSelect] = useRecoilState(SelectProduct);
  const data = order.filter((item) => {
    if (item.no === id) {
      return item;
    }
  });

  useEffect(() => {
    setProductSelect(data[0].product);
  }, []);

  const HandleonSave = (value: IOrder) => {
    const index = order.findIndex((item) => item.no === id);
    order[index].no = value.no;
    order[index].cusName = value.cusName;

    router.push("/backoffice/order");
  };
  return (
    <BackLayout>
      <Form title="Edit Order" HandleonSave={HandleonSave} data={data[0]} />
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
export default EditOrder;
