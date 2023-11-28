import Image from "next/image";
import { LuTableProperties } from "react-icons/lu";
import { FaPhone } from "react-icons/fa6";
import { CiHeart } from "react-icons/ci";
import { IoShareSocialOutline } from "react-icons/io5";

type Props = {
  num: number;
};
const ProjectCard = ({ num }: Props) => {
  return (
    <div className="hero border rounded-xl shadow-md relative my-4">
      <div className="absolute top-2 right-2 flex gap-3">
        <CiHeart
          size={23}
          className="bg-gray-100 p-1 cursor-pointer z-[1] box-content rounded-full"
        />
        <IoShareSocialOutline
          size={23}
          className="bg-gray-100 p-1 cursor-pointer z-[1] box-content rounded-full"
        />
      </div>
      <div className="hero-content flex-col sm:flex-row items-start">
        <div className="sm:w-2/5 max-h-80">
          <Image
            src="https://images.unsplash.com/photo-1531971589569-0d9370cbe1e5?q=80&w=1481&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            className="w-full h-60 object-cover rounded-lg shadow-md"
            width={400}
            height={300}
            alt="project image"
          />
        </div>
        <div className="w-full sm:w-3/5">
          <h1 className="text-xl font-semibold">
            Sowparnika Indradhanush {num}
          </h1>
          <p className="text-sm text-gray-500 my-2">Hoskote, Bangalore</p>
          <p className="text-primary text-xl font-semibold">
            ₹ 30.00 Lac - 66.01 Lac
          </p>
          <div className="mt-4 border shadow-md p-2 rounded-xl">
            <div className="flex items-center gap-2 gap-x-6 mb-4">
              <LuTableProperties size={20} />
              <div>
                <p className="text-sm font-medium text-gray-500">
                  Project Size
                </p>
                <div className="flex gap-2">
                  <p className="text-sm font-medium text-gray-500">930 units</p>
                  <p className="text-sm font-medium text-gray-500">5.5 Acres</p>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-2 gap-x-6">
              <LuTableProperties size={20} />
              <div>
                <p className="text-sm font-medium text-gray-500">
                  Configurations
                </p>
                <div className="flex gap-2">
                  <p className="text-sm font-medium text-gray-500">
                    1, 2, 3 BHK
                  </p>
                  <p className="text-sm font-medium text-gray-500">Flat</p>
                  <p className="text-sm font-medium text-gray-500">
                    519 - 1142 Sq. Ft. (Saleable)
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-end gap-3 mt-4">
            <button className="btn min-h-0 h-10 bg-transparent hover:bg-transparent border-none text-lg font-bold">
              Details
            </button>
            <button className="btn min-h-0 h-10 btn-primary font-bold text-white">
              <FaPhone /> Get a Call Back
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
