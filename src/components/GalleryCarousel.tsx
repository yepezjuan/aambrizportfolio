import { useEffect } from "react";
import "swiper/css";
import "swiper/css/free-mode";

import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper/modules";

import PhotoSwipeLightbox from "photoswipe/lightbox";

/* ================= Types ================= */
export type ImageItem = {
  src: string;
  width: number;
  height: number;
};

/* ================= Component ================= */
export const GalleryCarousel = ({
  images,
  aspectRatio,
}: {
  images: ImageItem[];
  aspectRatio?: string;
}) => {
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
          freeMode
          simulateTouch={true}
          touchStartPreventDefault={false}
          breakpoints={{
            0: { slidesPerView: 1.3, spaceBetween: 8 },
            480: { slidesPerView: 2.1, spaceBetween: 10 },
            768: { slidesPerView: 3.1, spaceBetween: 12 },
          }}
          className="px-4"
        >
          {images.map((img, index) => (
            <SwiperSlide key={index}>
              <a
                href={img.src}
                data-pswp-width={img.width}
                data-pswp-height={img.height}
                className="block overflow-hidden rounded-3xl p-1"
                style={aspectRatio ? { aspectRatio } : undefined}
                draggable={false}
                onDragStart={(e) => e.preventDefault()}
              >
                <img
                  src={img.src}
                  alt={`image-${index}`}
                  width={img.width}
                  height={img.height}
                  className="w-full h-full object-cover rounded-2xl active:scale-105 transition-transform duration-200"
                  loading={index === 0 ? "eager" : "lazy"}
                  fetchPriority={index === 0 ? "high" : "auto"}
                  draggable={false}
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
