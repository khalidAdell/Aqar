"use client";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
const Reviews = () => {
  const breakpoints = {
    360: {
      slidesPerView: 1,
      spaceBetween: 15,
    },
    480: {
      slidesPerView: 2,
      spaceBetween: 15,
    },
  };
  return (
    <div className="overflow-hidden relative">
      <Swiper
        // install Swiper modules
        slidesPerView={2}
        spaceBetween={15}
        className="lg:max-w-xl ml:max-w-[28rem] md:max-w-[25rem] sm:max-w-[37rem] xs:max-w-[29rem] max-w-[20rem] my-4"
        breakpoints={breakpoints}
      >
        <SwiperSlide>
          <div className="py-2 px-3 leading-6 shadow-lg m-2 cursor-grab">
            <p className="text-[14px] sm:text-[15px] font-medium text-gray-600">
              I have bought an apartment. It is located at a well connected
              place with all modern amenities of lifestyle are available. These
              apartments are ready to move in. There is no problem
            </p>
            <div className="pl-4 pt-2">
              <h3 className="font-medium">Nilam</h3>
              <p className="text-[15px] text-sm sm:text-base">
                owner | posted 2029 years ago
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="py-2 px-3 leading-6 shadow-lg m-2 cursor-grab">
            <p className="text-[14px] sm:text-[15px] font-medium text-gray-600">
              I have bought an apartment. It is located at a well connected
              place with all modern amenities of lifestyle are available. These
              apartments are ready to move in. There is no problem
            </p>
            <div className="pl-4 pt-2">
              <h3 className="font-medium">Nilam</h3>
              <p className="text-[15px] text-sm sm:text-base">
                owner | posted 2029 years ago
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="py-2 px-3 leading-6 shadow-lg m-2 cursor-grab">
            <p className="text-[14px] sm:text-[15px] font-medium text-gray-600">
              I have bought an apartment. It is located at a well connected
              place with all modern amenities of lifestyle are available. These
              apartments are ready to move in. There is no problem
            </p>
            <div className="pl-4 pt-2">
              <h3 className="font-medium">Nilam</h3>
              <p className="text-[15px] text-sm sm:text-base">
                owner | posted 2029 years ago
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="py-2 px-3 leading-6 shadow-lg m-2 cursor-grab">
            <p className="text-[14px] sm:text-[15px] font-medium text-gray-600">
              I have bought an apartment. It is located at a well connected
              place with all modern amenities of lifestyle are available. These
              apartments are ready to move in. There is no problem
            </p>
            <div className="pl-4 pt-2">
              <h3 className="font-medium">Nilam</h3>
              <p className="text-[15px] text-sm sm:text-base">
                owner | posted 2029 years ago
              </p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Reviews;
