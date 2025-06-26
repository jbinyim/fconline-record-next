import SearchLayout from "@/app/record/_components/SearchLayout";
import React, { ReactNode } from "react";

const RecordLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      <SearchLayout />
      {children}
    </div>
  );
};

export default RecordLayout;
