import { Hero } from "../components/Hero";
import { Pricing } from "../components/Pricing";
import { GalleryCarousel, ImageItem } from "../components/GalleryCarousel";
import { About } from "../components/About";
import { HowItWorks } from "../components/HowItWorks";
import BookingSection from "../components/BookingSection";
import { VideoReel } from "@/components/VideoReel";
import { Testimonials } from "@/components/Testimonials";

import blackwhitegirl from "@/assets/blackwhitegirl.webp";
import diademuertos from "@/assets/diademuertos.webp";
import gio3 from "@/assets/Gio-3.webp";
import karely3 from "@/assets/Karely-3.webp";
import kim1339 from "@/assets/Kim-1339.webp";
import darathy20 from "@/assets/Darathy-20.webp";

import product1 from "@/assets/products/product-1.webp";
import product2 from "@/assets/products/product-2.webp";
import product3 from "@/assets/products/product-3.webp";
import product4 from "@/assets/products/product-4.webp";
import product5 from "@/assets/products/product-5.webp";
import product7 from "@/assets/products/product-7.webp";

import allcity402 from "@/assets/allcity402.webp";
import allcity301 from "@/assets/allcity-301.webp";
import lostigres from "@/assets/lostigres.webp";
import spaces46 from "@/assets/spaces46.webp";

const portraitImages: ImageItem[] = [
  { src: blackwhitegirl, width: 1500, height: 2300 },
  { src: diademuertos, width: 1500, height: 2300 },
  { src: gio3, width: 1500, height: 2300 },
  { src: karely3, width: 1500, height: 2300 },
  { src: kim1339, width: 1500, height: 2300 },
  { src: darathy20, width: 1500, height: 2300 },
];

const productImages: ImageItem[] = [
  { src: product4, width: 1500, height: 2300 },
  { src: product5, width: 1500, height: 2300 },
  { src: product3, width: 1500, height: 2300 },
  { src: product2, width: 1500, height: 2300 },
  { src: product7, width: 1500, height: 2300 },
  { src: product1, width: 1500, height: 2300 },
];

const eventImages: ImageItem[] = [
  { src: allcity402, width: 2300, height: 1500 },
  { src: allcity301, width: 2300, height: 1500 },
  { src: lostigres, width: 2300, height: 1500 },
  { src: spaces46, width: 2300, height: 1500 },
];

function Home() {
  return (
    <>
      <Hero />

      <GalleryCarousel images={portraitImages} />
      <GalleryCarousel images={productImages} />
      <GalleryCarousel images={eventImages} />
      <About />
      <HowItWorks />
      <Pricing />
      <BookingSection
        url="https://calendar.google.com/calendar/appointments/schedules/AcZssZ3G7q4Kw6bBI6zeVIS7ZIJElzV2sf0JJOMNqK0j4LJNCLrsfTRxczJLF-hTkFW3GDQPVmlL_ruc?gv=true"
        id="booking"
      />
      <VideoReel />
      <Testimonials />
    </>
  );
}

export default Home;
