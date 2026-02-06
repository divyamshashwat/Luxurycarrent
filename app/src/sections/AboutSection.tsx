import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export function AboutSection() {
  return (
    <section id="about" className="bg-semler-light py-16 lg:py-24">
      <div className="w-full px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left - Brand Certifications */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-2xl overflow-hidden bg-black relative">
              {/* Certification badges overlay */}
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-8 p-8">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="text-center"
                >
                  <p className="text-white/60 text-xs uppercase tracking-widest mb-1">Certified by</p>
                  <p className="text-white text-2xl font-light tracking-wide">BENTLEY</p>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="text-center"
                >
                  <div className="w-16 h-16 mx-auto mb-2 rounded-full border-2 border-white/30 flex items-center justify-center">
                    <span className="text-white text-2xl">L</span>
                  </div>
                  <p className="text-white text-lg font-light tracking-wide">SELEZIONE</p>
                  <p className="text-white/60 text-xs">Certified Pre-Owned</p>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  className="text-center"
                >
                  <p className="text-white text-2xl font-light tracking-wide">PORSCHE</p>
                  <p className="text-white/60 text-sm tracking-widest">APPROVED</p>
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Right - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className="text-section-mobile md:text-section font-light text-black mb-6">
              DANMARKS ENESTE
              <br />
              AUTORISEREDE IMPORTØR,
              <br />
              FORHANDLER OG VÆRKSTED
            </h2>
            
            <div className="space-y-4 text-gray-600 leading-relaxed mb-8">
              <p>
                Bliv en del af Semler Premium, hvor grænserne for luksus udfordres, 
                og køreglæde faktisk prioriteres.
              </p>
              <p>
                Semler Premium er den eneste autoriserede forhandler af Porsche, 
                Lamborghini og Bentley i Danmark, og vores engagerede medarbejdere 
                sikrer dig kompetent rådgivning i både salg og værksted, uanset 
                hvilket ikonisk mærke du vælger.
              </p>
              <p>
                Hos os skaber vi ikke blot leasingaftaler - vi kuraterer eksklusive 
                oplevelser, hvor hver bil er et mesterværk. Vores team af specialister 
                står klar til at omsætte dine bildrømme til virkelighed med skræddersyede 
                løsninger, der matcher din passion.
              </p>
              <p>
                Opforsk vores showroom af luksusbiler, hvor kompromisløs elegance 
                og rå kraft smelter sammen i perfekt harmoni.
              </p>
            </div>

            <a
              href="/showroom"
              className="inline-flex items-center gap-3 px-6 py-3 rounded-full border border-black text-black text-sm font-medium hover:bg-black hover:text-white transition-all duration-300 group"
            >
              SE SHOWROOM
              <span className="w-8 h-8 rounded-full bg-black text-white flex items-center justify-center group-hover:bg-white group-hover:text-black transition-colors">
                <ArrowRight className="w-4 h-4" />
              </span>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
