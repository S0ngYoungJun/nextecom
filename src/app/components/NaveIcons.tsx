"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";

const NavIcons = () => {
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const router = useRouter();
  const pathName = usePathname();

  // 클릭해도 아무 동작 없음
  const handleCartClick = (e: React.MouseEvent) => {
    e.preventDefault();
  };

  return (
    <div className="flex items-center gap-4 xl:gap-6 relative">
      {/* 프로필 아이콘 (로그인 기능 제거) */}
      <Image
        src="/profile.png"
        alt="profile icon"
        width={22}
        height={22}
        className="cursor-pointer opacity-50"
        onClick={() => setIsProfileOpen((prev) => !prev)}
      />

      {isProfileOpen && (
        <div className="absolute p-4 rounded-md top-12 left-0 bg-white text-sm shadow-[0_3px_10px_rgb(0,0,0,0.2)] z-20">
          <Link href="/profile">Profile</Link>
        </div>
      )}

      {/* 알림 아이콘 */}
      <Image
        src="/notification.png"
        alt="notification icon"
        width={22}
        height={22}
        className="cursor-pointer opacity-50"
      />

      {/* 장바구니 아이콘 (모양만 있음, 클릭 불가능) */}
      <div className="relative opacity-50 cursor-default" onClick={handleCartClick}>
        <Image src="/cart.png" alt="cart icon" width={22} height={22} />
        <div className="absolute -top-4 -right-4 w-6 h-6 bg-lama rounded-full text-white text-sm flex items-center justify-center">
          0
        </div>
      </div>
    </div>
  );
};

export default NavIcons;
