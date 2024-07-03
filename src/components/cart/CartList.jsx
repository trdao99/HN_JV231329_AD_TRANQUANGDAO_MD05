import React, { useContext } from "react";
import { GlobalProductContext } from "../../context/Global";
import { Avatar, Card } from "antd";
import {
  PlusOutlined,
  MinusOutlined,
  UserOutlined,
  DeleteOutlined,
} from "@ant-design/icons";

const { Meta } = Card;

function CartList() {
  const { cart, handleMoney, updateCartItemQuantity, toggleCart, deleteItem } =
    useContext(GlobalProductContext);

  const total = () => {
    return cart.reduce((sum, c) => sum + c.quantity * c.product.price, 0);
  };

  const incrementQuantity = (cItem) => {
    updateCartItemQuantity(cItem.product.id, cItem.quantity + 1);
  };

  const decrementQuantity = (cItem) => {
    updateCartItemQuantity(cItem.product.id, cItem.quantity - 1);
    console.log(cItem.quantity - 1);
  };

  return (
    <div
      className={`fixed top-14 right-0 h-[470px] w-96 bg-orange-300 p-3 z-50 transition-transform transform ${
        toggleCart ? "translate-x-0" : "translate-x-full"
      } rounded`}
    >
      <div className="bg-white w-2/3 p-3 rounded ml-4">
        Cart total: {handleMoney(total())}
      </div>
      <div className="h-[1.5px] bg-gradient-to-r from-pink-500 to-orange-500 my-3"></div>
      <div className="overflow-auto h-[370px]  px-4">
        {cart.map((cItem, index) => (
          <Card
            className="bg-slate-200"
            key={index}
            style={{ width: "100%", marginTop: 16 }}
            actions={[
              <MinusOutlined
                key="minus"
                onClick={() => decrementQuantity(cItem)}
              />,
              <span key="quantity" style={{ margin: "0 8px" }}>
                {cItem.quantity}
              </span>,
              <PlusOutlined
                key="plus"
                onClick={() => incrementQuantity(cItem)}
              />,
            ]}
          >
            <Meta
              avatar={<Avatar src={cItem.product.image} />}
              title={cItem.product.pName}
              description={handleMoney(cItem.product.price)}
            />
            <DeleteOutlined
              className="absolute top-7 right-7 text-[15px] hover:bg-slate-400 p-2 rounded-lg"
              onClick={() => deleteItem(cItem.product.id)}
            />
          </Card>
        ))}
      </div>
    </div>
  );
}

export default CartList;
