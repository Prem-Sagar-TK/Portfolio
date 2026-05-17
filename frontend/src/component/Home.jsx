import { Navbar } from "@/component/Navbar";
import { Hero } from "@/component/Hero";
import { About } from "@/component/About";
import { Skills } from "@/component/Skills";
import { Projects } from "@/component/Projects";
import { Leadership } from "@/component/Leadership";
import { Contact } from "@/component/Contacts";
import { Footer } from "@/component/Footer";

export default function Home() {
    return (
        <>
            <Navbar />
            <main>
                <Hero />
                <About />
                <Skills />
                <Projects />
                <Leadership />
                <Contact />
            </main>
            <Footer />
        </>
    );
}