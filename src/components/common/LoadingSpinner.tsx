import React from 'react'

const LoadingSpinner = () => {
  return (
    <div className="w-full flex justify-center items-center flex-col">
              <div className="mx-auto animate-spin w-[40px] h-[40px] border-[4px] border-[#e5e7eb]/30 border-t-[#96bed4] rounded-full mb-[10px]"></div>
              <div className="flex items-center gap-[10px] font-bold text-lg">
                조회 중
                <div className="animate-bounce w-[7px] h-[7px] bg-[#96bed4] rounded-full"></div>
                <div className="animate-bounce w-[7px] h-[7px] bg-[#96bed4] rounded-full" style={{ animationDelay: "0.1s" }}></div>
                <div className="animate-bounce w-[7px] h-[7px] bg-[#96bed4] rounded-full" style={{ animationDelay: "0.2s" }}></div>
              </div>
            </div>
  )
}

export default LoadingSpinner