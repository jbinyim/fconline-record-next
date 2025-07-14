import SearchLayout from "@/app/record/_components/SearchLayout";
import React, { ReactNode, Suspense } from "react";

const RecordLayout = ({ children }: { children: ReactNode }) => {
  return (
    <Suspense fallback={<div>로딩중...</div>}>
      <div>
        <SearchLayout />
        {children}
      </div>
    </Suspense>
  );
};

export default RecordLayout;
