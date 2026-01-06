import { PortfolioGrid } from "../components/portfolio/PortfolioGrid";

export function Portfolio() {
    return (
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
    );
}
