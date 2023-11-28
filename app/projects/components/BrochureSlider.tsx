"use client";
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import Image from "next/image";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const BrochureSlider = () => {
  const breakpoints = {
    640: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
  };
  return (
    <div className="overflow-hidden relative">
      <button className="arrow-right btn p-2 sm:p-3 h-auto min-h-0 absolute bg-primary bg-opacity-70 hover:bg-opacity-90 hover:bg-primary border-none rounded-full text-white text-xl z-10 top-1/2 translate-y-[-0.5rem] left-0">
        <IoIosArrowBack />
      </button>
      <button className="arrow-left btn p-2 sm:p-3 h-auto min-h-0 absolute bg-primary bg-opacity-70 hover:bg-opacity-90 hover:bg-primary border-none rounded-full text-white text-xl z-10 top-1/2 translate-y-[-0.5rem] right-0">
        <IoIosArrowForward />
      </button>
      <Swiper
        // install Swiper modules
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={10}
        slidesPerView={2}
        navigation={{ nextEl: ".arrow-left", prevEl: ".arrow-right" }}
        className="lg:max-w-xl ml:max-w-md md:max-w-[25rem] sm:max-w-xl xs:max-w-sm max-w-xs my-4"
        breakpoints={breakpoints}
      >
        <SwiperSlide>
          <figure>
            <Image
              width={500}
              height={300}
              src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Property"
              priority={false}
              className="w-full h-auto"
            />
          </figure>
        </SwiperSlide>
        <SwiperSlide>
          <figure>
            <Image
              width={500}
              height={300}
              src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Property"
              priority={false}
              className="w-auto h-auto"
            />
          </figure>
        </SwiperSlide>
        <SwiperSlide>
          <figure>
            <Image
              width={500}
              height={300}
              src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Property"
              priority={false}
              className="w-auto h-auto"
            />
          </figure>
        </SwiperSlide>
        <SwiperSlide>
          <figure>
            <Image
              width={500}
              height={300}
              src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Property"
              priority={false}
              className="w-auto h-auto"
            />
          </figure>
        </SwiperSlide>
        <SwiperSlide>
          <figure>
            <Image
              width={500}
              height={300}
              src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Property"
              priority={false}
              className="w-auto h-auto"
            />
          </figure>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default BrochureSlider;
