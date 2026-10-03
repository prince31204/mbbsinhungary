"use client";

import dynamic from "next/dynamic";

const UniversityMap = dynamic(() => import("./UniversityMap"), {
  ssr: false,
  loading: () => (
    <div className="h-[500px] w-full bg-[#F3F7F3] animate-pulse rounded-2xl flex items-center justify-center border border-[#DDE5DD]">
      Loading Map...
    </div>
  ),
});

export default function UniversityMapWrapper({
  universities,
}: {
  universities: any[];
}) {
  return <UniversityMap universities={universities} />;
}
