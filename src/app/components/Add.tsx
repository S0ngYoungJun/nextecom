"use client";

import { useState } from "react";
import { useCartStore } from "@/app/hooks/useCartStore";

interface AddProps {
  productId: string;
  name?: string;
  price?: number;
  imageUrl?: string;
  variantId?: string;
  stockNumber?: number;
}

const Add = ({
  productId,
  name,
  price,
  imageUrl,
  variantId,
  stockNumber,
}: AddProps) => {
  const [quantity, setQuantity] = useState(1);
  const addItem = useCartStore((state) => state.addItem);

  const handleQuantity = (type: "i" | "d") => {
    if (type === "d" && quantity > 1) setQuantity((prev) => prev - 1);
    if (type === "i") setQuantity((prev) => prev + 1);
  };

  const handleAddToCart = () => {
    // ✅ variant가 있을 경우 variantId 우선
    const idToAdd = variantId || productId;

    addItem({
      id: idToAdd,
      name: name || "상품명 미정",
      price: price || 0,
      imageUrl: imageUrl || "",
      quantity,
    });

    alert("🛒 상품이 장바구니에 추가되었습니다!");
  };

  return (
    <div className="flex flex-col gap-4">
      <h4 className="font-medium">수량 선택</h4>
      <div className="flex justify-between">
        <div className="flex items-center gap-4">
          <div className="bg-gray-100 py-2 px-4 rounded-3xl flex items-center justify-between w-32">
            <button
              className="cursor-pointer text-xl disabled:cursor-not-allowed disabled:opacity-20"
              onClick={() => handleQuantity("d")}
              disabled={quantity === 1}
            >
              -
            </button>
            {quantity}
            <button
              className="cursor-pointer text-xl"
              onClick={() => handleQuantity("i")}
              disabled={stockNumber !== undefined && quantity >= stockNumber}
            >
              +
            </button>
          </div>
          <div className="text-xs text-gray-600">
            현재 선택 수량:{" "}
            <span className="text-orange-500">{quantity}개</span>
          </div>
        </div>

        <button
          onClick={handleAddToCart}
          className={`w-36 text-sm rounded-3xl ring-1 ring-lama text-lama py-2 px-4 
            hover:bg-lama hover:text-white transition 
            ${stockNumber === 0 ? "opacity-50 cursor-not-allowed" : ""}`}
          disabled={stockNumber === 0}
        >
          {stockNumber === 0 ? "품절" : "Add to Cart"}
        </button>
      </div>
    </div>
  );
};

export default Add;
