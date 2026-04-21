import { GalleryCarousel, ImageItem } from "../components/GalleryCarousel";

import blackwhitegirl from "@/assets/blackwhitegirl.webp";
import diademuertos from "@/assets/diademuertos.webp";
import gio3 from "@/assets/Gio-3.webp";
import karely3 from "@/assets/Karely-3.webp";
import kim1339 from "@/assets/Kim-1339.webp";
import darathy20 from "@/assets/Darathy-20.webp";

const portraitImages: ImageItem[] = [
  { src: blackwhitegirl, width: 1200, height: 1600 },
  { src: diademuertos, width: 1200, height: 1600 },
  { src: gio3, width: 1200, height: 1600 },
  { src: karely3, width: 1200, height: 1600 },
  { src: kim1339, width: 1200, height: 1600 },
  { src: darathy20, width: 1200, height: 1600 },
];

function Portraits() {
  return (
    <div>
      <GalleryCarousel images={portraitImages} />
    </div>
  );
}

export default Portraits;
