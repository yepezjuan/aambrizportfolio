import { useEffect } from "react";
import PhotoSwipeLightbox from "photoswipe/lightbox";
import "photoswipe/style.css";

import blackwhitegirl from "@/assets/blackwhitegirl.webp";
import diademuertos from "@/assets/diademuertos.webp";
import gio3 from "@/assets/Gio-3.webp";
import karely3 from "@/assets/Karely-3.webp";
import kim1339 from "@/assets/Kim-1339.webp";
import darathy20 from "@/assets/Darathy-20.webp";
import andrea from "@/assets/Andrea-5.webp";
import wallace from "@/assets/wallaceryan.webp";
import wedd from "@/assets/beachwedding.webp";
import horse from "@/assets/cynthia.webp";
import leslie from "@/assets/Leslie-36.jpg";
import halley from "@/assets/tennis.webp";

const portraitImages = [
  { src: blackwhitegirl, width: 1200, height: 1600 },

  { src: gio3, width: 1200, height: 1600 },
  { src: andrea, width: 1200, height: 1600 },
  { src: karely3, width: 1200, height: 1600 },
  { src: halley, width: 1200, height: 1600 },
  { src: kim1339, width: 1200, height: 1600 },
  { src: diademuertos, width: 1200, height: 1600 },
  { src: darathy20, width: 1200, height: 1600 },
  { src: wallace, width: 1200, height: 1600 },
  { src: leslie, width: 1200, height: 1600 },
  { src: wedd, width: 1200, height: 1600 },
  { src: horse, width: 1200, height: 1600 },
];

function Portraits() {
  useEffect(() => {
    const lightbox = new PhotoSwipeLightbox({
      gallery: "#portrait-grid",
      children: "a",
      pswpModule: () => import("photoswipe"),
    });
    lightbox.init();
    return () => lightbox.destroy();
  }, []);

  return (
    <section className="py-8 px-4">
      <div id="portrait-grid" className="grid grid-cols-2 md:grid-cols-3 gap-3">
        {portraitImages.map((img, index) => (
          <a
            key={index}
            href={img.src}
            data-pswp-width={img.width}
            data-pswp-height={img.height}
            className="block overflow-hidden rounded-2xl"
          >
            <img
              src={img.src}
              alt={`portrait-${index}`}
              className="w-full h-full object-cover aspect-[3/4] rounded-2xl hover:scale-105 transition-transform duration-300"
              loading="lazy"
            />
          </a>
        ))}
      </div>
    </section>
  );
}

export default Portraits;
