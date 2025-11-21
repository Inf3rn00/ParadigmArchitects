import { ArrowRight } from "lucide-react";
import { ImageWithFallback } from "../figma/ImageWithFallback";
import { ChevronDown } from "lucide-react";

interface HeroProps {
  onExploreWork: () => void;
}

export function Hero({ onExploreWork }: HeroProps) {
  return (
    <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <ImageWithFallback
          src="./heroBg.jpg"
          alt="Modern Architecture"
          className="w-full h-full object-cover"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-linear-to-b from-charcoal/70 via-charcoal/50 to-charcoal/70"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-[1440px] mx-auto px-6 lg:px-12 text-center">
        <div className="max-w-4xl mx-auto fade-in">
          <h1 className="text-white mb-8 text-4xl lg:text-5xl xl:text-6xl font-display font-bold tracking-tight leading-tight">
            Cultivating Legacies that Stand the Test of Time.
          </h1>
          <p className="text-xl lg:text-2xl text-concrete mb-12 max-w-3xl mx-auto leading-relaxed">
            Redefining the landscape of architectural excellence through
            innovation and minimalist design.
          </p>
          <button
            onClick={onExploreWork}
            className="group relative inline-flex items-center gap-3 bg-copper hover:bg-copper-light text-white px-10 py-4 overflow-hidden transition-all duration-300 ease-out hover:scale-105 focus:scale-105 focus:outline-none focus:ring-2 focus:ring-copper-light focus:ring-offset-2 focus:ring-offset-charcoal/30  rounded-md cursor-pointer"
          >
            <span className="relative z-10 tracking-wide font-semibold text-lg">
              Explore Our Work
            </span>
            <ArrowRight
              size={20}
              className="relative z-10 transition-transform duration-300 group-hover:translate-x-1 group-focus:translate-x-1"
            />
            <span className="absolute inset-0 bg-copper-light transform scale-x-0 group-hover:scale-x-100 group-focus:scale-x-100 transition-transform duration-300 origin-left"></span>
          </button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-10">
        <div className="flex flex-col items-center gap-2">
          <ChevronDown size={24} className="text-concrete animate-bounce" />
          <div className="w-[1px] h-12 bg-gradient-to-b from-transparent via-concrete to-transparent animate-pulse"></div>
        </div>
      </div>
    </section>
  );
}
