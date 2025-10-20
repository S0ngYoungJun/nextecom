import Image from "next/image";
import { Suspense } from "react";
import Filter from "@/app/components/Filter";
import ProductList from "@/app/components/ProductList";
import Skeleton from "@/app/components/Skeleton";
import { categories } from "@/app/data/categories";
import { localProducts as products } from "@/app/data/localProducts";

const ListPage = async ({ searchParams }: { searchParams: any }) => {
  // URL 예: /list?cat=clothing
  const categorySlug = searchParams.cat || "all-products";

  // 카테고리 찾기
  const cat = categories.find((c) => c.slug === categorySlug);

  // 상품 필터링
  const filteredProducts =
    categorySlug === "all-products"
      ? products
      : products.filter((p) => p.category === categorySlug);

  return (
    <div className="px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 relative">
      {/* CAMPAIGN */}
      <div className="hidden bg-pink-50 px-4 sm:flex justify-between h-64">
        <div className="w-2/3 flex flex-col items-center justify-center gap-8">
          <h1 className="text-4xl font-semibold leading-[48px] text-gray-700">
           상품 구매하세요
            <br /> 사주세요
          </h1>
          <button className="rounded-3xl bg-lama text-white w-max py-3 px-5 text-sm">
            바로 구매
          </button>
        </div>
        <div className="relative w-1/3">
          <Image src="/images/home.jpg" alt="" fill className="object-contain" />
        </div>
      </div>

      {/* FILTER */}
      <Filter />

      {/* PRODUCTS */}
      <h1 className="mt-12 text-xl font-semibold">
        {cat?.name || "All Products"} For You!
      </h1>

      <Suspense fallback={<Skeleton />}>
        <ProductList products={filteredProducts} />
      </Suspense>
    </div>
  );
};

export default ListPage;
