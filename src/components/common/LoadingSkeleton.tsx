interface LoadingSkeletonProps {
  type: "event" | "recent" | "search" | "match" | "comment";
}

export default function LoadingSkeleton({ type }: LoadingSkeletonProps) {
  if (type === "event") {
    return (
      <div className="border border-[rgba(255,255,255,0.1)] rounded-[10px] overflow-hidden">
        <div className="relative h-22 bg-gray-600 animate-pulse"></div>
        <div className="p-4 flex flex-col gap-1">
          <div className="h-4 bg-gray-600 rounded w-3/4 animate-pulse"></div>
          <div className="h-3 bg-gray-600 rounded w-1/2 animate-pulse"></div>
        </div>
      </div>
    );
  } else if (type === "recent") {
    return (
      <li className="p-[10px] rounded-[10px] bg-white/10 border border-[rgba(255,255,255,0.1)] text-center w-full flex justify-center duration-300">
        <div>
          <div className="flex items-center justify-between gap-[10px] flex-col">
            <div className="h-4 bg-gray-600 rounded w-3/4 animate-pulse"></div>
            <div className="h-20 w-20 bg-gray-600 rounded-full animate-pulse"></div>
          </div>
        </div>
      </li>
    );
  } else if (type === "search") {
    return (
      <>
        <div className="w-[30%] flex flex-col gap-10 items-center">
          <div className="bg-gray-600 w-25 h-4 animate-pulse"></div>
          <div className="bg-gray-600 w-15 h-4 animate-pulse"></div>
        </div>
        <div className="flex justify-around w-[70%]">
          {Array(2)
            .fill(0)
            .map((_, idx) => (
              <div key={idx} className="flex justify-center items-center flex-col gap-4">
                <div className="bg-gray-600 w-20 h-4 animate-pulse" />
                <div className="bg-gray-600 w-20 h-15 animate-pulse" />
                <div className="bg-gray-600 w-25 h-4 animate-pulse" />
              </div>
            ))}
        </div>
      </>
    );
  } else if (type === "match") {
    return (
      <div className="flex items-center p-[25px] bg-white/10 border border-[rgba(255,255,255,0.1)] rounded-[10px] mb-4 animate-pulse">
        <div className="w-[50px] tablet:w-[80px] text-[10px] tablet:text-sm pc:text-base">
          <div className="bg-gray-600 h-4 w-12 rounded"></div>
        </div>
        <div className="flex-1 flex items-center justify-center text-nowrap">
          <div className="grid grid-cols-3 items-center w-[100%] tablet:w-[85%] pc:w-[50%]">
            <div className="text-right pr-2">
              <div className="bg-gray-600 h-6 w-24 rounded inline-block"></div>
            </div>
            <div className="text-center">
              <div className="bg-gray-600 h-6 w-12 rounded inline-block"></div>
            </div>
            <div className="text-left pl-2">
              <div className="bg-gray-600 h-6 w-24 rounded inline-block"></div>
            </div>
          </div>
        </div>
        <div className="w-[50px] tablet:w-[80px] flex justify-end items-center">
          <div className="bg-gray-600 h-6 w-6 rounded-full"></div>
        </div>
      </div>
    );
  } else if (type === "comment") {
    return (
      <li className="px-4 py-4 flex flex-col gap-3 bg-white/10 border border-white/30 rounded-[20px] animate-pulse">
        <article className="flex items-center justify-between">
          <div className="h-4 w-20 bg-gray-600 rounded"></div>
          <div className="h-4 w-4 bg-gray-600 rounded"></div>
        </article>
        <div className="flex flex-col gap-2">
          <div className="h-4 w-full bg-gray-600 rounded"></div>
          <div className="h-4 w-3/4 bg-gray-600 rounded"></div>
        </div>
        <article className="flex items-center gap-4">
          <div className="h-3 w-16 bg-gray-600 rounded"></div>
          <div className="h-4 w-10 bg-gray-600 rounded"></div>
        </article>
      </li>
    );
  }

  return <div>LoadingSkeleton</div>;
}
