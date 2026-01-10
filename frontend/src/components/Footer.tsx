import { motion } from 'framer-motion';
import { Instagram, Facebook, Twitter, Youtube, Sparkles, ArrowUpRight } from 'lucide-react';

const footerLinks = [
  {
    title: 'Navigate',
    links: [
      { name: 'Home', href: '#home' },
      { name: 'About', href: '#about' },
      { name: 'Menu', href: '#menu' },
      { name: 'Gallery', href: '#gallery' },
    ],
  },
  {
    title: 'Experience',
    links: [
      { name: 'Lounge', href: '#lounge' },
      { name: 'Events', href: '#reservations' },
      { name: 'Reservations', href: '#reservations' },
      { name: 'Contact', href: '#contact' },
    ],
  },
];

const socialLinks = [
  { icon: Instagram, href: 'https://instagram.com/chinchapiro', label: 'Instagram' },
  { icon: Facebook, href: 'https://facebook.com/chinchapiro', label: 'Facebook' },
  { icon: Twitter, href: 'https://twitter.com/chinchapiro', label: 'Twitter' },
  { icon: Youtube, href: 'https://youtube.com/chinchapiro', label: 'Youtube' },
];

const Footer = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-card border-t border-border/30 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute bottom-0 left-1/4 w-[500px] h-[300px] bg-primary/5 rounded-full blur-[150px] pointer-events-none" />
      
      <div className="container-custom py-20 relative">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            {/* Logo */}
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                <Sparkles className="w-6 h-6 text-primary-foreground" />
              </div>
              <div>
                <h3 className="font-display text-2xl font-bold text-gradient">
                  Chincha Piro
                </h3>
                <span className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
                  Lounge & Bar
                </span>
              </div>
            </div>

            <p className="text-muted-foreground mb-8 max-w-md leading-relaxed">
              Where flavor meets vibe. Experience authentic Nepali fusion cuisine, 
              crafted cocktails, and unforgettable nights in the heart of Kathmandu.
            </p>

            {/* Social Links */}
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  whileHover={{ scale: 1.1, y: -3 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-12 h-12 rounded-xl glass-card flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                >
                  <social.icon size={20} />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Links */}
          {footerLinks.map((section, index) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 * (index + 1) }}
              viewport={{ once: true }}
            >
              <h4 className="text-sm font-semibold uppercase tracking-widest text-muted-foreground mb-6">
                {section.title}
              </h4>
              <ul className="space-y-4">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      onClick={(e) => {
                        e.preventDefault();
                        scrollToSection(link.href);
                      }}
                      className="group flex items-center gap-2 text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <span>{link.name}</span>
                      <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 pt-8 border-t border-border/30 flex flex-col md:flex-row items-center justify-between gap-6"
        >
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Chincha Piro Restaurant Lounge & Bar. All rights reserved.
          </p>
          
          <div className="flex items-center gap-6">
            <p className="text-sm text-muted-foreground flex items-center gap-2">
              Design and Developed by <a href="https://bleedingtech.com.np" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Bleeding Tech Pvt. Ltd.</a>
            </p>            
            {/* Back to top button */}
            <motion.button
              onClick={scrollToTop}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="w-10 h-10 rounded-full glass-card flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all duration-300"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="m18 15-6-6-6 6"/>
              </svg>
            </motion.button>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
