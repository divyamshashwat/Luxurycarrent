import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight } from 'lucide-react';


export function HeroSection() {
  // Carousel logic removed


  return (
    <section className="relative h-screen w-full overflow-hidden bg-black">
      {/* Background Pattern */}
      {/* Video Background */}
      <div className="absolute inset-0 w-full h-full">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-80"
        >
          <source src="/semler-frontpage-bg-video.mp4" type="video/mp4" />
        </video>
        {/* Dimming Overlay */}
        <div className="absolute inset-0 bg-black/20" />
      </div>

      {/* Hero Image Carousel */}


      {/* Center Video Card */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-10">
        <motion.div
          initial={{ clipPath: 'inset(0 0 100% 0)', opacity: 0, y: -20 }}
          animate={{ clipPath: 'inset(0 0 0% 0)', opacity: 1, y: 0 }}
          transition={{
            duration: 1.4,
            ease: [0.4, 0, 0.2, 1],
            delay: 0.1
          }}
          className="relative w-[250px] md:w-[270px] h-[60vh] md:h-[80vh] rounded-[8px] overflow-hidden shadow-2xl pointer-events-auto"
        >
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          >
            <source src="/hero-center-video.mp4" type="video/mp4" />
          </video>
        </motion.div>
      </div>

      {/* Left Text */}
      <div className="absolute inset-0 flex items-center z-20">
        <div className="w-full px-6 lg:px-12">
          <div className="max-w-[1440px] mx-auto">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="w-full -mt-32"
            >
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-hero-mobile md:text-hero font-normal text-white leading-tight"
              >
                PORSCHE, LAMBORGHINI & BENTLEY
              </motion.h1>
            </motion.div>
          </div>
        </div>
      </div>



      {/* Right Side Content */}
      <div className="absolute bottom-0 right-0 p-6 lg:p-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-right"
        >
          <p className="text-white/80 text-sm md:text-base mb-4 max-w-xs ml-auto">
            Semler Premium tilbyder ligeledes flexleasing af alle mærker.
          </p>
          <motion.a
            href="#showroom"
            initial="initial"
            whileHover="hover"
            whileTap={{ scale: 0.98 }}
            className="group relative inline-flex items-center gap-8 pl-8 pr-2 py-2 rounded-full border border-white/20 text-white text-sm font-medium overflow-hidden transition-all duration-300"
          >
            {/* The expanding circle background */}
            <motion.div
              variants={{
                initial: { scale: 0, x: "20%", opacity: 0 },
                hover: { scale: 1, x: "20%", opacity: 1 }
              }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="absolute right-0 top-1/2 -translate-y-1/2 w-[300%] aspect-square bg-white rounded-full z-0 origin-center"
            />

            <span className="relative z-10 transition-colors duration-300 group-hover:text-black font-semibold tracking-wide">
              SE BILER PÅ LAGER
            </span>

            <div className="relative z-10 w-10 h-10 rounded-full bg-white flex items-center justify-center text-black shadow-lg">
              <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
            </div>
          </motion.a>
        </motion.div>
      </div>


    </section>
  );
}
