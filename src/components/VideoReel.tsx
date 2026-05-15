import { useState, useRef, useEffect } from "react";

const VIDEOS = ["/videos/reel-1.mp4", "/videos/reel-2-new.mp4"];
const SWIPE_THRESHOLD = 50;

export const VideoReel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const dragStartX = useRef<number | null>(null);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  useEffect(() => {
    videoRefs.current.forEach((video, i) => {
      if (!video) return;
      if (i === currentIndex) {
        video.play().catch(() => {});
      } else {
        video.pause();
      }
    });
  }, [currentIndex]);

  const startDrag = (x: number) => {
    dragStartX.current = x;
  };

  const endDrag = (x: number) => {
    if (dragStartX.current === null) return;
    const diff = dragStartX.current - x;
    dragStartX.current = null;
    if (Math.abs(diff) < SWIPE_THRESHOLD) return;
    if (diff > 0 && currentIndex < VIDEOS.length - 1)
      setCurrentIndex(currentIndex + 1);
    else if (diff < 0 && currentIndex > 0) setCurrentIndex(currentIndex - 1);
  };

  return (
    <section className="container py-24 sm:py-32">
      <div className="flex flex-col items-center gap-4">
        <div
          className="w-full max-w-sm aspect-[9/16] rounded-2xl overflow-hidden bg-muted cursor-grab active:cursor-grabbing select-none"
          onTouchStart={(e) => startDrag(e.targetTouches[0].clientX)}
          onTouchEnd={(e) => endDrag(e.changedTouches[0].clientX)}
          onMouseDown={(e) => startDrag(e.clientX)}
          onMouseUp={(e) => endDrag(e.clientX)}
          onMouseLeave={() => {
            dragStartX.current = null;
          }}
        >
          <div
            className="flex h-full transition-transform duration-300 ease-in-out"
            style={{
              width: `${VIDEOS.length * 100}%`,
              transform: `translateX(-${currentIndex * (100 / VIDEOS.length)}%)`,
            }}
          >
            {VIDEOS.map((src, i) => (
              <div
                key={i}
                className="h-full flex-shrink-0"
                style={{ width: `${100 / VIDEOS.length}%` }}
              >
                <video
                  ref={(el) => {
                    videoRefs.current[i] = el;
                  }}
                  src={src}
                  muted
                  loop
                  playsInline
                  preload={i === 0 ? "auto" : "none"}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>

        <div className="flex items-center gap-2">
          {VIDEOS.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentIndex(i)}
              aria-label={`Video ${i + 1}`}
              className={`rounded-full transition-all duration-300 ${
                i === currentIndex
                  ? "w-4 h-2 bg-foreground"
                  : "w-2 h-2 bg-muted-foreground/40"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
