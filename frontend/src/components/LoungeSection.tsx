import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { Sparkles, Music, Clock, ArrowUpRight } from 'lucide-react';
import lounge1 from '@/assets/lounge-1.jpg';
import lounge2 from '@/assets/lounge-2.jpg';
import cocktail1 from '@/assets/cocktail-1.jpg';

const features = [
  {
    icon: Sparkles,
    title: 'Signature Cocktails',
    description: 'Expertly crafted with premium spirits',
    color: 'from-primary to-pink-400',
  },
  {
    icon: Music,
    title: 'Live Entertainment',
    description: 'Weekly DJ sets and performances',
    color: 'from-secondary to-orange-400',
  },
  {
    icon: Clock,
    title: 'Late Night Vibes',
    description: 'Open until 2 AM on weekends',
    color: 'from-primary to-secondary',
  },
];

const LoungeSection = () => {
  const ref = useRef(null);
  const containerRef = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -50]);

  return (
    <section id="lounge" ref={containerRef} className="section-padding bg-background relative overflow-hidden">
      {/* Animated gradient mesh */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            background: [
              'radial-gradient(ellipse at 20% 50%, hsla(315, 100%, 50%, 0.15) 0%, transparent 50%)',
              'radial-gradient(ellipse at 80% 50%, hsla(315, 100%, 50%, 0.15) 0%, transparent 50%)',
              'radial-gradient(ellipse at 20% 50%, hsla(315, 100%, 50%, 0.15) 0%, transparent 50%)',
            ],
          }}
          transition={{ duration: 10, repeat: Infinity }}
          className="absolute inset-0"
        />
        <motion.div
          animate={{
            background: [
              'radial-gradient(ellipse at 80% 30%, hsla(25, 100%, 60%, 0.1) 0%, transparent 50%)',
              'radial-gradient(ellipse at 20% 70%, hsla(25, 100%, 60%, 0.1) 0%, transparent 50%)',
              'radial-gradient(ellipse at 80% 30%, hsla(25, 100%, 60%, 0.1) 0%, transparent 50%)',
            ],
          }}
          transition={{ duration: 15, repeat: Infinity }}
          className="absolute inset-0"
        />
      </div>

      <div className="container-custom relative" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <span className="inline-block text-sm font-medium text-primary uppercase tracking-[0.3em] mb-6">
            The Experience
          </span>
          <h2 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-[1.1]">
            Lounge &{' '}
            <span className="text-gradient italic">Bar</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto text-lg">
            Where the night comes alive. Immerse yourself in sophistication, handcrafted cocktails, and curated beats.
          </p>
        </motion.div>

        {/* Bento Grid Layout */}
        <div className="grid md:grid-cols-3 gap-4 lg:gap-6 mb-16">
          {/* Large featured image */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="md:col-span-2 md:row-span-2 relative rounded-3xl overflow-hidden group h-80 md:h-auto min-h-[400px]"
          >
            <motion.img
              style={{ y: y1 }}
              src={lounge1}
              alt="Lounge Interior"
              className="w-full h-[120%] object-cover absolute top-0"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            
            <div className="absolute bottom-0 left-0 right-0 p-8">
              <h3 className="font-display text-3xl md:text-4xl font-bold mb-3">Premium Lounge</h3>
              <p className="text-muted-foreground text-lg max-w-md">
                Intimate ambiance designed for unforgettable conversations
              </p>
            </div>

            {/* Floating badge */}
            <div className="absolute top-6 right-6 px-4 py-2 rounded-full bg-primary/20 backdrop-blur-xl border border-primary/30 text-primary text-sm font-medium">
              Live Music Fridays
            </div>
          </motion.div>

          {/* Cocktail image */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative rounded-3xl overflow-hidden group h-64 md:h-auto"
          >
            <motion.img
              style={{ y: y2 }}
              src={cocktail1}
              alt="Signature Cocktail"
              className="w-full h-[120%] object-cover absolute top-0"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6">
              <span className="text-xs uppercase tracking-widest text-primary mb-2 block">Craft</span>
              <h3 className="font-display text-xl font-bold">Artisan Cocktails</h3>
            </div>
          </motion.div>

          {/* Bar experience */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative rounded-3xl overflow-hidden group h-64 md:h-auto"
          >
            <img
              src={lounge2}
              alt="Bar Experience"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6">
              <span className="text-xs uppercase tracking-widest text-secondary mb-2 block">Mixology</span>
              <h3 className="font-display text-xl font-bold">Expert Bartenders</h3>
            </div>
          </motion.div>
        </div>

        {/* Features Grid */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid md:grid-cols-3 gap-6"
        >
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
              className="group relative glass-card-hover rounded-3xl p-8 cursor-pointer"
            >
              <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.color} mb-6 group-hover:scale-110 transition-transform duration-500`}>
                <feature.icon className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="font-display text-2xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
              
              <ArrowUpRight className="absolute top-8 right-8 w-5 h-5 text-muted-foreground opacity-0 group-hover:opacity-100 transition-all duration-300" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default LoungeSection;
