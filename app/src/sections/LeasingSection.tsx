import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export function LeasingSection() {
  const [plateNumber, setPlateNumber] = useState<string[]>(['', '', '', '', '', '', '']);
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  const handleChange = (index: number, value: string) => {
    if (value.length > 1) return;
    
    const newPlate = [...plateNumber];
    newPlate[index] = value.toUpperCase();
    setPlateNumber(newPlate);

    // Auto-focus next input
    if (value && index < 6) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (index: number, e: React.KeyboardEvent) => {
    if (e.key === 'Backspace' && !plateNumber[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handleSubmit = () => {
    const plate = plateNumber.join('');
    if (plate.length === 7) {
      alert(`Søger efter bil med nummerplade: ${plate}`);
    }
  };

  return (
    <section
      id="leasing"
      className="relative py-16 lg:py-24 overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="/images/cars/green-porsche.jpg"
          alt="Green Porsche"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-white/70 text-sm uppercase tracking-wider mb-2">
              NY LEASINGAFTALE?
            </p>
            <h2 className="text-section-mobile md:text-section font-light text-white mb-6">
              SKIFT TIL SEMLER
              <br />
              PREMIUM
            </h2>
            <p className="text-white/80 text-base leading-relaxed max-w-md">
              Ja, det tager måske 30 sek., men det kunne sagtens være dét værd at skifte 
              leasingaftale til Semler Premium. Vi står nemlig konkurrencedygtigt på 
              markedet med Volkswagen Semler Finans som stærk og særdeles fordelagtig 
              finanspartner.
            </p>
          </motion.div>

          {/* Right Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white rounded-2xl p-8 lg:p-10"
          >
            <p className="text-gray-600 text-sm mb-6">
              Indtast din bilinformation, så tager vi en dialog sammen.
            </p>
            <p className="text-black font-medium mb-4">
              Indtast din nummerplade
            </p>

            {/* License Plate Inputs */}
            <div className="flex gap-2 mb-6">
              {plateNumber.map((char, index) => (
                <input
                  key={index}
                  ref={(el) => { inputRefs.current[index] = el; }}
                  type="text"
                  value={char}
                  onChange={(e) => handleChange(index, e.target.value)}
                  onKeyDown={(e) => handleKeyDown(index, e)}
                  className="w-10 h-12 md:w-12 md:h-14 text-center text-lg md:text-xl font-semibold border-2 border-gray-200 rounded-lg focus:border-black focus:outline-none transition-colors uppercase"
                  maxLength={1}
                  aria-label={`Nummerplade tegn ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={handleSubmit}
              className="w-full flex items-center justify-center gap-3 px-6 py-4 rounded-full bg-black text-white text-sm font-medium hover:bg-gray-800 transition-colors group"
            >
              HENT MIN BIL
              <span className="w-8 h-8 rounded-full bg-white text-black flex items-center justify-center group-hover:bg-gray-200 transition-colors">
                <ArrowRight className="w-4 h-4" />
              </span>
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
