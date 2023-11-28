import Image from "next/image";
import { Gallery } from ".";
import MapView from "./MapView";
import { IoShareSocialOutline } from "react-icons/io5";

const ExploreNeighbourhood = () => {
  const images = [
    { title: "banks", src: "/images/mapIcons/bankLogo.svg" },
    { title: "cinemas", src: "/images/mapIcons/cinemaLogo.svg" },
    { title: "commute", src: "/images/mapIcons/commuteLogo.svg" },
    { title: "food", src: "/images/mapIcons/foodLogoLogo.svg" },
    { title: "groceriess", src: "/images/mapIcons/groceriesLogo.svg" },
    { title: "healthcares", src: "/images/mapIcons/healthcareLogo.svg" },
    { title: "parkss", src: "/images/mapIcons/parksLogo.svg" },
    { title: "shoppings", src: "/images/mapIcons/shoppingLogo.svg" },
  ];
  return (
    <div className="w-full bg-white border py-8 px-6 rounded-2xl">
      <h1 className="text-xl font-bold">Explore Neighbourhood - Map View</h1>
      <div className="divider"></div>
      <MapView />
      <div className="my-4 flex justify-center gap-4 flex-wrap">
        {images.map((img) => (
          <div key={img.title} className="text-center cursor-pointer">
            <Image
              src={img.src}
              alt={img.title}
              title={img.title}
              width={100}
              height={100}
              priority={false}
              className="w-6 h-6 rounded-full shadow-md p-4 box-content"
            />
            <h3 className="capitalize mt-1">
              {img.title.length > 7 ? `${img.title.slice(0, 7)}...` : img.title}
            </h3>
          </div>
        ))}
      </div>
      <div className="flex justify-between items-center mt-4">
        <div>
          <h2 className="text-lg font-medium">Locality Guide</h2>
          <p className="text-sm text-gray-500">For DLF Phase 5, Gurgaon</p>
        </div>
        <button className="flex gap-1 items-center  border text-sm px-3 py-2 text-gray-500 font-medium rounded-xl">
          <IoShareSocialOutline size={18} />
          Share
        </button>
      </div>
      <Gallery height={false} />
    </div>
  );
};

export default ExploreNeighbourhood;
