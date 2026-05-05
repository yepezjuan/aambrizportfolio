import { useEffect } from "react";
import PhotoSwipeLightbox from "photoswipe/lightbox";
import "photoswipe/style.css";

import event1 from "@/assets/allcity-301.webp";
import event2 from "@/assets/spaces51.webp";
import event3 from "@/assets/spaces46.webp";
import event4 from "@/assets/lostigres.webp";
import event5 from "@/assets/allcity402.webp";
import event6 from "@/assets/banda.webp";
import event7 from "@/assets/city-wedding.webp";
import event8 from "@/assets/CSULA.webp";

const eventImages: { src: string; width: number; height: number }[] = [
  { src: event1, width: 1600, height: 1200 },
  { src: event2, width: 1600, height: 1200 },
  { src: event3, width: 1600, height: 1200 },
  { src: event4, width: 1600, height: 1200 },
  { src: event5, width: 1600, height: 1200 },
  { src: event6, width: 1600, height: 1200 },
  { src: event7, width: 1600, height: 1200 },
  { src: event8, width: 1600, height: 1200 },
];

function Events() {
  useEffect(() => {
    const lightbox = new PhotoSwipeLightbox({
      gallery: "#event-grid",
      children: "a",
      pswpModule: () => import("photoswipe"),
    });
    lightbox.init();
    return () => lightbox.destroy();
  }, []);

  return (
    <section className="py-8 px-4">
      <div id="event-grid" className="grid grid-cols-2 md:grid-cols-3 gap-3">
        {eventImages.map((img, index) => (
          <a
            key={index}
            href={img.src}
            data-pswp-width={img.width}
            data-pswp-height={img.height}
            className="block overflow-hidden rounded-2xl"
          >
            <img
              src={img.src}
              alt={`event-${index}`}
              className="w-full h-full object-cover aspect-video rounded-2xl hover:scale-105 transition-transform duration-300"
              loading="lazy"
            />
          </a>
        ))}
      </div>
    </section>
  );
}

export default Events;
