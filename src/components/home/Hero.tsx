import { ArrowRight } from "lucide-react";
import { ImageWithFallback } from "../figma/ImageWithFallback";

interface HeroProps {
  onExploreWork: () => void;
}

export function Hero({ onExploreWork }: HeroProps) {
  return (
    <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1695067440629-b5e513976100?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBhcmNoaXRlY3R1cmUlMjBidWlsZGluZ3xlbnwxfHx8fDE3NjM1MDUzMTV8MA&ixlib=rb-4.1.0&q=80&w=1080"
          alt="Modern Architecture"
          className="w-full h-full object-cover"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-[1440px] mx-auto px-6 lg:px-12 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-white mb-6">
            Cultivating Legacies that Stand the Test of Time.
          </h1>
          <p className="text-xl text-gray-200 mb-12 max-w-2xl mx-auto">
            Redefining the landscape of architectural excellence through
            innovation and minimalist design.
          </p>
          <button
            onClick={onExploreWork}
            className="group relative inline-flex items-center gap-3 bg-[var(--color-copper)] text-white px-8 py-4 overflow-hidden"
          >
            <span className="relative z-10 tracking-wide">
              Explore Our Work
            </span>
            <ArrowRight
              size={20}
              className="relative z-10 transition-transform duration-150 group-hover:translate-x-1"
            />
            <span className="absolute inset-0 bg-[var(--color-bronze)] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-150 origin-left"></span>
          </button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-10">
        <div className="w-[2px] h-16 bg-gradient-to-b from-transparent via-white to-transparent animate-pulse"></div>
      </div>
    </section>
  );
}
