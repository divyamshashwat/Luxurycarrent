import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { HeroSection } from '@/sections/HeroSection';
import { ShowroomSection } from '@/sections/ShowroomSection';
import { WorkshopSection } from '@/sections/WorkshopSection';
import { BrandsSection } from '@/sections/BrandsSection';
import { LeasingSection } from '@/sections/LeasingSection';
import { AboutSection } from '@/sections/AboutSection';
import { EventsSection } from '@/sections/EventsSection';
import { CtaLinesSection } from '@/sections/CtaLinesSection';

function App() {
  return (
    <div className="min-h-screen bg-black">
      <Header />
      <main>
        <HeroSection />
        <ShowroomSection />
        <WorkshopSection />
        <BrandsSection />
        <LeasingSection />
        <AboutSection />
        <EventsSection />
        <CtaLinesSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
