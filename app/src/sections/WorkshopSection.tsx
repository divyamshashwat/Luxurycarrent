import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const workshops = [
  {
    city: 'KØBENHAVN',
    image: '/images/workshops/workshop-cph.jpg',
    link: 'https://kbh.porsche.dk/Vaerksted/Bestil-tid-paa-vaerkstedet/?simple=true#Iframe',
  },
  {
    city: 'AARHUS',
    image: '/images/workshops/workshop-aarhus.jpg',
    link: 'https://aar.semlerpremium.dk/Vaerksted/Bestil-tid-paa-vaerkstedet/?simple=true#iframe',
  },
];

export function WorkshopSection() {
  return (
    <section id="workshop" className="bg-white py-16 lg:py-24">
      <div className="w-full px-6 lg:px-12">
        {/* Header */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-section-mobile md:text-section font-light text-black mb-10"
        >
          VÆRKSTEDSBOOKING
        </motion.h2>

        {/* Workshop Cards */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {workshops.map((workshop, index) => (
            <motion.a
              key={workshop.city}
              href={workshop.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
              className="group block"
            >
              <div className="relative aspect-[16/10] overflow-hidden rounded-lg img-zoom mb-4">
                <img
                  src={workshop.image}
                  alt={`${workshop.city} workshop`}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
              </div>
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-medium text-black">{workshop.city}</h3>
                <ArrowUpRight className="w-5 h-5 text-black opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
