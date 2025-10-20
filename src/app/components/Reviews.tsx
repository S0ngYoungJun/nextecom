"use client";

import Image from "next/image";

const localReviews = [
  {
    id: 1,
    customer: {
      display_name: "홍길동",
      avatar_url: "/images/users/user1.jpg",
    },
    rating: 5,
    heading: "정말 마음에 들어요!",
    body: "배송도 빠르고 품질도 좋아요. 다음에도 재구매 의사 있습니다 😊",
  },
  {
    id: 2,
    customer: {
      display_name: "이영희",
      avatar_url: "/images/users/user2.jpg",
    },
    rating: 4,
    heading: "가성비 괜찮아요",
    body: "가격 대비 디자인과 품질이 괜찮습니다. 포장도 꼼꼼했어요.",
  },
  {
    id: 3,
    customer: {
      display_name: "박철수",
      avatar_url: "/images/users/user3.jpg",
    },
    rating: 3,
    heading: "보통이에요",
    body: "기대한 만큼은 아니었지만 쓸만합니다. 색상이 사진보다 약간 어두워요.",
  },
];

const Reviews = ({ productId }: { productId: string }) => {
  // productId는 지금은 사용하지 않지만, 나중에 상품별로 필터할 수도 있음

  return (
    <div className="flex flex-col gap-8">
      {localReviews.map((review) => (
        <div className="flex flex-col gap-4 border-b pb-4" key={review.id}>
          {/* USER */}
          <div className="flex items-center gap-4 font-medium">
            <Image
              src={review.customer.avatar_url}
              alt={review.customer.display_name}
              width={32}
              height={32}
              className="rounded-full"
            />
            <span>{review.customer.display_name}</span>
          </div>

          {/* STARS */}
          <div className="flex gap-1">
            {Array.from({ length: 5 }).map((_, index) => (
              <Image
                key={index}
                src={index < review.rating ? "/star.png" : "/star-empty.png"}
                alt=""
                width={16}
                height={16}
              />
            ))}
          </div>

          {/* DESCRIPTION */}
          {review.heading && <p className="font-semibold">{review.heading}</p>}
          {review.body && <p className="text-gray-600">{review.body}</p>}
        </div>
      ))}
    </div>
  );
};

export default Reviews;
