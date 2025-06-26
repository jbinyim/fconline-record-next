"use client"

import { useState, useEffect } from "react"

type CurrencyUnit = "억" | "조" | "경"

const FeeResult = () => {
  const [isPremiumChecked, setIsPremiumChecked] = useState(false)
  const [isTopClassChecked, setIsTopClassChecked] = useState(true)
  const [saleAmount, setSaleAmount] = useState(1)
  const [currency, setCurrency] = useState("억")


  const [calculationResults, setCalculationResults] = useState({
    basicFee: 0,
    totalDiscountRate: 0,
    discountAmount: 0,
    individualDiscount: 0,
    finalFee: 0,
    finalAmount: 0,
  })


  const convertToActualValue = (inputValue: number, unit: CurrencyUnit): number => {
    const multipliers: Record<CurrencyUnit, number> = {
      억: 100000000, // 1억 = 100,000,000
      조: 1000000000000, // 1조 = 1,000,000,000,000
      경: 10000000000000000, // 1경 = 10,000,000,000,000,000
    }
    return inputValue * (multipliers[unit] || 1)
  }

  const formatNumber = (num: number): string => {
    return Math.round(num).toLocaleString("ko-KR")
  }

  const calculateFees = () => {
    const actualSaleAmount = convertToActualValue(saleAmount, currency as CurrencyUnit)

    const basicFeeRate = 0.4
    const basicFee = actualSaleAmount * basicFeeRate

    let totalDiscountRate = 0
    if (isPremiumChecked) totalDiscountRate += 0.3
    if (isTopClassChecked) totalDiscountRate += 0.2
    totalDiscountRate = Math.min(totalDiscountRate, 0.5)

    const discountAmount = basicFee * totalDiscountRate
    const finalFee = basicFee - discountAmount
    const finalAmount = actualSaleAmount - finalFee

    setCalculationResults({
      basicFee,
      totalDiscountRate,
      discountAmount,
      individualDiscount: 0,
      finalFee,
      finalAmount,
    })
  }

  
  useEffect(() => {
    calculateFees()
  }, [saleAmount, isPremiumChecked, isTopClassChecked, currency])

  const handleSaleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number.parseFloat(e.target.value)
    if (!isNaN(value) && value > 0) {
      setSaleAmount(value)
    } else if (e.target.value === "") {
      setSaleAmount(0)
    }
  }

  const handlePremiumToggle = () => {
    setIsPremiumChecked(!isPremiumChecked)
  }

  const handleTopClassToggle = () => {
    setIsTopClassChecked(!isTopClassChecked)
  }

  return (
    <div>
        <main className="w-[90%] tablet:w-[70%] pc:w-[50%] mx-auto">
            <div className="">
                <h2 className="font-bold text-3xl p-5 border-b-[1px] text-center">수수료 계산기</h2>
            </div>
            <section className="mb-[10px]">
                <label htmlFor="" className="block py-[10px] px-[5px]">판매 예정 금액</label>
                <form className="">
                    <div className="flex justify-between mb-[30px] font-bold">
                        <div className="flex">
                            <input type="number" name="" id="" placeholder="판매 금액" value={saleAmount} onChange={handleSaleAmountChange} className="p-[5px] text-xs tablet:text-sm pc:text-base w-[80px] tablet:w-[120px] border-[1px] border-r-0 outline-0"/>
                            <select name="" id="" value={currency} onChange={(e) => setCurrency(e.target.value)} className="p-[5px] bg-black50 outline-0 border-[1px] border-l-0">
                                <option value="억" selected>억</option>
                                <option value="조">조</option>
                                <option value="경">경</option>
                            </select>
                        </div>
                        <div className="w-full border-[1px]">
                            <select name="" id="" className="p-[5px] w-[100%] bg-black50 outline-0">
                                <option value="" disabled selected>인원</option>
                                <option value="1명">1명</option>
                                <option value="2명">2명</option>
                                <option value="3명">3명</option>
                                <option value="4명">4명</option>
                                <option value="5명">5명</option>
                                <option value="6명">6명</option>
                            </select>
                        </div>
                        <div className="w-full border-[1px]">
                            <select name="" id="" className="p-[5px] w-[100%] bg-black50 outline-0">
                                <option value="" disabled selected>쿠폰</option>
                                <option value="10%">10%</option>
                                <option value="15%">15%</option>
                                <option value="20%">20%</option>
                                <option value="25%">25%</option>
                                <option value="30%">30%</option>
                                <option value="35%">35%</option>
                                <option value="40%">40%</option>
                                <option value="45%">45%</option>
                                <option value="50%">50%</option>
                            </select>
                        </div>
                        <div className="flex">
                            <input type="text" name="" id="" placeholder="최대 할인BP" className="p-[5px] text-xs tablet:text-sm pc:text-base w-[80px] tablet:w-[120px] border-[1px] border-r-0 outline-0" />
                            <select name="" id="" className="p-[5px] bg-black50 outline-0 border-[1px] border-l-0">
                                <option value="억" selected>억</option>
                                <option value="조">조</option>
                            </select>
                        </div>
                    </div>
                    <button className="w-full mx-auto text-center bg-green100 font-bold text-xl py-[10px]">입력창 추가</button>
                </form>
            </section>

            <section className="mb-[20px]">
                <h2 className="py-[10px] px-[5px] border-b-[1px]">수수료 할인 금액</h2>
                <div className="">
                    <div className="relative py-5">
                        <span className={`transition-colors duration-300 ${isPremiumChecked ? "text-green100" : "text-skyBlue50"}`}>
                            Premium PC방 기본수수료 30% 할인
                        </span>
                        <button type="button" className={`w-[15px] h-[15px] border-[2px] rounded-[3px] absolute right-0 transition-all duration-300 ${isPremiumChecked ? "border-green100" : "border-skyBlue50"}`} onClick={handlePremiumToggle}>
                            <img src="/icons/cal-check.png" alt="" className={`relative top-[-3px] right-[-5px] z-10 transition-opacity duration-300 ${isPremiumChecked ? "opacity-100" : "opacity-0"}`} />
                        </button>
                    </div>
                    <div className="relative py-5">
                        <span className={`transition-colors duration-300 ${isTopClassChecked ? "text-green100" : "text-skyBlue50"}`}>
                            TOP CLASS 기본수수료 20% 할인
                        </span>
                        <button type="button" className={`w-[15px] h-[15px] border-[2px] rounded-[3px] absolute right-0 transition-all duration-300 ${isTopClassChecked ? "border-green100" : "border-skyBlue50"}`} onClick={handleTopClassToggle}>
                            <img src="/icons/cal-check.png" alt="" className={`relative top-[-3px] right-[-5px] z-10 transition-opacity duration-300 ${isTopClassChecked ? "opacity-100" : "opacity-0"}`} />
                        </button>
                    </div>
                </div>
                <button className="w-full mx-auto text-center bg-green100 font-bold text-xl py-[10px]">계산하기</button>
            </section>

            <section className="">
                <div className="flex justify-between mb-5">
                    <span className="text-sm tablet:text-base">기본 수수료(40%)</span>
                    <span className="text-sm tablet:text-base">-{formatNumber(calculationResults.basicFee)}원 BP</span>
                </div>
                <div className="flex justify-between mb-5">
                    <span className="text-sm tablet:text-base">수수료 할인 금액 <span className="text-green100 text-[13px]">총 {Math.round(calculationResults.totalDiscountRate * 100)}% 할인</span></span>
                    <span className="text-sm tablet:text-base">{formatNumber(calculationResults.discountAmount)}원 BP</span>
                </div>
                <div className="flex justify-between pb-5 border-b-[1px]">
                    <span className="text-sm tablet:text-base">개별 할인 금액</span>
                    <span className="text-sm tablet:text-base">{calculationResults.individualDiscount}원 BP</span>
                </div>
                <div className="flex justify-between py-5">
                    <span className="text-sm tablet:text-base">최종 수수료</span>
                    <span className="text-sm tablet:text-base">-{formatNumber(calculationResults.finalFee)}원 BP</span>
                </div>
            </section>

            <section className="mx-auto text-center bg-gray50 py-10 flex items-center justify-center flex-col gap-5 mb-30">
                <div className="font-bold text-xl">최종 받는 금액</div>
                <div className="font-bold text-2xl text-green100">{formatNumber(calculationResults.finalAmount)}원 BP</div>
            </section>
        </main>
    </div>
  )
}

export default FeeResult