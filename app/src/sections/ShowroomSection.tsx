import { useRef } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { CarCard } from '@/components/shared/CarCard';
import { cars } from '@/data/cars';

export function ShowroomSection() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = 340;
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section id="showroom" className="bg-semler-light py-16 lg:py-24">
      <div className="w-full px-6 lg:px-12">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-10">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-section-mobile md:text-section font-light text-black"
          >
            SWIPE VORES SHOWROOM
          </motion.h2>
          <motion.a
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            href="/showroom"
            className="inline-flex items-center gap-3 px-6 py-3 rounded-full border border-black text-black text-sm font-medium hover:bg-black hover:text-white transition-all duration-300 group self-start"
          >
            BESØG SHOWROOM
            <span className="w-8 h-8 rounded-full bg-black text-white flex items-center justify-center group-hover:bg-white group-hover:text-black transition-colors">
              <ArrowRight className="w-4 h-4" />
            </span>
          </motion.a>
        </div>

        {/* Carousel */}
        <div className="relative">
          {/* Navigation Buttons */}
          <button
            onClick={() => scroll('left')}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center text-black hover:bg-black hover:text-white transition-all duration-300 hidden lg:flex"
            aria-label="Scroll left"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={() => scroll('right')}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center text-black hover:bg-black hover:text-white transition-all duration-300 hidden lg:flex"
            aria-label="Scroll right"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          {/* Cards Container */}
          <div
            ref={scrollRef}
            className="flex gap-4 md:gap-6 overflow-x-auto hide-scrollbar snap-x snap-mandatory pb-4"
          >
            {cars.map((car, index) => (
              <CarCard key={car.id} car={car} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
