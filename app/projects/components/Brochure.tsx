import { AiOutlineDownload } from "react-icons/ai";
import BrochureSlider from "./BrochureSlider";

const Brochure = () => {
  return (
    <div className="w-full bg-white border py-8 px-6 rounded-2xl">
      <h1 className="text-xl font-bold">DLF The Aralias - Brochure</h1>
      <div className="divider"></div>
      <BrochureSlider />
      <div className="text-center">
        <button className="btn bg-white rounded-2xl border border-primary text-primary px-10 hover:bg-primary hover:text-white">
          <AiOutlineDownload size={22} />
          Download Brochure
        </button>
      </div>
    </div>
  );
};

export default Brochure;
