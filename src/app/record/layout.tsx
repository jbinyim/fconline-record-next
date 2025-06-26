import SearchLayout from "@/components/layout/SearchLayout";
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
