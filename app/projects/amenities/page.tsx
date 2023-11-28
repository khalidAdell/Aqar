import ScrollToTop from "@/app/components/ScrollToTop";
import { Amenities } from "../components";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Amenities - Aqar",
  description:
    "Travel Blog for the Adventurous: Read about Our Adventures and Get Inspired to Explore",
};
const amenities = () => {
  return (
    <>
      <ScrollToTop />
      <Amenities />
    </>
  );
};

export default amenities;
