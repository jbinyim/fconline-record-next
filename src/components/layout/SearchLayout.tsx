import React from 'react'

const SearchLayout = () => {
  return (
    <div>
        <section className="mx-auto w-[90%] tablet:w-[80%] pc:w-[70%]">
            <div className="flex items-center p-5 bg-white/10 border border-[rgba(255,255,255,0.1)] rounded-[10px] mb-[35px]">
                <div className="text-center w-[30%] text-2xl font-bold">
                    <span className="block mb-5 text-green200">호날두</span>
                    <span className="block">Lv.1000</span>
                </div>
                <div className="flex justify-around w-[70%] text-center">
                    <div className="flex justify-center items-center flex-col gap-[5px]">
                        <h2 className="font-bold text-xs tablet:text-sm pc:text-base">공식경기</h2>
                        <img src="https://ssl.nexon.com/s2/game/fo4/obt/rank/large/update_2009/ico_rank0.png" alt="" className="block" />
                        <span className="hidden pc:block text-xs tablet:text-sm pc:text-base">챔피언스</span>
                        <time className="block text-xs tablet:text-sm pc:text-base text-nowrap">2025.01.01</time>
                    </div>
                    <div className="flex justify-center items-center flex-col gap-[5px]">
                        <h2 className="font-bold text-xs tablet:text-sm pc:text-base">감독모드</h2>
                        <img src="https://ssl.nexon.com/s2/game/fo4/obt/rank/large/update_2009/ico_rank0.png" alt="" className="mx-auto block" />
                        <span className="hidden pc:block text-xs tablet:text-sm pc:text-base">챔피언스</span>
                        <time className="block text-xs tablet:text-sm pc:text-base text-nowrap">2025.01.01</time>
                    </div>
                    <div className="flex justify-center items-center flex-col gap-[5px]">
                        <h2 className="font-bold text-xs tablet:text-sm pc:text-base">볼타모드</h2>
                        <img src="https://ssl.nexon.com/s2/game/fo4/obt/rank/large/update_2009/ico_rank0.png" alt="" className="mx-auto block" />
                        <span className="hidden pc:block text-xs tablet:text-sm pc:text-base">챔피언스</span>
                        <time className="block text-xs tablet:text-sm pc:text-base text-nowrap">2025.01.01</time>
                    </div>
                </div>
            </div>
            <div className="py-5 px-[30px] bg-white/10 border border-[rgba(255,255,255,0.1)] rounded-[10px] mb-[30px]">
                <ul className="flex gap-[40px] font-bold">
                    <li className="cursor-pointer hover:text-green100 duration-300"><button type="button">공식경기</button></li>
                    <li className="cursor-pointer hover:text-green100 duration-300"><button type="button">한줄평가</button></li>
                </ul>
            </div>
        </section>
    </div>
  )
}

export default SearchLayout