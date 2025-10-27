import Add from "@/app/components/Add";
import ProductImages from "@/app/components/ProductImages";
import Reviews from "@/app/components/Reviews";
import { notFound } from "next/navigation";
import { Suspense } from "react";
import { localProducts } from "@/app/data/localProducts"; // 로컬 데이터 임포트

const SinglePage = async ({ params }: { params: { slug: string } }) => {
  // slug로 로컬 상품 찾기
  const product = localProducts.find((p) => p.slug === params.slug);

  if (!product) {
    return notFound();
  }

  return (
    <div className="px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 relative flex flex-col lg:flex-row gap-16">
      {/* 이미지 섹션 */}
      <div className="w-full lg:w-1/2 lg:sticky top-20 h-max">
        <ProductImages
          items={[
            { image: { url: product.imageUrl } },
            // 필요하다면 추가 이미지도 여기에 배열 형태로 넣을 수 있음
          ]}
        />
      </div>

      {/* 텍스트 섹션 */}
      <div className="w-full lg:w-1/2 flex flex-col gap-6">
        <h1 className="text-4xl font-medium">{product.name}</h1>
        <p className="text-gray-500">{product.description || "상품 설명이 없습니다."}</p>
        <div className="h-[2px] bg-gray-100" />

        {/* 가격 */}
        <h2 className="font-medium text-2xl">{product.price}원</h2>

        <div className="h-[2px] bg-gray-100" />

        {/* 장바구니 버튼 대신 단순 버튼 표시 */}
        <Add
          productId={String(product.id)}
          name={product.name}
          price={product.price}
          imageUrl={product.imageUrl}
        />

        <div className="h-[2px] bg-gray-100" />

        {/* 추가 설명 섹션 */}
        {product.additionalInfo && (
          <div className="text-sm">
            <h4 className="font-medium mb-4">상품 정보</h4>
            <p>{product.additionalInfo}</p>
          </div>
        )}

        <div className="h-[2px] bg-gray-100" />

        {/* 리뷰 섹션 */}
        <h1 className="text-2xl">User Reviews</h1>
        <Suspense fallback="Loading...">
          <Reviews productId={String(product.id)} />
        </Suspense>
      </div>
    </div>
  );
};

export default SinglePage;
