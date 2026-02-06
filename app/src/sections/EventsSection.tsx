import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { EventCard } from '@/components/shared/EventCard';
import { events } from '@/data/cars';

export function EventsSection() {
  return (
    <section id="events" className="bg-semler-light py-16 lg:py-24">
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
            KOMMENDE EVENTS
          </motion.h2>
        </div>

        {/* Events Grid */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 mb-10">
          {events.map((event, index) => (
            <EventCard key={event.id} event={event} index={index} />
          ))}
        </div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center"
        >
          <a
            href="/events"
            className="inline-flex items-center gap-3 px-6 py-3 rounded-full border border-black text-black text-sm font-medium hover:bg-black hover:text-white transition-all duration-300 group"
          >
            Se alle events
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
