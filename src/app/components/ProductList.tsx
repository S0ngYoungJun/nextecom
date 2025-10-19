import Image from "next/image";
import Link from "next/link";
import { localProducts } from "@/app/data/product"; // 로컬 데이터 import

const ProductList = ({ limit }: { limit?: number }) => {
  // 상품 개수 제한이 있다면 적용
  const products = limit ? localProducts.slice(0, limit) : localProducts;

  return (
    <div className="mt-12 flex gap-x-8 gap-y-16 justify-between flex-wrap">
      {products.map((product) => (
        <Link
          href={`/${product.slug}`}
          key={product.id}
          className="w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%] transition-transform hover:scale-[1.02]"
        >
          <div className="relative w-full h-80 overflow-hidden rounded-md">
            <Image
              src={product.imageUrl || "/images/product.png"}
              alt={product.name}
              fill
              sizes="25vw"
              className="absolute object-cover transition-opacity duration-300 hover:opacity-80"
            />
          </div>
          <div className="flex justify-between items-center">
            <span className="font-medium text-gray-800">{product.name}</span>
            {product.price && (
              <span className="font-semibold text-gray-900">
                ${product.price}
              </span>
            )}
          </div>
        </Link>
      ))}
    </div>
  );
};

export default ProductList;


