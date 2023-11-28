import ScrollToTop from "../components/ScrollToTop";
import {
  AboutAralias,
  Amenities,
  AraliasOverview,
  Brochure,
  ContactSellers,
  DeveloperInformation,
  ExploreNeighbourhood,
  FAQs,
  ImagesVideos,
  PriceFloorPlan,
  ProjectProperties,
  Questions,
  ResidentsReviews,
  Specifications,
  WhyAralias,
} from "./components";

const Projects = () => {
  return (
    <>
      <ScrollToTop />
      <WhyAralias />
      <AraliasOverview />
      <AboutAralias />
      <ImagesVideos />
      <Amenities />
      <Specifications />
      <PriceFloorPlan />
      <ContactSellers />
      <Brochure />
      <ResidentsReviews />
      <ExploreNeighbourhood />
      <DeveloperInformation />
      <ProjectProperties />
      <Questions />
      <FAQs />
    </>
  );
};

export default Projects;
