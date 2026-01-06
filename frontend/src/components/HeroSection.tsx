import { motion, useScroll, useTransform } from 'framer-motion';
import { Button } from './ui/button';
import { ChevronDown, Play, Sparkles } from 'lucide-react';
import { useRef } from 'react';
import heroBg from '@/assets/hero-bg.jpg';

const HeroSection = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.2]);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      ref={ref}
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Parallax Background */}
      <motion.div style={{ y, scale }} className="absolute inset-0 z-0">
        <img
          src={heroBg}
          alt="Chincha Piro Restaurant Lounge"
          className="w-full h-full object-cover"
        />
        {/* Cinematic overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background" />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/30 via-transparent to-secondary/20" />
        <div className="absolute inset-0 bg-background/40" />
      </motion.div>

      {/* Animated Orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[150px]"
        />
        <motion.div
          animate={{
            x: [0, -80, 0],
            y: [0, 80, 0],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-secondary/20 rounded-full blur-[150px]"
        />
      </div>

      {/* Content */}
      <motion.div style={{ opacity }} className="relative z-10 container-custom text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="mb-8 "
          style={{ marginTop: '95px' }}

        >
          <span className="inline-flex items-center  gap-2 px-5 py-2 rounded-full border border-primary/30 bg-primary/5 backdrop-blur-xl text-sm font-medium tracking-wide">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-gradient">Premium Dining Experience</span>
          </span>
        </motion.div>

        {/* Main Headline */}
        <div className="overflow-hidden mb-6">
          <motion.h1
            initial={{ y: 100 }}
            animate={{ y: 0 }}
            transition={{ duration: 1, delay: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="font-display text-6xl sm:text-7xl md:text-8xl lg:text-[10rem] font-bold leading-[0.85] tracking-tight"
          >
            <span className="block text-foreground">Where</span>
          </motion.h1>
        </div>
        <div className="overflow-hidden mb-6 px-4">
          <motion.h1
            initial={{ y: 100 }}
            animate={{ y: 0 }}
            transition={{ duration: 1, delay: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="font-display text-6xl sm:text-7xl md:text-8xl lg:text-[10rem] font-bold leading-[0.85] tracking-tight"
          >
            <span className="text-gradient-animated italic inline-block pr-4">Flavor</span>
          </motion.h1>
        </div>
        <div className="overflow-hidden mb-10">
          <motion.h1
            initial={{ y: 100 }}
            animate={{ y: 0 }}
            transition={{ duration: 1, delay: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="font-display text-6xl sm:text-7xl md:text-8xl lg:text-[10rem] font-bold leading-[0.85] tracking-tight"
          >
            <span className="text-foreground">Meets </span>
            <span className="text-outline">Vibe</span>
          </motion.h1>
        </div>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="text-lg md:text-xl text-muted-foreground max-w-xl mx-auto mb-12 font-light leading-relaxed"
        >
          Authentic Nepali fusion cuisine, handcrafted cocktails, and nights you'll never forget.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Button
            variant="hero"
            size="xl"
            onClick={() => scrollToSection('#menu')}
            className="group relative overflow-hidden"
          >
            <span className="relative z-10 flex items-center gap-2">
              Explore Menu
              <motion.span
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                →
              </motion.span>
            </span>
          </Button>
          <Button
            variant="hero-outline"
            size="xl"
            onClick={() => scrollToSection('#reservations')}
            className="group"
          >
            <Play className="w-4 h-4 mr-2 transition-transform group-hover:scale-110" />
            Reserve Table
          </Button>
        </motion.div>

        {/* Stats Bar */}
        {/* <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.4 }}
          className="mt-20 flex items-center justify-center gap-8 md:gap-16"
        >
          {[
            { value: '4.9★', label: 'Google Rating' },
            { value: '15K+', label: 'Followers' },
            { value: '10+', label: 'Years' },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.5 + index * 0.1 }}
              className="text-center"
            >
              <div className="text-2xl md:text-3xl font-display font-bold text-gradient">{stat.value}</div>
              <div className="text-xs md:text-sm text-muted-foreground uppercase tracking-widest">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div> */}
      </motion.div>

      {/* Scroll Indicator */}
      {/* <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.button
          animate={{ y: [0, 12, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          onClick={() => scrollToSection('#about')}
          className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
          aria-label="Scroll down"
        >
          <span className="text-xs uppercase tracking-[0.3em]">Scroll</span>
          <ChevronDown size={24} />
        </motion.button>
      </motion.div> */}

      {/* Side Text */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 hidden lg:block"
      >
        <div className="flex flex-col items-center gap-4">
          <div className="w-px h-20 bg-gradient-to-b from-transparent via-primary to-transparent" />
          <span className="text-xs uppercase tracking-[0.4em] text-muted-foreground [writing-mode:vertical-lr] rotate-180">
            Est. 2014
          </span>
          <div className="w-px h-20 bg-gradient-to-b from-transparent via-secondary to-transparent" />
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
