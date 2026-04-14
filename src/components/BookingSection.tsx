import React from "react";

interface BookingSectionProps {
  url: string;
  title?: string;
  subtitle?: string;
  id?: string;
}

const BookingSection: React.FC<BookingSectionProps> = ({
  url,
  title = "Book a Session",
  subtitle = "Choose a time that works best for you.",
  id,
}) => {
  return (
    <section id={id} className="w-full py-20 px-4">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-semibold">{title}</h2>
          <p className="text-neutral-500 mt-3 text-sm md:text-base">
            {subtitle}
          </p>
        </div>

        {/* Calendar Container */}
        <div className="w-full h-[75vh] md:h-[700px] rounded-2xl overflow-hidden border border-neutral-200 shadow-sm bg-white">
          <iframe
            src={url}
            title="Booking Calendar"
            className="w-full h-full"
            style={{ border: "none" }}
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
};

export default BookingSection;
