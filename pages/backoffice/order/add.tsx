import React, { useEffect } from "react";
import BackLayout from "../../../containers/BackLayout";
import Form from "../../../component/Order/form";
import { useRecoilState } from "recoil";
import { Orders, SelectProduct } from "../../../lib/recoil-atom";
import router from "next/router";

const AddOrder = () => {
  const [orderList, setOrderList] = useRecoilState(Orders);
  const [productSelect, setProductSelect] = useRecoilState(SelectProduct);

  const HandleonSave = (record: any) => {
    const result = productSelect.filter((item) => item.no !== "init");
    let data = {
      no: record.no,
      cusName: record.cusName,
      product: result,
    };
    setOrderList([...orderList, data]);
    setProductSelect([]);
    router.push("/backoffice/order");
  };
  return (
    <BackLayout>
      <Form title="Add Order" HandleonSave={HandleonSave} />
    </BackLayout>
  );
};

export default AddOrder;
