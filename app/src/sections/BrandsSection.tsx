import { motion } from 'framer-motion';
import { brands } from '@/data/cars';

export function BrandsSection() {
  return (
    <section id="brands" className="bg-white py-16 lg:py-24">
      <div className="w-full px-6 lg:px-12">
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {brands.map((brand, index) => (
            <motion.a
              key={brand.name}
              href={brand.link}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
              className="group relative block overflow-hidden rounded-lg"
            >
              {/* Image */}
              <div className="aspect-[3/4] overflow-hidden img-zoom">
                <img
                  src={brand.image}
                  alt={brand.name}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

              {/* Brand Name */}
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="text-2xl md:text-3xl font-light text-white tracking-wide">
                  {brand.name}
                </h3>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
