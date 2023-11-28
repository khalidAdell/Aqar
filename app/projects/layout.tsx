import { Disclaimer, Gallery, QuickLinks, Sidebar } from "./components";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects - Aqar",
  description:
    "Travel Blog for the Adventurous: Read about Our Adventures and Get Inspired to Explore",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="px-2 md:px-0">
      <Gallery height={true} />
      <div className="flex gap-4 py-6 md:flex-row flex-col">
        <div className="w-full md:w-2/3 gap-y-4 grid">
          {children}
          <QuickLinks />
          <Disclaimer />
        </div>
        <Sidebar />
      </div>
    </div>
  );
}
