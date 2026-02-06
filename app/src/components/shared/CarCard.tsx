import { motion } from 'framer-motion';
import type { CarData } from '@/types';

interface CarCardProps {
  car: CarData;
  index: number;
}

export function CarCard({ car, index }: CarCardProps) {
  const formatPrice = (price: number) => {
    return price.toLocaleString('en-IN');
  };

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
      className="flex-shrink-0 w-[280px] md:w-[320px] snap-start"
    >
      <div className="bg-white rounded-lg overflow-hidden shadow-card hover:shadow-card-hover transition-shadow duration-300 group">
        {/* Image */}
        <div className="relative aspect-[4/3] overflow-hidden img-zoom">
          <img
            src={car.image}
            alt={`${car.brand} ${car.model}`}
            className="w-full h-full object-cover"
          />
          {/* Location Badge */}
          <div className="absolute top-3 left-3">
            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-black/70 text-white backdrop-blur-sm">
              {car.location}
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="p-4">
          <p className="text-xs text-gray-500 uppercase tracking-wider mb-1">
            {car.brand}
          </p>
          <h3 className="text-lg font-medium text-black mb-3">
            {car.model}
          </h3>
          <div className="flex items-baseline gap-1 mb-4">
            <span className="text-sm text-gray-500">₹</span>
            <span className="text-xl font-semibold text-black">
              {formatPrice(car.price)}
            </span>
            <span className="text-sm text-gray-500 ml-1">per month</span>
          </div>
          <a
            href="/video-player.html"
            className="block w-full py-2.5 px-4 rounded-full border border-gray-300 text-sm font-medium text-black text-center hover:bg-black hover:text-white hover:border-black transition-all duration-300"
          >
            Buy Now
          </a>
        </div>
      </div>
    </motion.div>
  );
}
