import Image from "next/image";

export default function NoData() {
  return (
    <div className="relative w-full h-110 pc:h-170 rounded-[10px] overflow-hidden">
      <Image
        src={"/backgroundImgs/nodata.jpg"}
        alt="데이터가 없습니다"
        fill
        className="object-cover"
      />
      <p className="absolute top-1/10 left-1/2 -translate-x-1/2 text-base pc:text-2xl font-bold">
        경기 기록이 없습니다!!
      </p>
    </div>
  );
}
