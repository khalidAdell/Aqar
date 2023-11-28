import ScrollToTop from "@/app/components/ScrollToTop";
import { ResidentsReviews } from "../components";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Reviews - Aqar",
  description:
    "Travel Blog for the Adventurous: Read about Our Adventures and Get Inspired to Explore",
};

const residentsReviews = () => {
  return (
    <>
      <ScrollToTop />
      <ResidentsReviews />
    </>
  );
};

export default residentsReviews;
