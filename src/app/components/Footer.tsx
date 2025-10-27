import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-sm text-gray-700 py-16 px-6 md:px-12 lg:px-24 xl:px-32 mt-24 border-t">
      {/* TOP */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left">
        {/* 회사 */}
        <div>
          <h2 className="font-semibold text-lg mb-4 text-gray-900">회사</h2>
          <ul className="space-y-2">
            <li>대한민국 대전 서구</li>
            <li>사업자등록번호 123-45-67890</li>
            <li>판매업</li>
          </ul>
        </div>

        {/* 고객센터 */}
        <div>
          <h2 className="font-semibold text-lg mb-4 text-gray-900">고객센터</h2>
          <ul className="space-y-2">
            <li>운영시간: 월–금 10:00 ~ 18:00</li>
            <li>전화: +82 10-1234-5678</li>
            <li>이메일: support@testshop.com</li>
          </ul>
        </div>

        {/* 구독 */}
        <div>
          <h2 className="font-semibold text-lg mb-4 text-gray-900">구독</h2>
          <p className="mb-4">새로운 소식과 이벤트를 받아보세요.</p>
          <div className="flex items-center justify-center md:justify-start">
            <input
              type="email"
              placeholder="Email address"
              className="p-3 w-2/3 rounded-l-md border border-gray-300 focus:outline-none"
            />
            <button className="w-1/3 bg-gray-900 text-white rounded-r-md p-3 hover:bg-gray-800 transition">
              JOIN
            </button>
          </div>
        </div>
      </div>

      {/* BOTTOM */}
      <div className="flex flex-col md:flex-row justify-between items-center mt-12 pt-6 border-t border-gray-200 text-gray-500">
        <p>© 2025 Test Shop. All rights reserved.</p>
        <div className="flex gap-4 mt-4 md:mt-0">
          <span>Language:</span>
          <span className="font-medium text-gray-800">Korean</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;