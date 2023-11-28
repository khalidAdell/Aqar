import { GiCheckedShield } from "react-icons/gi";
import Reviews from "./Reviews";

const ResidentsReviews = () => {
  const ratings = [0, 1, 2, 3, 4, 5, 6];

  return (
    <div className="w-full bg-white border py-8 px-6 rounded-2xl">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-xl font-bold">
            See What The Residents Have To Say
          </h1>
          <p className="text-gray-600 text-sm font-medium mt-1">
            for DLF The Aralias , DLF Phase 5, Gurgaon
          </p>
        </div>
        <span className="border rounded-lg px-3 py-2">3.8/5</span>
      </div>
      <div className="divider"></div>
      <h2 className="font-medium">Ratings based on DLF The Aralias features</h2>
      <div className="flex flex-wrap items-start gap-2 justify-between my-6">
        {ratings.map((num) => {
          return (
            <div
              key={num}
              className="flex items-center justify-center gap-[2px] flex-col"
            >
              <GiCheckedShield className="text-2xl" />
              <p className="text-gray-600">4/5</p>
              <h3 className="font-semibold">Connectivity</h3>
            </div>
          );
        })}
      </div>
      <h2 className="font-medium">Good Things Here</h2>
      <div className="flex items-center gap-3 mt-2 flex-wrap">
        <span className="border rounded-lg py-1 px-3 text-[15px] ">
          Transport Public
        </span>
        <span className="border rounded-lg py-1 px-3 text-[15px] ">
          Cab/Auto
        </span>
        <span className="border rounded-lg py-1 px-3 text-[15px] ">
          Availability
        </span>
        <span className="border rounded-lg py-1 px-3 text-[15px] ">
          No Traffic Jams
        </span>
        <span className="border rounded-lg py-1 px-3 text-[15px] ">
          Nearby Metro Station
        </span>
      </div>
      <h1 className="text-xl font-medium mt-4">Most helpful reviews</h1>
      <Reviews />
    </div>
  );
};

export default ResidentsReviews;
