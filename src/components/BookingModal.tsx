import { useState } from "react";

interface BookingModalProps {
  url: string;
  buttonLabel?: string;
}

const BookingModal: React.FC<BookingModalProps> = ({
  url,
  buttonLabel = "Book a Session",
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Trigger Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="px-6 py-3 rounded-2xl bg-black text-white text-sm font-medium hover:opacity-80 transition"
      >
        {buttonLabel}
      </button>

      {/* Modal */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          {/* Overlay */}
          <div
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={() => setIsOpen(false)}
          />

          {/* Modal Content */}
          <div className="relative z-10 w-[95%] max-w-4xl h-[80vh] bg-white rounded-2xl shadow-xl overflow-hidden">
            {/* Close Button */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-3 right-3 z-20 px-3 py-1 text-sm rounded-full bg-black text-white"
            >
              ✕
            </button>

            {/* Iframe Booking */}
            <iframe
              src={url}
              className="w-full h-full"
              style={{ border: "none" }}
              loading="lazy"
              title="Booking"
            />
          </div>
        </div>
      )}
    </>
  );
};

export default BookingModal;
