import { Hero } from "../components/home/Hero";
import { Philosophy } from "../components/home/Philosophy";
import { FeaturedWorks } from "../components/home/FeaturedWorks";
import { Mission } from "../components/home/Mission";
import { GlobalReach } from "../components/home/GlobalReach";

interface HomeProps {
    onExploreWork: () => void;
    onViewAll: () => void;
}

export function Home({ onExploreWork, onViewAll }: HomeProps) {
    return (
        <div className="fade-in">
            <Hero onExploreWork={onExploreWork} />
            <Philosophy />
            <FeaturedWorks onViewAll={onViewAll} />
            <Mission />
            <GlobalReach />
        </div>
    );
}
