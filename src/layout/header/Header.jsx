import { ShoppingCartOutlined } from "@ant-design/icons";
import React, { useContext } from "react";
import { GlobalProductContext } from "../../context/Global";

function Header() {
  const { cartLength, toggleCart, handleToggle } =
    useContext(GlobalProductContext);
  return (
    <>
      <nav className="fixed top-0 flex items-center justify-between h-[56px] w-full bg-orange-400 px-6 text-white z-[30]">
        <div className="gap-3 flex pt-6">
          <a>Trang chủ</a>
          <div className="border-l-2"></div>
          <a>Danh sách sản phẩm</a>
        </div>
        <div className="relative" onClick={handleToggle}>
          <ShoppingCartOutlined className="text-[24px]" />
          <p className="bg-red-600 px-2 rounded-full absolute top-[-15px] right-[-18px] ">
            {cartLength > 9 ? "9+" : cartLength}
          </p>
        </div>
      </nav>
    </>
  );
}

export default Header;
