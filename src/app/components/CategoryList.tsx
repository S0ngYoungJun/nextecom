import Image from "next/image";
import Link from "next/link";

// 로컬 카테고리 데이터 (임시 예시)
const categories = [
  {
    _id: "1",
    name: "의류",
    slug: "clothing",
    image: "/images/categories/clothing.jpg",
  },
  {
    _id: "2",
    name: "전자제품",
    slug: "electronics",
    image: "/images/categories/electronics.jpg",
  },
  {
    _id: "3",
    name: "생활용품",
    slug: "home",
    image: "/images/categories/home.jpg",
  },
  {
    _id: "4",
    name: "도서",
    slug: "books",
    image: "/images/categories/books.jpg",
  },
];

const CategoryList = () => {
  return (
    <div className="px-4 overflow-x-scroll scrollbar-hide">
      <div className="flex gap-4 md:gap-8">
        {categories.map((item) => (
          <Link
            href={`/list?cat=${item.slug}`}
            className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/4 xl:w-1/6"
            key={item._id}
          >
            <div className="relative bg-slate-100 w-full h-96">
              <Image
                src={item.image || "/cat.png"}
                alt={item.name}
                fill
                sizes="20vw"
                className="object-cover"
              />
            </div>
            <h1 className="mt-8 font-light text-xl tracking-wide text-center">
              {item.name}
            </h1>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CategoryList;
