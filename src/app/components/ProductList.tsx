// src/app/components/ProductList.tsx
import Image from "next/image";
import Link from "next/link";
import { localProducts } from "@/app/data/product"; // 로컬 상품 데이터 import

export interface Product {
  id: string;
  name: string;
  price: number;
  imageUrl: string;
  slug: string;
  category: string;
  description?: string; // 설명 optional
  additionalInfo?: string; // 추가 정보 optional
}

interface ProductListProps {
  products?: Product[];
  limit?: number; // limit prop 추가
}

const ProductList = ({ products = localProducts, limit }: ProductListProps) => {
  const displayProducts = limit ? products.slice(0, limit) : products;

  if (displayProducts.length === 0) {
    return <p className="text-center text-gray-500 mt-8">상품이 없습니다.</p>;
  }

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-8">
      {displayProducts.map((product) => (
        <Link
          href={`/${product.slug}`} // slug 기반 상세페이지 링크
          key={product.id}
          className="flex flex-col items-center justify-center border p-4 rounded-xl hover:shadow-lg transition"
        >
          <Image
            src={product.imageUrl}
            alt={product.name}
            width={200}
            height={200}
            className="object-contain"
          />
          <h3 className="mt-4 font-semibold">{product.name}</h3>
          <p className="text-gray-600 text-sm">{product.price}원</p>
        </Link>
      ))}
    </div>
  );
};

export default ProductList;
