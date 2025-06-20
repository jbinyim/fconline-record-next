import React from 'react'

const Nav = () => {
  return (
    <div>
      <nav className="w-full pc:flex items-center my-0 mx-auto relative py-[15px] pc:w-[85%] pc:justify-between">
        <img src="" alt="" className="absolute left-20px top-20px p-5 pc:hidden" />
        <h1 className="text-center pc:text-left"><a href="#" className="font-bold text-3xl">FCGG</a></h1>
        <ul className="hidden pc:flex items-center">
        <li className="px-[15px] text-skyBlue50 font-normal text-lg duration-300 hover:text-white50 hover:translate-y-[-2px]"><a href="#"><img src="" alt="" />공지사항</a></li>
          <li className="px-[15px] text-skyBlue50 font-normal text-lg duration-300 hover:text-white50 hover:translate-y-[-2px]"><a href="#"><img src="" alt="" />수수료 계산기</a></li>
          <li className="px-[15px] text-skyBlue50 font-normal text-lg duration-300 hover:text-white50 hover:translate-y-[-2px]"><a href="#"><img src="" alt="" />게시판</a></li>
        </ul>
        <div className="hidden invisible pc:visible pc:block relative group">
          <button type="button" className="text-skyBlue50 font-normal text-base">Screen Mode</button>
          <ul className="absolute w-[150px] hidden pc:block overflow-hidden text-center invisible opacity-0 pc:transition-all duration-300 shadow-[0_3px_6px_rgba(0,0,0,0.3)] h-0 group-hover:h-[70px] group-hover:visible group-hover:opacity-100 group-hover:bg-black50">
            <li className="py-1 border-b-1 border-white text-skyBlue50 hover:text-white50"><button type="button" className="">Dark Mode</button></li>
            <li className="py-1 text-skyBlue50 hover:text-white50"><button type="button" className="">White Mode</button></li>
          </ul>
        </div>
      </nav>
    </div>
  )
}

export default Nav