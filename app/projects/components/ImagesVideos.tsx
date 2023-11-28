import Image from "next/image";
import { FaRegImage } from "react-icons/fa";

const ImagesVideos = () => {
  return (
    <div className="w-full bg-white border py-8 px-6 rounded-2xl">
      <h1 className="text-xl font-bold">Tour DLF The Arallas Images & Video</h1>
      <div className="divider"></div>
      <div className="flex gap-4">
        <div className="relative w-full md:h-60 rounded-2xl overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1580587771525-78b9dba3b914?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            width={150}
            height={150}
            alt="project image"
            priority={false}
            className="w-full object-cover h-full"
          />
          <div className="absolute inset-0 grid place-content-center  p-2 sm:text-base text-sm bg-black bg-opacity-60 text-white">
            <FaRegImage />
            See All Project Images
          </div>
        </div>
        <div className="relative w-full md:h-60 rounded-2xl overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1580587771525-78b9dba3b914?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            width={150}
            height={150}
            alt="project image"
            priority={false}
            className="w-full object-cover h-full"
          />
          <div className="absolute inset-0 grid place-content-center  p-2 sm:text-base text-sm bg-black bg-opacity-60 text-white">
            <FaRegImage />
            See All Project Images
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImagesVideos;
