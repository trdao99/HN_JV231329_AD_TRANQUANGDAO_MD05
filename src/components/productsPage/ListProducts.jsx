import React, { useContext } from "react";
import { GlobalProductContext } from "../../context/Global";
import ProductItem from "./ProductItem";

function ListProducts() {
  const { products } = useContext(GlobalProductContext);
  return (
    <>
      <main className="px-12 z-10 h-[100vh] ">
        <h5 className="text-center uppercase font-semibold my-2 text-[20px] mt-20">
          Danh Sách Sản Phẩm
        </h5>
        <div className="flex flex-wrap justify-center gap-8 ">
          {products.map((pro) => (
            <ProductItem key={pro.id} product={pro} />
          ))}
        </div>
      </main>
    </>
  );
}

export default ListProducts;
