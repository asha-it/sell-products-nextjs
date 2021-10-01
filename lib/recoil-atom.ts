import { atom } from "recoil";

export const Product = atom({
  key: "product",
  default: [
    {
      no: "8851727002059",
      name: "Potato Snack",
      price: 1200,
      detail:
        "Heat the oven to 400°F. Spray two baking sheets with cooking spray. Slice the potatoes using a mandoline into very thin (1/16-inch) rounds. Rinse the potatoes well under cold water, then spread them on paper towels. Dry them completely using more paper towels. In a large bowl, whisk together the oil, paprika, and salt. Add the potatoes and toss to coat evenly. Spread the potatoes in a single layer onto the prepared baking sheets. Bake until the potatoes are crisp and browned and release easily from the baking tray, 12 to 30 minutes. Since small variations in slice thickness can make a big difference in cooking time, check the trays after 12 minutes and every 5 minutes thereafter to remove any chips that are already done, then return the rest to the oven if necessary. The chips will crisp further as they cool. Once cool, store in a paper bag for up to 3 days.",
    },
    {
      no: "2",
      name: "Product2",
      price: 1200,
      detail: "Product2",
    },
    {
      no: "3",
      name: "Product3",
      price: 1200,
      detail: "Product3",
    },
  ],
});

export const Orders = atom({
  key: "order",
  default: [
    {
      no: "8851727002059",
      cusName: "Potato Snack",
      product: [
        {
          no: "2",
          name: "Product2",
          price: 1200,
          detail: "Product2",
        },
        {
          no: "3",
          name: "Product3",
          price: 1200,
          detail: "Product3",
        },
      ],
    },
  ],
});

export const SelectProduct = atom({
  key: "selectProduct",
  default: [
    {
      no: "init",
      name: "",
      price: 0,
      detail: "",
    },
  ],
});

export const Cart = atom({
  key: "cart",
  default: [
    {
      no: "init",
      name: "",
      price: 0,
      detail: "",
    },
  ],
});
