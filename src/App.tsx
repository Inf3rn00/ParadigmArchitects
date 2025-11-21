import { useState, useEffect } from "react";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";

// Home Page Components
import { Hero } from "./components/home/Hero";
import { Philosophy } from "./components/home/Philosophy";
import { FeaturedWorks } from "./components/home/FeaturedWorks";
import { Mission } from "./components/home/Mission";
import { GlobalReach } from "./components/home/GlobalReach";

// Portfolio Page Components
import { PortfolioGrid } from "./components/portfolio/PortfolioGrid";

// About Page Components
import { AboutHero } from "./components/about/AboutHero";
// import { Timeline } from "./components/about/Timeline";
import { Team } from "./components/about/Team";

// Contact Page Components
import { ContactSection } from "./components/contact/ContactSection";

type Page = "home" | "portfolio" | "about" | "contact";

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>("home");

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [currentPage]);

  const handleNavigate = (page: string) => {
    setCurrentPage(page as Page);
  };

  return (
    <div className="min-h-screen flex flex-col bg-offwhite text-charcoal font-sans">
      <Header currentPage={currentPage} onNavigate={handleNavigate} />

      <main className="grow pt-20">
        {/* HOME PAGE */}
        {currentPage === "home" && (
          <div className="fade-in">
            <Hero onExploreWork={() => setCurrentPage("portfolio")} />
            <Philosophy />
            <FeaturedWorks onViewAll={() => setCurrentPage("portfolio")} />
            <Mission />
            <GlobalReach />
          </div>
        )}

        {/* PORTFOLIO PAGE */}
        {currentPage === "portfolio" && (
          <div className="fade-in">
            <section className="py-32 bg-charcoal text-white">
              <div className="max-w-[1440px] mx-auto px-6 lg:px-12 text-center">
                <h1 className="mb-6 text-5xl lg:text-6xl font-display font-bold tracking-tight">
                  Portfolio
                </h1>
                <p className="text-xl text-silver max-w-2xl mx-auto leading-relaxed">
                  Functionality meets elegance in our diverse collection of
                  architectural projects, each designed to inspire and endure.
                </p>
              </div>
            </section>
            <section className="py-24 bg-white">
              <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
                <PortfolioGrid />
              </div>
            </section>
          </div>
        )}

        {/* ABOUT PAGE */}
        {currentPage === "about" && (
          <div className="fade-in">
            <AboutHero />
            {/* <Timeline /> */}
            <Team />
          </div>
        )}

        {/* CONTACT PAGE */}
        {currentPage === "contact" && (
          <div className="fade-in">
            <section className="py-32 bg-charcoal text-white">
              <div className="max-w-[1440px] mx-auto px-6 lg:px-12 text-center">
                <h1 className="mb-6 text-5xl lg:text-6xl font-display font-bold tracking-tight">
                  Contact Us
                </h1>
                <p className="text-xl text-silver max-w-2xl mx-auto leading-relaxed">
                  Ready to start your next architectural project? Let's discuss
                  how we can transform your vision into reality.
                </p>
              </div>
            </section>
            <ContactSection />
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
}