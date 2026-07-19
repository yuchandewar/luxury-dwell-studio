import { MessageCircle, Phone } from "lucide-react";

export function FloatingCTAs() {
  return (
    <div className="fixed bottom-5 right-5 z-40 flex flex-col gap-3 md:bottom-8 md:right-8">
      <a
        href="https://wa.me/15550142200"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="grid h-14 w-14 place-items-center rounded-full bg-[#25D366] text-white shadow-elegant transition-transform hover:scale-105"
      >
        <MessageCircle className="h-6 w-6" />
      </a>
      <a
        href="tel:+15550142200"
        aria-label="Call us"
        className="grid h-14 w-14 place-items-center rounded-full bg-primary text-primary-foreground shadow-elegant transition-transform hover:scale-105"
      >
        <Phone className="h-5 w-5" />
      </a>
    </div>
  );
}
