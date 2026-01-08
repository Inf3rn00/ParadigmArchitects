import { ContactSection } from "../components/contact/ContactSection";

export function Contact() {
    return (
        <div className="fade-in">
            <section className="py-32 bg-charcoal text-white">
                <div className="max-w-[1440px] mx-auto px-6 lg:px-12 text-center">
                    <h1 className="mb-6 text-5xl lg:text-6xl font-bold tracking-tight">
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
    );
}
