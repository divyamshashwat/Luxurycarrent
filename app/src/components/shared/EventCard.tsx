import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import type { EventData } from '@/types';

interface EventCardProps {
  event: EventData;
  index: number;
}

export function EventCard({ event, index }: EventCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.5,
        delay: index * 0.1,
        ease: [0.4, 0, 0.2, 1],
      }}
      className="group"
    >
      <a href={event.link} className="block">
        {/* Image */}
        <div className="relative aspect-[16/10] overflow-hidden rounded-lg img-zoom mb-4">
          <img
            src={event.image}
            alt={event.title}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Content */}
        <div>
          <p className="text-sm text-gray-500 mb-2">{event.date}</p>
          <h3 className="text-xl font-medium text-black mb-2 group-hover:text-gray-600 transition-colors">
            {event.title}
          </h3>
          <p className="text-sm text-gray-600 mb-3 line-clamp-2">
            {event.description}
          </p>
          <span className="inline-flex items-center gap-2 text-sm font-medium text-black link-underline">
            læs mere
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </span>
        </div>
      </a>
    </motion.div>
  );
}
