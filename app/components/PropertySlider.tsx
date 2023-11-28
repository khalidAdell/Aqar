"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Image from "next/image";
import Link from "next/link";
import SubTitle from "./SubTitle";

const PropertySlider = () => {
  const breakpoints = {
    580: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    1024: {
      slidesPerView: 4,
      spaceBetween: 30,
    },
  };
  return (
    <div className="py-8 px-6">
      <SubTitle
        title="Display Latest & Featured Properties"
        des="Based on preferences of users like you"
      />
      <Swiper
        spaceBetween={10}
        slidesPerView={1}
        navigation
        pagination
        scrollbar
        className="my-8 pb-8"
        breakpoints={breakpoints}
      >
        <SwiperSlide className="">
          <Link href="/buy/property" className="card shadow-lg mb-8">
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
            <div className="card-body">
              <h3 className="text-violet-500 text-2xl font-semibold">
                {(500000).toLocaleString("eng", {
                  style: "currency",
                  currency: "USD",
                })}
              </h3>
              <h2 className="card-title">Appartment</h2>
              <p>
                Get started by choosing from one of our pre-built page templates
                to showcase your properties
              </p>
            </div>
          </Link>
        </SwiperSlide>
        <SwiperSlide className="">
          <Link href="/buy/property" className="card shadow-lg mb-8">
            <figure>
              <Image
                width={500}
                height={300}
                src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?q=80&w=1469&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Property"
                priority={false}
                className="w-auto h-auto"
              />
            </figure>
            <div className="card-body">
              <h3 className="text-violet-500 text-2xl font-semibold">
                {(84000).toLocaleString("eng", {
                  style: "currency",
                  currency: "USD",
                })}
              </h3>
              <h2 className="card-title">Office</h2>
              <p>
                Get started by choosing from one of our pre-built page templates
                to showcase your properties
              </p>
            </div>
          </Link>
        </SwiperSlide>
        <SwiperSlide className="">
          <Link href="/buy/property" className="card shadow-lg mb-8">
            <figure>
              <Image
                width={500}
                height={300}
                src="https://images.unsplash.com/photo-1480074568708-e7b720bb3f09?q=80&w=1474&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Property"
                priority={false}
                className="w-auto h-auto"
              />
            </figure>
            <div className="card-body">
              <h3 className="text-violet-500 text-2xl font-semibold">
                {(81300).toLocaleString("eng", {
                  style: "currency",
                  currency: "USD",
                })}
              </h3>
              <h2 className="card-title">House</h2>
              <p>
                Get started by choosing from one of our pre-built page templates
                to showcase your properties
              </p>
            </div>
          </Link>
        </SwiperSlide>
        <SwiperSlide className="">
          <Link href="/buy/property" className="card shadow-lg mb-8">
            <figure>
              <Image
                width={500}
                height={300}
                src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?q=80&w=1469&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Property"
                priority={false}
                className="w-auto h-auto"
              />
            </figure>
            <div className="card-body">
              <h3 className="text-violet-500 text-2xl font-semibold">
                {(64000).toLocaleString("eng", {
                  style: "currency",
                  currency: "USD",
                })}
              </h3>
              <h2 className="card-title">Office</h2>
              <p>
                Get started by choosing from one of our pre-built page templates
                to showcase your properties
              </p>
            </div>
          </Link>
        </SwiperSlide>
        <SwiperSlide className="">
          <Link href="/buy/property" className="card shadow-lg mb-8">
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
            <div className="card-body">
              <h3 className="text-violet-500 text-2xl font-semibold">
                {(24000).toLocaleString("eng", {
                  style: "currency",
                  currency: "USD",
                })}
              </h3>
              <h2 className="card-title">Appartment</h2>
              <p>
                Get started by choosing from one of our pre-built page templates
                to showcase your properties
              </p>
            </div>
          </Link>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default PropertySlider;
