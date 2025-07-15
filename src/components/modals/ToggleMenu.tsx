"use client";

import React from "react";
import Link from "next/link";

interface ToggleMenuProps {
  isOpen: boolean;
  onClose: () => void;
}
const ToggleMenu: React.FC<ToggleMenuProps> = ({ isOpen, onClose }) => {
  return (
    <div
      className={`z-1000 opacity-[80%] text-nowrap fixed top-0 left-0 h-[2000px] bg-white transition-all duration-300 ease-in-out overflow-hidden ${
        isOpen ? "w-full" : "w-0"
      }`}
    >
      <section className="p-4">
        <div className="mb-[70px] flex items-center gap-[20px]">
          <img
            src="/icons/arrow-l.png"
            alt=""
            className="cursor-pointer inline-block"
            onClick={onClose}
          />
          <h2 className="inline-block text-black font-bold text-lg"></h2>
        </div>
        <div className="text-sm font-normal">
          <ul className="text-black grid grid-cols-1 gap-[50px]">
            <li className="w-[120px] cursor-pointer ml-5">
              <Link
              href="/board"
              onClick={onClose}
              >
                <img
                  src="/icons/notice.png"
                  alt=""
                  className="inline-block mr-[20px]"
                />
                공지사항
              </Link>
            </li>
            <li className="w-[120px] cursor-pointer ml-5">
              <Link
              href="/calculate"
              onClick={onClose}
              >
                <img
                  src="/icons/mini-chart.png"
                  alt=""
                  className="inline-block mr-[20px]"
                />
                수수료계산기
              </Link>
            </li>
            <li className="w-[120px] cursor-pointer ml-5">
              <Link
              href="/record/officialGame"
              onClick={onClose}
              >
                <img
                  src="/icons/message.png"
                  alt=""
                  className="inline-block mr-[20px]"
                />
                게시판
              </Link>
            </li>
            <li className="w-[120px] cursor-pointer ml-5">
              <img
                src="/icons/headphones.png"
                alt=""
                className="inline-block mr-[20px]"
              />
              1:1 문의
            </li>
            <li className="w-[120px] cursor-pointer ml-5">
              <img
                src="/icons/moon.png"
                alt=""
                className="inline-block mr-[20px]"
              />
              Dark Mode
            </li>
            <li className="w-[120px] cursor-pointer ml-5">
              <img
                src="/icons/sun.png"
                alt=""
                className="inline-block mr-[20px]"
              />
              White Mode
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default ToggleMenu;
