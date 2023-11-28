import ScrollToTop from "@/app/components/ScrollToTop";
import { Specifications } from "../components";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Specifications - Aqar",
  description:
    "Travel Blog for the Adventurous: Read about Our Adventures and Get Inspired to Explore",
};
const specifications = () => {
  return (
    <>
      <ScrollToTop />
      <Specifications />
    </>
  );
};

export default specifications;
