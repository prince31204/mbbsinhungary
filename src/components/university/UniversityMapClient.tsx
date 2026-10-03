"use client";
import dynamic from "next/dynamic";
const UniversityMap = dynamic(
  () => import("@/components/homepage/UniversityMap"),
  {
    ssr: false,
    loading: () => (
      <div
        style={{
          height: "400px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#FBF8F0",
          borderRadius: "16px",
        }}
      >
        {" "}
        <p style={{ color: "#7A877F", fontSize: "14px" }}>
          Loading map...
        </p>{" "}
      </div>
    ),
  },
);
interface Props {
  id: string;
  name: string;
  slug: string;
  city: string;
  latitude: number;
  longitude: number;
  thumbnailPath: string | null;
}
export default function UniversityMapClient(props: Props) {
  return <UniversityMap universities={[props]} />;
}
