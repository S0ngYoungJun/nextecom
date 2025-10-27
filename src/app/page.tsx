
import CategoryList from "@/app/components/CategoryList";
import ProductList from "@/app/components/ProductList";
import Skeleton from "@/app/components/Skeleton";
import Slider from "@/app/components/Slider";
import { Suspense,} from "react";

export default function Home() {
   return (
    <div className="">
      <Slider />
      <div className="mt-24 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64">
        <h1 className="text-2xl">
          Categories
        </h1>
        <Suspense fallback={<Skeleton />}>
          <CategoryList />
        </Suspense>
      </div>
      <div className="mt-24 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64">
        <h1 className="text-2xl">Best</h1>
        <Suspense fallback={<Skeleton />}>
           <ProductList limit={4} offset={0} />
        </Suspense>
      </div>
      <div className="mt-24 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64">
        <h1 className="text-2xl">product</h1>
        <Suspense fallback={<Skeleton />}>
          <ProductList limit={4} offset={4} />
        </Suspense>
      </div>
    </div>
  );
};

