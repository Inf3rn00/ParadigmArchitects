import { Hero } from "../components/home/Hero";
import { Philosophy } from "../components/home/Philosophy";
import { FeaturedWorks } from "../components/home/FeaturedWorks";
import { Mission } from "../components/home/Mission";
import { GlobalReach } from "../components/home/GlobalReach";

export function Home() {
    return (
        <div className="fade-in">
            <Hero />
            <Philosophy />
            <FeaturedWorks />
            <Mission />
            <GlobalReach />
        </div>
    );
}
