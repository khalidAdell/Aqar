import { BiShower } from "react-icons/bi";
import { FaRegSnowflake, FaWifi, FaSwimmingPool } from "react-icons/fa";

const AraliasOverview = () => {
  return (
    <div className="w-full bg-white border py-8 px-6 rounded-2xl">
      <h1 className="text-xl font-bold">DLF The Aralias Overview</h1>

      <div className="divider"></div>
      <div className="grid lg:grid-cols-3 grid-cols-2 gap-4">
        {/* div  */}
        <div className="flex items-center gap-2">
          <BiShower className="text-xl" />
          <div>
            <h3 className="text-gray-500 font-semibold ">Sizes</h3>
            <p className="text-sm">5575.00 sq.ft. - 6000.00 sq.ft.</p>
          </div>
        </div>
        {/* div  */}
        <div className="flex items-center gap-2">
          <FaRegSnowflake className="text-xl" />
          <div>
            <h3 className="text-gray-500 font-semibold ">Sizes</h3>
            <p className="text-sm">5575.00 sq.ft. - 6000.00 sq.ft.</p>
          </div>
        </div>
        {/* div  */}
        <div className="flex items-center gap-2">
          <FaRegSnowflake className="text-xl" />
          <div>
            <h3 className="text-gray-500 font-semibold ">Sizes</h3>
            <p className="text-sm">5575.00 sq.ft. - 6000.00 sq.ft.</p>
          </div>
        </div>
        {/* div  */}
        <div className="flex items-center gap-2">
          <FaRegSnowflake className="text-xl" />
          <div>
            <h3 className="text-gray-500 font-semibold ">Sizes</h3>
            <p className="text-sm">5575.00 sq.ft. - 6000.00 sq.ft.</p>
          </div>
        </div>
        {/* div  */}
        <div className="flex items-center gap-2">
          <FaSwimmingPool className="text-xl" />
          <div>
            <h3 className="text-gray-500 font-semibold ">Sizes</h3>
            <p className="text-sm">5575.00 sq.ft. - 6000.00 sq.ft.</p>
          </div>
        </div>
        {/* div  */}
        <div className="flex items-center gap-2">
          <FaWifi className="text-xl" />
          <div>
            <h3 className="text-gray-500 font-semibold ">Sizes</h3>
            <p className="text-sm">5575.00 sq.ft. - 6000.00 sq.ft.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AraliasOverview;
