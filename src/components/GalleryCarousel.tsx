import { useEffect } from "react";
import "swiper/css";
import "swiper/css/free-mode";

import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper/modules";

import PhotoSwipeLightbox from "photoswipe/lightbox";
import "photoswipe/style.css";

/* ================= Data ================= */
type ImageItem = {
  src: string;
  width: number;
  height: number;
};

// ✅ Use root-based paths so they work in production
const images: ImageItem[] = [
  { src: "/film_photos/portrait1.jpg", width: 1200, height: 1600 },
  { src: "/film_photos/portrait2.jpg", width: 1200, height: 1600 },
  { src: "/film_photos/portrait3.jpg", width: 1200, height: 1600 },
  { src: "/film_photos/portrait3.jpg", width: 1200, height: 1600 },
  { src: "/film_photos/portrait3.jpg", width: 1200, height: 1600 },
  { src: "/film_photos/portrait3.jpg", width: 1200, height: 1600 },
];

/* ================= Component ================= */
export const GalleryCarousel = () => {
  useEffect(() => {
    const lightbox = new PhotoSwipeLightbox({
      gallery: "#gallery",
      children: "a",
      pswpModule: () => import("photoswipe"),
    });

    lightbox.init();
    return () => lightbox.destroy();
  }, []);

  return (
    <section className="py-8">
      <div id="gallery">
        <Swiper
          modules={[FreeMode]}
          spaceBetween={2}
          slidesPerView={3.1}
          freeMode
          simulateTouch={true}
          touchStartPreventDefault={false} // allow natural swipe
          className="px-4"
        >
          {images.map((img, index) => (
            <SwiperSlide key={index}>
              <a
                href={img.src}
                data-pswp-width={img.width}
                data-pswp-height={img.height}
                className="block overflow-hidden rounded-3xl"
                draggable={false} // prevent dragging the link
                onDragStart={(e) => e.preventDefault()} // extra safety
              >
                <img
                  src={img.src}
                  alt={`image-${index}`}
                  className="w-[600px]  object-cover rounded-2xl active:scale-120 transition-transform duration-200"
                  loading="lazy"
                  draggable={false} // prevent dragging image
                  onDragStart={(e) => e.preventDefault()}
                />
              </a>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};
