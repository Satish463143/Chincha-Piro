import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Button } from './ui/button';
import { ArrowRight, Flame } from 'lucide-react';

interface MenuItem {
  id: number;
  name: string;
  description: string;
  price: string;
  category: string;
  image: string;
  featured: boolean;
}

interface MenuData {
  title: string;
  description: string;
  categories: string[];
  items: MenuItem[];
}

interface MenuSectionProps {
  data: MenuData;
}

const MenuSection = ({ data }: MenuSectionProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [activeCategory, setActiveCategory] = useState(data.categories[0] || 'All');
  const [hoveredItem, setHoveredItem] = useState<number | null>(null);

  const filteredItems = activeCategory === 'All'
    ? data.items
    : data.items.filter((item) => item.category === activeCategory);

  return (
    <section id="menu" className="section-padding bg-card relative overflow-hidden noise-overlay">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card to-background pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-[600px] h-[600px] bg-secondary/5 rounded-full blur-[200px] pointer-events-none" />

      <div className="container-custom relative" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-sm font-medium text-secondary uppercase tracking-[0.3em] mb-6">
            The Menu
          </span>
          <h2 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-[1.1]">
            {data.title.split(' ').slice(0, -1).join(' ')}{' '}
            <span className="text-gradient italic">{data.title.split(' ').slice(-1)}</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto text-lg">
            {data.description}
          </p>
        </motion.div>

        {/* Category Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-16"
        >
          {data.categories.map((category) => (
            <motion.button
              key={category}
              onClick={() => setActiveCategory(category)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-500 ${activeCategory === category
                  ? 'bg-gradient-to-r from-primary to-secondary text-primary-foreground shadow-lg glow-pink'
                  : 'bg-muted/30 text-muted-foreground hover:bg-muted/50 hover:text-foreground backdrop-blur-sm'
                }`}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* Menu Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {filteredItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              onMouseEnter={() => setHoveredItem(item.id)}
              onMouseLeave={() => setHoveredItem(null)}
              className="group relative rounded-3xl overflow-hidden glass-card-hover"
            >
              {/* Image */}
              <div className="relative h-72 overflow-hidden">
                <motion.img
                  animate={{
                    scale: hoveredItem === item.id ? 1.1 : 1,
                  }}
                  transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/30 to-transparent" />

                {/* Featured badge */}
                {item.featured && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="absolute top-4 left-4 flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-gradient-to-r from-primary to-secondary text-xs font-semibold text-primary-foreground"
                  >
                    <Flame className="w-3 h-3" />
                    Popular
                  </motion.div>
                )}

                {/* Price overlay */}
                <div className="absolute top-4 right-4 px-4 py-2 rounded-full bg-background/80 backdrop-blur-xl border border-border/30">
                  <span className="text-sm font-semibold text-gradient">{item.price}</span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="font-display text-2xl font-semibold mb-2 group-hover:text-gradient transition-all duration-300">
                  {item.name}
                </h3>
                <p className="text-muted-foreground text-sm">{item.description}</p>

                {/* Hover reveal */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: hoveredItem === item.id ? 1 : 0, y: hoveredItem === item.id ? 0 : 10 }}
                  className="mt-4 flex items-center gap-2 text-primary text-sm font-medium"
                >
                  <span>View Details</span>
                  <ArrowRight className="w-4 h-4" />
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-16"
        >
          <Button variant="brand" size="xl" className="rounded-full group">
            <span>Explore Full Menu</span>
            <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default MenuSection;
