import React, { useContext } from "react";
import { Card, Button } from "antd";
import { GlobalProductContext } from "../../context/Global";

function ProductItem({ product }) {
  const { Meta } = Card;
  const { handleAddToCart, handleMoney } = useContext(GlobalProductContext);

  return (
    <Card
      className="shadow-lg hover:drop-shadow-[0_35px_35px_rgba(255,165,0,0.25)]]"
      hoverable
      style={{ width: 240 }}
      cover={
        <img
          style={{ maxHeight: 300, minHeight: 300 }}
          alt="example"
          src={product.image}
        />
      }
    >
      <Meta
        title={product.pName}
        description={handleMoney(product.price)}
        className="text-center"
      />
      <Button
        type="primary"
        className="mt-3 mx-4"
        onClick={() => handleAddToCart(product)}
      >
        Thêm vào giỏ hàng
      </Button>
    </Card>
  );
}

export default ProductItem;
