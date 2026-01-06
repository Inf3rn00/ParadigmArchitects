import { useState, useEffect } from "react";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";

// Pages
import { Home } from "./pages/Home";
import { Portfolio } from "./pages/Portfolio";
import { About } from "./pages/About";
import { Contact } from "./pages/Contact";


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
        {currentPage === "home" && (
          <Home
            onExploreWork={() => setCurrentPage("portfolio")}
            onViewAll={() => setCurrentPage("portfolio")}
          />
        )}

        {currentPage === "portfolio" && <Portfolio />}

        {currentPage === "about" && <About />}

        {currentPage === "contact" && <Contact />}
      </main>

      <Footer />
    </div>
  );
}