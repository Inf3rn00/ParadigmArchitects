import { AboutHero } from "../components/about/AboutHero";
import { Team } from "../components/about/Team";

export function About() {
    return (
        <div className="fade-in">
            <AboutHero />
            <Team />
        </div>
    );
}
