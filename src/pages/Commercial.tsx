import { useEffect } from "react";
import PhotoSwipeLightbox from "photoswipe/lightbox";
import "photoswipe/style.css";

import product1 from "@/assets/products/product-1.webp";
import product2 from "@/assets/products/product-2.webp";
import product3 from "@/assets/products/product-3.webp";
import product4 from "@/assets/products/product-4.webp";
import product5 from "@/assets/products/product-5.webp";
import product6 from "@/assets/products/product-6.webp";
import product7 from "@/assets/products/product-7.webp";

const productImages = [
  { src: product1, width: 1500, height: 2300 },
  { src: product2, width: 1500, height: 2300 },
  { src: product3, width: 1500, height: 2300 },
  { src: product4, width: 1500, height: 2300 },
  { src: product5, width: 1500, height: 2300 },
  { src: product6, width: 1500, height: 2300 },
  { src: product7, width: 1500, height: 2300 },
];

function Commercial() {
  useEffect(() => {
    const lightbox = new PhotoSwipeLightbox({
      gallery: "#product-grid",
      children: "a",
      pswpModule: () => import("photoswipe"),
    });
    lightbox.init();
    return () => lightbox.destroy();
  }, []);

  return (
    <section className="py-8 px-4">
      <div id="product-grid" className="grid grid-cols-2 md:grid-cols-3 gap-3">
        {productImages.map((img, index) => (
          <a
            key={index}
            href={img.src}
            data-pswp-width={img.width}
            data-pswp-height={img.height}
            className="block overflow-hidden rounded-2xl"
          >
            <img
              src={img.src}
              alt={`product-${index}`}
              className="w-full h-full object-cover aspect-[3/4] rounded-2xl hover:scale-105 transition-transform duration-300"
              loading="lazy"
            />
          </a>
        ))}
      </div>
    </section>
  );
}

export default Commercial;
