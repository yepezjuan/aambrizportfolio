export const VideoReel = () => {
  return (
    <section className="container py-24 sm:py-32">
      <div className="flex justify-center">
        <div className="w-full max-w-sm aspect-[9/16] rounded-2xl overflow-hidden bg-muted">
          <video
            src="/videos/reel-1.mp4"
            autoPlay
            muted
            loop
            playsInline
            preload="none"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};
