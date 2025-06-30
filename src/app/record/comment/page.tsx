import React from "react";

const Comment = () => {
  return <div>
    <section className="w-[90%] tablet:w-[80%] pc:w-[1200px] mx-auto bg-gray50 rounded-[10px] py-5">
      <div className="w-[90%] mx-auto mb-10">
        <h2 className="font-bold text-3xl"><img src="/icons/comment.png" alt="유저 코멘트" className="inline-block" /> 유저 코멘트 <span className="inline-block w-[30px] h-[30px] rounded-[10px] bg-red100 text-center text-2xl">5</span></h2>
      </div>
      <div className="w-[90%] tablet:w-[85%] mx-auto mb-5">
        <ul className="flex gap-[10px] items-center">
          <li className=""><button className="inline-block px-[15px] py-[5px] bg-[#d9d9d9] text-[#3b3b3b] rounded-[10px] font-bold hover:bg-green200 hover:text-white hover:translate-y-[-2px] duration-300">최신순</button></li>
          <li className=""><button className="inline-block px-[15px] py-[5px] bg-[#d9d9d9] text-[#3b3b3b] rounded-[10px] font-bold hover:bg-green200 hover:text-white hover:translate-y-[-2px] duration-300">인기순</button></li>
          <li className=""><button className="inline-block px-[15px] py-[5px] bg-[#d9d9d9] text-[#3b3b3b] rounded-[10px] font-bold hover:bg-green200 hover:text-white hover:translate-y-[-2px] duration-300">오래된순</button></li>
        </ul>
      </div>
      <div className="w-[90%] tablet:w-[85%] mx-auto">
        <ul className="grid grid-cols-1 gap-[15px] mb-5">
          <li className="px-[20px] py-[15px] flex justify-between bg-white/10 border border-white/30 rounded-[20px]">
            <div className="w-[80%]">
              <span className="mb-5 mr-[10px] font-bold text-xl tablet:text-2xl">임정빈</span>
              <button className="inline-block"><img src="/icons/thumb.png" alt="좋아요" className="inline-block" /> <span className="text-sm">2</span></button>
              <p className="text-xs tablet:text-sm pc:text-base">해당유저의 코멘트를 적어주세요. 감사합니다. 사랑합니다. 이 영역은 특정 유저의 평가영역입니다.</p>
            </div>
            <div className="flex items-center justify-between flex-col">
              <time className="opacity-50">1일전</time>
              <button type="button" className="text-red100 font-bold">삭제</button>
            </div>
          </li>
          <li className="px-[20px] py-[15px] flex justify-between bg-white/10 border border-white/30 rounded-[20px]">
            <div className="w-[80%]">
              <span className="mb-5 mr-[10px] font-bold text-xl tablet:text-2xl">임정빈</span>
              <button className="inline-block"><img src="/icons/thumb.png" alt="좋아요" className="inline-block" /> <span className="text-sm">2</span></button>
              <p className="text-xs tablet:text-sm pc:text-base">해당유저의 코멘트를 적어주세요. 감사합니다. 사랑합니다. 이 영역은 특정 유저의 평가영역입니다.</p>
            </div>
            <div className="flex items-center justify-between flex-col">
              <time className="opacity-50">1일전</time>
              <button type="button" className="text-red100 font-bold">삭제</button>
            </div>
          </li>
          <li className="px-[20px] py-[15px] flex justify-between bg-white/10 border border-white/30 rounded-[20px]">
            <div className="w-[80%]">
              <span className="mb-5 mr-[10px] font-bold text-xl tablet:text-2xl">임정빈</span>
              <button className="inline-block"><img src="/icons/thumb.png" alt="좋아요" className="inline-block" /> <span className="text-sm">2</span></button>
              <p className="text-xs tablet:text-sm pc:text-base">해당유저의 코멘트를 적어주세요. 감사합니다. 사랑합니다. 이 영역은 특정 유저의 평가영역입니다.</p>
            </div>
            <div className="flex items-center justify-between flex-col">
              <time className="opacity-50">1일전</time>
              <button type="button" className="text-red100 font-bold">삭제</button>
            </div>
          </li>
          <li className="px-[20px] py-[15px] flex justify-between bg-white/10 border border-white/30 rounded-[20px]">
            <div className="w-[80%]">
              <span className="mb-5 mr-[10px] font-bold text-xl tablet:text-2xl">임정빈</span>
              <button className="inline-block"><img src="/icons/thumb.png" alt="좋아요" className="inline-block" /> <span className="text-sm">2</span></button>
              <p className="text-xs tablet:text-sm pc:text-base">해당유저의 코멘트를 적어주세요. 감사합니다. 사랑합니다. 이 영역은 특정 유저의 평가영역입니다.</p>
            </div>
            <div className="flex items-center justify-between flex-col">
              <time className="opacity-50">1일전</time>
              <button type="button" className="text-red100 font-bold">삭제</button>
            </div>
          </li>
          <li className="px-[20px] py-[15px] flex justify-between bg-white/10 border border-white/30 rounded-[20px]">
            <div className="w-[80%]">
              <span className="mb-5 mr-[10px] font-bold text-xl tablet:text-2xl">임정빈</span>
              <button className="inline-block"><img src="/icons/thumb.png" alt="좋아요" className="inline-block" /> <span className="text-sm">2</span></button>
              <p className="text-xs tablet:text-sm pc:text-base">해당유저의 코멘트를 적어주세요. 감사합니다. 사랑합니다. 이 영역은 특정 유저의 평가영역입니다.</p>
            </div>
            <div className="flex items-center justify-between flex-col">
              <time className="opacity-50">1일전</time>
              <button type="button" className="text-red100 font-bold">삭제</button>
            </div>
          </li>
        </ul>
        <p className="w-[70%] tablet:w-[85%] mx-auto text-[#9e9e9e] text-xl mb-10 font-bold">무분별한 악플은 관리자의 권한하에 지워질 수 있습니다. 욕설을 삼가하고 건전한 인터넷 문화를 만들어 주세요.</p>
      </div>
      <div className="w-[90%] tablet:w-[85%] mx-auto">
        <form className="grid grid-cols-1 gap-[10px]">
          <div className="w-[100%] tablet:w-[75%] pc:w-[50%] flex justify-between gap-[10px]">
            <input type="text" name="작성자" placeholder="작성자" className="outline-0 w-[50%] border border-black rounded-[10px] px-[20px] py-[5px] bg-white text-black font-bold text-base" />
            <input type="password" name="비밀번호" placeholder="비밀번호" className="outline-0 w-[50%] border border-black rounded-[10px] px-[20px] py-[5px] bg-white text-black font-bold text-base" />
          </div>
          <div className="">
            <textarea name="" id="" className="outline-0 px-[20px] py-[10px] h-[100px] w-full bg-white font-bold text-base rounded-[10px] text-black" placeholder="임정빈님에게 코멘트를 달아주세요."/>
          </div>
          <div className="text-right">
            <button className="px-[20px] py-[5px] rounded-[10px] text-white bg-green200 font-bold text-xl hover:bg-[#084c36] hover:translate-y-[-2px] duration-300">작성하기</button>
          </div>
        </form>
      </div>
    </section>
  </div>;
};

export default Comment;
