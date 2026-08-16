import AboutSection from './components/AboutSection';
import Background from './components/Background';
import Cards from './components/Cards';
import Divider from './components/Divider';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Navbar from './components/Navbar';

/**
 * App — root component.
 *
 * Layout mirrors the original design exactly:
 *   Background glow orbs + grain
 *   └─ max-w-6xl content column
 *      ├─ Navbar
 *      ├─ Hero
 *      ├─ Divider
 *      ├─ Cards (2-col grid)
 *      ├─ AboutSection
 *      └─ Footer
 */
export default function App() {
  return (
    <div className="min-h-screen bg-[#08090B] text-[#F5F4F1] relative overflow-hidden">
      <Background />

      <div className="relative max-w-6xl mx-auto px-6 md:px-10">
        <Navbar />
        <Hero />
        <Divider />
        <Cards />
        <AboutSection />
        <Footer />
      </div>
    </div>
  );
}
