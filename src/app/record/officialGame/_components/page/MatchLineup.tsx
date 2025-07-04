import React from "react";

const MatchLineup = () => {
  return (
    <div className="">
      <div className="w-full mx-auto relative">
        <img
          src="/backgroundImgs/field.png"
          alt=""
          className="relative z-1 mx-auto hidden tablet:block"
        />
        <img
          src="/backgroundImgs/m-field.png"
          alt=""
          className="relative z-1 mx-auto block tablet:hidden"
        />
        <div className="absolute z-10 top-[1%] left-[50%] translate-x-[-50%] translate-y-[-1%] tablet:left-[3%] tablet:top-[50%] tablet:translate-x-[-3%] tablet:translate-y-[-50%]"> {/* 홈팀 GK */}
          <div className="relative">
            <img src="https://fco.dn.nexoncdn.co.kr/live/externalAssets/common/playersAction/p834167495.png" alt="" className="w-[30px] tablet:w-[30px] pc:w-[45px] border-white/30 border-[2px] rounded-full bg-white/20" />
            <img src="https://ssl.nexon.com/s2/game/fc/online/obt/externalAssets/new/season/24ucl.png" alt="" className="absolute left-[-3px] bottom-[-3px] w-[20px]" />
            <span className="absolute bottom-[-20px] text-[8px] tablet:text-[9px] pc:text-[10px] tablet:bottom-[-25px] left-[50%] translate-x-[-50%] font-bold text-nowrap px-[5px] py-[1px] rounded-[10px] border-white/20 border">GK 노이어</span>
            <span className="absolute bg-[#33C771] font-bold text-[8px] tablet:text-[9px] pc:text-[10px] top-[-5px] right-[-10px] px-[5px] py-[2px] rounded-[5px]">7.0</span>
            <span className="absolute bottom-[-5px] right-[-10px] w-[15px] tablet:w-[20px] pc:w-[20px] text-[9px] tablet:text-[11px] pc:text-[13px] rounded-[5px] text-center text-[#695100] font-bold border-[#cda000] border bg-gradient-to-r from-[#f9dd62] to-[#dca908]">8</span>
          </div>
        </div>
        <div className="absolute z-10 top-[10%] left-[70%] translate-x-[-70%] translate-y-[-10%] tablet:left-[12%] tablet:top-[30%] tablet:translate-x-[-12%] tablet:translate-y-[-30%]"> {/* 홈팀 LCB */}
          <div className="relative">
            <img src="https://fco.dn.nexoncdn.co.kr/live/externalAssets/common/playersAction/p834167495.png" alt="" className="w-[30px] tablet:w-[30px] pc:w-[45px] border-white/30 border-[2px] rounded-full bg-white/20" />
            <img src="https://ssl.nexon.com/s2/game/fc/online/obt/externalAssets/new/season/24ucl.png" alt="" className="absolute left-[-3px] bottom-[-3px] w-[20px]" />
            <span className="absolute bottom-[-20px] text-[8px] tablet:text-[9px] pc:text-[10px] tablet:bottom-[-25px] left-[50%] translate-x-[-50%] font-bold text-nowrap px-[5px] py-[1px] rounded-[10px] border-white/20 border">LCB 노이어</span>
            <span className="absolute bg-[#33C771] font-bold text-[8px] tablet:text-[9px] pc:text-[10px] top-[-5px] right-[-10px] px-[4px] py-[1px] tablet:px-[5px] tablet:py-[2px] rounded-[5px]">7.0</span>
            <span className="absolute bottom-[-5px] right-[-10px] w-[15px] tablet:w-[20px] pc:w-[20px] text-[9px] tablet:text-[11px] pc:text-[13px] rounded-[5px] text-center text-[#4e545e] font-bold border-[#a5a8ae] border bg-gradient-to-r from-[#d8d9dc] to-[#b8bdca]">5</span>
          </div>
        </div>
        <div className="absolute z-10 top-[10%] left-[30%] translate-x-[-30%] translate-y-[-10%] tablet:left-[12%] tablet:top-[70%] tablet:translate-x-[-12%] tablet:translate-y-[-70%]"> {/* 홈팀 RCB */}
          <div className="relative">
            <img src="https://fco.dn.nexoncdn.co.kr/live/externalAssets/common/playersAction/p834167495.png" alt="" className="w-[30px] tablet:w-[30px] pc:w-[45px] border-white/30 border-[2px] rounded-full bg-white/20" />
            <img src="https://ssl.nexon.com/s2/game/fc/online/obt/externalAssets/new/season/24ucl.png" alt="" className="absolute left-[-3px] bottom-[-3px] w-[20px]" />
            <span className="absolute bottom-[-20px] text-[8px] tablet:text-[9px] pc:text-[10px] tablet:bottom-[-25px] left-[50%] translate-x-[-50%] font-bold text-nowrap px-[5px] py-[1px] rounded-[10px] border-white/20 border">RCB 노이어</span>
            <span className="absolute bg-[#33C771] font-bold text-[8px] tablet:text-[9px] pc:text-[10px] top-[-5px] right-[-10px] px-[4px] py-[1px] tablet:px-[5px] tablet:py-[2px] rounded-[5px]">7.0</span>
            <span className="absolute bottom-[-5px] right-[-10px] w-[15px] tablet:w-[20px] pc:w-[20px] text-[9px] tablet:text-[11px] pc:text-[13px] rounded-[5px] text-center text-[#7e3f27] font-bold border-[#864229] border bg-gradient-to-r from-[#de946b] to-[#ad5f42]">4</span>
          </div>
        </div>
        <div className="absolute z-10 top-[10%] left-[90%] translate-x-[-90%] translate-y-[-10%] tablet:left-[12%] tablet:top-[10%] tablet:translate-x-[-12%] tablet:translate-y-[-10%]"> {/* 홈팀 LB */}
          <div className="relative">
            <img src="https://fco.dn.nexoncdn.co.kr/live/externalAssets/common/playersAction/p834167495.png" alt="" className="w-[30px] tablet:w-[30px] pc:w-[45px] border-white/30 border-[2px] rounded-full bg-white/20" />
            <img src="https://ssl.nexon.com/s2/game/fc/online/obt/externalAssets/new/season/24ucl.png" alt="" className="absolute left-[-3px] bottom-[-3px] w-[20px]" />
            <span className="absolute bottom-[-20px] text-[8px] tablet:text-[9px] pc:text-[10px] tablet:bottom-[-25px] left-[50%] translate-x-[-50%] font-bold text-nowrap px-[5px] py-[1px] rounded-[10px] border-white/20 border">LB 노이어</span>
            <span className="absolute bg-[#33C771] font-bold text-[8px] tablet:text-[9px] pc:text-[10px] top-[-5px] right-[-10px] px-[4px] py-[1px] tablet:px-[5px] tablet:py-[2px] rounded-[5px]">7.0</span>
            <span className="moreten absolute bottom-[-5px] right-[-10px] w-[15px] tablet:w-[20px] pc:w-[20px] text-[9px] tablet:text-[11px] pc:text-[13px] rounded-[5px] text-center text-[#2d2b43] font-bold border-[#5274c0] border">11</span>
          </div>
        </div>
        <div className="absolute z-10 top-[10%] left-[10%] translate-x-[-10%] translate-y-[-10%] tablet:left-[12%] tablet:top-[90%] tablet:translate-x-[-12%] tablet:translate-y-[-90%]"> {/* 홈팀 RB */}
          <div className="relative">
            <img src="https://fco.dn.nexoncdn.co.kr/live/externalAssets/common/playersAction/p834167495.png" alt="" className="w-[30px] tablet:w-[30px] pc:w-[45px] border-white/30 border-[2px] rounded-full bg-white/20" />
            <img src="https://ssl.nexon.com/s2/game/fc/online/obt/externalAssets/new/season/24ucl.png" alt="" className="absolute left-[-3px] bottom-[-3px] w-[20px]" />
            <span className="absolute bottom-[-20px] text-[8px] tablet:text-[9px] pc:text-[10px] tablet:bottom-[-25px] left-[50%] translate-x-[-50%] font-bold text-nowrap px-[5px] py-[1px] rounded-[10px] border-white/20 border">RB 노이어</span>
            <span className="absolute bg-[#33C771] font-bold text-[8px] tablet:text-[9px] pc:text-[10px] top-[-5px] right-[-10px] px-[4px] py-[1px] tablet:px-[5px] tablet:py-[2px] rounded-[5px]">7.0</span>
            <span className="absolute bottom-[-5px] right-[-10px] w-[15px] tablet:w-[20px] pc:w-[20px] text-[9px] tablet:text-[11px] pc:text-[13px] rounded-[5px] text-center text-[#c5c8c9] font-bold border-[#393a3c] border bg-gradient-to-r from-[#51545a] to-[#42464d]">1</span>
          </div>
        </div>
        <div className="absolute z-10 top-[8%] left-[50%] translate-x-[-50%] translate-y-[-8%] tablet:left-[8%] tablet:top-[50%] tablet:translate-x-[-8%] tablet:translate-y-[-50%]"> {/* 홈팀 CB */}
          <div className="relative">
            <img src="https://fco.dn.nexoncdn.co.kr/live/externalAssets/common/playersAction/p834167495.png" alt="" className="w-[30px] tablet:w-[30px] pc:w-[45px] border-white/30 border-[2px] rounded-full bg-white/20" />
            <img src="https://ssl.nexon.com/s2/game/fc/online/obt/externalAssets/new/season/24ucl.png" alt="" className="absolute left-[-3px] bottom-[-3px] w-[20px]" />
            <span className="absolute bottom-[-20px] text-[8px] tablet:text-[9px] pc:text-[10px] tablet:bottom-[-25px] left-[50%] translate-x-[-50%] font-bold text-nowrap px-[5px] py-[1px] rounded-[10px] border-white/20 border">CB 노이어</span>
            <span className="absolute bg-[#33C771] font-bold text-[8px] tablet:text-[9px] pc:text-[10px] top-[-5px] right-[-10px] px-[4px] py-[1px] tablet:px-[5px] tablet:py-[2px] rounded-[5px]">7.0</span>
            <span className="absolute bottom-[-5px] right-[-10px] w-[15px] tablet:w-[20px] pc:w-[20px] text-[9px] tablet:text-[11px] pc:text-[13px] rounded-[5px] text-center text-[#c5c8c9] font-bold border-[#393a3c] border bg-gradient-to-r from-[#51545a] to-[#42464d]">1</span>
          </div>
        </div>
        <div className="absolute z-10 top-[12%] left-[50%] translate-x-[-50%] translate-y-[-12%] tablet:left-[12%] tablet:top-[50%] tablet:translate-x-[-12%] tablet:translate-y-[-50%]"> {/* 홈팀 SW */}
          <div className="relative">
            <img src="https://fco.dn.nexoncdn.co.kr/live/externalAssets/common/playersAction/p834167495.png" alt="" className="w-[30px] tablet:w-[30px] pc:w-[45px] border-white/30 border-[2px] rounded-full bg-white/20" />
            <img src="https://ssl.nexon.com/s2/game/fc/online/obt/externalAssets/new/season/24ucl.png" alt="" className="absolute left-[-3px] bottom-[-3px] w-[20px]" />
            <span className="absolute bottom-[-20px] text-[8px] tablet:text-[9px] pc:text-[10px] tablet:bottom-[-25px] left-[50%] translate-x-[-50%] font-bold text-nowrap px-[5px] py-[1px] rounded-[10px] border-white/20 border">SW 노이어</span>
            <span className="absolute bg-[#33C771] font-bold text-[8px] tablet:text-[9px] pc:text-[10px] top-[-5px] right-[-10px] px-[4px] py-[1px] tablet:px-[5px] tablet:py-[2px] rounded-[5px]">7.0</span>
            <span className="absolute bottom-[-5px] right-[-10px] w-[15px] tablet:w-[20px] pc:w-[20px] text-[9px] tablet:text-[11px] pc:text-[13px] rounded-[5px] text-center text-[#c5c8c9] font-bold border-[#393a3c] border bg-gradient-to-r from-[#51545a] to-[#42464d]">1</span>
          </div>
        </div>
        <div className="absolute z-10 top-[18%] left-[70%] translate-x-[-70%] translate-y-[-18%] tablet:left-[20%] tablet:top-[30%] tablet:translate-x-[-20%] tablet:translate-y-[-30%]"> {/* 홈팀 LDM */}
          <div className="relative">
            <img src="https://fco.dn.nexoncdn.co.kr/live/externalAssets/common/playersAction/p834167495.png" alt="" className="w-[30px] tablet:w-[30px] pc:w-[45px] border-white/30 border-[2px] rounded-full bg-white/20" />
            <img src="https://ssl.nexon.com/s2/game/fc/online/obt/externalAssets/new/season/24ucl.png" alt="" className="absolute left-[-3px] bottom-[-3px] w-[20px]" />
            <span className="absolute bottom-[-20px] text-[8px] tablet:text-[9px] pc:text-[10px] tablet:bottom-[-25px] left-[50%] translate-x-[-50%] font-bold text-nowrap px-[5px] py-[1px] rounded-[10px] border-white/20 border">LDM 노이어</span>
            <span className="absolute bg-[#33C771] font-bold text-[8px] tablet:text-[9px] pc:text-[10px] top-[-5px] right-[-10px] px-[4px] py-[1px] tablet:px-[5px] tablet:py-[2px] rounded-[5px]">7.0</span>
            <span className="absolute bottom-[-5px] right-[-10px] w-[15px] tablet:w-[20px] pc:w-[20px] text-[9px] tablet:text-[11px] pc:text-[13px] rounded-[5px] text-center text-[#c5c8c9] font-bold border-[#393a3c] border bg-gradient-to-r from-[#51545a] to-[#42464d]">1</span>
          </div>
        </div>
        <div className="absolute z-10 top-[18%] left-[30%] translate-x-[-30%] translate-y-[-18%] tablet:left-[20%] tablet:top-[70%] tablet:translate-x-[-20%] tablet:translate-y-[-70%]"> {/* 홈팀 RDM */}
          <div className="relative">
            <img src="https://fco.dn.nexoncdn.co.kr/live/externalAssets/common/playersAction/p834167495.png" alt="" className="w-[30px] tablet:w-[30px] pc:w-[45px] border-white/30 border-[2px] rounded-full bg-white/20" />
            <img src="https://ssl.nexon.com/s2/game/fc/online/obt/externalAssets/new/season/24ucl.png" alt="" className="absolute left-[-3px] bottom-[-3px] w-[20px]" />
            <span className="absolute bottom-[-20px] text-[8px] tablet:text-[9px] pc:text-[10px] tablet:bottom-[-25px] left-[50%] translate-x-[-50%] font-bold text-nowrap px-[5px] py-[1px] rounded-[10px] border-white/20 border">RDM 노이어</span>
            <span className="absolute bg-[#33C771] font-bold text-[8px] tablet:text-[9px] pc:text-[10px] top-[-5px] right-[-10px] px-[4px] py-[1px] tablet:px-[5px] tablet:py-[2px] rounded-[5px]">7.0</span>
            <span className="absolute bottom-[-5px] right-[-10px] w-[15px] tablet:w-[20px] pc:w-[20px] text-[9px] tablet:text-[11px] pc:text-[13px] rounded-[5px] text-center text-[#c5c8c9] font-bold border-[#393a3c] border bg-gradient-to-r from-[#51545a] to-[#42464d]">1</span>
          </div>
        </div>
        <div className="absolute z-10 top-[18%] left-[50%] translate-x-[-50%] translate-y-[-18%] tablet:left-[20%] tablet:top-[50%] tablet:translate-x-[-20%] tablet:translate-y-[-50%]"> {/* 홈팀 CDM */}
          <div className="relative">
            <img src="https://fco.dn.nexoncdn.co.kr/live/externalAssets/common/playersAction/p834167495.png" alt="" className="w-[30px] tablet:w-[30px] pc:w-[45px] border-white/30 border-[2px] rounded-full bg-white/20" />
            <img src="https://ssl.nexon.com/s2/game/fc/online/obt/externalAssets/new/season/24ucl.png" alt="" className="absolute left-[-3px] bottom-[-3px] w-[20px]" />
            <span className="absolute bottom-[-20px] text-[8px] tablet:text-[9px] pc:text-[10px] tablet:bottom-[-25px] left-[50%] translate-x-[-50%] font-bold text-nowrap px-[5px] py-[1px] rounded-[10px] border-white/20 border">CDM 노이어</span>
            <span className="absolute bg-[#33C771] font-bold text-[8px] tablet:text-[9px] pc:text-[10px] top-[-5px] right-[-10px] px-[4px] py-[1px] tablet:px-[5px] tablet:py-[2px] rounded-[5px]">7.0</span>
            <span className="absolute bottom-[-5px] right-[-10px] w-[15px] tablet:w-[20px] pc:w-[20px] text-[9px] tablet:text-[11px] pc:text-[13px] rounded-[5px] text-center text-[#c5c8c9] font-bold border-[#393a3c] border bg-gradient-to-r from-[#51545a] to-[#42464d]">1</span>
          </div>
        </div>
        <div className="absolute z-10 top-[16%] left-[90%] translate-x-[-90%] translate-y-[-16%] tablet:left-[18%] tablet:top-[10%] tablet:translate-x-[-18%] tablet:translate-y-[-10%]"> {/* 홈팀 LWB */}
          <div className="relative">
            <img src="https://fco.dn.nexoncdn.co.kr/live/externalAssets/common/playersAction/p834167495.png" alt="" className="w-[30px] tablet:w-[30px] pc:w-[45px] border-white/30 border-[2px] rounded-full bg-white/20" />
            <img src="https://ssl.nexon.com/s2/game/fc/online/obt/externalAssets/new/season/24ucl.png" alt="" className="absolute left-[-3px] bottom-[-3px] w-[20px]" />
            <span className="absolute bottom-[-20px] text-[8px] tablet:text-[9px] pc:text-[10px] tablet:bottom-[-25px] left-[50%] translate-x-[-50%] font-bold text-nowrap px-[5px] py-[1px] rounded-[10px] border-white/20 border">LWB 노이어</span>
            <span className="absolute bg-[#33C771] font-bold text-[8px] tablet:text-[9px] pc:text-[10px] top-[-5px] right-[-10px] px-[4px] py-[1px] tablet:px-[5px] tablet:py-[2px] rounded-[5px]">7.0</span>
            <span className="absolute bottom-[-5px] right-[-10px] w-[15px] tablet:w-[20px] pc:w-[20px] text-[9px] tablet:text-[11px] pc:text-[13px] rounded-[5px] text-center text-[#c5c8c9] font-bold border-[#393a3c] border bg-gradient-to-r from-[#51545a] to-[#42464d]">1</span>
          </div>
        </div>
        <div className="absolute z-10 top-[16%] left-[10%] translate-x-[-10%] translate-y-[-16%] tablet:left-[18%] tablet:top-[90%] tablet:translate-x-[-18%] tablet:translate-y-[-90%]"> {/* 홈팀 RWB */}
          <div className="relative">
            <img src="https://fco.dn.nexoncdn.co.kr/live/externalAssets/common/playersAction/p834167495.png" alt="" className="w-[30px] tablet:w-[30px] pc:w-[45px] border-white/30 border-[2px] rounded-full bg-white/20" />
            <img src="https://ssl.nexon.com/s2/game/fc/online/obt/externalAssets/new/season/24ucl.png" alt="" className="absolute left-[-3px] bottom-[-3px] w-[20px]" />
            <span className="absolute bottom-[-20px] text-[8px] tablet:text-[9px] pc:text-[10px] tablet:bottom-[-25px] left-[50%] translate-x-[-50%] font-bold text-nowrap px-[5px] py-[1px] rounded-[10px] border-white/20 border">RWB 노이어</span>
            <span className="absolute bg-[#33C771] font-bold text-[8px] tablet:text-[9px] pc:text-[10px] top-[-5px] right-[-10px] px-[4px] py-[1px] tablet:px-[5px] tablet:py-[2px] rounded-[5px]">7.0</span>
            <span className="absolute bottom-[-5px] right-[-10px] w-[15px] tablet:w-[20px] pc:w-[20px] text-[9px] tablet:text-[11px] pc:text-[13px] rounded-[5px] text-center text-[#c5c8c9] font-bold border-[#393a3c] border bg-gradient-to-r from-[#51545a] to-[#42464d]">1</span>
          </div>
        </div>
        <div className="absolute z-10 top-[25%] left-[50%] translate-x-[-50%] translate-y-[-25%] tablet:left-[28%] tablet:top-[50%] tablet:translate-x-[-28%] tablet:translate-y-[-50%]"> {/* 홈팀 CM */}
          <div className="relative">
            <img src="https://fco.dn.nexoncdn.co.kr/live/externalAssets/common/playersAction/p834167495.png" alt="" className="w-[30px] tablet:w-[30px] pc:w-[45px] border-white/30 border-[2px] rounded-full bg-white/20" />
            <img src="https://ssl.nexon.com/s2/game/fc/online/obt/externalAssets/new/season/24ucl.png" alt="" className="absolute left-[-3px] bottom-[-3px] w-[20px]" />
            <span className="absolute bottom-[-20px] text-[8px] tablet:text-[9px] pc:text-[10px] tablet:bottom-[-25px] left-[50%] translate-x-[-50%] font-bold text-nowrap px-[5px] py-[1px] rounded-[10px] border-white/20 border">CM 노이어</span>
            <span className="absolute bg-[#33C771] font-bold text-[8px] tablet:text-[9px] pc:text-[10px] top-[-5px] right-[-10px] px-[4px] py-[1px] tablet:px-[5px] tablet:py-[2px] rounded-[5px]">7.0</span>
            <span className="absolute bottom-[-5px] right-[-10px] w-[15px] tablet:w-[20px] pc:w-[20px] text-[9px] tablet:text-[11px] pc:text-[13px] rounded-[5px] text-center text-[#c5c8c9] font-bold border-[#393a3c] border bg-gradient-to-r from-[#51545a] to-[#42464d]">1</span>
          </div>
        </div>
        <div className="absolute z-10 top-[25%] left-[70%] translate-x-[-70%] translate-y-[-25%] tablet:left-[28%] tablet:top-[30%] tablet:translate-x-[-28%] tablet:translate-y-[-30%]"> {/* 홈팀 LCM */}
          <div className="relative">
            <img src="https://fco.dn.nexoncdn.co.kr/live/externalAssets/common/playersAction/p834167495.png" alt="" className="w-[30px] tablet:w-[30px] pc:w-[45px] border-white/30 border-[2px] rounded-full bg-white/20" />
            <img src="https://ssl.nexon.com/s2/game/fc/online/obt/externalAssets/new/season/24ucl.png" alt="" className="absolute left-[-3px] bottom-[-3px] w-[20px]" />
            <span className="absolute bottom-[-20px] text-[8px] tablet:text-[9px] pc:text-[10px] tablet:bottom-[-25px] left-[50%] translate-x-[-50%] font-bold text-nowrap px-[5px] py-[1px] rounded-[10px] border-white/20 border">LCM 노이어</span>
            <span className="absolute bg-[#33C771] font-bold text-[8px] tablet:text-[9px] pc:text-[10px] top-[-5px] right-[-10px] px-[4px] py-[1px] tablet:px-[5px] tablet:py-[2px] rounded-[5px]">7.0</span>
            <span className="absolute bottom-[-5px] right-[-10px] w-[15px] tablet:w-[20px] pc:w-[20px] text-[9px] tablet:text-[11px] pc:text-[13px] rounded-[5px] text-center text-[#c5c8c9] font-bold border-[#393a3c] border bg-gradient-to-r from-[#51545a] to-[#42464d]">1</span>
          </div>
        </div>
        <div className="absolute z-10 top-[25%] left-[30%] translate-x-[-30%] translate-y-[-25%] tablet:left-[28%] tablet:top-[70%] tablet:translate-x-[-28%] tablet:translate-y-[-70%]"> {/* 홈팀 RCM */}
          <div className="relative">
            <img src="https://fco.dn.nexoncdn.co.kr/live/externalAssets/common/playersAction/p834167495.png" alt="" className="w-[30px] tablet:w-[30px] pc:w-[45px] border-white/30 border-[2px] rounded-full bg-white/20" />
            <img src="https://ssl.nexon.com/s2/game/fc/online/obt/externalAssets/new/season/24ucl.png" alt="" className="absolute left-[-3px] bottom-[-3px] w-[20px]" />
            <span className="absolute bottom-[-20px] text-[8px] tablet:text-[9px] pc:text-[10px] tablet:bottom-[-25px] left-[50%] translate-x-[-50%] font-bold text-nowrap px-[5px] py-[1px] rounded-[10px] border-white/20 border">RCM 노이어</span>
            <span className="absolute bg-[#33C771] font-bold text-[8px] tablet:text-[9px] pc:text-[10px] top-[-5px] right-[-10px] px-[4px] py-[1px] tablet:px-[5px] tablet:py-[2px] rounded-[5px]">7.0</span>
            <span className="absolute bottom-[-5px] right-[-10px] w-[15px] tablet:w-[20px] pc:w-[20px] text-[9px] tablet:text-[11px] pc:text-[13px] rounded-[5px] text-center text-[#c5c8c9] font-bold border-[#393a3c] border bg-gradient-to-r from-[#51545a] to-[#42464d]">1</span>
          </div>
        </div>
        <div className="absolute z-10 top-[25%] left-[90%] translate-x-[-90%] translate-y-[-25%] tablet:left-[28%] tablet:top-[10%] tablet:translate-x-[-28%] tablet:translate-y-[-10%]"> {/* 홈팀 LM */}
          <div className="relative">
            <img src="https://fco.dn.nexoncdn.co.kr/live/externalAssets/common/playersAction/p834167495.png" alt="" className="w-[30px] tablet:w-[30px] pc:w-[45px] border-white/30 border-[2px] rounded-full bg-white/20" />
            <img src="https://ssl.nexon.com/s2/game/fc/online/obt/externalAssets/new/season/24ucl.png" alt="" className="absolute left-[-3px] bottom-[-3px] w-[20px]" />
            <span className="absolute bottom-[-20px] text-[8px] tablet:text-[9px] pc:text-[10px] tablet:bottom-[-25px] left-[50%] translate-x-[-50%] font-bold text-nowrap px-[5px] py-[1px] rounded-[10px] border-white/20 border">LM 노이어</span>
            <span className="absolute bg-[#33C771] font-bold text-[8px] tablet:text-[9px] pc:text-[10px] top-[-5px] right-[-10px] px-[4px] py-[1px] tablet:px-[5px] tablet:py-[2px] rounded-[5px]">7.0</span>
            <span className="absolute bottom-[-5px] right-[-10px] w-[15px] tablet:w-[20px] pc:w-[20px] text-[9px] tablet:text-[11px] pc:text-[13px] rounded-[5px] text-center text-[#c5c8c9] font-bold border-[#393a3c] border bg-gradient-to-r from-[#51545a] to-[#42464d]">1</span>
          </div>
        </div>
        <div className="absolute z-10 top-[25%] left-[10%] translate-x-[-10%] translate-y-[-25%] tablet:left-[28%] tablet:top-[90%] tablet:translate-x-[-28%] tablet:translate-y-[-90%]"> {/* 홈팀 RM */}
          <div className="relative">
            <img src="https://fco.dn.nexoncdn.co.kr/live/externalAssets/common/playersAction/p834167495.png" alt="" className="w-[30px] tablet:w-[30px] pc:w-[45px] border-white/30 border-[2px] rounded-full bg-white/20" />
            <img src="https://ssl.nexon.com/s2/game/fc/online/obt/externalAssets/new/season/24ucl.png" alt="" className="absolute left-[-3px] bottom-[-3px] w-[20px]" />
            <span className="absolute bottom-[-20px] text-[8px] tablet:text-[9px] pc:text-[10px] tablet:bottom-[-25px] left-[50%] translate-x-[-50%] font-bold text-nowrap px-[5px] py-[1px] rounded-[10px] border-white/20 border">RM 노이어</span>
            <span className="absolute bg-[#33C771] font-bold text-[8px] tablet:text-[9px] pc:text-[10px] top-[-5px] right-[-10px] px-[4px] py-[1px] tablet:px-[5px] tablet:py-[2px] rounded-[5px]">7.0</span>
            <span className="absolute bottom-[-5px] right-[-10px] w-[15px] tablet:w-[20px] pc:w-[20px] text-[9px] tablet:text-[11px] pc:text-[13px] rounded-[5px] text-center text-[#c5c8c9] font-bold border-[#393a3c] border bg-gradient-to-r from-[#51545a] to-[#42464d]">1</span>
          </div>
        </div>
        <div className="absolute z-10 top-[32%] left-[50%] translate-x-[-50%] translate-y-[-32%] tablet:left-[34%] tablet:top-[50%] tablet:translate-x-[-34%] tablet:translate-y-[-50%]"> {/* 홈팀 CAM */}
          <div className="relative">
            <img src="https://fco.dn.nexoncdn.co.kr/live/externalAssets/common/playersAction/p834167495.png" alt="" className="w-[30px] tablet:w-[30px] pc:w-[45px] border-white/30 border-[2px] rounded-full bg-white/20" />
            <img src="https://ssl.nexon.com/s2/game/fc/online/obt/externalAssets/new/season/24ucl.png" alt="" className="absolute left-[-3px] bottom-[-3px] w-[20px]" />
            <span className="absolute bottom-[-20px] text-[8px] tablet:text-[9px] pc:text-[10px] tablet:bottom-[-25px] left-[50%] translate-x-[-50%] font-bold text-nowrap px-[5px] py-[1px] rounded-[10px] border-white/20 border">CAM 노이어</span>
            <span className="absolute bg-[#33C771] font-bold text-[8px] tablet:text-[9px] pc:text-[10px] top-[-5px] right-[-10px] px-[4px] py-[1px] tablet:px-[5px] tablet:py-[2px] rounded-[5px]">7.0</span>
            <span className="absolute bottom-[-5px] right-[-10px] w-[15px] tablet:w-[20px] pc:w-[20px] text-[9px] tablet:text-[11px] pc:text-[13px] rounded-[5px] text-center text-[#c5c8c9] font-bold border-[#393a3c] border bg-gradient-to-r from-[#51545a] to-[#42464d]">1</span>
          </div>
        </div>
        <div className="absolute z-10 top-[32%] left-[70%] translate-x-[-70%] translate-y-[-32%] tablet:left-[34%] tablet:top-[30%] tablet:translate-x-[-34%] tablet:translate-y-[-30%]"> {/* 홈팀 LAM */}
          <div className="relative">
            <img src="https://fco.dn.nexoncdn.co.kr/live/externalAssets/common/playersAction/p834167495.png" alt="" className="w-[30px] tablet:w-[30px] pc:w-[45px] border-white/30 border-[2px] rounded-full bg-white/20" />
            <img src="https://ssl.nexon.com/s2/game/fc/online/obt/externalAssets/new/season/24ucl.png" alt="" className="absolute left-[-3px] bottom-[-3px] w-[20px]" />
            <span className="absolute bottom-[-20px] text-[8px] tablet:text-[9px] pc:text-[10px] tablet:bottom-[-25px] left-[50%] translate-x-[-50%] font-bold text-nowrap px-[5px] py-[1px] rounded-[10px] border-white/20 border">LAM 노이어</span>
            <span className="absolute bg-[#33C771] font-bold text-[8px] tablet:text-[9px] pc:text-[10px] top-[-5px] right-[-10px] px-[4px] py-[1px] tablet:px-[5px] tablet:py-[2px] rounded-[5px]">7.0</span>
            <span className="absolute bottom-[-5px] right-[-10px] w-[15px] tablet:w-[20px] pc:w-[20px] text-[9px] tablet:text-[11px] pc:text-[13px] rounded-[5px] text-center text-[#c5c8c9] font-bold border-[#393a3c] border bg-gradient-to-r from-[#51545a] to-[#42464d]">1</span>
          </div>
        </div>
        <div className="absolute z-10 top-[32%] left-[30%] translate-x-[-30%] translate-y-[-32%] tablet:left-[34%] tablet:top-[70%] tablet:translate-x-[-34%] tablet:translate-y-[-70%]"> {/* 홈팀 RAM */}
          <div className="relative">
            <img src="https://fco.dn.nexoncdn.co.kr/live/externalAssets/common/playersAction/p834167495.png" alt="" className="w-[30px] tablet:w-[30px] pc:w-[45px] border-white/30 border-[2px] rounded-full bg-white/20" />
            <img src="https://ssl.nexon.com/s2/game/fc/online/obt/externalAssets/new/season/24ucl.png" alt="" className="absolute left-[-3px] bottom-[-3px] w-[20px]" />
            <span className="absolute bottom-[-20px] text-[8px] tablet:text-[9px] pc:text-[10px] tablet:bottom-[-25px] left-[50%] translate-x-[-50%] font-bold text-nowrap px-[5px] py-[1px] rounded-[10px] border-white/20 border">RAM 노이어</span>
            <span className="absolute bg-[#33C771] font-bold text-[8px] tablet:text-[9px] pc:text-[10px] top-[-5px] right-[-10px] px-[4px] py-[1px] tablet:px-[5px] tablet:py-[2px] rounded-[5px]">7.0</span>
            <span className="absolute bottom-[-5px] right-[-10px] w-[15px] tablet:w-[20px] pc:w-[20px] text-[9px] tablet:text-[11px] pc:text-[13px] rounded-[5px] text-center text-[#c5c8c9] font-bold border-[#393a3c] border bg-gradient-to-r from-[#51545a] to-[#42464d]">1</span>
          </div>
        </div>
        <div className="absolute z-10 top-[39%] left-[50%] translate-x-[-50%] translate-y-[-39%] tablet:left-[40%] tablet:top-[50%] tablet:translate-x-[-40%] tablet:translate-y-[-50%]"> {/* 홈팀 CF */}
          <div className="relative">
            <img src="https://fco.dn.nexoncdn.co.kr/live/externalAssets/common/playersAction/p834167495.png" alt="" className="w-[30px] tablet:w-[30px] pc:w-[45px] border-white/30 border-[2px] rounded-full bg-white/20" />
            <img src="https://ssl.nexon.com/s2/game/fc/online/obt/externalAssets/new/season/24ucl.png" alt="" className="absolute left-[-3px] bottom-[-3px] w-[20px]" />
            <span className="absolute bottom-[-20px] text-[8px] tablet:text-[9px] pc:text-[10px] tablet:bottom-[-25px] left-[50%] translate-x-[-50%] font-bold text-nowrap px-[5px] py-[1px] rounded-[10px] border-white/20 border">CF 노이어</span>
            <span className="absolute bg-[#33C771] font-bold text-[8px] tablet:text-[9px] pc:text-[10px] top-[-5px] right-[-10px] px-[4px] py-[1px] tablet:px-[5px] tablet:py-[2px] rounded-[5px]">7.0</span>
            <span className="absolute bottom-[-5px] right-[-10px] w-[15px] tablet:w-[20px] pc:w-[20px] text-[9px] tablet:text-[11px] pc:text-[13px] rounded-[5px] text-center text-[#c5c8c9] font-bold border-[#393a3c] border bg-gradient-to-r from-[#51545a] to-[#42464d]">1</span>
          </div>
        </div>
        <div className="absolute z-10 top-[39%] left-[90%] translate-x-[-90%] translate-y-[-39%] tablet:left-[40%] tablet:top-[10%] tablet:translate-x-[-40%] tablet:translate-y-[-10%]"> {/* 홈팀 LW */}
          <div className="relative">
            <img src="https://fco.dn.nexoncdn.co.kr/live/externalAssets/common/playersAction/p834167495.png" alt="" className="w-[30px] tablet:w-[30px] pc:w-[45px] border-white/30 border-[2px] rounded-full bg-white/20" />
            <img src="https://ssl.nexon.com/s2/game/fc/online/obt/externalAssets/new/season/24ucl.png" alt="" className="absolute left-[-3px] bottom-[-3px] w-[20px]" />
            <span className="absolute bottom-[-20px] text-[8px] tablet:text-[9px] pc:text-[10px] tablet:bottom-[-25px] left-[50%] translate-x-[-50%] font-bold text-nowrap px-[5px] py-[1px] rounded-[10px] border-white/20 border">LW 노이어</span>
            <span className="absolute bg-[#33C771] font-bold text-[8px] tablet:text-[9px] pc:text-[10px] top-[-5px] right-[-10px] px-[4px] py-[1px] tablet:px-[5px] tablet:py-[2px] rounded-[5px]">7.0</span>
            <span className="absolute bottom-[-5px] right-[-10px] w-[15px] tablet:w-[20px] pc:w-[20px] text-[9px] tablet:text-[11px] pc:text-[13px] rounded-[5px] text-center text-[#c5c8c9] font-bold border-[#393a3c] border bg-gradient-to-r from-[#51545a] to-[#42464d]">1</span>
          </div>
        </div>
        <div className="absolute z-10 top-[39%] left-[10%] translate-x-[-10%] translate-y-[-39%] tablet:left-[40%] tablet:top-[90%] tablet:translate-x-[-40%] tablet:translate-y-[-90%]"> {/* 홈팀 RW */}
          <div className="relative">
            <img src="https://fco.dn.nexoncdn.co.kr/live/externalAssets/common/playersAction/p834167495.png" alt="" className="w-[30px] tablet:w-[30px] pc:w-[45px] border-white/30 border-[2px] rounded-full bg-white/20" />
            <img src="https://ssl.nexon.com/s2/game/fc/online/obt/externalAssets/new/season/24ucl.png" alt="" className="absolute left-[-3px] bottom-[-3px] w-[20px]" />
            <span className="absolute bottom-[-20px] text-[8px] tablet:text-[9px] pc:text-[10px] tablet:bottom-[-25px] left-[50%] translate-x-[-50%] font-bold text-nowrap px-[5px] py-[1px] rounded-[10px] border-white/20 border">RW 노이어</span>
            <span className="absolute bg-[#33C771] font-bold text-[8px] tablet:text-[9px] pc:text-[10px] top-[-5px] right-[-10px] px-[4px] py-[1px] tablet:px-[5px] tablet:py-[2px] rounded-[5px]">7.0</span>
            <span className="absolute bottom-[-5px] right-[-10px] w-[15px] tablet:w-[20px] pc:w-[20px] text-[9px] tablet:text-[11px] pc:text-[13px] rounded-[5px] text-center text-[#c5c8c9] font-bold border-[#393a3c] border bg-gradient-to-r from-[#51545a] to-[#42464d]">1</span>
          </div>
        </div>
        <div className="absolute z-10 top-[46%] left-[50%] translate-x-[-50%] translate-y-[-46%] tablet:left-[46%] tablet:top-[50%] tablet:translate-x-[-46%] tablet:translate-y-[-50%]"> {/* 홈팀 ST */}
          <div className="relative">
            <img src="https://fco.dn.nexoncdn.co.kr/live/externalAssets/common/playersAction/p834167495.png" alt="" className="w-[30px] tablet:w-[30px] pc:w-[45px] border-white/30 border-[2px] rounded-full bg-white/20" />
            <img src="https://ssl.nexon.com/s2/game/fc/online/obt/externalAssets/new/season/24ucl.png" alt="" className="absolute left-[-3px] bottom-[-3px] w-[20px]" />
            <span className="absolute bottom-[-20px] text-[8px] tablet:text-[9px] pc:text-[10px] tablet:bottom-[-25px] left-[50%] translate-x-[-50%] font-bold text-nowrap px-[5px] py-[1px] rounded-[10px] border-white/20 border">ST 노이어</span>
            <span className="absolute bg-[#33C771] font-bold text-[8px] tablet:text-[9px] pc:text-[10px] top-[-5px] right-[-10px] px-[4px] py-[1px] tablet:px-[5px] tablet:py-[2px] rounded-[5px]">7.0</span>
            <span className="absolute bottom-[-5px] right-[-10px] w-[15px] tablet:w-[20px] pc:w-[20px] text-[9px] tablet:text-[11px] pc:text-[13px] rounded-[5px] text-center text-[#c5c8c9] font-bold border-[#393a3c] border bg-gradient-to-r from-[#51545a] to-[#42464d]">1</span>
          </div>
        </div>

        <div className="absolute z-10 top-[96%] left-[50%] translate-x-[-50%] translate-y-[-96%] tablet:left-[97%] tablet:top-[50%] tablet:translate-x-[-97%] tablet:translate-y-[-50%]"> {/* 어웨이팀 GK */}
          <div className="relative">
            <img src="https://fco.dn.nexoncdn.co.kr/live/externalAssets/common/playersAction/p834167495.png" alt="" className="w-[30px] tablet:w-[30px] pc:w-[45px] border-white/30 border-[2px] rounded-full bg-white/20" />
            <img src="https://ssl.nexon.com/s2/game/fc/online/obt/externalAssets/new/season/24ucl.png" alt="" className="absolute left-[-3px] bottom-[-3px] w-[20px]" />
            <span className="absolute bottom-[-20px] text-[8px] tablet:text-[9px] pc:text-[10px] tablet:bottom-[-25px] left-[50%] translate-x-[-50%] font-bold text-nowrap px-[5px] py-[1px] rounded-[10px] border-white/20 border">GK 노이어</span>
            <span className="absolute bg-[#33C771] font-bold text-[8px] tablet:text-[9px] pc:text-[10px] top-[-5px] right-[-10px] px-[4px] py-[1px] tablet:px-[5px] tablet:py-[2px] rounded-[5px]">7.0</span>
            <span className="absolute bottom-[-5px] right-[-10px] w-[15px] tablet:w-[20px] pc:w-[20px] text-[9px] tablet:text-[11px] pc:text-[13px] rounded-[5px] text-center text-[#695100] font-bold border-[#cda000] border bg-gradient-to-r from-[#f9dd62] to-[#dca908]">8</span>
          </div>
        </div>
        <div className="absolute z-10 top-[90%] left-[30%] translate-x-[-30%] translate-y-[-90%] tablet:left-[88%] tablet:top-[30%] tablet:translate-x-[-88%] tablet:translate-y-[-30%]"> {/* 어웨이팀 LCB */}
          <div className="relative">
            <img src="https://fco.dn.nexoncdn.co.kr/live/externalAssets/common/playersAction/p834167495.png" alt="" className="w-[30px] tablet:w-[30px] pc:w-[45px] border-white/30 border-[2px] rounded-full bg-white/20" />
            <img src="https://ssl.nexon.com/s2/game/fc/online/obt/externalAssets/new/season/24ucl.png" alt="" className="absolute left-[-3px] bottom-[-3px] w-[20px]" />
            <span className="absolute bottom-[-20px] text-[8px] tablet:text-[9px] pc:text-[10px] tablet:bottom-[-25px] left-[50%] translate-x-[-50%] font-bold text-nowrap px-[5px] py-[1px] rounded-[10px] border-white/20 border">LCB 노이어</span>
            <span className="absolute bg-[#33C771] font-bold text-[8px] tablet:text-[9px] pc:text-[10px] top-[-5px] right-[-10px] px-[4px] py-[1px] tablet:px-[5px] tablet:py-[2px] rounded-[5px]">7.0</span>
            <span className="absolute bottom-[-5px] right-[-10px] w-[15px] tablet:w-[20px] pc:w-[20px] text-[9px] tablet:text-[11px] pc:text-[13px] rounded-[5px] text-center text-[#4e545e] font-bold border-[#a5a8ae] border bg-gradient-to-r from-[#d8d9dc] to-[#b8bdca]">5</span>
          </div>
        </div>
        <div className="absolute z-10 top-[90%] left-[70%] translate-x-[-70%] translate-y-[-90%] tablet:left-[88%] tablet:top-[70%] tablet:translate-x-[-88%] tablet:translate-y-[-70%]"> {/* 어웨이팀 RCB */}
          <div className="relative">
            <img src="https://fco.dn.nexoncdn.co.kr/live/externalAssets/common/playersAction/p834167495.png" alt="" className="w-[30px] tablet:w-[30px] pc:w-[45px] border-white/30 border-[2px] rounded-full bg-white/20" />
            <img src="https://ssl.nexon.com/s2/game/fc/online/obt/externalAssets/new/season/24ucl.png" alt="" className="absolute left-[-3px] bottom-[-3px] w-[20px]" />
            <span className="absolute bottom-[-20px] text-[8px] tablet:text-[9px] pc:text-[10px] tablet:bottom-[-25px] left-[50%] translate-x-[-50%] font-bold text-nowrap px-[5px] py-[1px] rounded-[10px] border-white/20 border">RCB 노이어</span>
            <span className="absolute bg-[#33C771] font-bold text-[8px] tablet:text-[9px] pc:text-[10px] top-[-5px] right-[-10px] px-[4px] py-[1px] tablet:px-[5px] tablet:py-[2px] rounded-[5px]">7.0</span>
            <span className="absolute bottom-[-5px] right-[-10px] w-[15px] tablet:w-[20px] pc:w-[20px] text-[9px] tablet:text-[11px] pc:text-[13px] rounded-[5px] text-center text-[#7e3f27] font-bold border-[#864229] border bg-gradient-to-r from-[#de946b] to-[#ad5f42]">4</span>
          </div>
        </div>
        <div className="absolute z-10 top-[90%] left-[10%] translate-x-[-10%] translate-y-[-90%] tablet:left-[88%] tablet:top-[10%] tablet:translate-x-[-88%] tablet:translate-y-[-10%]"> {/* 어웨이팀 LB */}
          <div className="relative">
            <img src="https://fco.dn.nexoncdn.co.kr/live/externalAssets/common/playersAction/p834167495.png" alt="" className="w-[30px] tablet:w-[30px] pc:w-[45px] border-white/30 border-[2px] rounded-full bg-white/20" />
            <img src="https://ssl.nexon.com/s2/game/fc/online/obt/externalAssets/new/season/24ucl.png" alt="" className="absolute left-[-3px] bottom-[-3px] w-[20px]" />
            <span className="absolute bottom-[-20px] text-[8px] tablet:text-[9px] pc:text-[10px] tablet:bottom-[-25px] left-[50%] translate-x-[-50%] font-bold text-nowrap px-[5px] py-[1px] rounded-[10px] border-white/20 border">LB 노이어</span>
            <span className="absolute bg-[#33C771] font-bold text-[8px] tablet:text-[9px] pc:text-[10px] top-[-5px] right-[-10px] px-[4px] py-[1px] tablet:px-[5px] tablet:py-[2px] rounded-[5px]">7.0</span>
            <span className="moreten absolute bottom-[-5px] right-[-10px] w-[15px] tablet:w-[20px] pc:w-[20px] text-[9px] tablet:text-[11px] pc:text-[13px] rounded-[5px] text-center text-[#2d2b43] font-bold border-[#5274c0] border">11</span>
          </div>
        </div>
        <div className="absolute z-10 top-[90%] left-[90%] translate-x-[-90%] translate-y-[-90%] tablet:left-[88%] tablet:top-[90%] tablet:translate-x-[-88%] tablet:translate-y-[-90%]"> {/* 어웨이팀 RB */}
          <div className="relative">
            <img src="https://fco.dn.nexoncdn.co.kr/live/externalAssets/common/playersAction/p834167495.png" alt="" className="w-[30px] tablet:w-[30px] pc:w-[45px] border-white/30 border-[2px] rounded-full bg-white/20" />
            <img src="https://ssl.nexon.com/s2/game/fc/online/obt/externalAssets/new/season/24ucl.png" alt="" className="absolute left-[-3px] bottom-[-3px] w-[20px]" />
            <span className="absolute bottom-[-20px] text-[8px] tablet:text-[9px] pc:text-[10px] tablet:bottom-[-25px] left-[50%] translate-x-[-50%] font-bold text-nowrap px-[5px] py-[1px] rounded-[10px] border-white/20 border">RB 노이어</span>
            <span className="absolute bg-[#33C771] font-bold text-[8px] tablet:text-[9px] pc:text-[10px] top-[-5px] right-[-10px] px-[4px] py-[1px] tablet:px-[5px] tablet:py-[2px] rounded-[5px]">7.0</span>
            <span className="absolute bottom-[-5px] right-[-10px] w-[15px] tablet:w-[20px] pc:w-[20px] text-[9px] tablet:text-[11px] pc:text-[13px] rounded-[5px] text-center text-[#c5c8c9] font-bold border-[#393a3c] border bg-gradient-to-r from-[#51545a] to-[#42464d]">1</span>
          </div>
        </div>
        <div className="absolute z-10 top-[90%] left-[50%] translate-x-[-50%] translate-y-[-90%] tablet:left-[92%] tablet:top-[50%] tablet:translate-x-[-92%] tablet:translate-y-[-50%]"> {/* 어웨이팀 CB */}
          <div className="relative">
            <img src="https://fco.dn.nexoncdn.co.kr/live/externalAssets/common/playersAction/p834167495.png" alt="" className="w-[30px] tablet:w-[30px] pc:w-[45px] border-white/30 border-[2px] rounded-full bg-white/20" />
            <img src="https://ssl.nexon.com/s2/game/fc/online/obt/externalAssets/new/season/24ucl.png" alt="" className="absolute left-[-3px] bottom-[-3px] w-[20px]" />
            <span className="absolute bottom-[-20px] text-[8px] tablet:text-[9px] pc:text-[10px] tablet:bottom-[-25px] left-[50%] translate-x-[-50%] font-bold text-nowrap px-[5px] py-[1px] rounded-[10px] border-white/20 border">CB 노이어</span>
            <span className="absolute bg-[#33C771] font-bold text-[8px] tablet:text-[9px] pc:text-[10px] top-[-5px] right-[-10px] px-[4px] py-[1px] tablet:px-[5px] tablet:py-[2px] rounded-[5px]">7.0</span>
            <span className="absolute bottom-[-5px] right-[-10px] w-[15px] tablet:w-[20px] pc:w-[20px] text-[9px] tablet:text-[11px] pc:text-[13px] rounded-[5px] text-center text-[#c5c8c9] font-bold border-[#393a3c] border bg-gradient-to-r from-[#51545a] to-[#42464d]">1</span>
          </div>
        </div>
        <div className="absolute z-10 top-[87%] left-[50%] translate-x-[-50%] translate-y-[-87%] tablet:left-[88%] tablet:top-[50%] tablet:translate-x-[-88%] tablet:translate-y-[-50%]"> {/* 어웨이팀 SW */}
          <div className="relative">
            <img src="https://fco.dn.nexoncdn.co.kr/live/externalAssets/common/playersAction/p834167495.png" alt="" className="w-[30px] tablet:w-[30px] pc:w-[45px] border-white/30 border-[2px] rounded-full bg-white/20" />
            <img src="https://ssl.nexon.com/s2/game/fc/online/obt/externalAssets/new/season/24ucl.png" alt="" className="absolute left-[-3px] bottom-[-3px] w-[20px]" />
            <span className="absolute bottom-[-20px] text-[8px] tablet:text-[9px] pc:text-[10px] tablet:bottom-[-25px] left-[50%] translate-x-[-50%] font-bold text-nowrap px-[5px] py-[1px] rounded-[10px] border-white/20 border">SW 노이어</span>
            <span className="absolute bg-[#33C771] font-bold text-[8px] tablet:text-[9px] pc:text-[10px] top-[-5px] right-[-10px] px-[4px] py-[1px] tablet:px-[5px] tablet:py-[2px] rounded-[5px]">7.0</span>
            <span className="absolute bottom-[-5px] right-[-10px] w-[15px] tablet:w-[20px] pc:w-[20px] text-[9px] tablet:text-[11px] pc:text-[13px] rounded-[5px] text-center text-[#c5c8c9] font-bold border-[#393a3c] border bg-gradient-to-r from-[#51545a] to-[#42464d]">1</span>
          </div>
        </div>
        <div className="absolute z-10 top-[83%] left-[30%] translate-x-[-30%] translate-y-[-83%] tablet:left-[80%] tablet:top-[30%] tablet:translate-x-[-80%] tablet:translate-y-[-30%]"> {/* 어웨이팀 LDM */}
          <div className="relative">
            <img src="https://fco.dn.nexoncdn.co.kr/live/externalAssets/common/playersAction/p834167495.png" alt="" className="w-[30px] tablet:w-[30px] pc:w-[45px] border-white/30 border-[2px] rounded-full bg-white/20" />
            <img src="https://ssl.nexon.com/s2/game/fc/online/obt/externalAssets/new/season/24ucl.png" alt="" className="absolute left-[-3px] bottom-[-3px] w-[20px]" />
            <span className="absolute bottom-[-20px] text-[8px] tablet:text-[9px] pc:text-[10px] tablet:bottom-[-25px] left-[50%] translate-x-[-50%] font-bold text-nowrap px-[5px] py-[1px] rounded-[10px] border-white/20 border">LDM 노이어</span>
            <span className="absolute bg-[#33C771] font-bold text-[8px] tablet:text-[9px] pc:text-[10px] top-[-5px] right-[-10px] px-[4px] py-[1px] tablet:px-[5px] tablet:py-[2px] rounded-[5px]">7.0</span>
            <span className="absolute bottom-[-5px] right-[-10px] w-[15px] tablet:w-[20px] pc:w-[20px] text-[9px] tablet:text-[11px] pc:text-[13px] rounded-[5px] text-center text-[#c5c8c9] font-bold border-[#393a3c] border bg-gradient-to-r from-[#51545a] to-[#42464d]">1</span>
          </div>
        </div>
        <div className="absolute z-10 top-[83%] left-[70%] translate-x-[-70%] translate-y-[-83%] tablet:left-[80%] tablet:top-[70%] tablet:translate-x-[-80%] tablet:translate-y-[-70%]"> {/* 어웨이팀 RDM */}
          <div className="relative">
            <img src="https://fco.dn.nexoncdn.co.kr/live/externalAssets/common/playersAction/p834167495.png" alt="" className="w-[30px] tablet:w-[30px] pc:w-[45px] border-white/30 border-[2px] rounded-full bg-white/20" />
            <img src="https://ssl.nexon.com/s2/game/fc/online/obt/externalAssets/new/season/24ucl.png" alt="" className="absolute left-[-3px] bottom-[-3px] w-[20px]" />
            <span className="absolute bottom-[-20px] text-[8px] tablet:text-[9px] pc:text-[10px] tablet:bottom-[-25px] left-[50%] translate-x-[-50%] font-bold text-nowrap px-[5px] py-[1px] rounded-[10px] border-white/20 border">RDM 노이어</span>
            <span className="absolute bg-[#33C771] font-bold text-[8px] tablet:text-[9px] pc:text-[10px] top-[-5px] right-[-10px] px-[4px] py-[1px] tablet:px-[5px] tablet:py-[2px] rounded-[5px]">7.0</span>
            <span className="absolute bottom-[-5px] right-[-10px] w-[15px] tablet:w-[20px] pc:w-[20px] text-[9px] tablet:text-[11px] pc:text-[13px] rounded-[5px] text-center text-[#c5c8c9] font-bold border-[#393a3c] border bg-gradient-to-r from-[#51545a] to-[#42464d]">1</span>
          </div>
        </div>
        <div className="absolute z-10 top-[83%] left-[50%] translate-x-[-50%] translate-y-[-83%] tablet:left-[80%] tablet:top-[50%] tablet:translate-x-[-80%] tablet:translate-y-[-50%]"> {/* 어웨이팀 CDM */}
          <div className="relative">
            <img src="https://fco.dn.nexoncdn.co.kr/live/externalAssets/common/playersAction/p834167495.png" alt="" className="w-[30px] tablet:w-[30px] pc:w-[45px] border-white/30 border-[2px] rounded-full bg-white/20" />
            <img src="https://ssl.nexon.com/s2/game/fc/online/obt/externalAssets/new/season/24ucl.png" alt="" className="absolute left-[-3px] bottom-[-3px] w-[20px]" />
            <span className="absolute bottom-[-20px] text-[8px] tablet:text-[9px] pc:text-[10px] tablet:bottom-[-25px] left-[50%] translate-x-[-50%] font-bold text-nowrap px-[5px] py-[1px] rounded-[10px] border-white/20 border">CDM 노이어</span>
            <span className="absolute bg-[#33C771] font-bold text-[8px] tablet:text-[9px] pc:text-[10px] top-[-5px] right-[-10px] px-[4px] py-[1px] tablet:px-[5px] tablet:py-[2px] rounded-[5px]">7.0</span>
            <span className="absolute bottom-[-5px] right-[-10px] w-[15px] tablet:w-[20px] pc:w-[20px] text-[9px] tablet:text-[11px] pc:text-[13px] rounded-[5px] text-center text-[#c5c8c9] font-bold border-[#393a3c] border bg-gradient-to-r from-[#51545a] to-[#42464d]">1</span>
          </div>
        </div>
        <div className="absolute z-10 top-[84%] left-[10%] translate-x-[-10%] translate-y-[-84%] tablet:left-[82%] tablet:top-[10%] tablet:translate-x-[-82%] tablet:translate-y-[-10%]"> {/* 어웨이팀 LWB */}
          <div className="relative">
            <img src="https://fco.dn.nexoncdn.co.kr/live/externalAssets/common/playersAction/p834167495.png" alt="" className="w-[30px] tablet:w-[30px] pc:w-[45px] border-white/30 border-[2px] rounded-full bg-white/20" />
            <img src="https://ssl.nexon.com/s2/game/fc/online/obt/externalAssets/new/season/24ucl.png" alt="" className="absolute left-[-3px] bottom-[-3px] w-[20px]" />
            <span className="absolute bottom-[-20px] text-[8px] tablet:text-[9px] pc:text-[10px] tablet:bottom-[-25px] left-[50%] translate-x-[-50%] font-bold text-nowrap px-[5px] py-[1px] rounded-[10px] border-white/20 border">LWB 노이어</span>
            <span className="absolute bg-[#33C771] font-bold text-[8px] tablet:text-[9px] pc:text-[10px] top-[-5px] right-[-10px] px-[4px] py-[1px] tablet:px-[5px] tablet:py-[2px] rounded-[5px]">7.0</span>
            <span className="absolute bottom-[-5px] right-[-10px] w-[15px] tablet:w-[20px] pc:w-[20px] text-[9px] tablet:text-[11px] pc:text-[13px] rounded-[5px] text-center text-[#c5c8c9] font-bold border-[#393a3c] border bg-gradient-to-r from-[#51545a] to-[#42464d]">1</span>
          </div>
        </div>
        <div className="absolute z-10 top-[84%] left-[90%] translate-x-[-90%] translate-y-[-84%] tablet:left-[82%] tablet:top-[90%] tablet:translate-x-[-82%] tablet:translate-y-[-90%]"> {/* 어웨이팀 RWB */}
          <div className="relative">
            <img src="https://fco.dn.nexoncdn.co.kr/live/externalAssets/common/playersAction/p834167495.png" alt="" className="w-[30px] tablet:w-[30px] pc:w-[45px] border-white/30 border-[2px] rounded-full bg-white/20" />
            <img src="https://ssl.nexon.com/s2/game/fc/online/obt/externalAssets/new/season/24ucl.png" alt="" className="absolute left-[-3px] bottom-[-3px] w-[20px]" />
            <span className="absolute bottom-[-20px] text-[8px] tablet:text-[9px] pc:text-[10px] tablet:bottom-[-25px] left-[50%] translate-x-[-50%] font-bold text-nowrap px-[5px] py-[1px] rounded-[10px] border-white/20 border">RWB 노이어</span>
            <span className="absolute bg-[#33C771] font-bold text-[8px] tablet:text-[9px] pc:text-[10px] top-[-5px] right-[-10px] px-[4px] py-[1px] tablet:px-[5px] tablet:py-[2px] rounded-[5px]">7.0</span>
            <span className="absolute bottom-[-5px] right-[-10px] w-[15px] tablet:w-[20px] pc:w-[20px] text-[9px] tablet:text-[11px] pc:text-[13px] rounded-[5px] text-center text-[#c5c8c9] font-bold border-[#393a3c] border bg-gradient-to-r from-[#51545a] to-[#42464d]">1</span>
          </div>
        </div>
        <div className="absolute z-10 top-[76%] left-[50%] translate-x-[-50%] translate-y-[-76%] tablet:left-[72%] tablet:top-[50%] tablet:translate-x-[-72%] tablet:translate-y-[-50%]"> {/* 어웨이팀 CM */}
          <div className="relative">
            <img src="https://fco.dn.nexoncdn.co.kr/live/externalAssets/common/playersAction/p834167495.png" alt="" className="w-[30px] tablet:w-[30px] pc:w-[45px] border-white/30 border-[2px] rounded-full bg-white/20" />
            <img src="https://ssl.nexon.com/s2/game/fc/online/obt/externalAssets/new/season/24ucl.png" alt="" className="absolute left-[-3px] bottom-[-3px] w-[20px]" />
            <span className="absolute bottom-[-20px] text-[8px] tablet:text-[9px] pc:text-[10px] tablet:bottom-[-25px] left-[50%] translate-x-[-50%] font-bold text-nowrap px-[5px] py-[1px] rounded-[10px] border-white/20 border">CM 노이어</span>
            <span className="absolute bg-[#33C771] font-bold text-[8px] tablet:text-[9px] pc:text-[10px] top-[-5px] right-[-10px] px-[4px] py-[1px] tablet:px-[5px] tablet:py-[2px] rounded-[5px]">7.0</span>
            <span className="absolute bottom-[-5px] right-[-10px] w-[15px] tablet:w-[20px] pc:w-[20px] text-[9px] tablet:text-[11px] pc:text-[13px] rounded-[5px] text-center text-[#c5c8c9] font-bold border-[#393a3c] border bg-gradient-to-r from-[#51545a] to-[#42464d]">1</span>
          </div>
        </div>
        <div className="absolute z-10 top-[76%] left-[30%] translate-x-[-30%] translate-y-[-76%] tablet:left-[72%] tablet:top-[30%] tablet:translate-x-[-72%] tablet:translate-y-[-30%]"> {/* 어웨이팀 LCM */}
          <div className="relative">
            <img src="https://fco.dn.nexoncdn.co.kr/live/externalAssets/common/playersAction/p834167495.png" alt="" className="w-[30px] tablet:w-[30px] pc:w-[45px] border-white/30 border-[2px] rounded-full bg-white/20" />
            <img src="https://ssl.nexon.com/s2/game/fc/online/obt/externalAssets/new/season/24ucl.png" alt="" className="absolute left-[-3px] bottom-[-3px] w-[20px]" />
            <span className="absolute bottom-[-20px] text-[8px] tablet:text-[9px] pc:text-[10px] tablet:bottom-[-25px] left-[50%] translate-x-[-50%] font-bold text-nowrap px-[5px] py-[1px] rounded-[10px] border-white/20 border">LCM 노이어</span>
            <span className="absolute bg-[#33C771] font-bold text-[8px] tablet:text-[9px] pc:text-[10px] top-[-5px] right-[-10px] px-[4px] py-[1px] tablet:px-[5px] tablet:py-[2px] rounded-[5px]">7.0</span>
            <span className="absolute bottom-[-5px] right-[-10px] w-[15px] tablet:w-[20px] pc:w-[20px] text-[9px] tablet:text-[11px] pc:text-[13px] rounded-[5px] text-center text-[#c5c8c9] font-bold border-[#393a3c] border bg-gradient-to-r from-[#51545a] to-[#42464d]">1</span>
          </div>
        </div>
        <div className="absolute z-10 top-[76%] left-[70%] translate-x-[-70%] translate-y-[-76%] tablet:left-[72%] tablet:top-[70%] tablet:translate-x-[-72%] tablet:translate-y-[-70%]"> {/* 어웨이팀 RCM */}
          <div className="relative">
            <img src="https://fco.dn.nexoncdn.co.kr/live/externalAssets/common/playersAction/p834167495.png" alt="" className="w-[30px] tablet:w-[30px] pc:w-[45px] border-white/30 border-[2px] rounded-full bg-white/20" />
            <img src="https://ssl.nexon.com/s2/game/fc/online/obt/externalAssets/new/season/24ucl.png" alt="" className="absolute left-[-3px] bottom-[-3px] w-[20px]" />
            <span className="absolute bottom-[-20px] text-[8px] tablet:text-[9px] pc:text-[10px] tablet:bottom-[-25px] left-[50%] translate-x-[-50%] font-bold text-nowrap px-[5px] py-[1px] rounded-[10px] border-white/20 border">RCM 노이어</span>
            <span className="absolute bg-[#33C771] font-bold text-[8px] tablet:text-[9px] pc:text-[10px] top-[-5px] right-[-10px] px-[4px] py-[1px] tablet:px-[5px] tablet:py-[2px] rounded-[5px]">7.0</span>
            <span className="absolute bottom-[-5px] right-[-10px] w-[15px] tablet:w-[20px] pc:w-[20px] text-[9px] tablet:text-[11px] pc:text-[13px] rounded-[5px] text-center text-[#c5c8c9] font-bold border-[#393a3c] border bg-gradient-to-r from-[#51545a] to-[#42464d]">1</span>
          </div>
        </div>
        <div className="absolute z-10 top-[76%] left-[10%] translate-x-[-10%] translate-y-[-76%] tablet:left-[72%] tablet:top-[10%] tablet:translate-x-[-72%] tablet:translate-y-[-10%]"> {/* 어웨이팀 LM */}
          <div className="relative">
            <img src="https://fco.dn.nexoncdn.co.kr/live/externalAssets/common/playersAction/p834167495.png" alt="" className="w-[30px] tablet:w-[30px] pc:w-[45px] border-white/30 border-[2px] rounded-full bg-white/20" />
            <img src="https://ssl.nexon.com/s2/game/fc/online/obt/externalAssets/new/season/24ucl.png" alt="" className="absolute left-[-3px] bottom-[-3px] w-[20px]" />
            <span className="absolute bottom-[-20px] text-[8px] tablet:text-[9px] pc:text-[10px] tablet:bottom-[-25px] left-[50%] translate-x-[-50%] font-bold text-nowrap px-[5px] py-[1px] rounded-[10px] border-white/20 border">LM 노이어</span>
            <span className="absolute bg-[#33C771] font-bold text-[8px] tablet:text-[9px] pc:text-[10px] top-[-5px] right-[-10px] px-[4px] py-[1px] tablet:px-[5px] tablet:py-[2px] rounded-[5px]">7.0</span>
            <span className="absolute bottom-[-5px] right-[-10px] w-[15px] tablet:w-[20px] pc:w-[20px] text-[9px] tablet:text-[11px] pc:text-[13px] rounded-[5px] text-center text-[#c5c8c9] font-bold border-[#393a3c] border bg-gradient-to-r from-[#51545a] to-[#42464d]">1</span>
          </div>
        </div>
        <div className="absolute z-10 top-[76%] left-[90%] translate-x-[-90%] translate-y-[-76%] tablet:left-[72%] tablet:top-[90%] tablet:translate-x-[-72%] tablet:translate-y-[-90%]"> {/* 어웨이팀 RM */}
          <div className="relative">
            <img src="https://fco.dn.nexoncdn.co.kr/live/externalAssets/common/playersAction/p834167495.png" alt="" className="w-[30px] tablet:w-[30px] pc:w-[45px] border-white/30 border-[2px] rounded-full bg-white/20" />
            <img src="https://ssl.nexon.com/s2/game/fc/online/obt/externalAssets/new/season/24ucl.png" alt="" className="absolute left-[-3px] bottom-[-3px] w-[20px]" />
            <span className="absolute bottom-[-20px] text-[8px] tablet:text-[9px] pc:text-[10px] tablet:bottom-[-25px] left-[50%] translate-x-[-50%] font-bold text-nowrap px-[5px] py-[1px] rounded-[10px] border-white/20 border">RM 노이어</span>
            <span className="absolute bg-[#33C771] font-bold text-[8px] tablet:text-[9px] pc:text-[10px] top-[-5px] right-[-10px] px-[4px] py-[1px] tablet:px-[5px] tablet:py-[2px] rounded-[5px]">7.0</span>
            <span className="absolute bottom-[-5px] right-[-10px] w-[15px] tablet:w-[20px] pc:w-[20px] text-[9px] tablet:text-[11px] pc:text-[13px] rounded-[5px] text-center text-[#c5c8c9] font-bold border-[#393a3c] border bg-gradient-to-r from-[#51545a] to-[#42464d]">1</span>
          </div>
        </div>
        <div className="absolute z-10 top-[69%] left-[50%] translate-x-[-50%] translate-y-[-69%] tablet:left-[66%] tablet:top-[50%] tablet:translate-x-[-66%] tablet:translate-y-[-50%]"> {/* 어웨이팀 CAM */}
          <div className="relative">
            <img src="https://fco.dn.nexoncdn.co.kr/live/externalAssets/common/playersAction/p834167495.png" alt="" className="w-[30px] tablet:w-[30px] pc:w-[45px] border-white/30 border-[2px] rounded-full bg-white/20" />
            <img src="https://ssl.nexon.com/s2/game/fc/online/obt/externalAssets/new/season/24ucl.png" alt="" className="absolute left-[-3px] bottom-[-3px] w-[20px]" />
            <span className="absolute bottom-[-20px] text-[8px] tablet:text-[9px] pc:text-[10px] tablet:bottom-[-25px] left-[50%] translate-x-[-50%] font-bold text-nowrap px-[5px] py-[1px] rounded-[10px] border-white/20 border">CAM 노이어</span>
            <span className="absolute bg-[#33C771] font-bold text-[8px] tablet:text-[9px] pc:text-[10px] top-[-5px] right-[-10px] px-[4px] py-[1px] tablet:px-[5px] tablet:py-[2px] rounded-[5px]">7.0</span>
            <span className="absolute bottom-[-5px] right-[-10px] w-[15px] tablet:w-[20px] pc:w-[20px] text-[9px] tablet:text-[11px] pc:text-[13px] rounded-[5px] text-center text-[#c5c8c9] font-bold border-[#393a3c] border bg-gradient-to-r from-[#51545a] to-[#42464d]">1</span>
          </div>
        </div>
        <div className="absolute z-10 top-[69%] left-[30%] translate-x-[-30%] translate-y-[-69%] tablet:left-[66%] tablet:top-[30%] tablet:translate-x-[-66%] tablet:translate-y-[-30%]"> {/* 어웨이팀 LAM */}
          <div className="relative">
            <img src="https://fco.dn.nexoncdn.co.kr/live/externalAssets/common/playersAction/p834167495.png" alt="" className="w-[30px] tablet:w-[30px] pc:w-[45px] border-white/30 border-[2px] rounded-full bg-white/20" />
            <img src="https://ssl.nexon.com/s2/game/fc/online/obt/externalAssets/new/season/24ucl.png" alt="" className="absolute left-[-3px] bottom-[-3px] w-[20px]" />
            <span className="absolute bottom-[-20px] text-[8px] tablet:text-[9px] pc:text-[10px] tablet:bottom-[-25px] left-[50%] translate-x-[-50%] font-bold text-nowrap px-[5px] py-[1px] rounded-[10px] border-white/20 border">LAM 노이어</span>
            <span className="absolute bg-[#33C771] font-bold text-[8px] tablet:text-[9px] pc:text-[10px] top-[-5px] right-[-10px] px-[4px] py-[1px] tablet:px-[5px] tablet:py-[2px] rounded-[5px]">7.0</span>
            <span className="absolute bottom-[-5px] right-[-10px] w-[15px] tablet:w-[20px] pc:w-[20px] text-[9px] tablet:text-[11px] pc:text-[13px] rounded-[5px] text-center text-[#c5c8c9] font-bold border-[#393a3c] border bg-gradient-to-r from-[#51545a] to-[#42464d]">1</span>
          </div>
        </div>
        <div className="absolute z-10 top-[69%] left-[70%] translate-x-[-70%] translate-y-[-69%] tablet:left-[66%] tablet:top-[70%] tablet:translate-x-[-66%] tablet:translate-y-[-70%]"> {/* 어웨이팀 RAM */}
          <div className="relative">
            <img src="https://fco.dn.nexoncdn.co.kr/live/externalAssets/common/playersAction/p834167495.png" alt="" className="w-[30px] tablet:w-[30px] pc:w-[45px] border-white/30 border-[2px] rounded-full bg-white/20" />
            <img src="https://ssl.nexon.com/s2/game/fc/online/obt/externalAssets/new/season/24ucl.png" alt="" className="absolute left-[-3px] bottom-[-3px] w-[20px]" />
            <span className="absolute bottom-[-20px] text-[8px] tablet:text-[9px] pc:text-[10px] tablet:bottom-[-25px] left-[50%] translate-x-[-50%] font-bold text-nowrap px-[5px] py-[1px] rounded-[10px] border-white/20 border">RAM 노이어</span>
            <span className="absolute bg-[#33C771] font-bold text-[8px] tablet:text-[9px] pc:text-[10px] top-[-5px] right-[-10px] px-[4px] py-[1px] tablet:px-[5px] tablet:py-[2px] rounded-[5px]">7.0</span>
            <span className="absolute bottom-[-5px] right-[-10px] w-[15px] tablet:w-[20px] pc:w-[20px] text-[9px] tablet:text-[11px] pc:text-[13px] rounded-[5px] text-center text-[#c5c8c9] font-bold border-[#393a3c] border bg-gradient-to-r from-[#51545a] to-[#42464d]">1</span>
          </div>
        </div>
        <div className="absolute z-10 top-[62%] left-[50%] translate-x-[-50%] translate-y-[-62%] tablet:left-[60%] tablet:top-[50%] tablet:translate-x-[-60%] tablet:translate-y-[-50%]"> {/* 어웨이팀 CF */}
          <div className="relative">
            <img src="https://fco.dn.nexoncdn.co.kr/live/externalAssets/common/playersAction/p834167495.png" alt="" className="w-[30px] tablet:w-[30px] pc:w-[45px] border-white/30 border-[2px] rounded-full bg-white/20" />
            <img src="https://ssl.nexon.com/s2/game/fc/online/obt/externalAssets/new/season/24ucl.png" alt="" className="absolute left-[-3px] bottom-[-3px] w-[20px]" />
            <span className="absolute bottom-[-20px] text-[8px] tablet:text-[9px] pc:text-[10px] tablet:bottom-[-25px] left-[50%] translate-x-[-50%] font-bold text-nowrap px-[5px] py-[1px] rounded-[10px] border-white/20 border">CF 노이어</span>
            <span className="absolute bg-[#33C771] font-bold text-[8px] tablet:text-[9px] pc:text-[10px] top-[-5px] right-[-10px] px-[4px] py-[1px] tablet:px-[5px] tablet:py-[2px] rounded-[5px]">7.0</span>
            <span className="absolute bottom-[-5px] right-[-10px] w-[15px] tablet:w-[20px] pc:w-[20px] text-[9px] tablet:text-[11px] pc:text-[13px] rounded-[5px] text-center text-[#c5c8c9] font-bold border-[#393a3c] border bg-gradient-to-r from-[#51545a] to-[#42464d]">1</span>
          </div>
        </div>
        <div className="absolute z-10 top-[62%] left-[10%] translate-x-[-10%] translate-y-[-62%] tablet:left-[60%] tablet:top-[10%] tablet:translate-x-[-60%] tablet:translate-y-[-10%]"> {/* 어웨이팀 LW */}
          <div className="relative">
            <img src="https://fco.dn.nexoncdn.co.kr/live/externalAssets/common/playersAction/p834167495.png" alt="" className="w-[30px] tablet:w-[30px] pc:w-[45px] border-white/30 border-[2px] rounded-full bg-white/20" />
            <img src="https://ssl.nexon.com/s2/game/fc/online/obt/externalAssets/new/season/24ucl.png" alt="" className="absolute left-[-3px] bottom-[-3px] w-[20px]" />
            <span className="absolute bottom-[-20px] text-[8px] tablet:text-[9px] pc:text-[10px] tablet:bottom-[-25px] left-[50%] translate-x-[-50%] font-bold text-nowrap px-[5px] py-[1px] rounded-[10px] border-white/20 border">LW 노이어</span>
            <span className="absolute bg-[#33C771] font-bold text-[8px] tablet:text-[9px] pc:text-[10px] top-[-5px] right-[-10px] px-[4px] py-[1px] tablet:px-[5px] tablet:py-[2px] rounded-[5px]">7.0</span>
            <span className="absolute bottom-[-5px] right-[-10px] w-[15px] tablet:w-[20px] pc:w-[20px] text-[9px] tablet:text-[11px] pc:text-[13px] rounded-[5px] text-center text-[#c5c8c9] font-bold border-[#393a3c] border bg-gradient-to-r from-[#51545a] to-[#42464d]">1</span>
          </div>
        </div>
        <div className="absolute z-10 top-[62%] left-[90%] translate-x-[-90%] translate-y-[-62%] tablet:left-[60%] tablet:top-[90%] tablet:translate-x-[-60%] tablet:translate-y-[-90%]"> {/* 어웨이팀 RW */}
          <div className="relative">
            <img src="https://fco.dn.nexoncdn.co.kr/live/externalAssets/common/playersAction/p834167495.png" alt="" className="w-[30px] tablet:w-[30px] pc:w-[45px] border-white/30 border-[2px] rounded-full bg-white/20" />
            <img src="https://ssl.nexon.com/s2/game/fc/online/obt/externalAssets/new/season/24ucl.png" alt="" className="absolute left-[-3px] bottom-[-3px] w-[20px]" />
            <span className="absolute bottom-[-20px] text-[8px] tablet:text-[9px] pc:text-[10px] tablet:bottom-[-25px] left-[50%] translate-x-[-50%] font-bold text-nowrap px-[5px] py-[1px] rounded-[10px] border-white/20 border">RW 노이어</span>
            <span className="absolute bg-[#33C771] font-bold text-[8px] tablet:text-[9px] pc:text-[10px] top-[-5px] right-[-10px] px-[4px] py-[1px] tablet:px-[5px] tablet:py-[2px] rounded-[5px]">7.0</span>
            <span className="absolute bottom-[-5px] right-[-10px] w-[15px] tablet:w-[20px] pc:w-[20px] text-[9px] tablet:text-[11px] pc:text-[13px] rounded-[5px] text-center text-[#c5c8c9] font-bold border-[#393a3c] border bg-gradient-to-r from-[#51545a] to-[#42464d]">1</span>
          </div>
        </div>
        <div className="absolute z-10 top-[54%] left-[50%] translate-x-[-50%] translate-y-[-54%] tablet:left-[54%] tablet:top-[50%] tablet:translate-x-[-54%] tablet:translate-y-[-50%]"> {/* 어웨이팀 ST */}
          <div className="relative">
            <img src="https://fco.dn.nexoncdn.co.kr/live/externalAssets/common/playersAction/p834167495.png" alt="" className="w-[30px] tablet:w-[30px] pc:w-[45px] border-white/30 border-[2px] rounded-full bg-white/20" />
            <img src="https://ssl.nexon.com/s2/game/fc/online/obt/externalAssets/new/season/24ucl.png" alt="" className="absolute left-[-3px] bottom-[-3px] w-[20px]" />
            <span className="absolute bottom-[-20px] text-[8px] tablet:text-[9px] pc:text-[10px] tablet:bottom-[-25px] left-[50%] translate-x-[-50%] font-bold text-nowrap px-[5px] py-[1px] rounded-[10px] border-white/20 border">ST 노이어</span>
            <span className="absolute bg-[#33C771] font-bold text-[8px] tablet:text-[9px] pc:text-[10px] top-[-5px] right-[-10px] px-[4px] py-[1px] tablet:px-[5px] tablet:py-[2px] rounded-[5px]">7.0</span>
            <span className="absolute bottom-[-5px] right-[-10px] w-[15px] tablet:w-[20px] pc:w-[20px] text-[9px] tablet:text-[11px] pc:text-[13px] rounded-[5px] text-center text-[#c5c8c9] font-bold border-[#393a3c] border bg-gradient-to-r from-[#51545a] to-[#42464d]">1</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MatchLineup;
