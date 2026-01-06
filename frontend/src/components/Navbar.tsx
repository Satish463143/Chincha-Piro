import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Sparkles } from 'lucide-react';
import { Button } from './ui/button';

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Menu', href: '#menu' },
  { name: 'Lounge', href: '#lounge' },
  { name: 'Gallery', href: '#gallery' },
  { name: 'Contact', href: '#contact' },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);

      // Update active section based on scroll position
      const sections = navLinks.map(link => link.href.slice(1));
      for (const section of sections.reverse()) {
        const element = document.getElementById(section);
        if (element && window.scrollY >= element.offsetTop - 200) {
          setActiveSection(section);
          break;
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
          isScrolled
            ? 'bg-background/80 backdrop-blur-2xl border-b border-border/30 py-4'
            : 'bg-transparent py-6'
        }`}
      >
        <div className="container-custom">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <motion.a
              href="#home"
              className="flex items-center gap-3 group"
              whileHover={{ scale: 1.02 }}
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('#home');
              }}
            >
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-primary-foreground" />
              </div>
              <div className="flex flex-col">
                <span className="font-display text-xl font-bold tracking-tight text-gradient">
                  Chincha Piro
                </span>
                <span className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground -mt-1">
                  Lounge & Bar
                </span>
              </div>
            </motion.a>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(link.href);
                  }}
                  className={`relative px-5 py-2.5 text-sm font-medium transition-colors duration-300 rounded-full ${
                    activeSection === link.href.slice(1)
                      ? 'text-primary'
                      : 'text-muted-foreground hover:text-foreground'
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {link.name}
                  {activeSection === link.href.slice(1) && (
                    <motion.div
                      layoutId="activeNav"
                      className="absolute inset-0 bg-primary/10 rounded-full -z-10"
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                </motion.a>
              ))}
            </div>

            {/* CTA Button */}
            <div className="hidden lg:block">
              <Button
                variant="hero"
                onClick={() => scrollToSection('#reservations')}
                className="rounded-full"
              >
                Reserve Now
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              whileTap={{ scale: 0.9 }}
              className="lg:hidden p-2.5 rounded-xl bg-muted/50 backdrop-blur-xl border border-border/50 text-foreground"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </motion.button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-background/98 backdrop-blur-3xl lg:hidden"
          >
            {/* Decorative elements */}
            <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/20 rounded-full blur-[100px]" />
            <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-secondary/20 rounded-full blur-[100px]" />

            <div className="flex flex-col items-center justify-center h-full gap-6 relative z-10">
              {navLinks.map((link, index) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ delay: index * 0.08, duration: 0.4 }}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(link.href);
                  }}
                  className="text-4xl font-display font-semibold text-foreground hover:text-gradient transition-all duration-300"
                >
                  {link.name}
                </motion.a>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ delay: 0.5, duration: 0.4 }}
                className="mt-6"
              >
                <Button
                  variant="hero"
                  size="xl"
                  onClick={() => scrollToSection('#reservations')}
                  className="rounded-full"
                >
                  Reserve Table
                </Button>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
