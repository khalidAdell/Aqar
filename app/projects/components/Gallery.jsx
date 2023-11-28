"use client";

import Image from "next/image";
// Components/Gallery.js
import React, { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Slideshow from "yet-another-react-lightbox/plugins/slideshow";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import "yet-another-react-lightbox/plugins/thumbnails.css";

import "yet-another-react-lightbox/styles.css";

const Gallery = ({ height }) => {
  const [open, setOpen] = useState(false);
  const [image, setImage] = useState("");
  const fullscreenRef = React.useRef(null);
  const slideshowRef = React.useRef(null);
  const thumbnailsRef = React.useRef(null);

  const galleryTab = [
    // you can add more image if you want
    {
      imageUrl: "/images/gallery/2.jpg",
      title: "project",
    },
    {
      imageUrl: "/images/gallery/3.jpg",
      title: "project",
    },
    {
      imageUrl: "/images/gallery/4.jpg",
      title: "project",
    },
    {
      imageUrl: "/images/gallery/5.jpg",
      title: "project",
    },
  ];

  const slides = galleryTab.map((item) => ({
    src: item.imageUrl,
    width: 3840,
    height: 2560,
    srcSet: [
      { src: item.imageUrl, width: 320, height: 213 },
      { src: item.imageUrl, width: 640, height: 426 },
      { src: item.imageUrl, width: 1200, height: 800 },
      { src: item.imageUrl, width: 2048, height: 1365 },
      { src: item.imageUrl, width: 3840, height: 2560 },
    ],
  }));

  return (
    <section className="py-6">
      <div className="grid md:grid-cols-2 grid-cols-1 gap-4">
        <div
          className={`${
            height ? "md:h-[520px]" : "md:h-auto"
          } h-[220px] relative group`}
        >
          <Image
            src="/images/gallery/1.jpg"
            alt="project"
            width={700}
            height={500}
            priority={false}
            className="rounded-lg w-full h-full object-cover"
          />
          <div
            onClick={() => {
              setOpen(true);
              setImage("/images/gallery/1.jpg");
            }}
            className="bg-black cursor-pointer opacity-0 group-hover:opacity-50 rounded-lg absolute inset-0 transition-all duration-300 ease-in-out"
          ></div>
          <button
            onClick={() => {
              setOpen(true);
              setImage("/images/gallery/1.jpg");
            }}
            className="btn absolute bottom-2 left-2 transition-all ease-in-out focus:outline-none"
          >
            Show All Photos
          </button>
        </div>
        <div className="h-full mx-2 md:mx-0 relative md:grid grid-cols-2 gap-2 hidden">
          {galleryTab.map((x, index) => {
            return (
              <div key={index} className="relative group">
                <Image
                  src={x.imageUrl}
                  alt={x.title}
                  width={312}
                  height={260}
                  priority={false}
                  className="rounded-lg w-full h-full object-cover"
                />
                <div
                  onClick={() => {
                    setOpen(true);
                    setImage(x.imageUrl);
                  }}
                  className="bg-black cursor-pointer opacity-0 group-hover:opacity-50 rounded-lg absolute inset-0 transition-all duration-300 ease-in-out"
                ></div>
              </div>
            );
          })}
        </div>
        <Lightbox
          open={open}
          close={() => setOpen(false)}
          plugins={[Zoom, Fullscreen, Slideshow, Thumbnails]}
          showPrevNext={false}
          slides={slides}
          fullscreen={{ ref: fullscreenRef }}
          slideshow={{ ref: slideshowRef }}
          thumbnails={{ ref: thumbnailsRef }}
          on={{
            click: () => {
              (slideshowRef.current?.playing
                ? slideshowRef.current?.pause
                : slideshowRef.current?.play)?.();
            },
            click: () => fullscreenRef.current?.enter(),
            click: () => {
              (thumbnailsRef.current?.visible
                ? thumbnailsRef.current?.hide
                : thumbnailsRef.current?.show)?.();
            },
          }}
        />
      </div>
    </section>
  );
};

export default Gallery;
