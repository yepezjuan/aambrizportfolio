import { Hero } from "../components/Hero";
import { Pricing } from "../components/Pricing";
import { GalleryCarousel } from "../components/GalleryCarousel";
import { About } from "../components/About";
import { HowItWorks } from "../components/HowItWorks";
import BookingSection from "../components/BookingSection";
//import "./App.css";

function Home() {
  return (
    <>
      <Hero />
      <GalleryCarousel />
      <About />
      <HowItWorks />
      <Pricing />
      <BookingSection
        url="https://calendar.google.com/calendar/appointments/schedules/AcZssZ3G7q4Kw6bBI6zeVIS7ZIJElzV2sf0JJOMNqK0j4LJNCLrsfTRxczJLF-hTkFW3GDQPVmlL_ruc?gv=true"
        id="booking"
      />
    </>
  );
}

export default Home;
