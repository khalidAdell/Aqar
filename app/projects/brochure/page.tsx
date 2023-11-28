import ScrollToTop from "@/app/components/ScrollToTop";
import { Brochure } from "../components";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Brochure - Aqar",
  description:
    "Travel Blog for the Adventurous: Read about Our Adventures and Get Inspired to Explore",
};
const brochure = () => {
  return (
    <>
      <ScrollToTop />
      <Brochure />
    </>
  );
};

export default brochure;
