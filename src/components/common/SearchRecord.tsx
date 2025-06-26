import React from "react";

const SearchRecord = () => {
  return (
    <div>
      <section className="searchArea mb-[30px] tablet:mb-[65px] pc:mb-[100px]">
        <div className="w-[80%] my-0 mx-auto tablet:w-[60%] pc:w-[40%]">
          <h2 className="w-[100%] mx-auto text-center mb-[15px] font-bold text-xl">
            유저 검색
          </h2>
          <form className="relative w-[100%] text-center">
            <img src="/icons/search-icon.png" alt="" className="absolute left-[20px] top-[50%] translate-y-[-50%]" />
            <input
              type="search"
              name=""
              placeholder="닉네임을 입력하세요."
              className="rounded-lg border-2 border-white w-[100%] focus:outline-none px-[60px] py-2 appearance-none"
            />
          </form>
        </div>
      </section>
    </div>
  );
};

export default SearchRecord;
