import React from "react";

const Board = () => {
  return <div>
    <section className="w-[90%] tablet:w-[80%] pc:w-[1200px] mx-auto rounded-[10px] bg-gray50 py-5">
      <div className="w-[90%] tablet:w-[80%] mx-auto">
        <header className="flex justify-between items-center mb-15">
          <div className="">
            <h2 className="text-xl tablet:text-2xl pc:text-3xl text-nowrap">게시판</h2>
          </div>
          <div className="flex justify-between items-center gap-[20px]">
            <input type="text" name="" className="w-[190px] tablet:w-[280px] pc:w-[445px] bg-white px-[15px] py-[5px] rounded-[20px] text-black outline-0" />
            <button className="outline-0 flex items-center center tablet:justify-around gap-[20px] px-[20px] tablet:px-[15px] py-[10px] tablet:py-[5px] rounded-[20px] bg-white"><span className="hidden tablet:block text-black text-nowrap">전체</span><img src="/icons/triangle.png" alt="" className="block" /></button>
          </div>
        </header>
        <main className="">
          <div className="bg-white mb-[15px] rounded-[10px] px-[20px] py-[10px] shadow-[0_0px_30px_rgba(0,0,0,0.9)]">
            <h3 className="bg-black text-[8px] tablet:text-[9px] pc:text-[10px] font-bold inline-block px-[15px] py-[2px] rounded-[15px] mb-[15px] w-[70px] tablet:w-[75px] pc:w-[80px] text-center text-nowrap">자유게시판</h3>
            <div className="text-black mb-[15px]">
              <h2 className="font-bold text-base tablet:text-xl pc:text-2xl truncate">2025-06-04 FC온라인4 업데이트 안내 2025-06-04 FC온라인4 업데이트 안내 2025-06-04 FC온라인4 업데이트 안내</h2>
              <p className="text-[10px] tablet:text-[11px] pc:text-xs truncate">패치내용 - 주요선수 업데이트 / 체감속도 향상</p>
            </div>
            <div className="text-[#989898] text-[8px] tablet:text-[9px] pc:text-[10px] flex gap-[15px]">
              <span className="flex items-center gap-[5px]"><img src="/icons/calendar.png" alt="calendar" className="inline-block" /> 2025-06-04</span>
              <span className="flex items-center gap-[5px]"><img src="/icons/heart.png" alt="heart" className="inline-block" /> 2</span>
              <span className="flex items-center gap-[5px]"><img src="/icons/message-square.png" alt="message" className="inline-block" /> 24</span>
              <span className="flex items-center gap-[5px]"><img src="/icons/eye.png" alt="eye" className="inline-block" /> 574</span>
            </div>
          </div>
          <div className="bg-white mb-[15px] rounded-[10px] px-[20px] py-[10px] shadow-[0_0px_30px_rgba(0,0,0,0.9)]">
            <h3 className="bg-[#83afff] text-[8px] tablet:text-[9px] pc:text-[10px] font-bold inline-block px-[15px] py-[2px] rounded-[15px] mb-[15px] w-[70px] tablet:w-[75px] pc:w-[80px] text-center text-nowrap">게임 TIP</h3>
            <div className="text-black mb-[15px]">
              <h2 className="font-bold text-base tablet:text-xl pc:text-2xl truncate">2025-06-04 FC온라인4 업데이트 안내</h2>
              <p className="text-[10px] tablet:text-[11px] pc:text-xs truncate">패치내용 - 주요선수 업데이트 / 체감속도 향상</p>
            </div>
            <div className="text-[#989898] text-[8px] tablet:text-[9px] pc:text-[10px] flex gap-[15px]">
              <span className="flex items-center gap-[5px]"><img src="/icons/calendar.png" alt="calendar" className="inline-block" /> 2025-06-04</span>
              <span className="flex items-center gap-[5px]"><img src="/icons/heart.png" alt="heart" className="inline-block" /> 2</span>
              <span className="flex items-center gap-[5px]"><img src="/icons/message-square.png" alt="message" className="inline-block" /> 24</span>
              <span className="flex items-center gap-[5px]"><img src="/icons/eye.png" alt="eye" className="inline-block" /> 574</span>
            </div>
          </div>
          <div className="bg-white mb-[15px] rounded-[10px] px-[20px] py-[10px] shadow-[0_0px_30px_rgba(0,0,0,0.9)]">
            <h3 className="bg-[#ff6666] text-[8px] tablet:text-[9px] pc:text-[10px] font-bold inline-block px-[15px] py-[2px] rounded-[15px] mb-[15px] w-[70px] tablet:w-[75px] pc:w-[80px] text-center text-nowrap">공지사항</h3>
            <div className="text-black mb-[15px]">
              <h2 className="font-bold text-base tablet:text-xl pc:text-2xl truncate">2025-06-04 FC온라인4 업데이트 안내</h2>
              <p className="text-[10px] tablet:text-[11px] pc:text-xs truncate">패치내용 - 주요선수 업데이트 / 체감속도 향상</p>
            </div>
            <div className="text-[#989898] text-[8px] tablet:text-[9px] pc:text-[10px] flex gap-[15px]">
              <span className="flex items-center gap-[5px]"><img src="/icons/calendar.png" alt="calendar" className="inline-block" /> 2025-06-04</span>
              <span className="flex items-center gap-[5px]"><img src="/icons/heart.png" alt="heart" className="inline-block" /> 2</span>
              <span className="flex items-center gap-[5px]"><img src="/icons/message-square.png" alt="message" className="inline-block" /> 24</span>
              <span className="flex items-center gap-[5px]"><img src="/icons/eye.png" alt="eye" className="inline-block" /> 574</span>
            </div>
          </div>
          <div className="bg-white mb-[15px] rounded-[10px] px-[20px] py-[10px] shadow-[0_0px_30px_rgba(0,0,0,0.9)]">
            <h3 className="bg-[#33980f] text-[8px] tablet:text-[9px] pc:text-[10px] font-bold inline-block px-[15px] py-[2px] rounded-[15px] mb-[15px] w-[70px] tablet:w-[75px] pc:w-[80px] text-center text-nowrap">질문</h3>
            <div className="text-black mb-[15px]">
              <h2 className="font-bold text-base tablet:text-xl pc:text-2xl truncate">2025-06-04 FC온라인4 업데이트 안내</h2>
              <p className="text-[10px] tablet:text-[11px] pc:text-xs truncate">패치내용 - 주요선수 업데이트 / 체감속도 향상</p>
            </div>
            <div className="text-[#989898] text-[8px] tablet:text-[9px] pc:text-[10px] flex gap-[15px]">
              <span className="flex items-center gap-[5px]"><img src="/icons/calendar.png" alt="calendar" className="inline-block" /> 2025-06-04</span>
              <span className="flex items-center gap-[5px]"><img src="/icons/heart.png" alt="heart" className="inline-block" /> 2</span>
              <span className="flex items-center gap-[5px]"><img src="/icons/message-square.png" alt="message" className="inline-block" /> 24</span>
              <span className="flex items-center gap-[5px]"><img src="/icons/eye.png" alt="eye" className="inline-block" /> 574</span>
            </div>
          </div>
        </main>
      </div>
    </section>
  </div>;
};

export default Board;
