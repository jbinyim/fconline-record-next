"use client";

import Link from "next/link";
import React, { useState } from "react";
import ToggleMenu from "../modals/ToggleMenu";

const Nav = () => {
  const [isToggleModal, setIsToggleModal] = useState<boolean>(false);
  const handleToggleMenu = () => {
    setIsToggleModal((prev) => !prev);
  };
  const handleCloseMenu = () => {
    setIsToggleModal(false);
  };
  return (
    <div>
      <nav className="w-full pc:flex items-center my-0 mx-auto relative py-[15px] pc:w-[85%] pc:justify-between">
        {/* pc:hidden */}
        <img
          src="/icons/toggleMenuBtn.png"
          alt="메뉴토클버튼"
          className="cursor-pointer absolute left-[20px] top-[25px] hidden"
          onClick={handleToggleMenu}
        />
        <h1 className="text-center pc:text-left">
          <Link href="/" className="font-bold text-3xl">
            <img src="/logo/fcgg.png" alt="" className="inline-block w-10 h-10" />
          </Link>
        </h1>
        {/* pc:flex */}
        <ul className="hidden items-center">
          <li className="px-[15px] text-skyBlue50 font-normal text-lg duration-300 hover:text-white50 hover:translate-y-[-2px]">
            <Link href="/board">
              {/* <img src="" alt="" /> */}
              공지사항
            </Link>
          </li>
          <li className="px-[15px] text-skyBlue50 font-normal text-lg duration-300 hover:text-white50 hover:translate-y-[-2px]">
            <Link href="/calculate">
              <img src="/icons/chart.png" alt="" className="inline-block mr-[10px]" />
              수수료 계산기
            </Link>
          </li>
          <li className="px-[15px] text-skyBlue50 font-normal text-lg duration-300 hover:text-white50 hover:translate-y-[-2px]">
            <Link href="/record/officialGame">
              {/* <img src="" alt="" /> */}
              게시판
            </Link>
          </li>
        </ul>
        {/* pc:block */}
        <div className="hidden invisible pc:visible relative group">
          <button type="button" className="text-skyBlue50 font-normal text-base">
            Screen Mode
          </button>
          <ul className="absolute w-[150px] hidden pc:block overflow-hidden text-center invisible opacity-0 pc:transition-all duration-300 shadow-[0_3px_6px_rgba(0,0,0,0.3)] h-0 group-hover:h-[70px] group-hover:visible group-hover:opacity-100 group-hover:bg-black50">
            <li className="py-1 border-b-1 border-white text-skyBlue50 hover:text-white50">
              <button type="button" className="">
                Dark Mode
              </button>
            </li>
            <li className="py-1 text-skyBlue50 hover:text-white50">
              <button type="button" className="">
                White Mode
              </button>
            </li>
          </ul>
        </div>
      </nav>
      <ToggleMenu isOpen={isToggleModal} onClose={handleCloseMenu} />
    </div>
  );
};

export default Nav;
