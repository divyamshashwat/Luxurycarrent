import { Linkedin, Facebook, Instagram } from 'lucide-react';

const informationLinks = [
  { label: 'Forretningsbetingelser', href: '/forretningsbetingelser/' },
  { label: 'Cookies', href: '/cookies/' },
  { label: 'Privatlivspolitik', href: '/privatlivspolitik/' },
];

const brandLinks = [
  { label: 'Porsche', href: '/brands/porsche/' },
  { label: 'Bentley', href: '/brands/bentley/' },
  { label: 'Lamborghini', href: '/brands/lamborghini/' },
];

const semlerLinks = [
  { label: 'Kontakt', href: '/kontakt/' },
  { label: 'Medarbejdere', href: '/medarbejdere/' },
  { label: 'Skift til os', href: '/skift-til-os/' },
  { label: 'Flexleasing', href: '/flexleasing/' },
  { label: 'Om Semler Premium', href: '/om-semler-premium/' },
];

const socialLinks = [
  { label: 'LinkedIn', href: 'https://dk.linkedin.com/company/semler-premium-dk', icon: Linkedin },
  { label: 'Facebook', href: 'https://www.facebook.com/SemlerPremiumDenmark/', icon: Facebook },
  { label: 'Instagram', href: 'https://www.instagram.com/semlerpremium/', icon: Instagram },
];

export function Footer() {
  return (
    <footer id="contact" className="bg-white text-black py-16 lg:py-20">
      <div className="w-full px-6 lg:px-12">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Company Info */}
          <div className="col-span-2 md:col-span-1">
            <div className="flex flex-col mb-6">
              <span className="text-black text-lg font-light tracking-[0.2em]">
                SEMLER
              </span>
              <span className="text-black text-[10px] font-light tracking-[0.3em]">
                PREMIUM
              </span>
            </div>
            <div className="text-sm text-gray-600 space-y-1">
              <p className="font-medium text-black">Semler Premium Danmark</p>
              <p>Banevingen 6</p>
              <p>2200 København N</p>
            </div>
          </div>

          {/* Information */}
          <div>
            <h4 className="text-sm font-medium mb-4 tracking-wide">Information</h4>
            <ul className="space-y-2">
              {informationLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-gray-600 hover:text-black transition-colors link-underline"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Brands */}
          <div>
            <h4 className="text-sm font-medium mb-4 tracking-wide">Brands</h4>
            <ul className="space-y-2">
              {brandLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-gray-600 hover:text-black transition-colors link-underline"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Semler Premium */}
          <div>
            <h4 className="text-sm font-medium mb-4 tracking-wide">Semler Premium</h4>
            <ul className="space-y-2">
              {semlerLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-gray-600 hover:text-black transition-colors link-underline"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-sm font-medium mb-4 tracking-wide">Følg os</h4>
            <div className="flex gap-4">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-black transition-colors"
                  aria-label={link.label}
                >
                  <link.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-16 pt-8 border-t border-gray-200">
          <p className="text-xs text-gray-500 text-center">
            © 2025 Semler Gruppen - Alle rettigheder forbeholdes
          </p>
        </div>
      </div>
    </footer>
  );
}
