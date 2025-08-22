"use client";

import useEvent from "@/hooks/useEvent";
import { EventType } from "@/types/eventType";
import Image from "next/image";
import Link from "next/link";
import LoadingSkeleton from "../common/LoadingSkeleton";

export default function Event() {
  const { data, isPending } = useEvent.useGetEvent();

  return (
    <div>
      <section className="w-[80%] mx-auto rounded-[20px] bg-white/10 p-8 border border-[rgba(255,255,255,0.2)] pc:w-[1200px]">
        <h2 className="mb-10 font-bold text-lg tablet:text-xl pc:text-2xl">
          FC온라인 진행중인 이벤트
        </h2>
        <main className="grid grid-cols-1 gap-5 tablet:grid-cols-2 pc:grid-cols-3">
          {isPending
            ? Array(4)
                .fill(0)
                .map((_, idx) => <LoadingSkeleton type="event" key={idx} />)
            : data?.uniqueEvents.map((event: EventType) => (
                <Link href={event.link} key={event.link} target="_blank">
                  <div className="border border-[rgba(255,255,255,0.1)] rounded-[10px] overflow-hidden hover:translate-y-[-5px] hover:bg-white/20 hover:shadow-[0_0_20px_rgba(0,0,0,0.3)] duration-300">
                    <div className="relative h-22">
                      <Image src={event.imgUrl} alt="이벤트 이미지" fill className="object-cover" />
                    </div>
                    <div className="p-4 flex flex-col gap-1">
                      <p className="truncate text-sm font-bold">{event.title}</p>
                      <p className="text-xs text-[#9f9fa9]">{event.period}</p>
                    </div>
                  </div>
                </Link>
              ))}
        </main>
      </section>
    </div>
  );
}
