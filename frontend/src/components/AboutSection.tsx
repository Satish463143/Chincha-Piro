import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { ArrowUpRight, LucideIcon } from 'lucide-react';

interface Feature {
  icon: LucideIcon;
  title: string;
  description: string;
}

interface AboutData {
  title: string;
  description: string;
  imageMain: string;
  imageSmall: string;
  features: Feature[];
}

interface AboutSectionProps {
  data: AboutData;
}

const AboutSection = ({ data }: AboutSectionProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="about" className="section-padding bg-background relative overflow-hidden noise-overlay">
      {/* Large decorative text */}
      <div className="absolute top-20 left-0 right-0 flex justify-center pointer-events-none overflow-hidden opacity-[0.03]">
        <span className="font-display text-[20vw] font-bold whitespace-nowrap">
          CHINCHA PIRO
        </span>
      </div>

      {/* Gradient orbs */}
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[200px] pointer-events-none" />

      <div className="container-custom relative" ref={ref}>
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Images */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="relative"
          >
            {/* Main image */}
            <div className="relative z-10 rounded-3xl overflow-hidden group">
              <motion.img
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.7 }}
                src={data.imageMain}
                alt="Venue Ambience"
                className="w-full h-[550px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-60" />
            </div>

            {/* Floating secondary image */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="absolute -bottom-8 -right-8 w-48 h-64 rounded-2xl overflow-hidden border-4 border-background shadow-2xl z-20 hidden md:block"
            >
              <img
                src={data.imageSmall}
                alt="Detail"
                className="w-full h-full object-cover"
              />
            </motion.div>

            {/* Experience badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="absolute top-8 -left-6 z-20 hidden md:block"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-primary to-secondary rounded-full blur-xl opacity-50" />
                <div className="relative bg-gradient-to-br from-primary to-secondary p-8 rounded-full text-center glow-pink">
                  <span className="block text-5xl font-display font-bold text-primary-foreground">10+</span>
                  <span className="text-xs uppercase tracking-widest text-primary-foreground/90">Years</span>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="inline-block text-sm font-medium text-primary uppercase tracking-[0.3em] mb-6"
            >
              Our Story
            </motion.span>

            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-8 leading-[1.1]">
              <span className="block">{data.title.split(' ').slice(0, 3).join(' ')}</span>
              <span className="text-gradient italic">{data.title.split(' ').slice(3).join(' ')}</span>
            </h2>

            <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
              {data.description}
            </p>

            {/* Features */}
            <div className="space-y-4">
              {data.features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, x: 40 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                  className="group flex items-center gap-4 p-4 rounded-2xl glass-card-hover cursor-pointer"
                >
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center group-hover:from-primary group-hover:to-secondary transition-all duration-500">
                    <feature.icon className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-colors duration-500" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-lg mb-0.5">{feature.title}</h3>
                    <p className="text-muted-foreground text-sm">{feature.description}</p>
                  </div>
                  <ArrowUpRight className="w-5 h-5 text-muted-foreground opacity-0 group-hover:opacity-100 group-hover:text-primary transition-all duration-300" />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
